import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export const runtime = "edge"

// This endpoint runs every Friday at midnight UTC (0 0 * * 5)
// Can also be triggered manually via POST request
export async function GET(request: Request) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return updateDocuments()
}

export async function POST(request: Request) {
  return updateDocuments()
}

async function updateDocuments() {
  try {
    const supabase = await createClient()

    // Update all documents' updated_at timestamp to current time
    const { data, error } = await supabase
      .from("documents")
      .update({ updated_at: new Date().toISOString() })
      .neq("id", "") // Update all documents
      .select("id, title")

    if (error) {
      console.error("[v0] Error updating documents:", error)
      return NextResponse.json({ error: "Failed to update documents", details: error.message }, { status: 500 })
    }

    console.log(`[v0] Successfully updated ${data?.length || 0} documents on ${new Date().toISOString()}`)

    return NextResponse.json({
      success: true,
      message: `Updated ${data?.length || 0} documents`,
      count: data?.length || 0,
      timestamp: new Date().toISOString(),
      documents: data,
    })
  } catch (error) {
    console.error("[v0] Unexpected error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
