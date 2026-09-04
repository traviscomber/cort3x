import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CircleDot,
  FileText,
  Layers3,
  RadioTower,
  Scale,
  Search,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Capabilities | Cort3x",
  description:
    "Cort3x capabilities for research, evidence, signals, opportunity mapping, prioritization, decisions and execution.",
}

const canonicalStages = [
  {
    index: "01",
    title: "Research",
    icon: Search,
    state: "model",
    text: "Capture source context, what changed, where it came from and why it may matter before interpretation begins.",
  },
  {
    index: "02",
    title: "Signals",
    icon: RadioTower,
    state: "model",
    text: "Represent meaningful change as an explicit object with source links, confidence and time context.",
  },
  {
    index: "03",
    title: "Evidence",
    icon: FileText,
    state: "live",
    text: "Maintain initiative-linked evidence documents inside the authenticated workspace instead of scattering them across disconnected files.",
  },
  {
    index: "04",
    title: "Opportunities",
    icon: CircleDot,
    state: "model",
    text: "Connect evidence and signals to opportunity hypotheses, assumptions, risks and validation requirements.",
  },
  {
    index: "05",
    title: "Prioritization",
    icon: Target,
    state: "model",
    text: "Compare alternatives against explicit criteria so ranking is inspectable rather than narrative-driven.",
  },
  {
    index: "06",
    title: "Decisions",
    icon: Scale,
    state: "model",
    text: "Record what was decided, by whom, with which evidence, assumptions and unresolved uncertainty.",
  },
  {
    index: "07",
    title: "Execution",
    icon: Workflow,
    state: "live",
    text: "Track initiatives, risks, progress and operational follow-up while preserving the context that led to action.",
  },
]

export default function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-[var(--c3x-void)] text-[var(--c3x-bone)]">
      <section className="border-b border-[var(--c3x-rule)]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <div className="c3x-micro text-[var(--c3x-signal)]">Capabilities / system model</div>
              <h1 className="font-display mt-6 max-w-5xl text-[clamp(3.4rem,6.5vw,7rem)] font-normal leading-[0.93] tracking-[-0.035em]">
                Preserve the chain between evidence and action.
              </h1>
            </div>
            <div className="border-l border-[var(--c3x-rule)] pl-6">
              <p className="max-w-xl text-base leading-7 text-[var(--c3x-mist)]">
                Cort3x is organized around decision context, not a catalogue of generic SaaS features. Each capability strengthens traceability from research through execution and learning.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/auth/login?next=/dashboard"
                  className="flex min-h-11 items-center gap-3 bg-[var(--c3x-signal)] px-5 text-sm font-medium text-[var(--c3x-void)] transition-colors duration-150 hover:bg-[var(--c3x-white)]"
                >
                  Open workspace
                  <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--c3x-rule)]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-3 border-b border-[var(--c3x-rule)] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="c3x-micro text-[var(--c3x-signal)]">Canonical loop</div>
              <h2 className="font-display mt-4 text-[clamp(2.2rem,4vw,4rem)] font-normal leading-[1]">Seven stages. One persistent context.</h2>
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--c3x-mist)]">
              LIVE = current operational foundation · MODEL = next canonical object
            </div>
          </div>

          <div className="mt-8 grid border-l border-t border-[var(--c3x-rule)] md:grid-cols-2 xl:grid-cols-4">
            {canonicalStages.map((stage) => {
              const Icon = stage.icon
              const live = stage.state === "live"
              return (
                <div key={stage.title} className="min-h-[270px] border-b border-r border-[var(--c3x-rule)] bg-[var(--c3x-ink)] p-6">
                  <div className="flex items-start justify-between">
                    <Icon className={live ? "h-4 w-4 text-[var(--c3x-signal)]" : "h-4 w-4 text-[var(--c3x-mist)]"} strokeWidth={1.6} />
                    <div className="text-right">
                      <div className="font-mono text-[9px] text-[var(--c3x-mist)]">{stage.index}</div>
                      <div className={`mt-2 font-mono text-[8px] uppercase tracking-[0.12em] ${live ? "text-[var(--c3x-green)]" : "text-[var(--c3x-moss)]"}`}>
                        {live ? "live" : "model"}
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display mt-16 text-3xl font-normal">{stage.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--c3x-mist)]">{stage.text}</p>
                </div>
              )
            })}
            <div className="min-h-[270px] border-b border-r border-[var(--c3x-rule)] p-6">
              <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--c3x-signal)]">08 / Learning</div>
              <h3 className="font-display mt-16 text-3xl font-normal">Close the loop</h3>
              <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--c3x-mist)]">
                Outcomes become new evidence. The system should learn from what happened after a decision, not only from what was predicted before it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--c3x-rule)]">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-28">
          <div>
            <div className="c3x-micro text-[var(--c3x-signal)]">Current foundation</div>
            <h2 className="font-display mt-5 text-[clamp(2.4rem,4vw,4.8rem)] font-normal leading-[0.98] tracking-[-0.025em]">
              The operational layer already exists.
            </h2>
          </div>

          <div className="border-t border-[var(--c3x-rule)]">
            <CapabilityRow
              icon={FileText}
              index="01"
              title="Evidence workspace"
              text="Authenticated users can access initiative-linked source documents while public surfaces expose only sanitized initiative projections."
            />
            <CapabilityRow
              icon={Layers3}
              index="02"
              title="Portfolio context"
              text="Initiatives, progress, risks and evidence counts form the current operational base of the Command Center."
            />
            <CapabilityRow
              icon={Workflow}
              index="03"
              title="Execution visibility"
              text="Current initiative state remains visible without pretending that unstructured Signals, Opportunities or Decisions already exist."
            />
            <CapabilityRow
              icon={ShieldCheck}
              index="04"
              title="Protected internal evidence"
              text="The public site reads sanitized projections; operational tables and evidence remain behind authenticated access controls."
            />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <div className="c3x-micro text-[var(--c3x-signal)]">AI operating contract</div>
              <h2 className="font-display mt-5 max-w-4xl text-[clamp(2.4rem,4vw,4.8rem)] font-normal leading-[0.98] tracking-[-0.025em]">
                AI can accelerate judgment without becoming hidden authority.
              </h2>
            </div>
            <div className="border-l border-[var(--c3x-rule)] pl-6 text-sm leading-6 text-[var(--c3x-mist)]">
              <p>Every AI-assisted conclusion should expose its source basis, uncertainty and relationship to the decision being made.</p>
              <p className="mt-4">Cort3x should structure, compare, summarize and propose. Consequential decisions remain attributable to people.</p>
              <Link href="/" className="c3x-link mt-7 inline-flex items-center gap-2 text-xs">
                Return to product overview
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function CapabilityRow({ icon: Icon, index, title, text }: { icon: typeof FileText; index: string; title: string; text: string }) {
  return (
    <div className="grid gap-4 border-b border-[var(--c3x-rule)] py-6 sm:grid-cols-[48px_180px_1fr] sm:items-start">
      <Icon className="h-4 w-4 text-[var(--c3x-signal)]" strokeWidth={1.6} />
      <div>
        <div className="font-mono text-[8px] text-[var(--c3x-mist)]">{index}</div>
        <div className="font-display mt-1 text-xl font-normal text-[var(--c3x-bone)]">{title}</div>
      </div>
      <p className="max-w-xl text-sm leading-6 text-[var(--c3x-mist)]">{text}</p>
    </div>
  )
}
