"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Skeleton } from "@/components/ui/skeleton"

interface InitiativePerformance {
  id: string
  title: string
  category: string
  status: string
  progress: number
  budget: number
  document_count: number
  completed_documents: number
  avg_doc_completion: number
  country: string
}

export function InitiativeAnalytics() {
  const [initiatives, setInitiatives] = useState<InitiativePerformance[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadInitiatives() {
      try {
        const supabase = createClient()
        const { data, error: err } = await supabase.from("initiative_performance").select("*")

        if (err) throw err

        setInitiatives(data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error loading initiatives")
        console.error("[v0] Error loading initiative performance:", err)
      } finally {
        setLoading(false)
      }
    }

    loadInitiatives()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-64 w-full" />
        ))}
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

  // Prepare data for progress distribution
  const progressData = initiatives.map((i) => ({
    title: i.title,
    progress: i.progress,
    target: 100,
  }))

  // Prepare data for budget allocation
  const budgetData = initiatives
    .filter((i) => i.budget > 0)
    .sort((a, b) => b.budget - a.budget)
    .slice(0, 10)
    .map((i) => ({
      title: i.title,
      budget: i.budget / 1000000, // Convert to millions
    }))

  // Prepare data for document completion
  const documentData = initiatives
    .filter((i) => i.document_count > 0)
    .map((i) => ({
      title: i.title.substring(0, 15),
      total: i.document_count,
      completed: i.completed_documents,
      completion: i.avg_doc_completion,
    }))

  return (
    <div className="space-y-6">
      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Progreso General de Iniciativas</CardTitle>
          <CardDescription>Completación por iniciativa</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={progressData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="title" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="progress" fill="#65793C" name="Progreso %" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Top Budget Initiatives */}
      {budgetData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Top 10 Iniciativas por Presupuesto</CardTitle>
            <CardDescription>Asignación de fondos (en millones)</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" angle={-45} textAnchor="end" height={100} />
                <YAxis label={{ value: "Presupuesto (M)", angle: -90, position: "insideLeft" }} />
                <Tooltip formatter={(value) => `$${(value as number).toFixed(2)}M`} />
                <Bar dataKey="budget" fill="#D97706" name="Presupuesto" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Document Completion Status */}
      {documentData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Estado de Documentos</CardTitle>
            <CardDescription>Documentos completados vs total por iniciativa</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={documentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="title" />
                <YAxis yAxisId="left" label={{ value: "Documentos", angle: -90, position: "insideLeft" }} />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  label={{ value: "Completación %", angle: 90, position: "insideRight" }}
                />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="completed" fill="#10b981" name="Completados" />
                <Bar yAxisId="left" dataKey="total" fill="#cbd5e1" name="Total" />
                <Bar yAxisId="right" dataKey="completion" fill="#EA580C" name="% Completación" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      )}

      {/* Initiative Details Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detalles de Iniciativas</CardTitle>
          <CardDescription>Resumen completo de todas las iniciativas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Título</th>
                  <th className="text-left py-3 px-4 font-semibold">Categoría</th>
                  <th className="text-center py-3 px-4 font-semibold">Progreso</th>
                  <th className="text-center py-3 px-4 font-semibold">Presupuesto</th>
                  <th className="text-center py-3 px-4 font-semibold">Documentos</th>
                  <th className="text-left py-3 px-4 font-semibold">País</th>
                </tr>
              </thead>
              <tbody>
                {initiatives.map((init) => (
                  <tr key={init.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">{init.title}</td>
                    <td className="py-3 px-4">{init.category || "—"}</td>
                    <td className="text-center py-3 px-4 font-medium">{init.progress}%</td>
                    <td className="text-center py-3 px-4">${(init.budget / 1000000).toFixed(1)}M</td>
                    <td className="text-center py-3 px-4">
                      {init.completed_documents}/{init.document_count}
                    </td>
                    <td className="py-3 px-4">{init.country || "—"}</td>
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
