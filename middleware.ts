import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const publicPaths = [
    "/",
    "/docs",
    "/docs/whitepaper",
    "/docs/one-pager",
    "/docs/privacy-security",
    "/pricing",
    "/features",
    "/about",
    "/journey",
    "/services",
    "/onboarding",
    "/auth/callback",
    "/auth/login",
    "/auth/sign-up",
  ]

  const pathname = request.nextUrl.pathname
  const isPublicPath = publicPaths.some(
    (path) =>
      pathname === path || pathname.startsWith("/api/") || pathname.startsWith("/_next/"),
  )

  if (isPublicPath) {
    return NextResponse.next()
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next()
  }

  let supabaseResponse = NextResponse.next({ request })

  try {
    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
        },
      },
    })

    const {
      data: { user },
    } = await supabase.auth.getUser()

    const requiresAuthentication =
      pathname.startsWith("/dashboard") || pathname.startsWith("/projects") || pathname.startsWith("/admin")

    if (!user && requiresAuthentication) {
      const redirectUrl = new URL("/auth/login", request.url)
      redirectUrl.searchParams.set("next", pathname)
      return NextResponse.redirect(redirectUrl)
    }

    if (user && pathname.startsWith("/admin")) {
      const { data: profile, error: profileError } = await supabase
        .from("users")
        .select("role")
        .eq("id", user.id)
        .maybeSingle()

      const role = profile?.role ?? user.app_metadata?.role ?? user.user_metadata?.role

      if (profileError || role !== "admin") {
        return NextResponse.redirect(new URL("/dashboard", request.url))
      }
    }

    return supabaseResponse
  } catch (error) {
    if (pathname.startsWith("/admin")) {
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }

    return NextResponse.next()
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
