import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { EpisodicMemory, SemanticMemory } from "./memory"
import type { AgentState, AgentPlan, AgentResponse, Tool } from "./types"
import { logger } from "@/lib/logger"

export abstract class BaseAgent {
  protected episodicMemory: EpisodicMemory
  protected semanticMemory: SemanticMemory
  protected userId: string
  protected agentType: string
  protected model = openai("gpt-4-turbo")
  protected tools: Map<string, Tool> = new Map()
  protected maxRetries = 3
  protected confidenceThreshold = 0.7

  constructor(userId: string, agentType: string) {
    this.userId = userId
    this.agentType = agentType
    this.episodicMemory = new EpisodicMemory(userId, agentType)
    this.semanticMemory = new SemanticMemory(userId, agentType)
    this.registerTools()
  }

  abstract perceive(input: string, context?: Record<string, any>): Promise<AgentState>

  abstract plan(state: AgentState): Promise<AgentPlan>

  abstract act(plan: AgentPlan): Promise<AgentResponse>

  async reflect(state: AgentState, action: string, outcome: string, success: boolean) {
    await this.episodicMemory.store(state.raw, action, outcome)
    await this.semanticMemory.recordPattern(state.intent, action, success)

    // Enhanced: Analyze why success or failure occurred
    if (!success) {
      await this.analyzeFailure(state, action, outcome)
    }
  }

  private async analyzeFailure(state: AgentState, action: string, outcome: string) {
    const failurePattern = {
      intent: state.intent,
      action,
      outcome,
      timestamp: new Date().toISOString(),
    }

    // Store failure for pattern analysis
    await this.semanticMemory.updatePreference(`failure_${state.intent}`, 1, 0.5)
    logger.warn("Agent failure analyzed", { agentType: this.agentType, failurePattern })
  }

  protected async getEnhancedContext(state: AgentState) {
    const similarEpisodes = await this.episodicMemory.retrieveSimilar(state.raw, 5)
    const bestAction = await this.semanticMemory.getBestAction(state.intent)
    const patterns = await this.semanticMemory.getSuccessPatterns(state.intent)

    return {
      ...state.context,
      pastExperiences: similarEpisodes,
      recommendedAction: bestAction,
      successPatterns: patterns,
    }
  }

  protected async decomposeGoal(goal: string): Promise<string[]> {
    const prompt = `Decompose this high-level goal into 3-5 concrete sub-goals:
Goal: ${goal}

Return as a JSON array of strings.`

    const response = await this.callLLM(
      "You are a strategic planning expert. Break down complex goals into actionable steps.",
      prompt,
    )

    try {
      return JSON.parse(response)
    } catch {
      return [goal] // Fallback to original goal
    }
  }

  protected registerTools() {
    // Override in subclasses to register specific tools
  }

  protected registerTool(name: string, tool: Tool) {
    this.tools.set(name, tool)
  }

  protected async useTool(toolName: string, params: Record<string, any>): Promise<any> {
    const tool = this.tools.get(toolName)
    if (!tool) {
      throw new Error(`Tool ${toolName} not found`)
    }

    try {
      logger.info(`Using tool: ${toolName}`, { params })
      return await tool.execute(params)
    } catch (error) {
      logger.error(`Tool execution failed: ${toolName}`, { error })
      throw error
    }
  }

  protected async executeWithRetry<T>(operation: () => Promise<T>, context: string): Promise<T> {
    let lastError: Error | undefined

    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        return await operation()
      } catch (error) {
        lastError = error as Error
        logger.warn(`Retry attempt ${attempt}/${this.maxRetries} for ${context}`, { error })

        if (attempt < this.maxRetries) {
          // Exponential backoff: 1s, 2s, 4s
          await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, attempt - 1)))
        }
      }
    }

    throw lastError
  }

  protected async selectBestModel(complexity: "simple" | "medium" | "complex"): Promise<string> {
    const modelMap = {
      simple: "gpt-4o-mini",
      medium: "gpt-4o",
      complex: "gpt-4-turbo",
    }

    return modelMap[complexity]
  }

  protected async explainDecision(plan: AgentPlan, state: AgentState): Promise<string> {
    const prompt = `Explain why this plan was chosen:
Intent: ${state.intent}
Input: ${state.raw}
Plan: ${JSON.stringify(plan.actions)}
Past Success Rate: ${await this.semanticMemory.getSuccessRate(state.intent)}

Provide a clear, user-friendly explanation.`

    return await this.callLLM("You explain AI agent decisions in simple, transparent language.", prompt)
  }

  protected async delegateToAgent(
    agentType: string,
    task: string,
    context: Record<string, any>,
  ): Promise<AgentResponse> {
    logger.info(`Delegating to ${agentType}`, { task })
    // Placeholder for multi-agent coordination
    // In production, this would instantiate another agent and await its response
    return {
      message: `Task delegated to ${agentType}`,
      confidence: 0.8,
    }
  }

  protected async handleUncertainty(response: AgentResponse): Promise<AgentResponse> {
    if (response.confidence < this.confidenceThreshold) {
      // Request human input or gather more context
      return {
        ...response,
        message: `${response.message}\n\n⚠️ Confidence is low (${(response.confidence * 100).toFixed(0)}%). Would you like me to gather more information or seek human review?`,
        nextSteps: [
          "Provide additional context",
          "Request human review",
          "Try alternative approach",
          ...(response.nextSteps || []),
        ],
      }
    }

    return response
  }

  // Enhanced main execution loop with all pillars
  async runSession(input: string, context?: Record<string, any>): Promise<AgentResponse> {
    return await this.executeWithRetry(async () => {
      // 1. Perceive (Pillar 1)
      const state = await this.perceive(input, context)

      // 2. Context Awareness (Pillar 7)
      const enhancedContext = await this.getEnhancedContext(state)

      // 3. Plan with memory context (Pillar 2)
      const plan = await this.plan({
        ...state,
        context: enhancedContext,
      })

      // 4. Generate explanation (Pillar 12)
      const explanation = await this.explainDecision(plan, state)

      // 5. Act (Pillar 3 + Pillar 9 Tool Use)
      const response = await this.act(plan)

      // 6. Handle Uncertainty (Pillar 14)
      const finalResponse = await this.handleUncertainty(response)

      // 7. Reflect (Pillar 4 + Pillar 6 Learning)
      await this.reflect(
        state,
        JSON.stringify(plan.actions),
        finalResponse.message,
        finalResponse.confidence > this.confidenceThreshold,
      )

      return {
        ...finalResponse,
        explanation,
      }
    }, `runSession for ${this.agentType}`)
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
