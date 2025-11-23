import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://impax-cort3x.vercel.app"

  // Define all static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          es: `${baseUrl}/es`,
          id: `${baseUrl}/id`,
        },
      },
    },
    {
      url: `${baseUrl}/location`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en/location`,
          es: `${baseUrl}/es/location`,
          id: `${baseUrl}/id/location`,
        },
      },
    },
    {
      url: `${baseUrl}/initiatives`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/en/initiatives`,
          es: `${baseUrl}/es/initiatives`,
          id: `${baseUrl}/id/initiatives`,
        },
      },
    },
    "",
    "/features",
    "/journey",
    "/about",
    "/docs",
    "/login",
    "/signup",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const docs = [
    "/docs/whitepaper",
    "/docs/one-pager",
    "/docs/privacy-security",
    "/docs/agents-summary",
    "/docs/terms-of-service",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [...routes, ...docs]
}
