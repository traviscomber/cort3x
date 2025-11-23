import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Bot, Brain, Database, Layers, Search, Zap, Clock, Shield, FileText, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Agents & Architecture - Impax Cort3x",
  description:
    "Technical overview of deployed AI agents, dual-memory architecture, and intelligent document update system",
}

export default function AgentsSummaryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-primary">Technical Documentation</Badge>
          <h1 className="text-4xl font-bold mb-4">AI Agents & Architecture</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Impax Cort3x leverages a memory-powered AI agent system built on OpenAI GPT-4 with a sophisticated
            dual-memory architecture for continuous learning and automated research.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/onboarding">
                <Bot className="mr-2 h-5 w-5" />
                Try Feasibility Agent
              </Link>
            </Button>
          </div>
        </div>

        {/* Architecture Overview */}
        <Card className="p-8 mb-8 border-2 border-primary/10 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold">System Architecture</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" /> Base Agent Framework
              </h3>
              <p className="text-gray-600 mb-4">
                Our proprietary 5-step cognitive workflow enables agents to think before they act:
              </p>
              <div className="flex items-center justify-between bg-white p-4 rounded-lg border shadow-sm text-sm font-medium mb-4">
                <span className="text-gray-500">Perceive</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
                <span className="text-gray-500">Plan</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
                <span className="text-primary">Act</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
                <span className="text-gray-500">Reflect</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
                <span className="text-gray-500">Retrieve</span>
              </div>
              <p className="text-sm text-gray-500">
                Built on OpenAI GPT-4 Turbo for advanced reasoning and complex task execution.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-600" /> Dual-Memory System
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
                  <div className="font-bold text-purple-900 mb-1">Episodic Memory</div>
                  <p className="text-sm text-gray-600 mb-2">Stores specific interactions and experiences.</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Badge variant="secondary" className="bg-purple-50">
                      pgvector
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-50">
                      100 episodes/agent
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-50">
                      Similarity Retrieval
                    </Badge>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
                  <div className="font-bold text-blue-900 mb-1">Semantic Memory</div>
                  <p className="text-sm text-gray-600 mb-2">Stores generalized patterns and knowledge.</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <Badge variant="secondary" className="bg-blue-50">
                      Pattern Recognition
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50">
                      Success Tracking
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-50">
                      Long-term Learning
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Deployed Agents */}
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-500" /> Currently Deployed Agents
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Feasibility Agent */}
          <Card className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">@FeasibilityAgent</h3>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">ACTIVE</Badge>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Analyzes project submissions and generates comprehensive 100-point feasibility scores across 6 key
              dimensions.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-2 mb-4">
              <div className="flex justify-between border-b pb-1">
                <span>Market Viability</span>
                <span className="font-bold">0-20 pts</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Sustainability</span>
                <span className="font-bold">0-20 pts</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Financial Feasibility</span>
                <span className="font-bold">0-20 pts</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">+ 3 more dimensions</span>
              </div>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Response time: &lt; 5 seconds
            </div>
          </Card>

          {/* Document Engine */}
          <Card className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Intelligent Document Engine</h3>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">ACTIVE</Badge>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Automated research system that runs weekly to keep project documentation current with market trends.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-3 mb-4">
              <div className="flex items-start gap-2">
                <Search className="w-4 h-4 text-blue-600 mt-0.5" />
                <span>Searches recent news (last 30 days)</span>
              </div>
              <div className="flex items-start gap-2">
                <Brain className="w-4 h-4 text-blue-600 mt-0.5" />
                <span>Generates strategic recommendations</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-600 mt-0.5" />
                <span>Runs automatically Fridays at 2:00 AM UTC</span>
              </div>
            </div>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <Database className="w-4 h-4" /> Updates tracked in `update_history`
            </div>
          </Card>
        </div>

        {/* Roadmap */}
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-primary" /> Agent Roadmap
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <Card className="p-4 bg-gray-50 border-dashed border-2">
            <h3 className="font-bold text-lg mb-2">@MarketAgent</h3>
            <Badge variant="outline" className="mb-2">
              Coming Soon
            </Badge>
            <p className="text-sm text-gray-600">
              Deep-dive market sizing, TAM analysis, and competitive landscape assessment.
            </p>
          </Card>
          <Card className="p-4 bg-gray-50 border-dashed border-2">
            <h3 className="font-bold text-lg mb-2">@PitchDeckAgent</h3>
            <Badge variant="outline" className="mb-2">
              Professional Tier
            </Badge>
            <p className="text-sm text-gray-600">Generates investor-ready 15-20 slide decks and business narratives.</p>
          </Card>
          <Card className="p-4 bg-gray-50 border-dashed border-2">
            <h3 className="font-bold text-lg mb-2">@CoachingAgent</h3>
            <Badge variant="outline" className="mb-2">
              Enterprise Tier
            </Badge>
            <p className="text-sm text-gray-600">Strategic planning, problem solving, and implementation guidance.</p>
          </Card>
        </div>

        {/* Technical Stack */}
        <Card className="p-6 mb-8 bg-slate-900 text-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
              <Database className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Technical Stack</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">AI Infrastructure</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• OpenAI GPT-4 Turbo & GPT-4o</li>
                <li>• Vercel AI SDK v5</li>
                <li>• text-embedding-3-small (1536 dim)</li>
                <li>• Supabase Vector Search</li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-400 font-semibold mb-2">Security</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Shield className="w-3 h-3" /> Enterprise Data Protection
                </li>
                <li>• Row-Level Security (RLS)</li>
                <li>• Zero Data Retention (OpenAI Enterprise)</li>
                <li>• Full GDPR Compliance</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
