import { createServiceClient } from "@/lib/supabase/service"
import { AuthorizationError, requireAdmin } from "@/lib/auth/admin"
import { NextResponse } from "next/server"

export const runtime = "edge"

// This endpoint runs every Friday at midnight UTC (0 0 * * 5)
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return updateDocuments()
}

// Manual updates are restricted to authenticated administrators.
export async function POST() {
  try {
    await requireAdmin()
    return updateDocuments()
  } catch (error) {
    if (error instanceof AuthorizationError) {
      return NextResponse.json({ error: error.message }, { status: error.status })
    }

    return NextResponse.json({ error: "Authorization check failed" }, { status: 500 })
  }
}

async function updateDocuments() {
  try {
    const supabase = createServiceClient()

    const { data, error } = await supabase
      .from("documents")
      .update({ updated_at: new Date().toISOString() })
      .neq("id", "")
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
