import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "QUESTLOG — Life as a Local Game | Green Industrial Innovation Platform",
  description:
    "Platform pertumbuhan diri berbasis AI yang mengubah kehidupan nyata menjadi perjalanan gamifikasi terinspirasi dari permainan tradisional Congklak Indonesia. AI-powered self-growth platform with Bahasa Indonesia support.",
  keywords: [
    "QUESTLOG Indonesia",
    "Congklak of Wisdom",
    "AI journaling Indonesia",
    "gamified self-growth",
    "Bahasa Indonesia AI mentor",
    "traditional games Indonesia",
    "personal development Indonesia",
    "Next.js Supabase",
    "cultural gamification",
  ],
}

const initiative = {
  id: "questlog",
  title: "QUESTLOG — Life as a Local Game",
  subtitle: "Phase 1: Congklak of Wisdom (Indonesia Edition)",
  description:
    "Platform pertumbuhan diri berbasis AI yang mengubah kehidupan nyata menjadi perjalanan gamifikasi terinspirasi dari permainan tradisional lokal. Pengguna menulis jurnal, merefleksikan, dan menyelesaikan kebiasaan untuk mendapatkan XP, membuka level, dan melihat kemajuan hidup mereka secara visual — semua bertema budaya lokal mereka.",
  descriptionEn:
    "AI-powered self-growth platform that turns real life into a gamified journey inspired by local traditional games. Users journal, reflect, and complete habits to earn XP, unlock levels, and watch their life progress visually — all themed through their local culture.",
  status: "active",
  badge: "AI & Personal Growth",
  theme: {
    background: "bg-gradient-to-b from-purple-50 to-white",
    badgeColor: "bg-purple-100 text-purple-800",
    iconColor: "text-purple-600",
    accentColor: "text-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
  },
}

export default async function QuestLogPage() {
  const theme = initiative.theme

  return (
    <div className={`min-h-screen ${theme.background}`}>
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Badge className={`mb-4 ${theme.badgeColor}`}>{initiative.status}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{initiative.title}</h1>
          <p className="text-xl font-semibold text-purple-600 mb-6">{initiative.subtitle}</p>
          <p className="text-lg text-muted-foreground mb-4 text-pretty">{initiative.description}</p>
          <p className="text-base text-muted-foreground italic text-pretty">{initiative.descriptionEn}</p>

          <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-purple-600 shadow-sm">
            <p className="text-lg font-semibold mb-2 flex items-center gap-2">
              <svg
                className="h-5 w-5 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Vision / Visi
            </p>
            <p className="text-muted-foreground italic">
              "We don't just gamify habits — we bring cultural play and AI reflection together to make self-improvement
              feel human, meaningful, and fun."
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Concept Summary / Ringkasan Konsep</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  Gamified Journey
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Earn XP, unlock levels, and watch your life progress visually through a Congklak board that morphs as
                  you grow. Each reflection = a biji (shell/gem) placed into a pit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  AI Mentor in Bahasa Indonesia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Receive supportive feedback from an AI mentor that speaks in Bahasa Indonesia with local idioms and
                  values. Personalized guidance that feels culturally authentic.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                  Cultural Theming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Warm wood tones, batik motifs, and soft gamelan-inspired sound cues. The Congklak board represents
                  strategy, patience, and inner flow.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Weekly AI Summaries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Receive "Scroll of Wisdom" — weekly AI-generated summaries that highlight key themes in your
                  reflections and celebrate your progress.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It's Unique */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Why It's Unique / Mengapa Unik</h2>
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Gap in Market</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">QuestLog's Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Journaling apps lack play</td>
                    <td className="px-6 py-4 text-sm font-medium">Adds full RPG-style progression</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Gamified apps lack reflection</td>
                    <td className="px-6 py-4 text-sm font-medium">Adds AI mentor & emotional summary</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-muted-foreground">No cultural identity</td>
                    <td className="px-6 py-4 text-sm font-medium">Every region has a local game metaphor</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-muted-foreground">High churn from "streak pressure"</td>
                    <td className="px-6 py-4 text-sm font-medium">Encouraging, non-punitive XP system</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-muted-foreground">Global AI tone mismatch</td>
                    <td className="px-6 py-4 text-sm font-medium">Localized mentors (language, idioms, values)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">User Flow (Indonesia) / Alur Pengguna</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">1. Open App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">See your Congklak board + "Spirit of Congklak" greeting</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. Journal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Choose mood → type or voice note</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3. AI Mentor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Replies in Bahasa Indonesia with supportive feedback</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">4. Place a Gem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You "place a gem" on the board (visual + XP). Animation: new glowing biji placed
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">5. Progress & Level Up</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Streaks and levels unlock new patterns and board designs. XP bar updates, level up celebration
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">6. Weekly Recap</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Weekly AI recap = "Scroll of Wisdom" summarizing key themes in your reflections
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technical Architecture / Arsitektur Teknis</h2>
          <div className="bg-slate-900 text-slate-50 rounded-lg p-6 overflow-x-auto">
            <pre className="text-sm">
              {`/app
  ├─ page.tsx              → Dashboard (Congklak Board)
  ├─ journal/page.tsx      → Journal entry UI
  ├─ api/ai/analyze.ts     → AI summaries (GPT-4o)
  ├─ api/xp/update.ts      → XP + streak logic
  └─ api/weekly-summary.ts → AI weekly recap

/components
  ├─ CongklakBoard.tsx
  ├─ JournalForm.tsx
  ├─ AvatarMentor.tsx
  └─ ProgressBar.tsx

/lib
  ├─ db.ts                 → Supabase client
  ├─ aiClient.ts           → OpenAI wrapper
  └─ themeConfig.ts        → Congklak colors, animations, sfx`}
            </pre>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Next.js 15</li>
                  <li>• TailwindCSS</li>
                  <li>• Framer Motion</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Serverless API Routes on Vercel</li>
                  <li>• Supabase (Postgres)</li>
                  <li>• OpenAI GPT-4o / Gemini API</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Database</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Supabase (users, entries, xp, streaks, themes)</li>
                  <li>• Supabase Auth or Auth0</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Resend API for daily reminders</li>
                  <li>• Daily "Place your gem" email</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Roadmap / Peta Jalan</h2>
          <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Phase</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Focus</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Deliverable</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-purple-50/50">
                    <td className="px-6 py-4 text-sm font-medium">1. Indonesia MVP</td>
                    <td className="px-6 py-4 text-sm">"Congklak of Wisdom"</td>
                    <td className="px-6 py-4 text-sm">Launch from Indonesia, 1-week to 1-month deployment on Vercel</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">2. France Edition</td>
                    <td className="px-6 py-4 text-sm">"Pétanque of Balance"</td>
                    <td className="px-6 py-4 text-sm">Prepare French localization</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">3. Japan Edition</td>
                    <td className="px-6 py-4 text-sm">"Zen Garden Path"</td>
                    <td className="px-6 py-4 text-sm">Calm, minimalist aesthetic</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">4. Latin America</td>
                    <td className="px-6 py-4 text-sm">"Lotería de Sueños"</td>
                    <td className="px-6 py-4 text-sm">Creative, vibrant storytelling</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">5. Global Edition</td>
                    <td className="px-6 py-4 text-sm">"World of Play"</td>
                    <td className="px-6 py-4 text-sm">User-selects local game, cross-cultural system</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Future Potential */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Future Potential / Potensi Masa Depan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  AI Mentor Personalization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Memory of user tone + style for deeper personalization</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  Health Data Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Apple Health / Fitbit → mood correlation for holistic wellness
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Social Circles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Group Congklak boards for teams or families</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  AR/VR Visualization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">See your board as a living 3D artwork</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Educational Collaborations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Cultural institutions or heritage museums partnerships</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Vision Statement / Pernyataan Visi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center text-muted-foreground italic">
                QuestLog reimagines personal growth as cultural play — connecting reflection, AI, and heritage into one
                universal language of self-discovery.
              </p>
              <p className="text-base text-center text-muted-foreground mt-4">
                QuestLog membayangkan kembali pertumbuhan pribadi sebagai permainan budaya — menghubungkan refleksi, AI,
                dan warisan menjadi satu bahasa universal penemuan diri.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>QUESTLOG — Life as a Local Game © 2025</p>
          <p className="mt-2">Part of Green Industrial Innovation Platform Indonesia</p>
        </div>
      </footer>
    </div>
  )
}
