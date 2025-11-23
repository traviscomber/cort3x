"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle2,
  FileText,
  TrendingUp,
  DollarSign,
  Globe,
  Clock,
  Shield,
  ArrowRight,
  ArrowLeft,
  Mail,
  Lock,
} from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

const STEPS = [
  { id: 1, title: "Choose Country", icon: Globe },
  { id: 2, title: "Project Basics", icon: FileText },
  { id: 3, title: "Market & Sustainability", icon: TrendingUp },
  { id: 4, title: "Financial & Team", icon: DollarSign },
  { id: 5, title: "Create Account", icon: Shield },
]

const COUNTRIES = [
  {
    code: "CL",
    name: "Chile",
    city: "Santiago",
    setupWeeks: "2-3",
    flag: "🇨🇱",
    description: "Strong environmental regulations & carbon market leadership",
  },
  {
    code: "US",
    name: "United States",
    city: "Miami",
    setupWeeks: "1-2",
    flag: "🇺🇸",
    description: "Largest market access & advanced regulatory infrastructure",
  },
  {
    code: "ID",
    name: "Indonesia",
    city: "Jakarta",
    setupWeeks: "3-4",
    flag: "🇮🇩",
    description: "Emerging market opportunities & growing green economy",
  },
]

export default function OnboardingClient() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    // Step 1: Country
    country: "ID", // Default to Indonesia

    // Step 2: Project Basics
    projectName: "",
    industry: "",
    projectType: "",
    description: "",

    // Step 3: Market & Sustainability
    targetCustomers: "",
    mainCompetitors: "",
    uniqueValue: "",
    sustainabilityGoals: "",

    // Step 4: Financial & Team
    budgetRange: "",
    revenueModel: "",
    teamSize: "",
    startDate: "",

    // Step 5: Authentication
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1)
      setError(null)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setError(null)
    }
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.country !== ""
      case 2:
        return formData.projectName && formData.industry && formData.description
      case 3:
        return formData.targetCustomers && formData.uniqueValue && formData.sustainabilityGoals
      case 4:
        return formData.budgetRange && formData.revenueModel && formData.teamSize && formData.startDate
      case 5:
        return (
          formData.fullName &&
          formData.email &&
          formData.password &&
          formData.password === formData.confirmPassword &&
          formData.password.length >= 6
        )
      default:
        return true
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()

      // Create user account
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/projects`,
          data: {
            full_name: formData.fullName,
          },
        },
      })

      if (authError) throw authError

      // Wait a moment for auth to settle
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Note: We cannot create the feasibility_audit row here because the user needs to confirm their email first
      // RLS policies will block the insert until auth.uid() exists
      // Instead, we'll store the data in localStorage and create it after email confirmation

      const projectData = {
        project_name: formData.projectName,
        project_description: formData.description,
        country: COUNTRIES.find((c) => c.code === formData.country)?.name || "Indonesia",
        category: formData.industry,
        target_market: formData.targetCustomers,
        competitors: formData.mainCompetitors,
        unique_value: formData.uniqueValue,
        budget_range: formData.budgetRange,
        revenue_model: formData.revenueModel,
        team_size: formData.teamSize,
        timeline_months: formData.startDate,
        market_size: formData.sustainabilityGoals,
      }

      // Store project data in localStorage for after email confirmation
      localStorage.setItem("pending_feasibility_audit", JSON.stringify(projectData))

      // Redirect to success page
      router.push("/onboarding/verify-email")
    } catch (err: any) {
      console.error("[v0] Signup error:", err)
      setError(err.message || "Failed to create account. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F1E8] to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#8B7355] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C3</span>
            </div>
            <span className="font-semibold text-xl">Impax Cort3x</span>
          </Link>
          <Badge variant="outline" className="text-[#8B7355] border-[#8B7355]">
            FREE Feasibility Audit
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section - Only show on first step */}
        {currentStep === 1 && (
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700 text-white">FREE Feasibility Analysis</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get Your Project Scored & Analyzed</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Submit your project details for a comprehensive feasibility audit. Receive your results within 24 hours -
              completely free.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Need faster results? Upgrade to priority review for $100 after submission
            </p>
          </div>
        )}

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-10" />
            <div
              className="absolute top-5 left-0 h-0.5 bg-[#8B7355] transition-all duration-500 -z-10"
              style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
            />

            {STEPS.map((step) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id

              return (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                      isCompleted
                        ? "bg-[#8B7355] border-[#8B7355] text-white"
                        : isActive
                          ? "bg-white border-[#8B7355] text-[#8B7355]"
                          : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                  </div>
                  <div
                    className={`mt-2 text-xs font-medium hidden md:block ${
                      isActive ? "text-[#8B7355]" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{STEPS[currentStep - 1].title}</CardTitle>
            <CardDescription>
              Step {currentStep} of {STEPS.length}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Country Selection */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-[#8B7355]" />
                  <h3 className="text-lg font-semibold">Select your location to get started</h3>
                </div>

                <div className="space-y-3">
                  {COUNTRIES.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => updateField("country", country.code)}
                      className={`w-full p-4 border-2 rounded-lg transition-all hover:border-[#8B7355] text-left ${
                        formData.country === country.code ? "border-[#8B7355] bg-[#F5F1E8]" : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-[#F5F1E8] flex items-center justify-center text-2xl">
                            {country.flag}
                          </div>
                          <div>
                            <div className="font-semibold text-lg flex items-center gap-2">
                              {country.name}
                              <Badge variant="outline" className="text-xs">
                                {country.code}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {country.city} • {country.setupWeeks} weeks setup
                            </div>
                          </div>
                        </div>
                        {formData.country === country.code && (
                          <CheckCircle2 className="w-6 h-6 text-[#8B7355] flex-shrink-0" />
                        )}
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground pl-16">{country.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Project Basics */}
            {currentStep === 2 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="projectName">Project Name *</Label>
                  <Input
                    id="projectName"
                    placeholder="e.g., Verde Fashion Sustainability Program"
                    value={formData.projectName}
                    onChange={(e) => updateField("projectName", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Industry Sector *</Label>
                  <Input
                    id="industry"
                    placeholder="e.g., Fashion, Hospitality, Manufacturing"
                    value={formData.industry}
                    onChange={(e) => updateField("industry", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <select
                    id="projectType"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.projectType}
                    onChange={(e) => updateField("projectType", e.target.value)}
                  >
                    <option value="">Select a type...</option>
                    <option value="new-venture">New Venture / Startup</option>
                    <option value="product-development">Product Development</option>
                    <option value="sustainability-initiative">Sustainability Initiative</option>
                    <option value="expansion">Business Expansion</option>
                    <option value="transformation">Digital/Business Transformation</option>
                    <option value="csr-program">CSR / ESG Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your project, its goals, and what problem it solves. Include any sustainability or ESG objectives."
                    rows={5}
                    value={formData.description}
                    onChange={(e) => updateField("description", e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Be specific about your environmental or social impact goals
                  </p>
                </div>
              </>
            )}

            {/* Step 3: Market & Sustainability */}
            {currentStep === 3 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="targetCustomers">Target Customers *</Label>
                  <Textarea
                    id="targetCustomers"
                    placeholder="Who are your primary customers? Describe demographics, behaviors, and needs."
                    rows={3}
                    value={formData.targetCustomers}
                    onChange={(e) => updateField("targetCustomers", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mainCompetitors">Main Competitors</Label>
                  <Input
                    id="mainCompetitors"
                    placeholder="List 2-3 main competitors or similar solutions"
                    value={formData.mainCompetitors}
                    onChange={(e) => updateField("mainCompetitors", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="uniqueValue">Unique Value Proposition *</Label>
                  <Textarea
                    id="uniqueValue"
                    placeholder="What makes your project different? Why would customers choose you?"
                    rows={3}
                    value={formData.uniqueValue}
                    onChange={(e) => updateField("uniqueValue", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sustainabilityGoals">Sustainability & ESG Goals *</Label>
                  <Textarea
                    id="sustainabilityGoals"
                    placeholder="Describe your environmental, social, or governance objectives. Include specific metrics if available (e.g., reduce carbon by 30%, support 500 artisans)"
                    rows={4}
                    value={formData.sustainabilityGoals}
                    onChange={(e) => updateField("sustainabilityGoals", e.target.value)}
                  />
                </div>
              </>
            )}

            {/* Step 4: Financial & Team */}
            {currentStep === 4 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="budgetRange">Project Budget Range *</Label>
                  <select
                    id="budgetRange"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.budgetRange}
                    onChange={(e) => updateField("budgetRange", e.target.value)}
                  >
                    <option value="">Select budget range...</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-250k">$50,000 - $250,000</option>
                    <option value="250k-1m">$250,000 - $1,000,000</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="5m-plus">$5M+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="revenueModel">Revenue Model *</Label>
                  <Textarea
                    id="revenueModel"
                    placeholder="How will the project generate revenue? Include pricing strategy and revenue streams."
                    rows={3}
                    value={formData.revenueModel}
                    onChange={(e) => updateField("revenueModel", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamSize">Current Team Size *</Label>
                  <select
                    id="teamSize"
                    className="w-full px-3 py-2 border rounded-md"
                    value={formData.teamSize}
                    onChange={(e) => updateField("teamSize", e.target.value)}
                  >
                    <option value="">Select team size...</option>
                    <option value="solo">Solo Founder</option>
                    <option value="2-5">2-5 people</option>
                    <option value="6-15">6-15 people</option>
                    <option value="16-50">16-50 people</option>
                    <option value="50-plus">50+ people</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startDate">Planned Start Date *</Label>
                  <Input
                    id="startDate"
                    type="month"
                    value={formData.startDate}
                    onChange={(e) => updateField("startDate", e.target.value)}
                  />
                </div>
              </>
            )}

            {/* Step 5: Create Account */}
            {currentStep === 5 && (
              <>
                <div className="bg-[#F5F1E8] p-4 rounded-lg mb-6">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#8B7355] mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <div className="font-medium text-[#8B7355] mb-1">Create your account to continue</div>
                      <div className="text-muted-foreground">
                        You'll receive your free feasibility audit report via email within 24 hours. You can upgrade to
                        priority review ($100) from your dashboard.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">We'll send your audit report to this email</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Minimum 6 characters"
                      className="pl-10"
                      value={formData.password}
                      onChange={(e) => updateField("password", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Re-enter your password"
                      className="pl-10"
                      value={formData.confirmPassword}
                      onChange={(e) => updateField("confirmPassword", e.target.value)}
                    />
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-xs text-red-600">Passwords do not match</p>
                  )}
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-sm text-red-800">{error}</p>
                  </div>
                )}

                <div className="border-t pt-6 mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Project Submission</div>
                      <div className="text-3xl font-bold text-green-600">FREE</div>
                    </div>
                    <Badge className="bg-green-600 hover:bg-green-700">No payment required</Badge>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-xs text-blue-900">
                      <strong>Next Steps:</strong> After submission, you can upgrade to priority review ($100) or access
                      full documentation services ($1,000) from your project dashboard.
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    By creating an account, you agree to receive your feasibility audit report and occasional updates
                    about your project analysis.
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1 || isLoading}
            className="min-w-[120px] bg-transparent"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Previous
          </Button>

          {currentStep < STEPS.length ? (
            <Button
              onClick={nextStep}
              disabled={!isStepValid() || isLoading}
              className="min-w-[120px] bg-[#8B7355] hover:bg-[#6D5940]"
            >
              Next
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid() || isLoading}
              className="min-w-[180px] bg-[#8B7355] hover:bg-[#6D5940]"
            >
              {isLoading ? "Creating Account..." : "Create Account & Continue"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Trust Signals */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted by innovators across 3 markets</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Indonesia, Chile, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Confidential Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">24-48 Hour Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
