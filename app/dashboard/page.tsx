import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import type { Metadata } from "next"
import { CommandCenter } from "@/components/command-center"

type Initiative = {
  id: string
  title: string
  description: string | null
  category: string | null
  status: string
  country: string | null
  project_code: string | null
  progress: number | null
  updated_at: string
  created_at: string
  risks: unknown[] | null
  milestones: unknown[] | null
  objectives: unknown[] | null
  budget: number | null
}

type EvidenceDocument = {
  id: string
  title: string
  initiative_id: string
  status: string | null
  completion_percentage: number | null
  updated_at: string
}

export const metadata: Metadata = {
  title: "Command Center | Cort3x",
  description: "Live innovation intelligence command center across evidence and execution.",
}

export const dynamic = "force-dynamic"

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login?next=/dashboard")
  }

  const [initiativesResult, documentsResult] = await Promise.all([
    supabase.from("initiatives").select("*").order("updated_at", { ascending: false }),
    supabase
      .from("documents")
      .select("id,title,initiative_id,status,completion_percentage,updated_at")
      .order("updated_at", { ascending: false })
      .limit(100),
  ])

  if (initiativesResult.error) {
    console.error("Command Center initiatives fetch failed", initiativesResult.error)
  }

  if (documentsResult.error) {
    console.error("Command Center evidence fetch failed", documentsResult.error)
  }

  const initiatives = (initiativesResult.data || []) as Initiative[]
  const documents = (documentsResult.data || []) as EvidenceDocument[]

  return <CommandCenter initiatives={initiatives} documents={documents} />
}
