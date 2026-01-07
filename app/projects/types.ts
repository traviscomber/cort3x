export interface FeasibilityAudit {
  id: string
  user_id: string

  // Project Info
  project_name: string
  project_description: string
  country: string
  category: string

  // Market Context
  target_market?: string
  competitors?: string
  unique_value?: string
  market_size?: string

  // Financial Overview
  budget_range?: string
  funding_status?: string
  revenue_model?: string
  timeline_months?: number

  // Team
  team_size?: string
  key_expertise?: Record<string, any>

  // Scoring
  market_viability_score?: number
  sustainability_score?: number
  financial_score?: number
  regulatory_score?: number
  implementation_score?: number
  total_score?: number

  // Status
  status: "pending" | "reviewing" | "completed" | "rejected"
  payment_status: "pending" | "paid" | "refunded"
  payment_amount?: number

  // Metadata
  created_at: string
  updated_at: string
  reviewed_at?: string
  reviewed_by?: string
}
