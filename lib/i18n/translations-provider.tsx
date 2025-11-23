"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import en from "@/messages/en.json"
import es from "@/messages/es.json"
import id from "@/messages/id.json"

type Locale = "en" | "es" | "id"

type Messages = typeof en

const translations: Record<Locale, Messages> = {
  en,
  es,
  id,
}

interface TranslationsContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const TranslationsContext = createContext<TranslationsContextType | undefined>(undefined)

export function TranslationsProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    // Get language from localStorage or browser
    const savedLang = localStorage.getItem("language") as Locale
    const browserLang = navigator.language.split("-")[0] as Locale
    const supportedLang = savedLang || (["en", "es", "id"].includes(browserLang) ? browserLang : "en")
    setLocaleState(supportedLang)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("language", newLocale)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[locale]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key
      }
    }

    return typeof value === "string" ? value : key
  }

  return <TranslationsContext.Provider value={{ locale, setLocale, t }}>{children}</TranslationsContext.Provider>
}

export function useTranslations() {
  const context = useContext(TranslationsContext)
  if (!context) {
    throw new Error("useTranslations must be used within TranslationsProvider")
  }
  return context
}
