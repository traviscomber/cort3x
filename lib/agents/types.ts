export type AgentIntent =
  | "feasibility_analysis"
  | "market_research"
  | "pitch_deck_creation"
  | "coaching_session"
  | "recommendation"
  | "comparison"
  | "revision"

export interface AgentState {
  intent: AgentIntent
  raw: string
  context?: Record<string, any>
  userId: string
  projectId?: string
}

export interface Episode {
  state: string
  action: string
  outcome: string
  timestamp: string
  embedding: number[]
  userId: string
  agentType: string
}

export interface AgentPlan {
  actions: Array<{
    type: string
    params: Record<string, any>
  }>
  reasoning: string
}

export interface AgentResponse {
  message: string
  data?: any
  confidence: number
  nextSteps?: string[]
}
