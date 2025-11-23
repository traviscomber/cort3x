import type { Metadata } from "next"
import { PricingPageClient } from "@/components/pricing-page-client"

export const metadata: Metadata = {
  title: "Pricing - Impax Cort3x",
  description:
    "Choose the right plan for your innovation journey. From free feasibility audits to enterprise coaching programs.",
}

export default function PricingPage() {
  return <PricingPageClient />
}
