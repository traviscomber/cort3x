"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Award,
  Sparkles,
  Target,
  Users,
  Zap,
  BarChart3,
  Leaf,
  Palette,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Lightbulb,
} from "lucide-react"
import { useTranslations } from "@/lib/i18n/translations-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useRef, useState } from "react"
import { ContactCoachDialog } from "@/components/contact-coach-dialog"
import { HeroAuthCard } from "@/components/auth/hero-auth-card"
import { HomepageChatAssistant } from "@/components/homepage-chat-assistant"

interface HomePageClientProps {
  initiatives: any[]
  partners: any[]
  countries: any[]
}

export function HomePageClient({ initiatives, partners, countries }: HomePageClientProps) {
  const { t } = useTranslations()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [contactDialogOpen, setContactDialogOpen] = useState(false)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [selectedFocus, setSelectedFocus] = useState<string | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<string>("indonesia")
  const [filteredInitiatives, setFilteredInitiatives] = useState(initiatives)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const handleSeePlatform = () => {
    scrollToSection("projects")
  }

  const handleTalkToCoach = () => {
    setContactDialogOpen(true)
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setIsAtStart(scrollLeft === 0)
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) {
      return
    }

    updateScrollButtons()
    container.addEventListener("scroll", updateScrollButtons)
    return () => container.removeEventListener("scroll", updateScrollButtons)
  }, [initiatives])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Height of sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      // No longer need to close mobile menu here, as it's handled by SiteNav
    }
  }

  // Removed the useEffect for activeSection tracking as it's now managed by SiteNav

  useEffect(() => {
    if (selectedCountry) {
      // Filter initiatives based on selected country
      const filtered = initiatives.filter((initiative: any) => {
        // You can adjust this logic based on how country is stored in your initiatives
        return (
          initiative.country?.toLowerCase() === selectedCountry.toLowerCase() ||
          initiative.location?.toLowerCase().includes(selectedCountry.toLowerCase()) ||
          !initiative.country
        ) // Show initiatives without country assigned
      })
      setFilteredInitiatives(filtered)
    } else {
      setFilteredInitiatives(initiatives)
    }
  }, [selectedCountry, initiatives])

  const handleContinue = () => {
    if (selectedCountry) {
      window.location.href = `/onboarding/journey?country=${selectedCountry}`
    }
  }

  const handleContinueWithCountry = () => {
    console.log("[v0] Continuing with country:", selectedCountry)
    // Scroll to projects section to show filtered results
    scrollToSection("projects")
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section with Map Background */}
        <section className="relative pt-48 pb-56 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/map.jpg"
              alt="World map background"
              className="w-full h-full object-cover opacity-45 scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-primary/10" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Hero content */}
              <div className="text-left">
                <Badge className="mb-8 bg-primary text-white border-0 px-8 py-3.5 text-base font-medium shadow-lg">
                  <Sparkles className="h-5 w-5 mr-2 inline" />
                  {t("hero.badge")}
                </Badge>

                <h2 className="text-6xl md:text-8xl font-bold mb-10 text-balance text-gray-900 leading-tight">
                  {t("hero.title")}
                </h2>

                <p className="text-2xl md:text-3xl text-gray-600 max-w-2xl text-pretty mb-12 leading-relaxed">
                  {t("hero.description")}
                </p>

                <div className="flex flex-wrap items-center gap-5 mb-16">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-xl px-12 py-7 shadow-xl"
                    onClick={handleSeePlatform}
                  >
                    {t("hero.seePlatform")}
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-xl px-12 py-7 border-2 border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 bg-white"
                    onClick={handleTalkToCoach}
                  >
                    {t("hero.talkToCoach")}
                  </Button>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <HeroAuthCard />
              </div>
            </div>

            {/* Features cards below */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
              <Card className="bg-white/80 backdrop-blur border-2 border-gray-200 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-1">
                <CardHeader className="p-10">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-4">{t("hero.features.research.title")}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    {t("hero.features.research.description")}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/80 backdrop-blur border-2 border-gray-200 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-1">
                <CardHeader className="p-10">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-4">{t("hero.features.coaching.title")}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    {t("hero.features.coaching.description")}
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/80 backdrop-blur border-2 border-gray-200 hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-1">
                <CardHeader className="p-10">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-5 shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-4">{t("hero.features.execution.title")}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    {t("hero.features.execution.description")}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/*
        <section className="container mx-auto px-4 py-24 bg-gradient-to-b from-white to-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-gray-900">
                Where's your innovation focus?
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
                Select areas to see how our AI research and expert coaching can accelerate your innovation journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card
                className={`p-8 cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 border-2 ${
                  selectedFocus === "environmental"
                    ? "border-green-500 bg-green-50/50 ring-4 ring-green-500/20"
                    : "border-gray-200 hover:border-green-500"
                }`}
                onClick={() => setSelectedFocus(selectedFocus === "environmental" ? null : "environmental")}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center shadow-lg">
                    <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                      <Leaf className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Environmental Impact</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Trends & Tech</p>
                      <p>Opportunities & Risks</p>
                      <p>R&D Pipeline</p>
                    </div>
                  </div>
                  {selectedFocus === "environmental" && <Badge className="bg-green-500 text-white">Selected</Badge>}
                </div>
              </Card>

              <Card
                className={`p-8 cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 border-2 ${
                  selectedFocus === "cultural"
                    ? "border-orange-500 bg-orange-50/50 ring-4 ring-orange-500/20"
                    : "border-gray-200 hover:border-orange-500"
                }`}
                onClick={() => setSelectedFocus(selectedFocus === "cultural" ? null : "cultural")}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center shadow-lg">
                    <div className="h-16 w-16 rounded-full bg-orange-500 flex items-center justify-center">
                      <Lightbulb className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Cultural Innovation</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Consumer Insights</p>
                      <p>Ideas</p>
                    </div>
                  </div>
                  {selectedFocus === "cultural" && <Badge className="bg-orange-500 text-white">Selected</Badge>}
                </div>
              </Card>

              <Card
                className={`p-8 cursor-pointer transition-all hover:shadow-2xl hover:-translate-y-2 border-2 ${
                  selectedFocus === "personal"
                    ? "border-blue-500 bg-blue-50/50 ring-4 ring-blue-500/20"
                    : "border-gray-200 hover:border-blue-500"
                }`}
                onClick={() => setSelectedFocus(selectedFocus === "personal" ? null : "personal")}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-lg">
                    <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Personal Growth</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Innovation Portfolio</p>
                      <p>Roadmaps, Startups</p>
                    </div>
                  </div>
                  {selectedFocus === "personal" && <Badge className="bg-blue-500 text-white">Selected</Badge>}
                </div>
              </Card>
            </div>

            <div className="flex justify-center mb-8">
              <div className="text-center text-sm text-gray-500 max-w-2xl">
                <p className="italic">
                  These three focus areas work together in a continuous cycle, each informing and enhancing the others
                  to create comprehensive innovation strategies.
                </p>
              </div>
            </div>

            {selectedFocus && (
              <div className="mt-12 p-8 bg-white rounded-2xl border-2 border-primary shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                {selectedFocus === "environmental" && (
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                        <Leaf className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold text-gray-900">Environmental Impact</h4>
                        <p className="text-lg text-gray-600">Sustainable innovation for a better planet</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="bg-green-50/50 border-green-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                            Trends & Tech
                          </CardTitle>
                          <CardDescription className="text-gray-700 leading-relaxed">
                            Get AI-powered analysis of emerging environmental technologies, market trends, and
                            regulatory changes. We identify opportunities in renewable energy, waste reduction, circular
                            economy models, and climate tech innovations.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="bg-green-50/50 border-green-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                            <Target className="h-5 w-5 text-green-600" />
                            Opportunities & Risks
                          </CardTitle>
                          <CardDescription className="text-gray-700 leading-relaxed">
                            Expert coaches help you navigate environmental regulations, carbon markets, and
                            sustainability certifications. We assess risks and opportunities in green investments, ESG
                            compliance, and impact measurement.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="bg-green-50/50 border-green-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                            <Rocket className="h-5 w-5 text-green-600" />
                            R&D Pipeline
                          </CardTitle>
                          <CardDescription className="text-gray-700 leading-relaxed">
                            Build a roadmap for sustainable innovation with research support, prototype development, and
                            pilot testing. We help secure grants, partnerships, and funding for environmental projects.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                )}

                {selectedFocus === "cultural" && (
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-16 w-16 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                        <Lightbulb className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold text-gray-900">Cultural Innovation</h4>
                        <p className="text-lg text-gray-600">Transforming heritage into market opportunities</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="bg-orange-50/50 border-orange-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                            <Users className="h-5 w-5 text-orange-600" />
                            Consumer Insights
                          </CardTitle>
                          <CardDescription className="text-gray-700 leading-relaxed">
                            Discover untapped market opportunities through deep cultural analysis. Our AI identifies
                            consumer trends, cultural shifts, and heritage-based product opportunities. We analyze how
                            traditional practices can solve modern problems and create authentic brand narratives.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="bg-orange-50/50 border-orange-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-orange-600" />
                            Ideas & Innovation
                          </CardTitle>
                          <CardDescription className="text-gray-700 leading-relaxed">
                            Transform cultural assets into commercial ventures with expert coaching. We help you develop
                            heritage-based products, cultural tourism experiences, creative industries, and social
                            enterprises. Receive support for storytelling, branding, and market positioning.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                )}

                {selectedFocus === "personal" && (
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                        <TrendingUp className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-3xl font-bold text-gray-900">Personal Growth</h4>
                        <p className="text-lg text-gray-600">Build your innovation career and ventures</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="bg-blue-50/50 border-blue-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                            <Award className="h-5 w-5 text-blue-600" />
                            Innovation Portfolio
                          </CardTitle>
                          <CardDescription className="text-gray-700 leading-relaxed">
                            Build a track record of innovation projects. We help document your ideas, create case
                            studies, and develop a professional portfolio that showcases your innovation capabilities to
                            employers and investors.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="bg-blue-50/50 border-blue-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                            <Target className="h-5 w-5 text-blue-600" />
                            Roadmaps & Strategy
                          </CardTitle>
                          <CardDescription className="text-gray-700 leading-relaxed">
                            Create clear paths from idea to execution. Our coaches help you develop strategic roadmaps,
                            set milestones, allocate resources, and build implementation plans that turn concepts into
                            reality.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="bg-blue-50/50 border-blue-200">
                        <CardHeader>
                          <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                            <Rocket className="h-5 w-5 text-blue-600" />
                            Startups & Ventures
                          </CardTitle>
                          <CardDescription className="text-gray-700 leading-relaxed">
                            Launch and scale your startup with end-to-end support. Get help with business models, pitch
                            decks, fundraising strategies, team building, and go-to-market execution from experienced
                            entrepreneurs.
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                )}

                <div className="mt-6 text-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleTalkToCoach}>
                    Get Started with{" "}
                    {selectedFocus === "environmental"
                      ? "Environmental Impact"
                      : selectedFocus === "cultural"
                        ? "Cultural Innovation"
                        : "Personal Growth"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
        */}

        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <section id="about" className="bg-white scroll-mt-20">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto">
              {/*
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-primary text-white border-0 px-4 py-2">
                  <MapPin className="h-4 w-4 mr-2 inline" />
                  {t("location.badge")}
                </Badge>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">
                  {t("location.title")}
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">{t("location.description")}</p>
              </div>
              */}

              {/* <LocationMapWithPressure countries={countries || []} /> */}

              {/*
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="border border-gray-200 bg-white hover:border-primary/30 transition-all">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{t("location.features.research.title")}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {t("location.features.research.description")}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border border-gray-200 bg-white hover:border-primary/30 transition-all">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{t("location.features.coaches.title")}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {t("location.features.coaches.description")}
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border border-gray-200 bg-white hover:border-primary/30 transition-all">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{t("location.features.mapping.title")}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {t("location.features.mapping.description")}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              */}
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Focus Areas Section - Keeping the existing illustration */}
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">{t("focus.title")}</h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">{t("focus.description")}</p>
              </div>

              <div className="flex justify-center">
                <img
                  src="/focus-areas-cycle.png"
                  alt="Three focus areas connected in a cycle: Environmental Impact (Trends & Tech, Opportunities & Risks, R&D Pipeline), Cultural Innovation (Consumer Insights, Ideas), and Personal Growth (Innovation Portfolio, Roadmaps, Startups)"
                  className="w-full max-w-4xl h-auto object-contain rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Solution Section */}
          <div className="container mx-auto px-4 py-20 bg-gray-50 rounded-3xl my-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">{t("solution.title")}</h3>
              <p className="text-2xl font-semibold text-primary text-pretty">{t("solution.subtitle")}</p>
            </div>

            <div className="max-w-3xl mx-auto mb-16">
              <img src="/innovation-cycle.png" alt={t("solution.cycleAlt")} className="w-full h-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t("solution.phases.strategy.title")}</h4>
                <p className="text-gray-600">{t("solution.phases.strategy.description")}</p>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t("solution.phases.ideation.title")}</h4>
                <p className="text-gray-600">{t("solution.phases.ideation.description")}</p>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{t("solution.phases.execution.title")}</h4>
                <p className="text-gray-600">{t("solution.phases.execution.description")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section - showing only 3 projects with link to view all */}
        <section
          id="projects"
          className="container mx-auto px-4 py-24 bg-gradient-to-b from-white to-primary/5 scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <Badge className="mb-6 bg-primary text-white border-0 px-6 py-2.5 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2 inline" />
                {t("initiatives.badge")}
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-gray-900">
                {t("initiatives.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
                Explore real-world projects across environmental impact, cultural innovation, and personal growth
                {selectedCountry && (
                  <span className="block mt-2">
                    <Badge variant="outline" className="border-primary text-primary">
                      Filtered by:{" "}
                      {selectedCountry === "chile" ? "Chile" : selectedCountry === "usa" ? "USA" : "Indonesia"}
                    </Badge>
                  </span>
                )}
              </p>
            </header>

            {filteredInitiatives && filteredInitiatives.length > 0 ? (
              <>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {filteredInitiatives.slice(0, 3).map((initiative: any) => {
                    const categoryColors = {
                      Environmental: "bg-green-500",
                      Cultural: "bg-orange-500",
                      "Personal Growth": "bg-blue-500",
                      "Environmental Policy": "bg-emerald-600",
                      "Cultural Innovation": "bg-amber-600",
                      "Platform Development": "bg-indigo-600",
                      "Mobile Application": "bg-slate-600",
                    }
                    const categoryIcons = {
                      Environmental: Leaf,
                      Cultural: Palette,
                      "Personal Growth": TrendingUp,
                      "Environmental Policy": Leaf,
                      "Cultural Innovation": Palette,
                      "Platform Development": Target,
                      "Mobile Application": Target,
                    }
                    const Icon = categoryIcons[initiative.category as keyof typeof categoryIcons] || Target
                    const colorClass =
                      categoryColors[initiative.category as keyof typeof categoryColors] || "bg-primary"

                    const generateProjectCode = (category: string, id: string) => {
                      let prefix = "PER"
                      if (category?.toLowerCase().includes("environmental")) prefix = "ENV"
                      else if (category?.toLowerCase().includes("cultural")) prefix = "CUL"

                      const sequence = id.slice(-3).toUpperCase()
                      return `${prefix}-${sequence}`
                    }

                    const projectCode =
                      initiative.project_code || generateProjectCode(initiative.category, initiative.id)

                    return (
                      <article key={initiative.id} className="h-full" role="listitem">
                        <Link href={`/initiatives/${initiative.id}`} className="block h-full group">
                          <Card className="border-2 border-gray-200 bg-white hover:border-primary hover:shadow-2xl cursor-pointer h-full transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                            <CardHeader className="space-y-4">
                              <div className="flex items-start justify-between gap-3">
                                <div
                                  className={`h-14 w-14 rounded-xl ${colorClass} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0`}
                                >
                                  <Icon className="h-7 w-7 text-white" />
                                </div>
                                <Badge
                                  variant="outline"
                                  className="border-2 border-gray-300 text-gray-700 bg-gray-50 font-mono text-xs px-2 py-1 group-hover:border-primary group-hover:text-primary transition-colors"
                                >
                                  {projectCode}
                                </Badge>
                              </div>
                              <Badge className={`${colorClass} text-white border-0 w-fit text-sm px-3 py-1`}>
                                {initiative.category}
                              </Badge>
                              <CardTitle className="text-xl text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                                {initiative.title}
                              </CardTitle>
                              <CardDescription className="text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                                {initiative.description}
                              </CardDescription>
                              <div className="pt-4">
                                <span className="text-primary font-semibold text-sm group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                                  Learn More
                                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                              </div>
                            </CardHeader>
                          </Card>
                        </Link>
                      </article>
                    )
                  })}
                </div>

                <div className="text-center">
                  <Link href="/projects">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 shadow-lg bg-transparent"
                    >
                      View All {filteredInitiatives.length} Projects
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-2xl">
                <Sparkles className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  {selectedCountry
                    ? `No projects found for ${selectedCountry === "chile" ? "Chile" : selectedCountry === "usa" ? "USA" : "Indonesia"}`
                    : t("initiatives.noInitiatives")}
                </p>
              </div>
            )}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <section id="services" className="py-24 bg-gradient-to-br from-primary/10 via-white to-primary/5 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-primary text-white border-0 px-6 py-2.5 text-sm font-medium">
                  <Rocket className="h-4 w-4 mr-2 inline" />
                  Full-Service Support
                </Badge>
                <h3 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-gray-900">
                  We Do The Research For You
                </h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed">
                  From initial research to final pitch, we handle the heavy lifting so you can focus on strategic
                  decisions.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Market Research */}
                <Card className="bg-gradient-to-br from-blue-50/70 to-white border-2 border-blue-100/50 hover:border-primary hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="space-y-4 p-8">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <BarChart3 className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-3">Market Research & Insights</CardTitle>
                        <CardDescription className="text-base text-gray-700 leading-relaxed">
                          Comprehensive market analysis, competitive intelligence, and trend forecasting.
                        </CardDescription>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 ml-[72px]">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Industry trends and emerging opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Competitive landscape and gap analysis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Consumer behavior and market sizing</span>
                      </li>
                    </ul>
                  </CardHeader>
                </Card>

                {/* Business Plans */}
                <Card className="bg-gradient-to-br from-green-50/70 to-white border-2 border-green-100/50 hover:border-primary hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="space-y-4 p-8">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <Target className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-3">Business Plans & Strategy</CardTitle>
                        <CardDescription className="text-base text-gray-700 leading-relaxed">
                          Investor-ready business plans with financial models and go-to-market strategies.
                        </CardDescription>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 ml-[72px]">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>Executive summaries and business models</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>Financial projections and ROI analysis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span>Go-to-market and acquisition plans</span>
                      </li>
                    </ul>
                  </CardHeader>
                </Card>

                {/* Pitch Decks */}
                <Card className="bg-gradient-to-br from-purple-50/70 to-white border-2 border-purple-100/50 hover:border-primary hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="space-y-4 p-8">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-purple-400 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <Sparkles className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-3">Pitch Decks & Presentations</CardTitle>
                        <CardDescription className="text-base text-gray-700 leading-relaxed">
                          Compelling, professionally designed pitch decks that convince stakeholders and investors.
                        </CardDescription>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 ml-[72px]">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>Investor pitch decks with clear value propositions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>Visual storytelling with data-driven insights</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>Professional design aligned with your brand</span>
                      </li>
                    </ul>
                  </CardHeader>
                </Card>

                {/* Technical Documentation */}
                <Card className="bg-gradient-to-br from-orange-50/70 to-white border-2 border-orange-100/50 hover:border-primary hover:shadow-2xl transition-all duration-300 group">
                  <CardHeader className="space-y-4 p-8">
                    <div className="flex items-start gap-4">
                      <div className="h-14 w-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <Award className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 mb-3">Technical Documentation & IP</CardTitle>
                        <CardDescription className="text-base text-gray-700 leading-relaxed">
                          Technical documentation, patent applications, and IP strategies to protect innovations.
                        </CardDescription>
                      </div>
                    </div>
                    <ul className="space-y-3 text-gray-700 ml-[72px]">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Technical specifications and requirements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>Patent landscape analysis and filing support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>IP protection and licensing frameworks</span>
                      </li>
                    </ul>
                  </CardHeader>
                </Card>
              </div>

              {/* CTA Box */}
              <div className="text-center p-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border-2 border-primary/20 shadow-lg">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900 mb-3">Focus on your vision while we handle execution</p>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Expert team + AI-powered tools = Comprehensive research and strategic plans that accelerate your
                  innovation.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-6 shadow-xl">
                  Get Started with Full Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <section
          id="journey"
          className="container mx-auto px-4 py-20 bg-gradient-to-br from-primary/10 via-white to-purple-50/50 relative overflow-hidden scroll-mt-20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/10 to-purple-400/10 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-primary/80 text-white border-0 px-5 py-2 text-sm shadow-lg">
                <Rocket className="h-4 w-4 mr-2 inline" />
                Your Innovation Journey
              </Badge>
              <h3 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-gray-900 via-primary to-purple-400 bg-clip-text text-transparent">
                From Idea to Real-World Project
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
                We guide you through every step with proven methodologies, expert support, and clear milestones.
              </p>
            </div>

            <div className="mb-12 flex justify-center">
              <img
                src="/journey-phases.png"
                alt="6-Phase Innovation Journey: Discovery & Validation, Strategy & Planning, Design & Documentation, Funding & Partnerships, Implementation & Launch, Growth & Scaling"
                className="w-full max-w-4xl h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-primary via-primary/90 to-purple-400/80 rounded-2xl shadow-xl">
              <Rocket className="h-10 w-10 text-white mx-auto mb-3" />
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Transform Your Idea?</h4>
              <p className="text-base text-white/90 mb-6 max-w-2xl mx-auto">
                Join hundreds of innovators who've turned their concepts into thriving projects with our proven
                methodology.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 text-base px-8 py-6 shadow-xl font-bold"
              >
                Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Proven Innovation Success infographic moved after journey */}
        {/* <section className="container mx-auto px-4 py-24 bg-gradient-to-b from-white to-primary/5">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <Badge className="mb-6 bg-primary text-white border-0 px-6 py-2.5 text-sm font-medium">
                <Award className="h-4 w-4 mr-2 inline" />
                Strategic Portfolio
              </Badge>
              <h3 className="text-4xl md:text-6xl font-bold mb-4 text-balance text-gray-900">
                Proven Innovation Success
              </h3>
            </header>

            <div className="flex justify-center">
              <img
                src="/initiatives-types.jpg"
                alt="Real initiatives deployed across environmental impact, cultural innovation, and personal growth: Future Scenario, New Venture, Product Concept, Transformation, Business Model, Collaboration, Cost Saving, Patent, Go-to-Market"
                className="w-full max-w-4xl h-auto rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" /> */}

        <section className="container mx-auto px-4 py-16 bg-white" aria-label="Trusted by industry leaders">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Trusted by Industry Leaders
              </p>
            </div>

            {/* First Row - Scrolling Right */}
            <div className="relative overflow-hidden mb-12">
              <div className="flex gap-16 animate-scroll-right items-center">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-16 items-center flex-shrink-0">
                    <img
                      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                      alt="Google"
                      className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg"
                      alt="Meta"
                      className="h-7 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                      alt="OpenAI"
                      className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                      alt="Microsoft"
                      className="h-7 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Scrolling Left */}
            <div className="relative overflow-hidden">
              <div className="flex gap-16 animate-scroll-left items-center">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-16 items-center flex-shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                      alt="Apple"
                      className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
                      alt="Spotify"
                      className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Logo_of_YouTube_%282015-2017%29.svg"
                      alt="YouTube"
                      className="h-7 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
                      alt="IBM"
                      className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-20" itemScope itemType="https://schema.org/FAQPage">
          <div className="max-w-4xl mx-auto">
            {/* FAQ Illustration */}
            <div className="flex justify-center mb-12">
              <img src="/faq-illustration.png" alt="FAQ Illustration" className="w-full max-w-md" />
            </div>

            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">{t("faq.title")}</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">{t("faq.description")}</p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg mb-4 px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {t("faq.questions.whatIs.question")}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{t("faq.questions.whatIs.answer")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg mb-4 px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {t("faq.questions.howAI.question")}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{t("faq.questions.howAI.answer")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg mb-4 px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {t("faq.questions.challenging.question")}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{t("faq.questions.challenging.answer")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg mb-4 px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {t("faq.questions.whySuper.question")}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{t("faq.questions.whySuper.answer")}</AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-gray-200 rounded-lg mb-4 px-6 bg-white">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline">
                  {t("faq.questions.moreQuestions.question")}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{t("faq.questions.moreQuestions.answer")}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-primary/10 to-amber-50 rounded-3xl p-12 md:p-16 shadow-lg border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-gray-900">{t("cta.title")}</h3>
                <p className="text-xl mb-8 text-gray-700 text-pretty">{t("cta.description")}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 shadow-md"
                    onClick={handleSeePlatform}
                  >
                    {t("cta.explorePlatform")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
                    onClick={handleTalkToCoach}
                  >
                    {t("cta.talkToCoach")}
                  </Button>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
                  <img src="/ai-lightbulb.png" alt={t("cta.imageAlt")} className="relative w-full max-w-sm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t bg-gray-50 mt-16" role="contentinfo">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-lg text-gray-900">{t("footer.brand")}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{t("footer.tagline")}</p>
              </div>
              <nav aria-label="Platform links">
                <h4 className="font-semibold mb-4 text-gray-900">{t("footer.platform.title")}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {t("footer.platform.features")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {t("footer.platform.pricing")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {t("footer.platform.caseStudies")}
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav aria-label="Company links">
                <h4 className="font-semibold mb-4 text-gray-900">{t("footer.company.title")}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {t("footer.company.about")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {t("footer.company.careers")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {t("footer.company.contact")}
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav aria-label="Resource links">
                <h4 className="font-semibold mb-4 text-gray-900">{t("footer.resources.title")}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {t("footer.resources.documentation")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {t("footer.resources.blog")}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary transition-colors">
                      {t("footer.resources.support")}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="border-t pt-8 text-center text-sm text-gray-600">
              <p>{t("footer.copyright")}</p>
              <p className="mt-2">
                Powered by{" "}
                <a
                  href="https://n3uralia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  n3uralia
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <ContactCoachDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />

      <HomepageChatAssistant />
    </>
  )
}
