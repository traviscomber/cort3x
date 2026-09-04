"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslations } from "@/lib/i18n/translations-provider"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { createBrowserClient } from "@/lib/supabase/client"
import { logger } from "@/lib/logger"

const navigationLabels = {
  en: {
    projects: "Projects",
    services: "Services",
    features: "Features",
    journey: "Journey",
    about: "About",
    workspace: "Workspace",
    login: "Log in",
  },
  es: {
    projects: "Proyectos",
    services: "Servicios",
    features: "Funciones",
    journey: "Proceso",
    about: "Acerca de",
    workspace: "Workspace",
    login: "Ingresar",
  },
  id: {
    projects: "Proyek",
    services: "Layanan",
    features: "Fitur",
    journey: "Proses",
    about: "Tentang",
    workspace: "Workspace",
    login: "Masuk",
  },
} as const

export function SiteNav() {
  const { t, locale } = useTranslations()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const pathname = usePathname()
  const labels = navigationLabels[locale]

  useEffect(() => {
    const checkUser = async () => {
      try {
        const supabase = createBrowserClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()
        setUser(user)

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event: string, session: any) => {
          setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
      } catch (error) {
        logger.debug("Supabase client not available, skipping auth check")
        return
      }
    }

    checkUser()
  }, [])

  const isActive = (path: string) => pathname === path

  const publicLinks = [
    { href: "/#projects", activePath: "/#projects", label: labels.projects },
    { href: "/#services", activePath: "/#services", label: labels.services },
    { href: "/features", activePath: "/features", label: labels.features },
    { href: "/#journey", activePath: "/#journey", label: labels.journey },
    { href: "/#about", activePath: "/#about", label: labels.about },
  ]

  return (
    <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">{t("header.title")}</div>
              <p className="text-xs text-gray-500">{t("header.subtitle")}</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {publicLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.activePath) ? "text-primary" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {user && (
              <Link
                href="/dashboard"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/dashboard") ? "text-primary" : "text-gray-700"
                }`}
              >
                {labels.workspace}
              </Link>
            )}
            {publicLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.activePath) ? "text-primary" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            {!user ? (
              <Link href="/auth/login" className="hidden sm:block">
                <Button variant="ghost" size="sm">
                  {labels.login}
                </Button>
              </Link>
            ) : (
              <span className="hidden sm:block text-sm text-gray-600 max-w-40 truncate">{user.email}</span>
            )}

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 space-y-1">
            {publicLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {user && (
              <Link
                href="/dashboard"
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {labels.workspace}
              </Link>
            )}
            {publicLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {!user && (
              <div className="pt-2 mt-2 border-t">
                <Link href="/auth/login" className="block" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full bg-transparent">
                    {labels.login}
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}
