"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import {
  BookOpen,
  CircleDot,
  Command,
  Layers3,
  Library,
  RadioTower,
  Scale,
  Search,
  Workflow,
} from "lucide-react"

type WorkspaceShellProps = {
  children: ReactNode
  userEmail?: string | null
}

type WorkspaceNavItem = {
  label: string
  description: string
  href?: string
  icon: typeof Command
  state: "live" | "next"
}

const navItems: WorkspaceNavItem[] = [
  {
    label: "Command Center",
    description: "What changed and what requires attention",
    href: "/dashboard",
    icon: Command,
    state: "live",
  },
  {
    label: "Research",
    description: "Sources, briefs and evidence capture",
    icon: BookOpen,
    state: "next",
  },
  {
    label: "Signals",
    description: "Structured market and technology change",
    icon: RadioTower,
    state: "next",
  },
  {
    label: "Opportunities",
    description: "Opportunity map and assumptions",
    icon: CircleDot,
    state: "next",
  },
  {
    label: "Decisions",
    description: "Prioritization and decision context",
    icon: Scale,
    state: "next",
  },
  {
    label: "Portfolio",
    description: "Initiatives and comparative analytics",
    href: "/dashboard/analytics",
    icon: Layers3,
    state: "live",
  },
  {
    label: "Execution",
    description: "Actions, milestones and follow-up",
    icon: Workflow,
    state: "next",
  },
  {
    label: "Knowledge",
    description: "Reusable organizational intelligence",
    icon: Library,
    state: "next",
  },
]

function TraceMark() {
  return (
    <span className="relative block h-5 w-12" aria-hidden="true">
      <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--c3x-signal)]" />
      <span className="absolute left-2 top-1/2 h-px w-7 -translate-y-1/2 bg-[var(--c3x-rule)]" />
      <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 border border-[var(--c3x-rule)] bg-[var(--c3x-ink)]" />
    </span>
  )
}

export function WorkspaceShell({ children, userEmail }: WorkspaceShellProps) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[var(--c3x-void)] text-[var(--c3x-bone)]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1920px]">
        <aside className="hidden w-[264px] shrink-0 border-r border-[var(--c3x-rule)] bg-[var(--c3x-ink)] lg:flex lg:flex-col">
          <Link href="/dashboard" className="flex h-[88px] items-center gap-4 border-b border-[var(--c3x-rule)] px-6">
            <TraceMark />
            <div className="leading-none">
              <div className="font-display text-lg font-medium tracking-[0.015em] text-[var(--c3x-bone)]">Cort3x</div>
              <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.17em] text-[var(--c3x-mist)]">Innovation Intelligence OS</div>
            </div>
          </Link>

          <div className="px-6 pb-2 pt-7 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--c3x-mist)]">Workspace / 01</div>

          <nav className="px-3 pb-4" aria-label="Cort3x workspace">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const active = item.href
                ? pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
                : false

              if (item.state === "next" || !item.href) {
                return (
                  <div
                    key={item.label}
                    className="grid min-h-[44px] grid-cols-[22px_1fr_auto] items-center gap-2 border-l border-transparent px-3 text-[var(--c3x-mist)] opacity-45"
                    title={item.description}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                    <span className="text-[13px]">{item.label}</span>
                    <span className="font-mono text-[8px] uppercase tracking-[0.12em]">next</span>
                  </div>
                )
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  title={item.description}
                  className={`grid min-h-[44px] grid-cols-[22px_1fr_auto] items-center gap-2 border-l px-3 transition-colors duration-150 ${
                    active
                      ? "border-[var(--c3x-signal)] bg-[var(--c3x-graphite)] text-[var(--c3x-bone)]"
                      : "border-transparent text-[var(--c3x-mist)] hover:bg-[var(--c3x-graphite)] hover:text-[var(--c3x-bone)]"
                  }`}
                >
                  <Icon className={active ? "h-3.5 w-3.5 text-[var(--c3x-signal)]" : "h-3.5 w-3.5"} strokeWidth={1.6} />
                  <span className="text-[13px]">{item.label}</span>
                  <span className="font-mono text-[8px] text-[var(--c3x-rule)]">{String(index + 1).padStart(2, "0")}</span>
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto border-t border-[var(--c3x-rule)] px-6 py-5">
            <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--c3x-mist)]">Canonical session</div>
            <div className="mt-2 truncate text-xs text-[var(--c3x-bone)]">{userEmail || "Authenticated workspace"}</div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-40 border-b border-[var(--c3x-rule)] bg-[var(--c3x-void)]/95 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between gap-4 px-5 sm:px-7 lg:px-9">
              <Link href="/dashboard" className="flex items-center gap-3 lg:hidden" aria-label="Cort3x Command Center">
                <TraceMark />
                <span className="font-display text-base font-medium">Cort3x</span>
              </Link>

              <div className="hidden min-w-0 items-center gap-2 sm:flex lg:flex-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--c3x-mist)]">Intelligence workspace</span>
                <span className="text-[var(--c3x-rule)]">/</span>
                <span className="truncate text-xs text-[var(--c3x-mist)]">Evidence before narrative</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled
                  className="hidden min-h-9 items-center gap-2 border border-[var(--c3x-rule)] px-3 text-xs text-[var(--c3x-mist)] opacity-55 sm:flex"
                  title="Contextual Cort3x intelligence is the next product block"
                >
                  <Search className="h-3.5 w-3.5" strokeWidth={1.6} />
                  Ask Cort3x
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--c3x-signal)]">next</span>
                </button>
                <Link
                  href="/"
                  className="flex min-h-9 items-center border border-[var(--c3x-rule)] px-3 text-xs text-[var(--c3x-mist)] transition-colors duration-150 hover:border-[var(--c3x-signal)] hover:text-[var(--c3x-bone)]"
                >
                  Public site
                </Link>
              </div>
            </div>

            <div className="flex gap-px overflow-x-auto border-t border-[var(--c3x-rule)] bg-[var(--c3x-rule)] scrollbar-hide lg:hidden">
              {navItems.map((item) => {
                if (item.state !== "live" || !item.href) return null
                const Icon = item.icon
                const active = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex min-h-10 shrink-0 items-center gap-2 bg-[var(--c3x-ink)] px-4 text-xs ${
                      active ? "text-[var(--c3x-bone)]" : "text-[var(--c3x-mist)]"
                    }`}
                  >
                    <Icon className={active ? "h-3.5 w-3.5 text-[var(--c3x-signal)]" : "h-3.5 w-3.5"} strokeWidth={1.6} />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </header>

          <main className="min-w-0">{children}</main>
        </div>
      </div>
    </div>
  )
}
