import { BaseAgent } from "./base-agent"
import type { AgentState, AgentPlan, AgentResponse } from "./types"
import { createClient } from "@/lib/supabase/server"

export class FeasibilityAgent extends BaseAgent {
  constructor(userId: string) {
    super(userId, "feasibility")
  }

  async perceive(input: string, context?: Record<string, any>): Promise<AgentState> {
    const inputLower = input.toLowerCase()

    let intent: AgentState["intent"] = "feasibility_analysis"

    if (inputLower.includes("compare")) {
      intent = "comparison"
    } else if (inputLower.includes("recommend") || inputLower.includes("suggest")) {
      intent = "recommendation"
    }

    return {
      intent,
      raw: input,
      context,
      userId: this.userId,
      projectId: context?.projectId,
    }
  }

  async plan(state: AgentState): Promise<AgentPlan> {
    const actions = []

    if (state.intent === "feasibility_analysis") {
      actions.push({
        type: "analyze_project",
        params: { projectId: state.projectId },
      })
    } else if (state.intent === "comparison") {
      actions.push({
        type: "compare_projects",
        params: { projectIds: state.context?.projectIds || [] },
      })
    } else if (state.intent === "recommendation") {
      actions.push({
        type: "generate_recommendations",
        params: { projectId: state.projectId },
      })
    }

    return {
      actions,
      reasoning: `Based on intent "${state.intent}", I will execute ${actions.length} action(s)`,
    }
  }

  async act(plan: AgentPlan): Promise<AgentResponse> {
    const action = plan.actions[0]

    if (action.type === "analyze_project") {
      return await this.analyzeProject(action.params.projectId)
    } else if (action.type === "compare_projects") {
      return await this.compareProjects(action.params.projectIds)
    } else if (action.type === "generate_recommendations") {
      return await this.generateRecommendations(action.params.projectId)
    }

    return {
      message: "Action not implemented",
      confidence: 0,
    }
  }

  private async analyzeProject(projectId: string): Promise<AgentResponse> {
    const supabase = await createClient()

    // Fetch project data
    const { data: audit } = await supabase.from("feasibility_audits").select("*").eq("id", projectId).single()

    if (!audit) {
      return {
        message: "Project not found",
        confidence: 0,
      }
    }

    // Generate analysis using OpenAI
    const systemPrompt = `You are a feasibility analysis expert for Impax Cort3x. 
Analyze projects across 6 dimensions:
1. Market Viability (0-20 points)
2. Sustainability Analysis (0-20 points)
3. Financial Feasibility (0-20 points)
4. Regulatory Compliance (0-15 points)
5. Implementation Complexity (0-15 points)
6. Audit Funnel (0-10 points)

Provide detailed scoring, reasoning, risks, and actionable recommendations.`

    const userPrompt = `Analyze this project:
Company: ${audit.company_name}
Project: ${audit.project_name}
Description: ${audit.idea_description}
Industry: ${audit.industry || "Not specified"}
Documents: ${audit.uploaded_docs?.length || 0} files

Provide a comprehensive feasibility analysis with specific scores for each dimension.`

    const analysis = await this.callLLM(systemPrompt, userPrompt)

    // Store analysis result
    await supabase
      .from("feasibility_audits")
      .update({
        ai_analysis: analysis,
        analyzed_at: new Date().toISOString(),
      })
      .eq("id", projectId)

    return {
      message: analysis,
      data: { projectId, audit },
      confidence: 0.9,
      nextSteps: [
        "Review detailed scoring breakdown",
        "Address identified risks",
        "Consider upgrade to Professional tier for pitch deck",
      ],
    }
  }

  private async compareProjects(projectIds: string[]): Promise<AgentResponse> {
    // Implementation for project comparison
    return {
      message: "Project comparison feature coming soon",
      confidence: 0.5,
    }
  }

  private async generateRecommendations(projectId: string): Promise<AgentResponse> {
    // Implementation for generating recommendations
    return {
      message: "Recommendations feature coming soon",
      confidence: 0.5,
    }
  }
}
