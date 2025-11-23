"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, Sparkles, ArrowRight, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface Message {
  role: "assistant" | "user"
  content: string
  suggestions?: string[]
  requiresAuth?: boolean
}

export function HomepageChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "¡Bienvenido a Impax Cort3x! 👋 I'm here to help you understand how we transform innovative ideas into market-ready solutions. What would you like to explore?",
      suggestions: [
        "How does your feasibility analysis work?",
        "What's included in the free tier?",
        "Tell me about your AI technology",
        "Is my project data secure?",
        "Show me pricing options",
      ],
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [askedQuestions, setAskedQuestions] = useState<Set<string>>(new Set())
  const [conversationDepth, setConversationDepth] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    // Track asked questions to avoid repeats
    setAskedQuestions((prev) => new Set(prev).add(message.toLowerCase()))
    setConversationDepth((prev) => prev + 1)

    // Add user message
    const userMessage: Message = { role: "user", content: message }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response with context-aware suggestions
    setTimeout(() => {
      const response = generateResponse(message)
      setMessages((prev) => [...prev, response])
      setIsTyping(false)
    }, 1200)
  }

  const getUnaskedSuggestions = (suggestions: string[]): string[] => {
    return suggestions.filter((s) => !askedQuestions.has(s.toLowerCase())).slice(0, 4)
  }

  const generateResponse = (userMessage: string): Message => {
    const msg = userMessage.toLowerCase()

    // Pricing questions
    if (msg.includes("price") || msg.includes("cost") || msg.includes("pricing") || msg.includes("plan")) {
      const allSuggestions = [
        "What's included in the $100 priority tier?",
        "Tell me more about the Enterprise coaching",
        "Can I switch plans later?",
        "Do you offer discounts for nonprofits?",
        "How do I upgrade my account?",
        "What payment methods do you accept?",
        "Is there a refund policy?",
        "Can I get a custom quote for my needs?",
      ]

      return {
        role: "assistant",
        content:
          "We offer transparent, flexible pricing that grows with you:\n\n💚 **Free Starter** - 3 projects/month, basic feasibility analysis (48-72 hours)\n\n⚡ **$100 Priority** - 24-hour expedited analysis + comprehensive 15-20 page report with detailed market insights\n\n📊 **$1,000 Professional** - Full documentation package: pitch deck, business plan, financial projections, market analysis (2-week delivery)\n\n🚀 **$1,500/month Enterprise** - 3-6 months of hands-on coaching, custom portal, unlimited revisions, weekly 1:1 sessions\n\nStart with a free analysis today - no credit card required!",
        suggestions: getUnaskedSuggestions(allSuggestions),
      }
    }

    // Free tier details
    if (msg.includes("free") || msg.includes("starter") || msg.includes("included") || msg.includes("no cost")) {
      const allSuggestions = [
        "How many projects can I submit for free?",
        "Can I upgrade to priority later?",
        "What's the difference between free and paid reports?",
        "How long does free analysis take?",
        "Do I need a credit card to sign up?",
        "Can I download my free reports?",
        "What happens after my 3 free projects?",
        "Tell me about paid tiers",
      ]

      return {
        role: "assistant",
        content:
          "The Free Starter tier is perfect for testing your ideas:\n\n✅ **What's Included:**\n• Submit up to 3 projects per month\n• Complete 100-point feasibility scoring across 6 dimensions\n• 5-page summary report (downloadable PDF)\n• Basic market viability assessment\n• Dashboard access to track all submissions\n• Email notifications on analysis completion\n• Community forum access\n\n⏱️ **Turnaround:** 48-72 hours\n\n💡 **No strings attached** - No credit card, no hidden fees, no commitment. Just valuable insights to validate your ideas before investing resources.\n\nReady to get started? Sign up takes 30 seconds!",
        suggestions: getUnaskedSuggestions(allSuggestions),
      }
    }

    // Feasibility analysis methodology
    if (
      msg.includes("feasibility") ||
      msg.includes("analysis") ||
      msg.includes("scoring") ||
      msg.includes("100-point") ||
      msg.includes("methodology")
    ) {
      const allSuggestions = [
        "How accurate is your scoring system?",
        "Can you explain each scoring dimension?",
        "What happens after I get my score?",
        "Can I see a sample report?",
        "How is this different from other consultants?",
        "Do humans review the AI analysis?",
        "Can I submit multiple projects?",
        "What industries do you specialize in?",
      ]

      return {
        role: "assistant",
        content:
          "Our proprietary **100-point feasibility scoring system** evaluates your project across 6 critical dimensions:\n\n📊 **1. Audit Funnel** (0-20 pts) - Market entry readiness, competitive positioning\n📈 **2. Market Viability** (0-20 pts) - Demand validation, customer segments, TAM sizing\n🌱 **3. Sustainability** (0-15 pts) - ESG impact, circular economy potential\n💰 **4. Financial Feasibility** (0-20 pts) - Revenue models, cost structure, ROI projections\n⚖️ **5. Regulatory Compliance** (0-15 pts) - Legal frameworks, certifications, policy alignment\n🔧 **6. Implementation Complexity** (0-10 pts) - Technical feasibility, resource requirements\n\n**How It Works:**\n• AI analyzes your submission against 50+ data points\n• Industry specialists validate findings\n• You receive actionable recommendations with risk mitigation strategies\n\nScores 80+ indicate high market readiness!",
        suggestions: getUnaskedSuggestions(allSuggestions),
      }
    }

    // Data privacy & security
    if (
      msg.includes("secure") ||
      msg.includes("privacy") ||
      msg.includes("data") ||
      msg.includes("safe") ||
      msg.includes("confidential") ||
      msg.includes("ip") ||
      msg.includes("intellectual property")
    ) {
      const allSuggestions = [
        "Who can access my project information?",
        "Is my data used to train AI models?",
        "What about intellectual property rights?",
        "Can I delete my data anytime?",
        "Do you sign NDAs?",
        "Where are your servers located?",
        "Are you GDPR compliant?",
        "How do you handle sensitive information?",
      ]

      return {
        role: "assistant",
        content:
          "Your data security and confidentiality are **non-negotiable priorities**:\n\n🔐 **Enterprise-Grade Protection:**\n• End-to-end encryption (TLS 1.3) for all data transmission\n• AES-256 encryption for data at rest\n• Row-Level Security (RLS) with strict access controls\n• Multi-factor authentication required\n\n🤖 **Zero AI Training:**\n• AI providers use **zero-retention policies**\n• Your data is NEVER used for model training\n• Ephemeral processing - data deleted immediately after analysis\n• Enterprise API agreements ensure compliance\n\n✅ **Full Compliance:**\n• GDPR, CCPA, SOC 2 Type II compliant\n• You own 100% of your data and IP\n• Request data deletion anytime\n• NDA available upon request\n\n**Your project details remain completely confidential.**",
        suggestions: getUnaskedSuggestions(allSuggestions),
      }
    }

    // AI capabilities and technology
    if (
      msg.includes("ai") ||
      msg.includes("artificial intelligence") ||
      msg.includes("technology") ||
      msg.includes("machine learning") ||
      msg.includes("how it works")
    ) {
      const allSuggestions = [
        "How does the AI learn from projects?",
        "What AI models do you use?",
        "Do humans review the AI analysis?",
        "How is your AI different from ChatGPT?",
        "Can the AI handle complex industries?",
        "Does the AI improve over time?",
        "What languages does your AI support?",
        "Can I ask the AI follow-up questions?",
      ]

      return {
        role: "assistant",
        content:
          "Our **Memory-Powered AI Agent System** combines cutting-edge technology with expert validation:\n\n🧠 **Dual-Memory Architecture:**\n• **Episodic Memory** - Remembers every project interaction, learns from outcomes\n• **Semantic Memory** - Builds industry knowledge graphs, identifies cross-sector patterns\n• **Continuous Learning** - Improves recommendations with each analysis\n\n⚡ **Multi-Agent System:**\n• **Feasibility Agent** - Scores projects across 6 dimensions\n• **Market Agent** - Conducts competitive and demand analysis\n• **Financial Agent** - Validates business models and projections\n• **Regulatory Agent** - Checks compliance across jurisdictions\n\n✅ **Human-in-the-Loop:**\n• All AI insights validated by industry specialists\n• Expert coaches review high-stakes decisions\n• Combines AI speed with human judgment\n\n**Result:** 10x faster analysis with continuously improving accuracy.",
        suggestions: getUnaskedSuggestions(allSuggestions),
      }
    }

    // Getting started process
    if (
      msg.includes("start") ||
      msg.includes("begin") ||
      msg.includes("sign up") ||
      msg.includes("register") ||
      msg.includes("create account") ||
      msg.includes("submit")
    ) {
      const allSuggestions = [
        "What information do I need to provide?",
        "How long does the analysis take?",
        "Can I save a draft and come back later?",
        "Do I need to upload documents?",
        "What if I don't have all the details yet?",
        "Can I edit my submission after sending?",
        "Will I get email updates?",
        "What happens after analysis is complete?",
      ]

      return {
        role: "assistant",
        content:
          "Getting started is **quick and painless** - here's the 3-step process:\n\n**Step 1: Create Account** (30 seconds)\n• Click 'Sign Up' in the top right\n• Enter email and create password\n• Verify your email (check spam folder)\n• No credit card required!\n\n**Step 2: Submit Project** (5-10 minutes)\n• Provide: Company name, project name, idea description\n• Optional: Add web references, upload supporting documents\n• Our form guides you through what we need\n\n**Step 3: Receive Analysis** (24-72 hours for free tier)\n• Get email notification when ready\n• View detailed 100-point score in your dashboard\n• Download PDF report\n• Choose next steps: iterate, upgrade, or launch!\n\n**Pro tip:** The more details you provide, the more accurate your analysis will be.\n\nReady to validate your idea?",
        suggestions: getUnaskedSuggestions(allSuggestions),
      }
    }

    // Enterprise/Professional tier details
    if (
      msg.includes("enterprise") ||
      msg.includes("coaching") ||
      msg.includes("professional") ||
      msg.includes("1500") ||
      msg.includes("1000")
    ) {
      const allSuggestions = [
        "What's included in coaching sessions?",
        "Can I schedule a demo call first?",
        "How long is the Enterprise commitment?",
        "Do you have case studies?",
        "What industries do your coaches specialize in?",
        "Can I get a custom package?",
        "Is there a satisfaction guarantee?",
        "How do I know which tier is right for me?",
      ]

      return {
        role: "assistant",
        content:
          "Our premium tiers provide **hands-on support** for serious founders:\n\n📊 **Professional Tier - $1,000 (one-time)**\nPerfect for: Fundraising, investor pitches, grant applications\n\n**Deliverables (2-week turnaround):**\n• 15-20 slide pitch deck (investor-ready, branded)\n• 30-40 page comprehensive business plan\n• 3-5 year financial projections with sensitivity analysis\n• Market sizing & TAM analysis with data sources\n• Go-to-market strategy with channel recommendations\n• Visual portfolio/concept mockup\n• 2 rounds of revisions included\n\n🚀 **Enterprise Tier - $1,500/month (3-6 months)**\nPerfect for: Implementation, market launch, scaling\n\n**Includes Everything in Professional +**\n• Weekly 1-hour coaching sessions (12-24 total)\n• Custom client portal with real-time progress tracking\n• Direct Slack/Teams communication channel\n• Unlimited document revisions\n• Ongoing market research & competitor monitoring\n• Implementation roadmap with milestones\n• Quarterly strategic reviews\n• Access to expert network (technical, legal, marketing)\n• Co-creation of marketing materials\n\n**Most founders start with Professional, then upgrade for launch support.**",
        suggestions: getUnaskedSuggestions(allSuggestions),
        requiresAuth: conversationDepth > 3, // After 3 exchanges, suggest signing in for deeper details
      }
    }

    // Deliverables and outputs
    if (
      msg.includes("deliverable") ||
      msg.includes("receive") ||
      msg.includes("get") ||
      msg.includes("result") ||
      msg.includes("report") ||
      msg.includes("output")
    ) {
      const allSuggestions = [
        "Can I see example reports?",
        "What format are the deliverables?",
        "How customizable are the documents?",
        "Can I share reports with investors?",
        "Do you provide editable files?",
        "How long do I have access to my reports?",
        "Can I request revisions?",
        "What if I need additional analysis?",
      ]

      return {
        role: "assistant",
        content:
          "Here's exactly what you'll receive at each tier:\n\n**🎯 Free/Priority Tiers:**\n• Feasibility Score Dashboard (interactive)\n• Summary Report PDF (5 pages for Free, 15-20 for Priority)\n• Breakdown across 6 scoring dimensions\n• Risk assessment matrix\n• Top 5 actionable recommendations\n• Competitive positioning insights\n\n**📊 Professional Tier ($1,000):**\n• Investor Pitch Deck (15-20 slides, PowerPoint + PDF)\n• Business Plan (30-40 pages, Word + PDF)\n• Financial Model (Excel with formulas)\n• Market Analysis Report (data + visualizations)\n• GTM Strategy Document\n• Concept Mockup (Figma/PNG)\n• All files editable and white-labeled\n\n**🚀 Enterprise Tier ($1,500/mo):**\n• Everything in Professional +\n• Custom portal login (lifetime access)\n• Weekly session recordings & notes\n• Implementation checklists\n• Marketing asset library\n• Updated financials & projections\n\n**All documents are professionally designed, investor-ready, and yours to keep forever.**",
        suggestions: getUnaskedSuggestions(allSuggestions),
      }
    }

    // Success stories and case studies
    if (
      msg.includes("success") ||
      msg.includes("case study") ||
      msg.includes("example") ||
      msg.includes("testimonial") ||
      msg.includes("results")
    ) {
      return {
        role: "assistant",
        content:
          "Our platform has helped founders across industries validate and launch innovative projects:\n\n**🌱 GreenTech Startup (Indonesia)**\n• Initial Score: 67/100\n• After coaching: Raised $500K seed round\n• Now: Partnered with 3 government agencies\n\n**💊 HealthTech Platform (Latin America)**\n• Used Professional tier for investor deck\n• Secured $1.2M Series A in 3 months\n• Platform now serves 50K+ patients\n\n**♻️ Circular Economy Initiative (Europe)**\n• Started with free analysis\n• Upgraded to Enterprise coaching\n• Won €2M EU innovation grant\n\n**Sign in to access our full case study library** with detailed breakdowns, founder interviews, and lesson learned from 100+ successful projects.\n\nWant to be our next success story?",
        suggestions: [
          "What industries do you work with most?",
          "How long does it take to see results?",
          "Do you offer success guarantees?",
          "Tell me about your team's background",
        ],
        requiresAuth: true,
      }
    }

    // Team and expertise
    if (
      msg.includes("team") ||
      msg.includes("who") ||
      msg.includes("founder") ||
      msg.includes("expert") ||
      msg.includes("coach") ||
      msg.includes("consultant")
    ) {
      const allSuggestions = [
        "What's your team's background?",
        "Do you have industry-specific experts?",
        "Can I choose my coach?",
        "How many projects have you analyzed?",
        "What's your success rate?",
        "Do you work with international projects?",
        "Can I meet my coach before committing?",
        "What languages does your team speak?",
      ]

      return {
        role: "assistant",
        content:
          "Impax Cort3x is powered by a **diverse team of innovation specialists**:\n\n👥 **Our Experts:**\n• Former VCs and angel investors\n• Corporate innovation directors\n• Sustainability & ESG consultants\n• Financial modeling specialists\n• Industry-specific domain experts (cleantech, healthtech, fintech, agritech)\n• Regulatory and policy advisors\n\n🌍 **Global Reach:**\n• Team across 3 continents\n• Multilingual support (English, Spanish, Portuguese, Indonesian)\n• Experience with 500+ feasibility analyses\n• Deep expertise in emerging markets\n\n🎓 **Credentials:**\n• MBA/Master's degrees from top institutions\n• 10+ years average industry experience\n• Published researchers and thought leaders\n• Active startup mentors and accelerator partners\n\n**Sign in to browse coach profiles and book an intro call** to find the perfect match for your project.",
        suggestions: getUnaskedSuggestions(allSuggestions),
        requiresAuth: conversationDepth > 4,
      }
    }

    // Comparison with competitors
    if (msg.includes("different") || msg.includes("better") || msg.includes("compare") || msg.includes("vs")) {
      const allSuggestions = [
        "How much faster is your analysis?",
        "Why not just use ChatGPT?",
        "What about traditional consultants?",
        "Do you offer money-back guarantees?",
        "Can you match competitor pricing?",
        "What's your competitive advantage?",
        "How accurate is your AI vs humans?",
        "Why should I trust your analysis?",
      ]

      return {
        role: "assistant",
        content:
          "Here's what sets Impax Cort3x apart from alternatives:\n\n**🆚 Traditional Consultants:**\n• ⏱️ We deliver in days, not months\n• 💰 10x more affordable ($100 vs $10K+)\n• 📊 Data-driven scoring vs subjective opinions\n• 🔄 Continuous improvement through AI learning\n\n**🆚 DIY / ChatGPT:**\n• 🎯 Purpose-built for feasibility analysis\n• 💡 Industry-specific knowledge & benchmarks\n• ✅ Expert validation of all insights\n• 📈 Structured framework vs random Q&A\n\n**🆚 Other AI Tools:**\n• 🧠 Memory-powered agents that learn your context\n• 🔒 Zero-retention privacy policies\n• 👥 Human-in-the-loop validation\n• 📚 Multi-tier support from analysis to launch\n\n**Our Secret Sauce:**\nWe combine the speed of AI with the wisdom of experienced operators, wrapped in a privacy-first platform designed specifically for innovation validation.\n\n**Try our free tier** - see the difference yourself!",
        suggestions: getUnaskedSuggestions(allSuggestions),
      }
    }

    // Timeline and process
    if (msg.includes("how long") || msg.includes("timeline") || msg.includes("when") || msg.includes("take")) {
      const allSuggestions = [
        "Can I expedite my analysis?",
        "What happens if you miss the deadline?",
        "How long are coaching engagements?",
        "When will I get my reports?",
        "Can I extend my Enterprise subscription?",
        "How quickly can I start after signing up?",
        "What's the fastest turnaround available?",
        "How long does each tier commitment last?",
      ]

      return {
        role: "assistant",
        content:
          "Here are the **typical timelines** for each service tier:\n\n⏱️ **Free Starter:** 48-72 hours\n• Submit project → 2-3 days → Receive 100-point score + summary report\n\n⚡ **Priority ($100):** 24 hours guaranteed\n• Submit project → 24 hours → Receive comprehensive 15-20 page report\n• Perfect for time-sensitive decisions\n\n📊 **Professional ($1,000):** 2 weeks\n• Submit project → Initial consultation (2 days) → First draft (10 days) → Revisions (3-4 days) → Final delivery\n• Includes 2 revision rounds\n\n🚀 **Enterprise ($1,500/mo):** 3-6 months\n• Month 1: Analysis + documentation + portal setup\n• Months 2-4: Weekly coaching + implementation support\n• Months 4-6: Launch preparation + ongoing guidance\n• Flexible extension options available\n\n**All timelines start once you've submitted required information.**\n\nNeed faster delivery? Contact us for rush options!",
        suggestions: getUnaskedSuggestions(allSuggestions),
      }
    }

    // Deep technical or implementation questions - require sign-in
    if (
      conversationDepth > 5 ||
      msg.includes("api") ||
      msg.includes("integrate") ||
      msg.includes("custom") ||
      msg.includes("white label")
    ) {
      return {
        role: "assistant",
        content:
          "I'd love to dive deeper into these advanced topics with you! 🚀\n\n**To discuss:**\n• Custom integrations & API access\n• White-label solutions\n• Enterprise data security configurations\n• Bulk project analysis\n• Team collaboration features\n• Custom reporting templates\n\n**Please sign in or create a free account** to continue this conversation with access to:\n\n✅ Detailed technical documentation\n✅ Schedule a 1:1 demo with our team\n✅ Get a custom quote tailored to your needs\n✅ Access our partner program information\n\n**Creating an account takes 30 seconds** and gives you full access to our knowledge base and support team.",
        suggestions: [
          "Create free account",
          "Schedule a demo call",
          "Tell me about the free tier again",
          "How secure is my data?",
        ],
        requiresAuth: true,
      }
    }

    // Industries and specializations
    if (
      msg.includes("industry") ||
      msg.includes("sector") ||
      msg.includes("specialize") ||
      msg.includes("vertical") ||
      msg.includes("work with")
    ) {
      const allSuggestions = [
        "Do you work with B2B or B2C projects?",
        "What about hardware startups?",
        "Can you analyze social enterprises?",
        "Do you handle regulated industries?",
        "What's your experience with climate tech?",
        "Can you evaluate platform businesses?",
        "Do you work with government projects?",
        "What about marketplace models?",
      ]

      return {
        role: "assistant",
        content:
          "We've analyzed projects across **15+ industries** and specialize in innovation-driven sectors:\n\n🌱 **CleanTech & Climate**\n• Renewable energy, carbon markets, circular economy\n• ESG impact measurement\n\n💊 **HealthTech & BioTech**\n• Digital health, telemedicine, medical devices\n• Regulatory pathway analysis\n\n🏦 **FinTech & Crypto**\n• Payment systems, DeFi, financial inclusion\n• Compliance & licensing guidance\n\n🚜 **AgriTech & FoodTech**\n• Precision agriculture, supply chain, alternative proteins\n• Sustainability scoring\n\n🏗️ **Industrial & Manufacturing**\n• Industry 4.0, automation, smart factories\n• Implementation complexity assessment\n\n📱 **Digital Platforms & SaaS**\n• Marketplaces, B2B/B2C platforms, AI applications\n• GTM strategy & unit economics\n\n**Plus:** Education, Logistics, PropTech, SpaceTech, and more!\n\n**Not sure if we can help your industry? Sign up and submit** - our AI adapts to any sector.",
        suggestions: getUnaskedSuggestions(allSuggestions),
      }
    }

    // Default intelligent response with conversation tracking
    const defaultSuggestions = [
      "How does your feasibility analysis work?",
      "What's included in each pricing tier?",
      "Tell me about your AI technology",
      "Is my project data secure and private?",
      "Can I see example deliverables?",
      "What industries do you specialize in?",
      "How long does analysis take?",
      "What makes you different from competitors?",
      "Do you have success stories?",
      "How do I get started?",
      "Can I schedule a demo call?",
      "What's your team's background?",
    ]

    return {
      role: "assistant",
      content:
        "Great question! Let me help clarify. **Impax Cort3x** is your partner in transforming innovative ideas into market-ready solutions.\n\n**We specialize in:**\n\n🎯 **AI-Powered Feasibility Analysis**\nGet a comprehensive 100-point score evaluating market viability, financial feasibility, sustainability impact, and implementation complexity in 24-72 hours.\n\n👥 **Expert Coaching & Strategy**\nWork with seasoned industry specialists who've launched dozens of successful ventures across cleantech, healthtech, fintech, and more.\n\n📊 **Complete Documentation**\nInvestor-ready pitch decks, business plans, financial models, and go-to-market strategies that help you raise capital and scale.\n\n🚀 **Implementation Support**\nHands-on guidance from validation through launch with custom portals, weekly coaching, and ongoing market intelligence.\n\n**What would you like to explore?**",
      suggestions: getUnaskedSuggestions(defaultSuggestions),
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 z-50 transition-transform hover:scale-110"
          size="icon"
        >
          <Sparkles className="h-6 w-6" />
          <span className="sr-only">Open AI Assistant</span>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[420px] h-[650px] shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-[hsl(var(--primary))] text-white rounded-t-lg">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-xs opacity-90">Ask about our services & initiatives</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className="space-y-3">
                  <div className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                    <div
                      className={cn(
                        "rounded-lg px-4 py-2.5 max-w-[85%]",
                        message.role === "user" ? "bg-[hsl(var(--primary))] text-white" : "bg-muted text-foreground",
                      )}
                    >
                      <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                    </div>
                  </div>

                  {/* Auth Required Banner */}
                  {message.role === "assistant" && message.requiresAuth && (
                    <div className="flex items-center gap-2 px-3 py-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                      <Lock className="h-4 w-4 text-yellow-600 dark:text-yellow-500" />
                      <p className="text-xs text-yellow-800 dark:text-yellow-200">
                        <Link href="/auth" className="font-semibold underline">
                          Sign in
                        </Link>{" "}
                        to access detailed information and advanced features
                      </p>
                    </div>
                  )}

                  {/* Suggested Responses */}
                  {message.role === "assistant" && message.suggestions && index === messages.length - 1 && (
                    <div className="flex flex-wrap gap-2 pl-1">
                      {message.suggestions.map((suggestion, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          size="sm"
                          onClick={() => handleSendMessage(suggestion)}
                          className="text-xs h-auto py-2 px-3 hover:bg-[hsl(var(--primary))]/10 hover:border-[hsl(var(--primary))] transition-colors"
                        >
                          {suggestion}
                          <ArrowRight className="h-3 w-3 ml-1.5" />
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-4 py-3">
                    <div className="flex gap-1.5">
                      <div
                        className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t bg-background">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage(input)
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <p className="text-[10px] text-muted-foreground mt-2 text-center">
              Powered by memory-AI • Sign in for advanced features
            </p>
          </div>
        </Card>
      )}
    </>
  )
}
