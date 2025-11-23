import { SignupForm } from "@/components/auth/signup-form"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up | Impax Cort3x",
  description: "Create your Impax Cort3x account to start tracking innovation projects",
}

export default function SignupPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Get Started</h1>
          <p className="text-gray-600">Create your account to start your innovation journey</p>
        </div>

        <SignupForm />

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
