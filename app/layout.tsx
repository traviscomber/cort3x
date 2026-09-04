import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans_Condensed, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import "./cort3x-design.css"
import { SiteNav } from "@/components/site-nav"
import { logger } from "@/lib/logger"
import { ErrorBoundary } from "@/components/error-boundary"
import { TranslationsProvider } from "@/lib/i18n/translations-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
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

  if (!envUrl || envUrl.trim() === "") {
    return fallbackUrl
  }

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
    logger.error("Failed to create metadataBase URL", error)
    return undefined
  }
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Cort3x | Innovation Intelligence OS",
    template: "%s | Cort3x",
  },
  description:
    "Cort3x is an Innovation Intelligence OS that connects research, evidence, signals, opportunities, decisions and execution in one traceable workflow.",
  keywords: [
    "innovation intelligence",
    "innovation operating system",
    "strategic research",
    "evidence management",
    "market intelligence",
    "technology intelligence",
    "opportunity mapping",
    "strategic decision support",
    "innovation portfolio",
    "AI research",
    "decision traceability",
    "innovation execution",
    "LATAM innovation",
    "ASEAN innovation",
  ],
  authors: [{ name: "Cort3x by n3uralia" }],
  creator: "n3uralia",
  publisher: "n3uralia",
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
    siteName: "Cort3x | Innovation Intelligence OS",
    title: "Cort3x | Innovation Intelligence OS",
    description:
      "Turn research into structured evidence, opportunities, decisions and execution with a persistent innovation intelligence workflow.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cort3x Innovation Intelligence OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cort3x | Innovation Intelligence OS",
    description:
      "Connect research, evidence, opportunities, decisions and execution in one traceable innovation intelligence workflow.",
    images: ["/og-image.png"],
    creator: "@n3uralia",
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
  },
  category: "technology",
  classification: "Innovation Intelligence Software",
  other: {
    "geo.region": "CL;US-CA;ID-JK",
    "geo.placename": "Santiago, Chile; San Francisco, USA; Jakarta, Indonesia",
    "geo.position": "-33.4489;-70.6693;37.7749;-122.4194;-6.2088;106.8456",
    "article:publisher": "Cort3x by n3uralia",
    "article:author": "Cort3x Team at n3uralia",
    "application-name": "Cort3x",
    "apple-mobile-web-app-title": "Cort3x",
    "theme-color": "#070A09",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${inter.variable} ${ibmPlexSansCondensed.variable} ${jetbrainsMono.variable} dark`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href={getSiteUrl()} />
        <link rel="alternate" hrefLang="en" href={`${getSiteUrl()}/en`} />
        <link rel="alternate" hrefLang="es" href={`${getSiteUrl()}/es`} />
        <link rel="alternate" hrefLang="id" href={`${getSiteUrl()}/id`} />
        <link rel="alternate" hrefLang="x-default" href={getSiteUrl()} />
        <meta name="language" content="English, Spanish, Indonesian" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className="font-sans antialiased">
        <TranslationsProvider>
          <ErrorBoundary>
            <SiteNav />
            {children}
          </ErrorBoundary>
        </TranslationsProvider>
      </body>
    </html>
  )
}
