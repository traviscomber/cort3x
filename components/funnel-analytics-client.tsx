"use client"

import { useState, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  TrendingUp,
  Mail,
  Search,
  Calendar,
  Filter,
  Download,
  CheckCircle2,
  Clock,
  UserCheck,
  XCircle,
  ArrowUpDown,
} from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface Lead {
  id: string
  name: string
  email: string
  startup_idea: string | null
  status: string
  source: string
  created_at: string
  updated_at: string
  company_name?: string
  role?: string
  lead_score?: number
  engagement_level?: string
  downloaded_canvas?: boolean
}

interface FunnelAnalyticsClientProps {
  initialLeads: Lead[]
}

export function FunnelAnalyticsClient({ initialLeads }: FunnelAnalyticsClientProps) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [isUpdating, setIsUpdating] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<"date" | "score" | "name">("date")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [dateFrom, setDateFrom] = useState<string>("")
  const [dateTo, setDateTo] = useState<string>("")

  const filteredLeads = useMemo(() => {
    const filtered = leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (lead.startup_idea?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)

      const matchesStatus = statusFilter === "all" || lead.status === statusFilter

      const leadDate = new Date(lead.created_at)
      const matchesDateFrom = !dateFrom || leadDate >= new Date(dateFrom)
      const matchesDateTo = !dateTo || leadDate <= new Date(dateTo)

      return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo
    })

    filtered.sort((a, b) => {
      let comparison = 0
      if (sortBy === "date") {
        comparison = new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      } else if (sortBy === "score") {
        comparison = (a.lead_score || 0) - (b.lead_score || 0)
      } else if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name)
      }
      return sortOrder === "asc" ? comparison : -comparison
    })

    return filtered
  }, [leads, searchTerm, statusFilter, sortBy, sortOrder, dateFrom, dateTo])

  const stats = useMemo(() => {
    const total = leads.length
    const newLeads = leads.filter((l) => l.status === "new").length
    const engaged = leads.filter((l) => l.status === "engaged").length
    const converted = leads.filter((l) => l.status === "converted").length
    const conversionRate = total > 0 ? ((converted / total) * 100).toFixed(1) : "0"

    return { total, newLeads, engaged, converted, conversionRate }
  }, [leads])

  const engagementStats = useMemo(() => {
    const cold = leads.filter((l) => (l.lead_score || 0) <= 30).length
    const warm = leads.filter((l) => (l.lead_score || 0) > 30 && (l.lead_score || 0) <= 60).length
    const hot = leads.filter((l) => (l.lead_score || 0) > 60).length
    return { cold, warm, hot }
  }, [leads])

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    setIsUpdating(leadId)
    try {
      const supabase = createClient()
      const { error } = await supabase.from("leads").update({ status: newStatus }).eq("id", leadId)

      if (error) throw error

      setLeads(leads.map((lead) => (lead.id === leadId ? { ...lead, status: newStatus } : lead)))
    } catch (error) {
      console.error("[v0] Error updating lead status:", error)
    } finally {
      setIsUpdating(null)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new":
        return <Clock className="h-4 w-4" />
      case "template_sent":
        return <Mail className="h-4 w-4" />
      case "engaged":
        return <UserCheck className="h-4 w-4" />
      case "converted":
        return <CheckCircle2 className="h-4 w-4" />
      case "unsubscribed":
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "template_sent":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "engaged":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
      case "converted":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "unsubscribed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const exportToCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Company",
      "Role",
      "Status",
      "Lead Score",
      "Engagement",
      "Downloaded Canvas",
      "Created Date",
    ]
    const csvData = filteredLeads.map((lead) => [
      lead.name,
      lead.email,
      lead.company_name || "",
      lead.role || "",
      lead.status,
      lead.lead_score || 0,
      lead.engagement_level || "cold",
      lead.downloaded_canvas ? "Yes" : "No",
      new Date(lead.created_at).toLocaleDateString(),
    ])

    const csvContent = [headers.join(","), ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `impax-leads-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Funnel Analytics</h1>
            <p className="text-muted-foreground mt-1">Track and manage your innovation leads</p>
          </div>
          <Button variant="outline" size="sm" onClick={exportToCSV}>
            <Download className="h-4 w-4 mr-2" />
            Export {filteredLeads.length} Leads to CSV
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Leads</p>
                <p className="text-3xl font-bold text-foreground mt-1">{stats.total}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">All time sign-ups</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">New Leads</p>
                <p className="text-3xl font-bold text-foreground mt-1">{stats.newLeads}</p>
              </div>
              <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Awaiting first contact</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Engaged</p>
                <p className="text-3xl font-bold text-foreground mt-1">{stats.engaged}</p>
              </div>
              <div className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-amber-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Active discussions</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <p className="text-3xl font-bold text-foreground mt-1">{stats.conversionRate}%</p>
              </div>
              <div className="h-12 w-12 bg-green-500/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">{stats.converted} converted</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Cold Leads</p>
                <p className="text-3xl font-bold text-foreground mt-1">{engagementStats.cold}</p>
              </div>
              <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Score 0-30</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Warm Leads</p>
                <p className="text-3xl font-bold text-foreground mt-1">{engagementStats.warm}</p>
              </div>
              <div className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-amber-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Score 31-60</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Hot Leads</p>
                <p className="text-3xl font-bold text-foreground mt-1">{engagementStats.hot}</p>
              </div>
              <div className="h-12 w-12 bg-red-500/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-red-500" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Score 61+</p>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or idea..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="template_sent">Template Sent</SelectItem>
                  <SelectItem value="engaged">Engaged</SelectItem>
                  <SelectItem value="converted">Converted</SelectItem>
                  <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm text-muted-foreground mb-2 block">From Date</label>
                <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
              </div>
              <div className="flex-1">
                <label className="text-sm text-muted-foreground mb-2 block">To Date</label>
                <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
              </div>
              <div className="flex-1">
                <label className="text-sm text-muted-foreground mb-2 block">Sort By</label>
                <Select value={sortBy} onValueChange={(val) => setSortBy(val as any)}>
                  <SelectTrigger>
                    <ArrowUpDown className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="score">Lead Score</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <label className="text-sm text-muted-foreground mb-2 block">Order</label>
                <Select value={sortOrder} onValueChange={(val) => setSortOrder(val as any)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desc">Descending</SelectItem>
                    <SelectItem value="asc">Ascending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {(searchTerm || statusFilter !== "all" || dateFrom || dateTo) && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm("")
                  setStatusFilter("all")
                  setDateFrom("")
                  setDateTo("")
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </Card>

        {/* Leads List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Leads ({filteredLeads.length})</h2>
          </div>

          <div className="grid gap-4">
            {filteredLeads.map((lead) => (
              <Card key={lead.id} className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">{lead.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                          <Mail className="h-3 w-3" />
                          {lead.email}
                        </p>
                      </div>
                      <Badge className={getStatusColor(lead.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(lead.status)}
                          {lead.status.replace("_", " ")}
                        </span>
                      </Badge>
                    </div>

                    {lead.startup_idea && (
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-sm text-foreground">{lead.startup_idea}</p>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(lead.created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span>•</span>
                      <span>Source: {lead.source}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:w-48">
                    <Select
                      value={lead.status}
                      onValueChange={(newStatus) => updateLeadStatus(lead.id, newStatus)}
                      disabled={isUpdating === lead.id}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="template_sent">Template Sent</SelectItem>
                        <SelectItem value="engaged">Engaged</SelectItem>
                        <SelectItem value="converted">Converted</SelectItem>
                        <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            ))}

            {filteredLeads.length === 0 && (
              <Card className="p-12 text-center">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">No leads found</h3>
                <p className="text-muted-foreground">
                  {searchTerm || statusFilter !== "all" || dateFrom || dateTo
                    ? "Try adjusting your filters"
                    : "Leads will appear here as they sign up through the funnel"}
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
