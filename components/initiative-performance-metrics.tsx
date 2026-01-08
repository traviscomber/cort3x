"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface InitiativePerformanceMetricsProps {
  initiativeId: string
  initiativeTitle: string
}

export function InitiativePerformanceMetrics({ initiativeId, initiativeTitle }: InitiativePerformanceMetricsProps) {
  // Mock data - in real app, this would come from database
  const performanceData = [
    { month: "Jan", accuracy: 94.2, latency: 85 },
    { month: "Feb", accuracy: 95.1, latency: 72 },
    { month: "Mar", accuracy: 96.3, latency: 68 },
    { month: "Apr", accuracy: 96.8, latency: 62 },
    { month: "May", accuracy: 97.2, latency: 58 },
    { month: "Jun", accuracy: 97.3, latency: 54 },
  ]

  const modelComparison = [
    { name: "SegurIA", precision: 97.8, recall: 96.8, f1: 97.3 },
    { name: "Competitor A", precision: 94.2, recall: 92.1, f1: 93.1 },
    { name: "Competitor B", precision: 91.5, recall: 90.2, f1: 90.8 },
  ]

  const metricsOverTime = [
    { time: "Week 1", falsePositive: 1.2, falseNegative: 3.8 },
    { time: "Week 2", falsePositive: 1.0, falseNegative: 3.5 },
    { time: "Week 3", falsePositive: 0.9, falseNegative: 3.2 },
    { time: "Week 4", falsePositive: 0.8, falseNegative: 3.0 },
  ]

  return (
    <div className="space-y-6">
      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">97.3%</div>
            <Progress value={97.3} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">↑ 0.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Latency P99</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">54ms</div>
            <p className="text-xs text-muted-foreground mt-2">↓ 8ms improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">False Positive</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">0.8%</div>
            <p className="text-xs text-muted-foreground mt-2">Target: &lt; 1%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Uptime SLA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">99.95%</div>
            <p className="text-xs text-muted-foreground mt-2">0 incidents this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Model Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" domain={[90, 100]} />
              <YAxis yAxisId="right" orientation="right" domain={[40, 100]} />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={2} />
              <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Model Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Competitive Benchmark</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {modelComparison.map((model) => (
              <div key={model.name} className="space-y-2 pb-4 border-b last:border-0">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{model.name}</span>
                  <Badge>{model.f1.toFixed(1)}% F1-Score</Badge>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Precision</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={model.precision} className="flex-1" />
                      <span className="text-xs font-medium">{model.precision}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Recall</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={model.recall} className="flex-1" />
                      <span className="text-xs font-medium">{model.recall}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">F1-Score</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Progress value={model.f1} className="flex-1" />
                      <span className="text-xs font-medium">{model.f1}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Error Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Error Rate Reduction</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={metricsOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="falsePositive" fill="#ef4444" name="False Positive %" />
              <Bar dataKey="falseNegative" fill="#eab308" name="False Negative %" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
