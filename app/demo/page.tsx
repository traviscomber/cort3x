import DemoClient from "@/components/demo-client"

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Sales Funnel Interactive Demo</h1>
            <p className="text-muted-foreground text-lg">Follow the steps below to test the complete funnel system</p>
          </div>

          <DemoClient />
        </div>
      </main>
    </div>
  )
}
