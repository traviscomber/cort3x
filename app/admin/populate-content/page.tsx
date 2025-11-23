"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { populateNusantaraCodeContent, cleanAndRepopulateNusantaraCode, populatePlatformBusinessPlan } from "./actions"

export default function PopulateContentPage() {
  const [isPopulating, setIsPopulating] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handlePopulate = async () => {
    setIsPopulating(true)
    setResult(null)

    try {
      const message = await populateNusantaraCodeContent()
      setResult(typeof message === "string" ? message : JSON.stringify(message))
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsPopulating(false)
    }
  }

  const handleCleanAndRepopulate = async () => {
    setIsPopulating(true)
    setResult(null)

    try {
      const message = await cleanAndRepopulateNusantaraCode()
      setResult(typeof message === "string" ? message : JSON.stringify(message))
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsPopulating(false)
    }
  }

  const handlePopulatePlatformPlan = async () => {
    setIsPopulating(true)
    setResult(null)

    try {
      const message = await populatePlatformBusinessPlan()
      setResult(typeof message === "string" ? message : JSON.stringify(message))
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsPopulating(false)
    }
  }

  const handleManualUpdate = async () => {
    setIsPopulating(true)
    setResult(null)

    try {
      const response = await fetch("/api/cron/update-documents", {
        method: "POST",
      })
      const data = await response.json()

      if (response.ok) {
        setResult(`✅ Successfully updated ${data.count || 0} documents at ${new Date().toLocaleString()}`)
      } else {
        setResult(`❌ Error: ${data.error || "Failed to update documents"}`)
      }
    } catch (error) {
      setResult(`❌ Error: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsPopulating(false)
    }
  }

  const handleIntelligentUpdate = async () => {
    setIsPopulating(true)
    setResult(null)

    try {
      const response = await fetch("/api/cron/intelligent-update", {
        method: "POST",
      })
      const data = await response.json()

      if (response.ok) {
        const summary = data.results
          ?.map((r: any) => `${r.document}: ${r.findings} findings, ${r.recommendations} recommendations`)
          .join("\n")
        setResult(`✅ AI Update Complete!\n\n${summary}\n\nTimestamp: ${new Date(data.timestamp).toLocaleString()}`)
      } else {
        setResult(`❌ Error: ${data.error || "Failed to perform intelligent update"}`)
      }
    } catch (error) {
      setResult(`❌ Error: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsPopulating(false)
    }
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Populate Content</h1>
          <p className="text-muted-foreground">
            Populate or update The Nusantara Code documents with comprehensive content
          </p>
        </div>

        <Card className="p-6 border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">🤖</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                  AI-Powered Intelligent Updates
                </h2>
                <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                  Use AI to research latest news, analyze documents, and automatically update content with new findings
                  and strategic recommendations. This system:
                </p>
                <ul className="text-sm text-purple-800 dark:text-purple-200 mb-4 space-y-1 list-disc list-inside">
                  <li>Searches for recent news and developments (last 30 days)</li>
                  <li>Analyzes key insights and emerging trends</li>
                  <li>Updates document content with new findings</li>
                  <li>Provides actionable recommendations for next steps</li>
                  <li>Tracks all changes in update history</li>
                </ul>
                <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-3 mb-4">
                  <p className="text-xs text-purple-900 dark:text-purple-100">
                    <strong>⚡ Processing time:</strong> 3-5 minutes per initiative (AI analysis + content generation)
                  </p>
                </div>
                <Button
                  onClick={handleIntelligentUpdate}
                  disabled={isPopulating}
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  {isPopulating ? "🤖 AI Analyzing & Updating..." : "🚀 RUN AI INTELLIGENT UPDATE"}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-blue-500 bg-blue-50 dark:bg-blue-950">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">🔄</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-2">Automatic Weekly Updates</h2>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                  All documents are automatically refreshed <strong>every Friday at midnight UTC</strong> to show they
                  are actively maintained. The "Updated X days ago" indicator will reflect this weekly refresh.
                </p>
                <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mb-4">
                  <p className="text-xs text-blue-900 dark:text-blue-100">
                    <strong>📅 Next automatic update:</strong> This Friday at 00:00 UTC
                  </p>
                </div>
                <Button
                  onClick={handleManualUpdate}
                  disabled={isPopulating}
                  size="lg"
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 bg-transparent"
                >
                  {isPopulating ? "Updating..." : "🔄 Trigger Manual Update Now"}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 border-2 border-emerald-500 bg-emerald-50 dark:bg-emerald-950">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">🔄</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">Restore All Documents</h2>
                <p className="text-sm text-emerald-800 dark:text-emerald-200 mb-4">
                  Click the button below to immediately restore all 8 Nusantara Code documents with full content,
                  including Presidential Regulation No. 110/2025.
                </p>
                <Button
                  onClick={handlePopulate}
                  disabled={isPopulating}
                  size="lg"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  {isPopulating ? "Restoring Documents..." : "🚀 RESTORE ALL DOCUMENTS NOW"}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Advanced Options</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Use these options if you need to clean up duplicates or manage documents
              </p>

              <div className="space-y-3">
                <Button
                  onClick={handleCleanAndRepopulate}
                  disabled={isPopulating}
                  size="lg"
                  variant="destructive"
                  className="w-full"
                >
                  {isPopulating ? "Cleaning & Repopulating..." : "Clean & Repopulate (Remove Duplicates)"}
                </Button>

                <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                  <p className="text-xs text-amber-900 dark:text-amber-100">
                    <strong>⚠️ About Clean & Repopulate:</strong> This option deletes ALL existing documents first, then
                    creates 8 fresh documents. Use this only if you have duplicates or corrupted data.
                  </p>
                </div>
              </div>
            </div>

            {result && (
              <div
                className={`p-4 rounded-lg ${
                  result?.includes("Error") || result?.includes("Warning")
                    ? "bg-red-50 text-red-900 dark:bg-red-950 dark:text-red-100"
                    : "bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100"
                }`}
              >
                <pre className="whitespace-pre-wrap text-sm">{result}</pre>
              </div>
            )}
          </div>
        </Card>

        <Card className="p-6 border-2 border-secondary bg-secondary/10">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-3xl">📊</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">Platform Business Plan & Pitch Deck</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Add a complete business plan and investor pitch deck as a new initiative card. Includes monetization
                  strategy, financial projections, and go-to-market plan.
                </p>
                <Button
                  onClick={handlePopulatePlatformPlan}
                  disabled={isPopulating}
                  size="lg"
                  className="w-full"
                  variant="secondary"
                >
                  {isPopulating ? "Creating Initiative..." : "📈 ADD BUSINESS PLAN INITIATIVE"}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
