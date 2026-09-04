import { createClient } from "@/lib/supabase/server"

export class AuthorizationError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = "AuthorizationError"
    this.status = status
  }
}

export async function requireAdmin() {
  const supabase = await createClient()
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    throw new AuthorizationError("Unauthorized", 401)
  }

  const { data: profile, error: profileError } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .maybeSingle()

  const role = profile?.role ?? user.app_metadata?.role ?? user.user_metadata?.role

  if (profileError || role !== "admin") {
    throw new AuthorizationError("Forbidden", 403)
  }

  return { supabase, user }
}
