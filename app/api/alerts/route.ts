import { type NextRequest, NextResponse } from "next/server"
import { logger } from "@/lib/logger"
import type { MonitoringEvent } from "@/lib/monitoring"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const event: MonitoringEvent = await request.json()

    if (process.env.NODE_ENV === "production") {
      // Only try to send to Slack if webhook is configured
      if (process.env.SLACK_WEBHOOK_URL) {
        await sendToSlack(event)
      } else {
        logger.info("Slack webhook not configured, logging alert instead", { event })
      }

      if (event.severity === "critical") {
        await sendToEmergencyChannel(event)
      }
    }

    logger.info("Alert processed", { event })

    return NextResponse.json({ success: true })
  } catch (error) {
    logger.error("Failed to process alert", error)
    return NextResponse.json({ error: "Failed to process alert" }, { status: 500 })
  }
}

async function sendToSlack(event: MonitoringEvent) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL
  if (!webhookUrl) return

  const color = {
    critical: "#dc2626",
    high: "#ea580c",
    medium: "#f59e0b",
    low: "#10b981",
  }[event.severity]

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        attachments: [
          {
            color,
            title: `${event.severity.toUpperCase()} - ${event.type.toUpperCase()}`,
            text: event.message,
            fields: [
              {
                title: "Timestamp",
                value: event.timestamp,
                short: true,
              },
              {
                title: "User ID",
                value: event.userId || "N/A",
                short: true,
              },
            ],
            footer: "Impax Cort3x Monitoring",
            ts: Math.floor(new Date(event.timestamp).getTime() / 1000).toString(),
          },
        ],
      }),
    })
  } catch (error) {
    logger.error("Failed to send Slack notification", error)
  }
}

async function sendToEmergencyChannel(event: MonitoringEvent) {
  logger.error("CRITICAL ALERT - Requires immediate attention", { event })

  // TODO: Add PagerDuty, email, or SMS alerts here when available
}
