import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { TranslationsProvider } from "@/lib/i18n/translations-provider"
import { SiteNav } from "@/components/site-nav"
import { FunnelPromoBanner } from "@/components/funnel-promo-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const getSiteUrl = () => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL
  const fallbackUrl = "https://green-industrial-innovation.vercel.app"

  // Return fallback if env var is not set or empty
  if (!envUrl || envUrl.trim() === "") {
    return fallbackUrl
  }

  // Validate URL format
  try {
    new URL(envUrl)
    return envUrl
  } catch {
    return fallbackUrl
  }
}

const getMetadataBase = () => {
  try {
    return new URL(getSiteUrl())
  } catch (error) {
    console.error("[v0] Failed to create metadataBase URL:", error)
    return undefined
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Impax Cort3x | AI-Powered Innovation Accelerator with Expert Coaching",
    template: "%s | Impax Cort3x",
  },
  description:
    "Transform innovation with AI-powered research insights and expert coaching. Get comprehensive market intelligence in weeks, then work with coaches who challenge your thinking and guide you through structured innovation. Accelerate from concept to market launch.",
  keywords: [
    "AI innovation research",
    "expert innovation coaching",
    "market intelligence platform",
    "AI-powered insights",
    "guided innovation process",
    "innovation accelerator",
    "structured innovation methodology",
    "research-driven innovation",
    "expert mentorship",
    "challenging innovation coaching",
    "green innovation platform",
    "market research AI",
    "strategic innovation guidance",
    "Indonesia carbon credits",
    "kredit karbon Indonesia",
    "heritage restoration Indonesia",
    "restorasi warisan budaya",
    "VM0047 methodology",
    "Nusantara Code",
    "Royal Pop Indonesia",
    "green carbon Indonesia",
    "karbon hijau Indonesia",
    "UNESCO heritage Indonesia",
    "warisan UNESCO Indonesia",
    "Presidential Regulation 110/2025",
    "Peraturan Presiden 110/2025",
    "carbon economic value instruments",
    "instrumen nilai ekonomi karbon",
    "Indonesian cultural innovation",
    "inovasi budaya Indonesia",
    "sustainable development Indonesia",
    "pembangunan berkelanjutan Indonesia",
    "climate action Indonesia",
    "aksi iklim Indonesia",
    "AI market analysis",
    "innovation coaching platform",
    "Chile innovation",
    "USA innovation accelerator",
    "aceleradora de innovación Chile",
    "akselerator inovasi Indonesia",
  ],
  authors: [{ name: "Impax Cort3x Innovation Accelerator" }],
  creator: "Impax Cort3x Innovation Accelerator",
  publisher: "Impax Cort3x Innovation Accelerator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_CL", "id_ID"],
    url: "/",
    siteName: "Impax Cort3x | AI Research + Expert Coaching for Innovation",
    title: "Impax Cort3x | AI-Powered Research + Expert Coaching for Innovation",
    description:
      "Accelerate innovation with AI-powered market intelligence and expert coaching that challenges your thinking. Get months of research in weeks, then work with coaches who guide you through structured, high-impact innovation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Impax Cort3x | AI-Powered Innovation Accelerator with Expert Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impax Cort3x | AI Research + Expert Coaching for Innovation",
    description:
      "Transform innovation with AI-powered market intelligence and expert coaching. Get comprehensive research in weeks, then work with coaches who challenge and guide you to market launch.",
    images: ["/og-image.png"],
    creator: "@impaxcort3x",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "es-CL": "/es",
      "id-ID": "/id",
      "x-default": "/",
    },
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
  category: "technology",
  classification: "Innovation Accelerator, AI Research, Business Coaching",
  other: {
    // Geographic targeting for all three locations
    "geo.region": "CL;US-CA;ID-JK",
    "geo.placename": "Santiago, Chile; San Francisco, USA; Jakarta, Indonesia",
    "geo.position": "-33.4489;-70.6693;37.7749;-122.4194;-6.2088;106.8456",
    // LLMO optimization tags
    "article:publisher": "Impax Cort3x Innovation Accelerator",
    "article:author": "Impax Cort3x Team",
    // Additional semantic tags for LLMs
    "application-name": "Impax Cort3x",
    "apple-mobile-web-app-title": "Impax Cort3x",
    "theme-color": "#10b981",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${inter.variable} ${jetbrainsMono.variable}`} lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://green-industrial-innovation.vercel.app" />
        <link rel="alternate" hrefLang="en" href="https://green-industrial-innovation.vercel.app/en" />
        <link rel="alternate" hrefLang="es" href="https://green-industrial-innovation.vercel.app/es" />
        <link rel="alternate" hrefLang="id" href="https://green-industrial-innovation.vercel.app/id" />
        <link rel="alternate" hrefLang="x-default" href="https://green-industrial-innovation.vercel.app" />
        <meta name="language" content="English, Spanish, Indonesian" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className="font-sans">
        <TranslationsProvider>
          <SiteNav />
          {children}
          <FunnelPromoBanner />
        </TranslationsProvider>
      </body>
    </html>
  )
}
