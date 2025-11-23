import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"
import { logger } from "@/lib/logger"
import { rateLimit } from "@/lib/rate-limit"

export async function GET(request: NextRequest) {
  const rateLimitResult = await rateLimit(request, "email-tracking")
  if (!rateLimitResult.success) {
    return new NextResponse("Rate limit exceeded", { status: 429 })
  }

  const searchParams = request.nextUrl.searchParams
  const leadId = searchParams.get("lead_id")
  const emailId = searchParams.get("email_id")
  const action = searchParams.get("action") // 'open' or 'click'

  if (!leadId || !emailId || !action) {
    return new NextResponse("Missing parameters", { status: 400 })
  }

  try {
    const supabase = await createServerClient()

    // Update email automation log
    if (action === "open") {
      await supabase
        .from("email_automation_log")
        .update({
          opened_at: new Date().toISOString(),
          status: "opened",
        })
        .eq("id", emailId)

      // Increment open count
      await supabase.rpc("increment", {
        table_name: "leads",
        row_id: leadId,
        column_name: "email_open_count",
      })

      logger.info("Email opened", { leadId, emailId })
    } else if (action === "click") {
      await supabase
        .from("email_automation_log")
        .update({
          clicked_at: new Date().toISOString(),
          status: "clicked",
        })
        .eq("id", emailId)

      // Increment click count
      await supabase.rpc("increment", {
        table_name: "leads",
        row_id: leadId,
        column_name: "email_click_count",
      })

      logger.info("Email link clicked", { leadId, emailId })
    }

    // Return 1x1 transparent pixel for email tracking
    const pixel = Buffer.from("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "base64")

    return new NextResponse(pixel, {
      headers: {
        "Content-Type": "image/gif",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    })
  } catch (error) {
    logger.error("Email tracking error", error, { leadId, emailId, action })
    return new NextResponse("Error", { status: 500 })
  }
}
