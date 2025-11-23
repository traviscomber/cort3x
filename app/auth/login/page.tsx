import { LoginForm } from "@/components/auth/login-form"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login | Impax Cort3x",
  description: "Sign in to your Impax Cort3x account to track your innovation projects",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Impax Cort3x</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to access your innovation dashboard</p>
        </div>

        <LoginForm />

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-primary font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
