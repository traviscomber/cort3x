"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, TrendingUp } from "lucide-react"
import Link from "next/link"

export function DashboardChartsLink() {
  return (
    <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-background">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Comprehensive Analytics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          View detailed charts, visualizations, and metrics across all initiatives including progress tracking,
          geographic distribution, budget allocation, and more.
        </p>
        <Link href="/dashboard/analytics">
          <Button className="w-full">
            <TrendingUp className="mr-2 h-4 w-4" />
            Open Analytics Dashboard
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
