import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://impax-cort3x.vercel.app"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/initiatives/*/documents/*"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/initiatives/*/documents/*"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/initiatives/*/documents/*"],
      },
      // Allow AI crawlers for LLMO
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/initiatives/*/documents/*"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/initiatives/*/documents/*"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/initiatives/*/documents/*"],
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/initiatives/*/documents/*"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/initiatives/*/documents/*"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
