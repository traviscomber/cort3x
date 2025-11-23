import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { researchTopic, generateDocumentUpdate, analyzeInitiativeProgress } from "@/lib/document-intelligence"
import { rateLimit, RATE_LIMITS } from "@/lib/rate-limit"
import { logger } from "@/lib/logger"

export const maxDuration = 300 // 5 minutes for AI processing

export async function GET(request: Request) {
  try {
    const rateLimitResult = await rateLimit("cron:intelligent-update", RATE_LIMITS.CRON)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          retryAfter: rateLimitResult.reset,
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": rateLimitResult.limit.toString(),
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": rateLimitResult.reset.toString(),
          },
        },
      )
    }

    // Verify cron secret
    const authHeader = request.headers.get("authorization")
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      logger.warn("Unauthorized cron job attempt")
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    return await performIntelligentUpdate()
  } catch (error) {
    logger.error("Intelligent update failed", error)
    return NextResponse.json({ error: "Failed to perform intelligent updates" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const rateLimitResult = await rateLimit("cron:intelligent-update:manual", RATE_LIMITS.CRON)

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          retryAfter: rateLimitResult.reset,
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": rateLimitResult.limit.toString(),
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": rateLimitResult.reset.toString(),
          },
        },
      )
    }

    return await performIntelligentUpdate()
  } catch (error) {
    logger.error("Manual intelligent update failed", error)
    return NextResponse.json({ error: "Failed to perform intelligent updates" }, { status: 500 })
  }
}

async function performIntelligentUpdate() {
  const supabase = await createClient()

  logger.info("Starting intelligent update cycle")

  // Get all initiatives with their documents
  const { data: initiatives, error: initiativesError } = await supabase
    .from("initiatives")
    .select("*, documents(*)")
    .order("created_at", { ascending: false })

  if (initiativesError) throw initiativesError

  const updateResults = []

  // Process each initiative
  for (const initiative of initiatives || []) {
    logger.info("Processing initiative", { initiativeId: initiative.id, title: initiative.title })

    // Research latest developments
    const findings = await researchTopic(initiative.title, initiative.tags || [])

    // Analyze initiative progress
    const progressAnalysis = await analyzeInitiativeProgress(
      initiative.title,
      initiative.progress || 0,
      initiative.documents || [],
    )

    // Update each document with new findings
    for (const doc of initiative.documents || []) {
      logger.info("Updating document", { docId: doc.id, title: doc.title })

      const update = await generateDocumentUpdate(doc.title, doc.content || "", findings)

      // Create update log entry
      const updateLog = {
        date: new Date().toISOString(),
        findings: update.newFindings,
        recommendations: update.recommendations,
        summary: update.updateSummary,
        sources: update.sources,
      }

      // Get existing update history
      const existingHistory = doc.update_history || []
      const newHistory = [...existingHistory, updateLog]

      // Append new findings to content
      const updatedContent = `${doc.content}\n\n## Update ${new Date().toLocaleDateString()} 📊\n\n### New Findings\n${update.newFindings.map((f) => `- ${f}`).join("\n")}\n\n### Recommendations\n${update.recommendations.map((r) => `- ${r}`).join("\n")}\n\n---\n`

      // Update document with new content and history
      const { error: updateError } = await supabase
        .from("documents")
        .update({
          content: updatedContent,
          updated_at: new Date().toISOString(),
          update_history: newHistory,
        })
        .eq("id", doc.id)

      if (updateError) {
        logger.error("Failed to update document", updateError, { docId: doc.id })
      } else {
        updateResults.push({
          document: doc.title,
          findings: update.newFindings.length,
          recommendations: update.recommendations.length,
        })
      }
    }

    // Update initiative with progress analysis
    const { error: initiativeUpdateError } = await supabase
      .from("initiatives")
      .update({
        description: `${initiative.description}\n\n**Latest Progress Assessment (${new Date().toLocaleDateString()}):**\n${progressAnalysis.progressAssessment}`,
        updated_at: new Date().toISOString(),
      })
      .eq("id", initiative.id)

    if (initiativeUpdateError) {
      logger.error("Failed to update initiative", initiativeUpdateError, { initiativeId: initiative.id })
    }
  }

  logger.info("Intelligent update cycle completed", {
    totalUpdates: updateResults.length,
    totalInitiatives: initiatives?.length,
  })

  return NextResponse.json({
    success: true,
    message: "Intelligent document updates completed",
    results: updateResults,
    timestamp: new Date().toISOString(),
  })
}
