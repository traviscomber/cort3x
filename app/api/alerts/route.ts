import { type NextRequest, NextResponse } from "next/server"
import { logger } from "@/lib/logger"
import type { MonitoringEvent } from "@/lib/monitoring"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const event: MonitoringEvent = await request.json()

    // Log all alerts regardless of environment
    logger.info("Alert received", { event })

    // Log critical events with error level for better visibility
    if (event.severity === "critical") {
      logger.error("CRITICAL ALERT - Requires immediate attention", { event })
    }

    // Additional processing logic can be added here
    // For example, sending notifications or triggering alerts

    return NextResponse.json({ success: true })
  } catch (error) {
    logger.error("Failed to process alert", error)
    return NextResponse.json({ error: "Failed to process alert" }, { status: 500 })
  }
}
