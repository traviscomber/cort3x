export const metadata = {
  title: "Verde Fashion Partnership Proposal - Impax Cort3x",
  description:
    "Strategic partnership proposal for Verde contemporary menswear brand to join Impax Cort3x heritage preservation and carbon credit platform",
}

export default function VerdeFashionProposalPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Verde Fashion Partnership Proposal</h1>
          <p className="text-xl text-muted-foreground">
            Strategic Collaboration Framework: Heritage Fashion Meets Carbon Innovation
          </p>
          <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
            <span>Target: Verde Contemporary Menswear</span>
            <span>•</span>
            <span>Platform: Impax Cort3x</span>
            <span>•</span>
            <span>Published: November 11, 2025</span>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="mb-12 p-8 border rounded-lg bg-card">
          <h2 className="text-2xl font-bold mb-4">Executive Summary</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This proposal outlines a strategic partnership between <strong>Verde</strong> (contemporary Indonesian
            menswear brand) and <strong>Impax Cort3x</strong> (heritage preservation and carbon innovation platform) to
            create Indonesia's first fashion-driven cultural heritage preservation and carbon offset program.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm">Collections (Batik, Exclusive, Lifestyle)</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm">Retail Partners (Palace, Frank n Co, Adelle, Passion)</div>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">20%</div>
              <div className="text-sm">Revenue Share to Sultanates</div>
            </div>
          </div>
        </section>

        {/* About Verde */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Understanding Verde</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Brand Analysis</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Batik Collection:</strong> Traditional Indonesian batik integrated into contemporary
                    menswear - direct connection to cultural heritage
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Exclusive Collection:</strong> Formal and sporty designs appealing to professional
                    demographic
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Lifestyle Collection:</strong> Casual wear for modern Indonesian men
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong>Distribution:</strong> Premium fashion retailers and boutiques indicating high-end market
                    positioning
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg">
              <h4 className="font-semibold mb-2 text-amber-900 dark:text-amber-100">Strategic Fit</h4>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Verde's Batik Collection demonstrates existing commitment to Indonesian cultural heritage, making them
                an ideal partner for the Royal Pop Indonesia - National Heritage Atlas project. Their distribution
                through premium fashion boutiques positions them perfectly to reach high-net-worth individuals
                interested in heritage preservation and ESG initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Partnership Opportunities</h2>

          <div className="space-y-8">
            {/* Opportunity 1 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Heritage Fashion Line with Carbon Offset</h3>
                  <p className="text-muted-foreground">
                    Create limited edition Batik Collection in collaboration with the 4 Indonesian sultanates
                  </p>
                </div>
              </div>
              <div className="ml-14 space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Implementation:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Each sultanate designs exclusive batik patterns representing their regional heritage</li>
                    <li>
                      • Kesultanan Yogyakarta, Kesultanan Deli, Kesultanan Ternate, Kesultanan Kasepuhan collections
                    </li>
                    <li>• Every purchase includes 1 Royal Pop Indonesia figurine + carbon offset certificate</li>
                    <li>• 20% of revenue goes directly to sultanates for cultural preservation</li>
                  </ul>
                </div>
                <div className="p-4 bg-muted rounded">
                  <div className="text-sm font-semibold mb-2">Revenue Model per Item:</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Product Price:</div>
                    <div className="text-right font-mono">Rp 2,500,000</div>
                    <div>Carbon Offset (1 ton):</div>
                    <div className="text-right font-mono">Rp 250,000</div>
                    <div>Sultanate (20%):</div>
                    <div className="text-right font-mono">Rp 550,000</div>
                    <div>Verde Revenue:</div>
                    <div className="text-right font-mono">Rp 1,700,000</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunity 2 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">CSR Program: Fashion for Heritage Preservation</h3>
                  <p className="text-muted-foreground">
                    Position Verde as a leader in Indonesian cultural preservation through fashion
                  </p>
                </div>
              </div>
              <div className="ml-14 space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">CSR Benefits:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Annual sustainability report highlighting cultural heritage impact</li>
                    <li>• ESG compliance with measurable heritage preservation metrics</li>
                    <li>• Carbon neutral fashion brand certification through IDXCarbon integration</li>
                    <li>• Media coverage as Indonesia's first heritage-focused fashion brand</li>
                    <li>• Partnership with 4 Indonesian sultanates - unprecedented brand prestige</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Opportunity 3 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Retail Partner Integration</h3>
                  <p className="text-muted-foreground">
                    Leverage existing distribution network through premium fashion boutiques and retailers
                  </p>
                </div>
              </div>
              <div className="ml-14 space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Distribution Strategy:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • <strong>The Palace:</strong> Already running "Bangga BerNusantara" heritage campaign - perfect
                      alignment
                    </li>
                    <li>
                      • <strong>Frank n Co:</strong> Premium fashion positioning appeals to ESG-conscious consumers
                    </li>
                    <li>
                      • <strong>Adelle & Passion:</strong> Expand reach to affluent fashion demographics
                    </li>
                    <li>• In-store displays featuring Royal Pop figurines and carbon credit certificates</li>
                    <li>• QR codes linking to Impax Cort3x platform for transparency</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Opportunity 4 */}
            <div className="border rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Investment Opportunity</h3>
                  <p className="text-muted-foreground">
                    Verde as investor and strategic partner in Impax Cort3x platform
                  </p>
                </div>
              </div>
              <div className="ml-14 space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Investment Structure:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Equity stake in Impax Cort3x platform development</li>
                    <li>• Board representation ensuring fashion industry perspective</li>
                    <li>• Exclusive fashion partner status for heritage collections</li>
                    <li>• Revenue share from carbon credit sales through platform</li>
                    <li>• First-mover advantage as platform scales nationally</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Implementation Timeline</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-32 font-semibold text-primary flex-shrink-0">Month 1-2</div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Discovery & Design</h4>
                <p className="text-sm text-muted-foreground">
                  Initial meetings with 4 sultanates, batik pattern design workshops, product line development
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-32 font-semibold text-primary flex-shrink-0">Month 3-4</div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Production & Setup</h4>
                <p className="text-sm text-muted-foreground">
                  Manufacturing, carbon credit registration with IDXCarbon, platform integration, retail partner
                  training
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-32 font-semibold text-primary flex-shrink-0">Month 5</div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Launch Campaign</h4>
                <p className="text-sm text-muted-foreground">
                  Press conference with sultanates, retail displays, digital campaign, influencer partnerships
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-32 font-semibold text-primary flex-shrink-0">Month 6-12</div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Scale & Expand</h4>
                <p className="text-sm text-muted-foreground">
                  Performance review, collection expansion, additional sultanate partnerships, international
                  distribution
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Projections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Financial Projections (Year 1)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-4">Conservative Scenario</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Units Sold:</span>
                  <span className="font-mono">500 items</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Price:</span>
                  <span className="font-mono">Rp 2,500,000</span>
                </div>
                <div className="flex justify-between border-t pt-2 font-semibold">
                  <span>Total Revenue:</span>
                  <span className="font-mono">Rp 1.25B</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Verde Share (70%):</span>
                  <span className="font-mono">Rp 875M</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Sultanates (20%):</span>
                  <span className="font-mono">Rp 250M</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Carbon Offset (10%):</span>
                  <span className="font-mono">Rp 125M</span>
                </div>
              </div>
            </div>

            <div className="p-6 border rounded-lg bg-primary/5">
              <h3 className="font-semibold mb-4">Optimistic Scenario</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Units Sold:</span>
                  <span className="font-mono">2,000 items</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Price:</span>
                  <span className="font-mono">Rp 2,750,000</span>
                </div>
                <div className="flex justify-between border-t pt-2 font-semibold">
                  <span>Total Revenue:</span>
                  <span className="font-mono">Rp 5.5B</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Verde Share (70%):</span>
                  <span className="font-mono">Rp 3.85B</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Sultanates (20%):</span>
                  <span className="font-mono">Rp 1.1B</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Carbon Offset (10%):</span>
                  <span className="font-mono">Rp 550M</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why This Partnership Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">For Verde:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>First-mover advantage in heritage-fashion space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Premium brand positioning with sultanate partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>ESG credentials attracting institutional buyers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Media coverage and brand prestige</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Leverage existing Batik Collection expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Carbon neutral certification differentiator</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">For Impax Cort3x:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Established distribution through 4 premium retailers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Access to affluent consumer segment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Proven brand with existing cultural heritage focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Immediate revenue generation for platform development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Case study for future fashion brand partnerships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Physical products complement digital platform</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12 p-8 border-2 border-primary rounded-lg bg-primary/5">
          <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="font-bold text-primary flex-shrink-0">1.</span>
              <div>
                <h4 className="font-semibold mb-1">Initial Meeting Request</h4>
                <p className="text-sm text-muted-foreground">
                  Schedule 60-minute presentation with Verde leadership team to present full proposal
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary flex-shrink-0">2.</span>
              <div>
                <h4 className="font-semibold mb-1">Sultanate Introductions</h4>
                <p className="text-sm text-muted-foreground">
                  Facilitate meetings with representatives from 4 sultanates to validate interest
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary flex-shrink-0">3.</span>
              <div>
                <h4 className="font-semibold mb-1">Due Diligence Phase</h4>
                <p className="text-sm text-muted-foreground">
                  Financial modeling, legal framework review, carbon credit registration process
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary flex-shrink-0">4.</span>
              <div>
                <h4 className="font-semibold mb-1">Partnership Agreement</h4>
                <p className="text-sm text-muted-foreground">
                  Define terms, revenue sharing, exclusivity periods, and governance structure
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-primary flex-shrink-0">5.</span>
              <div>
                <h4 className="font-semibold mb-1">Launch Planning</h4>
                <p className="text-sm text-muted-foreground">
                  Product development timeline, marketing strategy, retail partner coordination
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Contact CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Fashion into Heritage Preservation?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join Indonesia's first heritage-backed fashion platform. Together, we can create sustainable revenue while
            preserving cultural heritage for future generations.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/partnership"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Submit Partnership Inquiry
            </a>
            <a
              href="/docs"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              View Full Documentation
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-muted rounded-lg text-sm text-muted-foreground">
          <p className="mb-2">
            <strong>Document Version:</strong> 1.0 | <strong>Date:</strong> November 11, 2025 |{" "}
            <strong>Prepared by:</strong> Impax Cort3x Partnership Team
          </p>
          <p>
            This proposal is confidential and intended solely for Verde management. For questions or to schedule a
            presentation, please contact us through the partnership portal.
          </p>
        </div>
      </div>
    </div>
  )
}
