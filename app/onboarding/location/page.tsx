import { LocationMap } from "@/components/location-map"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function LocationOnboardingPage() {
  return (
    <div className="container max-w-6xl mx-auto py-12 px-4">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Where Are You Operating?</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select your location to automatically apply local regulations, compliance requirements, and legal frameworks
            to your projects.
          </p>
        </div>

        {/* Location Map */}
        <LocationMap showDetails={true} />

        {/* Action buttons */}
        <div className="flex justify-center gap-4 pt-6">
          <Button variant="outline" asChild>
            <Link href="/">Skip for now</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="/dashboard">
              Continue to Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
