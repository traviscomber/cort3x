"use client"

import type React from "react"

import { useTranslations } from "@/lib/i18n/translations-provider"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"

interface DocumentClientWrapperProps {
  children: React.ReactNode
}

export function DocumentClientWrapper({ children }: DocumentClientWrapperProps) {
  const { locale } = useTranslations()
  const searchParams = useSearchParams()

  useEffect(() => {
    const currentLang = searchParams?.get("lang") || "en"
    if (locale !== currentLang) {
      const url = new URL(window.location.href)
      url.searchParams.set("lang", locale)
      window.history.replaceState(null, "", url.toString())
      window.location.reload()
    }
  }, [locale, searchParams])

  return <>{children}</>
}
