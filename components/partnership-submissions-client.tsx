"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageSquare,
  Eye,
  CheckCircle2,
  Clock,
  XCircle,
  Download,
  Search,
  Plus,
} from "lucide-react"
import { createBrowserClient } from "@/lib/supabase/client"

interface SultanateSubmission {
  id: string
  sultanate_name: string
  sultanate_region: string
  sultanate_established_year: number | null
  sultanate_website: string | null
  contact_title: string
  contact_name: string
  contact_position: string
  contact_email: string
  contact_phone: string
  interest_level: string
  preferred_communication: string
  message: string | null
  cultural_assets: string | null
  additional_notes: string | null
  status: string
  created_at: string
  updated_at: string
}

interface Props {
  initialSubmissions: SultanateSubmission[]
}

export function PartnershipSubmissionsClient({ initialSubmissions }: Props) {
  const [submissions, setSubmissions] = useState<SultanateSubmission[]>(initialSubmissions)
  const [selectedSubmission, setSelectedSubmission] = useState<SultanateSubmission | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [dateFrom, setDateFrom] = useState<string>("")
  const [dateTo, setDateTo] = useState<string>("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "contacted":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "in_discussion":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "partnership_agreed":
        return "bg-green-100 text-green-800 border-green-200"
      case "declined":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new":
        return <Clock className="h-4 w-4" />
      case "contacted":
        return <Mail className="h-4 w-4" />
      case "in_discussion":
        return <MessageSquare className="h-4 w-4" />
      case "partnership_agreed":
        return <CheckCircle2 className="h-4 w-4" />
      case "declined":
        return <XCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const updateStatus = async (id: string, newStatus: string) => {
    const supabase = createBrowserClient()
    const { error } = await supabase.from("sultanate_submissions").update({ status: newStatus }).eq("id", id)

    if (error) {
      console.error("[v0] Error updating submission status:", error)
      return
    }

    setSubmissions(
      submissions.map((sub) =>
        sub.id === id ? { ...sub, status: newStatus, updated_at: new Date().toISOString() } : sub,
      ),
    )

    if (selectedSubmission?.id === id) {
      setSelectedSubmission({ ...selectedSubmission, status: newStatus, updated_at: new Date().toISOString() })
    }
  }

  const filteredSubmissions = useMemo(() => {
    return submissions.filter((sub) => {
      const matchesStatus = filter === "all" || sub.status === filter

      const matchesSearch =
        searchTerm === "" ||
        sub.sultanate_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.sultanate_region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.contact_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.contact_email.toLowerCase().includes(searchTerm.toLowerCase())

      const subDate = new Date(sub.created_at)
      const matchesDateFrom = !dateFrom || subDate >= new Date(dateFrom)
      const matchesDateTo = !dateTo || subDate <= new Date(dateTo)

      return matchesStatus && matchesSearch && matchesDateFrom && matchesDateTo
    })
  }, [submissions, filter, searchTerm, dateFrom, dateTo])

  const stats = {
    total: submissions.length,
    new: submissions.filter((s) => s.status === "new").length,
    contacted: submissions.filter((s) => s.status === "contacted").length,
    inDiscussion: submissions.filter((s) => s.status === "in_discussion").length,
    agreed: submissions.filter((s) => s.status === "partnership_agreed").length,
  }

  const exportToCSV = () => {
    const headers = [
      "Sultanate Name",
      "Region",
      "Contact Name",
      "Position",
      "Email",
      "Phone",
      "Status",
      "Interest Level",
      "Preferred Language",
      "Submitted Date",
    ]

    const csvData = filteredSubmissions.map((sub) => [
      sub.sultanate_name,
      sub.sultanate_region,
      sub.contact_name,
      sub.contact_position,
      sub.contact_email,
      sub.contact_phone,
      sub.status,
      sub.interest_level,
      sub.preferred_communication,
      new Date(sub.created_at).toLocaleDateString(),
    ])

    const csvContent = [headers.join(","), ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `sultanate-submissions-${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageSquare className="h-8 w-8 text-[#6B7C59]" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Partnership Submissions</h1>
              <p className="text-gray-600">Manage and review partnership inquiries</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild className="bg-[#6B7C59] hover:bg-[#5a6449]">
              <a href="/partnership">
                <Plus className="h-4 w-4 mr-2" />
                New Submission
              </a>
            </Button>
            <Button variant="outline" onClick={exportToCSV}>
              <Download className="h-4 w-4 mr-2" />
              Export {filteredSubmissions.length} to CSV
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
            <div className="text-sm text-gray-600">Total Submissions</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
            <div className="text-sm text-gray-600">New</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-yellow-600">{stats.contacted}</div>
            <div className="text-sm text-gray-600">Contacted</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-purple-600">{stats.inDiscussion}</div>
            <div className="text-sm text-gray-600">In Discussion</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">{stats.agreed}</div>
            <div className="text-sm text-gray-600">Partnership Agreed</div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")} size="sm">
          All ({stats.total})
        </Button>
        <Button variant={filter === "new" ? "default" : "outline"} onClick={() => setFilter("new")} size="sm">
          New ({stats.new})
        </Button>
        <Button
          variant={filter === "contacted" ? "default" : "outline"}
          onClick={() => setFilter("contacted")}
          size="sm"
        >
          Contacted ({stats.contacted})
        </Button>
        <Button
          variant={filter === "in_discussion" ? "default" : "outline"}
          onClick={() => setFilter("in_discussion")}
          size="sm"
        >
          In Discussion ({stats.inDiscussion})
        </Button>
        <Button
          variant={filter === "partnership_agreed" ? "default" : "outline"}
          onClick={() => setFilter("partnership_agreed")}
          size="sm"
        >
          Agreed ({stats.agreed})
        </Button>
      </div>

      <Card className="p-4 mb-6">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by sultanate, region, or contact..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
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
          </div>

          {(searchTerm || dateFrom || dateTo) && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchTerm("")
                setDateFrom("")
                setDateTo("")
              }}
            >
              Clear Filters
            </Button>
          )}
        </div>
      </Card>

      {/* Submissions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Submissions List */}
        <div className="space-y-4">
          {filteredSubmissions.length === 0 ? (
            <Card>
              <CardContent className="pt-12 pb-12 text-center text-gray-500">
                No submissions found for this filter
              </CardContent>
            </Card>
          ) : (
            filteredSubmissions.map((submission) => (
              <Card
                key={submission.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedSubmission?.id === submission.id ? "ring-2 ring-amber-500" : ""
                }`}
                onClick={() => setSelectedSubmission(submission)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-[#6B7C59]" />
                        {submission.sultanate_name}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <MapPin className="h-4 w-4" />
                        {submission.sultanate_region}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(submission.status)}>
                      {getStatusIcon(submission.status)}
                      <span className="ml-1">{submission.status.replace("_", " ")}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="h-4 w-4" />
                      {submission.contact_email}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="h-4 w-4" />
                      {submission.contact_phone}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      {new Date(submission.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 w-full bg-transparent">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Submission Details */}
        <div className="lg:sticky lg:top-6 lg:h-fit">
          {selectedSubmission ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-[#6B7C59]" />
                  {selectedSubmission.sultanate_name}
                </CardTitle>
                <Badge className={`w-fit ${getStatusColor(selectedSubmission.status)}`}>
                  {getStatusIcon(selectedSubmission.status)}
                  <span className="ml-1">{selectedSubmission.status.replace("_", " ")}</span>
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium">Contact Person:</span> {selectedSubmission.contact_name}
                    </div>
                    <div>
                      <span className="font-medium">Position:</span> {selectedSubmission.contact_position}
                    </div>
                    <div>
                      <span className="font-medium">Email:</span>{" "}
                      <a href={`mailto:${selectedSubmission.contact_email}`} className="text-amber-600 hover:underline">
                        {selectedSubmission.contact_email}
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">Phone:</span>{" "}
                      <a href={`tel:${selectedSubmission.contact_phone}`} className="text-amber-600 hover:underline">
                        {selectedSubmission.contact_phone}
                      </a>
                    </div>
                    <div>
                      <span className="font-medium">Preferred Language:</span>{" "}
                      {selectedSubmission.preferred_communication}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    {selectedSubmission.sultanate_region}
                  </div>
                </div>

                {selectedSubmission.message && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Message</h3>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                      {selectedSubmission.message}
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Submission Date</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    {new Date(selectedSubmission.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Update Status</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateStatus(selectedSubmission.id, "new")}
                      className="text-blue-600 hover:bg-blue-50"
                    >
                      New
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateStatus(selectedSubmission.id, "contacted")}
                      className="text-yellow-600 hover:bg-yellow-50"
                    >
                      Contacted
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateStatus(selectedSubmission.id, "in_discussion")}
                      className="text-purple-600 hover:bg-purple-50"
                    >
                      In Discussion
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateStatus(selectedSubmission.id, "partnership_agreed")}
                      className="text-green-600 hover:bg-green-50"
                    >
                      Partnership Agreed
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateStatus(selectedSubmission.id, "declined")}
                      className="col-span-2 text-red-600 hover:bg-red-50"
                    >
                      Declined
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-12 pb-12 text-center text-gray-500">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Select a submission to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
