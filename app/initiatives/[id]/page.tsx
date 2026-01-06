"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/browser"
import { useTranslations } from "@/lib/i18n/translations-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, FileText, Tag } from "lucide-react"
import { DocumentCompletionBadge } from "@/components/document-completion-badge"
import { UpdateIndicator } from "@/components/update-indicator"

interface Document {
  id: string
  title: string
  description: string
  content: string
  created_at: string
  updated_at: string
  file_size: number
  category: string
  tags: string[]
  status: string
  completion_percentage: number
  documentation_standard: string
  metadata: {
    completion_checklist?: Record<string, boolean>
  }
}

interface Initiative {
  id: string
  title: string
  description: string
  status: string
}

const getInitiativeTheme = (initiativeId: string) => {
  const themes = {
    "the-nusantara-code": {
      background: "from-primary/5 to-white",
      badge: "bg-primary/10 text-primary hover:bg-primary/20",
      icon: "text-primary",
      accent: "primary",
    },
    "royal-pop-indonesia": {
      background: "from-orange-50 to-white",
      badge: "bg-orange-100 text-orange-800 hover:bg-orange-200",
      icon: "text-orange-600",
      accent: "orange",
    },
  }
  return themes[initiativeId as keyof typeof themes] || themes["the-nusantara-code"]
}

const isRecentlyUpdated = (createdAt: string, updatedAt: string) => {
  const created = new Date(createdAt)
  const updated = new Date(updatedAt)
  const daysSinceUpdate = (Date.now() - updated.getTime()) / (1000 * 60 * 60 * 24)

  return daysSinceUpdate <= 7 && updated > created
}

const getDaysSinceUpdate = (updatedAt: string) => {
  const updated = new Date(updatedAt)
  const days = Math.floor((Date.now() - updated.getTime()) / (1000 * 60 * 60 * 24))

  if (days === 0) return "Updated today"
  if (days === 1) return "Updated yesterday"
  if (days < 7) return `Updated ${days} days ago`
  if (days < 30) return `Updated ${Math.floor(days / 7)} weeks ago`
  return `Updated ${Math.floor(days / 30)} months ago`
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
    strategy: "bg-primary/10 text-primary",
    governance: "bg-orange-100 text-orange-800",
    "strategic-business": "bg-orange-100 text-orange-800",
  }
  return colors[category] || "bg-gray-100 text-gray-800"
}

const getTranslatedDocument = (doc: Document, t: (key: string) => string): Document => {
  if (doc.id === "seguria-market-analysis") {
    return {
      ...doc,
      title: t("initiatives.seguriaMarketAnalysis.title") || doc.title,
      description: t("initiatives.seguriaMarketAnalysis.description") || doc.description,
    }
  }
  return doc
}

export default function InitiativePage({ params }: { params: { id: string } }) {
  const { t } = useTranslations()
  const [initiative, setInitiative] = useState<Initiative | null>(null)
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const supabase = createClient()

        const [initRes, docsRes] = await Promise.all([
          supabase.from("initiatives").select("*").eq("id", params.id).single(),
          supabase
            .from("documents")
            .select("*")
            .eq("initiative_id", params.id)
            .order("created_at", { ascending: true }),
        ])

        if (initRes.data) setInitiative(initRes.data as Initiative)
        if (docsRes.data) setDocuments(docsRes.data as Document[])
      } catch (error) {
        console.error("Error fetching initiative data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params.id])

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading initiative...</p>
        </div>
      </div>
    )
  }

  if (!initiative) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-2xl font-semibold mb-2">Initiative not found</h3>
          <p className="text-muted-foreground mb-6">The initiative you're looking for doesn't exist.</p>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const theme = getInitiativeTheme(params.id)

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.background}`}>
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Initiative Header */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Badge className={`mb-4 ${theme.badge}`}>{initiative.status || "Active"}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{initiative.title}</h1>
          <p className="text-xl text-muted-foreground text-pretty">{initiative.description}</p>
        </div>
      </section>

      {/* Documents Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Documentation</h2>

          {documents.length === 0 ? (
            <Card className="p-12 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg text-muted-foreground mb-4">No documents available yet</p>
              <p className="text-sm text-muted-foreground">
                Documents will appear here once they are populated from the admin panel
              </p>
            </Card>
          ) : (
            <div className="space-y-6">
              {documents.map((doc: Document) => {
                const translatedDoc = getTranslatedDocument(doc, t)

                return (
                  <Link key={doc.id} href={`/initiatives/${params.id}/documents/${doc.id}`}>
                    <Card className="transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer relative">
                      <div className="absolute -top-2 -right-2 z-10">
                        <UpdateIndicator updatedAt={doc.updated_at} createdAt={doc.created_at} />
                      </div>

                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <FileText className={`h-6 w-6 ${theme.icon} flex-shrink-0 mt-1`} />
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-xl mb-2 text-balance">{translatedDoc.title}</CardTitle>
                            <CardDescription className="text-pretty">{translatedDoc.description}</CardDescription>
                          </div>
                        </div>
                        {doc.completion_percentage !== undefined && (
                          <div className="mt-3">
                            <DocumentCompletionBadge
                              percentage={doc.completion_percentage}
                              standard={doc.documentation_standard}
                            />
                          </div>
                        )}
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {doc.updated_at && new Date(doc.updated_at) > new Date(doc.created_at)
                                ? getDaysSinceUpdate(doc.updated_at)
                                : formatDate(doc.created_at)}
                            </span>
                          </div>
                          {doc.file_size && (
                            <div className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              <span>{formatFileSize(doc.file_size)}</span>
                            </div>
                          )}
                          {doc.category && (
                            <Badge variant="secondary" className={getCategoryColor(doc.category)}>
                              {doc.category}
                            </Badge>
                          )}
                          {doc.status && doc.status !== "published" && (
                            <Badge variant="outline" className="border-yellow-500 text-yellow-700">
                              {doc.status}
                            </Badge>
                          )}
                        </div>
                        {doc.tags && doc.tags.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2 mt-3">
                            <Tag className="h-3 w-3 text-muted-foreground" />
                            {doc.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
