import { createServerClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, CheckCircle2 } from "lucide-react"

export default async function CanvasDownloadPage({
  searchParams,
}: {
  searchParams: { lead_id?: string }
}) {
  const leadId = searchParams.lead_id

  if (!leadId) {
    redirect("/funnel")
  }

  const supabase = await createServerClient()

  // Mark canvas as downloaded
  await supabase.from("leads").update({ canvas_downloaded: true }).eq("id", leadId)

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
          </div>

          <h1 className="text-3xl font-bold">Your Innovation Canvas</h1>
          <p className="text-muted-foreground">
            Download your personalized framework to validate and build your sustainable solution
          </p>
        </div>

        <div className="space-y-4">
          <Button size="lg" className="w-full" asChild>
            <a href="/innovation-canvas-template.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Innovation Canvas
            </a>
          </Button>

          <div className="bg-primary/5 rounded-lg p-4 space-y-2">
            <h3 className="font-semibold">What's included:</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Strategic validation framework</li>
              <li>• Market opportunity assessment</li>
              <li>• Founder archetype analysis</li>
              <li>• 90-day action roadmap</li>
            </ul>
          </div>

          <div className="text-center pt-4">
            <Button variant="outline" asChild>
              <a href="/dashboard">Continue to Dashboard</a>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
