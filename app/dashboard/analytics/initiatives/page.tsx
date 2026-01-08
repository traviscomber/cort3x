import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { InitiativeComparisonMatrix } from "@/components/initiative-comparison-matrix"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Initiative Analysis | Impax Cort3x",
  description: "Comparative analysis of all initiatives in the portfolio",
}

export default async function InitiativesAnalyticsPage() {
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
          <Link href="/dashboard/analytics">
            <Button variant="ghost" size="sm" className="mb-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Analytics
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Initiative Portfolio Analysis</h1>
          <p className="text-muted-foreground mt-1">Comparative metrics and strategic alignment</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <InitiativeComparisonMatrix />
      </div>
    </div>
  )
}
