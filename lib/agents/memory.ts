import { createClient } from "@/lib/supabase/server"
import { openai } from "@ai-sdk/openai"
import { embed } from "ai"

export class EpisodicMemory {
  private userId: string
  private agentType: string
  private capacity = 100

  constructor(userId: string, agentType: string) {
    this.userId = userId
    this.agentType = agentType
  }

  async store(state: string, action: string, outcome: string) {
    const supabase = await createClient()

    const { embedding } = await embed({
      model: openai.embedding("text-embedding-3-small"),
      value: `${state} ${action} ${outcome}`,
    })

    const episode = {
      user_id: this.userId,
      agent_type: this.agentType,
      state,
      action,
      outcome,
      embedding,
      timestamp: new Date().toISOString(),
    }

    const { error } = await supabase.from("agent_episodic_memory").insert(episode)

    if (error) {
      console.error("[v0] Error storing episode:", error)
    }

    await this.pruneOldEpisodes()
  }

  async retrieveSimilar(query: string, k = 3) {
    const supabase = await createClient()

    const { embedding: queryEmbedding } = await embed({
      model: openai.embedding("text-embedding-3-small"),
      value: query,
    })

    const { data, error } = await supabase.rpc("match_episodes", {
      query_embedding: queryEmbedding,
      match_threshold: 0.7,
      match_count: k,
      p_user_id: this.userId,
      p_agent_type: this.agentType,
    })

    if (error) {
      console.error("[v0] Error retrieving episodes:", error)
      return []
    }

    return data || []
  }

  async getRecent(n = 5) {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from("agent_episodic_memory")
      .select("*")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .order("timestamp", { ascending: false })
      .limit(n)

    if (error) {
      console.error("[v0] Error getting recent episodes:", error)
      return []
    }

    return data || []
  }

  private async pruneOldEpisodes() {
    const supabase = await createClient()

    const { data: episodes } = await supabase
      .from("agent_episodic_memory")
      .select("id")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .order("timestamp", { ascending: false })

    if (episodes && episodes.length > this.capacity) {
      const idsToDelete = episodes.slice(this.capacity).map((e: { id: string }) => e.id)
      await supabase.from("agent_episodic_memory").delete().in("id", idsToDelete)
    }
  }

  /**
   * Prunes oldest episodes when capacity is exceeded
   * Added type annotation to fix TypeScript build error
   */
  async prune(): Promise<void> {
    await this.pruneOldEpisodes()
  }
}

export class SemanticMemory {
  private userId: string
  private agentType: string

  constructor(userId: string, agentType: string) {
    this.userId = userId
    this.agentType = agentType
  }

  async updatePreference(key: string, value: number, weight = 1.0) {
    const supabase = await createClient()

    const { data: current } = await supabase
      .from("agent_semantic_memory")
      .select("value")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .eq("key", key)
      .single()

    const currentValue = current?.value || 0
    const newValue = 0.9 * currentValue + 0.1 * weight * value

    await supabase.from("agent_semantic_memory").upsert({
      user_id: this.userId,
      agent_type: this.agentType,
      key,
      value: newValue,
      updated_at: new Date().toISOString(),
    })
  }

  async recordPattern(context: string, action: string, success: boolean) {
    const supabase = await createClient()
    const patternKey = `${context}_${action}`

    const { data: current } = await supabase
      .from("agent_patterns")
      .select("*")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .eq("pattern_key", patternKey)
      .single()

    const successCount = (current?.success_count || 0) + (success ? 1 : 0)
    const totalCount = (current?.total_count || 0) + 1

    await supabase.from("agent_patterns").upsert({
      user_id: this.userId,
      agent_type: this.agentType,
      pattern_key: patternKey,
      context,
      action,
      success_count: successCount,
      total_count: totalCount,
      success_rate: successCount / totalCount,
      updated_at: new Date().toISOString(),
    })
  }

  async getBestAction(context: string): Promise<string | null> {
    const supabase = await createClient()

    const { data } = await supabase
      .from("agent_patterns")
      .select("*")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .eq("context", context)
      .order("success_rate", { ascending: false })
      .limit(1)
      .single()

    return data?.action || null
  }

  async getPreference(key: string): Promise<number> {
    const supabase = await createClient()

    const { data } = await supabase
      .from("agent_semantic_memory")
      .select("value")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .eq("key", key)
      .single()

    return data?.value || 0
  }

  async getSuccessPatterns(context: string, limit = 5) {
    const supabase = await createClient()

    const { data } = await supabase
      .from("agent_patterns")
      .select("*")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .eq("context", context)
      .gte("success_rate", 0.6)
      .order("success_rate", { ascending: false })
      .limit(limit)

    return data || []
  }

  async getSuccessRate(context: string): Promise<number> {
    const supabase = await createClient()

    const { data } = await supabase
      .from("agent_patterns")
      .select("success_count, total_count")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .eq("context", context)

    if (!data || data.length === 0) return 0

    const totalSuccess = data.reduce((sum, p) => sum + p.success_count, 0)
    const totalAttempts = data.reduce((sum, p) => sum + p.total_count, 0)

    return totalAttempts > 0 ? totalSuccess / totalAttempts : 0
  }
}
