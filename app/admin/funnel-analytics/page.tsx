import { createServerClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { FunnelAnalyticsClient } from "@/components/funnel-analytics-client"

export const metadata = {
  title: "Funnel Analytics | Admin",
  description: "Track lead conversions and funnel performance",
}

export default async function FunnelAnalyticsPage() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Fetch leads data
  const { data: leads, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("[v0] Error fetching leads:", error)
  }

  return <FunnelAnalyticsClient initialLeads={leads || []} />
}
