"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Check, Loader2, ArrowRight, Download, Mail, MousePointer } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface Lead {
  id: string
  email: string
  name: string
  lead_score: number
  engagement_level: string
  canvas_downloaded: boolean
  email_open_count: number
  email_click_count: number
  created_at: string
}

export default function DemoClient() {
  const [currentStep, setCurrentStep] = useState(1)
  const [testEmail, setTestEmail] = useState("")
  const [testName, setTestName] = useState("")
  const [leadData, setLeadData] = useState<Lead | null>(null)
  const [loading, setLoading] = useState(false)

  const supabase = createClient()

  // Step 1: Create a test lead
  const createTestLead = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("leads")
        .insert({
          name: testName,
          email: testEmail,
          company_name: "Demo Company",
          role: "Tester",
          source: "demo",
          lead_score: 10,
          engagement_level: "cold",
        })
        .select()
        .single()

      if (error) throw error

      setLeadData(data)
      setCurrentStep(2)
    } catch (error) {
      console.error("Error creating lead:", error)
      alert("Error creating test lead. Check console for details.")
    } finally {
      setLoading(false)
    }
  }

  // Step 2: Simulate canvas download
  const simulateDownload = async () => {
    if (!leadData) return
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("leads")
        .update({
          canvas_downloaded: true,
          lead_score: (leadData.lead_score || 0) + 30,
          engagement_level: "warm",
        })
        .eq("id", leadData.id)
        .select()
        .single()

      if (error) throw error

      setLeadData(data)
      setCurrentStep(3)
    } catch (error) {
      console.error("Error updating lead:", error)
      alert("Error simulating download. Check console for details.")
    } finally {
      setLoading(false)
    }
  }

  // Step 3: Simulate email open
  const simulateEmailOpen = async () => {
    if (!leadData) return
    setLoading(true)
    try {
      const response = await fetch("/api/track-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: leadData.email, action: "open" }),
      })

      if (!response.ok) throw new Error("API error")

      // Fetch updated lead data
      const { data, error } = await supabase.from("leads").select().eq("id", leadData.id).single()

      if (error) throw error

      setLeadData(data)
      setCurrentStep(4)
    } catch (error) {
      console.error("Error tracking email open:", error)
      alert("Error simulating email open. Check console for details.")
    } finally {
      setLoading(false)
    }
  }

  // Step 4: Simulate email click
  const simulateEmailClick = async () => {
    if (!leadData) return
    setLoading(true)
    try {
      const response = await fetch("/api/track-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: leadData.email, action: "click" }),
      })

      if (!response.ok) throw new Error("API error")

      // Fetch updated lead data
      const { data, error } = await supabase.from("leads").select().eq("id", leadData.id).single()

      if (error) throw error

      setLeadData(data)
      setCurrentStep(5)
    } catch (error) {
      console.error("Error tracking email click:", error)
      alert("Error simulating email click. Check console for details.")
    } finally {
      setLoading(false)
    }
  }

  const getEngagementColor = (level: string) => {
    switch (level) {
      case "hot":
        return "bg-red-500"
      case "warm":
        return "bg-orange-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* Lead Score Display */}
      {leadData && (
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Current Lead Status</span>
              <Badge className={getEngagementColor(leadData.engagement_level || "cold")}>
                {leadData.engagement_level?.toUpperCase() || "COLD"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Lead Score</p>
                <p className="text-3xl font-bold text-primary">{leadData.lead_score || 0}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{leadData.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div>
                <p className="text-xs text-muted-foreground">Canvas Downloaded</p>
                <p className="font-medium">{leadData.canvas_downloaded ? "✓ Yes" : "✗ No"}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email Opens</p>
                <p className="font-medium">{leadData.email_open_count || 0}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email Clicks</p>
                <p className="font-medium">{leadData.email_click_count || 0}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 1: Create Test Lead */}
      <Card className={currentStep >= 1 ? "border-primary" : ""}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {currentStep > 1 && <Check className="h-5 w-5 text-green-500" />}
            Step 1: Create Test Lead
          </CardTitle>
          <CardDescription>Enter test information to create a new lead in the system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={testName}
              onChange={(e) => setTestName(e.target.value)}
              disabled={currentStep > 1}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              disabled={currentStep > 1}
            />
          </div>
          <Button
            onClick={createTestLead}
            disabled={!testName || !testEmail || currentStep > 1 || loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Lead...
              </>
            ) : currentStep > 1 ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Lead Created (+10 points)
              </>
            ) : (
              <>
                Create Test Lead
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Step 2: Canvas Download */}
      <Card className={currentStep === 2 ? "border-primary" : currentStep > 2 ? "border-green-500" : ""}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {currentStep > 2 && <Check className="h-5 w-5 text-green-500" />}
            <Download className="h-5 w-5" />
            Step 2: Download Canvas
          </CardTitle>
          <CardDescription>Simulate downloading the Innovation Canvas (adds 30 points)</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={simulateDownload}
            disabled={currentStep < 2 || currentStep > 2 || loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Downloading...
              </>
            ) : currentStep > 2 ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Canvas Downloaded (+30 points)
              </>
            ) : (
              <>
                Simulate Canvas Download
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Step 3: Email Open */}
      <Card className={currentStep === 3 ? "border-primary" : currentStep > 3 ? "border-green-500" : ""}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {currentStep > 3 && <Check className="h-5 w-5 text-green-500" />}
            <Mail className="h-5 w-5" />
            Step 3: Email Open
          </CardTitle>
          <CardDescription>Simulate opening a follow-up email (adds 5 points)</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={simulateEmailOpen}
            disabled={currentStep < 3 || currentStep > 3 || loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Tracking...
              </>
            ) : currentStep > 3 ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Email Opened (+5 points)
              </>
            ) : (
              <>
                Simulate Email Open
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Step 4: Email Click */}
      <Card className={currentStep === 4 ? "border-primary" : currentStep > 4 ? "border-green-500" : ""}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {currentStep > 4 && <Check className="h-5 w-5 text-green-500" />}
            <MousePointer className="h-5 w-5" />
            Step 4: Email Link Click
          </CardTitle>
          <CardDescription>Simulate clicking a link in the email (adds 10 points)</CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={simulateEmailClick}
            disabled={currentStep < 4 || currentStep > 4 || loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Tracking...
              </>
            ) : currentStep > 4 ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Link Clicked (+10 points)
              </>
            ) : (
              <>
                Simulate Email Click
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Step 5: View Analytics */}
      {currentStep >= 5 && (
        <Card className="border-green-500 bg-green-50 dark:bg-green-950">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
              <Check className="h-5 w-5" />
              Demo Complete!
            </CardTitle>
            <CardDescription>Now view the full analytics dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              Your test lead now has a score of <strong>{leadData?.lead_score || 0} points</strong> and is considered a{" "}
              <strong className="uppercase">{leadData?.engagement_level || "cold"}</strong> lead.
            </p>
            <div className="flex gap-2">
              <Button asChild className="flex-1">
                <a href="/admin/funnel-analytics">
                  View Full Analytics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentStep(1)
                  setLeadData(null)
                  setTestEmail("")
                  setTestName("")
                }}
                className="flex-1"
              >
                Start Over
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Info Card */}
      <Card className="bg-muted">
        <CardHeader>
          <CardTitle className="text-base">Understanding Lead Scoring</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>
            <strong>Lead Score Breakdown:</strong>
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Initial signup: +10 points</li>
            <li>Canvas download: +30 points</li>
            <li>Email open: +5 points per open</li>
            <li>Email click: +10 points per click</li>
          </ul>
          <p className="pt-2">
            <strong>Engagement Levels:</strong>
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>
              <Badge className="bg-blue-500">COLD</Badge> 0-30 points
            </li>
            <li>
              <Badge className="bg-orange-500">WARM</Badge> 31-60 points
            </li>
            <li>
              <Badge className="bg-red-500">HOT</Badge> 61+ points
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
