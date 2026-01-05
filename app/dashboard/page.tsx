import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import type { Metadata } from "next"
import { DashboardClient } from "@/components/dashboard-client"

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

  const initiatives = initiativesResult.data || []
  const allInitiatives = allInitiativesResult.data || []
  const recentLeads = leadsResult.data || []

  const activeCount = allInitiatives.filter((i) => i.status === "active").length
  const completedCount = allInitiatives.filter((i) => i.status === "completed").length

  const stats = {
    totalProjects: allInitiatives.length,
    activeProjects: activeCount,
    completedProjects: completedCount,
    avgProgress:
      initiatives.length > 0 ? initiatives.reduce((sum, i) => sum + (i.progress || 0), 0) / initiatives.length : 0,
    totalLeads: recentLeads.length,
    totalPartnershipSubmissions: 0, // Removed non-existent table query
  }

  return (
    <DashboardClient
      initiatives={initiatives}
      stats={stats}
      user={user}
      recentLeads={recentLeads}
      recentPartnershipSubmissions={[]}
    />
  )
}
