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

  type Project = {
    id: string
    user_id: string
    project_name: string | null
    project_description: string | null
    category: string | null
    country: string | null
    status: string | null
    created_at: string | null
    [key: string]: unknown
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  try {
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("subscription_tier, monthly_audits_used, monthly_audits_limit")
      .eq("id", user.id)
      .single()

    if (userError) {
      console.log("[v0] User data error:", userError.message)
    }

    const { data: projects, error: projectsError } = await supabase
      .from("feasibility_audits")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })

    if (projectsError) {
      console.log("[v0] Projects error:", projectsError.message)
    }

    const validProjects = ((projects || []) as Project[]).map((p: Project) => ({
      ...p,
      project_name: p.project_name || "Untitled Project",
      project_description: p.project_description || "No description",
      category: p.category || "Other",
      country: p.country || "Unknown",
      status: p.status || "pending",
      created_at: p.created_at || new Date().toISOString(),
    }))

    return (
      <ProjectsPageClient
        projects={validProjects}
        user={user}
        userTier={userData?.subscription_tier || "starter"}
        monthlyAuditsUsed={userData?.monthly_audits_used || 0}
        monthlyAuditsLimit={userData?.monthly_audits_limit || 3}
      />
    )
  } catch (error) {
    console.error("[v0] Projects page error:", error)
    return (
      <ProjectsPageClient projects={[]} user={user} userTier="starter" monthlyAuditsUsed={0} monthlyAuditsLimit={3} />
    )
  }
}
