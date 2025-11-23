import { createServerClient as createSupabaseServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

/**
 * Server-side Supabase client for use in Server Components, Server Actions, and Route Handlers.
 * Creates a new client for each request to ensure proper cookie handling.
 */
export async function createClient() {
  const cookieStore = await cookies()

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.warn("[v0] Supabase environment variables not configured. Using mock client.")
    return createMockClient()
  }

  return createSupabaseServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The "setAll" method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
}

function createMockClient() {
  // Create a chainable query builder that returns itself for all methods
  const createQueryBuilder = () => {
    const builder = {
      select: function () {
        return this
      },
      insert: function () {
        return this
      },
      update: function () {
        return this
      },
      delete: function () {
        return this
      },
      eq: function () {
        return this
      },
      neq: function () {
        return this
      },
      gt: function () {
        return this
      },
      gte: function () {
        return this
      },
      lt: function () {
        return this
      },
      lte: function () {
        return this
      },
      like: function () {
        return this
      },
      ilike: function () {
        return this
      },
      is: function () {
        return this
      },
      in: function () {
        return this
      },
      contains: function () {
        return this
      },
      containedBy: function () {
        return this
      },
      rangeGt: function () {
        return this
      },
      rangeGte: function () {
        return this
      },
      rangeLt: function () {
        return this
      },
      rangeLte: function () {
        return this
      },
      rangeAdjacent: function () {
        return this
      },
      overlaps: function () {
        return this
      },
      textSearch: function () {
        return this
      },
      match: function () {
        return this
      },
      not: function () {
        return this
      },
      or: function () {
        return this
      },
      filter: function () {
        return this
      },
      order: function () {
        return this
      },
      limit: function () {
        return this
      },
      range: function () {
        return this
      },
      abortSignal: function () {
        return this
      },
      single: () => Promise.resolve({ data: null, error: null }),
      maybeSingle: () => Promise.resolve({ data: null, error: null }),
      then: (resolve: any) => {
        // Make the builder thenable so it can be awaited
        return resolve({ data: null, error: null })
      },
      catch: function (reject: any) {
        return this
      },
    }
    return builder
  }

  return {
    from: () => createQueryBuilder(),
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
      signInWithPassword: async () => ({ data: null, error: new Error("Supabase not configured") }),
      signUp: async () => ({ data: null, error: new Error("Supabase not configured") }),
      signOut: async () => ({ error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
    },
    rpc: () => createQueryBuilder(),
    storage: {
      from: () => ({
        upload: async () => ({ data: null, error: new Error("Supabase not configured") }),
        download: async () => ({ data: null, error: new Error("Supabase not configured") }),
        list: async () => ({ data: null, error: new Error("Supabase not configured") }),
        remove: async () => ({ data: null, error: new Error("Supabase not configured") }),
        getPublicUrl: () => ({ data: { publicUrl: "" } }),
      }),
    },
  } as any
}

export { createClient as createServerClient }
