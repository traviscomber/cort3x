"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, Target, DollarSign, CheckCircle } from "lucide-react"
import Link from "next/link"

interface InitiativesChartsProps {
  initiatives: any[]
}

export function InitiativesCharts({ initiatives }: InitiativesChartsProps) {
  const statusData = [
    { name: "Activas", value: initiatives.filter((i) => i.status === "active").length, fill: "#65793C" },
    { name: "Planificación", value: initiatives.filter((i) => i.status === "planning").length, fill: "#D97706" },
    { name: "Completadas", value: initiatives.filter((i) => i.status === "completed").length, fill: "#10b981" },
    { name: "En Pausa", value: initiatives.filter((i) => i.status === "on-hold").length, fill: "#6b7280" },
  ].filter((d) => d.value > 0)

  const categoryData = [
    { name: "Ambiental", value: initiatives.filter((i) => i.category === "environmental").length },
    { name: "Cultural", value: initiatives.filter((i) => i.category === "cultural").length },
    { name: "Personal", value: initiatives.filter((i) => i.category === "personal").length },
    { name: "Otra", value: initiatives.filter((i) => !i.category).length },
  ].filter((d) => d.value > 0)

  const progressData = [
    { name: "0-25%", value: initiatives.filter((i) => (i.progress || 0) < 25).length },
    { name: "25-50%", value: initiatives.filter((i) => (i.progress || 0) >= 25 && (i.progress || 0) < 50).length },
    { name: "50-75%", value: initiatives.filter((i) => (i.progress || 0) >= 50 && (i.progress || 0) < 75).length },
    { name: "75-100%", value: initiatives.filter((i) => (i.progress || 0) >= 75).length },
  ]

  const countryData = [
    { name: "Chile", value: initiatives.filter((i) => i.country === "CL" || i.country === "Chile").length },
    { name: "USA", value: initiatives.filter((i) => i.country === "US" || i.country === "USA").length },
    { name: "Indonesia", value: initiatives.filter((i) => i.country === "ID" || i.country === "Indonesia").length },
    {
      name: "Otros",
      value: initiatives.filter(
        (i) =>
          !i.country ||
          (i.country !== "CL" &&
            i.country !== "US" &&
            i.country !== "ID" &&
            i.country !== "Chile" &&
            i.country !== "USA" &&
            i.country !== "Indonesia"),
      ).length,
    },
  ].filter((d) => d.value > 0)

  const avgProgressByCountry = [
    {
      name: "Chile",
      progress:
        initiatives
          .filter((i) => i.country === "CL" || i.country === "Chile")
          .reduce((sum, i) => sum + (i.progress || 0), 0) /
        Math.max(initiatives.filter((i) => i.country === "CL" || i.country === "Chile").length, 1),
    },
    {
      name: "USA",
      progress:
        initiatives
          .filter((i) => i.country === "US" || i.country === "USA")
          .reduce((sum, i) => sum + (i.progress || 0), 0) /
        Math.max(initiatives.filter((i) => i.country === "US" || i.country === "USA").length, 1),
    },
    {
      name: "Indonesia",
      progress:
        initiatives
          .filter((i) => i.country === "ID" || i.country === "Indonesia")
          .reduce((sum, i) => sum + (i.progress || 0), 0) /
        Math.max(initiatives.filter((i) => i.country === "ID" || i.country === "Indonesia").length, 1),
    },
  ].filter((d) => d.progress > 0)

  const budgetData = initiatives
    .filter((i) => i.budget > 0)
    .sort((a, b) => b.budget - a.budget)
    .slice(0, 10)
    .map((i) => ({
      name: i.title.substring(0, 20),
      budget: i.budget / 1000000, // Convert to millions
    }))

  const totalBudget = initiatives.reduce((sum, i) => sum + (i.budget || 0), 0)
  const avgBudget = initiatives.length > 0 ? totalBudget / initiatives.length : 0
  const avgProgress =
    initiatives.length > 0 ? initiatives.reduce((sum, i) => sum + (i.progress || 0), 0) / initiatives.length : 0

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Iniciativas</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{initiatives.length}</div>
            <p className="text-xs text-muted-foreground">En todas las regiones</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progreso Promedio</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgProgress.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground">Completación general</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Presupuesto Total</CardTitle>
            <DollarSign className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(totalBudget / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">Asignación global</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Iniciativas Activas</CardTitle>
            <CheckCircle className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statusData.find((d) => d.name === "Activas")?.value || 0}</div>
            <p className="text-xs text-muted-foreground">En ejecución actualmente</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución por Estado</CardTitle>
            <CardDescription>Iniciativas por estado actual</CardDescription>
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

        {/* Progress Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución de Progreso</CardTitle>
            <CardDescription>Iniciativas por rango de completación</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#65793C" name="Iniciativas" />
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
              <PieChart>
                <Pie
                  data={countryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {countryData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={["#65793C", "#D97706", "#EA580C", "#10b981"][index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Progress by Country */}
        <Card>
          <CardHeader>
            <CardTitle>Progreso Promedio por País</CardTitle>
            <CardDescription>Completación media por región</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={avgProgressByCountry}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip formatter={(value) => `${(value as number).toFixed(1)}%`} />
                <Line type="monotone" dataKey="progress" stroke="#65793C" strokeWidth={2} name="Progreso %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Budget Analysis */}
      {budgetData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Top 10 Iniciativas por Presupuesto</CardTitle>
            <CardDescription>Asignación de fondos en millones de dólares</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={budgetData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={150} />
                <Tooltip formatter={(value) => `$${(value as number).toFixed(2)}M`} />
                <Bar dataKey="budget" fill="#D97706" name="Presupuesto" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Category Distribution */}
      {categoryData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Distribución por Categoría</CardTitle>
            <CardDescription>Iniciativas por tipo</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#EA580C" name="Iniciativas" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Initiative Details Link */}
      <Card>
        <CardHeader>
          <CardTitle>Análisis Detallado</CardTitle>
          <CardDescription>Accede a visualizaciones más avanzadas de cada iniciativa</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/dashboard/analytics/initiatives" className="p-4 border rounded-lg hover:bg-muted transition">
              <h3 className="font-semibold mb-1">Métricas de Iniciativas</h3>
              <p className="text-sm text-muted-foreground">Progreso, presupuesto y documentos por iniciativa</p>
            </Link>
            <Link href="/dashboard/analytics/performance" className="p-4 border rounded-lg hover:bg-muted transition">
              <h3 className="font-semibold mb-1">Análisis de Performance</h3>
              <p className="text-sm text-muted-foreground">Benchmarks y comparativas detalladas</p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
