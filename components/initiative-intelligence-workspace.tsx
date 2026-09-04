import Link from "next/link"
import {
  AlertTriangle,
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  CircleDot,
  FileText,
  Flag,
  Layers3,
  RadioTower,
  Scale,
  Target,
  Workflow,
} from "lucide-react"

type Initiative = {
  id: string
  title: string
  description?: string | null
  category?: string | null
  country?: string | null
  status: string
  progress: number | null
  budget: number | null
  created_at: string
  updated_at: string
  created_by?: string | null
  project_code?: string | null
  lead?: string | null
  start_date?: string | null
  end_date?: string | null
  risks?: unknown[] | null
  milestones?: unknown[] | null
  objectives?: unknown[] | null
}

type EvidenceDocument = {
  id: string
  title: string
  description?: string | null
  completion_percentage: number | null
  status: string | null
  created_at: string
  updated_at: string
}

type InitiativeIntelligenceWorkspaceProps = {
  initiative: Initiative
  documents: EvidenceDocument[]
}

type StructuredItem = {
  title: string
  description?: string
  status?: string
  meta?: string
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : null
}

function firstString(record: Record<string, unknown>, keys: string[]) {
  for (const key of keys) {
    const value = record[key]
    if (typeof value === "string" && value.trim()) return value.trim()
  }
  return undefined
}

function normalizeItems(values: unknown[] | null | undefined, kind: "risk" | "milestone" | "objective"): StructuredItem[] {
  if (!Array.isArray(values)) return []

  return values.map((value, index) => {
    if (typeof value === "string") {
      return { title: value }
    }

    const record = asRecord(value)
    if (!record) return { title: `${kind} ${index + 1}` }

    const title =
      firstString(record, ["title", "name", "objective", "risk", "milestone"]) ||
      `${kind.charAt(0).toUpperCase()}${kind.slice(1)} ${index + 1}`
    const description = firstString(record, ["description", "summary", "mitigation", "target"])
    const status = firstString(record, ["status", "state", "phase"])

    let meta: string | undefined
    if (kind === "risk") {
      const impact = firstString(record, ["impact", "severity"])
      const probability = firstString(record, ["probability", "likelihood"])
      meta = [impact && `impacto ${impact}`, probability && `prob. ${probability}`].filter(Boolean).join(" · ") || undefined
    } else if (kind === "milestone") {
      meta = firstString(record, ["target_date", "date", "deadline"])
    } else {
      meta = firstString(record, ["target", "metric", "outcome"])
    }

    return { title, description, status, meta }
  })
}

function safeProgress(value: number | null | undefined) {
  if (typeof value !== "number" || Number.isNaN(value)) return 0
  return Math.max(0, Math.min(100, value))
}

function formatDate(value?: string | null) {
  if (!value) return "Sin fecha"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat("es-CL", { day: "2-digit", month: "short", year: "numeric" }).format(date)
}

function statusLabel(value?: string | null) {
  const normalized = (value || "unknown").toLowerCase()
  if (normalized === "active") return "Activa"
  if (normalized === "planning") return "Planificación"
  if (normalized === "completed") return "Completada"
  if (normalized === "in_progress") return "En progreso"
  if (normalized === "draft") return "Borrador"
  return value || "Sin estado"
}

function countryLabel(value?: string | null) {
  if (value === "CL") return "Chile"
  if (value === "ID") return "Indonesia"
  if (value === "US") return "Estados Unidos"
  return value || "Global"
}

export function InitiativeIntelligenceWorkspace({ initiative, documents }: InitiativeIntelligenceWorkspaceProps) {
  const risks = normalizeItems(initiative.risks, "risk")
  const milestones = normalizeItems(initiative.milestones, "milestone")
  const objectives = normalizeItems(initiative.objectives, "objective")
  const progress = safeProgress(initiative.progress)
  const averageEvidenceCompletion = documents.length
    ? documents.reduce((sum, doc) => sum + safeProgress(doc.completion_percentage), 0) / documents.length
    : 0
  const incompleteEvidence = documents.filter((doc) => safeProgress(doc.completion_percentage) < 100)
  const activeMilestones = milestones.filter((item) => {
    const status = item.status?.toLowerCase()
    return status && !["completed", "done", "complete"].includes(status)
  })

  const attention: string[] = []
  if (risks.length) attention.push(`${risks.length} riesgo${risks.length === 1 ? "" : "s"} registrado${risks.length === 1 ? "" : "s"}`)
  if (incompleteEvidence.length) attention.push(`${incompleteEvidence.length} evidencia${incompleteEvidence.length === 1 ? "" : "s"} incompleta${incompleteEvidence.length === 1 ? "" : "s"}`)
  if (activeMilestones.length) attention.push(`${activeMilestones.length} milestone${activeMilestones.length === 1 ? "" : "s"} abierto${activeMilestones.length === 1 ? "" : "s"}`)
  if (progress < 30) attention.push(`avance operacional bajo (${Math.round(progress)}%)`)
  if (!documents.length) attention.push("sin evidencia documental vinculada")

  const intelligenceStages = [
    { label: "Evidence", value: String(documents.length), icon: FileText, connected: true },
    { label: "Signals", value: "—", icon: RadioTower, connected: false },
    { label: "Opportunities", value: "—", icon: CircleDot, connected: false },
    { label: "Decisions", value: "—", icon: Scale, connected: false },
    { label: "Execution", value: `${Math.round(progress)}%`, icon: Workflow, connected: true },
  ]

  return (
    <div className="px-5 py-7 sm:px-7 lg:px-9 lg:py-9">
      <div className="mx-auto max-w-[1480px]">
        <section className="border-b border-white/10 pb-7">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-xs text-white/35 transition-colors hover:text-white/75">
            <ArrowLeft className="h-3.5 w-3.5" />
            Command Center
          </Link>

          <div className="mt-5 flex flex-col justify-between gap-6 xl:flex-row xl:items-end">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.17em] text-[#a5b06d]">
                <span>Initiative intelligence</span>
                {initiative.project_code && <><span className="text-white/15">/</span><span className="text-white/35">{initiative.project_code}</span></>}
              </div>
              <h1 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-[#f3f1e7] sm:text-4xl lg:text-[42px]">{initiative.title}</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/45 sm:text-base">
                {initiative.description || "Esta iniciativa todavía no tiene una descripción canónica."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full border border-[#a5b06d]/25 bg-[#a5b06d]/7 px-3 py-1.5 text-[#c8d08e]">{statusLabel(initiative.status)}</span>
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-white/42">{countryLabel(initiative.country)}</span>
              {initiative.category && <span className="rounded-full border border-white/10 px-3 py-1.5 text-white/42">{initiative.category}</span>}
            </div>
          </div>

          <div className="mt-7 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-5">
            <Metric label="Execution" value={`${Math.round(progress)}%`} detail="avance de iniciativa" />
            <Metric label="Evidence" value={String(documents.length)} detail={`${Math.round(averageEvidenceCompletion)}% completación promedio`} />
            <Metric label="Risks" value={String(risks.length)} detail="registrados en la iniciativa" emphasis={risks.length > 0} />
            <Metric label="Milestones" value={String(milestones.length)} detail={`${activeMilestones.length} abiertos`} />
            <Metric label="Objectives" value={String(objectives.length)} detail="objetivos estructurados" />
          </div>
        </section>

        <section className="grid gap-6 py-7 xl:grid-cols-[1.45fr_.75fr]">
          <div className="border border-white/10 bg-white/[0.015] p-5 sm:p-6">
            <SectionHeader eyebrow="Current context" title="Contexto canónico" subtitle="Descripción, ownership y horizonte operacional existente" />
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <ContextItem label="Lead" value={initiative.lead || initiative.created_by || "No asignado"} />
              <ContextItem label="Inicio" value={formatDate(initiative.start_date || initiative.created_at)} />
              <ContextItem label="Fin objetivo" value={formatDate(initiative.end_date)} />
              <ContextItem label="Presupuesto" value={initiative.budget ? `$${new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(initiative.budget)}` : "No definido"} />
            </div>
            <div className="mt-5 border-t border-white/[0.07] pt-4 text-xs text-white/28">Última actualización: {formatDate(initiative.updated_at)}</div>
          </div>

          <div className="border border-white/10 bg-white/[0.015] p-5 sm:p-6">
            <SectionHeader eyebrow="Attention" title="Qué requiere revisión" subtitle="Sólo hechos operacionales, sin inferencia silenciosa" />
            <div className="mt-4 space-y-2">
              {attention.length ? attention.map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-white/[0.07] py-3 first:border-t-0 first:pt-0">
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#c4a96b]" />
                  <span className="text-xs leading-5 text-white/48">{item}</span>
                </div>
              )) : (
                <div className="flex items-start gap-3 text-xs text-white/40">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#a5b06d]" />
                  No hay alertas bajo las reglas operacionales actuales.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 py-7">
          <SectionHeader eyebrow="Traceability" title="Cadena de inteligencia" subtitle="La interfaz muestra qué existe y qué debe modelarse todavía" />
          <div className="mt-4 grid gap-2 md:grid-cols-5">
            {intelligenceStages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <div key={stage.label} className="relative min-h-[128px] border border-white/10 bg-white/[0.015] p-4">
                  <div className="flex items-center justify-between">
                    <Icon className={`h-4 w-4 ${stage.connected ? "text-[#b7c27a]" : "text-white/22"}`} />
                    <span className={`font-mono text-[9px] uppercase tracking-[0.12em] ${stage.connected ? "text-[#b7c27a]/65" : "text-white/20"}`}>
                      {stage.connected ? "connected" : "not modeled"}
                    </span>
                  </div>
                  <div className={`mt-6 text-2xl font-medium ${stage.connected ? "text-white/88" : "text-white/24"}`}>{stage.value}</div>
                  <div className="mt-1 text-sm text-white/55">{stage.label}</div>
                  {index < intelligenceStages.length - 1 && <div className="absolute -right-[7px] top-1/2 z-10 hidden h-px w-3 bg-white/15 md:block" />}
                </div>
              )
            })}
          </div>
        </section>

        <section className="grid gap-6 border-t border-white/10 py-7 xl:grid-cols-[1.35fr_.65fr]">
          <div>
            <SectionHeader eyebrow="Research / Evidence" title="Evidencia vinculada" subtitle="Documentos reales ordenados por actualización" />
            <div className="mt-4 divide-y divide-white/[0.07] border-y border-white/10">
              {documents.length ? documents.slice(0, 10).map((doc) => {
                const completion = safeProgress(doc.completion_percentage)
                return (
                  <Link
                    key={doc.id}
                    href={`/initiatives/${initiative.id}/documents/${doc.id}`}
                    className="group grid gap-3 py-4 transition-colors hover:bg-white/[0.018] sm:grid-cols-[1fr_90px_90px_auto] sm:items-center sm:px-2"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm text-white/80 group-hover:text-white">{doc.title}</div>
                      <div className="mt-1 truncate text-xs text-white/28">{doc.description || `Actualizado ${formatDate(doc.updated_at)}`}</div>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/32">{statusLabel(doc.status)}</div>
                    <div>
                      <div className="text-xs text-white/42">{Math.round(completion)}%</div>
                      <div className="mt-1.5 h-1 bg-white/[0.06]"><div className="h-full bg-[#9daa67]" style={{ width: `${completion}%` }} /></div>
                    </div>
                    <ArrowUpRight className="hidden h-3.5 w-3.5 text-white/18 transition-colors group-hover:text-white/55 sm:block" />
                  </Link>
                )
              }) : <EmptyState text="No hay documentos de evidencia vinculados a esta iniciativa." />}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Risk context" title="Riesgos registrados" subtitle="Sin re-score ni reinterpretación de IA" />
            <div className="mt-4 space-y-2">
              {risks.length ? risks.slice(0, 6).map((risk, index) => (
                <StructuredCard key={`${risk.title}-${index}`} icon={AlertTriangle} item={risk} tone="risk" />
              )) : <EmptyState text="No hay riesgos estructurados en la iniciativa." />}
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-t border-white/10 py-7 xl:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Direction" title="Objetivos" subtitle="Qué pretende lograr la iniciativa según los datos existentes" />
            <div className="mt-4 space-y-2">
              {objectives.length ? objectives.map((objective, index) => (
                <StructuredCard key={`${objective.title}-${index}`} icon={Target} item={objective} />
              )) : <EmptyState text="No hay objetivos estructurados todavía." />}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Execution" title="Milestones" subtitle="Estado operacional existente, previo al nuevo modelo de decisiones" />
            <div className="mt-4 space-y-2">
              {milestones.length ? milestones.map((milestone, index) => (
                <StructuredCard key={`${milestone.title}-${index}`} icon={Flag} item={milestone} />
              )) : <EmptyState text="No hay milestones estructurados todavía." />}
            </div>
          </div>
        </section>

        <section className="grid gap-3 border-t border-white/10 py-7 md:grid-cols-3">
          <NextModelCard icon={RadioTower} label="Signals" text="Crear una entidad explícita con fuente, fecha, strength y provenance antes de mostrar señales como verdad canónica." />
          <NextModelCard icon={Layers3} label="Opportunities" text="Vincular oportunidades a señales/evidencia, assumptions, confidence, owner y estado de evaluación." />
          <NextModelCard icon={Scale} label="Decisions" text="Registrar decisión, alternativas, rationale, evidencia utilizada, responsable y acción resultante." />
        </section>
      </div>
    </div>
  )
}

function Metric({ label, value, detail, emphasis = false }: { label: string; value: string; detail: string; emphasis?: boolean }) {
  return (
    <div className="bg-[#0c0e0c] px-4 py-5">
      <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/27">{label}</div>
      <div className={`mt-3 text-2xl font-medium ${emphasis ? "text-[#c4a96b]" : "text-[#f1f0e7]"}`}>{value}</div>
      <div className="mt-1 text-[11px] leading-4 text-white/28">{detail}</div>
    </div>
  )
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">{eyebrow}</div>
      <h2 className="mt-2 text-lg font-medium text-white/86">{title}</h2>
      <p className="mt-1 text-xs text-white/28">{subtitle}</p>
    </div>
  )
}

function ContextItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/24">{label}</div>
      <div className="mt-2 text-sm text-white/68">{value}</div>
    </div>
  )
}

function StructuredCard({ icon: Icon, item, tone = "default" }: { icon: typeof Target; item: StructuredItem; tone?: "default" | "risk" }) {
  return (
    <div className="border border-white/10 bg-white/[0.015] p-4">
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${tone === "risk" ? "text-[#c4a96b]" : "text-[#a5b06d]"}`} />
        <div className="min-w-0 flex-1">
          <div className="text-sm text-white/75">{item.title}</div>
          {item.description && <p className="mt-1.5 text-xs leading-5 text-white/31">{item.description}</p>}
          {(item.status || item.meta) && (
            <div className="mt-2 flex flex-wrap gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/25">
              {item.status && <span>{statusLabel(item.status)}</span>}
              {item.meta && <span>{item.meta}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function EmptyState({ text }: { text: string }) {
  return <div className="border border-dashed border-white/10 px-4 py-7 text-center text-xs text-white/27">{text}</div>
}

function NextModelCard({ icon: Icon, label, text }: { icon: typeof Scale; label: string; text: string }) {
  return (
    <div className="border border-white/10 bg-white/[0.015] p-5">
      <div className="flex items-center justify-between">
        <Icon className="h-4 w-4 text-white/24" />
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/20">next model</span>
      </div>
      <div className="mt-5 text-sm text-white/68">{label}</div>
      <p className="mt-2 text-xs leading-5 text-white/29">{text}</p>
    </div>
  )
}
