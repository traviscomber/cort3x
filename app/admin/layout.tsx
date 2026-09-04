import type { ReactNode } from "react"
import { redirect } from "next/navigation"
import { AuthorizationError, requireAdmin } from "@/lib/auth/admin"

export const dynamic = "force-dynamic"

export default async function AdminLayout({ children }: { children: ReactNode }) {
  try {
    await requireAdmin()
  } catch (error) {
    if (error instanceof AuthorizationError && error.status === 403) {
      redirect("/dashboard")
    }

    redirect("/auth/login")
  }

  return children
}
