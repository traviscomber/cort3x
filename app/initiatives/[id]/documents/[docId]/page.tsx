import { notFound } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Calendar, FileText, Tag, Download, TrendingUp, Users, DollarSign, Target, Leaf } from "lucide-react"
import { DocumentUpdateHistory } from "@/components/document-update-history"
import { DocumentCompletionProgress } from "@/components/document-completion-progress"

interface Document {
  id: string
  title: string
  description: string
  content: string
  date: string
  created_at: string
  updated_at: string
  file_size: number
  category: string
  tags: string[]
  initiative_id: string
  status: string
  completion_percentage: number
  documentation_standard: string
  metadata: {
    version?: string
    change_log?: Array<{
      date: string
      changes: string[]
    }>
    last_reviewed?: string
    completion_checklist?: Record<string, boolean>
  }
  update_history?: Array<{
    date: string
    changes: string[]
  }>
}

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    technical: "bg-blue-100 text-blue-800",
    legal: "bg-purple-100 text-purple-800",
    design: "bg-pink-100 text-pink-800",
    strategy: "bg-emerald-100 text-emerald-800",
    governance: "bg-orange-100 text-orange-800",
  }
  return colors[category] || "bg-gray-100 text-gray-800"
}

const formatDocumentContent = (content: string) => {
  // Split content into sections
  const sections = content.split(/(?=^##\s)/m)

  return sections.map((section, index) => {
    // Extract section title
    const titleMatch = section.match(/^##\s+(.+)$/m)
    const title = titleMatch ? titleMatch[1] : null

    // Check if section contains metrics/numbers
    const hasMetrics = /\d+[%$KM]|\d+,\d+|\d+\.\d+/.test(section)

    // Extract bullet points
    const bullets = section.match(/^[-*]\s+(.+)$/gm)

    // Extract numbered lists
    const numberedItems = section.match(/^\d+\.\s+(.+)$/gm)

    // Check for subsections (###)
    const subsections = section.split(/(?=^###\s)/m).filter((s) => s.trim())

    if (title) {
      // Determine section color based on title keywords
      let accentColor = "emerald"
      let icon = null

      if (title.toLowerCase().includes("economic") || title.toLowerCase().includes("financial")) {
        accentColor = "blue"
        icon = <DollarSign className="h-5 w-5" />
      } else if (title.toLowerCase().includes("social") || title.toLowerCase().includes("community")) {
        accentColor = "purple"
        icon = <Users className="h-5 w-5" />
      } else if (title.toLowerCase().includes("environmental") || title.toLowerCase().includes("sustainability")) {
        accentColor = "green"
        icon = <Leaf className="h-5 w-5" />
      } else if (title.toLowerCase().includes("impact") || title.toLowerCase().includes("outcome")) {
        accentColor = "orange"
        icon = <TrendingUp className="h-5 w-5" />
      } else if (title.toLowerCase().includes("stakeholder") || title.toLowerCase().includes("beneficiar")) {
        accentColor = "pink"
        icon = <Target className="h-5 w-5" />
      }

      return (
        <Card
          key={index}
          className={`mb-8 border-l-4 border-l-${accentColor}-500 shadow-sm hover:shadow-md transition-shadow`}
        >
          <CardHeader className={`bg-${accentColor}-50/50`}>
            <CardTitle className="flex items-center gap-3 text-2xl">
              {icon && <span className={`text-${accentColor}-600`}>{icon}</span>}
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {subsections.length > 1 ? (
              <div className="space-y-6">
                {subsections.map((subsection, subIndex) => {
                  const subTitleMatch = subsection.match(/^###\s+(.+)$/m)
                  const subTitle = subTitleMatch ? subTitleMatch[1] : null
                  const subContent = subsection.replace(/^###\s+.+$/m, "").trim()

                  // Extract metrics from subsection
                  const metrics = subContent.match(/\*\*(\d+[%$KM+]|\d+,\d+|\d+\.\d+[%$KM+]?)\*\*/g)

                  return (
                    <div key={subIndex} className={`pl-4 border-l-2 border-${accentColor}-200`}>
                      {subTitle && <h4 className="text-lg font-semibold mb-3 text-gray-900">{subTitle}</h4>}
                      {metrics && metrics.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                          {metrics.slice(0, 4).map((metric, mIndex) => {
                            const value = metric.replace(/\*\*/g, "")
                            return (
                              <div key={mIndex} className={`bg-${accentColor}-100 rounded-lg p-3 text-center`}>
                                <div className={`text-2xl font-bold text-${accentColor}-700`}>{value}</div>
                              </div>
                            )
                          })}
                        </div>
                      )}
                      <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: subContent }} />
                    </div>
                  )
                })}
              </div>
            ) : (
              <div
                className="prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: section.replace(/^##\s+.+$/m, "").trim() }}
              />
            )}
          </CardContent>
        </Card>
      )
    }

    return <div key={index} className="prose prose-lg max-w-none mb-6" dangerouslySetInnerHTML={{ __html: section }} />
  })
}

const wasUpdated = (createdAt: string, updatedAt: string) => {
  return new Date(updatedAt) > new Date(createdAt)
}

const getRelativeTime = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) return "today"
  if (diffInDays === 1) return "yesterday"
  if (diffInDays < 7) return `${diffInDays} days ago`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
  return `${Math.floor(diffInDays / 30)} months ago`
}

export default async function DocumentPage({
  params,
}: {
  params: { id: string; docId: string }
}) {
  const supabase = await createClient()

  // Fetch document
  const { data: document, error } = await supabase
    .from("documents")
    .select("*")
    .eq("id", params.docId)
    .eq("initiative_id", params.id)
    .single()

  console.log("[v0] Document ID:", params.docId)
  console.log("[v0] Document found:", !!document)
  console.log("[v0] Document has content:", !!document?.content)
  console.log("[v0] Content length:", document?.content?.length || 0)

  if (error || !document) {
    console.log("[v0] Document not found or error:", error)
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href={`/initiatives/${params.id}`}>
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documents
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </header>

      {/* Document Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {wasUpdated(document.created_at, document.updated_at) && (
              <div className="mb-6 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-orange-900 mb-1">
                      Document Updated {getRelativeTime(document.updated_at)}
                    </h3>
                    {document.metadata?.change_log && document.metadata.change_log.length > 0 && (
                      <div className="text-sm text-orange-800 mt-2">
                        <p className="font-medium mb-1">Recent changes:</p>
                        <ul className="list-disc list-inside space-y-1">
                          {document.metadata.change_log[0].changes.map((change: string, idx: number) => (
                            <li key={idx}>{change}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{document.title}</h1>
            <p className="text-xl text-muted-foreground mb-6 text-pretty">{document.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  {wasUpdated(document.created_at, document.updated_at) ? (
                    <>
                      <span className="font-medium text-orange-600">Updated:</span> {formatDate(document.updated_at)}
                      <span className="mx-2">•</span>
                      <span className="text-xs">Created: {formatDate(document.created_at)}</span>
                    </>
                  ) : (
                    <>Created: {formatDate(document.created_at)}</>
                  )}
                </span>
              </div>
              {document.file_size && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>{formatFileSize(document.file_size)}</span>
                </div>
              )}
              {document.metadata?.version && (
                <Badge variant="outline" className="border-blue-500 text-blue-700">
                  v{document.metadata.version}
                </Badge>
              )}
              {document.category && <Badge className={getCategoryColor(document.category)}>{document.category}</Badge>}
              {document.status && (
                <Badge
                  variant={document.status === "published" ? "default" : "outline"}
                  className={document.status === "published" ? "bg-green-600" : "border-yellow-500 text-yellow-700"}
                >
                  {document.status}
                </Badge>
              )}
            </div>

            {document.tags && document.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <Tag className="h-4 w-4 text-muted-foreground" />
                {document.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {document.completion_percentage !== undefined && (
              <div className="mt-6">
                <DocumentCompletionProgress
                  percentage={document.completion_percentage}
                  standard={document.documentation_standard || "standard"}
                  checklist={document.metadata?.completion_checklist}
                />
              </div>
            )}

            {document.metadata?.change_log && document.metadata.change_log.length > 1 && (
              <details className="mt-6 p-4 bg-gray-50 rounded-lg">
                <summary className="cursor-pointer font-medium text-sm text-gray-700 hover:text-gray-900">
                  View Version History ({document.metadata.change_log.length} updates)
                </summary>
                <div className="mt-4 space-y-4">
                  {document.metadata.change_log.map((log, idx) => (
                    <div key={idx} className="border-l-2 border-gray-300 pl-4">
                      <p className="text-sm font-medium text-gray-900 mb-1">{formatDate(log.date)}</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {log.changes.map((change, changeIdx) => (
                          <li key={changeIdx}>• {change}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>
        </div>
      </section>

      {/* Document Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {document.update_history && document.update_history.length > 0 && (
            <div className="mb-8">
              <DocumentUpdateHistory updateHistory={document.update_history} />
            </div>
          )}

          {document.content ? (
            <div className="space-y-6">{formatDocumentContent(document.content)}</div>
          ) : (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-semibold mb-2">No content available</h3>
              <p className="text-muted-foreground">
                The document content is being prepared or has not been uploaded yet.
              </p>
              <Link href={`/initiatives/${params.id}`}>
                <Button className="mt-6 bg-transparent" variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Return to all documents
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
