import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { EpisodicMemory, SemanticMemory } from "./memory"
import type { AgentState, AgentPlan, AgentResponse } from "./types"

export abstract class BaseAgent {
  protected episodicMemory: EpisodicMemory
  protected semanticMemory: SemanticMemory
  protected userId: string
  protected agentType: string
  protected model = openai("gpt-4-turbo")

  constructor(userId: string, agentType: string) {
    this.userId = userId
    this.agentType = agentType
    this.episodicMemory = new EpisodicMemory(userId, agentType)
    this.semanticMemory = new SemanticMemory(userId, agentType)
  }

  abstract perceive(input: string, context?: Record<string, any>): Promise<AgentState>
  abstract plan(state: AgentState): Promise<AgentPlan>
  abstract act(plan: AgentPlan): Promise<AgentResponse>

  async reflect(state: AgentState, action: string, outcome: string, success: boolean) {
    // Store in episodic memory
    await this.episodicMemory.store(state.raw, action, outcome)

    // Update semantic memory patterns
    await this.semanticMemory.recordPattern(state.intent, action, success)
  }

  async runSession(input: string, context?: Record<string, any>): Promise<AgentResponse> {
    try {
      // 1. Perceive
      const state = await this.perceive(input, context)

      // 2. Get similar past experiences
      const similarEpisodes = await this.episodicMemory.retrieveSimilar(state.raw, 3)

      // 3. Plan with memory context
      const plan = await this.plan({
        ...state,
        context: {
          ...state.context,
          pastExperiences: similarEpisodes,
        },
      })

      // 4. Act
      const response = await this.act(plan)

      // 5. Reflect
      await this.reflect(state, JSON.stringify(plan.actions), response.message, response.confidence > 0.7)

      return response
    } catch (error) {
      console.error(`[v0] ${this.agentType} error:`, error)
      throw error
    }
  }

  protected async callLLM(systemPrompt: string, userPrompt: string): Promise<string> {
    const { text } = await generateText({
      model: this.model,
      system: systemPrompt,
      prompt: userPrompt,
    })

    return text
  }
}
