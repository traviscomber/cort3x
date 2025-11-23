import { createBrowserClient } from "@supabase/ssr"

let client: ReturnType<typeof createBrowserClient> | undefined

/**
 * Client-side Supabase client for use in Client Components.
 * Uses singleton pattern to prevent multiple instances.
 * Added storage key namespace to prevent GoTrue client conflicts
 */
export function createClient() {
  if (client) {
    return client
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Your project's URL and Key are required to create a Supabase client!\n\n" +
        "Check your Supabase project's API settings to find these values\n\n" +
        "https://supabase.com/dashboard/project/_/settings/api",
    )
  }

  client = createBrowserClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      storageKey: "impax-cort3x-auth",
      persistSession: true,
      detectSessionInUrl: true,
      flowType: "pkce",
    },
  })

  return client
}

export { createClient as createBrowserClient }
