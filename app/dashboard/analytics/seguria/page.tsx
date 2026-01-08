import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { SeguriaArchitectureDiagram } from "@/components/seguria-architecture-diagram"
import { InitiativePerformanceMetrics } from "@/components/initiative-performance-metrics"
import { SectorAnalysisCards } from "@/components/sector-analysis-cards"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SegurIA Security Analytics | Impax Cort3x",
  description: "Detailed analytics and performance metrics for SegurIA Security initiative",
}

export default async function SeguriaAnalyticsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Header */}
      <div className="border-b border-primary/10 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            <Link href="/dashboard/analytics">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Analytics
              </Button>
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-foreground">SegurIA Security - Detailed Analytics</h1>
          <p className="text-muted-foreground mt-1">AI-Powered Fraud Detection Platform</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Architecture Diagram */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Technical Architecture</h2>
          <SeguriaArchitectureDiagram />
        </section>

        {/* Performance Metrics */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Performance Metrics</h2>
          <InitiativePerformanceMetrics initiativeId="seguria-security" initiativeTitle="SegurIA Security" />
        </section>

        {/* Sector Analysis */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Sector-Specific Solutions & Market Analysis</h2>
          <SectorAnalysisCards />
        </section>
      </div>
    </div>
  )
}
