import Link from "next/link"
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  FileText,
  Layers3,
  RadioTower,
  Scale,
  Search,
  Target,
  Workflow,
} from "lucide-react"

type Initiative = {
  id: string
  title: string
  description: string | null
  category: string | null
  status: string
  country: string | null
  project_code: string | null
  progress: number | null
  updated_at: string
  created_at: string
  risks: unknown[] | null
  milestones: unknown[] | null
  objectives: unknown[] | null
  budget: number | null
}

type EvidenceDocument = {
  id: string
  title: string
  initiative_id: string
  status: string | null
  completion_percentage: number | null
  updated_at: string
}

type CommandCenterProps = {
  initiatives: Initiative[]
  documents: EvidenceDocument[]
}

function countArray(value: unknown[] | null | undefined) {
  return Array.isArray(value) ? value.length : 0
}

function safeProgress(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) return 0
  return Math.max(0, Math.min(100, value))
}

function shortDate(value: string | null | undefined) {
  if (!value) return "No date"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "No date"
  return new Intl.DateTimeFormat("en", { day: "2-digit", month: "short" }).format(date)
}

function statusLabel(status: string | null | undefined) {
  const normalized = (status || "unknown").toLowerCase()
  if (normalized === "active") return "Active"
  if (normalized === "planning") return "Planning"
  if (normalized === "completed") return "Completed"
  return status || "Unknown"
}

export function CommandCenter({ initiatives, documents }: CommandCenterProps) {
  const initiativeById = new Map(initiatives.map((initiative) => [initiative.id, initiative]))
  const documentCountByInitiative = new Map<string, number>()

  for (const document of documents) {
    documentCountByInitiative.set(document.initiative_id, (documentCountByInitiative.get(document.initiative_id) || 0) + 1)
  }

  const activeInitiatives = initiatives.filter((initiative) => initiative.status?.toLowerCase() === "active")
  const planningInitiatives = initiatives.filter((initiative) => initiative.status?.toLowerCase() === "planning")
  const averageProgress = initiatives.length
    ? initiatives.reduce((sum, initiative) => sum + safeProgress(initiative.progress), 0) / initiatives.length
    : 0
  const averageEvidenceCompletion = documents.length
    ? documents.reduce((sum, document) => sum + safeProgress(document.completion_percentage), 0) / documents.length
    : 0

  const recentActivity = [
    ...documents.slice(0, 10).map((document) => ({
      key: `doc-${document.id}`,
      kind: "Evidence" as const,
      title: document.title,
      context: initiativeById.get(document.initiative_id)?.title || "Unassigned evidence",
      updatedAt: document.updated_at,
      href: `/dashboard/initiatives/${document.initiative_id}`,
    })),
    ...initiatives.slice(0, 8).map((initiative) => ({
      key: `initiative-${initiative.id}`,
      kind: "Execution" as const,
      title: initiative.title,
      context: `${statusLabel(initiative.status)} · ${Math.round(safeProgress(initiative.progress))}% progress`,
      updatedAt: initiative.updated_at,
      href: `/dashboard/initiatives/${initiative.id}`,
    })),
  ]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 7)

  const attentionItems = initiatives
    .map((initiative) => {
      const reasons: string[] = []
      const riskCount = countArray(initiative.risks)
      const evidenceCount = documentCountByInitiative.get(initiative.id) || 0
      const progress = safeProgress(initiative.progress)
      const normalizedStatus = initiative.status?.toLowerCase()

      if (riskCount > 0) reasons.push(`${riskCount} registered risk${riskCount === 1 ? "" : "s"}`)
      if (normalizedStatus === "planning") reasons.push("still in planning")
      if (progress < 30) reasons.push(`low progress (${Math.round(progress)}%)`)
      if (evidenceCount === 0) reasons.push("no linked evidence")

      return { initiative, reasons, riskCount, evidenceCount, progress }
    })
    .filter((item) => item.reasons.length > 0)
    .sort((a, b) => b.riskCount - a.riskCount || a.progress - b.progress)
    .slice(0, 5)

  const portfolio = [...initiatives]
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, 8)

  const intelligenceStages = [
    {
      label: "Research",
      icon: Search,
      value: "—",
      detail: "source capture is not yet canonical",
      state: "next" as const,
    },
    {
      label: "Signals",
      icon: RadioTower,
      value: "—",
      detail: "structured signal entity pending",
      state: "next" as const,
    },
    {
      label: "Evidence",
      icon: FileText,
      value: String(documents.length),
      detail: "linked evidence documents",
      state: "live" as const,
    },
    {
      label: "Opportunities",
      icon: CircleDot,
      value: "—",
      detail: "opportunity map pending",
      state: "next" as const,
    },
    {
      label: "Prioritize",
      icon: Target,
      value: "—",
      detail: "comparison model pending",
      state: "next" as const,
    },
    {
      label: "Decisions",
      icon: Scale,
      value: "—",
      detail: "decision context pending",
      state: "next" as const,
    },
    {
      label: "Execution",
      icon: Workflow,
      value: String(activeInitiatives.length),
      detail: "active initiatives",
      state: "live" as const,
    },
  ]

  return (
    <div className="px-5 py-8 sm:px-7 lg:px-9 lg:py-10">
      <div className="mx-auto max-w-[1500px]">
        <section className="border-b border-[var(--c3x-rule)] pb-8">
          <div className="grid gap-8 xl:grid-cols-[1fr_auto] xl:items-end">
            <div className="max-w-4xl">
              <div className="c3x-micro flex items-center gap-3 text-[var(--c3x-signal)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--c3x-signal)]" />
                Command Center / live canonical data
              </div>
              <h1 className="font-display mt-4 max-w-4xl text-[clamp(2.25rem,4vw,4.25rem)] font-normal leading-[1.02] tracking-[-0.025em] text-[var(--c3x-bone)]">
                See what changed. Trace what matters. Decide what happens next.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--c3x-mist)]">
                Cort3x exposes the evidence and execution state that already exists. It does not fabricate Signals, Opportunities or Decisions before those entities are structured.
              </p>
            </div>

            <div className="flex items-center gap-2 border border-[var(--c3x-rule)] px-3 py-2 text-xs text-[var(--c3x-mist)]">
              <CheckCircle2 className="h-3.5 w-3.5 text-[var(--c3x-green)]" strokeWidth={1.6} />
              Live operational context
            </div>
          </div>

          <div className="mt-8 grid border border-[var(--c3x-rule)] sm:grid-cols-2 xl:grid-cols-4">
            <Metric label="Initiatives" value={String(initiatives.length)} detail={`${activeInitiatives.length} active · ${planningInitiatives.length} planning`} />
            <Metric label="Evidence" value={String(documents.length)} detail={`${Math.round(averageEvidenceCompletion)}% average completion`} />
            <Metric label="Portfolio progress" value={`${Math.round(averageProgress)}%`} detail="average initiative progress" />
            <Metric label="Attention" value={String(attentionItems.length)} detail="initiatives matching current review rules" emphasis />
          </div>
        </section>

        <section className="border-b border-[var(--c3x-rule)] py-8">
          <SectionHeader
            eyebrow="Canonical intelligence loop"
            title="Current model coverage"
            subtitle="Research → Signal → Evidence → Opportunity → Prioritize → Decision → Execution"
          />

          <div className="mt-5 grid border-l border-t border-[var(--c3x-rule)] sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {intelligenceStages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <div key={stage.label} className="relative min-h-[156px] border-b border-r border-[var(--c3x-rule)] bg-[var(--c3x-ink)] p-4">
                  <div className="flex items-center justify-between">
                    <Icon
                      className={stage.state === "live" ? "h-4 w-4 text-[var(--c3x-signal)]" : "h-4 w-4 text-[var(--c3x-mist)] opacity-45"}
                      strokeWidth={1.6}
                    />
                    <span className={`font-mono text-[8px] uppercase tracking-[0.12em] ${stage.state === "live" ? "text-[var(--c3x-signal)]" : "text-[var(--c3x-mist)] opacity-45"}`}>
                      {stage.state === "live" ? "live" : "next"}
                    </span>
                  </div>
                  <div className={`mt-7 font-display text-3xl font-normal ${stage.state === "live" ? "text-[var(--c3x-bone)]" : "text-[var(--c3x-mist)] opacity-45"}`}>
                    {stage.value}
                  </div>
                  <div className="mt-1 text-sm text-[var(--c3x-bone)]">{stage.label}</div>
                  <div className="mt-1 text-[11px] leading-4 text-[var(--c3x-mist)]">{stage.detail}</div>
                  <span className="absolute bottom-3 right-3 font-mono text-[8px] text-[var(--c3x-rule)]">{String(index + 1).padStart(2, "0")}</span>
                </div>
              )
            })}
          </div>
        </section>

        <section className="grid gap-8 border-b border-[var(--c3x-rule)] py-8 xl:grid-cols-[1.5fr_1fr]">
          <div>
            <SectionHeader eyebrow="Live evidence" title="What changed" subtitle="Recent evidence and execution updates" />
            <div className="mt-5 border-y border-[var(--c3x-rule)]">
              {recentActivity.length === 0 ? (
                <EmptyState text="No recent activity is available." />
              ) : (
                recentActivity.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="group grid gap-2 border-b border-[var(--c3x-rule)] py-4 transition-colors duration-150 last:border-b-0 hover:bg-[var(--c3x-ink)] sm:grid-cols-[100px_1fr_auto] sm:items-center sm:px-3"
                  >
                    <div className="font-mono text-[9px] uppercase tracking-[0.13em] text-[var(--c3x-signal)]">{item.kind}</div>
                    <div className="min-w-0">
                      <div className="truncate text-sm text-[var(--c3x-bone)]">{item.title}</div>
                      <div className="mt-1 truncate text-xs text-[var(--c3x-mist)]">{item.context}</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--c3x-mist)]">
                      {shortDate(item.updatedAt)}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-150 group-hover:opacity-100" strokeWidth={1.6} />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Attention queue" title="Requires review" subtitle="Derived only from existing risk, state, progress and evidence fields" />
            <div className="mt-5 border border-[var(--c3x-rule)]">
              {attentionItems.length === 0 ? (
                <EmptyState text="No initiative matches the current attention rules." />
              ) : (
                attentionItems.map(({ initiative, reasons }) => (
                  <Link
                    key={initiative.id}
                    href={`/dashboard/initiatives/${initiative.id}`}
                    className="group block border-b border-[var(--c3x-rule)] bg-[var(--c3x-ink)] p-4 transition-colors duration-150 last:border-b-0 hover:bg-[var(--c3x-graphite)]"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--c3x-amber)]" strokeWidth={1.6} />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm text-[var(--c3x-bone)]">{initiative.title}</div>
                        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                          {reasons.slice(0, 3).map((reason) => (
                            <span key={reason} className="font-mono text-[9px] uppercase tracking-[0.08em] text-[var(--c3x-mist)]">
                              {reason}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[var(--c3x-mist)] opacity-45 transition-opacity group-hover:opacity-100" strokeWidth={1.6} />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeader eyebrow="Execution context" title="Portfolio pulse" subtitle="Context and evidence first; budget and reporting second" />
            <Link href="/dashboard/analytics" className="c3x-link flex items-center gap-1.5 text-xs">
              Legacy analytics
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
            </Link>
          </div>

          <div className="mt-5 overflow-x-auto border border-[var(--c3x-rule)]">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-[1.7fr_.6fr_.6fr_.8fr_auto] gap-4 border-b border-[var(--c3x-rule)] bg-[var(--c3x-ink)] px-4 py-3 font-mono text-[8px] uppercase tracking-[0.13em] text-[var(--c3x-mist)]">
                <div>Initiative</div>
                <div>Evidence</div>
                <div>Risks</div>
                <div>Progress</div>
                <div />
              </div>
              {portfolio.map((initiative) => {
                const progress = safeProgress(initiative.progress)
                const evidenceCount = documentCountByInitiative.get(initiative.id) || 0
                const riskCount = countArray(initiative.risks)

                return (
                  <Link
                    key={initiative.id}
                    href={`/dashboard/initiatives/${initiative.id}`}
                    className="group grid grid-cols-[1.7fr_.6fr_.6fr_.8fr_auto] items-center gap-4 border-b border-[var(--c3x-rule)] px-4 py-4 transition-colors duration-150 last:border-b-0 hover:bg-[var(--c3x-ink)]"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm text-[var(--c3x-bone)]">{initiative.title}</div>
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-[var(--c3x-mist)]">
                        <span>{statusLabel(initiative.status)}</span>
                        <span className="text-[var(--c3x-rule)]">·</span>
                        <span>{initiative.country || "Global"}</span>
                        <span className="text-[var(--c3x-rule)]">·</span>
                        <span>upd. {shortDate(initiative.updated_at)}</span>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-[var(--c3x-mist)]"><span className="text-[var(--c3x-bone)]">{evidenceCount}</span> docs</div>
                    <div className="font-mono text-xs text-[var(--c3x-mist)]"><span className={riskCount > 0 ? "text-[var(--c3x-amber)]" : "text-[var(--c3x-bone)]"}>{riskCount}</span> open</div>
                    <div>
                      <div className="font-mono text-[10px] text-[var(--c3x-mist)]">{Math.round(progress)}%</div>
                      <div className="mt-2 h-px bg-[var(--c3x-rule)]">
                        <div className="h-px bg-[var(--c3x-moss)]" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[var(--c3x-mist)] opacity-35 transition-opacity group-hover:opacity-100" strokeWidth={1.6} />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function Metric({ label, value, detail, emphasis = false }: { label: string; value: string; detail: string; emphasis?: boolean }) {
  return (
    <div className="border-b border-r border-[var(--c3x-rule)] bg-[var(--c3x-ink)] px-4 py-5 last:border-r-0 sm:px-5 xl:border-b-0">
      <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--c3x-mist)]">{label}</div>
      <div className={`font-display mt-3 text-3xl font-normal ${emphasis ? "text-[var(--c3x-amber)]" : "text-[var(--c3x-bone)]"}`}>{value}</div>
      <div className="mt-1 text-[11px] leading-4 text-[var(--c3x-mist)]">{detail}</div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--c3x-mist)]">{eyebrow}</div>
      <h2 className="font-display mt-2 text-[clamp(1.5rem,2.5vw,2.5rem)] font-normal leading-[1.1] text-[var(--c3x-bone)]">{title}</h2>
      <p className="mt-1 max-w-2xl text-xs leading-5 text-[var(--c3x-mist)]">{subtitle}</p>
    </div>
  )
}

function EmptyState({ text }: { text: string }) {
  return <div className="px-4 py-10 text-center text-xs text-[var(--c3x-mist)]">{text}</div>
}
