"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { DollarSign } from "lucide-react"

export function FinancialProjectionsChart() {
  const arrProjections = [
    { year: "2024", actual: 1.2, projected: null },
    { year: "2025", actual: 8.5, projected: null },
    { year: "2026", actual: null, projected: 22.3 },
    { year: "2027", actual: null, projected: 45 },
  ]

  const revenueBreakdown = [
    { category: "SaaS B2B2C", value: 35 },
    { category: "Revenue Share", value: 40 },
    { category: "Premium Tiers", value: 15 },
    { category: "Consulting", value: 10 },
  ]

  const unitEconomics = [
    { metric: "ARR per Client", value: 250 },
    { metric: "CAC", value: 100 },
    { metric: "Payback Months", value: 9 },
    { metric: "LTV:CAC Ratio", value: 5 },
  ]

  const budgetAllocation = [
    { category: "R&D (IA/ML)", percentage: 40, color: "#3b82f6" },
    { category: "Sales & Marketing", percentage: 25, color: "#10b981" },
    { category: "Operations", percentage: 20, color: "#f59e0b" },
    { category: "G&A", percentage: 15, color: "#8b5cf6" },
  ]

  return (
    <div className="space-y-6">
      {/* ARR Growth Projection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Annual Recurring Revenue (ARR) Growth
          </CardTitle>
          <CardDescription>2024-2027 projections</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={arrProjections}>
              <defs>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis label={{ value: "ARR ($M)", angle: -90, position: "insideLeft" }} />
              <Tooltip formatter={(value) => (value ? `$${value}M` : "TBD")} />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorActual)"
                name="Actual"
              />
              <Area
                type="monotone"
                dataKey="projected"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorProjected)"
                name="Projected"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm font-medium text-green-900">2025 Milestone: 608% CAGR</p>
            <p className="text-xs text-green-700">Reaching market leader position by 2027</p>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Model Diversification</CardTitle>
          <CardDescription>Multiple revenue streams by 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueBreakdown} layout="vertical" margin={{ top: 5, right: 30, left: 150, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="category" type="category" width={140} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="value" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Unit Economics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {unitEconomics.map((item) => (
          <Card key={item.metric}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{item.metric}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {item.metric === "Payback Months" ? `${item.value}m` : `${item.value}K`}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Budget Allocation */}
      <Card>
        <CardHeader>
          <CardTitle>2025 Budget Allocation ($5M)</CardTitle>
          <CardDescription>Investment breakdown by department</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {budgetAllocation.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.category}</span>
                  <span className="text-sm font-bold">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">${(5 * (item.percentage / 100)).toFixed(1)}M</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
