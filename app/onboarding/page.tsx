import type { Metadata } from "next"
import OnboardingClient from "@/components/onboarding-client"

export const metadata: Metadata = {
  title: "Free Project Feasibility Audit | Impax Cort3x",
  description: "Get a comprehensive FREE feasibility analysis and sustainability score for your project in 24 hours",
}

export default function OnboardingPage() {
  return <OnboardingClient />
}
