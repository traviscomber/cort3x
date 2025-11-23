import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { PartnershipSubmissionsClient } from "@/components/partnership-submissions-client"

export default async function PartnershipSubmissionsPage() {
  const supabase = await createClient()

  // Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Fetch all partnership submissions
  const { data: submissions, error } = await supabase
    .from("partnership_submissions")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("[v0] Error fetching partnership submissions:", error)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PartnershipSubmissionsClient initialSubmissions={submissions || []} />
    </div>
  )
}
