import type { ReactNode } from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { WorkspaceShell } from "@/components/workspace-shell"

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login?next=/dashboard")
  }

  return <WorkspaceShell userEmail={user.email}>{children}</WorkspaceShell>
}
