"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, Target, DollarSign, CheckCircle, FileText, Calendar, User } from "lucide-react"

interface Document {
  id: string
  title: string
  completion_percentage: number
  status: string
  created_at: string
  updated_at: string
}

interface Initiative {
  id: string
  title: string
  description?: string
  category?: string
  country?: string
  status: string
  progress: number
  budget: number
  created_at: string
  updated_at: string
  created_by?: string
}

interface InitiativeDashboardProps {
  initiative: Initiative
  documents: Document[]
}

const getStatusColor = (status: string) => {
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

const getCountryName = (country?: string) => {
  switch (country) {
    case "CL":
      return "🇨🇱 Chile"
    case "US":
      return "🇺🇸 USA"
    case "ID":
      return "🇮🇩 Indonesia"
    default:
      return "🌍 Global"
  }
}

export function InitiativeDashboard({ initiative, documents }: InitiativeDashboardProps) {
  // Prepare document completion data
  const documentCompletion = [
    { name: "Completado", value: documents.filter((d) => d.status === "completed").length },
    { name: "En Progreso", value: documents.filter((d) => d.status === "in_progress").length },
    { name: "Borrador", value: documents.filter((d) => d.status === "draft").length },
  ].filter((d) => d.value > 0)

  // Prepare document progress data
  const documentProgressData = documents
    .map((d) => ({
      name: d.title.substring(0, 20),
      progress: d.completion_percentage || 0,
    }))
    .slice(0, 8)

  // Calculate metrics
  const avgDocCompletion =
    documents.length > 0 ? documents.reduce((sum, d) => sum + (d.completion_percentage || 0), 0) / documents.length : 0
  const completedDocs = documents.filter((d) => d.status === "completed").length
  const daysActive = Math.floor(
    (new Date().getTime() - new Date(initiative.created_at).getTime()) / (1000 * 60 * 60 * 24),
  )

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Estado</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <Badge className={`capitalize ${getStatusColor(initiative.status)}`}>{initiative.status}</Badge>
            <p className="text-xs text-muted-foreground mt-2">{daysActive} días en ejecución</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progreso General</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{initiative.progress || 0}%</div>
            <p className="text-xs text-muted-foreground">Completación de iniciativa</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Presupuesto</CardTitle>
            <DollarSign className="h-4 w-4 text-amber-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(initiative.budget / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">Asignación total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Documentos</CardTitle>
            <CheckCircle className="h-4 w-4 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {completedDocs}/{documents.length}
            </div>
            <p className="text-xs text-muted-foreground">Completados</p>
          </CardContent>
        </Card>
      </div>

      {/* Initiative Metadata */}
      <Card>
        <CardHeader>
          <CardTitle>Información de la Iniciativa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Creada</p>
                <p className="font-medium">{formatDate(initiative.created_at)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Categoría</p>
                <p className="font-medium capitalize">{initiative.category || "No especificada"}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">País</p>
                <p className="font-medium">{getCountryName(initiative.country)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-xs text-muted-foreground">Creador</p>
                <p className="font-medium text-sm">{initiative.created_by || "No especificado"}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents Section */}
      {documents.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Document Status Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Estado de Documentos</CardTitle>
              <CardDescription>Distribución por estado</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={documentCompletion}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {documentCompletion.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={["#10b981", "#f59e0b", "#6b7280"][index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Document Completion Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Progreso de Documentos</CardTitle>
              <CardDescription>Completación promedio: {avgDocCompletion.toFixed(1)}%</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={documentProgressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="progress" fill="#65793C" name="Completación" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Progress Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Progreso General</CardTitle>
          <CardDescription>Evolución de la iniciativa</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progreso de Iniciativa</span>
                <span className="text-sm font-semibold">{initiative.progress || 0}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-emerald-500 h-full rounded-full transition-all"
                  style={{ width: `${initiative.progress || 0}%` }}
                />
              </div>
            </div>

            {documents.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Completación de Documentos</span>
                  <span className="text-sm font-semibold">{avgDocCompletion.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-orange-600 h-full rounded-full transition-all"
                    style={{ width: `${avgDocCompletion}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Recent Documents */}
      {documents.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Documentos Recientes</CardTitle>
            <CardDescription>Últimos documentos actualizados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {documents.slice(0, 5).map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{doc.title}</p>
                    <p className="text-xs text-muted-foreground">Actualizado: {formatDate(doc.updated_at)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-semibold">{doc.completion_percentage || 0}%</p>
                      <Badge variant="outline" className="text-xs capitalize">
                        {doc.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
