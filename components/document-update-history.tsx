import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingUp, Lightbulb } from "lucide-react"

interface UpdateLog {
  date: string
  findings: string[]
  recommendations: string[]
  summary: string
  sources: string[]
}

export function DocumentUpdateHistory({
  updateHistory,
}: {
  updateHistory: UpdateLog[]
}) {
  if (!updateHistory || updateHistory.length === 0) {
    return null
  }

  // Show only the 3 most recent updates
  const recentUpdates = updateHistory.slice(-3).reverse()

  return (
    <Card className="border-blue-200 bg-blue-50/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sparkles className="h-5 w-5 text-blue-600" />
          Recent Updates & Intelligence
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentUpdates.map((update, index) => (
          <div key={index} className="rounded-lg border border-blue-200 bg-white p-4 space-y-3">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs">
                {new Date(update.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </Badge>
              <Badge className="bg-blue-600">{update.findings.length} findings</Badge>
            </div>

            <p className="text-sm font-medium text-gray-700">{update.summary}</p>

            {update.findings.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  New Findings
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {update.findings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">•</span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {update.recommendations.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                  <Lightbulb className="h-4 w-4 text-amber-600" />
                  Recommendations
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {update.recommendations.map((rec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">→</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {update.sources.length > 0 && (
              <div className="pt-2 border-t border-gray-200">
                <p className="text-xs text-gray-500">Sources: {update.sources.join(", ")}</p>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
