"use server"

import { createClient } from "@/lib/supabase/server"

export async function populateNusantaraCodeContent() {
  try {
    const supabase = await createClient()

    const { data: initiative, error: initError } = await supabase
      .from("initiatives")
      .upsert(
        {
          id: "the-nusantara-code",
          title: "The Nusantara Code",
          description:
            "Indonesia's comprehensive carbon pricing governance framework and market harmonization initiative. A strategic roadmap and blueprint for implementing carbon markets, stakeholder engagement, and environmental policy integration aligned with UNFCCC commitments and Presidential Regulation 112/2022.",
          status: "active",
          category: "Environmental Policy",
          budget: 2500000,
          progress: 45,
          start_date: "2024-01-01",
          country: "Indonesia",
          location_data: {
            regions: [
              { name: "Jakarta", phase: 1 },
              { name: "National", phase: 2 },
            ],
            coordinates: { lat: -6.2088, lng: 106.8456 },
          },
          partners: [
            { name: "Ministry of Environment", type: "Government Agency", role: "Lead Implementation" },
            { name: "World Bank", type: "International Organization", role: "Technical Support" },
            { name: "IDX Carbon Exchange", type: "Market Infrastructure", role: "Trading Platform" },
          ],
          milestones: [
            {
              title: "Presidential Regulation 112/2022 Amendment",
              target_date: "2025-Q2",
              status: "in_progress",
              description: "Public consultation and regulatory refinement",
            },
            {
              title: "Carbon Market Infrastructure Launch",
              target_date: "2025-Q4",
              status: "planned",
              description: "Operational carbon trading platform",
            },
            {
              title: "International Market Linkages",
              target_date: "2026-Q2",
              status: "planned",
              description: "Bilateral cooperation frameworks under Article 6",
            },
          ],
          risks: [
            {
              title: "Regulatory Delays",
              impact: "High",
              probability: "Medium",
              mitigation: "Accelerated stakeholder consultation and inter-ministerial coordination",
            },
            {
              title: "Market Integrity Concerns",
              impact: "High",
              probability: "Medium",
              mitigation: "Robust MRV systems and transparent governance frameworks",
            },
          ],
          objectives: [
            {
              title: "Establish Comprehensive Carbon Pricing Framework",
              target: "Operational ETS and carbon tax by 2026",
              metrics: ["Market volume", "Price stability", "Participant engagement"],
            },
            {
              title: "Achieve NDC Targets",
              target: "29% unconditional, 41% conditional emission reduction by 2030",
              metrics: ["Emission reductions", "Sectoral compliance", "International cooperation"],
            },
          ],
        },
        { onConflict: "id" },
      )
      .select()
      .single()

    if (initError || !initiative) {
      return `Error upserting initiative: ${initError?.message || "Unknown error"}`
    }

    const { error: deleteError } = await supabase.from("documents").delete().eq("initiative_id", initiative.id)

    if (deleteError) {
      console.log("[v0] Warning: Could not delete existing documents:", deleteError.message)
    }

    const documents = [
      {
        id: "doc_nusantara_overview_001",
        title: "Indonesia Carbon Pricing Governance Overview",
        description:
          "Comprehensive overview of Indonesia's carbon pricing governance framework, stakeholder engagement, and market development strategy",
        type: "policy",
        category: "governance",
        status: "published",
        tags: ["carbon-pricing", "governance", "policy-framework", "stakeholder-engagement"],
        content: `
<h1>Indonesia Carbon Pricing Governance</h1>
<p class="text-lg text-muted-foreground mb-6">Ministry of Environment / Environmental Protection Agency, Republic of Indonesia - November 2025</p>

<h2>Opportunities and Prospects for Carbon Trading in Indonesia</h2>

<p>Indonesia has taken significant steps to strengthen the supply side of its carbon market, supported by a continuously evolving policy framework and the active participation of various parties.</p>

<h3>Key Opportunities</h3>
<ol class="space-y-4">
  <li><strong>Big Potential of Carbon Supply:</strong> Indonesia is one of the countries with the largest natural carbon credit potential in the world, including significant opportunities from Blue Carbon. As an archipelagic country, Indonesia has the second longest coastline in the world.</li>
  
  <li><strong>Increasing Domestic and International Market Demand:</strong>
    <ul>
      <li>Companies with emissions targets (mandatory or voluntary)</li>
      <li>Other countries seeking carbon credits for their NDC targets</li>
    </ul>
  </li>
  
  <li><strong>Access to Global Climate Finance:</strong> Opportunities to utilize various international funding schemes</li>
  
  <li><strong>Technology Innovation:</strong> Developments in renewable energy, energy efficiency, and CCS/CCUS technologies</li>
  
  <li><strong>Regional Market Development:</strong> Indonesia's potential to become a carbon market hub in the ASEAN region</li>
  
  <li><strong>Increasing Global Awareness and Commitment:</strong> Encouraging more investment and collaboration</li>
</ol>

<div class="bg-primary/10 p-6 rounded-lg my-6">
  <h3 class="font-semibold mb-3">Strategic Focus Areas</h3>
  <ul class="space-y-2">
    <li>Strengthening cross-sectoral collaboration between government, private sector and community</li>
    <li>Maintaining market integrity to build long-term trust</li>
    <li>Developing transparent and credible regulatory frameworks</li>
  </ul>
</div>
`,
      },
      {
        id: "doc_nusantara_harmonization_002",
        title: "Carbon Market Harmonization Strategy",
        description:
          "Detailed framework for harmonizing carbon credit regulations, standards, and methodologies across various frameworks including JCM scheme transformation",
        type: "policy",
        category: "governance",
        status: "published",
        tags: ["carbon-market", "harmonization", "JCM", "standards"],
        content: `
<h1>Carbon Market Harmonization</h1>
<p class="text-lg text-muted-foreground mb-6">Creating a consistent and integrated approach to carbon markets</p>

<h2>Importance of Carbon Markets</h2>
<p>Carbon markets play a crucial role in achieving climate targets through flexible and cost-effective emission reduction mechanisms.</p>

<h3>Harmonization Framework</h3>
<ul class="space-y-3">
  <li><strong>Regulatory Alignment:</strong> Consistent standards across domestic and international frameworks</li>
  <li><strong>Methodological Consistency:</strong> Unified approaches to carbon accounting and verification</li>
  <li><strong>Market Infrastructure:</strong> Integrated trading platforms and registry systems</li>
  <li><strong>Stakeholder Coordination:</strong> Multi-party engagement and capacity building</li>
</ul>
`,
      },
      {
        id: "doc_nusantara_policy_003",
        title: "Role of Carbon Pricing in Environmental Policy",
        description:
          "Comprehensive analysis of carbon pricing as a policy instrument, including emissions accountability, incentives, data transparency, and financing mechanisms",
        type: "policy",
        category: "governance",
        status: "published",
        tags: ["carbon-pricing", "policy", "MRV", "financing"],
        content: `
<h1>Role of Carbon Pricing in Environmental Policy</h1>
<p class="text-lg text-muted-foreground mb-6">Carbon pricing as a powerful policy instrument with multiple functions</p>

<h2>Key Policy Functions</h2>
<ol class="space-y-4">
  <li><strong>Emissions Accountability:</strong> Establishing clear responsibility for carbon emissions across sectors</li>
  <li><strong>Economic Incentives:</strong> Creating market-based mechanisms to drive emission reductions</li>
  <li><strong>Data Transparency:</strong> Robust MRV (Monitoring, Reporting, Verification) systems</li>
  <li><strong>Climate Finance:</strong> Mobilizing resources for mitigation and adaptation activities</li>
</ol>
`,
      },
      {
        id: "doc_nusantara_mechanisms_004",
        title: "Development of Carbon Pricing Mechanisms",
        description:
          "Framework for implementing carbon pricing mechanisms including carbon trading, result-based payment, and carbon levy systems aligned with Paris Agreement NDCs",
        type: "policy",
        category: "governance",
        status: "published",
        tags: ["carbon-pricing", "mechanisms", "NDC", "Paris-Agreement"],
        content: `
<h1>Development of Carbon Pricing Mechanisms</h1>
<p class="text-lg text-muted-foreground mb-6">Building the foundation for effective carbon pricing implementation</p>

<h2>Core Mechanisms</h2>
<div class="space-y-6">
  <div class="border-l-4 border-primary pl-4">
    <h3 class="font-semibold">Emissions Trading System (ETS)</h3>
    <p>Cap-and-trade mechanism for regulated entities with tradable emission allowances</p>
  </div>
  
  <div class="border-l-4 border-primary pl-4">
    <h3 class="font-semibold">Carbon Tax</h3>
    <p>Direct price on carbon emissions to incentivize reduction activities</p>
  </div>
  
  <div class="border-l-4 border-primary pl-4">
    <h3 class="font-semibold">Result-Based Payment</h3>
    <p>Performance-based financing for verified emission reductions</p>
  </div>
</div>
`,
      },
      {
        id: "doc_nusantara_unfccc_005",
        title: "Carbon Pricing Update under UNFCCC",
        description:
          "Historical timeline and evolution of carbon pricing mechanisms from Rio Earth Summit to Paris Climate Finance Summit",
        type: "policy",
        category: "governance",
        status: "published",
        tags: ["UNFCCC", "Paris-Agreement", "climate-finance", "NDC"],
        content: `
<h1>Carbon Pricing Update under UNFCCC</h1>
<p class="text-lg text-muted-foreground mb-6">Evolution of international climate cooperation and carbon pricing mechanisms</p>

<h2>Historical Timeline</h2>
<div class="space-y-4">
  <div class="bg-muted p-4 rounded-lg">
    <h3 class="font-semibold">1992 - Rio Earth Summit</h3>
    <p class="text-sm">Foundation of UNFCCC and international climate cooperation</p>
  </div>
  
  <div class="bg-muted p-4 rounded-lg">
    <h3 class="font-semibold">1997 - Kyoto Protocol</h3>
    <p class="text-sm">Introduction of flexible mechanisms: CDM, JI, and emissions trading</p>
  </div>
  
  <div class="bg-muted p-4 rounded-lg">
    <h3 class="font-semibold">2015 - Paris Agreement</h3>
    <p class="text-sm">Article 6 cooperative approaches and market mechanisms</p>
  </div>
  
  <div class="bg-muted p-4 rounded-lg">
    <h3 class="font-semibold">2025 - Current Implementation</h3>
    <p class="text-sm">Indonesia's comprehensive carbon pricing framework aligned with NDC targets</p>
  </div>
</div>
`,
      },
      {
        id: "doc_nusantara_progress_006",
        title: "Carbon Trading Preparation Progress 2025-2026",
        description:
          "Strategic priorities and implementation roadmap for carbon trading preparation, including World Bank support and bilateral cooperation frameworks",
        type: "policy",
        category: "governance",
        status: "published",
        tags: ["carbon-trading", "implementation", "bilateral-cooperation", "Article-6"],
        content: `
<h1>Carbon Trading Preparation Progress</h1>
<p class="text-lg text-muted-foreground mb-6">Strategic priorities and implementation roadmap for 2025-2026</p>

<h2>Implementation Priorities</h2>
<ul class="space-y-3">
  <li><strong>Market Infrastructure Development:</strong> Establishing robust trading platforms and registry systems</li>
  <li><strong>Regulatory Framework Completion:</strong> Finalizing Presidential Regulation 112/2022 amendments</li>
  <li><strong>Capacity Building:</strong> Training programs for market participants and regulators</li>
  <li><strong>International Cooperation:</strong> Bilateral agreements under Article 6 of Paris Agreement</li>
  <li><strong>Pilot Programs:</strong> Sectoral testing of carbon pricing mechanisms</li>
</ul>

<div class="bg-primary/10 p-6 rounded-lg my-6">
  <h3 class="font-semibold mb-3">World Bank Partnership</h3>
  <p>Technical assistance for market design, MRV systems, and institutional capacity development</p>
</div>
`,
      },
      {
        id: "doc_nusantara_regulation_007",
        title: "Active Regulatory Development: Presidential Regulation 112/2022 Amendment",
        description:
          "Public consultation process for amending Presidential Regulation 112/2022 on Acceleration of Renewable Energy Development",
        type: "policy",
        category: "governance",
        status: "published",
        tags: ["regulatory-development", "public-consultation", "renewable-energy", "Perpres-112"],
        content: `
<h1>Active Regulatory Development</h1>
<p class="text-lg text-muted-foreground mb-6">Public Consultation on Presidential Regulation Amendment</p>

<h2>Presidential Regulation 112/2022</h2>
<p>Regulation on Acceleration of Renewable Energy Development for Electricity Supply</p>

<h3>Amendment Objectives</h3>
<ol class="space-y-3">
  <li>Strengthen carbon pricing integration with renewable energy development</li>
  <li>Clarify roles and responsibilities of market participants</li>
  <li>Enhance transparency and accountability mechanisms</li>
  <li>Align with international best practices and Article 6 requirements</li>
</ol>

<div class="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 my-6">
  <h3 class="font-semibold mb-2">Public Consultation Process</h3>
  <p class="text-sm">Multi-stakeholder engagement including government agencies, private sector, civil society, and international partners</p>
</div>
`,
      },
      {
        id: "doc_community_benefits_001",
        title: "Community Benefits & Social Impact Framework",
        description:
          "Comprehensive analysis of community benefits, social impact, and inclusive development outcomes from carbon pricing implementation",
        type: "policy",
        category: "governance",
        status: "published",
        tags: ["community-benefits", "social-impact", "inclusive-development", "SDGs"],
        content: `
<h1>Community Benefits & Social Impact Framework</h1>
<p class="text-lg text-muted-foreground mb-6">Ensuring equitable and inclusive carbon pricing implementation</p>

<h2>Economic Benefits</h2>
<ul class="space-y-3">
  <li><strong>Job Creation:</strong> Green jobs in renewable energy, forestry, and carbon project development</li>
  <li><strong>Revenue Generation:</strong> Carbon credit sales benefiting local communities</li>
  <li><strong>Economic Diversification:</strong> New income streams for rural and coastal communities</li>
</ul>

<h2>Environmental Benefits</h2>
<ul class="space-y-3">
  <li><strong>Emissions Reduction:</strong> Cleaner air and reduced health impacts</li>
  <li><strong>Ecosystem Services:</strong> Protection of forests, mangroves, and marine ecosystems</li>
  <li><strong>Climate Resilience:</strong> Enhanced adaptive capacity for vulnerable communities</li>
</ul>

<h2>Social Development</h2>
<ul class="space-y-3">
  <li><strong>Community Empowerment:</strong> Participation in carbon project governance</li>
  <li><strong>Health Improvements:</strong> Reduced pollution-related health issues</li>
  <li><strong>Education & Capacity Building:</strong> Training programs and knowledge transfer</li>
</ul>

<div class="bg-primary/10 p-6 rounded-lg my-6">
  <h3 class="font-semibold mb-3">Alignment with SDGs</h3>
  <p>Carbon pricing framework contributes to multiple Sustainable Development Goals including SDG 7 (Clean Energy), SDG 8 (Decent Work), SDG 13 (Climate Action), and SDG 17 (Partnerships)</p>
</div>

<h2>Equity & Inclusion</h2>
<p>Ensuring fair distribution of benefits and protection of vulnerable populations through:</p>
<ul class="space-y-2">
  <li>Revenue recycling mechanisms for low-income households</li>
  <li>Free allocation of emission allowances for energy-intensive industries during transition</li>
  <li>Community consultation and consent processes</li>
  <li>Grievance mechanisms and dispute resolution</li>
</ul>
`,
      },
    ]

    const { data, error } = await supabase
      .from("documents")
      .insert(
        documents.map((doc) => ({
          ...doc,
          initiative_id: initiative.id,
        })),
      )
      .select()

    if (error) {
      return `Error inserting documents: ${error.message}`
    }

    return `✅ Successfully updated The Nusantara Code initiative and populated ${data.length} comprehensive documents!`
  } catch (error) {
    return `Error: ${error instanceof Error ? error.message : "Unknown error"}`
  }
}

export async function cleanAndRepopulateNusantaraCode() {
  try {
    const supabase = await createClient()

    const { data: initiative, error: initError } = await supabase
      .from("initiatives")
      .select("id")
      .eq("title", "The Nusantara Code")
      .single()

    if (initError || !initiative) {
      return "Error: Nusantara Code initiative not found. Please create it first."
    }

    const { error: deleteError } = await supabase.from("documents").delete().eq("initiative_id", initiative.id)

    if (deleteError) {
      return `Error deleting existing documents: ${deleteError.message}`
    }

    return await populateNusantaraCodeContent()
  } catch (error) {
    return `Error: ${error instanceof Error ? error.message : "Unknown error"}`
  }
}

export async function populatePlatformBusinessPlan() {
  try {
    const supabase = await createClient()

    const { data: existingInitiative } = await supabase
      .from("initiatives")
      .select("id")
      .eq("title", "1ncubator Platform Business Plan")
      .maybeSingle()

    if (existingInitiative) {
      return "Business Plan initiative already exists. Please delete it first if you want to recreate it."
    }

    const { data: initiative, error: initError } = await supabase
      .from("initiatives")
      .insert({
        id: global.crypto.randomUUID(),
        title: "1ncubator Platform Business Plan",
        description: "Comprehensive business plan for the 1ncubator innovation development platform",
        status: "active",
        category: "platform",
      })
      .select()
      .single()

    if (initError || !initiative) {
      return `Error creating initiative: ${initError?.message || "Unknown error"}`
    }

    return `✅ Successfully created Platform Business Plan initiative!`
  } catch (error) {
    return `Error: ${error instanceof Error ? error.message : "Unknown error"}`
  }
}

export async function populateObjectiveTrackApp() {
  try {
    const supabase = await createClient()

    const { data: existingInitiative } = await supabase
      .from("initiatives")
      .select("id")
      .eq("title", "Indonesian Objective Track App")
      .maybeSingle()

    if (existingInitiative) {
      return "Objective Track App initiative already exists."
    }

    const { data: initiative, error: initError } = await supabase
      .from("initiatives")
      .insert({
        id: global.crypto.randomUUID(),
        title: "Indonesian Objective Track App",
        description: "Gamified personal growth platform integrating Indonesian cultural wisdom",
        status: "active",
        category: "personal-growth",
      })
      .select()
      .single()

    if (initError || !initiative) {
      return `Error creating initiative: ${initError?.message || "Unknown error"}`
    }

    return `✅ Successfully created Objective Track App initiative!`
  } catch (error) {
    return `Error: ${error instanceof Error ? error.message : "Unknown error"}`
  }
}

export async function populate1ncubatorPlatform() {
  try {
    const supabase = await createClient()

    const { data: existingInitiative } = await supabase
      .from("initiatives")
      .select("id")
      .eq("title", "1ncubator Innovation Platform")
      .maybeSingle()

    if (existingInitiative) {
      return "1ncubator Platform initiative already exists."
    }

    const { data: initiative, error: initError } = await supabase
      .from("initiatives")
      .insert({
        id: global.crypto.randomUUID(),
        title: "1ncubator Innovation Platform",
        description: "AI-powered innovation development platform transforming research into deployed initiatives",
        status: "active",
        category: "platform",
      })
      .select()
      .single()

    if (initError || !initiative) {
      return `Error creating initiative: ${initError?.message || "Unknown error"}`
    }

    return `✅ Successfully created 1ncubator Platform initiative!`
  } catch (error) {
    return `Error: ${error instanceof Error ? error.message : "Unknown error"}`
  }
}
