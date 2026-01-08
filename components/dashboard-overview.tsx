"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts"

interface DashboardSummary {
  total_initiatives: number
  active_initiatives: number
  completed_initiatives: number
  planning_initiatives: number
  average_progress: number
  total_budget: number
  countries_count: number
}

interface InitiativesData {
  category: string
  status: string
  count: number
  avg_progress: number
  total_budget: number
}

interface GeographyData {
  country: string
  initiative_count: number
  avg_progress: number
  total_budget: number
}

export function DashboardOverview() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null)
  const [progressData, setProgressData] = useState<InitiativesData[]>([])
  const [geoData, setGeoData] = useState<GeographyData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadDashboardData() {
      try {
        const supabase = createClient()

        // Load summary
        const { data: summaryData, error: summaryError } = await supabase.from("dashboard_summary").select("*").single()

        if (summaryError) throw summaryError

        setSummary(summaryData)

        // Load progress breakdown
        const { data: progressBreakdown, error: progressError } = await supabase
          .from("initiatives_progress_breakdown")
          .select("*")

        if (progressError) throw progressError

        setProgressData(progressBreakdown || [])

        // Load geography
        const { data: geoBreakdown, error: geoError } = await supabase.from("initiatives_by_geography").select("*")

        if (geoError) throw geoError

        setGeoData(geoBreakdown || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error loading dashboard data")
        console.error("[v0] Dashboard data load error:", err)
      } finally {
        setLoading(false)
      }
    }

    loadDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">Cargando datos del dashboard...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-destructive">Error: {error}</p>
      </div>
    )
  }

  if (!summary) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-muted-foreground">No hay datos disponibles</p>
      </div>
    )
  }

  // Prepare data for status distribution pie chart
  const statusData = [
    { name: "Activas", value: summary.active_initiatives, fill: "#65793C" },
    { name: "Planificación", value: summary.planning_initiatives, fill: "#D97706" },
    { name: "Completadas", value: summary.completed_initiatives, fill: "#10b981" },
  ]

  // Prepare progress breakdown for chart
  const progressByCategory = progressData
    .reduce(
      (acc, item) => {
        const existing = acc.find((x) => x.category === item.category)
        if (existing) {
          existing.progress += item.avg_progress * item.count
          existing.count += item.count
        } else {
          acc.push({
            category: item.category,
            progress: item.avg_progress * item.count,
            count: item.count,
          })
        }
        return acc
      },
      [] as Array<{ category: string; progress: number; count: number }>,
    )
    .map((item) => ({
      ...item,
      progress: Number((item.progress / item.count).toFixed(2)),
    }))

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Iniciativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summary.total_initiatives}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {summary.active_initiatives} activas, {summary.completed_initiatives} completadas
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Progreso Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summary.average_progress}%</div>
            <p className="text-xs text-muted-foreground mt-1">Completación general</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Presupuesto Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${(summary.total_budget / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground mt-1">Asignación global</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Países</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summary.countries_count}</div>
            <p className="text-xs text-muted-foreground mt-1">Cobertura geográfica</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución por Estado</CardTitle>
            <CardDescription>Iniciativas activas vs planificación vs completadas</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Progress by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Progreso por Categoría</CardTitle>
            <CardDescription>Completación promedio por tipo de iniciativa</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={progressByCategory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="progress" fill="#65793C" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Distribución Geográfica</CardTitle>
            <CardDescription>Iniciativas y presupuesto por país</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={geoData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis yAxisId="left" label={{ value: "Iniciativas", angle: -90, position: "insideLeft" }} />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  label={{ value: "Presupuesto (M)", angle: 90, position: "insideRight" }}
                />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="initiative_count" fill="#65793C" name="Iniciativas" />
                <Bar yAxisId="right" dataKey="total_budget" fill="#D97706" name="Presupuesto" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
