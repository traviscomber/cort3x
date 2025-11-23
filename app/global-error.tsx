"use client"

import { useEffect } from "react"
import { monitoring } from "@/lib/monitoring"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    monitoring.trackError(error, {
      digest: error.digest,
      page: "global-error",
      severity: "critical",
    })
  }, [error])

  return (
    <html>
      <body>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Critical Error</h1>
          <p>Something went seriously wrong. We've been notified.</p>
          <button onClick={reset} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
