"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, Shield, Scale } from "lucide-react"
import Link from "next/link"

export default function TermsOfServiceClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-muted/10">
        <div className="container mx-auto px-4 py-12">
          <Link
            href="/docs"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Documentation
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 rounded text-xs font-mono font-medium bg-muted text-muted-foreground">
                  DOC-005
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  Published
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl">
            Agreement governing the use of the Impax Cort3x platform and its AI-powered services.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          {/* Main Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <div className="p-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg mb-8 not-prose">
              <h4 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Legal Agreement
              </h4>
              <p className="text-amber-800 dark:text-amber-200">
                By accessing or using Impax Cort3x, you agree to be bound by these Terms. If you disagree with any part
                of the terms, you may not access the service.
              </p>
            </div>

            <h2>1. Definitions</h2>
            <p>
              <strong>"Platform"</strong> refers to Impax Cort3x, including its AI agents, document processing systems,
              and web interface.
            </p>
            <p>
              <strong>"AI Agents"</strong> refers to the automated systems (FeasibilityAgent, etc.) that process data
              and provide recommendations.
            </p>

            <h2>2. Use of AI Services</h2>
            <p>
              Our platform utilizes advanced Artificial Intelligence to analyze data and generate feasibility reports.
              Users acknowledge that:
            </p>
            <ul>
              <li>AI predictions are probabilistic and should not be the sole basis for financial decisions.</li>
              <li>Outputs may vary based on input data quality.</li>
              <li>We do not guarantee 100% accuracy of AI-generated insights.</li>
            </ul>

            <h2>3. User Accounts</h2>
            <p>
              When you create an account with us, you must provide us information that is accurate, complete, and
              current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate
              termination of your account on our Service.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features and functionality are
              and will remain the exclusive property of Impax Cort3x and its licensors.
            </p>

            <h2>5. Data Privacy</h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to the
              terms of the Privacy Policy.
            </p>

            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any
              reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall Impax Cort3x, nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or punitive damages, including without
              limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>

            <h2>8. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-muted-foreground">Last updated: January 23, 2025</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card border rounded-lg p-6 sticky top-24">
              <h3 className="font-semibold mb-4">Document Info</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Version</span>
                  <span className="font-medium">1.0.0</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Last Updated</span>
                  <span className="font-medium">Jan 23, 2025</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Effective Date</span>
                  <span className="font-medium">Jan 23, 2025</span>
                </div>
                <div className="pt-4">
                  <Button
                    className="w-full bg-transparent"
                    variant="outline"
                    onClick={() => console.log("Download PDF")}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
