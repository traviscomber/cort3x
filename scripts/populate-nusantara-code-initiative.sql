-- Restore The Nusantara Code Initiative with all 8 comprehensive documents
-- Execute this script to populate the carbon pricing governance initiative

-- Insert The Nusantara Code Initiative
INSERT INTO initiatives (id, title, description, category, status, progress, budget, start_date, end_date, created_at, updated_at)
VALUES (
  'the-nusantara-code',
  'The Nusantara Code',
  'Indonesia''s comprehensive carbon pricing governance framework and market harmonization initiative. A strategic blueprint for implementing carbon markets, stakeholder engagement, and environmental policy integration aligned with UNFCCC commitments and Presidential Regulation 112/2022.',
  'environmental',
  'active',
  65,
  2500000,
  '2024-01-15',
  '2026-12-31',
  NOW(),
  NOW()
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  category = EXCLUDED.category,
  status = EXCLUDED.status,
  progress = EXCLUDED.progress,
  budget = EXCLUDED.budget,
  start_date = EXCLUDED.start_date,
  end_date = EXCLUDED.end_date,
  updated_at = NOW();

-- Document 1: Indonesia Carbon Pricing Governance Overview
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Indonesia Carbon Pricing Governance Overview',
  'Comprehensive overview of Indonesia''s carbon pricing governance framework, including institutional structure, regulatory mechanisms, and strategic implementation roadmap.',
  'governance',
  '["carbon-pricing", "governance", "policy-framework", "indonesia"]'::jsonb,
  '<div class="document-content">
    <h1>Indonesia Carbon Pricing Governance Overview</h1>
    <p class="lead">A comprehensive framework for implementing carbon pricing mechanisms across Indonesia, aligned with national climate commitments and international standards.</p>
    
    <h2>Executive Summary</h2>
    <p>Indonesia''s carbon pricing governance framework represents a transformative approach to environmental policy, integrating market-based mechanisms with regulatory oversight to achieve ambitious climate targets while fostering economic growth.</p>
    
    <h2>Governance Structure</h2>
    <h3>Ministry of Environment and Forestry</h3>
    <ul>
      <li><strong>Directorate General of Climate Change</strong> - Policy development and international coordination</li>
      <li><strong>Deputy of Carbon Governance</strong> - Market oversight and compliance monitoring</li>
      <li><strong>National Registry System (SRN-PPI)</strong> - Carbon credit tracking and verification</li>
    </ul>
    
    <h3>Financial Services Authority (OJK)</h3>
    <ul>
      <li>Regulation of IDX Carbon Exchange</li>
      <li>Market integrity and investor protection</li>
      <li>Financial product oversight</li>
    </ul>
    
    <h2>Key Regulatory Instruments</h2>
    <h3>Presidential Regulation 112/2022</h3>
    <p>Acceleration of Renewable Energy Development for Electricity Supply - the foundational regulation establishing carbon pricing mechanisms and renewable energy targets.</p>
    
    <h3>Carbon Pricing Mechanisms</h3>
    <ul>
      <li><strong>Emissions Trading System (ETS)</strong> - Cap-and-trade for major emitters</li>
      <li><strong>Carbon Tax</strong> - Direct pricing on carbon emissions</li>
      <li><strong>Carbon Offset Credits</strong> - Project-based emission reductions</li>
    </ul>
    
    <h2>Implementation Timeline</h2>
    <table>
      <tr><th>Phase</th><th>Period</th><th>Key Activities</th></tr>
      <tr><td>Phase 1: Foundation</td><td>2024-2025</td><td>Regulatory framework, registry system, pilot programs</td></tr>
      <tr><td>Phase 2: Expansion</td><td>2025-2026</td><td>Market launch, sectoral integration, international linkages</td></tr>
      <tr><td>Phase 3: Maturity</td><td>2026-2030</td><td>Full market operation, regional harmonization, NDC achievement</td></tr>
    </table>
    
    <h2>Stakeholder Engagement</h2>
    <p>Multi-stakeholder approach involving government agencies, private sector, civil society, and international partners to ensure inclusive and effective implementation.</p>
  </div>',
  'policy_document',
  'published',
  4500,
  NOW(),
  NOW()
);

-- Document 2: Carbon Markets and Harmonization Framework
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Carbon Markets and Harmonization Framework',
  'Detailed framework for carbon market development, international harmonization, and integration with global carbon trading systems including JCM and bilateral agreements.',
  'market-mechanisms',
  '["carbon-markets", "harmonization", "trading", "international-cooperation"]'::jsonb,
  '<div class="document-content">
    <h1>Carbon Markets and Harmonization Framework</h1>
    
    <h2>The Importance of Carbon Markets</h2>
    <p>Carbon markets are essential instruments for achieving climate targets cost-effectively while creating economic opportunities and driving innovation in clean technologies.</p>
    
    <h3>Key Benefits</h3>
    <ul>
      <li><strong>Cost Efficiency</strong> - Market mechanisms find lowest-cost emission reduction opportunities</li>
      <li><strong>Innovation Driver</strong> - Economic incentives for clean technology development</li>
      <li><strong>Revenue Generation</strong> - Funding for climate adaptation and mitigation projects</li>
      <li><strong>International Cooperation</strong> - Cross-border carbon trading and technology transfer</li>
    </ul>
    
    <h2>Market Harmonization Strategy</h2>
    <h3>Domestic Market Integration</h3>
    <ul>
      <li>Unified carbon pricing across sectors (Energy, FOLU, IPPU, Agriculture, Waste)</li>
      <li>Standardized MRV (Monitoring, Reporting, Verification) protocols</li>
      <li>Interoperable registry systems</li>
      <li>Consistent compliance mechanisms</li>
    </ul>
    
    <h3>International Linkages</h3>
    <p><strong>Joint Crediting Mechanism (JCM) with Japan</strong></p>
    <ul>
      <li>Bilateral carbon credit trading</li>
      <li>Technology transfer and capacity building</li>
      <li>Project co-financing mechanisms</li>
    </ul>
    
    <p><strong>VERRA to SPEI Transformation</strong></p>
    <ul>
      <li>Transition from international to national carbon standards</li>
      <li>Enhanced credibility and local ownership</li>
      <li>Alignment with Indonesian regulatory framework</li>
    </ul>
    
    <h2>Market Infrastructure</h2>
    <h3>IDX Carbon Exchange</h3>
    <ul>
      <li>Primary market for carbon credit issuance</li>
      <li>Secondary market for trading and price discovery</li>
      <li>Derivatives market for risk management</li>
      <li>Regulated by OJK for market integrity</li>
    </ul>
    
    <h3>National Registry System (SRN-PPI)</h3>
    <ul>
      <li>Centralized tracking of carbon credits</li>
      <li>Issuance, transfer, and retirement of credits</li>
      <li>Transparency and anti-double-counting measures</li>
      <li>Integration with international registries</li>
    </ul>
    
    <h2>Harmonization with Global Standards</h2>
    <ul>
      <li><strong>Paris Agreement Article 6</strong> - International carbon market mechanisms</li>
      <li><strong>CORSIA</strong> - Aviation sector carbon offsetting</li>
      <li><strong>ISO 14064/14065</strong> - GHG accounting and verification standards</li>
      <li><strong>GHG Protocol</strong> - Corporate carbon accounting</li>
    </ul>
  </div>',
  'policy_document',
  'published',
  3800,
  NOW(),
  NOW()
);

-- Document 3: Role of Carbon Pricing in Environmental Policy
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Role of Carbon Pricing in Environmental Policy',
  'Analysis of how carbon pricing mechanisms integrate with broader environmental policy objectives, including emissions accountability, financing, and multi-sector collaboration.',
  'policy-analysis',
  '["environmental-policy", "carbon-pricing", "emissions", "sustainability"]'::jsonb,
  '<div class="document-content">
    <h1>Role of Carbon Pricing in Environmental Policy</h1>
    
    <h2>Carbon Pricing as a Policy Instrument</h2>
    <p>Carbon pricing serves as a cornerstone of Indonesia''s environmental policy, creating economic incentives for emission reductions while generating revenue for climate action.</p>
    
    <h2>Key Policy Functions</h2>
    
    <h3>1. Emissions Accountability</h3>
    <ul>
      <li><strong>Polluter Pays Principle</strong> - Entities responsible for emissions bear the cost</li>
      <li><strong>Transparent Reporting</strong> - Mandatory disclosure of carbon footprints</li>
      <li><strong>Compliance Mechanisms</strong> - Penalties for non-compliance, rewards for over-achievement</li>
      <li><strong>Sectoral Coverage</strong> - Energy, industry, transportation, agriculture, waste</li>
    </ul>
    
    <h3>2. Economic Incentives and Disincentives</h3>
    <ul>
      <li><strong>Price Signal</strong> - Carbon price guides investment decisions toward clean technologies</li>
      <li><strong>Innovation Stimulus</strong> - Economic rewards for emission reduction innovations</li>
      <li><strong>Behavioral Change</strong> - Consumer and producer responses to carbon costs</li>
      <li><strong>Competitiveness</strong> - Level playing field for clean vs. polluting activities</li>
    </ul>
    
    <h3>3. Data Transparency and MRV</h3>
    <ul>
      <li><strong>Monitoring Systems</strong> - Real-time emission tracking technologies</li>
      <li><strong>Reporting Standards</strong> - Standardized formats for emission disclosure</li>
      <li><strong>Verification Protocols</strong> - Third-party auditing and certification</li>
      <li><strong>Public Access</strong> - Open data platforms for stakeholder engagement</li>
    </ul>
    
    <h3>4. Climate Finance Generation</h3>
    <ul>
      <li><strong>Carbon Tax Revenue</strong> - Funding for renewable energy and adaptation projects</li>
      <li><strong>Auction Proceeds</strong> - ETS allowance auctions generate public revenue</li>
      <li><strong>Green Bonds</strong> - Carbon credit-backed financial instruments</li>
      <li><strong>International Finance</strong> - Access to climate funds and development assistance</li>
    </ul>
    
    <h3>5. Multi-Sector Collaboration</h3>
    <ul>
      <li><strong>Government Coordination</strong> - Inter-ministerial cooperation on climate policy</li>
      <li><strong>Private Sector Engagement</strong> - Business participation in carbon markets</li>
      <li><strong>Civil Society Involvement</strong> - NGO monitoring and advocacy</li>
      <li><strong>Academic Research</strong> - Evidence-based policy development</li>
    </ul>
    
    <h2>Integration with National Development Goals</h2>
    <ul>
      <li><strong>NDC Achievement</strong> - 29% unconditional, 41% conditional emission reduction by 2030</li>
      <li><strong>Sustainable Development</strong> - Alignment with SDGs, particularly SDG 13 (Climate Action)</li>
      <li><strong>Economic Growth</strong> - Green economy transition creating jobs and opportunities</li>
      <li><strong>Energy Security</strong> - Reduced fossil fuel dependence through renewable energy</li>
    </ul>
    
    <h2>Policy Coherence</h2>
    <p>Carbon pricing mechanisms are integrated with complementary policies including renewable energy mandates, energy efficiency standards, forest conservation programs, and sustainable transportation initiatives.</p>
  </div>',
  'policy_document',
  'published',
  4200,
  NOW(),
  NOW()
);

-- Document 4: Development of Carbon Pricing Mechanisms
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Development of Carbon Pricing Mechanisms',
  'Technical details on the design and implementation of Indonesia''s carbon pricing mechanisms, including ETS, carbon tax, and offset programs across multiple sectors.',
  'technical-specifications',
  '["carbon-pricing", "ets", "carbon-tax", "mechanisms"]'::jsonb,
  '<div class="document-content">
    <h1>Development of Carbon Pricing Mechanisms</h1>
    
    <h2>Overview of Pricing Mechanisms</h2>
    <p>Indonesia employs a hybrid approach combining emissions trading, carbon taxation, and offset mechanisms to achieve cost-effective emission reductions across all economic sectors.</p>
    
    <h2>Emissions Trading System (ETS)</h2>
    
    <h3>Design Features</h3>
    <ul>
      <li><strong>Cap Setting</strong> - Absolute emission cap declining over time to meet NDC targets</li>
      <li><strong>Allowance Allocation</strong> - Mix of free allocation (transitional) and auctioning</li>
      <li><strong>Trading Platform</strong> - IDX Carbon Exchange for allowance trading</li>
      <li><strong>Compliance Periods</strong> - Annual compliance with multi-year flexibility</li>
    </ul>
    
    <h3>Sectoral Coverage</h3>
    <ul>
      <li><strong>Energy Sector</strong> - Power generation, oil & gas, coal mining</li>
      <li><strong>Industrial Processes (IPPU)</strong> - Cement, steel, chemicals, pulp & paper</li>
      <li><strong>Transportation</strong> - Aviation, shipping (phased inclusion)</li>
    </ul>
    
    <h3>Market Stability Mechanisms</h3>
    <ul>
      <li><strong>Price Floor</strong> - Minimum carbon price to ensure investment certainty</li>
      <li><strong>Price Ceiling</strong> - Maximum price to prevent excessive costs</li>
      <li><strong>Allowance Reserve</strong> - Strategic reserve for market intervention</li>
      <li><strong>Banking and Borrowing</strong> - Inter-temporal flexibility for compliance</li>
    </ul>
    
    <h2>Carbon Tax</h2>
    
    <h3>Tax Structure</h3>
    <ul>
      <li><strong>Tax Base</strong> - Carbon content of fossil fuels and direct emissions</li>
      <li><strong>Tax Rate</strong> - Progressive increase from IDR 30,000/tCO2e (2024) to IDR 150,000/tCO2e (2030)</li>
      <li><strong>Revenue Recycling</strong> - Earmarked for renewable energy and climate adaptation</li>
    </ul>
    
    <h3>Sectoral Application</h3>
    <ul>
      <li><strong>Fossil Fuel Combustion</strong> - Upstream taxation on coal, oil, gas</li>
      <li><strong>Non-ETS Sectors</strong> - Buildings, small industry, agriculture</li>
      <li><strong>Waste Management</strong> - Landfill methane emissions</li>
    </ul>
    
    <h2>Carbon Offset Programs</h2>
    
    <h3>Project Types</h3>
    <ul>
      <li><strong>Forestry and Land Use (FOLU)</strong> - Reforestation, avoided deforestation, sustainable forest management</li>
      <li><strong>Renewable Energy</strong> - Solar, wind, hydro, geothermal, biomass projects</li>
      <li><strong>Energy Efficiency</strong> - Industrial efficiency, building retrofits</li>
      <li><strong>Blue Carbon</strong> - Mangrove restoration, seagrass conservation</li>
    </ul>
    
    <h3>Credit Issuance Process</h3>
    <ol>
      <li><strong>Project Registration</strong> - Submission to National Registry (SRN-PPI)</li>
      <li><strong>Baseline Determination</strong> - Establish reference scenario</li>
      <li><strong>Monitoring</strong> - Continuous emission reduction tracking</li>
      <li><strong>Verification</strong> - Third-party audit of emission reductions</li>
      <li><strong>Credit Issuance</strong> - Registry issues verified carbon credits</li>
    </ol>
    
    <h2>Sectoral Integration</h2>
    
    <h3>New Economic Paradigm</h3>
    <ul>
      <li><strong>Green Market</strong> - Carbon pricing creates demand for clean products/services</li>
      <li><strong>Green Investment</strong> - Capital flows to low-carbon technologies and infrastructure</li>
      <li><strong>Green Jobs</strong> - Employment creation in renewable energy, efficiency, conservation</li>
    </ul>
    
    <h3>NDC to Paris Agreement Alignment</h3>
    <ul>
      <li><strong>Article 6.2</strong> - Bilateral carbon credit trading (e.g., JCM with Japan)</li>
      <li><strong>Article 6.4</strong> - International carbon market mechanism</li>
      <li><strong>Article 6.8</strong> - Non-market approaches (technology transfer, capacity building)</li>
    </ul>
    
    <h2>Implementation Roadmap</h2>
    <table>
      <tr><th>Year</th><th>Milestone</th></tr>
      <tr><td>2024</td><td>ETS pilot launch (power sector), Carbon tax implementation</td></tr>
      <tr><td>2025</td><td>ETS expansion (industry), Offset program scaling</td></tr>
      <tr><td>2026</td><td>Full ETS operation, International linkages</td></tr>
      <tr><td>2027-2030</td><td>Market maturity, NDC achievement, Regional harmonization</td></tr>
    </table>
  </div>',
  'policy_document',
  'published',
  5100,
  NOW(),
  NOW()
);

-- Document 5: Carbon Pricing Update under UNFCCC
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Carbon Pricing Update under UNFCCC',
  'Indonesia''s carbon pricing developments in the context of UNFCCC commitments, from Rio Earth Summit through Paris Agreement to Glasgow Climate Pact and beyond.',
  'international-policy',
  '["unfccc", "paris-agreement", "international-cooperation", "climate-policy"]'::jsonb,
  '<div class="document-content">
    <h1>Carbon Pricing Update under UNFCCC</h1>
    
    <h2>Historical Context</h2>
    
    <h3>1992: Rio Earth Summit</h3>
    <ul>
      <li>UNFCCC established - Framework Convention on Climate Change</li>
      <li>Indonesia as founding member committed to climate action</li>
      <li>Principle of "common but differentiated responsibilities"</li>
    </ul>
    
    <h3>1997: Kyoto Protocol</h3>
    <ul>
      <li>Clean Development Mechanism (CDM) introduced</li>
      <li>Indonesia participated in CDM projects</li>
      <li>Early experience with carbon markets</li>
    </ul>
    
    <h3>2015: Paris Agreement</h3>
    <ul>
      <li><strong>Indonesia''s NDC</strong> - 29% unconditional, 41% conditional emission reduction by 2030</li>
      <li><strong>Article 6</strong> - Cooperative approaches for carbon markets</li>
      <li><strong>Transparency Framework</strong> - Enhanced reporting and review</li>
    </ul>
    
    <h3>2021: Glasgow Climate Pact</h3>
    <ul>
      <li>Article 6 rulebook finalized</li>
      <li>Indonesia committed to enhanced NDC implementation</li>
      <li>Forest and land use sector prioritization</li>
    </ul>
    
    <h2>Indonesia''s UNFCCC Commitments</h2>
    
    <h3>Nationally Determined Contribution (NDC)</h3>
    <ul>
      <li><strong>Unconditional Target</strong> - 29% emission reduction by 2030 (vs. BAU)</li>
      <li><strong>Conditional Target</strong> - 41% emission reduction with international support</li>
      <li><strong>Sectoral Breakdown</strong>
        <ul>
          <li>Forestry and Land Use: 17.2% reduction</li>
          <li>Energy: 11% reduction</li>
          <li>Waste: 0.38% reduction</li>
          <li>Industrial Processes: 0.10% reduction</li>
          <li>Agriculture: 0.32% reduction</li>
        </ul>
      </li>
    </ul>
    
    <h3>Long-Term Strategy (LTS)</h3>
    <ul>
      <li><strong>Net Zero Target</strong> - Carbon neutrality by 2060 or sooner</li>
      <li><strong>Sectoral Pathways</strong> - Detailed decarbonization roadmaps</li>
      <li><strong>Just Transition</strong> - Social and economic considerations</li>
    </ul>
    
    <h2>Article 6 Implementation</h2>
    
    <h3>Article 6.2: Cooperative Approaches</h3>
    <ul>
      <li><strong>Bilateral Agreements</strong> - JCM with Japan, agreements with Norway, Switzerland</li>
      <li><strong>Corresponding Adjustments</strong> - Avoiding double counting of emission reductions</li>
      <li><strong>Transparency</strong> - Reporting of internationally transferred mitigation outcomes (ITMOs)</li>
    </ul>
    
    <h3>Article 6.4: Mechanism</h3>
    <ul>
      <li><strong>Successor to CDM</strong> - Enhanced crediting mechanism</li>
      <li><strong>Sustainable Development</strong> - Co-benefits beyond emission reductions</li>
      <li><strong>Share of Proceeds</strong> - Contribution to adaptation finance</li>
    </ul>
    
    <h2>Compliance and Reporting</h2>
    
    <h3>Enhanced Transparency Framework (ETF)</h3>
    <ul>
      <li><strong>Biennial Transparency Reports (BTRs)</strong> - Comprehensive reporting every 2 years</li>
      <li><strong>National Inventory Reports</strong> - Annual GHG emissions data</li>
      <li><strong>Technical Expert Review</strong> - International review of reports</li>
      <li><strong>Facilitative Sharing of Views</strong> - Multilateral consideration of progress</li>
    </ul>
    
    <h3>Global Stocktake</h3>
    <ul>
      <li><strong>5-Year Cycle</strong> - Assessment of collective progress toward Paris goals</li>
      <li><strong>Indonesia''s Contribution</strong> - Input on mitigation, adaptation, finance</li>
      <li><strong>Ratchet Mechanism</strong> - Enhanced ambition in subsequent NDCs</li>
    </ul>
    
    <h2>International Cooperation</h2>
    
    <h3>Bilateral Partnerships</h3>
    <ul>
      <li><strong>Japan (JCM)</strong> - Technology transfer, project co-financing</li>
      <li><strong>Norway</strong> - REDD+ results-based payments</li>
      <li><strong>Switzerland</strong> - Article 6 pilot projects</li>
    </ul>
    
    <h3>Multilateral Support</h3>
    <ul>
      <li><strong>World Bank</strong> - Forest Carbon Partnership Facility (FCPF)</li>
      <li><strong>Green Climate Fund (GCF)</strong> - Project financing</li>
      <li><strong>Global Environment Facility (GEF)</strong> - Capacity building</li>
    </ul>
    
    <h2>Future Outlook</h2>
    <ul>
      <li><strong>2025</strong> - Submit enhanced NDC with increased ambition</li>
      <li><strong>2028</strong> - First Global Stocktake outcomes inform policy</li>
      <li><strong>2030</strong> - Achieve NDC targets, prepare for net-zero pathway</li>
      <li><strong>2060</strong> - Carbon neutrality achievement</li>
    </ul>
  </div>',
  'policy_document',
  'published',
  4800,
  NOW(),
  NOW()
);

-- Document 6: Carbon Trading Preparation Progress Update
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Carbon Trading Preparation Progress Update',
  'Current status and progress of Indonesia''s carbon trading infrastructure development, including bilateral agreements, funding support, and strategic priorities for 2025.',
  'progress-report',
  '["carbon-trading", "progress", "infrastructure", "bilateral-cooperation"]'::jsonb,
  '<div class="document-content">
    <h1>Carbon Trading Preparation Progress Update</h1>
    
    <h2>Executive Summary</h2>
    <p>Indonesia has made significant progress in establishing the institutional, regulatory, and technical infrastructure for carbon trading. Key achievements include bilateral agreements, registry system development, and market pilot programs.</p>
    
    <h2>Opportunities and Prospects</h2>
    
    <h3>1. Big Carbon Supply Potential</h3>
    <ul>
      <li><strong>Blue Carbon</strong> - Indonesia has 3.2 million hectares of mangroves (23% of global total)</li>
      <li><strong>Forest Carbon</strong> - 120 million hectares of forest with high sequestration potential</li>
      <li><strong>Peatland Restoration</strong> - 14.9 million hectares of peatland for conservation</li>
      <li><strong>Renewable Energy</strong> - Abundant solar, wind, geothermal, hydro resources</li>
    </ul>
    
    <h3>2. Increasing Market Demand</h3>
    <ul>
      <li>Global voluntary carbon market growing 30% annually</li>
      <li>Corporate net-zero commitments driving demand</li>
      <li>Compliance markets expanding (EU ETS, China ETS, etc.)</li>
      <li>Aviation sector (CORSIA) requiring offsets</li>
    </ul>
    
    <h3>3. Access to Climate Finance</h3>
    <ul>
      <li><strong>Results-Based Payments</strong> - Norway REDD+ agreement ($1 billion)</li>
      <li><strong>Green Climate Fund</strong> - Project financing for mitigation/adaptation</li>
      <li><strong>World Bank FCPF</strong> - Forest carbon payments</li>
      <li><strong>Private Investment</strong> - Carbon credit pre-purchase agreements</li>
    </ul>
    
    <h3>4. Technology Innovation and Transfer</h3>
    <ul>
      <li><strong>JCM with Japan</strong> - Clean technology deployment</li>
      <li><strong>MRV Systems</strong> - Satellite monitoring, IoT sensors, blockchain</li>
      <li><strong>Digital Platforms</strong> - Carbon credit trading and registry systems</li>
      <li><strong>Capacity Building</strong> - Training programs for carbon project developers</li>
    </ul>
    
    <h3>5. Regional Market Development</h3>
    <ul>
      <li><strong>ASEAN Cooperation</strong> - Regional carbon market harmonization</li>
      <li><strong>Cross-Border Projects</strong> - Transboundary conservation initiatives</li>
      <li><strong>Knowledge Sharing</strong> - Best practices exchange with regional partners</li>
    </ul>
    
    <h3>6. Global Awareness and Commitment</h3>
    <ul>
      <li>Increased corporate ESG commitments</li>
      <li>Consumer demand for carbon-neutral products</li>
      <li>Investor focus on climate risk and opportunity</li>
      <li>Government pledges under Paris Agreement</li>
    </ul>
    
    <h2>Article 6 Implementation Progress</h2>
    
    <h3>Bilateral Agreements</h3>
    <ul>
      <li><strong>Japan (JCM)</strong>
        <ul>
          <li>15 registered projects across renewable energy and efficiency</li>
          <li>Technology transfer valued at $50 million</li>
          <li>Capacity building for 500+ project developers</li>
        </ul>
      </li>
      <li><strong>Norway</strong>
        <ul>
          <li>REDD+ results-based payments agreement</li>
          <li>$1 billion committed for verified emission reductions</li>
          <li>Focus on forest conservation and peatland restoration</li>
        </ul>
      </li>
      <li><strong>Switzerland</strong>
        <ul>
          <li>Article 6.2 pilot agreement signed</li>
          <li>Focus on renewable energy and waste management</li>
          <li>Technical support for MRV system development</li>
        </ul>
      </li>
    </ul>
    
    <h3>Funding Support</h3>
    <ul>
      <li><strong>World Bank</strong> - $100 million for carbon market readiness</li>
      <li><strong>PMI (Partnership for Market Implementation)</strong> - Technical assistance</li>
      <li><strong>GCF</strong> - $150 million for REDD+ and renewable energy projects</li>
    </ul>
    
    <h2>Strategic Priorities for 2025</h2>
    
    <h3>1. Regulatory Finalization</h3>
    <ul>
      <li>Complete implementing regulations for Presidential Regulation 112/2022</li>
      <li>Finalize ETS rules and allowance allocation methodology</li>
      <li>Establish carbon tax collection and revenue recycling mechanisms</li>
    </ul>
    
    <h3>2. Infrastructure Development</h3>
    <ul>
      <li>Launch National Registry System (SRN-PPI) with full functionality</li>
      <li>Operationalize IDX Carbon Exchange trading platform</li>
      <li>Deploy MRV systems for key sectors</li>
    </ul>
    
    <h3>3. Capacity Building</h3>
    <ul>
      <li>Train 1,000+ carbon project developers</li>
      <li>Certify 100+ MRV auditors and verifiers</li>
      <li>Educate corporate sector on carbon accounting and trading</li>
    </ul>
    
    <h3>4. Pilot Programs</h3>
    <ul>
      <li>Launch ETS pilot in power sector (50+ facilities)</li>
      <li>Implement carbon tax in fossil fuel sector</li>
      <li>Scale up blue carbon and REDD+ projects</li>
    </ul>
    
    <h3>5. International Engagement</h3>
    <ul>
      <li>Expand bilateral carbon credit agreements</li>
      <li>Participate in Article 6.4 mechanism development</li>
      <li>Lead ASEAN carbon market harmonization efforts</li>
    </ul>
    
    <h2>Bilateral Collaboration Opportunities</h2>
    <ul>
      <li><strong>Technology Partners</strong> - Japan, South Korea, EU for clean tech transfer</li>
      <li><strong>Finance Partners</strong> - Norway, Germany, UK for results-based payments</li>
      <li><strong>Capacity Partners</strong> - Australia, New Zealand for training and systems</li>
      <li><strong>Market Partners</strong> - Singapore, ASEAN for regional market integration</li>
    </ul>
    
    <h2>Key Performance Indicators (2025)</h2>
    <table>
      <tr><th>Indicator</th><th>Target</th></tr>
      <tr><td>Carbon credits issued</td><td>10 million tCO2e</td></tr>
      <tr><td>ETS facilities covered</td><td>100+ major emitters</td></tr>
      <tr><td>Carbon tax revenue</td><td>IDR 5 trillion</td></tr>
      <tr><td>Bilateral agreements</td><td>5+ countries</td></tr>
      <tr><td>Project developers trained</td><td>1,000+</td></tr>
    </table>
  </div>',
  'policy_document',
  'published',
  5400,
  NOW(),
  NOW()
);

-- Document 7: Active Regulatory Development
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Active Regulatory Development: Presidential Regulation 112/2022 Amendment',
  'Details on the ongoing public consultation process for amending Presidential Regulation 112/2022, including stakeholder engagement, consultation schedule, and key regulatory updates.',
  'regulatory-update',
  '["regulation", "public-consultation", "perpres-112", "stakeholder-engagement"]'::jsonb,
  '<div class="document-content">
    <h1>Active Regulatory Development</h1>
    <h2>Presidential Regulation 112/2022 Amendment Process</h2>
    
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ozYXFP4IansTz7JLp2QOjTNRn0CqnW.png" alt="Official Consultation Invitation" style="max-width: 100%; height: auto; margin: 20px 0;" />
    
    <h2>Official Consultation Notice</h2>
    <p><strong>Document Number:</strong> 2981.Und/EK.01/DJE.S/2025</p>
    <p><strong>Date:</strong> 3 November 2025</p>
    <p><strong>Issuing Authority:</strong> Directorate General of New, Renewable Energy and Energy Conservation, Ministry of Energy and Mineral Resources</p>
    
    <h3>Purpose</h3>
    <p>Public consultation on the Draft Presidential Regulation amending Presidential Regulation Number 112 Year 2022 regarding Acceleration of Renewable Energy Development for Electricity Supply (RPerpres Perubahan Perpres 112/2022).</p>
    
    <h3>Consultation Meeting Details</h3>
    <ul>
      <li><strong>Date:</strong> Thursday, 6 November 2025</li>
      <li><strong>Time:</strong> As scheduled in agenda</li>
      <li><strong>Format:</strong> Zoom Meeting</li>
      <li><strong>Meeting ID:</strong> 955 6201 5102</li>
      <li><strong>Passcode:</strong> 312483</li>
      <li><strong>Contact Person:</strong> Sdr. Yayad Hidayat (081360821921)</li>
    </ul>
    
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BCT2SAGoJW2faoNjE7kt7cjawk0GvU.png" alt="Consultation Agenda" style="max-width: 100%; height: auto; margin: 20px 0;" />
    
    <h2>Consultation Agenda</h2>
    
    <h3>Session 1: Opening and Context (08.30-09.30)</h3>
    <ul>
      <li><strong>Pembukaan (Opening)</strong> - Welcome and introduction</li>
      <li><strong>Paparan Substansi (Substance Presentation)</strong> - Overview of proposed amendments</li>
    </ul>
    
    <h3>Session 2: Material Regulation I (09.30-10.30)</h3>
    <p><strong>Topic:</strong> Carbon Pricing Mechanisms and International Standards</p>
    <ul>
      <li>Pengaturan Materi I: Mekanisme Penetapan Harga Karbon (Carbon Pricing Mechanism Establishment)</li>
      <li>Standar Internasional (International Standards) - Alignment with UNFCCC and Paris Agreement</li>
      <li>Posisi Nomor 112 Tahun 2022 tentang Percepatan Pengembangan Energi Terbarukan untuk Penyediaan Tenaga Listrik (Position of Regulation 112/2022 on Renewable Energy Acceleration)</li>
    </ul>
    
    <h3>Session 3: Material Regulation II (10.30-11.30)</h3>
    <p><strong>Topic:</strong> Energy Development and Carbon Capture</p>
    <ul>
      <li>Pengaturan Materi II: Pengaturan Tentang Percepatan Pengembangan Energi Terbarukan (Regulation on Renewable Energy Development Acceleration)</li>
      <li>Penangkapan dan Penyimpanan Karbon (Carbon Capture and Storage)</li>
      <li>Pemanfaatan Energi Terbarukan untuk Penyediaan Tenaga Listrik (Renewable Energy Utilization for Electricity Supply)</li>
    </ul>
    
    <h3>Session 4: Discussion on Energy Tariffs (11.30-13.00)</h3>
    <ul>
      <li>Diskusi dan Tanya Jawab (Discussion and Q&A)</li>
      <li>Pembahasan revisi Perpres tarif Energi Terbarukan (Discussion on Renewable Energy Tariff Regulation Revision)</li>
      <li>Implementasi Mekanisme Penetapan Harga Karbon (Implementation of Carbon Pricing Mechanism)</li>
    </ul>
    
    <h3>Session 5: Legal Framework (13.00-14.00)</h3>
    <ul>
      <li>Kerangka Hukum dan Regulasi (Legal and Regulatory Framework)</li>
      <li>Harmonisasi dengan Peraturan Terkait (Harmonization with Related Regulations)</li>
      <li>Sanksi dan Insentif (Sanctions and Incentives)</li>
    </ul>
    
    <h3>Session 6: Closing (14.00-14.30)</h3>
    <ul>
      <li>Kesimpulan dan Langkah Selanjutnya (Conclusions and Next Steps)</li>
      <li>Penutupan (Closing Remarks)</li>
    </ul>
    
    <h2>Key Proposed Amendments</h2>
    
    <h3>1. Enhanced Carbon Pricing Mechanisms</h3>
    <ul>
      <li>Clarification of carbon price setting methodology</li>
      <li>Integration of ETS and carbon tax systems</li>
      <li>Alignment with international carbon markets (Article 6)</li>
    </ul>
    
    <h3>2. Renewable Energy Tariff Revisions</h3>
    <ul>
      <li>Updated feed-in tariff structures for solar, wind, hydro</li>
      <li>Competitive bidding mechanisms for large-scale projects</li>
      <li>Grid parity considerations and subsidy phase-out</li>
    </ul>
    
    <h3>3. Carbon Capture and Storage (CCS)</h3>
    <ul>
      <li>Regulatory framework for CCS projects</li>
      <li>Incentives for industrial CCS deployment</li>
      <li>Monitoring and verification requirements</li>
    </ul>
    
    <h3>4. Stakeholder Roles and Responsibilities</h3>
    <ul>
      <li>Clarification of ministry and agency mandates</li>
      <li>Private sector participation mechanisms</li>
      <li>Local government implementation authority</li>
    </ul>
    
    <h2>Stakeholder Engagement Process</h2>
    
    <h3>Invited Participants</h3>
    <ul>
      <li><strong>Government Agencies</strong> - Ministry of Environment, Ministry of Finance, OJK, BAPPENAS</li>
      <li><strong>State-Owned Enterprises</strong> - PLN, Pertamina, PGN</li>
      <li><strong>Private Sector</strong> - Renewable energy developers, industrial associations</li>
      <li><strong>Civil Society</strong> - Environmental NGOs, consumer groups</li>
      <li><strong>Academic Institutions</strong> - Universities, research centers</li>
      <li><strong>International Partners</strong> - Development agencies, bilateral partners</li>
    </ul>
    
    <h3>Consultation Principles</h3>
    <ul>
      <li><strong>Transparency</strong> - Open access to draft regulation and supporting documents</li>
      <li><strong>Inclusivity</strong> - Broad stakeholder participation across sectors</li>
      <li><strong>Evidence-Based</strong> - Technical analysis and impact assessments</li>
      <li><strong>Responsiveness</strong> - Incorporation of stakeholder feedback</li>
    </ul>
    
    <h2>Timeline and Next Steps</h2>
    <table>
      <tr><th>Date</th><th>Activity</th></tr>
      <tr><td>6 November 2025</td><td>Public consultation meeting</td></tr>
      <tr><td>November-December 2025</td><td>Stakeholder feedback compilation and analysis</td></tr>
      <tr><td>January 2026</td><td>Revised draft regulation preparation</td></tr>
      <tr><td>February 2026</td><td>Inter-ministerial review and approval</td></tr>
      <tr><td>March 2026</td><td>Presidential signature and promulgation</td></tr>
      <tr><td>April 2026</td><td>Implementing regulations development</td></tr>
      <tr><td>Q2-Q3 2026</td><td>Socialization and capacity building</td></tr>
      <tr><td>Q4 2026</td><td>Full implementation</td></tr>
    </table>
    
    <h2>Significance for Carbon Pricing Governance</h2>
    <p>This regulatory amendment process demonstrates Indonesia''s commitment to:</p>
    <ul>
      <li><strong>Transparent Governance</strong> - Open consultation with all stakeholders</li>
      <li><strong>Adaptive Policy</strong> - Updating regulations based on implementation experience</li>
      <li><strong>International Alignment</strong> - Harmonization with global carbon market standards</li>
      <li><strong>Multi-Stakeholder Approach</strong> - Inclusive decision-making process</li>
    </ul>
    
    <p>The amendments to Presidential Regulation 112/2022 will strengthen Indonesia''s carbon pricing framework, enhance renewable energy deployment, and accelerate progress toward NDC targets and net-zero commitments.</p>
  </div>',
  'policy_document',
  'published',
  5800,
  NOW(),
  NOW()
);

-- Document 8: Strategic Analysis and Market Opportunity
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Strategic Analysis: Indonesia Carbon Market Opportunity',
  'Comprehensive strategic analysis of Indonesia''s carbon market opportunity, including competitive advantages, market quantification, critical success factors, and actionable recommendations.',
  'strategic-analysis',
  '["strategy", "market-analysis", "opportunity", "recommendations"]'::jsonb,
  '<div class="document-content">
    <h1>Strategic Analysis: Indonesia Carbon Market Opportunity</h1>
    
    <h2>Executive Summary</h2>
    <p>Indonesia stands at the threshold of a transformative carbon market opportunity valued at $2.8-7.5 billion annually by 2030. This analysis synthesizes regulatory developments, market dynamics, and strategic imperatives to guide stakeholders in capitalizing on this emerging market.</p>
    
    <h2>Market Opportunity Quantification</h2>
    
    <h3>Supply-Side Potential</h3>
    <table>
      <tr><th>Carbon Source</th><th>Annual Potential (MtCO2e)</th><th>Value at $20/tCO2e</th><th>Value at $50/tCO2e</th></tr>
      <tr><td>Blue Carbon (Mangroves)</td><td>15-25</td><td>$300-500M</td><td>$750M-1.25B</td></tr>
      <tr><td>Forest Conservation (REDD+)</td><td>50-80</td><td>$1-1.6B</td><td>$2.5-4B</td></tr>
      <tr><td>Peatland Restoration</td><td>20-30</td><td>$400-600M</td><td>$1-1.5B</td></tr>
      <tr><td>Renewable Energy</td><td>30-50</td><td>$600M-1B</td><td>$1.5-2.5B</td></tr>
      <tr><td><strong>Total Annual Potential</strong></td><td><strong>115-185</strong></td><td><strong>$2.3-3.7B</strong></td><td><strong>$5.75-9.25B</strong></td></tr>
    </table>
    
    <h3>Demand-Side Drivers</h3>
    <ul>
      <li><strong>Domestic Compliance</strong> - ETS covering 100+ major emitters by 2026</li>
      <li><strong>International Voluntary Market</strong> - Growing 30% annually, reaching $50B by 2030</li>
      <li><strong>Article 6 Bilateral Trades</strong> - Japan, Norway, Switzerland agreements</li>
      <li><strong>CORSIA Aviation Offsets</strong> - Indonesia-origin credits eligible</li>
      <li><strong>Corporate Net-Zero Commitments</strong> - 5,000+ companies globally seeking high-quality offsets</li>
    </ul>
    
    <h2>Indonesia''s Competitive Advantages</h2>
    
    <h3>1. Unparalleled Natural Capital</h3>
    <ul>
      <li><strong>World''s Largest Archipelago</strong> - 17,000+ islands with diverse ecosystems</li>
      <li><strong>Mega-Biodiversity</strong> - 2nd highest biodiversity globally, premium for co-benefits</li>
      <li><strong>Blue Carbon Leadership</strong> - 23% of global mangroves, untapped potential</li>
      <li><strong>Tropical Forests</strong> - 120M hectares, 3rd largest tropical forest area</li>
    </ul>
    
    <h3>2. Strategic Geopolitical Position</h3>
    <ul>
      <li><strong>ASEAN Hub</strong> - Gateway to 680M population regional market</li>
      <li><strong>G20 Member</strong> - Influence in global climate governance</li>
      <li><strong>Bilateral Leverage</strong> - Partnerships with Japan, Norway, EU, Australia</li>
      <li><strong>South-South Cooperation</strong> - Leadership in developing country climate action</li>
    </ul>
    
    <h3>3. Regulatory Momentum</h3>
    <ul>
      <li><strong>Presidential Commitment</strong> - Top-level political support for carbon markets</li>
      <li><strong>Comprehensive Framework</strong> - Perpres 112/2022 and implementing regulations</li>
      <li><strong>Institutional Capacity</strong> - Dedicated agencies (DJPPI, OJK, SRN-PPI)</li>
      <li><strong>Stakeholder Engagement</strong> - Transparent consultation processes</li>
    </ul>
    
    <h3>4. Technology Readiness</h3>
    <ul>
      <li><strong>Digital Infrastructure</strong> - National registry system (SRN-PPI)</li>
      <li><strong>MRV Capabilities</strong> - Satellite monitoring, IoT sensors, blockchain</li>
      <li><strong>Financial Markets</strong> - IDX Carbon Exchange operational</li>
      <li><strong>Innovation Ecosystem</strong> - Growing cleantech startup scene</li>
    </ul>
    
    <h2>Critical Success Factors</h2>
    
    <h3>1. Regulatory Certainty and Stability</h3>
    <ul>
      <li><strong>Finalize Perpres 112/2022 Amendments</strong> - Clear rules for carbon pricing</li>
      <li><strong>Long-Term Policy Signals</strong> - 10-year carbon price trajectory</li>
      <li><strong>Grandfathering Provisions</strong> - Protect early mover investments</li>
      <li><strong>Dispute Resolution</strong> - Clear mechanisms for contract enforcement</li>
    </ul>
    
    <h3>2. Market Infrastructure Excellence</h3>
    <ul>
      <li><strong>SRN-PPI Reliability</strong> - 99.9% uptime, real-time transaction processing</li>
      <li><strong>IDX Liquidity</strong> - Market makers, derivatives, price discovery</li>
      <li><strong>MRV Credibility</strong> - International accreditation (ISO, UNFCCC)</li>
      <li><strong>Cybersecurity</strong> - Robust protection against fraud and hacking</li>
    </ul>
    
    <h3>3. Quality and Integrity Standards</h3>
    <ul>
      <li><strong>Additionality</strong> - Rigorous baseline setting and leakage prevention</li>
      <li><strong>Permanence</strong> - Long-term monitoring and buffer pools</li>
      <li><strong>Co-Benefits</strong> - Biodiversity, community livelihoods, SDG alignment</li>
      <li><strong>Transparency</strong> - Public project databases and impact reporting</li>
    </ul>
    
    <h3>4. Stakeholder Capacity and Engagement</h3>
    <ul>
      <li><strong>Project Developer Training</strong> - 1,000+ certified developers by 2026</li>
      <li><strong>Corporate Education</strong> - Carbon accounting and strategy workshops</li>
      <li><strong>Community Participation</strong> - Benefit-sharing and FPIC (Free, Prior, Informed Consent)</li>
      <li><strong>International Partnerships</strong> - Technology transfer and co-financing</li>
    </ul>
    
    <h2>Strategic Recommendations</h2>
    
    <h3>For Government (Next 6 Months)</h3>
    <ol>
      <li><strong>Accelerate Perpres 112/2022 Amendment</strong> - Complete consultation and promulgation by Q1 2026</li>
      <li><strong>Launch SRN-PPI Fully</strong> - Onboard first 50 projects and issue 5M credits</li>
      <li><strong>Operationalize IDX Carbon Exchange</strong> - Daily trading, transparent pricing</li>
      <li><strong>Expand Bilateral Agreements</strong> - Sign 3 new Article 6 partnerships</li>
      <li><strong>Pilot ETS in Power Sector</strong> - 50+ facilities, 100M tCO2e cap</li>
    </ol>
    
    <h3>For Private Sector (Next 12 Months)</h3>
    <ol>
      <li><strong>Develop High-Quality Projects</strong> - Focus on blue carbon, REDD+, renewable energy</li>
      <li><strong>Invest in MRV Technology</strong> - Satellite, drones, IoT for credible monitoring</li>
      <li><strong>Build Strategic Partnerships</strong> - Joint ventures with international buyers</li>
      <li><strong>Engage in Policy Dialogue</strong> - Participate in consultations, provide technical input</li>
      <li><strong>Prepare for Compliance</strong> - Conduct carbon audits, develop reduction strategies</li>
    </ol>
    
    <h3>For International Partners (Next 18 Months)</h3>
    <ol>
      <li><strong>Scale Up Finance</strong> - $500M+ in results-based payments and project finance</li>
      <li><strong>Transfer Technology</strong> - MRV systems, renewable energy, CCS</li>
      <li><strong>Capacity Building</strong> - Train 2,000+ Indonesian carbon professionals</li>
      <li><strong>Market Linkages</strong> - Connect Indonesian credits to international compliance markets</li>
      <li><strong>Policy Support</strong> - Technical assistance for regulatory development</li>
    </ol>
    
    <h2>Risk Mitigation Strategies</h2>
    
    <h3>Regulatory Risk</h3>
    <ul>
      <li><strong>Mitigation:</strong> Engage early in policy consultations, diversify across regulatory mechanisms (ETS, tax, offsets)</li>
      <li><strong>Contingency:</strong> Flexible project design adaptable to rule changes</li>
    </ul>
    
    <h3>Market Risk</h3>
    <ul>
      <li><strong>Mitigation:</strong> Long-term offtake agreements, diversified buyer portfolio</li>
      <li><strong>Contingency:</strong> Buffer reserves, price hedging instruments</li>
    </ul>
    
    <h3>Technical Risk</h3>
    <ul>
      <li><strong>Mitigation:</strong> Invest in proven MRV technologies, third-party verification</li>
      <li><strong>Contingency:</strong> Insurance products for credit delivery failures</li>
    </ul>
    
    <h3>Social and Environmental Risk</h3>
    <ul>
      <li><strong>Mitigation:</strong> FPIC processes, benefit-sharing agreements, safeguard policies</li>
      <li><strong>Contingency:</strong> Grievance mechanisms, adaptive management</li>
    </ul>
    
    <h2>Key Performance Indicators (2025-2030)</h2>
    <table>
      <tr><th>Indicator</th><th>2025 Target</th><th>2030 Target</th></tr>
      <tr><td>Carbon credits issued (MtCO2e)</td><td>10</td><td>100</td></tr>
      <tr><td>Market value (USD)</td><td>$200M</td><td>$2-5B</td></tr>
      <tr><td>Registered projects</td><td>50</td><td>500</td></tr>
      <tr><td>ETS facilities covered</td><td>100</td><td>500</td></tr>
      <tr><td>Jobs created</td><td>5,000</td><td>50,000</td></tr>
      <tr><td>Emission reductions (MtCO2e)</td><td>20</td><td>150</td></tr>
    </table>
    
    <h2>Conclusion</h2>
    <p>Indonesia''s carbon market represents a once-in-a-generation opportunity to align climate action with economic development. Success requires coordinated action across government, private sector, and international partners, guided by principles of integrity, transparency, and inclusivity. The next 6-18 months are critical for establishing the foundations that will determine Indonesia''s position in the global carbon economy for decades to come.</p>
  </div>',
  'policy_document',
  'published',
  6200,
  NOW(),
  NOW()
);

-- Verify insertion
SELECT 
  i.title as initiative,
  COUNT(d.id) as document_count
FROM initiatives i
LEFT JOIN documents d ON i.id = d.initiative_id
WHERE i.id = 'the-nusantara-code'
GROUP BY i.title;
