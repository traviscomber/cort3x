"use server"

import { createClient } from "@/lib/supabase/server"

type LoginResult =
  | { ok: true }
  | {
      ok: false
      error: string
    }

export async function signInWithPassword(email: string, password: string): Promise<LoginResult> {
  if (!email || !password) {
    return { ok: false, error: "Email and password are required." }
  }

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  })

  if (error) {
    return { ok: false, error: error.message }
  }

  return { ok: true }
}
