import { createClient } from "@/lib/supabase/server"
import { HomePageClient } from "@/components/home-page-client"
import { StructuredData } from "@/components/structured-data"
import type { Metadata } from "next"
import { logger } from "@/lib/logger"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Cort3x | Innovation Intelligence OS",
  description:
    "Cort3x connects research, structured evidence, signals, opportunities, decisions and execution in one persistent innovation intelligence workflow.",
  openGraph: {
    title: "Cort3x | Innovation Intelligence OS",
    description:
      "Turn research into structured evidence, opportunities, decisions and execution with traceable innovation intelligence.",
    type: "website",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
}

export default async function HomePage() {
  let initiatives = []
  let partners = []
  let countries = []

  try {
    const supabase = await createClient()

    try {
      const { data: initiativesData, error: initError } = await supabase
        .from("initiatives")
        .select("*")
        .order("created_at", { ascending: false })

      if (initError) {
        logger.error("Homepage initiatives fetch failed", initError)
      } else {
        initiatives = initiativesData || []
      }
    } catch (error) {
      logger.error("Homepage initiatives query failed", error)
    }

    try {
      const { data: partnersData, error: partnerError } = await supabase
        .from("partners")
        .select("name, logo")
        .eq("status", "active")
        .limit(5)

      if (partnerError) {
        logger.error("Homepage partners fetch failed", partnerError)
      } else {
        partners = partnersData || []
      }
    } catch (error) {
      logger.error("Homepage partners query failed", error)
    }

    try {
      const { data: countriesData, error: countryError } = await supabase
        .from("countries")
        .select("*")
        .in("code", ["CL", "US", "ID"])
        .order("name")

      if (countryError) {
        logger.error("Homepage countries fetch failed", countryError)
      } else {
        countries = countriesData || []
      }
    } catch (error) {
      logger.error("Homepage countries query failed", error)
    }
  } catch (error) {
    logger.error("Failed to initialize homepage data client", error)
  }

  return (
    <>
      <StructuredData locale="en" />
      <HomePageClient initiatives={initiatives} partners={partners} countries={countries} />
    </>
  )
}
