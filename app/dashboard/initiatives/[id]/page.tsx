import { createClient } from "@/lib/supabase/server"
import { redirect, notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { InitiativeDashboard } from "@/components/initiative-dashboard"
import type { Metadata } from "next"

interface Document {
  id: string
  title: string
  description: string
  completion_percentage: number
  status: string
  created_at: string
  updated_at: string
}

interface Initiative {
  id: string
  title: string
  description?: string
  category?: string
  country?: string
  status: string
  progress: number
  budget: number
  created_at: string
  updated_at: string
  created_by?: string
}

export const metadata: Metadata = {
  title: "Initiative Dashboard | Impax Cort3x",
  description: "Individual initiative dashboard with metrics and visualizations",
}

export default async function InitiativeDashboardPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  console.log("[v0] Dashboard params.id:", params.id)

  // Fetch initiative
  const { data: initiative, error: initError } = (await supabase
    .from("initiatives")
    .select("*")
    .eq("id", params.id)
    .single()) as { data: Initiative | null; error: any }

  console.log("[v0] Initiative fetch error:", initError)
  console.log("[v0] Initiative data:", initiative?.id, initiative?.title)

  if (initError || !initiative) {
    console.log("[v0] Initiative not found, showing 404")
    notFound()
  }

  // Fetch documents for this initiative
  const { data: documents, error: docsError } = (await supabase
    .from("documents")
    .select("*")
    .eq("initiative_id", initiative.id)
    .order("updated_at", { ascending: false })) as { data: Document[] | null; error: any }

  console.log("[v0] Documents fetch error:", docsError)
  console.log("[v0] Documents count:", documents?.length)

  if (docsError) {
    console.error("Error fetching documents:", docsError)
  }

  const docs: Document[] = documents || []

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Header */}
      <div className="border-b border-primary/10 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="mb-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">{initiative.title} - Dashboard</h1>
          <p className="text-muted-foreground mt-1">Detailed metrics and analytics for this initiative</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <InitiativeDashboard initiative={initiative} documents={docs} />
      </div>
    </div>
  )
}
