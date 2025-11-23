import { createClient } from "@/lib/supabase/server"
import { HomePageClient } from "@/components/home-page-client"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"
import { logger } from "@/lib/logger"

export const metadata: Metadata = {
  title: "Impax Cort3x | AI-Powered Innovation Accelerator with Expert Coaching",
  description:
    "Transform innovation with AI-powered research insights and expert coaching. Our platform delivers deep market intelligence and guided challenges that accelerate your path from concept to market launch in Chile, USA, and Indonesia.",
  openGraph: {
    title: "Impax Cort3x | AI-Powered Innovation Accelerator",
    description:
      "AI-powered market research combined with expert coaching to accelerate innovation from concept to market launch.",
    type: "website",
    url: "https://green-industrial-innovation.vercel.app",
  },
  alternates: {
    canonical: "https://green-industrial-innovation.vercel.app",
    languages: {
      "en-US": "https://green-industrial-innovation.vercel.app/en",
      "es-CL": "https://green-industrial-innovation.vercel.app/es",
      "id-ID": "https://green-industrial-innovation.vercel.app/id",
    },
  },
}

export default async function HomePage() {
  let initiatives = []
  let partners = []
  let countries = []

  try {
    const supabase = await createClient()

    // Fetch real initiatives from database
    const { data: initiativesData } = await supabase
      .from("initiatives")
      .select("*")
      .order("created_at", { ascending: false })
    initiatives = initiativesData || []

    // Fetch real partners from database for trust indicators
    const { data: partnersData } = await supabase.from("partners").select("name, logo").eq("status", "active").limit(5)
    partners = partnersData || []

    const { data: countriesData } = await supabase
      .from("countries")
      .select("*")
      .in("code", ["CL", "US", "ID"])
      .order("name")
    countries = countriesData || []
  } catch (error) {
    logger.error("Failed to fetch homepage data", error)
    // Continue with empty arrays - the homepage will still render
  }

  return (
    <>
      <StructuredData locale="en" />
      <HomePageClient initiatives={initiatives} partners={partners} countries={countries} />
    </>
  )
}
