"use client"

import { useState, useEffect } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FunnelPromoBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    // Check if user has closed the banner before
    const bannerClosed = localStorage.getItem("funnel-banner-closed")
    if (!bannerClosed) {
      setIsVisible(true)
    }
  }, [])

  const handleClose = () => {
    setIsClosed(true)
    setIsVisible(false)
    localStorage.setItem("funnel-banner-closed", "true")
  }

  if (!isVisible || isClosed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg border-t border-primary-foreground/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <Sparkles className="h-5 w-5 flex-shrink-0 hidden sm:block" />
          <p className="text-sm sm:text-base font-medium">
            <span className="font-bold">New:</span> Get your AI Innovation Canvas — discover your founder archetype
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90 font-semibold"
          >
            <Link href="/funnel">Start Now →</Link>
          </Button>

          <Button variant="ghost" size="icon" onClick={handleClose} className="h-8 w-8 hover:bg-primary-foreground/20">
            <X className="h-4 w-4" />
            <span className="sr-only">Close banner</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
