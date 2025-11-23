import Script from "next/script"

interface StructuredDataProps {
  locale?: string
}

export function StructuredData({ locale = "en" }: StructuredDataProps) {
  // Organization Schema - Core business information for LLMO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://green-industrial-innovation.vercel.app/#organization",
    name: "Cort3x powered by n3uralia",
    alternateName: "Cort3x Innovation Accelerator by n3uralia",
    url: "https://green-industrial-innovation.vercel.app",
    logo: "https://green-industrial-innovation.vercel.app/logo.png",
    description:
      "AI-powered innovation accelerator combining deep market research with expert coaching to transform ideas into market-ready solutions across Chile, USA, and Indonesia. Powered by n3uralia (www.n3uralia.com).",
    foundingDate: "2024",
    slogan: "AI Research + Expert Coaching for Innovation | Powered by n3uralia",
    knowsAbout: [
      "Artificial Intelligence",
      "Innovation Acceleration",
      "Market Research",
      "Expert Coaching",
      "Green Technology",
      "Sustainable Development",
      "Carbon Credits",
      "Cultural Heritage Preservation",
      "Climate Action",
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "Chile",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "Indonesia",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        availableLanguage: ["English", "Spanish", "Indonesian"],
      },
    ],
    sameAs: [
      // Add social media profiles when available
    ],
  }

  // LocalBusiness Schema for Chile
  const chileLocationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://green-industrial-innovation.vercel.app/#chile",
    name: "Cort3x Chile powered by n3uralia",
    parentOrganization: {
      "@id": "https://green-industrial-innovation.vercel.app/#organization",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressRegion: "Santiago Metropolitan Region",
      addressLocality: "Santiago",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-33.4489",
      longitude: "-70.6693",
    },
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
  }

  // LocalBusiness Schema for USA
  const usaLocationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://green-industrial-innovation.vercel.app/#usa",
    name: "Cort3x USA powered by n3uralia",
    parentOrganization: {
      "@id": "https://green-industrial-innovation.vercel.app/#organization",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "California",
      addressLocality: "San Francisco",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.7749",
      longitude: "-122.4194",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
  }

  // LocalBusiness Schema for Indonesia
  const indonesiaLocationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://green-industrial-innovation.vercel.app/#indonesia",
    name: "Cort3x Indonesia powered by n3uralia",
    parentOrganization: {
      "@id": "https://green-industrial-innovation.vercel.app/#organization",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Jakarta",
      addressLocality: "Jakarta",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-6.2088",
      longitude: "106.8456",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
  }

  // Service Schema - What Cort3x offers
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://green-industrial-innovation.vercel.app/#service",
    serviceType: "Innovation Acceleration",
    provider: {
      "@id": "https://green-industrial-innovation.vercel.app/#organization",
    },
    name: "AI-Powered Innovation Acceleration with Expert Coaching",
    description:
      "Comprehensive innovation acceleration combining AI-powered market research with expert coaching to guide entrepreneurs and organizations from concept to market launch.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      availableAtOrFrom: [
        { "@id": "https://green-industrial-innovation.vercel.app/#chile" },
        { "@id": "https://green-industrial-innovation.vercel.app/#usa" },
        { "@id": "https://green-industrial-innovation.vercel.app/#indonesia" },
      ],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Chile",
      },
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "Indonesia",
      },
    ],
  }

  // WebSite Schema with SearchAction for LLMO
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://green-industrial-innovation.vercel.app/#website",
    url: "https://green-industrial-innovation.vercel.app",
    name: "Cort3x powered by n3uralia",
    description: "AI-Powered Innovation Accelerator with Expert Coaching | Powered by n3uralia (www.n3uralia.com)",
    publisher: {
      "@id": "https://green-industrial-innovation.vercel.app/#organization",
    },
    inLanguage: ["en", "es", "id"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://green-industrial-innovation.vercel.app/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  // BreadcrumbList Schema for navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://green-industrial-innovation.vercel.app",
      },
    ],
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="chile-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chileLocationSchema) }}
      />
      <Script
        id="usa-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(usaLocationSchema) }}
      />
      <Script
        id="indonesia-location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indonesiaLocationSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
