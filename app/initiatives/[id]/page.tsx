import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, BarChart3 } from "lucide-react"
import { DocumentCompletionBadge } from "@/components/document-completion-badge"

interface Document {
  id: string
  title: string
  description: string
  completion_percentage: number
  documentation_standard: string
  category: string
  tags: string[]
  status: string
  created_at: string
  updated_at: string
}

interface Initiative {
  id: string
  title: string
  description: string
}

export default async function InitiativePage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  // Fetch initiative
  const { data: initiative, error: initError } = (await supabase
    .from("initiatives")
    .select("*")
    .eq("id", params.id)
    .single()) as { data: Initiative | null; error: any }

  if (initError || !initiative) {
    notFound()
  }

  // Fetch documents for this initiative - Filter out archived documents
  const { data: documents, error: docsError } = (await supabase
    .from("documents")
    .select("*")
    .eq("initiative_id", params.id)
    .neq("status", "archived")
    .order("created_at", { ascending: true })) as { data: Document[] | null; error: any }

  if (docsError) {
    console.error("Error fetching documents:", docsError)
  }

  const docs: Document[] = documents || []

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/initiatives">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Initiatives
            </Button>
          </Link>
          <Link href={`/dashboard/initiatives/${params.id}`}>
            <Button variant="default" size="sm">
              <BarChart3 className="mr-2 h-4 w-4" />
              View Dashboard
            </Button>
          </Link>
        </div>
      </header>

      {/* Initiative Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{initiative.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty">{initiative.description}</p>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Documents</h2>

          {docs.length === 0 ? (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-2xl font-semibold mb-2">No documents available</h3>
                <p className="text-muted-foreground">Documents will appear here as they are added.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {docs.map((doc) => (
                <Link key={doc.id} href={`/initiatives/${params.id}/documents/${doc.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{doc.title}</CardTitle>
                          <p className="text-muted-foreground">{doc.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <DocumentCompletionBadge
                            percentage={doc.completion_percentage || 0}
                            standard={doc.documentation_standard}
                            size="sm"
                          />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap items-center gap-2">
                        {doc.category && <Badge variant="outline">{doc.category}</Badge>}
                        {doc.tags &&
                          doc.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
