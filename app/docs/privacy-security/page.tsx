import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Lock, Database, UserCheck, FileCheck, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "Privacy & Data Security - How We Protect Your Innovation",
  description: "Comprehensive guide to data privacy, AI processing, and security measures at Impax Cort3x",
}

export default function PrivacySecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-600">Privacy & Data Security</Badge>
            <h1 className="text-5xl font-bold mb-4 text-balance">Your Data, Your Control</h1>
            <p className="text-xl text-gray-600 mb-6 text-balance">
              Complete transparency on how we handle, process, and protect your innovation projects
            </p>
          </div>

          {/* Key Promise */}
          <Card className="p-8 mb-8 border-2 border-blue-200 bg-blue-50">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-blue-900">Our Privacy Commitment</h3>
                <p className="text-blue-800 leading-relaxed text-lg">
                  Your project data is <strong>never used for AI model training</strong>, never shared with third
                  parties without consent, and processed with enterprise-grade security. You own your data, always.
                </p>
              </div>
            </div>
          </Card>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

            {/* Question 1 */}
            <Card className="p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    Is my project data sent directly to OpenAI? How do you handle privacy?
                  </h3>
                  <div className="prose prose-blue max-w-none text-gray-700">
                    <p className="mb-3">
                      <strong>Yes, with enterprise-grade protection.</strong> When our AI analyzes your project, the
                      data is sent to AI providers (OpenAI, Anthropic, or other enterprise AI services) via encrypted
                      HTTPS connections. However, we use <strong>enterprise API agreements</strong> that include strict
                      data protection clauses:
                    </p>
                    <ul className="space-y-2 mb-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Zero Data Retention Policy:</strong> AI providers do NOT store your data beyond the
                          analysis session
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>No Model Training:</strong> Your project details are explicitly excluded from being
                          used to train or improve AI models
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Ephemeral Processing:</strong> Data is analyzed and immediately discarded (typically
                          deleted within 30 days, often immediately)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Encryption in Transit:</strong> All data transfers use TLS 1.3 encryption
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Question 2 */}
            <Card className="p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">
                    If I send my own data, is it used for model training or just processed temporarily?
                  </h3>
                  <div className="prose prose-green max-w-none text-gray-700">
                    <p className="mb-3">
                      <strong>Processed temporarily only. Never for training.</strong>
                    </p>
                    <p className="mb-3">
                      When you submit project information, documents, or additional context, this data flows through
                      two systems:
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3">
                      <h4 className="font-bold mb-2 text-green-900">1. Our Secure Database (Supabase)</h4>
                      <ul className="space-y-1 text-sm text-green-800">
                        <li>• Your data is stored with Row-Level Security (RLS) policies</li>
                        <li>• Only YOU and authorized Cort3x analysts can access your projects</li>
                        <li>• Encrypted at rest using AES-256 encryption</li>
                        <li>• You can request deletion at any time</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-3">
                      <h4 className="font-bold mb-2 text-blue-900">2. AI Processing (Temporary)</h4>
                      <ul className="space-y-1 text-sm text-blue-800">
                        <li>• Data is sent to AI providers ONLY during analysis</li>
                        <li>• Processed in-memory and immediately discarded</li>
                        <li>• NOT retained in AI provider systems</li>
                        <li>• NOT used to train or improve AI models</li>
                      </ul>
                    </div>
                    <p className="font-semibold text-green-700">
                      Bottom line: Your data is used only to generate YOUR analysis results, then immediately deleted
                      from AI systems.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Question 3 */}
            <Card className="p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="h-6 w-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Who can see my project data?</h3>
                  <div className="prose prose-amber max-w-none text-gray-700">
                    <p className="mb-3">
                      <strong>Only you and your assigned Cort3x team.</strong>
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Your Account</div>
                          <div className="text-sm text-gray-600">Full access to all your project data and reports</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Assigned Analysts (Professional/Enterprise Tiers Only)</div>
                          <div className="text-sm text-gray-600">
                            Expert coaches who help develop your documentation and strategy
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold">Platform Administrators (Limited Access)</div>
                          <div className="text-sm text-gray-600">
                            Technical support staff for troubleshooting only, under strict confidentiality agreements
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 font-semibold text-amber-700">
                      We NEVER share your data with third parties for marketing, sales, or any other purpose without
                      your explicit written consent.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Question 4 */}
            <Card className="p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileCheck className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">What about confidential or proprietary information?</h3>
                  <div className="prose prose-red max-w-none text-gray-700">
                    <p className="mb-3">
                      <strong>Enterprise-grade confidentiality protection.</strong>
                    </p>
                    <ul className="space-y-2 mb-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          All Cort3x team members sign <strong>Non-Disclosure Agreements (NDAs)</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          We can provide <strong>custom NDAs</strong> for Professional and Enterprise clients
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          IP rights remain 100% with you - we claim no ownership over your innovation
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          Data isolation: Each client's data is completely separate in our database with RLS policies
                        </span>
                      </li>
                    </ul>
                    <p className="font-semibold text-red-700">
                      For highly sensitive projects, we recommend upgrading to Professional or Enterprise tiers where
                      you get dedicated support with enhanced confidentiality measures.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Question 5 */}
            <Card className="p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Can I delete my data?</h3>
                  <div className="prose prose-indigo max-w-none text-gray-700">
                    <p className="mb-3">
                      <strong>Yes, absolutely. You have full control.</strong>
                    </p>
                    <p className="mb-3">Under GDPR, CCPA, and other privacy regulations, you have the right to:</p>
                    <ul className="space-y-2 mb-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Access:</strong> Download all your project data at any time
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Rectification:</strong> Correct any inaccurate information
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Deletion:</strong> Request complete removal of your data from our systems (within 30
                          days)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Portability:</strong> Export your data in machine-readable formats
                        </span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded p-3">
                      To exercise these rights, contact us at{" "}
                      <a href="mailto:privacy@impaxcort3x.com" className="text-indigo-600 hover:underline">
                        privacy@impaxcort3x.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Security Architecture */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Security Architecture</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-blue-200">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-blue-600" />
                  Data Encryption
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• TLS 1.3 encryption in transit</li>
                  <li>• AES-256 encryption at rest</li>
                  <li>• Encrypted database backups</li>
                  <li>• Secure key management (Vercel)</li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-green-200">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  Access Control
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Row-Level Security (RLS) policies</li>
                  <li>• Multi-factor authentication (MFA)</li>
                  <li>• Role-based access control (RBAC)</li>
                  <li>• Audit logging of all data access</li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-purple-200">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Database className="h-5 w-5 text-purple-600" />
                  Infrastructure
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• SOC 2 Type II compliant hosting (Vercel)</li>
                  <li>• ISO 27001 certified database (Supabase)</li>
                  <li>• Regular security audits</li>
                  <li>• Automated vulnerability scanning</li>
                </ul>
              </Card>

              <Card className="p-6 border-2 border-amber-200">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-amber-600" />
                  Compliance
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• GDPR compliant (EU)</li>
                  <li>• CCPA compliant (California)</li>
                  <li>• PIPEDA compliant (Canada)</li>
                  <li>• Regular compliance audits</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Data Flow Diagram */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">How Your Data Flows</h2>
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-bold mb-1">You Submit Project Data</div>
                    <div className="text-sm text-gray-700">
                      Data encrypted and sent to our secure Supabase database with RLS protection
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-bold mb-1">AI Analysis Initiated</div>
                    <div className="text-sm text-gray-700">
                      Your data is sent via encrypted API to AI provider (OpenAI/Anthropic) for analysis only
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-bold mb-1">Analysis Results Generated</div>
                    <div className="text-sm text-gray-700">
                      AI processes data in-memory, generates scoring and insights, returns results to our platform
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <div className="font-bold mb-1">Data Immediately Deleted from AI</div>
                    <div className="text-sm text-gray-700">
                      Your project data is automatically purged from AI provider systems (within 30 days, often
                      immediately)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    5
                  </div>
                  <div>
                    <div className="font-bold mb-1">Results Delivered to You</div>
                    <div className="text-sm text-gray-700">
                      Reports, scores, and insights stored securely in your account with encryption
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Trust Badges */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Industry-Leading Security Partners</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <Card className="p-6">
                <div className="font-bold text-lg mb-2">Vercel</div>
                <div className="text-sm text-gray-600 mb-2">SOC 2 Type II Certified</div>
                <Badge variant="outline" className="bg-blue-50">
                  Hosting & Infrastructure
                </Badge>
              </Card>
              <Card className="p-6">
                <div className="font-bold text-lg mb-2">Supabase</div>
                <div className="text-sm text-gray-600 mb-2">ISO 27001 Certified</div>
                <Badge variant="outline" className="bg-green-50">
                  Database & Auth
                </Badge>
              </Card>
              <Card className="p-6">
                <div className="font-bold text-lg mb-2">OpenAI / Anthropic</div>
                <div className="text-sm text-gray-600 mb-2">Enterprise API Agreements</div>
                <Badge variant="outline" className="bg-purple-50">
                  AI Processing
                </Badge>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <Card className="p-8 bg-gradient-to-r from-primary to-primary/80 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Have More Questions?</h2>
            <p className="text-white/90 mb-6 text-lg">
              Our team is here to address any privacy or security concerns
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/contact">
                  Contact Security Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/docs">View All Documentation</Link>
              </Button>
            </div>
          </Card>

          {/* Footer Contact */}
          <div className="text-center text-gray-500 text-sm mt-8 pt-6 border-t">
            <p className="mb-2">For privacy inquiries:</p>
            <p>
              <a href="mailto:privacy@impaxcort3x.com" className="text-primary hover:underline font-medium">
                privacy@impaxcort3x.com
              </a>
            </p>
            <p className="mt-4">Last updated: December 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}
