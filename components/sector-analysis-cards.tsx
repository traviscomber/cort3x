"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, Target, AlertCircle } from "lucide-react"

interface SectorAnalysis {
  sector: string
  annualLoss: string
  vulnerability: string
  solution: string
  roi: string
  timeToROI: string
  impact: string
}

const sectorData: SectorAnalysis[] = [
  {
    sector: "Industrial & Manufacturing",
    annualLoss: "$200M+ USD",
    vulnerability: "Falsified purchase orders, fake vendor payments",
    solution: "Real-time vendor verification, order validation against historical patterns",
    roi: "$500K-2M/year",
    timeToROI: "6 months",
    impact: "Reduce fraud 85%",
  },
  {
    sector: "Agricultural Finance",
    annualLoss: "$50-100M USD/year",
    vulnerability: "Fake loan documents, credential forgery",
    solution: "Document OCR + public registry validation, pattern analysis",
    roi: "$1-5M USD/year",
    timeToROI: "12 months",
    impact: "Reduce fraud 85%, 24-hour approvals",
  },
  {
    sector: "Logistics & Transport",
    annualLoss: "$150M+ USD/year",
    vulnerability: "Falsified shipping documents, cargo diversion",
    solution: "Real-time tracking, GPS anomaly detection, automated alerts",
    roi: "$2-8M USD/year",
    timeToROI: "9 months",
    impact: "Prevent 90% of cargo fraud",
  },
  {
    sector: "Fintech & Neobanks",
    annualLoss: "2%+ fraud rate",
    vulnerability: "Volume scalability, manual verification bottleneck",
    solution: "<50ms transaction processing, risk scoring",
    roi: "0.5-1% margin improvement",
    timeToROI: "3 months",
    impact: "Maintain <0.5% fraud at scale",
  },
]

export function SectorAnalysisCards() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sectorData.map((sector) => (
          <Card key={sector.sector} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{sector.sector}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Annual Loss */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium">Annual Loss</span>
                </div>
                <p className="text-2xl font-bold text-red-600">{sector.annualLoss}</p>
              </div>

              {/* Vulnerability */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-medium">Vulnerability</span>
                </div>
                <p className="text-sm text-muted-foreground">{sector.vulnerability}</p>
              </div>

              {/* Solution */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">SegurIA Solution</span>
                </div>
                <p className="text-sm text-muted-foreground">{sector.solution}</p>
              </div>

              {/* ROI Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t">
                <div>
                  <p className="text-xs text-muted-foreground">ROI</p>
                  <p className="text-sm font-bold text-green-600">{sector.roi}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Payback</p>
                  <p className="text-sm font-bold">{sector.timeToROI}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Impact</p>
                  <Badge className="text-xs mt-1 bg-green-600">{sector.impact}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Financial Summary */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            Market Opportunity Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Addressable Market</p>
              <p className="text-3xl font-bold text-green-700">$50-80M USD</p>
              <p className="text-xs text-muted-foreground mt-1">10-15% of $500M+ annual fraud losses</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">3-Year Revenue Target</p>
              <p className="text-3xl font-bold text-green-700">$45M+ ARR</p>
              <p className="text-xs text-muted-foreground mt-1">608% CAGR 2024-2025</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Gross Margin</p>
              <p className="text-3xl font-bold text-green-700">75%</p>
              <p className="text-xs text-muted-foreground mt-1">SaaS high-margin model</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
