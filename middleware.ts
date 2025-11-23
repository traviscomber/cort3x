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

  const isPublicPath = publicPaths.some(
    (path) =>
      request.nextUrl.pathname === path ||
      request.nextUrl.pathname.startsWith("/api/") ||
      request.nextUrl.pathname.startsWith("/_next/"),
  )

  if (isPublicPath) {
    return NextResponse.next()
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next()
  }

  let supabaseResponse = NextResponse.next({
    request,
  })

  try {
    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
        },
      },
    })

    const {
      data: { user },
    } = await supabase.auth.getUser()

    // Redirect to home if not authenticated and accessing protected routes
    if (
      !user &&
      (request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname.startsWith("/projects"))
    ) {
      const redirectUrl = new URL("/", request.url)
      return NextResponse.redirect(redirectUrl)
    }

    return supabaseResponse
  } catch (error) {
    return NextResponse.next()
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
