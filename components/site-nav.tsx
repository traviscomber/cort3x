"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslations } from "@/lib/i18n/translations-provider"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { createBrowserClient } from "@/lib/supabase/client"
import { logger } from "@/lib/logger"

const navigationLabels = {
  en: {
    projects: "Evidence",
    services: "System",
    features: "Capabilities",
    journey: "Method",
    about: "About",
    workspace: "Workspace",
    login: "Log in",
  },
  es: {
    projects: "Evidencia",
    services: "Sistema",
    features: "Capacidades",
    journey: "Método",
    about: "Acerca de",
    workspace: "Workspace",
    login: "Ingresar",
  },
  id: {
    projects: "Bukti",
    services: "Sistem",
    features: "Kapabilitas",
    journey: "Metode",
    about: "Tentang",
    workspace: "Workspace",
    login: "Masuk",
  },
} as const

export function SiteNav() {
  const { locale } = useTranslations()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const pathname = usePathname()
  const labels = navigationLabels[locale]
  const isWorkspaceRoute = pathname.startsWith("/dashboard")

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

  if (isWorkspaceRoute) return null

  const publicLinks = [
    { href: "/#projects", label: labels.projects },
    { href: "/#services", label: labels.services },
    { href: "/features", label: labels.features },
    { href: "/#journey", label: labels.journey },
    { href: "/#about", label: labels.about },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--c3x-rule)] bg-[color:var(--c3x-void)]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link href="/" className="group flex items-center gap-4" aria-label="Cort3x home">
          <span className="relative block h-5 w-12" aria-hidden="true">
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--c3x-signal)]" />
            <span className="absolute left-2 top-1/2 h-px w-7 -translate-y-1/2 bg-[var(--c3x-rule)] transition-colors group-hover:bg-[var(--c3x-signal)]" />
            <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 border border-[var(--c3x-rule)] bg-[var(--c3x-void)]" />
          </span>
          <span className="leading-none">
            <span className="font-display block text-[20px] font-medium tracking-[0.015em] text-[var(--c3x-bone)]">Cort3x</span>
            <span className="mt-1 block font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--c3x-mist)]">By N3uralia</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {publicLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[var(--c3x-mist)] transition-colors duration-150 hover:text-[var(--c3x-bone)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <span className="hidden h-5 w-px bg-[var(--c3x-rule)] sm:block" aria-hidden="true" />
          <Link
            href={user ? "/dashboard" : "/auth/login"}
            className="hidden min-h-9 items-center border border-[var(--c3x-rule)] px-3 text-[12px] font-medium text-[var(--c3x-bone)] transition-colors duration-150 hover:border-[var(--c3x-signal)] hover:text-[var(--c3x-white)] sm:flex"
          >
            {user ? labels.workspace : labels.login}
          </Link>
          <button
            className="flex h-9 w-9 items-center justify-center border border-[var(--c3x-rule)] text-[var(--c3x-bone)] transition-colors duration-150 hover:border-[var(--c3x-signal)] lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" strokeWidth={1.6} /> : <Menu className="h-4 w-4" strokeWidth={1.6} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-[var(--c3x-rule)] bg-[var(--c3x-ink)] lg:hidden">
          <div className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8">
            <div className="grid gap-px bg-[var(--c3x-rule)] sm:grid-cols-2">
              {publicLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex min-h-12 items-center justify-between bg-[var(--c3x-ink)] px-4 text-sm text-[var(--c3x-mist)] transition-colors hover:text-[var(--c3x-bone)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-[9px] text-[var(--c3x-rule)]">0{index + 1}</span>
                </Link>
              ))}
            </div>
            <Link
              href={user ? "/dashboard" : "/auth/login"}
              className="mt-4 flex min-h-11 items-center justify-between border border-[var(--c3x-rule)] px-4 text-sm text-[var(--c3x-bone)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{user ? labels.workspace : labels.login}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--c3x-signal)]">Access</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
