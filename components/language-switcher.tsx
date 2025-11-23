"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useTranslations } from "@/lib/i18n/translations-provider"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", country: "USA" },
  { code: "es", name: "Español", flag: "🇨🇱", country: "Chile" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩", country: "Indonesia" },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslations()

  const handleLanguageChange = (newLang: "en" | "es" | "id") => {
    setLocale(newLang)
  }

  const currentLanguage = languages.find((lang) => lang.code === locale)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code as "en" | "es" | "id")}
            className={locale === language.code ? "bg-accent" : ""}
          >
            <span className="mr-2">{language.flag}</span>
            <div className="flex flex-col">
              <span className="font-medium">{language.name}</span>
              <span className="text-xs text-muted-foreground">{language.country}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
