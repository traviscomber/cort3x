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
    alternateName: ["Cort3x Innovation Accelerator by n3uralia", "Cort3x", "Cortex"],
    url: "https://green-industrial-innovation.vercel.app",
    logo: "https://green-industrial-innovation.vercel.app/logo.png",
    description:
      "Cort3x is an AI-assisted strategic innovation platform that combines artificial intelligence with expert human coaching to support decision-making, market analysis, and execution of complex projects. The platform serves enterprises, governments, startups, and innovation labs across LATAM, ASEAN, and emerging markets.",
    foundingDate: "2024",
    slogan: "AI-Assisted Strategic Innovation | Expert Coaching + AI Intelligence | Powered by n3uralia",
    knowsAbout: [
      "Artificial Intelligence",
      "Strategic Innovation",
      "Innovation Acceleration",
      "Market Research",
      "Expert Coaching",
      "Decision-Making Support",
      "AI Strategy Platform",
      "Innovation Intelligence",
      "Execution-Focused Innovation",
      "Hybrid AI Systems",
      "Green Technology",
      "Sustainable Development",
      "Carbon Credits",
      "Cultural Heritage Preservation",
      "Climate Action",
      "LATAM Innovation",
      "ASEAN Innovation",
      "Strategic Analysis",
      "Risk Evaluation",
      "Social Impact Projects",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strategic Analysis and Complex Decision-Making",
          description:
            "AI-powered strategic analysis combined with expert coaching for complex organizational decisions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Market Research and Opportunity Detection",
          description: "Deep market intelligence and opportunity identification using AI and human expertise",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Organizational Innovation and Business Model Design",
          description: "Innovation consulting and new business model development with AI support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Risk Evaluation and Market Entry Strategies",
          description: "Scenario simulation and risk assessment for market entry decisions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Idea Acceleration from Concept to Execution",
          description: "End-to-end innovation acceleration combining AI research with expert guidance",
        },
      },
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
      {
        "@type": "Place",
        name: "Latin America (LATAM)",
      },
      {
        "@type": "Place",
        name: "Southeast Asia (ASEAN)",
      },
    ],
    audience: [
      {
        "@type": "Audience",
        audienceType: "Enterprises and Corporations",
      },
      {
        "@type": "Audience",
        audienceType: "Government and Public Institutions",
      },
      {
        "@type": "Audience",
        audienceType: "Startups and Scale-ups",
      },
      {
        "@type": "Audience",
        audienceType: "Innovation Laboratories",
      },
      {
        "@type": "Audience",
        audienceType: "Cultural and Creative Projects",
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
    serviceType: "AI-Assisted Strategic Innovation",
    provider: {
      "@id": "https://green-industrial-innovation.vercel.app/#organization",
    },
    name: "AI-Powered Strategic Innovation with Expert Coaching",
    description:
      "Comprehensive strategic innovation platform combining AI-powered analysis with expert human coaching. Cort3x helps organizations analyze complex contexts, make better decisions, and transform ideas into executable projects. The platform serves enterprises, governments, and startups across LATAM and ASEAN.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cort3x Service Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Analysis Capabilities",
            description:
              "Rapid analysis of large information volumes, pattern and opportunity detection, strategic scenario simulation, research and planning acceleration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Human Expert Layer",
            description:
              "Strategic coaches, innovation and technology experts, local context expertise, critical accompaniment to validate decisions",
          },
        },
      ],
    },
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Cort3x?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cort3x is an AI-assisted strategic innovation platform that combines artificial intelligence with expert human coaching to support decision-making, market analysis, and execution of complex projects.",
        },
      },
      {
        "@type": "Question",
        name: "What does Cort3x do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cort3x provides strategic analysis and complex decision-making, market research and opportunity detection, organizational innovation and business model design, risk evaluation and market entry strategies, and idea acceleration from concept to execution.",
        },
      },
      {
        "@type": "Question",
        name: "How does Cort3x use AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cort3x uses AI to rapidly analyze large volumes of information, detect non-obvious patterns, risks and opportunities, simulate strategic scenarios, and accelerate research and planning processes. The AI amplifies human thinking rather than replacing it.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Cort3x different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike purely automated tools, Cort3x incorporates strategic coaches, innovation and technology experts with local context knowledge, and critical accompaniment to validate ideas and ensure decisions have real impact. It is a hybrid strategic intelligence system, not just a chatbot or software.",
        },
      },
      {
        "@type": "Question",
        name: "Who is Cort3x for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cort3x is designed for enterprises and corporations, governments and public institutions, startups and scale-ups, innovation laboratories, cultural and creative projects, and teams operating in LATAM, ASEAN, and emerging markets.",
        },
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
