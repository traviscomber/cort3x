export type SubscriptionTier = "starter" | "priority" | "professional" | "enterprise"

export interface TierFeatures {
  // Access Control
  canAccessDashboard: boolean
  canAccessAdminFeatures: boolean
  canAccessSalesFunnel: boolean
  canAccessAnalytics: boolean
  canAccessPartnershipSubmissions: boolean
  canAccessDocumentation: boolean
  canAccessFullInitiatives: boolean
  canAccessCoaching: boolean
  canAccessAPI: boolean

  // Limits
  monthlyAuditsLimit: number
  canUploadDocuments: boolean
  maxDocumentSize: number // in MB

  // Features
  priorityReview: boolean
  comprehensiveReport: boolean
  pitchDeck: boolean
  businessPlan: boolean
  financialModels: boolean
  weeklyCoaching: boolean
  customPortal: boolean

  // Support
  supportLevel: "email" | "priority-email" | "dedicated"
  responseTime: string
}

export const TIER_FEATURES: Record<SubscriptionTier, TierFeatures> = {
  starter: {
    // Access Control
    canAccessDashboard: true,
    canAccessAdminFeatures: false,
    canAccessSalesFunnel: false,
    canAccessAnalytics: false,
    canAccessPartnershipSubmissions: false,
    canAccessDocumentation: true, // Public docs
    canAccessFullInitiatives: false,
    canAccessCoaching: false,
    canAccessAPI: false,

    // Limits
    monthlyAuditsLimit: 3,
    canUploadDocuments: true,
    maxDocumentSize: 5,

    // Features
    priorityReview: false,
    comprehensiveReport: false,
    pitchDeck: false,
    businessPlan: false,
    financialModels: false,
    weeklyCoaching: false,
    customPortal: false,

    // Support
    supportLevel: "email",
    responseTime: "48-72 hours",
  },
  priority: {
    // Access Control
    canAccessDashboard: true,
    canAccessAdminFeatures: false,
    canAccessSalesFunnel: false,
    canAccessAnalytics: false,
    canAccessPartnershipSubmissions: false,
    canAccessDocumentation: true,
    canAccessFullInitiatives: false,
    canAccessCoaching: false,
    canAccessAPI: false,

    // Limits
    monthlyAuditsLimit: 10,
    canUploadDocuments: true,
    maxDocumentSize: 20,

    // Features
    priorityReview: true,
    comprehensiveReport: true,
    pitchDeck: false,
    businessPlan: false,
    financialModels: false,
    weeklyCoaching: false,
    customPortal: false,

    // Support
    supportLevel: "priority-email",
    responseTime: "24 hours",
  },
  professional: {
    // Access Control
    canAccessDashboard: true,
    canAccessAdminFeatures: false,
    canAccessSalesFunnel: false,
    canAccessAnalytics: true, // Can see their own analytics
    canAccessPartnershipSubmissions: false,
    canAccessDocumentation: true,
    canAccessFullInitiatives: true, // Can create full initiatives
    canAccessCoaching: false,
    canAccessAPI: false,

    // Limits
    monthlyAuditsLimit: 999, // Unlimited
    canUploadDocuments: true,
    maxDocumentSize: 100,

    // Features
    priorityReview: true,
    comprehensiveReport: true,
    pitchDeck: true,
    businessPlan: true,
    financialModels: true,
    weeklyCoaching: false,
    customPortal: false,

    // Support
    supportLevel: "priority-email",
    responseTime: "12 hours",
  },
  enterprise: {
    // Access Control
    canAccessDashboard: true,
    canAccessAdminFeatures: false,
    canAccessSalesFunnel: false,
    canAccessAnalytics: true,
    canAccessPartnershipSubmissions: false,
    canAccessDocumentation: true,
    canAccessFullInitiatives: true,
    canAccessCoaching: true,
    canAccessAPI: true,

    // Limits
    monthlyAuditsLimit: 999, // Unlimited
    canUploadDocuments: true,
    maxDocumentSize: 500,

    // Features
    priorityReview: true,
    comprehensiveReport: true,
    pitchDeck: true,
    businessPlan: true,
    financialModels: true,
    weeklyCoaching: true,
    customPortal: true,

    // Support
    supportLevel: "dedicated",
    responseTime: "4 hours",
  },
}

export function getTierFeatures(tier: SubscriptionTier | null | undefined): TierFeatures {
  return TIER_FEATURES[tier || "starter"]
}

export function canAccessFeature(tier: SubscriptionTier | null | undefined, feature: keyof TierFeatures): boolean {
  const features = getTierFeatures(tier)
  return Boolean(features[feature])
}
