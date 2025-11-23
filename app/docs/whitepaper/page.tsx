import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Target, TrendingUp, Award, Globe, Zap, CheckCircle2, Sparkles, ArrowRight, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: "Platform Whitepaper - Complete Technical Documentation",
  description:
    "Comprehensive whitepaper covering Impax Cort3x methodology, AI-powered scoring system, and innovation framework",
}

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary">Platform Whitepaper</Badge>
            <h1 className="text-5xl font-bold mb-4">Impax Cort3x</h1>
            <h2 className="text-3xl text-gray-600 mb-6">AI-Powered Innovation Accelerator</h2>
            <p className="text-lg text-gray-500">Version 1.0 | December 2024</p>
            <Button asChild className="mt-6" size="lg">
              <Link href="/contact">
                <Download className="mr-2 h-5 w-5" />
                Request PDF Version
              </Link>
            </Button>
          </div>

          {/* Executive Summary */}
          <Card className="p-8 mb-8 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Executive Summary
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Impax Cort3x</strong> is an AI-powered innovation accelerator platform that transforms the
              innovation journey from concept to market launch. By combining advanced machine learning algorithms with
              expert coaching, we deliver comprehensive market intelligence in weeks rather than months, enabling
              entrepreneurs and organizations to make data-driven decisions about their innovation projects.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The platform serves three key markets—<strong>Chile, United States, and Indonesia</strong>—with a focus
              on sustainable and green innovation projects. Our proprietary 100-point scoring system evaluates projects
              across five critical dimensions, providing actionable insights that help innovators refine their concepts
              and secure funding.
            </p>
          </Card>

          {/* Table of Contents */}
          <Card className="p-8 mb-8 bg-gray-50">
            <h3 className="text-xl font-bold mb-4">Table of Contents</h3>
            <ol className="space-y-2 text-gray-700">
              <li>1. Platform Overview</li>
              <li>2. Core Value Proposition</li>
              <li>3. 100-Point Feasibility Scoring Methodology</li>
              <li>4. Service Tiers & Deliverables</li>
              <li>5. Platform Features & Capabilities</li>
              <li>6. Technical Architecture</li>
              <li>7. Market Focus & Geographic Reach</li>
              <li>8. Competitive Advantages</li>
              <li>9. Use Cases & Success Metrics</li>
              <li>10. Conclusion & Next Steps</li>
            </ol>
          </Card>

          {/* Section 1: Platform Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Globe className="h-8 w-8 text-primary" />
              1. Platform Overview
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Impax Cort3x bridges the gap between innovative ideas and market-ready solutions through an integrated
                platform that combines:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>AI-Powered Analysis:</strong> Advanced algorithms evaluate project feasibility across
                    multiple dimensions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Expert Coaching:</strong> Structured guidance from industry experts who challenge thinking
                    and accelerate progress
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Comprehensive Documentation:</strong> Investor-ready deliverables including pitch decks,
                    business plans, and financial models
                  </span>
                </li>
              </ul>

              <p className="mb-4">
                <strong>Mission:</strong> Accelerate innovation projects from concept to market launch through
                intelligent analysis and expert guidance, with a focus on sustainable and impactful solutions.
              </p>

              <p>
                <strong>Vision:</strong> Become the leading innovation accelerator platform in emerging markets,
                democratizing access to world-class research and coaching for entrepreneurs worldwide.
              </p>
            </div>
          </section>

          {/* Section 2: Core Value Proposition */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Target className="h-8 w-8 text-primary" />
              2. Core Value Proposition
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="p-6 border-2 border-blue-200 bg-blue-50">
                <h4 className="font-bold text-lg mb-3 text-blue-900">Speed to Insight</h4>
                <p className="text-blue-800">
                  Receive comprehensive market intelligence in 24-72 hours (free tier) or 24 hours (priority tier),
                  compared to traditional consulting that takes months.
                </p>
              </Card>
              <Card className="p-6 border-2 border-green-200 bg-green-50">
                <h4 className="font-bold text-lg mb-3 text-green-900">Data-Driven Decisions</h4>
                <p className="text-green-800">
                  100-point scoring system provides objective, quantifiable metrics across market viability,
                  sustainability, financial feasibility, regulatory fit, and implementation readiness.
                </p>
              </Card>
              <Card className="p-6 border-2 border-purple-200 bg-purple-50">
                <h4 className="font-bold text-lg mb-3 text-purple-900">Scalable Pricing</h4>
                <p className="text-purple-800">
                  Start free with basic feasibility audits, upgrade to priority analysis ($100), full documentation
                  ($1,000), or hands-on coaching ($1,500/month).
                </p>
              </Card>
              <Card className="p-6 border-2 border-amber-200 bg-amber-50">
                <h4 className="font-bold text-lg mb-3 text-amber-900">Sustainability Focus</h4>
                <p className="text-amber-800">
                  Built-in environmental impact tracking, carbon footprint calculations, and ESG alignment reporting for
                  green innovation projects.
                </p>
              </Card>
            </div>
          </section>

          {/* Section 3: 100-Point Scoring Methodology */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Brain className="h-8 w-8 text-primary" />
              3. 100-Point Feasibility Scoring Methodology
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our proprietary scoring system evaluates projects across five critical dimensions, weighted by impact on
              project success:
            </p>

            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-blue-500">
                <h4 className="font-bold text-xl mb-2 text-blue-900">
                  1. Market Viability <span className="text-blue-600">(30 points)</span>
                </h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Market size and growth potential assessment</li>
                  <li>• Competitive positioning analysis</li>
                  <li>• Target market fit evaluation</li>
                  <li>• Customer demand validation</li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-l-green-500">
                <h4 className="font-bold text-xl mb-2 text-green-900">
                  2. Sustainability Alignment <span className="text-green-600">(25 points)</span>
                </h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Environmental impact assessment</li>
                  <li>• Carbon reduction potential</li>
                  <li>• Long-term sustainability fit</li>
                  <li>• UN SDG alignment</li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-l-amber-500">
                <h4 className="font-bold text-xl mb-2 text-amber-900">
                  3. Financial Feasibility <span className="text-amber-600">(20 points)</span>
                </h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Financial projection analysis</li>
                  <li>• Cost-benefit calculations</li>
                  <li>• ROI potential assessment</li>
                  <li>• Funding requirements and sources</li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-l-purple-500">
                <h4 className="font-bold text-xl mb-2 text-purple-900">
                  4. Regulatory & ESG Fit <span className="text-purple-600">(15 points)</span>
                </h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Regulatory compliance review</li>
                  <li>• ESG framework alignment (GRI, SASB, TCFD)</li>
                  <li>• Legal and licensing requirements</li>
                  <li>• Policy environment analysis</li>
                </ul>
              </Card>

              <Card className="p-6 border-l-4 border-l-red-500">
                <h4 className="font-bold text-xl mb-2 text-red-900">
                  5. Implementation Readiness <span className="text-red-600">(10 points)</span>
                </h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Execution capability assessment</li>
                  <li>• Resource availability evaluation</li>
                  <li>• Timeline feasibility</li>
                  <li>• Technical requirements and risks</li>
                </ul>
              </Card>
            </div>

            <Card className="mt-6 p-6 bg-primary/5 border-2 border-primary/20">
              <h4 className="font-bold text-lg mb-3">Scoring Methodology</h4>
              <p className="text-gray-700 leading-relaxed">
                Each dimension is evaluated using advanced machine learning algorithms that analyze project inputs
                against proven innovation frameworks. The system benchmarks your project against similar initiatives,
                provides predictive success metrics, and generates actionable recommendations for improvement. Scores
                are delivered with detailed breakdowns showing strengths, weaknesses, and specific areas for
                enhancement.
              </p>
            </Card>
          </section>

          {/* Section 4: Service Tiers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-8 w-8 text-primary" />
              4. Service Tiers & Deliverables
            </h2>

            <div className="space-y-6">
              <Card className="p-6 border-2 border-gray-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Starter (Free)</h3>
                    <p className="text-gray-600">Perfect for exploring your first innovation idea</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold mb-2">Deliverables:</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• 100-point feasibility score</li>
                      <li>• Summary report (5 pages PDF)</li>
                      <li>• Basic dashboard access</li>
                      <li>• Email notifications</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Limits & Timeline:</p>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• 3 audits per month</li>
                      <li>• 48-72 hour turnaround</li>
                      <li>• Standard email support</li>
                      <li>• Community forum access</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-blue-300 bg-blue-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900">Priority ($100/audit)</h3>
                    <p className="text-blue-700">Fast-tracked analysis with deep insights</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold mb-2 text-blue-900">Additional Deliverables:</p>
                    <ul className="text-sm space-y-1 text-blue-800">
                      <li>• Comprehensive report (15-20 pages)</li>
                      <li>• Detailed scoring breakdown</li>
                      <li>• Market analysis deep dive</li>
                      <li>• Competitor comparison matrix</li>
                      <li>• Risk assessment & mitigation</li>
                      <li>• Downloadable PDF + editable formats</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-blue-900">Benefits:</p>
                    <ul className="text-sm space-y-1 text-blue-800">
                      <li>• 24-hour expedited review</li>
                      <li>• Unlimited audits</li>
                      <li>• Priority email support</li>
                      <li>• Advanced dashboard features</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-purple-300 bg-purple-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-900">Professional ($1,000 one-time)</h3>
                    <p className="text-purple-700">Complete documentation package for investors</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold mb-2 text-purple-900">Comprehensive Deliverables:</p>
                    <ul className="text-sm space-y-1 text-purple-800">
                      <li>• Full pitch deck (15-20 slides, branded)</li>
                      <li>• Business plan (30-40 pages)</li>
                      <li>• Financial projections (3-5 years)</li>
                      <li>• Market sizing & TAM analysis</li>
                      <li>• Go-to-market strategy</li>
                      <li>• Portfolio/concept mockup</li>
                      <li>• Video presentation guide</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-purple-900">Service Level:</p>
                    <ul className="text-sm space-y-1 text-purple-800">
                      <li>• 2-week delivery timeline</li>
                      <li>• 2 rounds of revisions</li>
                      <li>• 3-month document access</li>
                      <li>• Priority support channel</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-amber-300 bg-amber-50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-900">Enterprise ($1,500/month, 3-6 months)</h3>
                    <p className="text-amber-700">Hands-on coaching & implementation support</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-semibold mb-2 text-amber-900">Full-Service Package:</p>
                    <ul className="text-sm space-y-1 text-amber-800">
                      <li>• Weekly 1:1 coaching sessions (1 hour)</li>
                      <li>• Custom client portal</li>
                      <li>• API access for integrations</li>
                      <li>• Ongoing market research updates</li>
                      <li>• Implementation roadmap</li>
                      <li>• Co-creation of marketing materials</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-amber-900">Premium Support:</p>
                    <ul className="text-sm space-y-1 text-amber-800">
                      <li>• Direct Slack/Teams channel</li>
                      <li>• Unlimited document revisions</li>
                      <li>• Quarterly strategic reviews</li>
                      <li>• Access to expert network</li>
                      <li>• Real-time collaboration tools</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Section 5: Platform Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">5. Platform Features & Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-3">Progress Tracking Dashboard</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Real-time project monitoring with KPIs, milestones, budget tracking, and visual progress indicators.
                </p>
                <Badge variant="outline">Fully Implemented</Badge>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold text-lg mb-3">AI-Powered Project Scoring</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Multi-factor analysis using GPT-4 with automated recommendations and competitive benchmarking.
                </p>
                <Badge variant="outline">Core Feature</Badge>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold text-lg mb-3">ROI & Impact Calculator</h4>
                <p className="text-gray-700 text-sm mb-3">
                  5-year financial projections, carbon footprint calculations, and social impact metrics.
                </p>
                <Badge variant="outline">In Development</Badge>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold text-lg mb-3">Environmental Impact Tracker</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Carbon accounting, ESG compliance reporting (GRI, SASB, TCFD), and sustainability dashboards.
                </p>
                <Badge variant="outline">In Development</Badge>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold text-lg mb-3">Business Model Canvas Builder</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Interactive 9-block canvas with real-time collaboration and export to presentations.
                </p>
                <Badge variant="outline">Planned</Badge>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold text-lg mb-3">Collaboration Hub</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Discussion boards, voting systems, document sharing, and team task management.
                </p>
                <Badge variant="outline">Partial Implementation</Badge>
              </Card>
            </div>
          </section>

          {/* Section 6: Technical Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">6. Technical Architecture</h2>
            <Card className="p-6 bg-gray-50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Frontend Stack</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Next.js 16 with App Router</li>
                    <li>• React 19 with Server Components</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• shadcn/ui component library</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Backend Infrastructure</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Supabase (PostgreSQL database)</li>
                    <li>• Row Level Security (RLS) policies</li>
                    <li>• Vercel serverless functions</li>
                    <li>• Upstash Redis for caching</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">AI & Analytics</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• AI SDK v5 (Vercel)</li>
                    <li>• OpenAI GPT-4 for analysis</li>
                    <li>• Machine learning scoring algorithms</li>
                    <li>• Predictive analytics models</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Security & Auth</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Supabase Authentication</li>
                    <li>• Email/password + OAuth</li>
                    <li>• JWT token management</li>
                    <li>• HTTPS encryption</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 7: Geographic Reach */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">7. Market Focus & Geographic Reach</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center border-2 border-primary/20">
                <h4 className="font-bold text-xl mb-2">Chile</h4>
                <p className="text-gray-700 text-sm mb-3">Santiago · 2-3 weeks setup</p>
                <p className="text-gray-600 text-xs">Focus on Latin American green innovation and sustainable mining</p>
              </Card>
              <Card className="p-6 text-center border-2 border-primary/20">
                <h4 className="font-bold text-xl mb-2">United States</h4>
                <p className="text-gray-700 text-sm mb-3">Miami · 1-2 weeks setup</p>
                <p className="text-gray-600 text-xs">Tech innovation hub and gateway to Latin American markets</p>
              </Card>
              <Card className="p-6 text-center border-2 border-primary/20">
                <h4 className="font-bold text-xl mb-2">Indonesia</h4>
                <p className="text-gray-700 text-sm mb-3">Jakarta · 3-4 weeks setup</p>
                <p className="text-gray-600 text-xs">
                  Southeast Asian growth market with carbon credit and heritage focus
                </p>
              </Card>
            </div>
          </section>

          {/* Section 8: Competitive Advantages */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">8. Competitive Advantages</h2>
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-700">✓ What We Do Better</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 10-100x faster than traditional consulting</li>
                    <li>• 90% more affordable entry point (free tier)</li>
                    <li>• Sustainability-first focus with built-in ESG</li>
                    <li>• Emerging market expertise (Chile, Indonesia)</li>
                    <li>• Scalable pricing from $0 to $1,500/mo</li>
                    <li>• Real-time dashboard with actionable metrics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-blue-700">⚡ Our Differentiators</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Honest, deliverable feature set (no vaporware)</li>
                    <li>• Data-driven 100-point scoring methodology</li>
                    <li>• Combined AI + human expert coaching</li>
                    <li>• Focus on execution, not just ideation</li>
                    <li>• Open-source technology stack</li>
                    <li>• Multilingual support (EN, ES, ID)</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 9: Use Cases */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">9. Use Cases & Success Metrics</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-2">Green Technology Startups</h4>
                <p className="text-gray-700 text-sm">
                  Renewable energy, clean tech, and sustainable manufacturing companies use our platform to validate
                  market fit, calculate carbon impact, and secure investor funding with comprehensive documentation.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-2">Corporate Innovation Teams</h4>
                <p className="text-gray-700 text-sm">
                  Enterprises leverage our AI scoring to evaluate internal innovation pipelines, prioritize projects
                  based on data-driven metrics, and accelerate time-to-market for new initiatives.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-2">Social Impact Organizations</h4>
                <p className="text-gray-700 text-sm">
                  NGOs and social enterprises use our platform to assess project viability, measure environmental and
                  social impact, and create compelling proposals for grant funding.
                </p>
              </Card>
            </div>

            <Card className="mt-6 p-6 bg-primary/5 border-2 border-primary/20">
              <h4 className="font-bold text-lg mb-3">Platform Statistics</h4>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">120+</div>
                  <div className="text-sm text-gray-600">Projects Tracked</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">85%</div>
                  <div className="text-sm text-gray-600">Completion Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Availability</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-gray-600">Global Markets</div>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 10: Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">10. Conclusion & Next Steps</h2>
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20">
              <p className="text-gray-700 leading-relaxed mb-6">
                Impax Cort3x represents the next generation of innovation acceleration—combining the speed and scale of
                AI analysis with the depth and nuance of expert human coaching. Our platform democratizes access to
                world-class market intelligence and strategic guidance, enabling entrepreneurs and organizations
                worldwide to transform innovative ideas into funded, market-ready solutions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you're validating your first concept with a free feasibility audit or implementing a multi-month
                go-to-market strategy with enterprise coaching, Impax Cort3x provides the tools, insights, and support
                you need to succeed.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="shadow-lg">
                  <Link href="/onboarding">
                    Start Free Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </Card>
          </section>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm mt-12 pt-8 border-t">
            <p>© 2025 Impax Cort3x. All rights reserved.</p>
            <p className="mt-2">
              For inquiries:{" "}
              <a href="mailto:info@impaxcort3x.com" className="text-primary hover:underline">
                info@impaxcort3x.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
