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
  Sparkles,
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
  if (!value) return "Sin fecha"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "Sin fecha"
  return new Intl.DateTimeFormat("es-CL", { day: "2-digit", month: "short" }).format(date)
}

function statusLabel(status: string | null | undefined) {
  const normalized = (status || "unknown").toLowerCase()
  if (normalized === "active") return "Activa"
  if (normalized === "planning") return "Planificación"
  if (normalized === "completed") return "Completada"
  return status || "Sin estado"
}

export function CommandCenter({ initiatives, documents }: CommandCenterProps) {
  const initiativeById = new Map(initiatives.map((initiative) => [initiative.id, initiative]))
  const documentCountByInitiative = new Map<string, number>()

  for (const document of documents) {
    documentCountByInitiative.set(
      document.initiative_id,
      (documentCountByInitiative.get(document.initiative_id) || 0) + 1,
    )
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
      context: initiativeById.get(document.initiative_id)?.title || "Evidencia no asignada",
      updatedAt: document.updated_at,
      href: `/dashboard/initiatives/${document.initiative_id}`,
    })),
    ...initiatives.slice(0, 8).map((initiative) => ({
      key: `initiative-${initiative.id}`,
      kind: "Initiative" as const,
      title: initiative.title,
      context: `${statusLabel(initiative.status)} · ${Math.round(safeProgress(initiative.progress))}% de avance`,
      updatedAt: initiative.updated_at,
      href: `/dashboard/initiatives/${initiative.id}`,
    })),
  ]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 6)

  const attentionItems = initiatives
    .map((initiative) => {
      const reasons: string[] = []
      const riskCount = countArray(initiative.risks)
      const evidenceCount = documentCountByInitiative.get(initiative.id) || 0
      const progress = safeProgress(initiative.progress)
      const normalizedStatus = initiative.status?.toLowerCase()

      if (riskCount > 0) reasons.push(`${riskCount} riesgo${riskCount === 1 ? "" : "s"} registrado${riskCount === 1 ? "" : "s"}`)
      if (normalizedStatus === "planning") reasons.push("aún en planificación")
      if (progress < 30) reasons.push(`avance bajo (${Math.round(progress)}%)`)
      if (evidenceCount === 0) reasons.push("sin evidencia documental vinculada")

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
      label: "Evidence",
      icon: FileText,
      value: String(documents.length),
      detail: "documentos conectados",
      state: "connected" as const,
    },
    {
      label: "Signals",
      icon: RadioTower,
      value: "—",
      detail: "entidad aún no estructurada",
      state: "next" as const,
    },
    {
      label: "Opportunities",
      icon: CircleDot,
      value: "—",
      detail: "mapa canónico pendiente",
      state: "next" as const,
    },
    {
      label: "Decisions",
      icon: Scale,
      value: "—",
      detail: "contexto de decisión pendiente",
      state: "next" as const,
    },
    {
      label: "Execution",
      icon: Workflow,
      value: String(activeInitiatives.length),
      detail: "iniciativas activas",
      state: "connected" as const,
    },
  ]

  return (
    <div className="px-5 py-7 sm:px-7 lg:px-9 lg:py-9">
      <div className="mx-auto max-w-[1480px]">
        <section className="border-b border-white/10 pb-7">
          <div className="flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#a5b06d]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a5b06d]" />
                Command Center · canonical data
              </div>
              <h1 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-[#f3f1e7] sm:text-4xl lg:text-[44px]">
                Lo que cambió y requiere atención.
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/48 sm:text-base">
                Una vista operacional de la evidencia y el portafolio actual. Cort3x todavía no fabrica señales, oportunidades o decisiones donde el modelo canónico aún no existe.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start rounded-full border border-[#a5b06d]/25 bg-[#a5b06d]/7 px-3 py-1.5 text-xs text-[#c8d08e] xl:self-auto">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Datos vivos · Supabase
            </div>
          </div>

          <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
            <Metric label="Iniciativas" value={String(initiatives.length)} detail={`${activeInitiatives.length} activas · ${planningInitiatives.length} en planificación`} />
            <Metric label="Evidencia" value={String(documents.length)} detail={`${Math.round(averageEvidenceCompletion)}% completación promedio`} />
            <Metric label="Progreso portafolio" value={`${Math.round(averageProgress)}%`} detail="promedio de iniciativas" />
            <Metric label="Atención" value={String(attentionItems.length)} detail="iniciativas con señales operativas de revisión" emphasis />
          </div>
        </section>

        <section className="py-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/28">Canonical intelligence loop</div>
              <h2 className="mt-2 text-lg font-medium text-white/88">Estado del modelo de inteligencia</h2>
            </div>
            <span className="hidden text-xs text-white/30 sm:block">Evidence → Signal → Opportunity → Decision → Execution</span>
          </div>

          <div className="mt-4 grid gap-2 md:grid-cols-5">
            {intelligenceStages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <div key={stage.label} className="relative min-h-[142px] border border-white/10 bg-white/[0.018] p-4">
                  <div className="flex items-center justify-between">
                    <Icon className={`h-4 w-4 ${stage.state === "connected" ? "text-[#b7c27a]" : "text-white/24"}`} />
                    <span className={`font-mono text-[9px] uppercase tracking-[0.13em] ${stage.state === "connected" ? "text-[#b7c27a]/70" : "text-white/22"}`}>
                      {stage.state === "connected" ? "connected" : "next model"}
                    </span>
                  </div>
                  <div className={`mt-7 text-2xl font-medium ${stage.state === "connected" ? "text-[#f1f0e7]" : "text-white/28"}`}>{stage.value}</div>
                  <div className="mt-1 text-sm text-white/68">{stage.label}</div>
                  <div className="mt-1 text-[11px] leading-4 text-white/30">{stage.detail}</div>
                  {index < intelligenceStages.length - 1 && (
                    <div className="absolute -right-[7px] top-1/2 z-10 hidden h-px w-3 bg-white/15 md:block" />
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <section className="grid gap-6 border-t border-white/10 py-7 xl:grid-cols-[1.55fr_1fr]">
          <div>
            <SectionHeader eyebrow="Live evidence" title="Qué cambió" subtitle="Actividad reciente en evidencia e iniciativas" />
            <div className="mt-4 divide-y divide-white/[0.07] border-y border-white/10">
              {recentActivity.length === 0 ? (
                <EmptyState text="Todavía no hay actividad reciente disponible." />
              ) : (
                recentActivity.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="group grid gap-2 py-4 transition-colors hover:bg-white/[0.018] sm:grid-cols-[96px_1fr_auto] sm:items-center sm:px-2"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#a5b06d]/70">{item.kind}</div>
                    <div className="min-w-0">
                      <div className="truncate text-sm text-white/82 group-hover:text-white">{item.title}</div>
                      <div className="mt-1 truncate text-xs text-white/30">{item.context}</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-white/28">
                      {shortDate(item.updatedAt)}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Attention queue" title="Requiere revisión" subtitle="Derivado sólo de riesgos, estado, avance y evidencia existente" />
            <div className="mt-4 space-y-2">
              {attentionItems.length === 0 ? (
                <EmptyState text="No hay elementos que cumplan las reglas actuales de atención." />
              ) : (
                attentionItems.map(({ initiative, reasons }) => (
                  <Link
                    key={initiative.id}
                    href={`/dashboard/initiatives/${initiative.id}`}
                    className="group block border border-white/10 bg-white/[0.018] p-4 transition-colors hover:border-[#a5b06d]/25 hover:bg-[#a5b06d]/[0.035]"
                  >
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#c4a96b]" />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm text-white/82">{initiative.title}</div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {reasons.slice(0, 3).map((reason) => (
                            <span key={reason} className="border border-white/8 bg-black/15 px-2 py-1 text-[10px] text-white/34">
                              {reason}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white/20 transition-colors group-hover:text-white/55" />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-7">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <SectionHeader eyebrow="Execution context" title="Portfolio pulse" subtitle="Primero contexto y evidencia; después presupuesto y reporting" />
            <Link href="/dashboard/analytics" className="flex items-center gap-1.5 text-xs text-white/38 transition-colors hover:text-white/75">
              Ver analytics heredado
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-4 overflow-hidden border border-white/10">
            <div className="hidden grid-cols-[1.7fr_.7fr_.7fr_.7fr_auto] gap-4 border-b border-white/10 bg-white/[0.018] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/28 md:grid">
              <div>Initiative</div>
              <div>Evidence</div>
              <div>Risks</div>
              <div>Progress</div>
              <div />
            </div>
            <div className="divide-y divide-white/[0.07]">
              {portfolio.map((initiative) => {
                const progress = safeProgress(initiative.progress)
                const evidenceCount = documentCountByInitiative.get(initiative.id) || 0
                const riskCount = countArray(initiative.risks)
                return (
                  <Link
                    key={initiative.id}
                    href={`/dashboard/initiatives/${initiative.id}`}
                    className="group grid gap-3 px-4 py-4 transition-colors hover:bg-white/[0.018] md:grid-cols-[1.7fr_.7fr_.7fr_.7fr_auto] md:items-center md:gap-4"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm text-white/82 group-hover:text-white">{initiative.title}</div>
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-white/28">
                        <span>{statusLabel(initiative.status)}</span>
                        <span>·</span>
                        <span>{initiative.country || "Global"}</span>
                        <span>·</span>
                        <span>upd. {shortDate(initiative.updated_at)}</span>
                      </div>
                    </div>
                    <div className="text-xs text-white/48"><span className="text-white/78">{evidenceCount}</span> docs</div>
                    <div className="text-xs text-white/48"><span className={riskCount > 0 ? "text-[#c4a96b]" : "text-white/78"}>{riskCount}</span> registrados</div>
                    <div>
                      <div className="flex items-center justify-between gap-3 text-xs text-white/55">
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <div className="mt-2 h-1 overflow-hidden bg-white/[0.06]">
                        <div className="h-full bg-[#9daa67]" style={{ width: `${progress}%` }} />
                      </div>
                    </div>
                    <ArrowUpRight className="hidden h-3.5 w-3.5 text-white/18 transition-colors group-hover:text-white/55 md:block" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="grid gap-3 border-t border-white/10 py-7 md:grid-cols-3">
          <FoundationCard icon={FileText} title="Research → Evidence" text="La evidencia ya existe en documentos y puede convertirse en la primera capa canónica del nuevo producto." state="ready" />
          <FoundationCard icon={Target} title="Signal → Opportunity" text="Siguiente bloque: crear entidades explícitas, provenance y confidence. No inferirlas silenciosamente desde texto libre." state="next" />
          <FoundationCard icon={Sparkles} title="AI intelligence layer" text="Después del modelo: respuestas sobre datos canónicos, explicación de por qué y acciones sugeridas con trazabilidad." state="next" />
        </section>
      </div>
    </div>
  )
}

function Metric({ label, value, detail, emphasis = false }: { label: string; value: string; detail: string; emphasis?: boolean }) {
  return (
    <div className="bg-[#0c0e0c] px-4 py-5 sm:px-5">
      <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/28">{label}</div>
      <div className={`mt-3 text-2xl font-medium ${emphasis ? "text-[#c4a96b]" : "text-[#f1f0e7]"}`}>{value}</div>
      <div className="mt-1 text-[11px] leading-4 text-white/30">{detail}</div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/26">{eyebrow}</div>
      <h2 className="mt-2 text-lg font-medium text-white/88">{title}</h2>
      <p className="mt-1 text-xs text-white/30">{subtitle}</p>
    </div>
  )
}

function EmptyState({ text }: { text: string }) {
  return <div className="border border-dashed border-white/10 px-4 py-8 text-center text-xs text-white/28">{text}</div>
}

function FoundationCard({
  icon: Icon,
  title,
  text,
  state,
}: {
  icon: typeof FileText
  title: string
  text: string
  state: "ready" | "next"
}) {
  return (
    <div className="border border-white/10 bg-white/[0.018] p-5">
      <div className="flex items-center justify-between">
        <Icon className={`h-4 w-4 ${state === "ready" ? "text-[#a5b06d]" : "text-white/28"}`} />
        <span className={`font-mono text-[9px] uppercase tracking-[0.13em] ${state === "ready" ? "text-[#a5b06d]/70" : "text-white/24"}`}>
          {state === "ready" ? "foundation ready" : "next block"}
        </span>
      </div>
      <div className="mt-5 text-sm text-white/78">{title}</div>
      <p className="mt-2 text-xs leading-5 text-white/32">{text}</p>
    </div>
  )
}
