"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Hotel, TrendingUp, Users, Leaf, Building2, Globe, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function HospitalityTourismAnalysisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-amber-50/30">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/docs">
            <Button variant="ghost" className="mb-4 text-[#6B5E4C] hover:text-[#8B7355]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Documentation
            </Button>
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="bg-[#6B5E4C] text-white border-[#6B5E4C]">
              CP-003
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Market Analysis
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              Published: November 11, 2025
            </Badge>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-balance">
            Indonesian Hospitality & Tourism Sector:
            <span className="block text-[#8B7355] mt-2">Carbon-Heritage Integration Analysis</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Strategic market analysis examining carbon offset opportunities through heritage-integrated sustainability
            programs for Indonesia's growing hospitality sector
          </p>
        </div>

        {/* Disclaimer */}
        <Card className="p-6 mb-8 bg-amber-50 border-amber-200">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="font-semibold text-amber-900">Conceptual Market Analysis</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                This document presents market research and conceptual partnership frameworks. All financial projections
                are preliminary estimates requiring validation. No active partnerships or commitments exist with
                mentioned entities. All data is properly cited and based on publicly available industry research.
              </p>
            </div>
          </div>
        </Card>

        {/* Executive Summary */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#6B5E4C]/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-[#6B5E4C]" />
            </div>
            <h2 className="text-3xl font-bold">Executive Summary</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card className="p-6">
              <div className="text-2xl font-bold text-[#8B7355] mb-2">IDR 289.1T</div>
              <div className="text-sm text-muted-foreground">International visitor spending (2024) [1]</div>
            </Card>
            <Card className="p-6">
              <div className="text-2xl font-bold text-[#8B7355] mb-2">11M+</div>
              <div className="text-sm text-muted-foreground">International tourist arrivals (2024) [2]</div>
            </Card>
            <Card className="p-6">
              <div className="text-2xl font-bold text-[#8B7355] mb-2">5.1%</div>
              <div className="text-sm text-muted-foreground">Tourism contribution to GDP (2024) [3]</div>
            </Card>
          </div>

          <div className="prose max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Indonesia's hospitality sector presents a significant opportunity for carbon-heritage integration. With
              over 11 million international arrivals generating IDR 289.1 trillion in spending [1], the sector's carbon
              footprint is substantial. Research indicates hotel carbon emissions range from 20-40 kg CO2e per
              room-night in Asia [4], potentially 5x higher when including supply chain impacts [5]. Leading Indonesian
              operators like Archipelago International are already implementing ESG initiatives [6], creating natural
              alignment for heritage-backed carbon offset programs.
            </p>
          </div>
        </section>

        {/* Market Context */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#6B5E4C]/10 rounded-lg">
              <Globe className="h-6 w-6 text-[#6B5E4C]" />
            </div>
            <h2 className="text-3xl font-bold">Market Context & Carbon Challenge</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-[#8B7355]" />
                Sector Growth & Infrastructure
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-[#8B7355] font-bold">•</span>
                  <span>Hospitality real estate market valued at USD 2.06 billion (2025) [7]</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8B7355] font-bold">•</span>
                  <span>13 million people employed in tourism sector [8]</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8B7355] font-bold">•</span>
                  <span>Bali added 6 new hotels in 2024; Jakarta added 2 major properties [9]</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#8B7355] font-bold">•</span>
                  <span>New IKN capital city creating demand for sustainable hospitality infrastructure</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-red-50 border-red-200">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Carbon Footprint Reality
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Hotel carbon emissions are significantly underestimated by traditional methodologies:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>
                      <strong>20-40 kg CO2e per room-night</strong> - Asian hotel average [4]
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>
                      <strong>5x higher when including supply chains</strong> - Recent LEGIT research shows emissions
                      are 419% higher than traditional HCMI calculations [5]
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>
                      <strong>60% from energy consumption</strong> - Electricity, heating, cooling [10]
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red-600 font-bold">•</span>
                    <span>
                      <strong>40% from indirect sources</strong> - Food, construction materials, toiletries,
                      furnishings, waste, water [5]
                    </span>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-white rounded-lg border border-red-200">
                  <p className="text-sm font-semibold text-red-900 mb-2">Estimated Annual Emissions:</p>
                  <p className="text-muted-foreground text-sm">
                    With 11M+ arrivals averaging 3-5 nights/stay × 30 kg CO2e/night =
                    <strong className="text-red-700"> ~990,000 - 1,650,000 tons CO2e annually</strong> (conservative
                    estimate)
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Existing Sustainability Initiatives */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#6B5E4C]/10 rounded-lg">
              <Leaf className="h-6 w-6 text-[#6B5E4C]" />
            </div>
            <h2 className="text-3xl font-bold">Existing Sustainability Initiatives</h2>
          </div>

          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Hotel className="h-6 w-6 text-green-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Archipelago International</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Indonesia's largest hotel operator with comprehensive ESG program [6]
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>First major Indonesian hotel group to install EV charging stations portfolio-wide</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Energy-efficient building retrofits and LED conversions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Plastic reduction and refillable amenity programs</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Food waste minimization and local sourcing initiatives</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Water-saving technologies across properties</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>29 properties support local MSMEs with cultural products</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Heritage-Focused Properties</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#8B7355] pl-4">
                  <h4 className="font-semibold mb-1">The Apurva Kempinski Bali</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Indonesia's first GSTC-certified hotel, recognized for cultural preservation and environmental
                    stewardship [11]
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Features: Indonesian heritage design, Hydroponic Rooftop Garden, mangrove planting program
                  </p>
                </div>
                <div className="border-l-4 border-[#8B7355] pl-4">
                  <h4 className="font-semibold mb-1">Maringi Sumba</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Eco-resort built from locally sourced bamboo and stone with traditional Sumbanese architecture [12]
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Operates as training hotel for Sumba Hospitality Foundation, offers immersive cultural experiences
                  </p>
                </div>
                <div className="border-l-4 border-[#8B7355] pl-4">
                  <h4 className="font-semibold mb-1">Amanjiwo (Borobudur)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Luxury resort supporting local education, batik preservation, and Borobudur reforestation [13]
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Zero single-use plastics, organic composting system, low food-waste philosophy
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Proposed Partnership Framework */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#6B5E4C]/10 rounded-lg">
              <Users className="h-6 w-6 text-[#6B5E4C]" />
            </div>
            <h2 className="text-3xl font-bold">Proposed Partnership Framework (Conceptual)</h2>
          </div>

          <Card className="p-6 mb-6 bg-blue-50 border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-3">Value Proposition for Hotels</h3>
            <div className="space-y-2 text-sm text-blue-800">
              <p>✓ Offset unavoidable Scope 1, 2, and 3 emissions with verified heritage-backed carbon credits</p>
              <p>✓ Differentiate through authentic cultural storytelling integrated with sustainability</p>
              <p>✓ Meet growing guest demand for regenerative tourism experiences</p>
              <p>✓ Align with Indonesia's tourism sustainability commitments and ESG reporting requirements</p>
              <p>✓ Support local communities through heritage preservation funding mechanisms</p>
            </div>
          </Card>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Potential Target Partners (No Current Relationships)</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-5">
                <h4 className="font-semibold mb-2 text-[#8B7355]">Tier 1: Major Operators</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • <strong>Archipelago International</strong> - Existing ESG infrastructure, MSME partnerships [6]
                  </li>
                  <li>
                    • <strong>Aston Hotels</strong> - Growing Indonesian portfolio
                  </li>
                  <li>
                    • <strong>Tauzia Hotels</strong> - Midscale focus, expanding footprint
                  </li>
                </ul>
              </Card>

              <Card className="p-5">
                <h4 className="font-semibold mb-2 text-[#8B7355]">Tier 2: Luxury & Boutique</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • <strong>Aman Resorts</strong> - Heritage-focused properties [13]
                  </li>
                  <li>
                    • <strong>Alila Hotels</strong> - Sustainable luxury positioning
                  </li>
                  <li>
                    • <strong>Plataran</strong> - Indonesian heritage brand
                  </li>
                </ul>
              </Card>

              <Card className="p-5">
                <h4 className="font-semibold mb-2 text-[#8B7355]">Tier 3: Eco-Resorts</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • <strong>Maringi Sumba</strong> - Training hotel model [12]
                  </li>
                  <li>
                    • <strong>Pulau Macan</strong> - Regenerative tourism focus [14]
                  </li>
                  <li>
                    • <strong>Bambu Indah (Bali)</strong> - Bamboo architecture pioneer
                  </li>
                </ul>
              </Card>

              <Card className="p-5">
                <h4 className="font-semibold mb-2 text-[#8B7355]">Tier 4: New Development</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • <strong>IKN Hotels</strong> - New capital city infrastructure
                  </li>
                  <li>
                    • <strong>Labuan Bajo</strong> - Gateway to Komodo, tourism expansion
                  </li>
                  <li>
                    • <strong>Lake Toba</strong> - Super-priority destination development
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Implementation Model */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Conceptual Implementation Model</h2>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Phase 1: Carbon Baseline & Heritage Integration</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Conduct comprehensive carbon footprint assessment using expanded LEGIT methodology [5]</p>
                <p>• Identify hotel-specific emissions hotspots (energy, F&B, supply chain, construction)</p>
                <p>• Map nearby cultural heritage assets eligible for preservation funding</p>
                <p>• Design guest-facing cultural storytelling program</p>
                <p className="text-xs italic pt-2">Timeline: ~2-3 months | Investment: Assessment services</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Phase 2: Carbon Credit Procurement & Certification</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Purchase heritage-backed carbon credits through IDXCarbon platform</p>
                <p>• Obtain third-party verification (GSTC, EarthCheck, or similar)</p>
                <p>• Develop ESG reporting framework aligned with international standards</p>
                <p>• Create marketing materials showcasing carbon-heritage integration</p>
                <p className="text-xs italic pt-2">Timeline: ~3-4 months | Investment: Credits + certification</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Phase 3: Guest Experience Integration</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Launch heritage storytelling program (in-room materials, digital content, tours)</p>
                <p>• Offer optional carbon offset add-ons at booking (heritage project funding)</p>
                <p>• Create "Stay for Culture" packages combining accommodation + heritage experiences</p>
                <p>• Train staff on cultural heritage narratives and sustainability messaging</p>
                <p className="text-xs italic pt-2">
                  Timeline: ~2-3 months | Investment: Training + content development
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Phase 4: Ongoing Monitoring & Expansion</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Quarterly carbon footprint reporting and credit true-up purchases</p>
                <p>• Annual heritage impact assessment (preservation outcomes, community benefits)</p>
                <p>• Guest satisfaction tracking for cultural programs</p>
                <p>• Portfolio expansion to additional properties</p>
                <p className="text-xs italic pt-2">Timeline: Continuous | Investment: Monitoring + credits</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Financial Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Preliminary Financial Framework</h2>

          <Card className="p-6 mb-4 bg-amber-50 border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> All figures are conceptual estimates based on industry benchmarks. Actual costs
              vary significantly by property size, occupancy, energy mix, and certification level.
            </p>
          </Card>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Sample Cost Model (100-room hotel, 70% occupancy)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between p-3 bg-muted/50 rounded">
                  <span>Annual room-nights</span>
                  <span className="font-semibold">25,550 nights</span>
                </div>
                <div className="flex justify-between p-3 bg-muted/50 rounded">
                  <span>Emissions @ 30 kg CO2e/night (conservative)</span>
                  <span className="font-semibold">~767 tons CO2e</span>
                </div>
                <div className="flex justify-between p-3 bg-muted/50 rounded">
                  <span>Carbon credits @ ~IDR 60,000/ton [15]</span>
                  <span className="font-semibold text-[#8B7355]">~IDR 46M (~$3,000 USD)</span>
                </div>
                <div className="flex justify-between p-3 bg-blue-50 rounded border border-blue-200">
                  <span>Cost per room-night</span>
                  <span className="font-semibold text-blue-700">~IDR 1,800 ($0.12 USD)</span>
                </div>
                <p className="text-xs text-muted-foreground italic pt-2">
                  Additional costs: Initial assessment (IDR 50-100M), certification (IDR 30-80M), content development
                  (IDR 20-50M). First-year total: ~IDR 150-275M.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="text-lg font-semibold mb-4 text-green-900">Potential Revenue Opportunities</h3>
              <div className="space-y-3 text-sm text-green-800">
                <p>
                  • <strong>Premium positioning:</strong> "Carbon-neutral heritage hotel" can command 5-15% rate premium
                  among sustainability-conscious travelers
                </p>
                <p>
                  • <strong>Guest carbon offset program:</strong> Optional IDR 50,000-100,000/stay donation to heritage
                  projects (typical 10-20% guest participation)
                </p>
                <p>
                  • <strong>Corporate partnership packages:</strong> ESG-compliant accommodation for business travelers
                  at premium rates
                </p>
                <p>
                  • <strong>Certification benefits:</strong> Eligibility for green hotel directories, MICE venue
                  preference, government incentives
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Heritage Integration: Competitive Differentiation</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold text-red-600 mb-3">Traditional Carbon Offsetting</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✗ Generic reforestation or renewable energy credits</li>
                <li>✗ No connection to guest experience</li>
                <li>✗ Limited storytelling potential</li>
                <li>✗ Commoditized, price-driven market</li>
                <li>✗ Minimal community engagement</li>
              </ul>
            </Card>

            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="font-semibold text-green-700 mb-3">Heritage-Backed Carbon Credits</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>✓ Unique, location-specific cultural assets</li>
                <li>✓ Integrated guest experiences (tours, workshops, storytelling)</li>
                <li>✓ Compelling marketing narrative</li>
                <li>✓ Premium positioning, differentiation from competitors</li>
                <li>✓ Direct community benefit and heritage preservation</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Market Outlook */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Market Outlook & Recommendations</h2>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Favorable Market Conditions
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>
                    <strong>Government support:</strong> Indonesia targeting 1.4B international arrivals by 2029,
                    prioritizing sustainable tourism [16]
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>
                    <strong>Traveler demand:</strong> 83% of travelers say sustainable travel is important (Booking.com
                    2024 research)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>
                    <strong>ESG reporting pressure:</strong> Hotels increasingly required to disclose carbon footprints
                    to investors and booking platforms
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>
                    <strong>Certification momentum:</strong> First GSTC-certified hotel in Indonesia (2024) signals
                    market maturity [11]
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600">✓</span>
                  <span>
                    <strong>Infrastructure expansion:</strong> IKN and super-priority destinations create greenfield
                    opportunities
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Strategic Recommendations</h3>
              <ol className="space-y-3 text-sm text-blue-800">
                <li>
                  <strong>1. Pilot Program Approach:</strong> Launch with 3-5 properties across different segments
                  (luxury, midscale, eco-resort) to demonstrate model viability
                </li>
                <li>
                  <strong>2. Focus on Heritage-Forward Properties:</strong> Prioritize hotels near Borobudur, Prambanan,
                  Royal Courts, or in super-priority destinations
                </li>
                <li>
                  <strong>3. Partner with Existing ESG Leaders:</strong> Archipelago International's MSME program [6]
                  and Apurva Kempinski's GSTC certification [11] provide natural entry points
                </li>
                <li>
                  <strong>4. Develop Turnkey Solution:</strong> Create standardized assessment, certification, and guest
                  experience packages to reduce adoption friction
                </li>
                <li>
                  <strong>5. Target Corporate Travel:</strong> Position heritage-carbon hotels as preferred MICE venues
                  for ESG-conscious companies
                </li>
                <li>
                  <strong>6. Leverage IKN Opportunity:</strong> Engage with new capital city hotel developers from
                  project inception
                </li>
              </ol>
            </Card>
          </div>
        </section>

        {/* References */}
        <section>
          <h2 className="text-2xl font-bold mb-6">References & Data Sources</h2>
          <Card className="p-6 bg-muted/30">
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li>
                [1] WTTC (2025). "Indonesia's International Visitor Spend to Reach Record-Breaking IDR 344tn in 2025"
              </li>
              <li>
                [2] MAP Resources Indonesia (2025). "Tourism and Hospitality Investment Opportunities in Indonesia 2025"
              </li>
              <li>
                [3] Cabinet Secretariat of Indonesia (2025). "Indonesia Tourism Sector Shows Positive Growth in 2024"
              </li>
              <li>
                [4] Circular Ecology (2024). "The Carbon Emissions of Staying in a Hotel" - DEFRA/Greenview Hotel
                Footprinting Tool data
              </li>
              <li>
                [5] Bob W / Hospitality Net (2024). "Hotel carbon emissions 'five times higher' than previously thought"
                - LEGIT methodology
              </li>
              <li>
                [6] Travel Daily Media (2024). "Archipelago introduces electric vehicle charging to Indonesian
                hospitality scene"
              </li>
              <li>[7] Mordor Intelligence (2025). "Hospitality Industry in Indonesia - Market Size & Outlook"</li>
              <li>[8] WTTC (2024). Indonesia tourism employment statistics</li>
              <li>[9] HVS (2024). "In Focus: Indonesia" - Hotel development pipeline</li>
              <li>
                [10] Hospitality Net (2024). "Whitepaper showing how net zero model brings benefits for hotel sector"
              </li>
              <li>
                [11] Eco-Business (2024). "The Apurva Kempinski Bali announced as the first GSTC-certified hotel in
                Indonesia"
              </li>
              <li>[12] Regenerative Travel (2024). "Maringi Sumba" - Eco-resort sustainability profile</li>
              <li>[13] Aman Resorts (2024). "Sustainability at Amanjiwo"</li>
              <li>[14] Indonesia.Travel (2024). "Pulau Macan Eco Lodge" - Regenerative tourism initiatives</li>
              <li>[15] IDXCarbon trading data (2024). Average carbon credit pricing on Indonesian exchange</li>
              <li>[16] Indonesia Ministry of Tourism (2024). National tourism development targets</li>
            </ol>
          </Card>
        </section>
      </div>
    </div>
  )
}
