"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SeguriaArchitectureDiagram() {
  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle>SegurIA Security - Technical Architecture</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* API Layer */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm text-primary">API Layer & Integration</h3>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium text-sm">API Gateway (Kong)</span>
              <Badge className="bg-blue-600">OAuth2/SAML</Badge>
            </div>
            <div className="text-xs text-muted-foreground">
              Rate limiting • JWT tokens • 1-hour expiration • 2FA support
            </div>
          </div>
        </div>

        {/* Microservices */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm text-primary">Core Microservices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <p className="font-medium text-sm text-green-900">Transaction Service</p>
              <p className="text-xs text-green-700 mt-1">Real-time processing • &lt;100ms latency</p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded p-3">
              <p className="font-medium text-sm text-purple-900">Model Service</p>
              <p className="text-xs text-purple-700 mt-1">Inference engine • Caching layer</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded p-3">
              <p className="font-medium text-sm text-orange-900">Risk Service</p>
              <p className="text-xs text-orange-700 mt-1">Score calculation • Recommendations</p>
            </div>
            <div className="bg-pink-50 border border-pink-200 rounded p-3">
              <p className="font-medium text-sm text-pink-900">Notification Service</p>
              <p className="text-xs text-pink-700 mt-1">Email, SMS, push alerts</p>
            </div>
          </div>
        </div>

        {/* Data & ML */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm text-primary">Data & ML Pipeline</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Real-time Streaming</span>
              <Badge variant="outline">Kafka + Flink</Badge>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Batch Processing</span>
              <Badge variant="outline">Airflow ETL</Badge>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Feature Store</span>
              <Badge variant="outline">Tecton</Badge>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Data Warehouse</span>
              <Badge variant="outline">BigQuery</Badge>
            </div>
          </div>
        </div>

        {/* Infrastructure */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm text-primary">Cloud Infrastructure</h3>
          <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Platform</p>
                <p className="text-xs text-muted-foreground">GCP (us-central1 + southamerica-east1)</p>
              </div>
              <div>
                <p className="font-medium">Orchestration</p>
                <p className="text-xs text-muted-foreground">GKE 1.28+ (Auto-scaling)</p>
              </div>
              <div>
                <p className="font-medium">CDN</p>
                <p className="text-xs text-muted-foreground">Cloudflare (Global)</p>
              </div>
              <div>
                <p className="font-medium">SLA</p>
                <p className="text-xs text-muted-foreground">99.95% Uptime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm text-primary">Security & Compliance</h3>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Encryption</span>
              <span className="font-medium">AES-256 (at rest) + TLS 1.3 (in transit)</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Audit Logging</span>
              <span className="font-medium">Immutable trail + CMF compliance</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Penetration Testing</span>
              <span className="font-medium">Quarterly with certified partners</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
