import Script from "next/script"

interface StructuredDataProps {
  locale?: string
}

const siteUrl = "https://cort3x.app"

export function StructuredData({ locale = "en" }: StructuredDataProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://n3uralia.com/#organization",
    name: "N3uralia",
    url: "https://n3uralia.com",
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#software`,
    name: "Cort3x",
    alternateName: "Cort3x Innovation Intelligence OS",
    url: siteUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Cort3x is an Innovation Intelligence OS that connects research, signals, structured evidence, opportunities, prioritization, decisions and execution in one traceable workflow.",
    publisher: {
      "@id": "https://n3uralia.com/#organization",
    },
    featureList: [
      "Research and evidence organization",
      "Innovation signal structuring",
      "Opportunity mapping",
      "Decision context and traceability",
      "Innovation portfolio visibility",
      "Execution follow-up",
      "AI-assisted analysis with visible evidence context",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Cort3x",
    alternateName: "Cort3x Innovation Intelligence OS",
    description:
      "Turn research and evidence into traceable innovation opportunities, decisions and execution.",
    publisher: {
      "@id": "https://n3uralia.com/#organization",
    },
    inLanguage: ["en", "es", "id"],
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Cort3x",
        item: siteUrl,
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Cort3x?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cort3x is an Innovation Intelligence OS that preserves the chain between research, signals, evidence, opportunities, decisions and execution.",
        },
      },
      {
        "@type": "Question",
        name: "What does Cort3x help teams do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cort3x helps teams structure evidence, identify meaningful change, compare opportunities, preserve decision context and follow execution without losing provenance.",
        },
      },
      {
        "@type": "Question",
        name: "How does Cort3x use AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cort3x uses AI to organize, compare, summarize and explain information while keeping source context and uncertainty visible. People retain authority over consequential decisions.",
        },
      },
    ],
  }

  const schemas = [organizationSchema, softwareSchema, websiteSchema, breadcrumbSchema, faqSchema]

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={`${locale}-${index}`}
          id={`cort3x-structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
