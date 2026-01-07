import { createClient } from "@/lib/supabase/server"

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

    const embeddingResponse = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-embedding-3-small",
        input: `${state} ${action} ${outcome}`,
      }),
    })

    if (!embeddingResponse.ok) {
      throw new Error(`OpenAI Embedding API error: ${embeddingResponse.statusText}`)
    }

    const embeddingData = (await embeddingResponse.json()) as { data: Array<{ embedding: number[] }> }
    const embedding = embeddingData.data[0].embedding

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

    const embeddingResponse = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-embedding-3-small",
        input: query,
      }),
    })

    if (!embeddingResponse.ok) {
      throw new Error(`OpenAI Embedding API error: ${embeddingResponse.statusText}`)
    }

    const embeddingData = (await embeddingResponse.json()) as { data: Array<{ embedding: number[] }> }
    const queryEmbedding = embeddingData.data[0].embedding

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
  private supabase: any

  constructor(userId: string, agentType: string) {
    this.userId = userId
    this.agentType = agentType
    this.supabase = createClient()
  }

  async updatePreference(key: string, value: number, weight = 1.0) {
    const { data: current } = await this.supabase
      .from("agent_semantic_memory")
      .select("value")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .eq("key", key)
      .single()

    const currentValue = current?.value || 0
    const newValue = 0.9 * currentValue + 0.1 * weight * value

    await this.supabase.from("agent_semantic_memory").upsert({
      user_id: this.userId,
      agent_type: this.agentType,
      key,
      value: newValue,
      updated_at: new Date().toISOString(),
    })
  }

  async recordPattern(context: string, action: string, success: boolean) {
    const patternKey = `${context}_${action}`

    const { data: current } = await this.supabase
      .from("agent_patterns")
      .select("*")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .eq("pattern_key", patternKey)
      .single()

    const successCount = (current?.success_count || 0) + (success ? 1 : 0)
    const totalCount = (current?.total_count || 0) + 1

    await this.supabase.from("agent_patterns").upsert({
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
    const { data } = await this.supabase
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
    const { data } = await this.supabase
      .from("agent_semantic_memory")
      .select("value")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .eq("key", key)
      .single()

    return data?.value || 0
  }

  async getSuccessPatterns(context: string, limit = 5) {
    const { data } = await this.supabase
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
    const { data } = await this.supabase
      .from("agent_patterns")
      .select("success_count, total_count")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .eq("context", context)

    if (!data || data.length === 0) return 0

    const totalSuccess = data.reduce((sum: number, p: { success_count: number }) => sum + p.success_count, 0)
    const totalAttempts = data.reduce((sum: number, p: { total_count: number }) => sum + p.total_count, 0)

    return totalAttempts > 0 ? totalSuccess / totalAttempts : 0
  }

  /**
   * Calculates pattern success rate for a given context
   * @param context - The pattern context to evaluate
   * @returns Success rate as a decimal between 0 and 1
   */
  async getPatternSuccessRate(context: string): Promise<number> {
    const { data } = await this.supabase
      .from("agent_patterns")
      .select("success_count, total_count")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .eq("context", context)

    if (!data || data.length === 0) return 0

    const totalSuccess = data.reduce((sum: number, p: { success_count: number }) => sum + p.success_count, 0)
    const totalAttempts = data.reduce((sum: number, p: { total_count: number }) => sum + p.total_count, 0)

    return totalAttempts > 0 ? totalSuccess / totalAttempts : 0
  }

  /**
   * Retrieves all patterns for performance analysis
   * Returns aggregated data sorted by success rate
   */
  async getAllPatternStats(): Promise<PatternStats[]> {
    const { data } = await this.supabase
      .from("agent_patterns")
      .select("*")
      .eq("user_id", this.userId)
      .eq("agent_type", this.agentType)
      .order("success_count", { ascending: false })

    if (!data || data.length === 0) return []

    return data.map((pattern: any) => ({
      context: pattern.context,
      pattern: pattern.pattern,
      successCount: pattern.success_count,
      totalCount: pattern.total_count,
      successRate: pattern.total_count > 0 ? pattern.success_count / pattern.total_count : 0,
    }))
  }
}

interface PatternStats {
  context: string
  pattern: string
  successCount: number
  totalCount: number
  successRate: number
}
