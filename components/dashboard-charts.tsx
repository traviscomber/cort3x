"use client"

import { useEffect, useState } from "react"
import { createBrowserClient } from "@supabase/ssr"
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
)

const COLORS = ["#65793C", "#D97706", "#EA580C", "#059669", "#3B82F6"]

export function DashboardCharts() {
  const [summary, setSummary] = useState<any>(null)
  const [progressBreakdown, setProgressBreakdown] = useState<any[]>([])
  const [geography, setGeography] = useState<any[]>([])
  const [performance, setPerformance] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch dashboard summary
        const { data: summaryData } = await supabase.from("dashboard_summary").select("*").single()

        setSummary(summaryData)

        // Fetch progress breakdown
        const { data: breakdownData } = await supabase.from("initiatives_progress_breakdown").select("*")

        setProgressBreakdown(breakdownData || [])

        // Fetch geography data
        const { data: geoData } = await supabase.from("initiatives_by_geography").select("*")

        setGeography(geoData || [])

        // Fetch performance data
        const { data: perfData } = await supabase
          .from("initiative_performance")
          .select("*")
          .order("budget", { ascending: false })
          .limit(10)

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
    return <div className="p-8 text-center">Cargando gráficos...</div>
  }

  // Prepare data for status distribution pie chart
  const statusData = summary
    ? [
        { name: "Activas", value: summary.active_initiatives, color: "#65793C" },
        { name: "Planificación", value: summary.planning_initiatives, color: "#D97706" },
        { name: "Completadas", value: summary.completed_initiatives, color: "#059669" },
      ]
    : []

  // Prepare category data for bar chart
  const categoryData = progressBreakdown.reduce((acc: any[], item: any) => {
    const existing = acc.find((d) => d.category === item.category)
    if (existing) {
      existing[item.status] = item.count
    } else {
      acc.push({ category: item.category, [item.status]: item.count })
    }
    return acc
  }, [])

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Iniciativas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary?.total_initiatives || 0}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Progreso Promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary?.average_progress || 0}%</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Presupuesto Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(summary?.total_budget || 0).toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Países</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary?.countries_count || 0}</div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución por Estado</CardTitle>
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
                  {statusData.map((entry: any, index: number) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Geography Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución Geográfica</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={geography}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="initiative_count" fill="#65793C" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Progress by Category */}
        <Card>
          <CardHeader>
            <CardTitle>Progreso Promedio por Categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="active" fill="#65793C" />
                <Bar dataKey="planning" fill="#D97706" />
                <Bar dataKey="completed" fill="#059669" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Budget Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Top 10 Iniciativas por Presupuesto</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="title" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="budget" fill="#D97706" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Performance Table */}
      <Card>
        <CardHeader>
          <CardTitle>Métricas de Iniciativas</CardTitle>
          <CardDescription>Resumen detallado de todas las iniciativas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Iniciativa</th>
                  <th className="text-left py-3 px-4 font-semibold">Categoría</th>
                  <th className="text-left py-3 px-4 font-semibold">Estado</th>
                  <th className="text-left py-3 px-4 font-semibold">Progreso</th>
                  <th className="text-left py-3 px-4 font-semibold">Presupuesto</th>
                  <th className="text-left py-3 px-4 font-semibold">Documentos</th>
                </tr>
              </thead>
              <tbody>
                {performance.map((item: any) => (
                  <tr key={item.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{item.title}</td>
                    <td className="py-3 px-4">{item.category || "N/A"}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          item.status === "active"
                            ? "bg-green-100 text-green-800"
                            : item.status === "planning"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{item.progress || 0}%</td>
                    <td className="py-3 px-4">${(item.budget || 0).toLocaleString()}</td>
                    <td className="py-3 px-4">{item.document_count || 0}</td>
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
