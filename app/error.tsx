"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import { monitoring } from "@/lib/monitoring"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Track error in monitoring system
    monitoring.trackError(error, {
      digest: error.digest,
      page: "global",
    })
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-destructive/10 p-4">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Something went wrong</h1>
          <p className="text-muted-foreground">
            We've been notified of this issue and are working to fix it. Please try again.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button onClick={reset} variant="default">
            Try again
          </Button>
          <Button onClick={() => (window.location.href = "/")} variant="outline">
            Go home
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-6 rounded-lg bg-muted p-4 text-left">
            <p className="text-sm font-mono text-destructive">{error.message}</p>
            {error.digest && <p className="mt-2 text-xs text-muted-foreground">Error ID: {error.digest}</p>}
          </div>
        )}
      </div>
    </div>
  )
}
