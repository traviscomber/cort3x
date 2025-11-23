export default function JewelrySectorAnalysis() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-xl">💎</span>
            Corporate Partnership Study CP-002
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Indonesian Jewelry Sector Carbon Partnership Analysis
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conceptual framework for integrating heritage-backed carbon credits with Indonesian luxury jewelry brands
          </p>
          <div className="mt-4 text-sm text-muted-foreground">Published: November 11, 2025 • Study Code: CP-002</div>
        </div>

        {/* Critical Disclaimer */}
        <section className="mb-12 bg-blue-500/10 border-2 border-blue-500/30 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-3 text-blue-700 dark:text-blue-400 flex items-center gap-2">
            <span className="text-2xl">ℹ️</span>
            Study Classification & Disclaimer
          </h3>
          <div className="space-y-2 text-sm text-blue-700 dark:text-blue-400">
            <p>
              <strong>This is a conceptual partnership study, not an active business arrangement.</strong>
            </p>
            <p>
              All partnership proposals, financial projections, and collaboration models presented are preliminary
              concepts requiring validation through direct partner negotiations, pilot programs, and market testing. No
              agreements exist with any jewelry brands mentioned. All financial figures are estimates based on industry
              benchmarks and must be validated.
            </p>
            <p className="pt-2 border-t border-blue-500/20">
              <strong>Research Methodology:</strong> This study synthesizes publicly available data from official
              sources, industry reports, and verified news coverage. All claims are cited with reference numbers [#].
            </p>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="mb-16 bg-card rounded-2xl p-8 shadow-lg border border-border">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📊</span>
            Executive Summary
          </h2>

          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              The Indonesian jewelry industry presents significant opportunities for carbon credit integration due to
              its high carbon footprint (95% from gold/silver mining operations<sup>[1]</sup>), growing consumer demand
              for sustainable luxury<sup>[2]</sup>, and cultural heritage preservation alignment. This study analyzes
              the potential for partnerships with Indonesian jewelry brands to offset supply chain emissions through
              heritage-backed carbon credits.
            </p>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 my-6">
              <h4 className="font-semibold text-red-600 mb-3">
                Industry Carbon Footprint Context<sup>[1]</sup>
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-background rounded-lg p-4">
                  <div className="font-semibold mb-1">Gold Mining Impact</div>
                  <div className="text-2xl font-bold text-red-600">38,000 tons CO2e</div>
                  <div className="text-xs text-muted-foreground">
                    Per 1 ton of gold produced<sup>[1]</sup>
                  </div>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <div className="font-semibold mb-1">Supply Chain Emissions</div>
                  <div className="text-2xl font-bold text-red-600">95%</div>
                  <div className="text-xs text-muted-foreground">
                    Of jewelry's carbon footprint from mining<sup>[1]</sup>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                <div className="text-sm text-muted-foreground mb-2">Market Opportunity</div>
                <div className="text-2xl font-bold text-green-600">Growing</div>
                <div className="text-xs text-muted-foreground mt-2">
                  Asia-Pacific sustainable jewelry demand rising<sup>[2]</sup>
                </div>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                <div className="text-sm text-muted-foreground mb-2">Target Brands Identified</div>
                <div className="text-2xl font-bold text-blue-600">4</div>
                <div className="text-xs text-muted-foreground mt-2">Frank & Co, Palace Jeweler, Adelle, Passion</div>
              </div>
              <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/20">
                <div className="text-sm text-muted-foreground mb-2">Partnership Models</div>
                <div className="text-2xl font-bold text-amber-600">4</div>
                <div className="text-xs text-muted-foreground mt-2">Conceptual collaboration frameworks proposed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Jewelry Sector */}
        <section className="mb-16 bg-card rounded-2xl p-8 shadow-lg border border-border">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">💍</span>
            Why Target the Jewelry Sector?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">
                Environmental Challenges<sup>[1][3]</sup>
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span>
                    <strong>Mercury Pollution:</strong> ASGM (artisanal gold mining) causes 38% of global mercury
                    emissions<sup>[3]</sup>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span>
                    <strong>Energy Intensive:</strong> Mining requires massive fossil fuel consumption<sup>[1]</sup>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span>
                    <strong>Ecosystem Damage:</strong> Deforestation, habitat destruction, soil erosion<sup>[1]</sup>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span>
                    <strong>Toxic Chemicals:</strong> Cyanide and mercury in extraction contaminate water<sup>[1]</sup>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Partnership Value Proposition</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Offset Necessity:</strong> High carbon footprint creates urgent need for credits
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Premium Positioning:</strong> Heritage-backed offsets enhance luxury brand value
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Cultural Alignment:</strong> Indonesian jewelry brands already emphasize heritage
                    <sup>[4]</sup>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Consumer Demand:</strong> ESG-conscious buyers prefer sustainable luxury<sup>[2][5]</sup>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Target Brands Analysis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            Target Brand Profiles
          </h2>

          {/* Frank & Co */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                💎
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Frank & Co</h3>
                <p className="text-muted-foreground mb-4">
                  Luxury jewelry retailer (CMK Group) - Early sustainability adopter<sup>[6]</sup>
                </p>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
                <span>✅</span>
                Verified Sustainability Initiative
              </h4>
              <p className="text-sm text-muted-foreground">
                Frank & Co launched the <strong>"See the Light" collection</strong> at the end of 2024, featuring{" "}
                <strong>sustainable gold</strong>
                <sup>[6]</sup>. This demonstrates existing commitment to responsible sourcing and positions them as a
                natural fit for carbon credit integration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Brand Strengths</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>
                      Part of Central Mega Kencana (CMK) group<sup>[6]</sup>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>
                      Already using sustainable gold (verified)<sup>[6]</sup>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>High-end retail presence across Indonesia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span>Also Verde fashion distribution partner (cross-promotion potential)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Proposed Partnership Angle</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">→</span>
                    <span>
                      <strong>Expand Sustainability:</strong> Add carbon offsets to "See the Light" collection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">→</span>
                    <span>
                      <strong>Heritage Integration:</strong> Create sultanate-themed pieces with carbon credits
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">→</span>
                    <span>
                      <strong>CSR Leadership:</strong> Position as Indonesia's first fully carbon-neutral luxury jeweler
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Palace Jeweler */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                🏛️
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">The Palace Jeweler</h3>
                <p className="text-muted-foreground mb-4">
                  Indonesia's heritage jewelry specialist with Nusantara Collection<sup>[4][7]</sup>
                </p>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-blue-600 mb-2 flex items-center gap-2">
                <span>✅</span>
                Verified Heritage Program
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                The Palace Jeweler's <strong>"Bangga BerNusantara"</strong> campaign and{" "}
                <strong>Nusantara Collection</strong> (launched 2017, collaboration with Samuel Wattimena since 2015
                <sup>[7]</sup>) demonstrate existing commitment to Indonesian cultural preservation.
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="bg-background rounded p-2">
                  <div className="font-semibold">
                    Nusa Series<sup>[7]</sup>
                  </div>
                  <div className="text-muted-foreground">Western Indonesia (Pending)</div>
                </div>
                <div className="bg-background rounded p-2">
                  <div className="font-semibold">
                    Anta Series<sup>[7]</sup>
                  </div>
                  <div className="text-muted-foreground">Central Indonesia (NTT)</div>
                </div>
                <div className="bg-background rounded p-2">
                  <div className="font-semibold">
                    Tara Series<sup>[7]</sup>
                  </div>
                  <div className="text-muted-foreground">Eastern Indonesia</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Strategic Fit</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>
                      <strong>Perfect Cultural Alignment:</strong> Already focused on regional heritage<sup>[4][7]</sup>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>3-series framework demonstrates multi-region scalability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>"Bangga BerNusantara" mission aligns with cultural preservation goals</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Conceptual Proposal</h4>
                <p className="text-sm text-muted-foreground mb-3 italic">
                  Proposed 4th series (requires brand approval):
                </p>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <div className="font-semibold mb-2">"Sultanate Series" - New Concept</div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>• 4 collections representing 4 sultanates</div>
                    <div>• Each piece bundled with heritage carbon credits</div>
                    <div>• Builds on existing Nusantara Collection success</div>
                    <div>
                      • <span className="text-amber-600">Status: Conceptual - requires negotiation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Passion Jewelry (Nyoman Nuarta context) */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                👑
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Passion Jewelry</h3>
                <p className="text-muted-foreground mb-4">
                  Luxury brand with high-profile design collaborations<sup>[8]</sup>
                </p>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-amber-600 mb-2 flex items-center gap-2">
                <span>ℹ️</span>
                Context: Existing Pa Nyoman Nuarta Collaboration
              </h4>
              <p className="text-sm text-muted-foreground">
                Passion Jewelry has an existing collaboration with <strong>Pa Nyoman Nuarta</strong> (renowned sculptor
                and IKN Garuda Palace architect<sup>[8]</sup>) featuring designs based on Tri Hita Karana philosophy
                with wind and angel wing motifs<sup>[8]</sup>.{" "}
                <strong className="text-amber-600">
                  This is their independent work and is NOT part of any carbon credit initiative.
                </strong>{" "}
                We reference this only to demonstrate Passion's commitment to prestigious cultural collaborations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Why Consider Partnership</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Demonstrated ability to work with cultural icons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>High-end positioning suitable for premium carbon products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Existing Nuarta collaboration shows cultural sensitivity</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Potential New Opportunity</h4>
                <p className="text-sm text-muted-foreground mb-3 italic">Separate from existing Nuarta work:</p>
                <div className="bg-background rounded-lg p-4 border border-border">
                  <div className="font-semibold mb-2">Proposed: Carbon-Backed Collections</div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>• New lines (not related to IKN jewelry)</div>
                    <div>• Heritage carbon credit integration</div>
                    <div>• Leverage existing cultural credibility</div>
                    <div>
                      • <span className="text-amber-600">Status: No contact initiated yet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Adelle */}
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✨
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Adelle Jewellery</h3>
                <p className="text-muted-foreground mb-4">
                  Contemporary jewelry brand targeting younger affluent consumers
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3">Market Position</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">•</span>
                    <span>Modern, fashion-forward aesthetic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">•</span>
                    <span>Millennial and Gen-Z target demographic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500 mt-1">•</span>
                    <span>Also Verde fashion distribution partner</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3">Partnership Rationale</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">→</span>
                    <span>
                      <strong>ESG Appeal:</strong> Younger buyers prioritize sustainability<sup>[5]</sup>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">→</span>
                    <span>
                      <strong>Digital Integration:</strong> NFT + blockchain tracking for transparency
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">→</span>
                    <span>
                      <strong>Cross-Promotion:</strong> Bundle with Verde fashion carbon credits
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Models */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-3xl">🤝</span>
            Proposed Partnership Models
          </h2>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6">
            <p className="text-sm text-blue-700 dark:text-blue-400">
              <strong>Note:</strong> These are conceptual frameworks requiring validation through pilot programs and
              partner negotiations. Carbon offset calculations based on industry research<sup>[1]</sup>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="text-3xl mb-3">💎</div>
              <h3 className="text-xl font-bold mb-3">Model 1: Supply Chain Carbon Offset</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Calculate jewelry production carbon footprint (mining, processing, transport) and offset through our
                platform's forestry and blue carbon projects.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>
                    Gold Mining Impact<sup>[1]</sup>
                  </span>
                  <span className="font-semibold">38,000 tons CO2e/ton gold</span>
                </div>
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>Offset per 10g ring (est.)</span>
                  <span className="font-semibold">~0.38 tons CO2e</span>
                </div>
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>Certification</span>
                  <span className="font-semibold">
                    Gold Standard + SPEI<sup>[9]</sup>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-xl font-bold mb-3">Model 2: Heritage-Backed Collections</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Create limited edition jewelry lines inspired by cultural heritage sites, with each piece bundled with
                carbon credits from preservation projects.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>Price Premium</span>
                  <span className="font-semibold">+15-25% (estimated)</span>
                </div>
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>Carbon Credits/Piece</span>
                  <span className="font-semibold">1-5 tons CO2e</span>
                </div>
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>Tracking</span>
                  <span className="font-semibold">NFC + Blockchain</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="text-xl font-bold mb-3">Model 3: Sustainable Sourcing Program</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Partner with brands using recycled metals (like Frank & Co's "See the Light"<sup>[6]</sup>) to further
                reduce footprint through ethical sourcing + offsets.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>
                    Recycled Metal Benefit<sup>[10]</sup>
                  </span>
                  <span className="font-semibold">Most effective reduction</span>
                </div>
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>Remaining Emissions</span>
                  <span className="font-semibold">Processing + transport</span>
                </div>
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>Offset Target</span>
                  <span className="font-semibold">100% carbon neutral</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-xl font-bold mb-3">Model 4: Craftsmanship CSR</h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Invest in training programs for traditional jewelry techniques, creating carbon-neutral production
                facilities while preserving cultural crafts.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>CSR Investment (est.)</span>
                  <span className="font-semibold">IDR 500M-1B</span>
                </div>
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>Artisans Trained</span>
                  <span className="font-semibold">50-100 per region</span>
                </div>
                <div className="flex justify-between p-2 bg-muted/50 rounded">
                  <span>ROI Timeline</span>
                  <span className="font-semibold">3-5 years</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Context */}
        <section className="mb-16 bg-card rounded-2xl p-8 shadow-lg border border-border">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📈</span>
            Market Context & Trends
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                Sustainability Momentum<sup>[2][5][6]</sup>
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Consumer Demand:</strong> Asia-Pacific sustainable jewelry market growing<sup>[2]</sup>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>ESG Priority:</strong> Millennials and Gen-Z prioritize ethical brands<sup>[5]</sup>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Brand Leadership:</strong> Frank & Co adopted sustainable gold in 2024<sup>[6]</sup>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>
                    <strong>Recycled Materials:</strong> Most effective way to reduce jewelry's environmental impact
                    <sup>[10]</sup>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Indonesian Cultural Context<sup>[4][7][11]</sup>
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    <strong>Heritage Focus:</strong> Palace Jeweler's Nusantara Collection shows market appetite
                    <sup>[7]</sup>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    <strong>Regional Diversity:</strong> Each area has unique design traditions<sup>[11]</sup>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    <strong>Ceremonial Demand:</strong> Strong market for traditional pieces<sup>[11]</sup>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    <strong>Cultural Pride:</strong> "Bangga BerNusantara" resonates with consumers<sup>[4]</sup>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-amber-500/10 border border-amber-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-3 text-amber-600">
              IDXCarbon Integration Opportunity<sup>[9]</sup>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              IDXCarbon (launched September 2023) recorded <strong>IDR 37.06 billion</strong> in trading value and{" "}
              <strong>613,894 tons CO2e</strong> across 106 transactions by September 2024<sup>[9]</sup>. The platform's
              growth demonstrates viable market for carbon credit trading in Indonesia.
            </p>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div className="bg-background rounded p-3">
                <div className="font-semibold mb-1">Trading Volume</div>
                <div className="text-lg font-bold text-amber-600">
                  IDR 37B<sup>[9]</sup>
                </div>
              </div>
              <div className="bg-background rounded p-3">
                <div className="font-semibold mb-1">Carbon Credits</div>
                <div className="text-lg font-bold text-green-600">
                  613,894 tons<sup>[9]</sup>
                </div>
              </div>
              <div className="bg-background rounded p-3">
                <div className="font-semibold mb-1">Transactions</div>
                <div className="text-lg font-bold text-blue-600">
                  106<sup>[9]</sup>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-3xl">🗺️</span>
            Phased Implementation Approach
          </h2>

          <div className="space-y-4">
            <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-l-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎯</span>
                <h3 className="text-xl font-bold">Phase 1: Initial Outreach (Q1 2025)</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-11">
                <li>• Send partnership proposals to Frank & Co (sustainable gold track record)</li>
                <li>• Approach Palace Jeweler (heritage alignment with Nusantara Collection)</li>
                <li>• Conduct carbon footprint assessments for interested brands</li>
                <li>• Identify 1-2 pilot partners willing to test concept</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-l-green-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🧪</span>
                <h3 className="text-xl font-bold">Phase 2: Pilot Program (Q2-Q3 2025)</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-11">
                <li>• Design small test collection (50-100 pieces) with carbon credits</li>
                <li>• Develop NFC/blockchain certification system for tracking</li>
                <li>• Launch with marketing campaign highlighting sustainability + heritage</li>
                <li>• Measure sales performance, customer feedback, redemption rates</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-l-amber-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📊</span>
                <h3 className="text-xl font-bold">Phase 3: Evaluation & Scaling (Q4 2025)</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-11">
                <li>• Analyze pilot results: revenue impact, carbon offset volumes, brand perception</li>
                <li>• Refine partnership terms based on learnings</li>
                <li>• Onboard additional brands if pilot demonstrates viability</li>
                <li>• Begin IDXCarbon listing process for jewelry-specific carbon products</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-l-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🚀</span>
                <h3 className="text-xl font-bold">Phase 4: Full Program Launch (2026+)</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground ml-11">
                <li>• Scale to full collections across multiple brands</li>
                <li>• Launch craftsmanship training CSR programs</li>
                <li>• Achieve IDXCarbon listing for heritage jewelry carbon units</li>
                <li>• Expand beyond initial 4 brands to broader Indonesian jewelry sector</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Risk Analysis */}
        <section className="mb-16 bg-card rounded-2xl p-8 shadow-lg border border-border">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">⚠️</span>
            Key Risks & Mitigation Strategies
          </h2>

          <div className="space-y-4">
            <div className="border border-border rounded-xl p-4">
              <h4 className="font-semibold mb-2 text-red-600">Risk: Brand Adoption Hesitancy</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Luxury brands may resist adding carbon offsets if perceived as complicating product story or
                compromising prestige.
              </p>
              <div className="bg-green-500/10 rounded p-3 text-sm">
                <strong className="text-green-600">Mitigation:</strong> Position as premium enhancement, use limited
                editions to test market, showcase successful models (John Hardy sustainability leadership<sup>[10]</sup>
                ), leverage Frank & Co's existing sustainable gold initiative<sup>[6]</sup>.
              </div>
            </div>

            <div className="border border-border rounded-xl p-4">
              <h4 className="font-semibold mb-2 text-red-600">
                Risk: Supply Chain Transparency Issues<sup>[3]</sup>
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                Jewelry industry faces scrutiny over mercury use (38% of global emissions from ASGM<sup>[3]</sup>) and
                human rights concerns. Association with non-transparent brands could damage credibility.
              </p>
              <div className="bg-green-500/10 rounded p-3 text-sm">
                <strong className="text-green-600">Mitigation:</strong> Mandatory supply chain audits before
                partnership, require RJC certification commitment, prioritize brands already using recycled materials
                <sup>[10]</sup>, include Minamata Convention compliance as prerequisite<sup>[3]</sup>.
              </div>
            </div>

            <div className="border border-border rounded-xl p-4">
              <h4 className="font-semibold mb-2 text-red-600">Risk: Carbon Credit Price Volatility</h4>
              <p className="text-sm text-muted-foreground mb-3">
                VCM experienced challenges in 2024. Indonesia's carbon pricing currently low, affecting demand.
              </p>
              <div className="bg-green-500/10 rounded p-3 text-sm">
                <strong className="text-green-600">Mitigation:</strong> Dual certification (Gold Standard + SPEI
                <sup>[9]</sup>) for international and domestic markets, focus on removal credits (ARR, Blue Carbon) with
                stronger price performance, hedge through multi-year forward contracts, diversify revenue beyond carbon
                sales.
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 shadow-lg border border-green-500/20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">✅</span>
            Conclusion & Recommended Next Steps
          </h2>

          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              The Indonesian jewelry sector presents a compelling opportunity for carbon credit integration due to:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>High Carbon Footprint:</strong> 38,000 tons CO2e per ton of gold creates urgent offset need
                  <sup>[1]</sup>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Existing Sustainability Leaders:</strong> Frank & Co's "See the Light" collection demonstrates
                  market readiness<sup>[6]</sup>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Cultural Heritage Alignment:</strong> Palace Jeweler's Nusantara Collection proves
                  heritage-focused positioning works<sup>[7]</sup>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>
                  <strong>Market Infrastructure:</strong> IDXCarbon's proven trading volume (IDR 37B, 613,894 tons
                  <sup>[9]</sup>) provides viable platform
                </span>
              </li>
            </ul>

            <div className="bg-card rounded-xl p-6 mt-6">
              <h3 className="font-semibold mb-4 text-lg">Immediate Priority Actions:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="border border-green-500/20 rounded p-4 bg-green-500/5">
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    <span>🎯</span>
                    Priority 1: Frank & Co
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Leverage existing "See the Light" sustainable gold collection. Send proposal within 2 weeks.
                  </div>
                </div>
                <div className="border border-green-500/20 rounded p-4 bg-green-500/5">
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    <span>🎯</span>
                    Priority 1: Palace Jeweler
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Perfect cultural alignment with Nusantara Collection. Propose 4th "Sultanate Series". Send proposal
                    within 2 weeks.
                  </div>
                </div>
                <div className="border border-blue-500/20 rounded p-4 bg-blue-500/5">
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    <span>📋</span>
                    Priority 2: Due Diligence
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Prepare carbon footprint calculation methodology, supply chain audit templates, partnership term
                    sheets.
                  </div>
                </div>
                <div className="border border-blue-500/20 rounded p-4 bg-blue-500/5">
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    <span>🧪</span>
                    Priority 2: Pilot Design
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Design 50-100 piece test collection concept with carbon credit bundles, NFC tracking system.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="mb-16 bg-muted/30 rounded-2xl p-8 border border-border">
          <h2 className="text-2xl font-bold mb-6">References & Sources</h2>

          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="bg-card rounded p-3">
              <strong>[1]</strong> WEND Jewelry (2024). "Carbon Footprint of Jewelry" - Data on 38,000 tons CO2e per ton
              of gold, 95% of jewelry carbon footprint from mining and metals production.
            </div>
            <div className="bg-card rounded p-3">
              <strong>[2]</strong> Wise Guy Reports (2024). "Sustainable Jewelry Market Research: In-Depth Study 2035" -
              Asia-Pacific region growth trends, consumer awareness regarding environmental issues and ethical sourcing.
            </div>
            <div className="bg-card rounded p-3">
              <strong>[3]</strong> Minamata Convention reports (2024). ASGM (Artisanal & Small-Scale Gold Mining)
              mercury emissions data - 38% of global mercury pollution, Indonesia Minamata Convention commitments.
            </div>
            <div className="bg-card rounded p-3">
              <strong>[4]</strong> Jakarta Globe coverage of The Palace Jeweler's "Bangga BerNusantara" campaign -
              cultural preservation initiatives.
            </div>
            <div className="bg-card rounded p-3">
              <strong>[5]</strong> JNA News (2023). "ESG in the jewellery trade" - Millennials and Gen-Z prioritizing
              brands with ethical credentials, sustainability and positive social impact.
            </div>
            <div className="bg-card rounded p-3">
              <strong>[6]</strong> Heap Talk (2024). "Frank & co. adopts sustainable gold in its latest collection" -
              Verified reporting on "See the Light" collection featuring sustainable gold (end of 2024), Central Mega
              Kencana (CMK) backing.
            </div>
            <div className="bg-card rounded p-3">
              <strong>[7]</strong> The Palace Jeweler official documentation. Nusantara Collection (Nusa, Anta, Tara
              series), Samuel Wattimena collaboration launched 2017 (partnership since 2015).
            </div>
            <div className="bg-card rounded p-3">
              <strong>[8]</strong> Media coverage (2024). I Nyoman Nuarta jewelry collaboration with Passion Jewelry -
              Tri Hita Karana philosophy, wind and angel wing motifs, IKN Garuda Palace designer background.
            </div>
            <div className="bg-card rounded p-3">
              <strong>[9]</strong> IDXCarbon official data (2024). Trading value IDR 37.06 billion, 613,894 tons CO2e,
              106 transactions (Sept 2023-Sept 2024); Gold Standard Indonesia MRA with SPEI; Sharia fatwa approval; IDX
              Net Zero Incubator (Aug 2024, 110 companies).
            </div>
            <div className="bg-card rounded p-3">
              <strong>[10]</strong> Science Direct (2018). "Corporate environmental assessment of a large jewelry
              company" - Recycled gold and silver as most effective solution to decrease life cycle negative impacts;
              Scope 3 emissions (70% of business carbon footprint).
            </div>
            <div className="bg-card rounded p-3">
              <strong>[11]</strong> Market research on Indonesian jewelry cultural characteristics - Hindu-Buddhist
              mythology, Balinese culture, traditional motifs (Garuda, Barong, lotus), granulation & filigree
              techniques, ceremonial demand.
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mt-6">
            <h3 className="font-semibold mb-2 text-amber-700 dark:text-amber-400">Research Methodology</h3>
            <p className="text-xs text-muted-foreground">
              This study synthesizes publicly available information from official sources, industry reports, verified
              news coverage, and academic research. All factual claims are cited with numbered references. Financial
              projections and partnership models are conceptual frameworks requiring validation through direct
              engagement, pilot programs, and market testing. No agreements exist with any brands mentioned.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          <p className="mb-2">
            <strong>Document Code:</strong> CP-002 | <strong>Category:</strong> Corporate Partnership Study
          </p>
          <p className="mb-2">
            <strong>Prepared for:</strong> Impax Cort3x Green Industrial Innovation Platform
          </p>
          <p>
            <strong>Date:</strong> November 11, 2025 | <strong>Status:</strong> Conceptual Analysis - No Active
            Partnerships
          </p>
        </div>
      </div>
    </div>
  )
}
