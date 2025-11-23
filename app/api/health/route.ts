import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { monitoring } from "@/lib/monitoring"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

export async function GET() {
  const startTime = Date.now()
  const checks: Record<string, { status: "healthy" | "degraded" | "down"; latency?: number; error?: string }> = {}

  try {
    const supabase = await createClient()
    const checkStart = Date.now()
    const { error } = await supabase.from("users").select("id").limit(1)
    const latency = Date.now() - checkStart

    if (error) {
      checks.database = { status: "down", error: error.message, latency }
      await monitoring.trackHealthCheck("database", "down", { error: error.message })
    } else if (latency > 1000) {
      checks.database = { status: "degraded", latency }
      await monitoring.trackHealthCheck("database", "degraded", { latency })
    } else {
      checks.database = { status: "healthy", latency }
    }
  } catch (error) {
    checks.database = { status: "down", error: String(error) }
    await monitoring.trackHealthCheck("database", "down", { error: String(error) })
  }

  try {
    const redisUrl = process.env.KV_REST_API_URL
    const redisToken = process.env.KV_REST_API_TOKEN

    if (!redisUrl || !redisToken) {
      checks.redis = { status: "down", error: "Redis credentials not configured" }
    } else {
      const checkStart = Date.now()
      const response = await fetch(`${redisUrl}/ping`, {
        headers: { Authorization: `Bearer ${redisToken}` },
      })
      const latency = Date.now() - checkStart

      if (!response.ok) {
        checks.redis = { status: "down", latency }
        await monitoring.trackHealthCheck("redis", "down", { statusCode: response.status })
      } else if (latency > 500) {
        checks.redis = { status: "degraded", latency }
      } else {
        checks.redis = { status: "healthy", latency }
      }
    }
  } catch (error) {
    checks.redis = { status: "down", error: String(error) }
    await monitoring.trackHealthCheck("redis", "down", { error: String(error) })
  }

  const totalLatency = Date.now() - startTime
  const allHealthy = Object.values(checks).every((check) => check.status === "healthy")
  const anyDown = Object.values(checks).some((check) => check.status === "down")

  const overallStatus = anyDown ? "unhealthy" : allHealthy ? "healthy" : "degraded"

  return NextResponse.json(
    {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      checks,
      latency: totalLatency,
    },
    {
      status: anyDown ? 503 : 200,
    },
  )
}
