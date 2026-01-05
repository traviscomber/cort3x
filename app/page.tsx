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
  let dataFetchError: string | null = null

  try {
    const supabase = await createClient()

    try {
      const { data: initiativesData, error: initError } = await supabase
        .from("initiatives")
        .select("*")
        .order("created_at", { ascending: false })

      if (initError) {
        console.error("[v0] HomePage: Initiatives fetch error:", initError)
      } else {
        initiatives = initiativesData || []
      }
    } catch (e) {
      console.error("[v0] HomePage: Initiatives query exception:", e)
    }

    try {
      const { data: partnersData, error: partnerError } = await supabase
        .from("partners")
        .select("name, logo")
        .eq("status", "active")
        .limit(5)

      if (partnerError) {
        console.error("[v0] HomePage: Partners fetch error:", partnerError)
      } else {
        partners = partnersData || []
      }
    } catch (e) {
      console.error("[v0] HomePage: Partners query exception:", e)
    }

    try {
      const { data: countriesData, error: countryError } = await supabase
        .from("countries")
        .select("*")
        .in("code", ["CL", "US", "ID"])
        .order("name")

      if (countryError) {
        console.error("[v0] HomePage: Countries fetch error:", countryError)
      } else {
        countries = countriesData || []
      }
    } catch (e) {
      console.error("[v0] HomePage: Countries query exception:", e)
    }
  } catch (error) {
    console.error("[v0] HomePage: Fatal error during data fetch:", error)
    dataFetchError = error instanceof Error ? error.message : "Unknown error occurred"
    logger.error("Failed to fetch homepage data", error)
  }

  return (
    <>
      <StructuredData locale="en" />
      <HomePageClient initiatives={initiatives} partners={partners} countries={countries} />
      {dataFetchError && (
        <div className="fixed bottom-4 right-4 p-4 bg-red-100 border border-red-400 rounded text-red-700 text-sm max-w-sm">
          <p className="font-semibold">Data fetch error (dev only):</p>
          <p className="text-xs">{dataFetchError}</p>
        </div>
      )}
    </>
  )
}
