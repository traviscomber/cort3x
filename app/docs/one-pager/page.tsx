import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Download, Globe, Sparkles, Target, TrendingUp, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: "One-Page Summary - Quick Platform Overview",
  description: "Quick one-page overview of Impax Cort3x platform, pricing, and deliverables",
}

export default function OnePagerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="mb-3 bg-primary">One-Page Summary</Badge>
          <h1 className="text-4xl font-bold mb-2">Impax Cort3x</h1>
          <p className="text-xl text-gray-600 mb-4">AI-Powered Innovation Accelerator</p>
          <Button asChild size="lg">
            <Link href="/contact">
              <Download className="mr-2 h-5 w-5" />
              Request PDF
            </Link>
          </Button>
        </div>

        {/* What We Do */}
        <Card className="p-6 mb-6 border-2 border-primary/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">What We Do</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Impax Cort3x accelerates innovation from concept to market launch through <strong>AI-powered analysis</strong>{" "}
            and <strong>expert coaching</strong>. We deliver comprehensive market intelligence in days (not months),
            helping entrepreneurs and organizations make data-driven decisions about their innovation projects.
          </p>
        </Card>

        {/* 100-Point Scoring */}
        <Card className="p-6 mb-6 bg-blue-50 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-900">100-Point Feasibility Scoring</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4 text-sm">
            <div>
              <div className="font-bold text-blue-900 mb-1">30 pts</div>
              <div className="text-blue-800">Market Viability</div>
            </div>
            <div>
              <div className="font-bold text-blue-900 mb-1">25 pts</div>
              <div className="text-blue-800">Sustainability</div>
            </div>
            <div>
              <div className="font-bold text-blue-900 mb-1">20 pts</div>
              <div className="text-blue-800">Financial Feasibility</div>
            </div>
            <div>
              <div className="font-bold text-blue-900 mb-1">15 pts</div>
              <div className="text-blue-800">Regulatory & ESG</div>
            </div>
            <div>
              <div className="font-bold text-blue-900 mb-1">10 pts</div>
              <div className="text-blue-800">Implementation</div>
            </div>
          </div>
        </Card>

        {/* Pricing Tiers */}
        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Service Tiers & Pricing</h2>
          <div className="space-y-4">
            {/* Tier 1 */}
            <div className="flex items-start gap-4 pb-4 border-b">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-gray-700">1</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Input Project to Cort3x</h3>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                    FREE
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">Submit unlimited project audits • 3/month limit</p>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="flex items-start gap-4 pb-4 border-b">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-blue-700">2</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Get Analysis of Request</h3>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                      FREE (24 hrs)
                    </Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
                      $100 (fast)
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">100-point scoring across 5 dimensions</p>
                <div className="grid md:grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>• Audit funnel</div>
                  <div>• Sustainability analysis</div>
                  <div>• Market viability</div>
                  <div>• Financial feasibility</div>
                  <div>• Regulatory compliance</div>
                  <div>• Implementation complexity</div>
                </div>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="flex items-start gap-4 pb-4 border-b">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-purple-700">3</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Get Results (100-pt score)</h3>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                    FREE
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">24 hours standard • Instant for priority</p>
              </div>
            </div>

            {/* Tier 4 */}
            <div className="flex items-start gap-4 pb-4 border-b">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-amber-700">4</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Full Documentation Package</h3>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-300">
                    $1,000
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">2 weeks delivery</p>
                <div className="grid md:grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>• Pitch deck (15-20 slides)</div>
                  <div>• Business plan (30-40 pages)</div>
                  <div>• Portfolio mockup</div>
                  <div>• Financial projections (3-5 years)</div>
                </div>
              </div>
            </div>

            {/* Tier 5 */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-bold text-green-700">5</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">Market-Ready Coaching</h3>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-300">
                    $1,500/mo
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">3-6 months implementation support</p>
                <div className="grid md:grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>• Weekly 1:1 coaching</div>
                  <div>• Custom client portal</div>
                  <div>• Final documentation</div>
                  <div>• API integration</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Required Information */}
        <Card className="p-6 mb-6 bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Required Information for Request</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Company Name</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Project Name**</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Idea Description**</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Web-page or reference</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Any documents or media</span>
            </div>
          </div>
        </Card>

        {/* Geographic Reach */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Global Reach</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-bold text-lg mb-1">Chile</div>
              <div className="text-sm text-gray-600">Santiago • 2-3 weeks setup</div>
            </div>
            <div>
              <div className="font-bold text-lg mb-1">United States</div>
              <div className="text-sm text-gray-600">Miami • 1-2 weeks setup</div>
            </div>
            <div>
              <div className="font-bold text-lg mb-1">Indonesia</div>
              <div className="text-sm text-gray-600">Jakarta • 3-4 weeks setup</div>
            </div>
          </div>
        </Card>

        {/* Key Differentiators */}
        <Card className="p-6 mb-6 bg-primary/5 border-2 border-primary/20">
          <h2 className="text-2xl font-bold mb-4">Why Choose Impax Cort3x?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">10-100x Faster</div>
                <div className="text-sm text-gray-600">Get insights in days, not months</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Data-Driven Scoring</div>
                <div className="text-sm text-gray-600">Objective 100-point methodology</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Scalable Pricing</div>
                <div className="text-sm text-gray-600">Free to $1,500/mo based on needs</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Sustainability First</div>
                <div className="text-sm text-gray-600">Built-in ESG and carbon tracking</div>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start?</h2>
          <p className="text-white/90 mb-6 text-lg">Begin with a free feasibility audit today</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/onboarding">
                Start Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-8 pt-6 border-t">
          <p>© 2025 Impax Cort3x • info@impaxcort3x.com</p>
          <p className="mt-2">Santiago, Chile | Miami, USA | Jakarta, Indonesia</p>
        </div>
      </div>
    </div>
  )
}
