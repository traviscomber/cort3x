"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  Target,
  CheckCircle2,
  Clock,
  AlertCircle,
  BarChart3,
  Calendar,
  Users,
  DollarSign,
  LogOut,
  Sparkles,
  FileText,
  Handshake,
} from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { UpdateProgressDialog } from "@/components/update-progress-dialog"

interface Initiative {
  id: string
  title: string
  description: string
  category: string
  status: string
  progress: number
  project_code: string
  milestones: any[]
  objectives: any[]
  risks: any[]
  budget: number
  start_date: string
  end_date: string
  lead: string
  created_at: string
  updated_at: string
}

interface DashboardStats {
  totalProjects: number
  activeProjects: number
  completedProjects: number
  avgProgress: number
  totalLeads: number
  totalPartnershipSubmissions: number
}

interface DashboardClientProps {
  initiatives: Initiative[]
  stats: DashboardStats
  user: any
  recentLeads: any[]
  recentPartnershipSubmissions: any[]
}

export function DashboardClient({
  initiatives,
  stats,
  user,
  recentLeads,
  recentPartnershipSubmissions,
}: DashboardClientProps) {
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null)
  const [isProgressDialogOpen, setIsProgressDialogOpen] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  const handleUpdateProgress = (initiative: Initiative) => {
    console.log("[v0] Opening progress dialog for:", initiative.title)
    setSelectedInitiative(initiative)
    setIsProgressDialogOpen(true)
  }

  const filteredInitiatives =
    filterStatus === "all" ? initiatives : initiatives.filter((i) => i.status === filterStatus)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-700 border-green-500/20"
      case "completed":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20"
      case "planning":
        return "bg-amber-500/10 text-amber-700 border-amber-500/20"
      case "on-hold":
        return "bg-gray-500/10 text-gray-700 border-gray-500/20"
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "environmental":
        return "bg-primary/10 text-primary border-primary/20"
      case "cultural":
        return "bg-secondary/10 text-secondary border-secondary/20"
      case "personal":
        return "bg-accent/10 text-accent border-accent/20"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getProgressColor = (progress: number) => {
    if (progress >= 75) return "bg-green-500"
    if (progress >= 50) return "bg-blue-500"
    if (progress >= 25) return "bg-amber-500"
    return "bg-gray-400"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Header */}
      <div className="border-b border-primary/10 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Project Dashboard</h1>
              <p className="text-muted-foreground mt-1">Track your innovation projects in real-time</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium">{user.email}</p>
                <p className="text-xs text-muted-foreground">Logged in</p>
              </div>
              <Link href="/initiatives/new">
                <Button className="bg-primary hover:bg-primary/90">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  New Project
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 bg-transparent"
              >
                <LogOut className="h-4 w-4 mr-2" />
                {isLoggingOut ? "Logging out..." : "Logout"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <BarChart3 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalProjects}</div>
              <p className="text-xs text-muted-foreground mt-1">Across all categories</p>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-gradient-to-br from-green-500/5 to-background">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeProjects}</div>
              <p className="text-xs text-muted-foreground mt-1">Currently in progress</p>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-background">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.completedProjects}</div>
              <p className="text-xs text-muted-foreground mt-1">Successfully delivered</p>
            </CardContent>
          </Card>

          <Card className="border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-background">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Progress</CardTitle>
              <Target className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgProgress}%</div>
              <p className="text-xs text-muted-foreground mt-1">Overall completion</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Recent Activity sections */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Quick Actions */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sparkles className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>Jump to key areas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/funnel">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Sales Funnel
                </Button>
              </Link>
              <Link href="/admin/funnel-analytics">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Funnel Analytics ({stats.totalLeads} leads)
                </Button>
              </Link>
              <Link href="/admin/partnership-submissions">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Handshake className="mr-2 h-4 w-4" />
                  Partnership Submissions ({stats.totalPartnershipSubmissions})
                </Button>
              </Link>
              <Link href="/docs">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="mr-2 h-4 w-4" />
                  Documentation
                </Button>
              </Link>
              <Link href="/demo">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <Target className="mr-2 h-4 w-4" />
                  Test Funnel Demo
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recent Leads Activity */}
          <Card className="border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="h-5 w-5 text-green-600" />
                Recent Leads
              </CardTitle>
              <CardDescription>Latest funnel submissions</CardDescription>
            </CardHeader>
            <CardContent>
              {recentLeads.length === 0 ? (
                <p className="text-sm text-muted-foreground">No leads yet</p>
              ) : (
                <div className="space-y-3">
                  {recentLeads.slice(0, 3).map((lead) => (
                    <div key={lead.id} className="flex items-start justify-between text-sm">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{lead.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{lead.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge className="text-xs">{lead.engagement_level || "cold"}</Badge>
                          <span className="text-xs text-muted-foreground">Score: {lead.lead_score || 0}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <Link href="/admin/funnel-analytics">
                    <Button variant="link" className="w-full text-xs p-0">
                      View all leads →
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Partnership Submissions */}
          <Card className="border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Handshake className="h-5 w-5 text-blue-600" />
                Partnerships
              </CardTitle>
              <CardDescription>Latest partnership inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              {recentPartnershipSubmissions.length === 0 ? (
                <p className="text-sm text-muted-foreground">No submissions yet</p>
              ) : (
                <div className="space-y-3">
                  {recentPartnershipSubmissions.slice(0, 3).map((submission) => (
                    <div key={submission.id} className="flex items-start justify-between text-sm">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{submission.sultanate_name || submission.contact_name}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {submission.sultanate_region || submission.contact_email}
                        </p>
                        <Badge className="text-xs mt-1">{submission.status || "new"}</Badge>
                      </div>
                    </div>
                  ))}
                  <Link href="/admin/partnership-submissions">
                    <Button variant="link" className="w-full text-xs p-0">
                      View all submissions →
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Tabs value={filterStatus} onValueChange={setFilterStatus} className="w-full">
          <TabsList className="bg-primary/5">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="planning">Planning</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value={filterStatus} className="mt-6 space-y-4">
            {filteredInitiatives.length === 0 ? (
              <Card className="border-dashed border-2 border-primary/20">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No projects found</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    {filterStatus === "all"
                      ? "Get started by creating your first innovation project"
                      : `No projects with status "${filterStatus}"`}
                  </p>
                  <Link href="/initiatives/new">
                    <Button>Create Your First Project</Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              filteredInitiatives.map((initiative) => (
                <Card key={initiative.id} className="border-primary/10 hover:border-primary/30 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          {initiative.project_code && (
                            <Badge variant="outline" className="font-mono text-xs">
                              {initiative.project_code}
                            </Badge>
                          )}
                          <Badge className={getCategoryColor(initiative.category)}>{initiative.category}</Badge>
                          <Badge className={getStatusColor(initiative.status)}>{initiative.status}</Badge>
                        </div>
                        <CardTitle className="text-xl">{initiative.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{initiative.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold">{initiative.progress || 0}%</span>
                      </div>
                      <Progress value={initiative.progress || 0} className="h-2" />
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-primary/10">
                      {initiative.milestones && (
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          <div>
                            <div className="text-xs text-muted-foreground">Milestones</div>
                            <div className="font-semibold">{initiative.milestones.length || 0}</div>
                          </div>
                        </div>
                      )}
                      {initiative.objectives && (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <div>
                            <div className="text-xs text-muted-foreground">Objectives</div>
                            <div className="font-semibold">{initiative.objectives.length || 0}</div>
                          </div>
                        </div>
                      )}
                      {initiative.risks && (
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-amber-600" />
                          <div>
                            <div className="text-xs text-muted-foreground">Risks</div>
                            <div className="font-semibold">{initiative.risks.length || 0}</div>
                          </div>
                        </div>
                      )}
                      {initiative.budget && (
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-blue-600" />
                          <div>
                            <div className="text-xs text-muted-foreground">Budget</div>
                            <div className="font-semibold">${(initiative.budget / 1000).toFixed(0)}K</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Timeline */}
                    {(initiative.start_date || initiative.end_date) && (
                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {initiative.start_date ? new Date(initiative.start_date).toLocaleDateString() : "Not set"}
                          </span>
                        </div>
                        <span>→</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>
                            {initiative.end_date ? new Date(initiative.end_date).toLocaleDateString() : "Ongoing"}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Lead */}
                    {initiative.lead && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-3 w-3 text-muted-foreground" />
                        <span className="text-muted-foreground">Led by:</span>
                        <span className="font-medium">{initiative.lead}</span>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Link href={`/initiatives/${initiative.id}`} className="flex-1">
                        <Button variant="outline" className="w-full bg-transparent">
                          View Details
                        </Button>
                      </Link>
                      <Button
                        variant="default"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        onClick={() => handleUpdateProgress(initiative)}
                      >
                        Update Progress
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Progress Update Dialog */}
      {selectedInitiative && (
        <UpdateProgressDialog
          initiative={selectedInitiative}
          open={isProgressDialogOpen}
          onOpenChange={setIsProgressDialogOpen}
        />
      )}
    </div>
  )
}
