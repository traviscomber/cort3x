"use client"

import type React from "react"

import { useState, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  ArrowRight,
  Search,
  X,
  Lightbulb,
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  TrendingUp,
  Info,
  Crown,
  Zap,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { getTierFeatures, type SubscriptionTier } from "@/lib/tier-features"

interface Project {
  id: string
  project_name: string
  project_description: string
  country: string
  category: string
  status: "pending" | "reviewing" | "completed" | "rejected"
  payment_status: "pending" | "paid" | "refunded"
  total_score?: number
  created_at: string
  [key: string]: any
}

interface ProjectsPageClientProps {
  projects: Project[]
  user: any
  userTier: SubscriptionTier
  monthlyAuditsUsed: number
  monthlyAuditsLimit: number
}

export function ProjectsPageClient({
  projects,
  user,
  userTier,
  monthlyAuditsUsed,
  monthlyAuditsLimit,
}: ProjectsPageClientProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])

  const tierFeatures = getTierFeatures(userTier)
  const auditsRemaining = monthlyAuditsLimit - monthlyAuditsUsed
  const usagePercentage = (monthlyAuditsUsed / monthlyAuditsLimit) * 100

  const filteredProjects = useMemo(() => {
    let filtered = projects

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.project_name?.toLowerCase().includes(query) ||
          project.project_description?.toLowerCase().includes(query) ||
          project.category?.toLowerCase().includes(query) ||
          project.country?.toLowerCase().includes(query),
      )
    }

    if (selectedStatuses.length > 0) {
      filtered = filtered.filter((project) => selectedStatuses.includes(project.status))
    }

    return filtered
  }, [projects, searchQuery, selectedStatuses])

  const toggleStatus = (status: string) => {
    setSelectedStatuses((prev) => (prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]))
  }

  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedStatuses([])
  }

  const hasActiveFilters = searchQuery.trim() || selectedStatuses.length > 0

  const statusConfig = {
    pending: { label: "Pending Payment", color: "bg-yellow-500", icon: Clock },
    reviewing: { label: "Under Review", color: "bg-blue-500", icon: TrendingUp },
    completed: { label: "Completed", color: "bg-green-500", icon: CheckCircle2 },
    rejected: { label: "Needs Revision", color: "bg-red-500", icon: AlertCircle },
  }

  const tierConfig: Record<
    string,
    { label: string; color: string; icon: React.ComponentType<{ className?: string }> }
  > = {
    free: { label: "Free", color: "bg-gray-500", icon: Lightbulb },
    priority: { label: "Priority", color: "bg-blue-500", icon: Zap },
    professional: { label: "Professional", color: "bg-purple-500", icon: Crown },
    enterprise: { label: "Enterprise", color: "bg-amber-500", icon: Sparkles },
  }

  const currentTierConfig = tierConfig[userTier] || tierConfig.free
  const TierIcon = currentTierConfig.icon

  if (projects.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Message */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Lightbulb className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-5xl font-bold mb-4 text-gray-900">Welcome, {user.email?.split("@")[0]}!</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
                You're ready to start your innovation journey. Let's create your first project feasibility audit.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                <TierIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Current Plan: {currentTierConfig.label}</span>
                <Link href="/pricing" className="text-primary text-sm font-semibold hover:underline ml-2">
                  Upgrade
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-primary/20 bg-white text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">100-Point Score</CardTitle>
                  <CardDescription>Comprehensive feasibility across 5 key dimensions</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-primary/20 bg-white text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Expert Analysis</CardTitle>
                  <CardDescription>Detailed audit report with strategic recommendations</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-primary/20 bg-white text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">{tierFeatures.responseTime}</CardTitle>
                  <CardDescription>
                    {tierFeatures.priorityReview ? "Priority review" : "Standard turnaround"}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {userTier === "starter" && (
              <Alert className="mb-8 bg-amber-50 border-2 border-amber-200">
                <Info className="h-5 w-5 text-amber-600" />
                <AlertDescription className="text-amber-900 ml-2">
                  <strong>Starter Plan:</strong> You have {auditsRemaining} of {monthlyAuditsLimit} free audits
                  remaining this month.
                  <Link href="/pricing" className="text-primary font-semibold hover:underline ml-2">
                    Upgrade for unlimited audits →
                  </Link>
                </AlertDescription>
              </Alert>
            )}

            <Alert className="mb-8 bg-blue-50 border-2 border-blue-200">
              <Info className="h-5 w-5 text-blue-600" />
              <AlertDescription className="text-blue-900 ml-2">
                <strong>Pro Tip:</strong> Submit your project for FREE analysis. Have your project idea, target market,
                and sustainability goals ready - takes 5-10 minutes.
              </AlertDescription>
            </Alert>

            {/* What You'll Get Section */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 text-center">
                What's included in your {currentTierConfig.label} audit:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Market viability assessment (30 points)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Sustainability alignment score (25 points)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Financial feasibility analysis (20 points)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Regulatory & ESG fit review (15 points)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Implementation readiness check (10 points)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className={`h-5 w-5 flex-shrink-0 mt-0.5 ${tierFeatures.comprehensiveReport ? "text-green-500" : "text-gray-300"}`}
                  />
                  <span className={tierFeatures.comprehensiveReport ? "" : "text-gray-400"}>
                    Comprehensive 15-20 page report {!tierFeatures.comprehensiveReport && "(Priority+)"}
                  </span>
                </div>
              </div>
            </div>

            {/* Your Growth Path with Cort3x */}
            <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20">
              <h3 className="font-semibold text-gray-900 mb-6 text-center text-lg">Your Growth Path with Cort3x</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 font-bold">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Free Feasibility Audit</div>
                    <div className="text-sm text-gray-600">
                      Get your 100-point score and initial recommendations (24 hours)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 font-bold">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Full Documentation Package - $1,000</div>
                    <div className="text-sm text-gray-600">Pitch deck, business plan, portfolio mockup (2 weeks)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-lg">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-700 font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Market-Ready Coaching - $1,500/month</div>
                    <div className="text-sm text-gray-600">
                      Final documentation, portal access, API integration (3-6 months)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-5xl font-bold text-gray-900">My Projects</h1>
                <Badge className={`${currentTierConfig.color} text-white border-0`}>
                  <TierIcon className="h-3 w-3 mr-1" />
                  {currentTierConfig.label}
                </Badge>
              </div>
              <p className="text-lg text-gray-600">
                Manage your feasibility audits and track their progress through our review process
              </p>
            </div>
            <Button
              size="lg"
              onClick={() => router.push("/onboarding")}
              className="shadow-lg"
              disabled={auditsRemaining === 0}
            >
              <Plus className="h-5 w-5 mr-2" />
              New Project
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="border-2 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Monthly Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{monthlyAuditsUsed}</span>
                    <span className="text-sm text-gray-500">of {monthlyAuditsLimit}</span>
                  </div>
                  <Progress value={usagePercentage} className="h-2" />
                  {auditsRemaining === 0 ? (
                    <p className="text-xs text-red-600 font-medium">Limit reached</p>
                  ) : auditsRemaining <= 1 ? (
                    <p className="text-xs text-amber-600 font-medium">{auditsRemaining} audit remaining</p>
                  ) : (
                    <p className="text-xs text-gray-500">{auditsRemaining} audits remaining</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-blue-900">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">{tierFeatures.responseTime}</div>
                <p className="text-xs text-blue-700 mt-1">
                  {tierFeatures.priorityReview ? "Priority queue" : "Standard review"}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-green-900">Support Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold text-green-900 capitalize">{tierFeatures.supportLevel}</div>
                <Link href="/pricing" className="text-xs text-green-700 hover:underline mt-1 inline-block">
                  Upgrade for faster support →
                </Link>
              </CardContent>
            </Card>
          </div>

          {auditsRemaining === 0 && userTier === "starter" && (
            <Alert className="mb-8 bg-amber-50 border-2 border-amber-300">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              <AlertDescription className="text-amber-900 ml-2">
                <strong>Monthly limit reached!</strong> You've used all {monthlyAuditsLimit} free audits this month.
                <Link href="/pricing" className="text-primary font-bold hover:underline ml-2">
                  Upgrade to Priority for 10 audits/month →
                </Link>
              </AlertDescription>
            </Alert>
          )}

          {/* Helpful Tips */}
          <Alert className="mb-8 bg-blue-50 border-2 border-blue-200">
            <Info className="h-5 w-5 text-blue-600" />
            <AlertDescription className="text-blue-900 ml-2">
              <strong>Tip:</strong> Projects move from Pending Payment → Under Review → Completed. Completed audits
              unlock access to our full Cortex deep analysis service.
            </AlertDescription>
          </Alert>

          {/* Search and Filter */}
          <div className="mb-8 space-y-6">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search your projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 py-6 text-base border-2 border-gray-200 focus:border-primary rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Status Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-gray-600">Filter by status:</span>
              {Object.entries(statusConfig).map(([status, config]) => {
                const isSelected = selectedStatuses.includes(status)
                return (
                  <button
                    key={status}
                    onClick={() => toggleStatus(status)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      isSelected
                        ? `${config.color} text-white shadow-lg scale-105`
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {config.label}
                    {isSelected && <X className="inline-block ml-1 h-3 w-3" />}
                  </button>
                )
              })}
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                  Clear filters
                </Button>
              )}
            </div>

            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold text-primary">{filteredProjects.length}</span> of{" "}
              <span className="font-semibold">{projects.length}</span> projects
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => {
                const config = statusConfig[project.status]
                const StatusIcon = config.icon

                return (
                  <Card
                    key={project.id}
                    className="border-2 border-gray-200 bg-white hover:border-primary hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <Badge className={`${config.color} text-white border-0`}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {config.label}
                        </Badge>
                        {project.total_score && (
                          <Badge variant="outline" className="font-bold text-lg">
                            {project.total_score}/100
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl text-gray-900">{project.project_name}</CardTitle>
                      <CardDescription className="text-sm line-clamp-2">{project.project_description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                        <Badge variant="secondary">{project.category}</Badge>
                        <Badge variant="secondary">{project.country}</Badge>
                        <Badge variant="secondary">Created {new Date(project.created_at).toLocaleDateString()}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/projects/${project.id}`} className="w-full">
                        <Button variant="outline" className="w-full group bg-transparent">
                          View Details
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters</p>
              <Button onClick={clearAllFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
