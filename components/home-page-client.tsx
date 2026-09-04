"use client"

import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  CircleDot,
  FileText,
  RadioTower,
  Scale,
  Search,
  Target,
  Workflow,
} from "lucide-react"
import { useTranslations } from "@/lib/i18n/translations-provider"

interface PublicInitiative {
  id: string
  title: string
  description?: string | null
  category?: string | null
  status?: string | null
  progress?: number | null
  country?: string | null
  project_code?: string | null
}

interface HomePageClientProps {
  initiatives: PublicInitiative[]
  partners: any[]
  countries: any[]
}

const copy = {
  en: {
    eyebrow: "Innovation Intelligence OS",
    hero: "Turn research into traceable decisions.",
    intro:
      "Cort3x structures signals, evidence, opportunities and execution so innovation decisions stay connected to what actually changed.",
    primary: "Explore the system",
    secondary: "Open workspace",
    traceLabel: "Decision trace",
    traceNote: "Evidence before narrative. AI assists judgment; it does not silently become authority.",
    modelEyebrow: "Operating model",
    modelTitle: "One chain from observation to action.",
    modelBody:
      "Cort3x keeps research, signals, structured evidence, prioritization and execution inside one persistent decision context.",
    evidenceEyebrow: "Public evidence",
    evidenceTitle: "Real initiatives, not a logo wall.",
    evidenceBody: "Public initiative records are shown as product evidence. Internal source material remains protected.",
    noEvidence: "No public initiatives are available right now.",
    capabilitiesEyebrow: "System behavior",
    capabilitiesTitle: "Designed to reduce uncertainty, not add dashboard noise.",
    methodEyebrow: "Decision discipline",
    methodTitle: "Evidence first. Provenance visible. Human decision retained.",
    aboutEyebrow: "Product identity",
    aboutTitle: "Cort3x is the operating layer between research and action.",
    aboutBody:
      "Built by N3uralia for teams that need a persistent innovation memory: what changed, why it matters, what was decided and what happened next.",
    finalPrimary: "Enter Cort3x",
    finalSecondary: "About N3uralia",
    publicInitiatives: "public initiatives",
    markets: "markets represented",
    publicPartners: "public partner records",
    view: "View initiative",
  },
  es: {
    eyebrow: "Innovation Intelligence OS",
    hero: "Convierte investigación en decisiones trazables.",
    intro:
      "Cort3x estructura señales, evidencia, oportunidades y ejecución para que cada decisión de innovación permanezca conectada con lo que realmente cambió.",
    primary: "Explorar el sistema",
    secondary: "Entrar al workspace",
    traceLabel: "Traza de decisión",
    traceNote: "Evidencia antes que narrativa. La IA asiste el criterio; no se convierte silenciosamente en autoridad.",
    modelEyebrow: "Modelo operativo",
    modelTitle: "Una sola cadena desde la observación hasta la acción.",
    modelBody:
      "Cort3x mantiene investigación, señales, evidencia estructurada, priorización y ejecución dentro de un contexto de decisión persistente.",
    evidenceEyebrow: "Evidencia pública",
    evidenceTitle: "Iniciativas reales, no un muro de logos.",
    evidenceBody: "Los registros públicos de iniciativas funcionan como evidencia del producto. Las fuentes internas permanecen protegidas.",
    noEvidence: "No hay iniciativas públicas disponibles en este momento.",
    capabilitiesEyebrow: "Comportamiento del sistema",
    capabilitiesTitle: "Diseñado para reducir incertidumbre, no para sumar ruido de dashboard.",
    methodEyebrow: "Disciplina de decisión",
    methodTitle: "Evidencia primero. Provenance visible. La decisión humana se conserva.",
    aboutEyebrow: "Identidad de producto",
    aboutTitle: "Cort3x es la capa operativa entre investigación y acción.",
    aboutBody:
      "Construido por N3uralia para equipos que necesitan memoria persistente de innovación: qué cambió, por qué importa, qué se decidió y qué ocurrió después.",
    finalPrimary: "Entrar a Cort3x",
    finalSecondary: "Acerca de N3uralia",
    publicInitiatives: "iniciativas públicas",
    markets: "mercados representados",
    publicPartners: "registros públicos de partners",
    view: "Ver iniciativa",
  },
  id: {
    eyebrow: "Innovation Intelligence OS",
    hero: "Ubah riset menjadi keputusan yang dapat ditelusuri.",
    intro:
      "Cort3x menyusun sinyal, bukti, peluang, dan eksekusi agar keputusan inovasi tetap terhubung dengan perubahan yang benar-benar terjadi.",
    primary: "Jelajahi sistem",
    secondary: "Buka workspace",
    traceLabel: "Jejak keputusan",
    traceNote: "Bukti sebelum narasi. AI membantu penilaian; AI bukan otoritas tersembunyi.",
    modelEyebrow: "Model operasi",
    modelTitle: "Satu rantai dari observasi ke tindakan.",
    modelBody:
      "Cort3x menjaga riset, sinyal, bukti terstruktur, prioritas, dan eksekusi dalam satu konteks keputusan yang persisten.",
    evidenceEyebrow: "Bukti publik",
    evidenceTitle: "Inisiatif nyata, bukan dinding logo.",
    evidenceBody: "Catatan inisiatif publik ditampilkan sebagai bukti produk. Materi sumber internal tetap terlindungi.",
    noEvidence: "Belum ada inisiatif publik yang tersedia.",
    capabilitiesEyebrow: "Perilaku sistem",
    capabilitiesTitle: "Dirancang untuk mengurangi ketidakpastian, bukan menambah kebisingan dashboard.",
    methodEyebrow: "Disiplin keputusan",
    methodTitle: "Bukti dulu. Provenance terlihat. Keputusan manusia tetap utama.",
    aboutEyebrow: "Identitas produk",
    aboutTitle: "Cort3x adalah lapisan operasi antara riset dan tindakan.",
    aboutBody:
      "Dibangun oleh N3uralia untuk tim yang membutuhkan memori inovasi persisten: apa yang berubah, mengapa penting, apa yang diputuskan, dan apa hasilnya.",
    finalPrimary: "Masuk ke Cort3x",
    finalSecondary: "Tentang N3uralia",
    publicInitiatives: "inisiatif publik",
    markets: "pasar terwakili",
    publicPartners: "catatan partner publik",
    view: "Lihat inisiatif",
  },
} as const

const modelStages = [
  { label: "Research", icon: Search, index: "01" },
  { label: "Signal", icon: RadioTower, index: "02" },
  { label: "Evidence", icon: FileText, index: "03" },
  { label: "Opportunity", icon: CircleDot, index: "04" },
  { label: "Prioritize", icon: Target, index: "05" },
  { label: "Decision", icon: Scale, index: "06" },
  { label: "Execution", icon: Workflow, index: "07" },
]

export function HomePageClient({ initiatives, partners, countries }: HomePageClientProps) {
  const { locale } = useTranslations()
  const text = copy[locale]
  const visibleInitiatives = initiatives.slice(0, 6)

  return (
    <main className="bg-[var(--c3x-void)] text-[var(--c3x-bone)]">
      <section className="relative overflow-hidden border-b border-[var(--c3x-rule)]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden="true">
          <div className="absolute left-[7%] top-0 h-full w-px bg-[var(--c3x-rule)]" />
          <div className="absolute left-[33%] top-0 h-full w-px bg-[var(--c3x-rule)]" />
          <div className="absolute left-[67%] top-0 h-full w-px bg-[var(--c3x-rule)]" />
          <div className="absolute right-[7%] top-0 h-full w-px bg-[var(--c3x-rule)]" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_.8fr] lg:px-12 lg:py-24">
          <div className="max-w-4xl">
            <div className="c3x-micro flex items-center gap-3 text-[var(--c3x-signal)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--c3x-signal)]" />
              {text.eyebrow}
            </div>
            <h1 className="font-display mt-6 text-[clamp(3.6rem,7.4vw,7.4rem)] font-normal leading-[0.92] tracking-[-0.035em] text-[var(--c3x-bone)]">
              {text.hero}
            </h1>
            <p className="mt-8 max-w-[66ch] text-[clamp(1rem,1.4vw,1.2rem)] leading-8 text-[var(--c3x-mist)]">{text.intro}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#services"
                className="flex min-h-11 items-center gap-3 bg-[var(--c3x-signal)] px-5 text-sm font-medium text-[var(--c3x-void)] transition-colors duration-150 hover:bg-[var(--c3x-white)]"
              >
                {text.primary}
                <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
              </Link>
              <Link
                href="/auth/login?next=/dashboard"
                className="flex min-h-11 items-center gap-3 border border-[var(--c3x-rule)] px-5 text-sm font-medium text-[var(--c3x-bone)] transition-colors duration-150 hover:border-[var(--c3x-signal)]"
              >
                {text.secondary}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
              </Link>
            </div>
          </div>

          <div className="border-l border-[var(--c3x-rule)] pl-0 lg:pl-10">
            <div className="flex items-center justify-between gap-4 border-b border-[var(--c3x-rule)] pb-4">
              <span className="c3x-micro">{text.traceLabel}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--c3x-moss)]">Live system logic</span>
            </div>

            <div className="py-7">
              {modelStages.map((stage, index) => {
                const Icon = stage.icon
                return (
                  <div key={stage.label} className="group grid grid-cols-[34px_1fr_auto] items-center gap-4">
                    <div className="relative flex h-14 items-center justify-center">
                      <span className={`absolute left-1/2 top-0 w-px -translate-x-1/2 bg-[var(--c3x-rule)] ${index === 0 ? "h-1/2 top-1/2" : index === modelStages.length - 1 ? "h-1/2" : "h-full"}`} />
                      <span className="relative z-10 flex h-7 w-7 items-center justify-center border border-[var(--c3x-rule)] bg-[var(--c3x-void)] transition-colors duration-150 group-hover:border-[var(--c3x-signal)]">
                        <Icon className="h-3.5 w-3.5 text-[var(--c3x-mist)] group-hover:text-[var(--c3x-signal)]" strokeWidth={1.6} />
                      </span>
                    </div>
                    <div className="border-b border-[var(--c3x-rule)] py-4 text-sm text-[var(--c3x-bone)]">{stage.label}</div>
                    <div className="border-b border-[var(--c3x-rule)] py-4 font-mono text-[9px] text-[var(--c3x-mist)]">{stage.index}</div>
                  </div>
                )
              })}
            </div>

            <p className="max-w-md text-sm leading-6 text-[var(--c3x-mist)]">{text.traceNote}</p>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-[var(--c3x-rule)]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <div className="c3x-micro text-[var(--c3x-signal)]">{text.modelEyebrow}</div>
              <h2 className="font-display mt-5 text-[clamp(2.4rem,4vw,4.8rem)] font-normal leading-[0.98] tracking-[-0.025em]">{text.modelTitle}</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[var(--c3x-mist)]">{text.modelBody}</p>
            </div>

            <div className="grid border-l border-t border-[var(--c3x-rule)] sm:grid-cols-2 xl:grid-cols-3">
              {modelStages.map((stage) => {
                const Icon = stage.icon
                return (
                  <div key={stage.label} className="min-h-[176px] border-b border-r border-[var(--c3x-rule)] bg-[var(--c3x-ink)] p-5">
                    <div className="flex items-start justify-between">
                      <Icon className="h-4 w-4 text-[var(--c3x-signal)]" strokeWidth={1.6} />
                      <span className="font-mono text-[9px] text-[var(--c3x-mist)]">{stage.index}</span>
                    </div>
                    <div className="font-display mt-16 text-2xl font-normal">{stage.label}</div>
                  </div>
                )
              })}
              <div className="min-h-[176px] border-b border-r border-[var(--c3x-rule)] p-5">
                <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--c3x-moss)]">Feedback loop</div>
                <div className="font-display mt-16 text-2xl font-normal">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-[var(--c3x-rule)]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-8 border-b border-[var(--c3x-rule)] pb-10 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <div>
              <div className="c3x-micro text-[var(--c3x-signal)]">{text.evidenceEyebrow}</div>
              <h2 className="font-display mt-5 text-[clamp(2.4rem,4vw,4.8rem)] font-normal leading-[0.98] tracking-[-0.025em]">{text.evidenceTitle}</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[var(--c3x-mist)] lg:justify-self-end">{text.evidenceBody}</p>
          </div>

          <div className="mt-8">
            {visibleInitiatives.length === 0 ? (
              <div className="border border-[var(--c3x-rule)] px-6 py-14 text-sm text-[var(--c3x-mist)]">{text.noEvidence}</div>
            ) : (
              visibleInitiatives.map((initiative, index) => (
                <Link
                  key={initiative.id}
                  href={`/initiatives/${initiative.id}`}
                  className="group grid gap-5 border-b border-[var(--c3x-rule)] py-7 transition-colors duration-150 hover:bg-[var(--c3x-ink)] sm:grid-cols-[64px_1fr_auto] sm:items-start sm:px-4"
                >
                  <span className="font-mono text-[10px] text-[var(--c3x-mist)]">{String(index + 1).padStart(2, "0")}</span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-display text-[clamp(1.55rem,2.5vw,2.4rem)] font-normal text-[var(--c3x-bone)]">{initiative.title}</h3>
                      {initiative.project_code && (
                        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--c3x-signal)]">{initiative.project_code}</span>
                      )}
                    </div>
                    {initiative.description && <p className="mt-3 max-w-3xl line-clamp-2 text-sm leading-6 text-[var(--c3x-mist)]">{initiative.description}</p>}
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--c3x-mist)]">
                      <span>{initiative.country || "Global"}</span>
                      <span>{initiative.status || "Public"}</span>
                      {typeof initiative.progress === "number" && <span>{Math.round(initiative.progress)}% progress</span>}
                    </div>
                  </div>
                  <span className="flex items-center gap-2 text-xs text-[var(--c3x-mist)] transition-colors group-hover:text-[var(--c3x-signal)]">
                    {text.view}
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                  </span>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-b border-[var(--c3x-rule)]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="c3x-micro text-[var(--c3x-signal)]">{text.capabilitiesEyebrow}</div>
          <h2 className="font-display mt-5 max-w-5xl text-[clamp(2.4rem,4vw,4.8rem)] font-normal leading-[0.98] tracking-[-0.025em]">{text.capabilitiesTitle}</h2>

          <div className="mt-14 grid border-l border-t border-[var(--c3x-rule)] md:grid-cols-3">
            <Principle index="01" title="Persistent context" body="Research and execution remain connected instead of disappearing into slide decks, chats and disconnected files." />
            <Principle index="02" title="Visible provenance" body="Evidence, source context and uncertainty stay visible wherever a recommendation or decision is formed." />
            <Principle index="03" title="Decision-oriented AI" body="AI structures, compares and explains. People retain authority over consequential choices." />
          </div>
        </div>
      </section>

      <section id="journey" className="border-b border-[var(--c3x-rule)]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-28">
          <div>
            <div className="c3x-micro text-[var(--c3x-signal)]">{text.methodEyebrow}</div>
            <h2 className="font-display mt-5 text-[clamp(2.4rem,4vw,4.8rem)] font-normal leading-[0.98] tracking-[-0.025em]">{text.methodTitle}</h2>
          </div>

          <div className="border-t border-[var(--c3x-rule)]">
            <MethodRow index="01" label="Observe" text="Capture the source, timestamp, context and what materially changed." />
            <MethodRow index="02" label="Structure" text="Separate evidence from interpretation, confidence and unresolved assumptions." />
            <MethodRow index="03" label="Compare" text="Evaluate alternatives against explicit criteria instead of narrative momentum." />
            <MethodRow index="04" label="Decide" text="Record the decision, actor, rationale and evidence that supported it." />
            <MethodRow index="05" label="Learn" text="Connect execution outcomes back into the next research and prioritization cycle." />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <div className="c3x-micro text-[var(--c3x-signal)]">{text.aboutEyebrow}</div>
              <h2 className="font-display mt-5 max-w-5xl text-[clamp(2.6rem,4.8vw,5.4rem)] font-normal leading-[0.95] tracking-[-0.03em]">{text.aboutTitle}</h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--c3x-mist)]">{text.aboutBody}</p>
            </div>

            <div className="grid grid-cols-3 border border-[var(--c3x-rule)]">
              <DataPoint value={initiatives.length} label={text.publicInitiatives} />
              <DataPoint value={countries.length} label={text.markets} />
              <DataPoint value={partners.length} label={text.publicPartners} />
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-3 border-t border-[var(--c3x-rule)] pt-8">
            <Link
              href="/auth/login?next=/dashboard"
              className="flex min-h-11 items-center gap-3 bg-[var(--c3x-signal)] px-5 text-sm font-medium text-[var(--c3x-void)] transition-colors duration-150 hover:bg-[var(--c3x-white)]"
            >
              {text.finalPrimary}
              <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </Link>
            <a
              href="https://n3uralia.com"
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center gap-3 border border-[var(--c3x-rule)] px-5 text-sm font-medium text-[var(--c3x-bone)] transition-colors duration-150 hover:border-[var(--c3x-signal)]"
            >
              {text.finalSecondary}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
            </a>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-[var(--c3x-rule)] pt-6 text-[11px] text-[var(--c3x-mist)] sm:flex-row sm:items-center sm:justify-between">
            <span>Cort3x · Innovation Intelligence OS</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em]">By N3uralia · 2026</span>
          </div>
        </div>
      </section>
    </main>
  )
}

function Principle({ index, title, body }: { index: string; title: string; body: string }) {
  return (
    <div className="min-h-[260px] border-b border-r border-[var(--c3x-rule)] bg-[var(--c3x-ink)] p-6">
      <div className="font-mono text-[9px] text-[var(--c3x-signal)]">{index}</div>
      <h3 className="font-display mt-16 text-3xl font-normal">{title}</h3>
      <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--c3x-mist)]">{body}</p>
    </div>
  )
}

function MethodRow({ index, label, text }: { index: string; label: string; text: string }) {
  return (
    <div className="grid gap-3 border-b border-[var(--c3x-rule)] py-6 sm:grid-cols-[54px_130px_1fr] sm:items-start">
      <span className="font-mono text-[9px] text-[var(--c3x-signal)]">{index}</span>
      <span className="font-display text-xl font-normal">{label}</span>
      <span className="max-w-xl text-sm leading-6 text-[var(--c3x-mist)]">{text}</span>
    </div>
  )
}

function DataPoint({ value, label }: { value: number; label: string }) {
  return (
    <div className="border-r border-[var(--c3x-rule)] bg-[var(--c3x-ink)] px-4 py-5 last:border-r-0">
      <div className="font-display text-3xl font-normal text-[var(--c3x-bone)]">{value}</div>
      <div className="mt-2 text-[10px] leading-4 text-[var(--c3x-mist)]">{label}</div>
    </div>
  )
}
