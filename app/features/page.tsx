import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Target, Rocket, Award, Calculator, MessageSquare, Gauge, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Platform Features - Advanced Innovation Tools",
  description:
    "AI-powered project scoring, ROI calculators, investor matchmaking, collaboration tools, and environmental impact tracking",
}

export default function FeaturesPage() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Project Scoring",
      description:
        "Advanced machine learning algorithms analyze your project across market potential, technical feasibility, environmental impact, and competitive positioning",
      benefits: [
        "Instant viability assessment in seconds",
        "Data-driven recommendations for improvement",
        "Competitive benchmarking framework",
        "Predictive success metrics",
      ],
      color: "from-purple-500 to-indigo-500",
      badge: "Powered by AI",
    },
    {
      icon: Calculator,
      title: "ROI & Impact Calculator",
      description:
        "Comprehensive financial modeling tools that calculate return on investment, carbon footprint reduction, social impact metrics, and sustainability outcomes",
      benefits: [
        "Multi-year financial projections with scenarios",
        "Carbon emissions reduction calculations",
        "Social impact quantification metrics",
        "Investor-ready ROI reports with visuals",
      ],
      color: "from-green-500 to-emerald-500",
      badge: "Data-Driven",
    },
    {
      icon: Target,
      title: "Business Model Canvas Builder",
      description:
        "Interactive digital canvas for visualizing, testing, and iterating your business model with real-time team collaboration and export capabilities",
      benefits: [
        "Intuitive drag-and-drop interface",
        "Real-time team collaboration",
        "Export to presentations and reports",
        "Integrated with your project data",
      ],
      color: "from-blue-500 to-cyan-500",
      badge: "Collaborative",
    },
    {
      icon: MessageSquare,
      title: "Collaboration & Community Hub",
      description:
        "Integrated workspace for ideation, feedback collection, and stakeholder engagement with discussion boards, voting systems, and document sharing",
      benefits: [
        "Crowdsource ideas from your team",
        "Built-in voting and prioritization",
        "Document version control",
        "Real-time notifications and updates",
      ],
      color: "from-pink-500 to-rose-500",
      badge: "Community-Driven",
    },
    {
      icon: Gauge,
      title: "Progress Tracking Dashboard",
      description:
        "Visual project management dashboard tracking milestones, deliverables, KPIs, and team performance with automated reporting and customizable alerts",
      benefits: [
        "Customizable KPI tracking and alerts",
        "Visual milestone timeline tracking",
        "Team task assignment and status",
        "Automated progress reports",
      ],
      color: "from-indigo-500 to-purple-500",
      badge: "Real-Time Insights",
    },
    {
      icon: Leaf,
      title: "Environmental Impact Tracker",
      description:
        "Comprehensive carbon footprint calculator and environmental impact assessment tool with sustainability metrics aligned with global reporting standards",
      benefits: [
        "Multi-scope emissions tracking",
        "Sustainability metrics dashboard",
        "ESG reporting framework templates",
        "Carbon reduction roadmap planning",
      ],
      color: "from-teal-500 to-green-500",
      badge: "ESG Focused",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary/5 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <Badge className="mb-6 bg-primary text-white border-0 px-6 py-2.5 text-sm font-medium shadow-lg">
            <Rocket className="h-4 w-4 mr-2 inline" />
            Platform Features
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance text-gray-900">
            Best-in-Class Innovation Tools
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-pretty mb-10">
            We've analyzed the top innovation platforms and integrated the best features to accelerate your journey from
            idea to impact
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-6 shadow-xl">
              Try Platform Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-2 border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">120+</div>
              <div className="text-gray-600">Projects Tracked</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-gray-600">Core Features</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-gray-600">Project Completion Rate</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-primary/20">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Platform Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="border-2 border-gray-200 hover:border-primary/50 bg-white hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                  <CardHeader className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div
                        className={`h-16 w-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20">{feature.badge}</Badge>
                    </div>

                    <div>
                      <CardTitle className="text-2xl text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-base text-gray-600 leading-relaxed mb-6">
                        {feature.description}
                      </CardDescription>
                    </div>

                    <div className="space-y-3">
                      <div className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Benefits</div>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl my-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Why We're Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focused on actionable tools that deliver real results for your green innovation projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Our AI evaluates your project against proven innovation frameworks and provides actionable insights
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Sustainability-First</h3>
              <p className="text-gray-600">
                Track environmental impact with built-in carbon footprint calculations and ESG reporting tools
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Collaborative Platform</h3>
              <p className="text-gray-600">
                Work with your team in real-time with built-in collaboration, voting, and feedback tools
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center p-12 bg-gradient-to-br from-primary to-primary/80 rounded-3xl shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Experience the Difference?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join innovators using our platform to turn ideas into funded, impactful projects
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-lg px-10 py-6 shadow-xl font-bold"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Book Demo Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
