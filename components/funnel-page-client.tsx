"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Users, Zap, Target, Download, Sparkles } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

export function FunnelPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startupIdea: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const supabase = createClient()

      const { data: leadData, error: submitError } = await supabase
        .from("leads")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            startup_idea: formData.startupIdea,
            source: "funnel_page",
            status: "new",
            lead_score: formData.startupIdea ? 15 : 0, // Initial score if they provided an idea
          },
        ])
        .select()
        .single()

      if (submitError) {
        if (submitError.code === "23505") {
          setError("This email is already registered. Check your inbox for your Innovation Canvas.")
        } else {
          setError("Something went wrong. Please try again.")
        }
      } else {
        await supabase.from("email_automation_log").insert([
          {
            lead_id: leadData.id,
            email_type: "welcome_canvas",
            status: "sent",
          },
        ])

        setIsSuccess(true)
      }
    } catch (err) {
      setError("Failed to submit. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-foreground">Welcome to Impax Cort3x!</h1>
            <p className="text-lg text-muted-foreground">Your Innovation Canvas is ready</p>
          </div>

          <div className="bg-primary/5 rounded-lg p-6 space-y-4 text-left">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <Download className="h-5 w-5 text-primary" />
              What happens next:
            </h2>
            <ol className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="font-semibold text-primary">1.</span>
                <span>Check your email for your personalized Innovation Canvas template</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary">2.</span>
                <span>Discover your founder archetype and strategic framework</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-primary">3.</span>
                <span>Get access to exclusive tools and resources to accelerate your journey</span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button asChild className="flex-1">
              <a href="/">
                Explore Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1 bg-transparent">
              <a href="/dashboard">View Dashboard</a>
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              <Sparkles className="h-4 w-4" />
              Free Innovation Canvas Inside
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Your AI Innovation Partner
              <br />
              <span className="text-primary">is Waiting</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Validate, build, and launch sustainable solutions faster with Impax Cort3x&apos;s proven framework
            </p>
          </div>

          {/* Main Form Card */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <Card className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Get Your Free Innovation Canvas</h2>
                <p className="text-muted-foreground">Join over 500 founders already building impactful solutions</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idea">Your Innovation Idea (Optional)</Label>
                  <Textarea
                    id="idea"
                    placeholder="Tell us about your sustainable solution or innovation concept..."
                    value={formData.startupIdea}
                    onChange={(e) => setFormData({ ...formData, startupIdea: e.target.value })}
                    rows={4}
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending Canvas..."
                  ) : (
                    <>
                      Get My Free Canvas
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to receive helpful innovation resources and updates. Unsubscribe anytime.
                </p>
              </form>
            </Card>

            {/* Benefits */}
            <div className="space-y-6">
              <Card className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Build in Days, Not Months</h3>
                    <p className="text-muted-foreground">
                      Follow our proven framework to move from concept to MVP rapidly with structured guidance
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">You Don&apos;t Need a Tech Team</h3>
                    <p className="text-muted-foreground">
                      Access AI-powered tools and expert guidance to build professional solutions independently
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Guided Framework to Launch</h3>
                    <p className="text-muted-foreground">
                      One clear path from idea to MVP to successful launch with measurable impact
                    </p>
                  </div>
                </div>
              </Card>

              {/* Trust Indicators */}
              <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                <p className="text-sm font-medium text-foreground">Trusted by innovative organizations:</p>
                <div className="flex flex-wrap gap-4 items-center justify-center opacity-60">
                  <span className="text-xs font-semibold">UNFCCC</span>
                  <span className="text-xs">•</span>
                  <span className="text-xs font-semibold">Vercel</span>
                  <span className="text-xs">•</span>
                  <span className="text-xs font-semibold">Supabase</span>
                  <span className="text-xs">•</span>
                  <span className="text-xs font-semibold">OpenAI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
