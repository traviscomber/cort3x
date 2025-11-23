"use client"

import type React from "react"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { FileText, TrendingUp, Users, Leaf, Building2, Gem, Hotel, Search, X, BookOpen, Lock, Bot } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export function DocsPageClient() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setIsAuthenticated(!!user)
      setIsLoading(false)
    }
    checkAuth()
  }, [])

  const studies = [
    {
      code: "DOC-004",
      title: "AI Agents & Architecture",
      description:
        "Technical overview of deployed AI agents (@FeasibilityAgent), dual-memory architecture, and intelligent document update system",
      href: "/docs/agents-summary",
      icon: Bot,
      tags: ["Platform", "AI Agents", "Architecture", "Technical"],
      category: "Platform Documentation",
      status: "Published",
      lastUpdated: "January 2025",
      isPublic: true,
    },
    {
      code: "DOC-003",
      title: "Privacy & Data Security",
      description:
        "Comprehensive guide on how we handle AI processing, protect your data, and ensure confidentiality. Covers data retention, model training policies, and security architecture",
      href: "/docs/privacy-security",
      icon: FileText,
      tags: ["Platform", "Privacy", "Security", "Data Protection", "AI"],
      category: "Platform Documentation",
      status: "Published",
      lastUpdated: "December 2024",
      isPublic: true,
    },
    {
      code: "DOC-001",
      title: "Platform Whitepaper",
      description:
        "Comprehensive technical documentation covering Impax Cort3x methodology, AI-powered scoring system, service tiers, and innovation framework",
      href: "/docs/whitepaper",
      icon: BookOpen,
      tags: ["Platform", "AI Scoring", "Methodology", "Technical"],
      category: "Platform Documentation",
      status: "Published",
      lastUpdated: "December 2024",
      isPublic: true,
    },
    {
      code: "DOC-002",
      title: "One-Page Summary",
      description:
        "Quick overview of Impax Cort3x platform, pricing tiers, deliverables, and 100-point feasibility scoring system",
      href: "/docs/one-pager",
      icon: FileText,
      tags: ["Platform", "Pricing", "Quick Reference"],
      category: "Platform Documentation",
      status: "Published",
      lastUpdated: "December 2024",
      isPublic: true,
    },
    {
      code: "RPI-001",
      title: "Heritage-Carbon Integration Study",
      description:
        "Comprehensive framework connecting Royal Pop Indonesia cultural assets with carbon markets and IDX participation",
      href: "/docs/heritage-carbon-integration",
      icon: Leaf,
      tags: ["Carbon Markets", "Cultural Heritage", "IDX", "Sultanates"],
      category: "Strategic Framework",
      status: "Published",
      lastUpdated: "November 11, 2025",
      isPublic: false,
    },
    {
      code: "CP-001",
      title: "Verde Fashion Partnership Proposal",
      description:
        "Strategic partnership framework for Verde contemporary menswear brand covering CSR programs, heritage collections, and investment opportunities",
      href: "/docs/corporate-partnerships/verde-fashion-proposal",
      icon: Building2,
      tags: ["Corporate Partnership", "Fashion", "CSR", "Investment"],
      category: "Corporate Partnership",
      status: "Published",
      lastUpdated: "November 11, 2025",
      isPublic: false,
    },
    {
      code: "CP-002",
      title: "Indonesian Jewelry Sector Partnership Analysis",
      description:
        "Comprehensive study analyzing partnership opportunities with Indonesian luxury jewelry brands including Nyoman Nuarta × Passion Jewelry, The Palace Jeweler, and others for heritage-backed carbon credit programs",
      href: "/docs/corporate-partnerships/jewelry-sector-analysis",
      icon: Gem,
      tags: ["Jewelry Industry", "Heritage Craftsmanship", "Sustainability", "Carbon Credits"],
      category: "Corporate Partnership",
      status: "Published",
      lastUpdated: "November 11, 2025",
      isPublic: false,
    },
    {
      code: "CP-003",
      title: "Indonesian Hospitality & Tourism Sector Analysis",
      description:
        "Strategic market analysis examining carbon offset opportunities through heritage-integrated sustainability programs for Indonesia's growing hospitality sector with 11M+ annual international arrivals",
      href: "/docs/corporate-partnerships/hospitality-tourism-analysis",
      icon: Hotel,
      tags: ["Hospitality", "Tourism", "Carbon Offsetting", "ESG", "Heritage Tourism"],
      category: "Corporate Partnership",
      status: "Published",
      lastUpdated: "November 11, 2025",
      isPublic: false,
    },
  ]

  const categories = [
    {
      name: "Platform Documentation",
      description: "Core platform documentation, whitepapers, and technical resources about Impax Cort3x",
      color: "bg-primary/10 text-primary",
      isPublic: true,
    },
    {
      name: "Strategic Framework",
      description: "Foundational studies connecting cultural heritage with carbon markets and financial mechanisms",
      color: "bg-green-500/10 text-green-700 dark:text-green-400",
      isPublic: false,
    },
    {
      name: "Corporate Partnership",
      description: "Partnership proposals and sector analyses for fashion, jewelry, and luxury goods collaboration",
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
      isPublic: false,
    },
  ]

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    studies.forEach((study) => {
      study.tags.forEach((tag) => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [])

  const filteredStudies = useMemo(() => {
    return studies.filter((study) => {
      if (!study.isPublic && !isAuthenticated) {
        return false
      }

      const matchesSearch =
        searchQuery === "" ||
        study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((selectedTag) => study.tags.includes(selectedTag))

      return matchesSearch && matchesTags
    })
  }, [searchQuery, selectedTags, isAuthenticated])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTags([])
  }

  const hasActiveFilters = searchQuery !== "" || selectedTags.length > 0

  const handleLockedClick = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading documentation...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Documentation & Research</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            In-depth studies, technical analyses, and strategic frameworks for Impax Cort3x initiatives
          </p>

          {!isAuthenticated && (
            <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <div className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-amber-900 dark:text-amber-100">
                    Some documents require authentication
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-200 mt-1">
                    Strategic Framework and Corporate Partnership studies are available to registered users only.{" "}
                    <Link href="/" className="underline hover:no-underline font-medium">
                      Sign in to access
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-muted/50 rounded-lg inline-block">
            <p className="text-sm text-muted-foreground mb-2 font-medium">Study Classification System:</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div>
                <span className="font-mono font-semibold">RPI-XXX</span> = Royal Pop Indonesia Strategic Framework
              </div>
              <div>
                <span className="font-mono font-semibold">CP-XXX</span> = Corporate Partnership Studies
              </div>
              <div>
                <span className="font-mono font-semibold">DOC-XXX</span> = Platform Documentation
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search studies by title, description, code, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Filter by tags:</span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`text-sm px-3 py-1.5 rounded-full border transition-all ${
                  selectedTags.includes(tag)
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background hover:bg-muted border-border"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 p-4 bg-muted/50 rounded-lg">
              <span className="text-sm font-medium">Active filters:</span>
              {searchQuery && (
                <span className="text-sm px-3 py-1 bg-background rounded-full border flex items-center gap-2">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="hover:text-destructive">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20 flex items-center gap-2"
                >
                  {tag}
                  <button onClick={() => toggleTag(tag)} className="hover:text-destructive">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button
                onClick={clearFilters}
                className="text-sm px-3 py-1 bg-destructive/10 text-destructive rounded-full hover:bg-destructive/20 transition-colors"
              >
                Clear all
              </button>
              <span className="text-sm text-muted-foreground ml-auto">
                {filteredStudies.length} {filteredStudies.length === 1 ? "study" : "studies"} found
              </span>
            </div>
          )}
        </div>

        {filteredStudies.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No studies found matching your criteria</p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          categories.map((category) => {
            const categoryStudies = filteredStudies.filter((s) => s.category === category.name)
            const showCategory = category.isPublic || isAuthenticated || categoryStudies.length > 0

            if (!showCategory && !category.isPublic && !isAuthenticated) {
              return (
                <div key={category.name} className="mb-12">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold flex items-center gap-2">
                        {category.name}
                        <Lock className="w-5 h-5 text-muted-foreground" />
                      </h2>
                      <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                        Authentication Required
                      </span>
                    </div>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>

                  <div className="p-8 border-2 border-dashed rounded-lg bg-muted/30 text-center">
                    <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Protected Content</h3>
                    <p className="text-muted-foreground mb-4">
                      Sign in to access {category.name.toLowerCase()} studies and detailed analyses
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Sign in to view
                    </Link>
                  </div>
                </div>
              )
            }

            if (categoryStudies.length === 0) return null

            return (
              <div key={category.name} className="mb-12">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <span className={`text-xs px-3 py-1 rounded-full ${category.color}`}>
                      {categoryStudies.length} {categoryStudies.length === 1 ? "Study" : "Studies"}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryStudies.map((study) => {
                    const Icon = study.icon
                    const isLocked = !study.isPublic && !isAuthenticated

                    return (
                      <div
                        key={study.href}
                        className={`group bg-card border rounded-lg hover:shadow-lg transition-shadow ${
                          isLocked ? "opacity-75" : ""
                        }`}
                      >
                        <Link
                          href={isLocked ? "#" : study.href}
                          className="block p-6"
                          onClick={isLocked ? handleLockedClick : undefined}
                        >
                          <div className="mb-3 flex items-center justify-between">
                            <span className="text-xs font-mono font-semibold px-2 py-1 bg-primary/10 text-primary rounded">
                              {study.code}
                            </span>
                            {isLocked && <Lock className="w-4 h-4 text-muted-foreground" />}
                          </div>

                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                                {study.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3">{study.description}</p>
                            </div>
                          </div>
                        </Link>

                        <div className="px-6 pb-4">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.tags.map((tag) => (
                              <button
                                key={tag}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleTag(tag)
                                }}
                                className={`text-xs px-2 py-1 rounded-full transition-all ${
                                  selectedTags.includes(tag)
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted hover:bg-muted/80"
                                }`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <span className="font-medium text-primary">{study.status}</span>
                            <span>{study.lastUpdated}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })
        )}

        {!hasActiveFilters && (
          <div className="mt-12 p-8 bg-muted/50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">About Our Research</h2>
            <p className="text-muted-foreground mb-6">
              Impax Cort3x conducts rigorous research to connect environmental sustainability with cultural heritage
              preservation, economic development, and innovative financial mechanisms. Our studies integrate:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Market Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Quantitative assessments of carbon markets, financial projections, and investment opportunities
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Stakeholder Engagement</h3>
                <p className="text-sm text-muted-foreground">
                  Frameworks for collaboration between government, sultanates, communities, and private sector
                </p>
              </div>
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Policy Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Alignment with national regulations, international standards, and sustainable development goals
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
