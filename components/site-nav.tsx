"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Menu, X } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTranslations } from "@/lib/i18n/translations-provider"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { createBrowserClient } from "@/lib/supabase/client"

export function SiteNav() {
  const { t } = useTranslations()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const pathname = usePathname()

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
        } = supabase.auth.onAuthStateChange((_event, session) => {
          setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
      } catch (error) {
        console.log("[v0] Supabase client not available, skipping auth check")
        return
      }
    }

    checkUser()
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header className="border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{t("header.title")}</h1>
              <p className="text-xs text-gray-500">{t("header.subtitle")}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#projects"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/#projects") ? "text-primary" : "text-gray-700"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/#services"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/#services") ? "text-primary" : "text-gray-700"
              }`}
            >
              Services
            </Link>
            <Link
              href="/features"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/features") ? "text-primary" : "text-gray-700"
              }`}
            >
              Features
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/dashboard") ? "text-primary" : "text-gray-700"
                }`}
              >
                Dashboard
              </Link>
            )}
            <Link
              href="/#journey"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/#journey") ? "text-primary" : "text-gray-700"
              }`}
            >
              Journey
            </Link>
            <Link
              href="/#about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/#about") ? "text-primary" : "text-gray-700"
              }`}
            >
              About
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            {/* {!user ? (
              <Link href="/auth/login" className="hidden sm:block">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
            ) : (
              <span className="hidden sm:block text-sm text-gray-600">{user.email}</span>
            )} */}
            <Link href="/admin/populate-content" className="hidden sm:block">
              <Button variant="ghost" size="sm">
                {t("header.admin")}
              </Button>
            </Link>
            {/* <Button className="hidden sm:flex bg-primary hover:bg-primary/90">{t("cta.getStarted")}</Button> */}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4 space-y-3">
            <Link
              href="/#projects"
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/#services"
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/features"
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            {user && (
              <Link
                href="/dashboard"
                className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            <Link
              href="/#journey"
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Journey
            </Link>
            <Link
              href="/#about"
              className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {/* <div className="pt-2 border-t space-y-2">
              {!user ? (
                <Link href="/auth/login" className="block">
                  <Button variant="outline" className="w-full bg-transparent">
                    Login
                  </Button>
                </Link>
              ) : (
                <div className="px-4 py-2 text-sm text-gray-600">Logged in as {user.email}</div>
              )}
              <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
            </div> */}
          </div>
        )}
      </nav>
    </header>
  )
}
