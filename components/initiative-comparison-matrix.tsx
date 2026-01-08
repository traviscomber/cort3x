"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Globe, Zap, Loader2 } from "lucide-react"

interface InitiativeComparison {
  id: string
  title: string
  category: string
  country: string
  status: string
  progress: number
  budget: number
  created_by: string | null
}

export function InitiativeComparisonMatrix() {
  const [initiatives, setInitiatives] = useState<InitiativeComparison[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadInitiatives() {
      try {
        const supabase = createClient()
        const { data, error: err } = await supabase
          .from("initiatives")
          .select("id, title, category, country, status, progress, budget, created_by")
          .order("progress", { ascending: false })

        if (err) throw err

        setInitiatives(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error loading data")
        console.error("[v0] Error loading initiatives:", err)
      } finally {
        setLoading(false)
      }
    }

    loadInitiatives()
  }, [])

  const getCountryEmoji = (country: string | null) => {
    switch (country) {
      case "CL":
      case "Chile":
        return "🇨🇱"
      case "US":
      case "USA":
        return "🇺🇸"
      case "ID":
      case "Indonesia":
        return "🇮🇩"
      default:
        return "🌍"
    }
  }

  const getCountryName = (country: string | null) => {
    switch (country) {
      case "CL":
        return "Chile"
      case "US":
        return "USA"
      case "ID":
        return "Indonesia"
      default:
        return country || "Global"
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-700 border-green-500/30"
      case "completed":
        return "bg-blue-500/20 text-blue-700 border-blue-500/30"
      case "planning":
        return "bg-amber-500/20 text-amber-700 border-amber-500/30"
      default:
        return "bg-gray-500/20 text-gray-700 border-gray-500/30"
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
        <p className="text-muted-foreground">Cargando matriz de comparación...</p>
      </div>
    )
  }

  if (error) {
    return (
      <Card className="border-destructive">
        <CardContent className="pt-6">
          <p className="text-destructive">Error: {error}</p>
        </CardContent>
      </Card>
    )
  }

  // Calculate statistics
  const activeCount = initiatives.filter((i) => i.status === "active").length
  const totalBudget = initiatives.reduce((sum, i) => sum + (i.budget || 0), 0)
  const avgProgress =
    initiatives.length > 0 ? initiatives.reduce((sum, i) => sum + (i.progress || 0), 0) / initiatives.length : 0
  const countries = new Set(
    initiatives
      .map((i) => i.country)
      .filter(Boolean)
      .map((c) => getCountryName(c)),
  )

  return (
    <div className="space-y-6">
      {/* Main Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Matriz de Comparación de Iniciativas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-primary/5 border-b">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Iniciativa</th>
                  <th className="px-4 py-3 text-left font-semibold">Categoría</th>
                  <th className="px-4 py-3 text-left font-semibold">País</th>
                  <th className="px-4 py-3 text-center font-semibold">Estado</th>
                  <th className="px-4 py-3 text-center font-semibold">Progreso</th>
                  <th className="px-4 py-3 text-right font-semibold">Presupuesto</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {initiatives.map((init) => (
                  <tr key={init.id} className="hover:bg-primary/5 transition-colors">
                    <td className="px-4 py-3 font-medium">{init.title}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className="capitalize">
                        {init.category || "Otros"}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <span>
                        {getCountryEmoji(init.country)} {getCountryName(init.country)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge className={`${getStatusBadgeColor(init.status)} capitalize`}>{init.status}</Badge>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all"
                            style={{ width: `${init.progress || 0}%` }}
                          />
                        </div>
                        <span className="font-semibold">{init.progress || 0}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold">
                      ${((init.budget || 0) / 1000000).toFixed(1)}M
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Portfolio Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Total Iniciativas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{initiatives.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {activeCount} activas, {initiatives.length - activeCount} planificación
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Cobertura Geográfica
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{countries.size}</div>
            <p className="text-xs text-muted-foreground mt-1">{Array.from(countries).join(", ")}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Progreso Promedio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{avgProgress.toFixed(1)}%</div>
            <p className="text-xs text-muted-foreground mt-1">Completación general</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4" />
              Presupuesto Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${(totalBudget / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground mt-1">Asignación global</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed breakdown by category and status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* By Category */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Distribución por Categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Array.from(
                initiatives.reduce((acc, init) => {
                  const cat = init.category || "Sin categoría"
                  if (!acc.has(cat)) {
                    acc.set(cat, { count: 0, progress: 0 })
                  }
                  const data = acc.get(cat)!
                  data.count += 1
                  data.progress += init.progress || 0
                  return acc
                }, new Map<string, { count: number; progress: number }>()),
              ).map(([category, data]) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="font-medium capitalize">{category}</span>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">{data.count}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {(data.progress / data.count).toFixed(0)}% avg
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* By Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Distribución por Estado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Array.from(
                initiatives.reduce((acc, init) => {
                  if (!acc.has(init.status)) {
                    acc.set(init.status, 0)
                  }
                  acc.set(init.status, (acc.get(init.status) || 0) + 1)
                  return acc
                }, new Map<string, number>()),
              ).map(([status, count]) => (
                <div key={status} className="flex items-center justify-between">
                  <span className="font-medium capitalize">{status}</span>
                  <Badge className={getStatusBadgeColor(status)}>{count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
