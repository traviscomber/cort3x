"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createClient } from "@/lib/supabase/client"
import { Loader2, Mail, Lock, User, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroAuthCard() {
  const [signInEmail, setSignInEmail] = useState("")
  const [signInPassword, setSignInPassword] = useState("")
  const [signUpEmail, setSignUpEmail] = useState("")
  const [signUpPassword, setSignUpPassword] = useState("")
  const [signUpName, setSignUpName] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const supabase = createClient()

      const { data, error } = await supabase.auth.signInWithPassword({
        email: signInEmail,
        password: signInPassword,
      })

      if (error) {
        if (error.message === "Invalid login credentials") {
          setError("Account not found or incorrect password. Don't have an account yet?")
        } else {
          setError(error.message)
        }
        setLoading(false)
        return
      }

      if (data.user) {
        window.location.href = "/dashboard"
      }
    } catch (err) {
      setError("An unexpected error occurred")
      setLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const supabase = createClient()

      const { data, error } = await supabase.auth.signUp({
        email: signUpEmail,
        password: signUpPassword,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/projects`,
          data: {
            name: signUpName,
          },
        },
      })

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      if (data.user) {
        setSuccess("Account created! Please check your email to verify your account.")
        setSignUpEmail("")
        setSignUpPassword("")
        setSignUpName("")
      }
    } catch (err) {
      setError("An unexpected error occurred")
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="bg-white/90 backdrop-blur-lg border-2 border-primary/20 shadow-2xl">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center shadow-lg">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl text-gray-900">Get Started</CardTitle>
        <CardDescription className="text-gray-600">Sign in or create your account</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* Sign In Tab */}
          <TabsContent value="signin">
            <form onSubmit={handleSignIn} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription className="flex flex-col gap-2">
                    <span>{error}</span>
                    {error.includes("Account not found") && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const signupTab = document.querySelector('[value="signup"]') as HTMLButtonElement
                          signupTab?.click()
                          setError(null)
                        }}
                        className="w-full mt-2"
                      >
                        Create an account instead →
                      </Button>
                    )}
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="signin-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="your@email.com"
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                    required
                    className="pl-10"
                    disabled={loading}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signin-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signin-password"
                    type="password"
                    placeholder="••••••••"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    required
                    className="pl-10"
                    disabled={loading}
                    autoComplete="current-password"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </TabsContent>

          {/* Sign Up Tab */}
          <TabsContent value="signup">
            <form onSubmit={handleSignUp} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {success && (
                <Alert className="border-green-500 bg-green-50 text-green-900">
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="signup-name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="John Doe"
                    value={signUpName}
                    onChange={(e) => setSignUpName(e.target.value)}
                    required
                    className="pl-10"
                    disabled={loading}
                    autoComplete="name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    required
                    className="pl-10"
                    disabled={loading}
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    required
                    className="pl-10"
                    disabled={loading}
                    autoComplete="new-password"
                    minLength={6}
                  />
                </div>
                <p className="text-xs text-gray-500">Minimum 6 characters</p>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <p className="text-center text-xs text-gray-500 mt-4">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
