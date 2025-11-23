import { createClient } from "@/lib/supabase/server"
import { ProjectsPageClient } from "@/components/projects-page-client"
import { redirect } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Projects | Impax Cort3x",
  description: "View and manage your innovation projects and feasibility audits.",
  openGraph: {
    title: "My Projects | Impax Cort3x",
    description: "Your personal dashboard for managing innovation projects",
    type: "website",
  },
}

export default async function ProjectsPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: userData } = await supabase
    .from("users")
    .select("subscription_tier, monthly_audits_used, monthly_audits_limit")
    .eq("id", user.id)
    .single()

  const { data: projects } = await supabase
    .from("feasibility_audits")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  return (
    <ProjectsPageClient
      projects={projects || []}
      user={user}
      userTier={userData?.subscription_tier || "starter"}
      monthlyAuditsUsed={userData?.monthly_audits_used || 0}
      monthlyAuditsLimit={userData?.monthly_audits_limit || 3}
    />
  )
}
