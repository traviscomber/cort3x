export type SubscriptionTier = "free" | "priority" | "professional" | "enterprise"

export interface TierLimits {
  tier: SubscriptionTier
  displayName: string
  price: string
  monthlyAudits: number
  turnaroundTime: string
  reportPages: number
  features: {
    id: string
    name: string
    included: boolean
    description?: string
  }[]
  deliverables: string[]
}

export const TIER_CONFIG: Record<SubscriptionTier, TierLimits> = {
  free: {
    tier: "free",
    displayName: "Starter (FREE)",
    price: "$0",
    monthlyAudits: 3,
    turnaroundTime: "48-72 hours",
    reportPages: 5,
    features: [
      { id: "submit_audits", name: "Submit project audits", included: true },
      { id: "basic_scoring", name: "100-point feasibility score", included: true },
      { id: "summary_report", name: "Summary report (5 pages PDF)", included: true },
      { id: "dashboard_access", name: "Basic dashboard access", included: true },
      { id: "email_notifications", name: "Email notifications", included: true },
      { id: "priority_review", name: "Priority 24h review", included: false },
      { id: "detailed_report", name: "Detailed 15-20 page report", included: false },
      { id: "competitor_analysis", name: "Competitor comparison matrix", included: false },
      { id: "pitch_deck", name: "Pitch deck creation", included: false },
      { id: "business_plan", name: "Business plan document", included: false },
      { id: "coaching", name: "Weekly coaching sessions", included: false },
      { id: "api_access", name: "API access", included: false },
    ],
    deliverables: ["100-point score breakdown", "Summary report (5 pages PDF)", "Email notifications"],
  },
  priority: {
    tier: "priority",
    displayName: "Priority",
    price: "$100",
    monthlyAudits: 10,
    turnaroundTime: "24 hours",
    reportPages: 20,
    features: [
      { id: "submit_audits", name: "Submit project audits", included: true },
      { id: "basic_scoring", name: "100-point feasibility score", included: true },
      { id: "summary_report", name: "Summary report", included: true },
      { id: "dashboard_access", name: "Dashboard access", included: true },
      { id: "email_notifications", name: "Email notifications", included: true },
      { id: "priority_review", name: "Priority 24h review", included: true },
      { id: "detailed_report", name: "Detailed 15-20 page report", included: true },
      { id: "competitor_analysis", name: "Competitor comparison matrix", included: true },
      { id: "risk_assessment", name: "Risk assessment", included: true },
      { id: "priority_support", name: "Priority email support", included: true },
      { id: "pitch_deck", name: "Pitch deck creation", included: false },
      { id: "business_plan", name: "Business plan document", included: false },
      { id: "coaching", name: "Weekly coaching sessions", included: false },
      { id: "api_access", name: "API access", included: false },
    ],
    deliverables: [
      "Everything in FREE, plus:",
      "Comprehensive report (15-20 pages)",
      "Market analysis deep dive",
      "Competitor comparison matrix",
      "Risk assessment",
      "Priority email support",
      "Downloadable in multiple formats",
    ],
  },
  professional: {
    tier: "professional",
    displayName: "Professional",
    price: "$1,000",
    monthlyAudits: 999,
    turnaroundTime: "2 weeks",
    reportPages: 40,
    features: [
      { id: "submit_audits", name: "Unlimited project audits", included: true },
      { id: "basic_scoring", name: "100-point feasibility score", included: true },
      { id: "summary_report", name: "All reports", included: true },
      { id: "dashboard_access", name: "Full dashboard access", included: true },
      { id: "email_notifications", name: "Email notifications", included: true },
      { id: "priority_review", name: "Priority 24h review", included: true },
      { id: "detailed_report", name: "Detailed reports", included: true },
      { id: "competitor_analysis", name: "Competitor analysis", included: true },
      { id: "pitch_deck", name: "Full pitch deck (15-20 slides)", included: true },
      { id: "business_plan", name: "Business plan (30-40 pages)", included: true },
      { id: "financial_models", name: "Financial projections (3-5 years)", included: true },
      { id: "mockups", name: "Portfolio/concept mockups", included: true },
      { id: "revisions", name: "2 rounds of revisions", included: true },
      { id: "coaching", name: "Weekly coaching sessions", included: false },
      { id: "api_access", name: "API access", included: false },
    ],
    deliverables: [
      "Everything in Priority, plus:",
      "Full pitch deck (15-20 slides, branded)",
      "Comprehensive business plan (30-40 pages)",
      "Financial projections & models (3-5 years)",
      "Market sizing & TAM analysis",
      "Go-to-market strategy document",
      "Portfolio/concept mockup",
      "2 rounds of revisions",
      "3-month access to materials",
      "Video presentation guide",
    ],
  },
  enterprise: {
    tier: "enterprise",
    displayName: "Enterprise",
    price: "$1,500/month",
    monthlyAudits: 999,
    turnaroundTime: "3-6 months",
    reportPages: 999,
    features: [
      { id: "submit_audits", name: "Unlimited project audits", included: true },
      { id: "basic_scoring", name: "All scoring & analysis", included: true },
      { id: "summary_report", name: "All reports & documents", included: true },
      { id: "dashboard_access", name: "Full dashboard + custom portal", included: true },
      { id: "email_notifications", name: "Real-time notifications", included: true },
      { id: "priority_review", name: "Immediate priority review", included: true },
      { id: "detailed_report", name: "All detailed reports", included: true },
      { id: "competitor_analysis", name: "Ongoing competitor tracking", included: true },
      { id: "pitch_deck", name: "Full pitch deck", included: true },
      { id: "business_plan", name: "Business plan", included: true },
      { id: "financial_models", name: "Financial projections", included: true },
      { id: "mockups", name: "Portfolio mockups", included: true },
      { id: "coaching", name: "Weekly 1:1 coaching (1 hour)", included: true },
      { id: "unlimited_revisions", name: "Unlimited document revisions", included: true },
      { id: "api_access", name: "API access & integrations", included: true },
      { id: "expert_network", name: "Access to expert network", included: true },
      { id: "strategic_reviews", name: "Quarterly strategic reviews", included: true },
    ],
    deliverables: [
      "Everything in Professional, plus:",
      "Weekly 1:1 coaching sessions (1 hour each)",
      "Custom client portal with real-time updates",
      "API access for integrations",
      "Ongoing market research & updates",
      "Unlimited document revisions",
      "Implementation roadmap & support",
      "Direct communication channel (Slack/Teams)",
      "Quarterly strategic reviews",
      "Access to expert network",
      "Co-creation of marketing materials",
    ],
  },
}

export function getTierConfig(tier: SubscriptionTier): TierLimits {
  return TIER_CONFIG[tier] || TIER_CONFIG.free
}

export function canAccessFeature(userTier: SubscriptionTier, featureId: string): boolean {
  const config = getTierConfig(userTier)
  const feature = config.features.find((f) => f.id === featureId)
  return feature?.included || false
}

export function hasRemainingAudits(used: number, tier: SubscriptionTier): boolean {
  const config = getTierConfig(tier)
  return used < config.monthlyAudits
}

export function getUpgradeSuggestion(currentTier: SubscriptionTier): SubscriptionTier | null {
  const tiers: SubscriptionTier[] = ["free", "priority", "professional", "enterprise"]
  const currentIndex = tiers.indexOf(currentTier)
  return currentIndex < tiers.length - 1 ? tiers[currentIndex + 1] : null
}
