import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import type { Metadata } from "next"
import { DashboardClient } from "@/components/dashboard-client"
import { DashboardChartsContainer } from "@/components/dashboard-charts-container"

type Initiative = {
  id: string
  title: string
  description: string | null
  category: string | null
  status: string
  created_by: string | null
  country: string | null
  project_code: string | null
  progress: number | null
  location_data: Record<string, unknown> | null // changed from 'unknown' to match DashboardClient interface
  created_at: string
  updated_at: string
  risks: unknown[] | null // changed from 'unknown' to 'unknown[] | null' for consistency
  milestones: unknown[] | null // changed from 'unknown' to 'unknown[] | null' for consistency
  objectives: unknown[] | null // changed from 'unknown' to 'unknown[] | null' for consistency
  documents: unknown[] | null // changed from 'unknown' to 'unknown[] | null' for consistency
  partners: unknown[] | null // changed from 'unknown' to 'unknown[] | null' for consistency
  budget: number | null // changed from 'unknown' to 'number | null'
  lead: string | null // changed from 'unknown' to 'string | null'
  start_date: string | null
  end_date: string | null
}

export const metadata: Metadata = {
  title: "Dashboard | Impax Cort3x",
  description: "Your project dashboard",
}

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const [initiativesResult, allInitiativesResult, leadsResult] = await Promise.all([
    supabase.from("initiatives").select("*").order("created_at", { ascending: false }),
    supabase.from("initiatives").select("*"),
    supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(5),
  ])

  const initiatives = (initiativesResult.data || []) as Initiative[]
  const allInitiatives = (allInitiativesResult.data || []) as Initiative[]
  const recentLeads = leadsResult.data || []

  const activeCount = allInitiatives.filter((i: Initiative) => i.status === "active").length
  const completedCount = allInitiatives.filter((i: Initiative) => i.status === "completed").length

  const stats = {
    totalProjects: allInitiatives.length,
    activeProjects: activeCount,
    completedProjects: completedCount,
    avgProgress:
      initiatives.length > 0 ? initiatives.reduce((sum, i) => sum + (i.progress || 0), 0) / initiatives.length : 0,
    totalLeads: recentLeads.length,
    totalPartnershipSubmissions: 0,
  }

  return (
    <div className="space-y-8">
      <DashboardClient
        initiatives={initiatives}
        stats={stats}
        user={user}
        recentLeads={recentLeads}
        recentPartnershipSubmissions={[]}
      />

      <div className="mt-12 pt-8 border-t">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-balance">Analytics & Visualizaciones</h2>
          <p className="text-muted-foreground mt-2">Gráficos detallados de todas las iniciativas en tiempo real</p>
        </div>
        <DashboardChartsContainer />
      </div>
    </div>
  )
}
