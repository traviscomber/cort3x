import { createClient } from "@/lib/supabase/server"
import { redirect, notFound } from "next/navigation"
import type { Metadata } from "next"
import { InitiativeIntelligenceWorkspace } from "@/components/initiative-intelligence-workspace"

type EvidenceDocument = {
  id: string
  title: string
  description?: string | null
  completion_percentage: number | null
  status: string | null
  created_at: string
  updated_at: string
}

type Initiative = {
  id: string
  title: string
  description?: string | null
  category?: string | null
  country?: string | null
  status: string
  progress: number | null
  budget: number | null
  created_at: string
  updated_at: string
  created_by?: string | null
  project_code?: string | null
  lead?: string | null
  start_date?: string | null
  end_date?: string | null
  risks?: unknown[] | null
  milestones?: unknown[] | null
  objectives?: unknown[] | null
}

export const metadata: Metadata = {
  title: "Initiative Intelligence | Cort3x",
  description: "Evidence, risk and execution context for a Cort3x initiative.",
}

export const dynamic = "force-dynamic"

export default async function InitiativeDashboardPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect(`/auth/login?next=/dashboard/initiatives/${encodeURIComponent(params.id)}`)
  }

  const [initiativeResult, documentsResult] = await Promise.all([
    supabase.from("initiatives").select("*").eq("id", params.id).single(),
    supabase
      .from("documents")
      .select("id,title,description,completion_percentage,status,created_at,updated_at")
      .eq("initiative_id", params.id)
      .order("updated_at", { ascending: false }),
  ])

  if (initiativeResult.error || !initiativeResult.data) {
    console.error("Initiative workspace fetch failed", initiativeResult.error)
    notFound()
  }

  if (documentsResult.error) {
    console.error("Initiative evidence fetch failed", documentsResult.error)
  }

  return (
    <InitiativeIntelligenceWorkspace
      initiative={initiativeResult.data as Initiative}
      documents={(documentsResult.data || []) as EvidenceDocument[]}
    />
  )
}
