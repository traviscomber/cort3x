"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import {
  BookOpen,
  BrainCircuit,
  CircleDot,
  Command,
  Layers3,
  Library,
  RadioTower,
  Scale,
  Search,
  Sparkles,
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
  enabled: boolean
}

const navItems: WorkspaceNavItem[] = [
  {
    label: "Command Center",
    description: "What changed and what needs a decision",
    href: "/dashboard",
    icon: Command,
    enabled: true,
  },
  {
    label: "Research",
    description: "Sources, briefs and evidence capture",
    icon: BookOpen,
    enabled: false,
  },
  {
    label: "Signals",
    description: "Structured market and technology change",
    icon: RadioTower,
    enabled: false,
  },
  {
    label: "Opportunities",
    description: "Opportunity map and assumptions",
    icon: CircleDot,
    enabled: false,
  },
  {
    label: "Decisions",
    description: "Prioritization and decision context",
    icon: Scale,
    enabled: false,
  },
  {
    label: "Portfolio",
    description: "Initiatives and comparative analytics",
    href: "/dashboard/analytics",
    icon: Layers3,
    enabled: true,
  },
  {
    label: "Execution",
    description: "Actions, milestones and follow-up",
    icon: Workflow,
    enabled: false,
  },
  {
    label: "Knowledge",
    description: "Reusable organizational intelligence",
    icon: Library,
    enabled: false,
  },
]

export function WorkspaceShell({ children, userEmail }: WorkspaceShellProps) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#0c0e0c] text-[#f1f0e7]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1800px]">
        <aside className="hidden w-[272px] shrink-0 border-r border-white/10 bg-[#0a0c0a] px-5 py-6 lg:flex lg:flex-col">
          <Link href="/dashboard" className="flex items-center gap-3 px-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#a5b06d]/35 bg-[#a5b06d]/10">
              <Sparkles className="h-4 w-4 text-[#b9c57a]" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.08em] text-[#f1f0e7]">CORT3X</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/38">Innovation Intelligence OS</div>
            </div>
          </Link>

          <div className="mt-9 px-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">Workspace</div>

          <nav className="mt-3 space-y-1" aria-label="Cort3x workspace">
            {navItems.map((item) => {
              const Icon = item.icon
              const active = item.href ? pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href)) : false

              if (!item.enabled || !item.href) {
                return (
                  <div key={item.label} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-white/30">
                    <Icon className="h-4 w-4 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm">{item.label}</div>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/20">next</span>
                  </div>
                )
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                    active ? "bg-[#a5b06d]/12 text-[#dfe5bd]" : "text-white/58 hover:bg-white/[0.04] hover:text-white/85"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${active ? "text-[#b9c57a]" : ""}`} />
                  <span className="text-sm">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto border-t border-white/8 pt-5">
            <div className="flex items-center gap-3 rounded-lg px-2 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <BrainCircuit className="h-3.5 w-3.5 text-[#a5b06d]" />
              </div>
              <div className="min-w-0">
                <div className="truncate text-xs text-white/70">{userEmail || "Authenticated workspace"}</div>
                <div className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-white/28">canonical session</div>
              </div>
            </div>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0c0e0c]/92 backdrop-blur-xl">
            <div className="flex h-16 items-center justify-between gap-4 px-5 sm:px-7 lg:px-9">
              <div className="flex min-w-0 items-center gap-3">
                <Link href="/dashboard" className="flex items-center gap-2 lg:hidden">
                  <Sparkles className="h-4 w-4 text-[#b9c57a]" />
                  <span className="text-sm font-semibold tracking-[0.08em]">CORT3X</span>
                </Link>
                <div className="hidden items-center gap-2 text-xs text-white/38 sm:flex">
                  <span className="font-mono uppercase tracking-[0.14em]">Intelligence workspace</span>
                  <span className="text-white/15">/</span>
                  <span className="text-white/60">Live portfolio context</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled
                  className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-xs text-white/36 sm:flex"
                  title="AI workspace layer is the next product block"
                >
                  <Search className="h-3.5 w-3.5" />
                  Ask Cort3x
                  <span className="ml-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#a5b06d]/55">next</span>
                </button>
                <Link
                  href="/"
                  className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/55 transition-colors hover:border-white/20 hover:text-white/85"
                >
                  Public site
                </Link>
              </div>
            </div>

            <div className="flex gap-1 overflow-x-auto border-t border-white/[0.06] px-4 py-2 scrollbar-hide lg:hidden">
              {navItems.map((item) => {
                const Icon = item.icon
                const active = item.href ? pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href)) : false
                if (!item.enabled || !item.href) return null
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-xs ${
                      active ? "bg-[#a5b06d]/12 text-[#dfe5bd]" : "text-white/45"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
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
