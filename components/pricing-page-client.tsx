"use client"

import { useState } from "react"
import { Check, Sparkles, Zap, Rocket, Crown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const tiers = [
  {
    name: "Starter",
    id: "free",
    price: "Free",
    description: "Perfect for exploring your first innovation idea",
    turnaround: "48-72 hours",
    icon: Sparkles,
    color: "text-slate-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    features: [
      "Submit unlimited project audits",
      "100-point feasibility scoring",
      "Summary report (5 pages)",
      "Basic dashboard access",
      "Email notifications",
      "Community forum access",
      "3 audits per month",
    ],
    cta: "Get Started Free",
    ctaLink: "/onboarding",
  },
  {
    name: "Priority",
    id: "priority",
    price: "$100",
    priceSubtext: "per audit",
    description: "Fast-tracked analysis with deep insights",
    turnaround: "24 hours",
    icon: Zap,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "24-hour expedited review",
      "Comprehensive report (15-20 pages)",
      "Detailed scoring breakdown",
      "Market analysis deep dive",
      "Competitor comparison matrix",
      "Risk assessment & mitigation",
      "Priority email support",
      "Downloadable PDF + editable formats",
    ],
    cta: "Upgrade to Priority",
    ctaLink: "/onboarding",
  },
  {
    name: "Professional",
    id: "professional",
    price: "$1,000",
    priceSubtext: "one-time",
    description: "Complete documentation package for investors",
    turnaround: "2 weeks",
    icon: Rocket,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    features: [
      "Everything in Priority, plus:",
      "Full pitch deck (15-20 slides)",
      "Comprehensive business plan (30-40 pages)",
      "Financial projections (3-5 years)",
      "Market sizing & TAM analysis",
      "Go-to-market strategy",
      "Portfolio/concept mockup",
      "2 rounds of revisions",
      "3-month document access",
      "Video presentation guide",
    ],
    cta: "Get Full Package",
    ctaLink: "/contact",
  },
  {
    name: "Enterprise",
    id: "enterprise",
    price: "$1,500",
    priceSubtext: "per month",
    description: "Hands-on coaching & implementation support",
    turnaround: "3-6 months",
    icon: Crown,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300",
    features: [
      "Everything in Professional, plus:",
      "Weekly 1:1 coaching sessions (1 hour)",
      "Custom client portal",
      "API access for integrations",
      "Ongoing market research updates",
      "Unlimited document revisions",
      "Implementation roadmap",
      "Direct Slack/Teams channel",
      "Quarterly strategic reviews",
      "Access to expert network",
      "Co-creation of marketing materials",
    ],
    cta: "Book Consultation",
    ctaLink: "/contact",
  },
]

const comparisonFeatures = [
  {
    category: "Analysis & Reports",
    features: [
      {
        name: "Feasibility audit submissions",
        free: "3/month",
        priority: "Unlimited",
        professional: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "Turnaround time",
        free: "48-72 hrs",
        priority: "24 hrs",
        professional: "24 hrs",
        enterprise: "Real-time",
      },
      {
        name: "Report pages",
        free: "5 pages",
        priority: "15-20 pages",
        professional: "30-40 pages",
        enterprise: "Custom",
      },
      { name: "100-point scoring", free: true, priority: true, professional: true, enterprise: true },
      {
        name: "Market analysis",
        free: "Basic",
        priority: "Deep dive",
        professional: "Comprehensive",
        enterprise: "Ongoing",
      },
      { name: "Competitor analysis", free: false, priority: true, professional: true, enterprise: true },
      { name: "Risk assessment", free: false, priority: true, professional: true, enterprise: true },
    ],
  },
  {
    category: "Deliverables",
    features: [
      { name: "Pitch deck", free: false, priority: false, professional: "15-20 slides", enterprise: "Custom" },
      { name: "Business plan", free: false, priority: false, professional: "30-40 pages", enterprise: "Custom" },
      { name: "Financial projections", free: false, priority: false, professional: "3-5 years", enterprise: "Custom" },
      { name: "Portfolio mockups", free: false, priority: false, professional: true, enterprise: true },
      {
        name: "Document revisions",
        free: false,
        priority: "1 round",
        professional: "2 rounds",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    category: "Support & Coaching",
    features: [
      { name: "Email support", free: "Standard", priority: "Priority", professional: "Priority", enterprise: "24/7" },
      { name: "1:1 coaching sessions", free: false, priority: false, professional: false, enterprise: "Weekly" },
      { name: "Direct communication", free: false, priority: false, professional: false, enterprise: "Slack/Teams" },
      { name: "Implementation support", free: false, priority: false, professional: false, enterprise: true },
      { name: "Expert network access", free: false, priority: false, professional: false, enterprise: true },
    ],
  },
  {
    category: "Platform Access",
    features: [
      {
        name: "Dashboard access",
        free: "Basic",
        priority: "Advanced",
        professional: "Pro",
        enterprise: "Custom portal",
      },
      { name: "API access", free: false, priority: false, professional: false, enterprise: true },
      {
        name: "Document storage",
        free: "30 days",
        priority: "90 days",
        professional: "3 months",
        enterprise: "Lifetime",
      },
      { name: "Community forum", free: true, priority: true, professional: true, enterprise: true },
    ],
  },
]

export function PricingPageClient() {
  const [showComparison, setShowComparison] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Flexible Pricing
          </Badge>
          <h1 className="text-5xl font-bold mb-4 text-balance">Choose Your Innovation Journey</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Start free, upgrade anytime. From quick feasibility checks to full-scale implementation support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <Card
                key={tier.id}
                className={`relative p-6 ${tier.borderColor} border-2 hover:shadow-lg transition-all ${
                  tier.popular ? "ring-2 ring-amber-400 scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500">Most Popular</Badge>
                )}

                <div className={`w-12 h-12 rounded-lg ${tier.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${tier.color}`} />
                </div>

                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.priceSubtext && <span className="text-muted-foreground ml-2">{tier.priceSubtext}</span>}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                <div className="text-sm font-medium mb-6 text-muted-foreground">⏱️ {tier.turnaround}</div>

                <Button asChild className="w-full mb-6" variant={tier.popular ? "default" : "outline"}>
                  <Link href={tier.ctaLink}>
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>

                <div className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Comparison Toggle */}
        <div className="text-center mb-8">
          <Button variant="outline" onClick={() => setShowComparison(!showComparison)}>
            {showComparison ? "Hide" : "Show"} Detailed Comparison
          </Button>
        </div>

        {/* Detailed Comparison Table */}
        {showComparison && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold bg-amber-50">Priority</th>
                  <th className="text-center p-4 font-semibold">Professional</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category) => (
                  <>
                    <tr key={category.category} className="bg-slate-50">
                      <td colSpan={5} className="p-4 font-semibold">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature) => (
                      <tr key={feature.name} className="border-b">
                        <td className="p-4">{feature.name}</td>
                        <td className="text-center p-4">
                          {typeof feature.free === "boolean" ? (
                            feature.free ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            feature.free
                          )}
                        </td>
                        <td className="text-center p-4 bg-amber-50">
                          {typeof feature.priority === "boolean" ? (
                            feature.priority ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            feature.priority
                          )}
                        </td>
                        <td className="text-center p-4">
                          {typeof feature.professional === "boolean" ? (
                            feature.professional ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            feature.professional
                          )}
                        </td>
                        <td className="text-center p-4">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-muted-foreground">—</span>
                            )
                          ) : (
                            feature.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Can I start with the Free tier and upgrade later?</h3>
              <p className="text-muted-foreground">
                Start with a free audit to test the platform. You can upgrade to Priority for any audit, or jump to
                Professional/Enterprise when you're ready for full implementation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What's included in the 100-point scoring system?</h3>
              <p className="text-muted-foreground">
                Your project is scored across 5 categories: Market Viability (30 pts), Sustainability Alignment (25
                pts), Financial Feasibility (20 pts), Regulatory & ESG Fit (15 pts), and Implementation Readiness (10
                pts).
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How does the Enterprise coaching work?</h3>
              <p className="text-muted-foreground">
                Enterprise includes weekly 1-hour coaching sessions with industry experts, a dedicated Slack channel,
                custom portal access, and ongoing support for 3-6 months as you implement your innovation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">
                Priority audits are refundable within 24 hours if you're not satisfied. Professional and Enterprise
                tiers have milestone-based payments with satisfaction guarantees at each stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
