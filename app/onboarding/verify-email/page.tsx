import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Mail, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Verify Your Email | Impax Cort3x",
  description: "Check your email to verify your account and access your dashboard",
}

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F1E8] to-white flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Check Your Email</CardTitle>
          <CardDescription>We've sent you a verification link</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-[#F5F1E8] p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#8B7355]" />
              Next Steps:
            </h3>
            <ol className="space-y-2 text-sm text-muted-foreground ml-7">
              <li>1. Check your email inbox</li>
              <li>2. Click the verification link we sent you</li>
              <li>3. Return to sign in and access your dashboard</li>
              <li>4. Your project submission will be processed within 24 hours</li>
            </ol>
          </div>

          <div className="space-y-3">
            <Link href="/auth/login" className="block">
              <Button className="w-full bg-[#8B7355] hover:bg-[#6D5940]">
                Go to Sign In
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <p className="text-xs text-center text-muted-foreground">
              Didn't receive the email? Check your spam folder or contact support
            </p>
          </div>

          <div className="border-t pt-4">
            <div className="bg-green-50 p-3 rounded-lg border border-green-200 mb-3">
              <p className="text-xs text-green-800">
                <strong>Your project is submitted!</strong> You'll receive your FREE feasibility audit within 24 hours.
                No payment required to get started.
              </p>
            </div>

            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-blue-800">
                  <strong>Want faster results?</strong> Upgrade to priority review ($100) or access full documentation
                  services ($1,000) from your dashboard after signing in.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
