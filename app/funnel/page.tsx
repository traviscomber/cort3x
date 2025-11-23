import type { Metadata } from "next"
import { FunnelPageClient } from "@/components/funnel-page-client"

export const metadata: Metadata = {
  title: "Join the Innovation Accelerator | Impax Cort3x",
  description:
    "Get your free AI Innovation Canvas and join founders building the next generation of sustainable solutions. Validate, build, and launch faster.",
  openGraph: {
    title: "Join the Innovation Accelerator | Impax Cort3x",
    description: "Get your free AI Innovation Canvas and join founders building sustainable solutions.",
  },
}

export default function FunnelPage() {
  return <FunnelPageClient />
}
