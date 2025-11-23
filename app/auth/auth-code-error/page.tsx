import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function AuthCodeError() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-muted">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-destructive" />
            </div>
          </div>
          <CardTitle className="text-2xl">Authentication Error</CardTitle>
          <CardDescription>There was a problem confirming your email address</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            The confirmation link may have expired or already been used. Please try signing in or request a new
            confirmation email.
          </p>
          <div className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <Link href="/">Go to Homepage</Link>
            </Button>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
