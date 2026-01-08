"use client"

import { useEffect, useState } from "react"
import { createBrowserClient } from "@/lib/supabase/client"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function DashboardChartsContainer() {
  const [summary, setSummary] = useState<any>(null)
  const [progressBreakdown, setProgressBreakdown] = useState<any[]>([])
  const [geography, setGeography] = useState<any[]>([])
  const [performance, setPerformance] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const supabase = createBrowserClient()

        // Fetch dashboard summary
        const { data: summaryData } = await supabase.from("dashboard_summary").select("*").single()

        setSummary(summaryData)

        // Fetch progress breakdown
        const { data: progressData } = await supabase.from("initiatives_progress_breakdown").select("*")

        setProgressBreakdown(progressData || [])

        // Fetch geography
        const { data: geoData } = await supabase.from("initiatives_by_geography").select("*")

        setGeography(geoData || [])

        // Fetch performance
        const { data: perfData } = await supabase.from("initiative_performance").select("*")

        setPerformance(perfData || [])
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-96 w-full" />
      </div>
    )
  }

  if (!summary) {
    return <div className="text-center py-8 text-muted-foreground">No data available</div>
  }

  const colors = ["#65793C", "#D97706", "#EA580C", "#3B82F6"]

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Iniciativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.total_initiatives}</div>
            <p className="text-xs text-muted-foreground mt-1">{summary.active_initiatives} activas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Progreso Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.average_progress}%</div>
            <p className="text-xs text-muted-foreground mt-1">Avance general</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Presupuesto Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(summary.total_budget / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground mt-1">Asignado</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Países</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.countries_count}</div>
            <p className="text-xs text-muted-foreground mt-1">En operación</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Desglose por Categoría</CardTitle>
            <CardDescription>Progreso por categoría y estado</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={progressBreakdown}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="avg_progress" fill="#65793C" name="Progreso %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución Geográfica</CardTitle>
            <CardDescription>Iniciativas por país</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={geography}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="initiative_count" fill="#D97706" name="Cantidad" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Performance Status */}
        <Card>
          <CardHeader>
            <CardTitle>Estado de Iniciativas</CardTitle>
            <CardDescription>Distribución por estado</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Activas", value: summary.active_initiatives },
                    { name: "Planificación", value: summary.planning_initiatives },
                    { name: "Completadas", value: summary.completed_initiatives },
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {colors.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Budget Allocation */}
        <Card>
          <CardHeader>
            <CardTitle>Top 5 Iniciativas por Presupuesto</CardTitle>
            <CardDescription>Mayor inversión</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performance.sort((a, b) => b.budget - a.budget).slice(0, 5)} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="title" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="budget" fill="#EA580C" name="Presupuesto" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Initiatives Table */}
      <Card>
        <CardHeader>
          <CardTitle>Iniciativas Detalladas</CardTitle>
          <CardDescription>Todas las iniciativas con sus métricas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-4 font-medium">Iniciativa</th>
                  <th className="text-left py-2 px-4 font-medium">Categoría</th>
                  <th className="text-left py-2 px-4 font-medium">Progreso</th>
                  <th className="text-left py-2 px-4 font-medium">Estado</th>
                  <th className="text-left py-2 px-4 font-medium">Documentos</th>
                  <th className="text-left py-2 px-4 font-medium">Presupuesto</th>
                </tr>
              </thead>
              <tbody>
                {performance.map((initiative) => (
                  <tr key={initiative.id} className="border-b hover:bg-muted/50">
                    <td className="py-2 px-4 font-medium">{initiative.title}</td>
                    <td className="py-2 px-4 text-muted-foreground">{initiative.category || "—"}</td>
                    <td className="py-2 px-4">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${initiative.progress}%` }} />
                      </div>
                      {initiative.progress}%
                    </td>
                    <td className="py-2 px-4">
                      <span
                        className="px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor:
                            initiative.status === "active"
                              ? "#dcfce7"
                              : initiative.status === "completed"
                                ? "#dbeafe"
                                : "#fef3c7",
                          color:
                            initiative.status === "active"
                              ? "#166534"
                              : initiative.status === "completed"
                                ? "#1e40af"
                                : "#92400e",
                        }}
                      >
                        {initiative.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">
                      {initiative.completed_documents}/{initiative.document_count}
                    </td>
                    <td className="py-2 px-4">${(initiative.budget / 1000000).toFixed(1)}M</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
