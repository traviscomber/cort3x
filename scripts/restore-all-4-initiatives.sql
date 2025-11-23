-- ============================================
-- COMPLETE RESTORATION: ALL 4 INITIATIVES
-- ============================================
-- Execute this script to restore all initiatives with complete documentation
-- Total: 4 initiatives, 21 comprehensive documents
-- ============================================

-- Clean up existing data first
DELETE FROM documents WHERE initiative_id IN (
  'the-nusantara-code',
  'heritage-atlas', 
  'objective-track-app',
  '1ncubator-platform'
);

DELETE FROM initiatives WHERE id IN (
  'the-nusantara-code',
  'heritage-atlas',
  'objective-track-app', 
  '1ncubator-platform'
);

-- ============================================
-- INITIATIVE 1: THE NUSANTARA CODE (8 documents)
-- ============================================

INSERT INTO initiatives (id, title, description, category, status, progress, budget, start_date, end_date, created_at, updated_at)
VALUES (
  'the-nusantara-code',
  'The Nusantara Code',
  'Indonesia''s comprehensive carbon pricing governance framework and market harmonization initiative.',
  'environmental',
  'active',
  65,
  2500000,
  '2024-01-15',
  '2026-12-31',
  NOW(),
  NOW()
);

-- Document 1: Governance Overview
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Indonesia Carbon Pricing Governance Overview',
  'Comprehensive overview of Indonesia''s carbon pricing governance framework and institutional structure.',
  'governance',
  '["carbon-pricing", "governance", "policy-framework", "institutional-structure"]'::jsonb,
  '<div class="document-content">
    <h1>Indonesia Carbon Pricing Governance Overview</h1>
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tRTkXAqJhur0JK5KqbkAgGYv6RczsV.png" alt="Indonesia Carbon Pricing Governance" style="width:100%; max-width:800px; margin:20px 0;" />
    
    <h2>Executive Summary</h2>
    <p>Indonesia has established a comprehensive carbon pricing governance framework under the Ministry of Environment and Forestry, specifically through the Deputy of Climate Change and Carbon Governance. This framework represents a critical component of Indonesia''s commitment to achieving its Nationally Determined Contributions (NDCs) under the Paris Agreement.</p>
    
    <h2>Institutional Framework</h2>
    <h3>Lead Agency</h3>
    <ul>
      <li><strong>Ministry of Environment and Forestry</strong></li>
      <li><strong>Deputy of Climate Change and Carbon Governance</strong></li>
      <li>Established: November 2025</li>
    </ul>
    
    <h3>Key Responsibilities</h3>
    <ul>
      <li>Development and implementation of carbon pricing mechanisms</li>
      <li>Oversight of National Registry System (SRN-PPI)</li>
      <li>Coordination with Indonesia Stock Exchange (IDX) for carbon trading</li>
      <li>Stakeholder engagement across business, government, and civil society</li>
      <li>International cooperation and bilateral agreements</li>
    </ul>
    
    <h2>Governance Structure</h2>
    <h3>Multi-Stakeholder Approach</h3>
    <p>The governance framework incorporates input from:</p>
    <ul>
      <li><strong>Business Sector:</strong> Corporations, project developers, financial institutions</li>
      <li><strong>Government:</strong> Multiple ministries and regulatory bodies</li>
      <li><strong>Regulatory Bodies:</strong> OJK (Financial Services Authority)</li>
      <li><strong>Market Infrastructure:</strong> IDX Carbon Exchange</li>
    </ul>
    
    <h3>National Registry System (SRN-PPI)</h3>
    <p>Central platform for:</p>
    <ul>
      <li>Carbon credit registration and tracking</li>
      <li>Verification and validation of emissions reductions</li>
      <li>Primary and secondary market transactions</li>
      <li>Compliance monitoring and reporting</li>
    </ul>
    
    <h2>International Alignment</h2>
    <h3>UNFCCC Framework</h3>
    <ul>
      <li>Paris Agreement Article 6 implementation</li>
      <li>Glasgow Climate Pact commitments</li>
      <li>Transparency and MRV (Monitoring, Reporting, Verification) systems</li>
    </ul>
    
    <h3>Bilateral Cooperation</h3>
    <ul>
      <li><strong>Japan:</strong> Joint Crediting Mechanism (JCM)</li>
      <li><strong>Norway:</strong> REDD+ partnership</li>
      <li><strong>International Support:</strong> World Bank, Green Climate Fund</li>
    </ul>
    
    <h2>Strategic Priorities 2025</h2>
    <ol>
      <li><strong>Market Infrastructure Development:</strong> Strengthening IDX Carbon Exchange capabilities</li>
      <li><strong>Regulatory Framework:</strong> Finalizing Presidential Regulation 112/2022 amendments</li>
      <li><strong>Stakeholder Capacity Building:</strong> Training programs for market participants</li>
      <li><strong>International Integration:</strong> Expanding bilateral agreements and Article 6 mechanisms</li>
      <li><strong>Technology Innovation:</strong> Digital platforms for carbon tracking and trading</li>
    </ol>
    
    <h2>Key Performance Indicators</h2>
    <ul>
      <li>Carbon market transaction volume: Target $500M by 2026</li>
      <li>Registered carbon credits: Target 50 million tCO2e by 2025</li>
      <li>Active market participants: Target 200+ entities by 2026</li>
      <li>Emissions reduction: Contributing to 29% unconditional NDC target</li>
    </ul>
  </div>',
  'policy_document',
  'published',
  8500,
  NOW(),
  NOW()
);

-- Document 2: Market Harmonization
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Carbon Markets and Harmonization Framework',
  'Analysis of carbon market importance and harmonization strategies for Indonesia.',
  'market-analysis',
  '["carbon-markets", "harmonization", "JCM", "VERRA", "SPEI"]'::jsonb,
  '<div class="document-content">
    <h1>The Importance of Carbon Markets and Harmonization</h1>
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jl9b8OmHReLx7U2KNV3aEBamPeedhk.png" alt="Carbon Markets Harmonization" style="width:100%; max-width:800px; margin:20px 0;" />
    
    <h2>Why Carbon Markets Matter</h2>
    
    <h3>1. Markets are Indispensable</h3>
    <p>Carbon markets are essential mechanisms for achieving climate targets cost-effectively. They enable:</p>
    <ul>
      <li>Price discovery for carbon emissions</li>
      <li>Efficient allocation of mitigation resources</li>
      <li>Innovation in clean technologies</li>
      <li>Cross-border climate cooperation</li>
    </ul>
    
    <h3>2. Strong Carbon Credit Regulations</h3>
    <p>Robust regulatory frameworks ensure:</p>
    <ul>
      <li><strong>Environmental Integrity:</strong> Real, measurable, and additional emissions reductions</li>
      <li><strong>Market Confidence:</strong> Transparent rules and enforcement mechanisms</li>
      <li><strong>Investor Protection:</strong> Clear rights and obligations for market participants</li>
      <li><strong>Anti-Fraud Measures:</strong> Prevention of double counting and fraudulent credits</li>
    </ul>
    
    <h3>3. Harmonization is Critical</h3>
    <p>Market harmonization addresses:</p>
    <ul>
      <li><strong>Fragmentation:</strong> Multiple standards create confusion and inefficiency</li>
      <li><strong>Interoperability:</strong> Credits must be recognized across jurisdictions</li>
      <li><strong>Transaction Costs:</strong> Standardization reduces compliance burden</li>
      <li><strong>Market Liquidity:</strong> Unified markets enable larger-scale trading</li>
    </ul>
    
    <h2>JCM Scheme Transformation</h2>
    
    <h3>From VERRA to SPEI</h3>
    <p>Indonesia is transitioning its Joint Crediting Mechanism (JCM) from international standards to domestic frameworks:</p>
    
    <h4>Previous System: VERRA</h4>
    <ul>
      <li>International voluntary carbon standard</li>
      <li>Widely recognized but not Indonesia-specific</li>
      <li>Limited alignment with national priorities</li>
    </ul>
    
    <h4>New System: SPEI (Sistem Perdagangan Emisi Indonesia)</h4>
    <ul>
      <li>Indonesia''s domestic emissions trading system</li>
      <li>Aligned with national development goals</li>
      <li>Integrated with SRN-PPI registry</li>
      <li>Supports both compliance and voluntary markets</li>
    </ul>
    
    <h3>Benefits of Transformation</h3>
    <ol>
      <li><strong>National Sovereignty:</strong> Indonesia controls its carbon market rules</li>
      <li><strong>Revenue Retention:</strong> Economic benefits stay within Indonesia</li>
      <li><strong>Policy Alignment:</strong> Carbon pricing supports broader development objectives</li>
      <li><strong>Capacity Building:</strong> Develops domestic expertise in carbon markets</li>
    </ol>
    
    <h2>Bilateral Indonesia-Japan Cooperation</h2>
    
    <h3>Joint Crediting Mechanism (JCM)</h3>
    <p>The Indonesia-Japan JCM represents a model for bilateral carbon market cooperation:</p>
    
    <h4>Key Features</h4>
    <ul>
      <li><strong>Technology Transfer:</strong> Japanese clean technology deployed in Indonesia</li>
      <li><strong>Credit Sharing:</strong> Emissions reductions shared between countries</li>
      <li><strong>Capacity Building:</strong> Technical assistance and training programs</li>
      <li><strong>Investment Facilitation:</strong> Japanese private sector engagement</li>
    </ul>
    
    <h4>Project Portfolio</h4>
    <ul>
      <li>Renewable energy (solar, geothermal, biomass)</li>
      <li>Energy efficiency in industry</li>
      <li>Waste management and methane capture</li>
      <li>Sustainable transportation</li>
    </ul>
    
    <h4>Results to Date</h4>
    <ul>
      <li>30+ registered JCM projects</li>
      <li>Estimated 2 million tCO2e reductions annually</li>
      <li>$150M+ in Japanese investment</li>
      <li>Model for future bilateral agreements</li>
    </ul>
    
    <h2>Harmonization Roadmap</h2>
    
    <h3>Phase 1: Domestic Integration (2024-2025)</h3>
    <ul>
      <li>Finalize SPEI regulations</li>
      <li>Integrate SRN-PPI with IDX Carbon Exchange</li>
      <li>Transition existing VERRA projects to SPEI</li>
      <li>Establish MRV protocols</li>
    </ul>
    
    <h3>Phase 2: Regional Linkage (2025-2026)</h3>
    <ul>
      <li>Explore linkages with ASEAN carbon markets</li>
      <li>Harmonize standards with regional partners</li>
      <li>Develop cross-border trading mechanisms</li>
      <li>Coordinate with Article 6 implementation</li>
    </ul>
    
    <h3>Phase 3: Global Integration (2026+)</h3>
    <ul>
      <li>Align with international carbon market standards</li>
      <li>Participate in global carbon pricing initiatives</li>
      <li>Expand bilateral agreements beyond Japan</li>
      <li>Position Indonesia as regional carbon market hub</li>
    </ul>
    
    <h2>Challenges and Solutions</h2>
    
    <h3>Challenge 1: Market Fragmentation</h3>
    <p><strong>Solution:</strong> Unified national registry (SRN-PPI) and clear regulatory hierarchy</p>
    
    <h3>Challenge 2: Capacity Constraints</h3>
    <p><strong>Solution:</strong> Comprehensive training programs and international technical assistance</p>
    
    <h3>Challenge 3: Price Volatility</h3>
    <p><strong>Solution:</strong> Market stabilization mechanisms and gradual phase-in of compliance obligations</p>
    
    <h3>Challenge 4: International Recognition</h3>
    <p><strong>Solution:</strong> Alignment with Paris Agreement Article 6 and bilateral agreements</p>
  </div>',
  'policy_document',
  'published',
  12000,
  NOW(),
  NOW()
);

-- Document 3: Role of Carbon Pricing
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Role of Carbon Pricing in Environmental Policy',
  'Comprehensive analysis of how carbon pricing mechanisms support environmental objectives.',
  'policy-analysis',
  '["carbon-pricing", "environmental-policy", "emissions-accountability", "MRV"]'::jsonb,
  '<div class="document-content">
    <h1>Role of Carbon Pricing in Environmental Policy</h1>
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jl9b8OmHReLx7U2KNV3aEBamPeedhk.png" alt="Role of Carbon Pricing" style="width:100%; max-width:800px; margin:20px 0;" />
    
    <h2>Core Functions of Carbon Pricing</h2>
    
    <h3>1. Emissions Accountability</h3>
    <p>Carbon pricing creates direct accountability for greenhouse gas emissions:</p>
    <ul>
      <li><strong>Polluter Pays Principle:</strong> Entities that emit pay for environmental damage</li>
      <li><strong>Measurable Impact:</strong> Quantifiable emissions reductions tied to economic incentives</li>
      <li><strong>Compliance Mechanisms:</strong> Clear penalties for exceeding emission limits</li>
      <li><strong>Transparency:</strong> Public reporting of emissions and carbon costs</li>
    </ul>
    
    <h4>Implementation in Indonesia</h4>
    <ul>
      <li>Mandatory emissions reporting for large emitters (>25,000 tCO2e/year)</li>
      <li>Carbon tax on coal-fired power plants (Rp 30,000/tCO2e)</li>
      <li>Emissions trading system for industrial sectors</li>
      <li>Integration with environmental permits and licensing</li>
    </ul>
    
    <h3>2. Incentives and Disincentives</h3>
    <p>Carbon pricing creates economic signals that drive behavior change:</p>
    
    <h4>Disincentives for High Emissions</h4>
    <ul>
      <li>Higher costs for carbon-intensive activities</li>
      <li>Reduced competitiveness of polluting technologies</li>
      <li>Financial penalties for non-compliance</li>
      <li>Reputational risks for high emitters</li>
    </ul>
    
    <h4>Incentives for Low Emissions</h4>
    <ul>
      <li>Revenue from selling carbon credits</li>
      <li>Cost savings from energy efficiency</li>
      <li>Access to green finance and preferential lending</li>
      <li>Enhanced brand value and market access</li>
    </ul>
    
    <h4>Case Study: Indonesian Power Sector</h4>
    <p>Carbon pricing has accelerated the transition from coal to renewables:</p>
    <ul>
      <li>Coal power: Additional cost of Rp 30,000/tCO2e makes new projects less viable</li>
      <li>Solar/wind: No carbon costs, increasingly competitive on pure economics</li>
      <li>Geothermal: Negative emissions potential through carbon credit sales</li>
      <li>Result: 23% renewable energy target by 2025 (up from 12% in 2020)</li>
    </ul>
    
    <h3>3. Data Transparency and MRV</h3>
    <p>Carbon pricing requires robust Monitoring, Reporting, and Verification (MRV) systems:</p>
    
    <h4>Monitoring</h4>
    <ul>
      <li><strong>Continuous Emissions Monitoring Systems (CEMS):</strong> Real-time data from major sources</li>
      <li><strong>Satellite Monitoring:</strong> Remote sensing for land use and forestry</li>
      <li><strong>IoT Sensors:</strong> Distributed monitoring for industrial facilities</li>
      <li><strong>Digital Platforms:</strong> SRN-PPI registry for centralized data management</li>
    </ul>
    
    <h4>Reporting</h4>
    <ul>
      <li>Annual emissions reports from all covered entities</li>
      <li>Quarterly updates for large emitters</li>
      <li>Project-level reporting for carbon credit generation</li>
      <li>Public disclosure through national registry</li>
    </ul>
    
    <h4>Verification</h4>
    <ul>
      <li>Third-party verification by accredited bodies</li>
      <li>Government audits and spot checks</li>
      <li>International standards (ISO 14064, GHG Protocol)</li>
      <li>Penalties for false reporting</li>
    </ul>
    
    <h4>Indonesia''s MRV Infrastructure</h4>
    <ul>
      <li><strong>SRN-PPI:</strong> National registry for all carbon transactions</li>
      <li><strong>SIGN SMART:</strong> Digital platform for emissions reporting</li>
      <li><strong>Accredited Verifiers:</strong> 15+ domestic verification bodies</li>
      <li><strong>International Cooperation:</strong> Technical assistance from World Bank, UNDP</li>
    </ul>
    
    <h3>4. Financing for Climate Action</h3>
    <p>Carbon pricing generates revenue that can fund climate mitigation and adaptation:</p>
    
    <h4>Revenue Sources</h4>
    <ul>
      <li><strong>Carbon Tax:</strong> Direct revenue from taxing emissions</li>
      <li><strong>Auction Proceeds:</strong> Revenue from selling emission allowances</li>
      <li><strong>Transaction Fees:</strong> Charges on carbon credit trading</li>
      <li><strong>Penalties:</strong> Fines for non-compliance</li>
    </ul>
    
    <h4>Revenue Allocation in Indonesia</h4>
    <ul>
      <li>40% - Renewable energy development</li>
      <li>25% - Forest conservation and restoration</li>
      <li>20% - Climate adaptation in vulnerable communities</li>
      <li>10% - Research and development</li>
      <li>5% - Administrative costs</li>
    </ul>
    
    <h4>Projected Revenue (2025-2030)</h4>
    <ul>
      <li>2025: $200 million</li>
      <li>2026: $350 million</li>
      <li>2027: $500 million</li>
      <li>2028: $700 million</li>
      <li>2029: $900 million</li>
      <li>2030: $1.2 billion</li>
    </ul>
    
    <h3>5. Multi-Sector Collaboration</h3>
    <p>Carbon pricing creates a common framework for cross-sector climate action:</p>
    
    <h4>Covered Sectors in Indonesia</h4>
    <ul>
      <li><strong>Energy:</strong> Power generation, oil & gas</li>
      <li><strong>Industry:</strong> Cement, steel, chemicals, pulp & paper</li>
      <li><strong>Transportation:</strong> Aviation, shipping (planned)</li>
      <li><strong>Buildings:</strong> Large commercial buildings (planned)</li>
      <li><strong>Waste:</strong> Landfills, wastewater treatment</li>
      <li><strong>FOLU:</strong> Forestry and land use (voluntary market)</li>
    </ul>
    
    <h4>Collaboration Mechanisms</h4>
    <ul>
      <li><strong>Industry Associations:</strong> Sector-specific implementation guidance</li>
      <li><strong>Public-Private Partnerships:</strong> Joint investment in clean technology</li>
      <li><strong>Knowledge Sharing:</strong> Best practices and lessons learned</li>
      <li><strong>Collective Targets:</strong> Sector-wide emissions reduction goals</li>
    </ul>
    
    <h4>Success Story: Cement Sector</h4>
    <p>Indonesia''s cement industry has embraced carbon pricing:</p>
    <ul>
      <li>Voluntary participation in emissions trading pilot (2022-2023)</li>
      <li>Investment in alternative fuels (biomass, waste-derived)</li>
      <li>Carbon capture and utilization projects</li>
      <li>15% emissions reduction achieved (2020-2024)</li>
      <li>Model for other industrial sectors</li>
    </ul>
    
    <h2>Policy Integration</h2>
    
    <h3>Alignment with National Development Goals</h3>
    <p>Carbon pricing supports multiple policy objectives:</p>
    <ul>
      <li><strong>Climate Mitigation:</strong> Direct emissions reductions</li>
      <li><strong>Energy Security:</strong> Reduced fossil fuel dependence</li>
      <li><strong>Air Quality:</strong> Co-benefits from reduced combustion</li>
      <li><strong>Economic Development:</strong> Green jobs and new industries</li>
      <li><strong>Technology Innovation:</strong> R&D in clean technologies</li>
    </ul>
    
    <h3>Coordination with Other Policies</h3>
    <ul>
      <li><strong>Renewable Energy Targets:</strong> Carbon pricing makes renewables more competitive</li>
      <li><strong>Energy Efficiency Standards:</strong> Complementary regulations for buildings and appliances</li>
      <li><strong>Forest Protection:</strong> REDD+ credits integrated with carbon market</li>
      <li><strong>Industrial Policy:</strong> Green technology incentives and subsidies</li>
    </ul>
    
    <h2>International Best Practices</h2>
    
    <h3>Lessons from Leading Jurisdictions</h3>
    
    <h4>European Union ETS</h4>
    <ul>
      <li>Largest carbon market globally</li>
      <li>Gradual phase-in of sectors</li>
      <li>Free allocation transitioning to full auctioning</li>
      <li>Border carbon adjustments to prevent leakage</li>
    </ul>
    
    <h4>California Cap-and-Trade</h4>
    <ul>
      <li>Linkage with Quebec for larger market</li>
      <li>Price floor and ceiling for stability</li>
      <li>Significant revenue for climate programs</li>
      <li>Strong MRV and enforcement</li>
    </ul>
    
    <h4>China National ETS</h4>
    <ul>
      <li>World''s largest by covered emissions</li>
      <li>Focus on power sector initially</li>
      <li>Gradual expansion to other sectors</li>
      <li>Emphasis on capacity building</li>
    </ul>
    
    <h3>Adaptation for Indonesia</h3>
    <p>Indonesia is adapting international best practices to local context:</p>
    <ul>
      <li><strong>Phased Implementation:</strong> Starting with large emitters, expanding gradually</li>
      <li><strong>Hybrid System:</strong> Combining carbon tax and emissions trading</li>
      <li><strong>Flexibility Mechanisms:</strong> Offsets and banking to manage costs</li>
      <li><strong>Capacity Building:</strong> Extensive training and technical assistance</li>
      <li><strong>Regional Cooperation:</strong> ASEAN coordination for future linkage</li>
    </ul>
  </div>',
  'policy_document',
  'published',
  15000,
  NOW(),
  NOW()
);

-- Document 4: Development of Mechanisms
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Development of Carbon Pricing Mechanisms',
  'Technical overview of carbon pricing mechanism development across sectors.',
  'technical',
  '["mechanisms", "sectors", "FOLU", "energy", "NDC"]'::jsonb,
  '<div class="document-content">
    <h1>Development of Carbon Pricing Mechanisms</h1>
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tRTkXAqJhur0JK5KqbkAgGYv6RczsV.png" alt="Carbon Pricing Development" style="width:100%; max-width:800px; margin:20px 0;" />
    
    <h2>Sectoral Coverage</h2>
    
    <h3>Priority Sectors for Carbon Pricing</h3>
    <p>Indonesia''s carbon pricing mechanisms cover five key sectors:</p>
    
    <h4>1. FOLU (Forestry and Other Land Use)</h4>
    <ul>
      <li><strong>Emissions Profile:</strong> Largest source of Indonesia''s emissions (45% of total)</li>
      <li><strong>Mechanism:</strong> Voluntary carbon market for REDD+ credits</li>
      <li><strong>Key Activities:</strong>
        <ul>
          <li>Avoided deforestation</li>
          <li>Forest restoration and reforestation</li>
          <li>Sustainable forest management</li>
          <li>Peatland restoration</li>
        </ul>
      </li>
      <li><strong>Current Status:</strong> 50+ registered REDD+ projects, 30 million tCO2e credits issued</li>
      <li><strong>Challenges:</strong> Land tenure issues, MRV complexity, permanence risks</li>
    </ul>
    
    <h4>2. Energy</h4>
    <ul>
      <li><strong>Emissions Profile:</strong> 35% of national emissions</li>
      <li><strong>Mechanism:</strong> Carbon tax on coal power + emissions trading for large facilities</li>
      <li><strong>Covered Activities:</strong>
        <ul>
          <li>Coal-fired power generation</li>
          <li>Oil and gas extraction and processing</li>
          <li>Refineries</li>
          <li>Large industrial boilers</li>
        </ul>
      </li>
      <li><strong>Current Status:</strong> Carbon tax implemented 2022, ETS pilot launched 2023</li>
      <li><strong>Price Signal:</strong> Rp 30,000/tCO2e ($2/tCO2e) carbon tax, ETS prices Rp 50,000-100,000/tCO2e</li>
    </ul>
    
    <h4>3. IPPU (Industrial Processes and Product Use)</h4>
    <ul>
      <li><strong>Emissions Profile:</strong> 12% of national emissions</li>
      <li><strong>Mechanism:</strong> Emissions trading system</li>
      <li><strong>Covered Industries:</strong>
        <ul>
          <li>Cement production</li>
          <li>Steel and iron</li>
          <li>Chemicals and petrochemicals</li>
          <li>Pulp and paper</li>
        </ul>
      </li>
      <li><strong>Current Status:</strong> Voluntary pilot phase, mandatory compliance from 2025</li>
      <li><strong>Allocation Method:</strong> Free allocation based on benchmarks, transitioning to auctioning</li>
    </ul>
    
    <h4>4. Agriculture</h4>
    <ul>
      <li><strong>Emissions Profile:</strong> 6% of national emissions</li>
      <li><strong>Mechanism:</strong> Voluntary carbon market + subsidies for low-emission practices</li>
      <li><strong>Key Activities:</strong>
        <ul>
          <li>Rice cultivation (methane reduction)</li>
          <li>Livestock management</li>
          <li>Sustainable agriculture practices</li>
          <li>Agroforestry</li>
        </ul>
      </li>
      <li><strong>Current Status:</strong> Pilot projects in 10 provinces</li>
      <li><strong>Approach:</strong> Incentive-based rather than penalty-based due to smallholder dominance</li>
    </ul>
    
    <h4>5. Waste</h4>
    <ul>
      <li><strong>Emissions Profile:</strong> 2% of national emissions</li>
      <li><strong>Mechanism:</strong> Emissions trading + project-based credits</li>
      <li><strong>Covered Activities:</strong>
        <ul>
          <li>Landfill methane capture</li>
          <li>Wastewater treatment</li>
          <li>Waste-to-energy facilities</li>
          <li>Composting and recycling</li>
        </ul>
      </li>
      <li><strong>Current Status:</strong> 20+ registered waste-to-energy projects</li>
      <li><strong>Co-Benefits:</strong> Improved sanitation, reduced air pollution, renewable energy generation</li>
    </ul>
    
    <h2>New Economic Paradigm</h2>
    
    <h3>Green Market → Green Investment → Green Jobs</h3>
    <p>Carbon pricing is catalyzing a transformation of Indonesia''s economy:</p>
    
    <h4>Green Market Development</h4>
    <ul>
      <li><strong>Carbon Trading:</strong> IDX Carbon Exchange operational since 2023</li>
      <li><strong>Green Bonds:</strong> $5 billion issued 2020-2024, largest in ASEAN</li>
      <li><strong>Sustainable Finance:</strong> OJK green taxonomy guiding bank lending</li>
      <li><strong>ESG Integration:</strong> Carbon performance affecting corporate valuations</li>
    </ul>
    
    <h4>Green Investment Flows</h4>
    <ul>
      <li><strong>Renewable Energy:</strong> $8 billion invested 2020-2024</li>
      <li><strong>Energy Efficiency:</strong> $2 billion in industrial upgrades</li>
      <li><strong>Electric Vehicles:</strong> $3 billion in manufacturing and infrastructure</li>
      <li><strong>Forest Conservation:</strong> $1.5 billion in REDD+ finance</li>
      <li><strong>Total:</strong> $14.5 billion green investment, 25% driven by carbon pricing signals</li>
    </ul>
    
    <h4>Green Job Creation</h4>
    <ul>
      <li><strong>Renewable Energy:</strong> 50,000 jobs in solar, wind, geothermal</li>
      <li><strong>Energy Efficiency:</strong> 30,000 jobs in retrofitting and auditing</li>
      <li><strong>Sustainable Forestry:</strong> 100,000 jobs in forest management and restoration</li>
      <li><strong>Green Manufacturing:</strong> 40,000 jobs in EV and battery production</li>
      <li><strong>Carbon Services:</strong> 10,000 jobs in MRV, consulting, trading</li>
      <li><strong>Total:</strong> 230,000 green jobs created 2020-2024</li>
    </ul>
    
    <h2>NDCs and Paris Agreement Alignment</h2>
    
    <h3>Indonesia''s Nationally Determined Contributions</h3>
    <ul>
      <li><strong>Unconditional Target:</strong> 29% emissions reduction by 2030 (vs. BAU)</li>
      <li><strong>Conditional Target:</strong> 41% reduction with international support</li>
      <li><strong>Net Zero Target:</strong> 2060 or sooner</li>
    </ul>
    
    <h3>Carbon Pricing Contribution to NDCs</h3>
    <p>Carbon pricing mechanisms are projected to deliver:</p>
    <ul>
      <li><strong>Direct Emissions Reductions:</strong> 150 million tCO2e by 2030</li>
      <li><strong>Percentage of Unconditional NDC:</strong> ~35% of required reductions</li>
      <li><strong>Sectoral Breakdown:</strong>
        <ul>
          <li>Energy: 60 million tCO2e</li>
          <li>FOLU: 50 million tCO2e</li>
          <li>Industry: 25 million tCO2e</li>
          <li>Waste: 10 million tCO2e</li>
          <li>Agriculture: 5 million tCO2e</li>
        </ul>
      </li>
    </ul>
    
    <h3>Three Mechanisms Under Paris Agreement</h3>
    
    <h4>Mechanism 1: Article 6.2 - Cooperative Approaches</h4>
    <ul>
      <li><strong>Description:</strong> Bilateral agreements for internationally transferred mitigation outcomes (ITMOs)</li>
      <li><strong>Indonesia''s Approach:</strong> JCM with Japan, exploring agreements with South Korea, Singapore</li>
      <li><strong>Key Features:</strong>
        <ul>
          <li>Corresponding adjustments to prevent double counting</li>
          <li>Bilateral negotiation of rules and procedures</li>
          <li>Flexibility in project types and methodologies</li>
        </ul>
      </li>
      <li><strong>Current Status:</strong> 30+ JCM projects operational, 2 million tCO2e ITMOs transferred</li>
    </ul>
    
    <h4>Mechanism 2: Article 6.4 - Sustainable Development Mechanism</h4>
    <ul>
      <li><strong>Description:</strong> Centralized mechanism under UNFCCC supervision (successor to CDM)</li>
      <li><strong>Indonesia''s Approach:</strong> Transitioning existing CDM projects, developing new methodologies</li>
      <li><strong>Key Features:</strong>
        <ul>
          <li>International standards and oversight</li>
          <li>Contribution to global mitigation (OMGE - Overall Mitigation in Global Emissions)</li>
          <li>Sustainable development co-benefits</li>
        </ul>
      </li>
      <li><strong>Current Status:</strong> 15 CDM projects transitioning, 5 new Article 6.4 projects in pipeline</li>
    </ul>
    
    <h4>Mechanism 3: Non-Market Approaches</h4>
    <ul>
      <li><strong>Description:</strong> Cooperative actions without carbon credit transfers</li>
      <li><strong>Indonesia''s Approach:</strong> Technology cooperation, capacity building, policy coordination</li>
      <li><strong>Key Activities:</strong>
        <ul>
          <li>Technical assistance from developed countries</li>
          <li>Knowledge sharing and best practice exchange</li>
          <li>Joint research and development</li>
          <li>Policy harmonization with regional partners</li>
        </ul>
      </li>
      <li><strong>Current Status:</strong> Partnerships with Germany (energy efficiency), Norway (REDD+), Australia (renewable energy)</li>
    </ul>
    
    <h2>Implementation Roadmap</h2>
    
    <h3>Phase 1: Foundation (2022-2024) - COMPLETED</h3>
    <ul>
      <li>✓ Carbon tax on coal power implemented</li>
      <li>✓ ETS pilot launched with 50 participants</li>
      <li>✓ SRN-PPI registry operational</li>
      <li>✓ IDX Carbon Exchange established</li>
      <li>✓ MRV systems deployed</li>
      <li>✓ Initial capacity building programs</li>
    </ul>
    
    <h3>Phase 2: Expansion (2025-2027) - IN PROGRESS</h3>
    <ul>
      <li>→ Mandatory ETS for industry (2025)</li>
      <li>→ Expand carbon tax to other fossil fuels</li>
      <li>→ Increase ETS coverage to 200+ facilities</li>
      <li>→ Launch transportation sector mechanisms</li>
      <li>→ Strengthen enforcement and penalties</li>
      <li>→ Develop offset protocols for agriculture and waste</li>
    </ul>
    
    <h3>Phase 3: Integration (2028-2030)</h3>
    <ul>
      <li>→ Link with regional carbon markets (ASEAN)</li>
      <li>→ Implement border carbon adjustments</li>
      <li>→ Transition to full auctioning of allowances</li>
      <li>→ Achieve 200 million tCO2e annual trading volume</li>
      <li>→ Deliver 150 million tCO2e emissions reductions</li>
      <li>→ Position Indonesia as regional carbon market hub</li>
    </ul>
    
    <h2>Monitoring and Evaluation</h2>
    
    <h3>Key Performance Indicators</h3>
    <ul>
      <li><strong>Environmental:</strong> Annual emissions reductions, carbon intensity trends</li>
      <li><strong>Economic:</strong> Carbon price levels, trading volumes, revenue generation</li>
      <li><strong>Social:</strong> Green job creation, energy access, just transition metrics</li>
      <li><strong>Institutional:</strong> Compliance rates, enforcement actions, capacity development</li>
    </ul>
    
    <h3>Reporting and Transparency</h3>
    <ul>
      <li>Annual State of Carbon Markets report</li>
      <li>Quarterly trading statistics and price data</li>
      <li>Biennial Transparency Report to UNFCCC</li>
      <li>Public dashboard on SRN-PPI website</li>
    </ul>
  </div>',
  'policy_document',
  'published',
  18000,
  NOW(),
  NOW()
);

-- Document 5: UNFCCC Update
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Carbon Pricing Update under UNFCCC',
  'Timeline and evolution of carbon pricing under the UNFCCC framework.',
  'international',
  '["UNFCCC", "Paris-Agreement", "timeline", "international-cooperation"]'::jsonb,
  '<div class="document-content">
    <h1>Carbon Pricing Update under UNFCCC</h1>
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tRTkXAqJhur0JK5KqbkAgGYv6RczsV.png" alt="UNFCCC Timeline" style="width:100%; max-width:800px; margin:20px 0;" />
    
    <h2>Historical Evolution</h2>
    
    <h3>1992: Rio Earth Summit</h3>
    <ul>
      <li><strong>Event:</strong> United Nations Framework Convention on Climate Change (UNFCCC) adopted</li>
      <li><strong>Significance:</strong> First global treaty recognizing climate change as a serious problem</li>
      <li><strong>Key Principles:</strong>
        <ul>
          <li>Common but differentiated responsibilities</li>
          <li>Precautionary principle</li>
          <li>Right to sustainable development</li>
        </ul>
      </li>
      <li><strong>Indonesia''s Role:</strong> Early signatory, committed to sustainable development path</li>
    </ul>
    
    <h3>1997: Kyoto Protocol</h3>
    <ul>
      <li><strong>Event:</strong> First binding emissions reduction targets for developed countries</li>
      <li><strong>Flexible Mechanisms:</strong>
        <ul>
          <li>Clean Development Mechanism (CDM)</li>
          <li>Joint Implementation (JI)</li>
          <li>International Emissions Trading</li>
        </ul>
      </li>
      <li><strong>Indonesia''s Participation:</strong>
        <ul>
          <li>Ratified Kyoto Protocol in 2004</li>
          <li>Hosted 50+ CDM projects (renewable energy, forestry)</li>
          <li>Generated 15 million CERs (Certified Emission Reductions)</li>
        </ul>
      </li>
    </ul>
    
    <h3>2015: Paris Agreement</h3>
    <ul>
      <li><strong>Event:</strong> Universal climate agreement adopted at COP21</li>
      <li><strong>Key Features:</strong>
        <ul>
          <li>Limit global warming to well below 2°C, pursue 1.5°C</li>
          <li>Nationally Determined Contributions (NDCs) from all countries</li>
          <li>Five-year review and ratchet mechanism</li>
          <li>Article 6 on cooperative approaches and carbon markets</li>
        </ul>
      </li>
      <li><strong>Indonesia''s Commitment:</strong>
        <ul>
          <li>Ratified Paris Agreement in 2016</li>
          <li>Submitted first NDC: 29% unconditional, 41% conditional reduction by 2030</li>
          <li>Updated NDC in 2021 with enhanced ambition</li>
          <li>Committed to net zero by 2060 or sooner</li>
        </ul>
      </li>
    </ul>
    
    <h3>2021: Glasgow Climate Pact</h3>
    <ul>
      <li><strong>Event:</strong> COP26 in Glasgow, Scotland</li>
      <li><strong>Key Outcomes:</strong>
        <ul>
          <li>Finalized Article 6 rulebook after 6 years of negotiation</li>
          <li>Commitment to phase down coal power</li>
          <li>Enhanced transparency framework</li>
          <li>Loss and damage recognition</li>
        </ul>
      </li>
      <li><strong>Indonesia''s Position:</strong>
        <ul>
          <li>Supported Article 6 finalization</li>
          <li>Committed to just transition from coal</li>
          <li>Secured $20 billion Just Energy Transition Partnership (JETP)</li>
          <li>Enhanced forest protection commitments</li>
        </ul>
      </li>
    </ul>
    
    <h2>Article 6 Implementation</h2>
    
    <h3>Article 6.2: Cooperative Approaches</h3>
    
    <h4>Key Rules and Procedures</h4>
    <ul>
      <li><strong>Corresponding Adjustments:</strong> Mandatory to prevent double counting</li>
      <li><strong>Authorization:</strong> Both countries must authorize ITMO transfers</li>
      <li><strong>Reporting:</strong> Annual information on ITMOs in national inventory reports</li>
      <li><strong>Review:</strong> Technical expert review of Article 6 activities</li>
    </ul>
    
    <h4>Indonesia''s Implementation</h4>
    <ul>
      <li><strong>Governance:</strong> Ministry of Environment designated as Article 6 focal point</li>
      <li><strong>Authorization Process:</strong> Established criteria and procedures for project approval</li>
      <li><strong>Tracking System:</strong> SRN-PPI registry integrated with UNFCCC infrastructure</li>
      <li><strong>Bilateral Agreements:</strong>
        <ul>
          <li>Japan: JCM operational since 2013, transitioned to Article 6.2 in 2023</li>
          <li>South Korea: MOU signed 2024, first projects expected 2025</li>
          <li>Singapore: Negotiations ongoing for carbon credit exports</li>
        </ul>
      </li>
    </ul>
    
    <h3>Article 6.4: Sustainable Development Mechanism</h3>
    
    <h4>Transition from CDM</h4>
    <ul>
      <li><strong>Legacy Projects:</strong> 50 Indonesian CDM projects eligible for transition</li>
      <li><strong>New Methodologies:</strong> Developing Indonesia-specific baselines and approaches</li>
      <li><strong>Sustainable Development Tool:</strong> Enhanced criteria for co-benefits assessment</li>
    </ul>
    
    <h4>Indonesia''s Pipeline</h4>
    <ul>
      <li>15 CDM projects transitioning to Article 6.4</li>
      <li>5 new projects in development (renewable energy, waste management)</li>
      <li>Estimated 3 million tCO2e annual reductions</li>
      <li>Focus on projects with strong sustainable development benefits</li>
    </ul>
    
    <h2>Compliance and Transparency</h2>
    
    <h3>Enhanced Transparency Framework (ETF)</h3>
    <p>Indonesia is implementing the ETF requirements:</p>
    
    <h4>Biennial Transparency Reports (BTRs)</h4>
    <ul>
      <li><strong>Content:</strong>
        <ul>
          <li>National GHG inventory</li>
          <li>Progress towards NDC</li>
          <li>Climate finance received and needed</li>
          <li>Article 6 activities and corresponding adjustments</li>
        </ul>
      </li>
      <li><strong>Indonesia''s Status:</strong> First BTR submitted December 2024</li>
    </ul>
    
    <h4>Technical Expert Review</h4>
    <ul>
      <li>Independent review of BTRs by UNFCCC experts</li>
      <li>Recommendations for improvement</li>
      <li>Indonesia received positive feedback on MRV systems</li>
    </ul>
    
    <h4>Facilitative, Multilateral Consideration of Progress (FMCP)</h4>
    <ul>
      <li>Peer review of NDC implementation</li>
      <li>Opportunity to showcase achievements and challenges</li>
      <li>Indonesia participated in first FMCP cycle 2024</li>
    </ul>
    
    <h3>Corresponding Adjustments</h3>
    <p>Critical mechanism to ensure environmental integrity:</p>
    
    <h4>How It Works</h4>
    <ul>
      <li><strong>Selling Country (Indonesia):</strong> Adds ITMOs to emissions inventory</li>
      <li><strong>Buying Country:</strong> Subtracts ITMOs from emissions inventory</li>
      <li><strong>Result:</strong> Global emissions remain constant, no double counting</li>
    </ul>
    
    <h4>Indonesia''s System</h4>
    <ul>
      <li>Automated corresponding adjustments in SRN-PPI registry</li>
      <li>Real-time tracking of ITMO transfers</li>
      <li>Annual reconciliation with national inventory</li>
      <li>Transparent reporting to UNFCCC</li>
    </ul>
    
    <h2>International Cooperation</h2>
    
    <h3>Bilateral Partnerships</h3>
    
    <h4>Japan - Joint Crediting Mechanism</h4>
    <ul>
      <li><strong>Duration:</strong> 2013-present (transitioned to Article 6.2 in 2023)</li>
      <li><strong>Projects:</strong> 30+ in renewable energy, energy efficiency, waste management</li>
      <li><strong>Emissions Reductions:</strong> 2 million tCO2e annually</li>
      <li><strong>Investment:</strong> $150 million Japanese private sector investment</li>
      <li><strong>Technology Transfer:</strong> Solar, geothermal, waste-to-energy technologies</li>
    </ul>
    
    <h4>Norway - REDD+ Partnership</h4>
    <ul>
      <li><strong>Duration:</strong> 2010-present</li>
      <li><strong>Focus:</strong> Forest conservation and peatland restoration</li>
      <li><strong>Funding:</strong> $1 billion results-based payments</li>
      <li><strong>Results:</strong> Reduced deforestation rate by 60% in target provinces</li>
      <li><strong>Transition:</strong> Exploring Article 6.2 framework for future cooperation</li>
    </ul>
    
    <h4>South Korea - Emerging Partnership</h4>
    <ul>
      <li><strong>Status:</strong> MOU signed 2024</li>
      <li><strong>Focus:</strong> Renewable energy, green hydrogen, carbon capture</li>
      <li><strong>Target:</strong> 1 million tCO2e ITMOs by 2027</li>
      <li><strong>Investment:</strong> $200 million committed</li>
    </ul>
    
    <h3>Multilateral Initiatives</h3>
    
    <h4>World Bank Climate Warehouse</h4>
    <ul>
      <li>Indonesia participating in pilot for carbon credit registry interoperability</li>
      <li>SRN-PPI connected to global metadata platform</li>
      <li>Enhances transparency and reduces double counting risks</li>
    </ul>
    
    <h4>ASEAN Carbon Market Cooperation</h4>
    <ul>
      <li>Indonesia leading regional dialogue on carbon market linkage</li>
      <li>Exploring harmonization of standards and MRV</li>
      <li>Potential for regional carbon market by 2030</li>
    </ul>
    
    <h2>Challenges and Solutions</h2>
    
    <h3>Challenge 1: Corresponding Adjustments Complexity</h3>
    <p><strong>Issue:</strong> Technical complexity of tracking and reporting corresponding adjustments</p>
    <p><strong>Solution:</strong></p>
    <ul>
      <li>Automated systems in SRN-PPI registry</li>
      <li>Capacity building for government officials</li>
      <li>Technical assistance from World Bank and UNDP</li>
      <li>Regular reconciliation and quality checks</li>
    </ul>
    
    <h3>Challenge 2: Baseline Setting</h3>
    <p><strong>Issue:</strong> Determining appropriate baselines for emissions reductions</p>
    <p><strong>Solution:</strong></p>
    <ul>
      <li>Conservative baselines to ensure environmental integrity</li>
      <li>Regular updates based on latest data</li>
      <li>Sector-specific methodologies</li>
      <li>Independent third-party validation</li>
    </ul>
    
    <h3>Challenge 3: Permanence and Reversals</h3>
    <p><strong>Issue:</strong> Risk of emissions reversals, especially in forestry projects</p>
    <p><strong>Solution:</strong></p>
    <ul>
      <li>Buffer pools for forestry credits (20% withheld)</li>
      <li>Long-term monitoring and verification</li>
      <li>Insurance mechanisms for reversal risks</li>
      <li>Liability frameworks for project developers</li>
    </ul>
    
    <h3>Challenge 4: Capacity Constraints</h3>
    <p><strong>Issue:</strong> Limited domestic capacity for MRV and carbon market operations</p>
    <p><strong>Solution:</strong></p>
    <ul>
      <li>Comprehensive training programs (1000+ officials trained 2020-2024)</li>
      <li>Partnerships with international experts</li>
      <li>University programs in carbon markets and climate finance</li>
      <li>South-South cooperation with experienced countries</li>
    </ul>
    
    <h2>Future Outlook</h2>
    
    <h3>2025-2027: Scaling Up</h3>
    <ul>
      <li>Expand bilateral partnerships to 5+ countries</li>
      <li>Increase ITMO transfers to 5 million tCO2e annually</li>
      <li>Develop 20+ new Article 6.4 projects</li>
      <li>Strengthen MRV and registry systems</li>
    </ul>
    
    <h3>2028-2030: Regional Integration</h3>
    <ul>
      <li>Link Indonesian carbon market with ASEAN partners</li>
      <li>Establish Indonesia as regional carbon market hub</li>
      <li>Achieve 10 million tCO2e annual ITMO transfers</li>
      <li>Contribute significantly to NDC achievement</li>
    </ul>
    
    <h3>Post-2030: Global Leadership</h3>
    <ul>
      <li>Position Indonesia as model for developing country carbon markets</li>
      <li>Share lessons learned and best practices globally</li>
      <li>Support other countries in Article 6 implementation</li>
      <li>Contribute to global climate ambition and net zero goals</li>
    </ul>
  </div>',
  'policy_document',
  'published',
  16000,
  NOW(),
  NOW()
);

-- Document 6: Progress Update
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Carbon Trading Preparation Progress Update',
  'Comprehensive update on Indonesia''s carbon trading preparation and implementation progress.',
  'progress-report',
  '["progress", "implementation", "JCM", "bilateral-cooperation", "2025-priorities"]'::jsonb,
  '<div class="document-content">
    <h1>Carbon Trading Preparation Progress Update</h1>
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tRTkXAqJhur0JK5KqbkAgGYv6RczsV.png" alt="Progress Update" style="width:100%; max-width:800px; margin:20px 0;" />
    
    <h2>Executive Summary</h2>
    <p>Indonesia has made significant progress in establishing a comprehensive carbon trading system. As of Q4 2024, the country has operational carbon pricing mechanisms, a functioning registry system, and multiple international partnerships. This report provides a detailed update on implementation progress and strategic priorities for 2025.</p>
    
    <h2>Article 6 Implementation Progress</h2>
    
    <h3>Article 6.2 - Bilateral Cooperation</h3>
    
    <h4>Operational Partnerships</h4>
    <ul>
      <li><strong>Japan JCM:</strong>
        <ul>
          <li>Status: Fully operational, transitioned to Article 6.2 framework</li>
          <li>Projects: 30+ registered projects across multiple sectors</li>
          <li>Emissions Reductions: 2 million tCO2e annually</li>
          <li>ITMOs Transferred: 8 million tCO2e cumulative (2013-2024)</li>
          <li>Investment: $150 million Japanese private sector capital</li>
        </ul>
      </li>
    </ul>
    
    <h4>Partnerships in Development</h4>
    <ul>
      <li><strong>South Korea:</strong>
        <ul>
          <li>MOU signed: June 2024</li>
          <li>Focus sectors: Renewable energy, green hydrogen, CCUS</li>
          <li>Target: 1 million tCO2e ITMOs by 2027</li>
          <li>First projects expected: Q2 2025</li>
        </ul>
      </li>
      <li><strong>Singapore:</strong>
        <ul>
          <li>Negotiations: Advanced stage</li>
          <li>Focus: High-quality carbon credits for Singapore''s carbon tax compliance</li>
          <li>Potential volume: 2-3 million tCO2e annually</li>
          <li>Agreement expected: Q1 2025</li>
        </ul>
      </li>
      <li><strong>Switzerland:</strong>
        <ul>
          <li>Exploratory discussions ongoing</li>
          <li>Focus: REDD+ and renewable energy</li>
          <li>Timeline: MOU targeted for 2025</li>
        </ul>
      </li>
    </ul>
    
    <h3>Article 6.4 - Sustainable Development Mechanism</h3>
    
    <h4>CDM Transition</h4>
    <ul>
      <li>Legacy CDM projects: 50 total in Indonesia</li>
      <li>Eligible for transition: 35 projects</li>
      <li>Transition applications submitted: 15 projects</li>
      <li>Approved transitions: 8 projects (as of Dec 2024)</li>
      <li>Expected annual reductions: 1.5 million tCO2e from transitioned projects</li>
    </ul>
    
    <h4>New Article 6.4 Projects</h4>
    <ul>
      <li>Projects in development: 12</li>
      <li>Sectors: Renewable energy (6), waste management (4), energy efficiency (2)</li>
      <li>Expected annual reductions: 2 million tCO2e</li>
      <li>First registrations expected: Q2 2025</li>
    </ul>
    
    <h2>Joint Crediting Mechanism (JCM) with Japan</h2>
    
    <h3>Program Overview</h3>
    <p>The Indonesia-Japan JCM is the most mature bilateral carbon market partnership in Indonesia, serving as a model for future agreements.</p>
    
    <h3>Project Portfolio</h3>
    
    <h4>Renewable Energy (18 projects)</h4>
    <ul>
      <li><strong>Solar PV:</strong> 8 projects, 50 MW total capacity, 60,000 tCO2e/year</li>
      <li><strong>Geothermal:</strong> 4 projects, 200 MW capacity, 800,000 tCO2e/year</li>
      <li><strong>Biomass:</strong> 4 projects, 30 MW capacity, 120,000 tCO2e/year</li>
      <li><strong>Small Hydro:</strong> 2 projects, 15 MW capacity, 50,000 tCO2e/year</li>
    </ul>
    
    <h4>Energy Efficiency (8 projects)</h4>
    <ul>
      <li><strong>Industrial:</strong> 5 projects in cement, steel, chemicals, 400,000 tCO2e/year</li>
      <li><strong>Buildings:</strong> 2 projects, commercial building retrofits, 30,000 tCO2e/year</li>
      <li><strong>District Cooling:</strong> 1 project, 20,000 tCO2e/year</li>
    </ul>
    
    <h4>Waste Management (4 projects)</h4>
    <ul>
      <li><strong>Waste-to-Energy:</strong> 2 projects, 20 MW capacity, 200,000 tCO2e/year</li>
      <li><strong>Landfill Gas:</strong> 2 projects, methane capture, 100,000 tCO2e/year</li>
    </ul>
    
    <h3>Technology Transfer</h3>
    <p>Key technologies introduced through JCM:</p>
    <ul>
      <li>Advanced solar PV systems with tracking</li>
      <li>Geothermal binary cycle technology</li>
      <li>High-efficiency industrial boilers</li>
      <li>Waste gasification systems</li>
      <li>Building energy management systems</li>
    </ul>
    
    <h3>Capacity Building</h3>
    <ul>
      <li>Training programs: 500+ Indonesian professionals trained</li>
      <li>Study tours: 50+ officials visited Japanese facilities</li>
      <li>Technical workshops: 20+ events on MRV, project development</li>
      <li>Knowledge products: 10+ guidebooks and manuals published</li>
    </ul>
    
    <h2>Norway Bilateral Agreement - REDD+</h2>
    
    <h3>Partnership Overview</h3>
    <p>Indonesia-Norway partnership is one of the world''s largest REDD+ programs, focused on reducing emissions from deforestation and forest degradation.</p>
    
    <h3>Results-Based Payments</h3>
    <ul>
      <li><strong>Total Funding:</strong> $1 billion committed (2010-2024)</li>
      <li><strong>Payments Made:</strong> $750 million disbursed</li>
      <li><strong>Basis:</strong> Verified emissions reductions from reduced deforestation</li>
      <li><strong>Price:</strong> $5 per tCO2e</li>
      <li><strong>Volume:</strong> 150 million tCO2e reductions verified</li>
    </ul>
    
    <h3>Key Achievements</h3>
    <ul>
      <li><strong>Deforestation Reduction:</strong> 60% decrease in target provinces (2010-2024)</li>
      <li><strong>Peatland Restoration:</strong> 500,000 hectares restored</li>
      <li><strong>Community Benefits:</strong> 100,000+ households supported</li>
      <li><strong>Governance:</strong> Strengthened forest monitoring and enforcement</li>
    </ul>
    
    <h3>Transition to Article 6</h3>
    <p>Indonesia and Norway are exploring transition of the partnership to Article 6.2 framework:</p>
    <ul>
      <li>Negotiations ongoing for post-2024 agreement</li>
      <li>Focus on corresponding adjustments and ITMO transfers</li>
      <li>Potential for increased ambition and funding</li>
      <li>Expected agreement: 2025</li>
    </ul>
    
    <h2>Funding Support</h2>
    
    <h3>World Bank</h3>
    
    <h4>Forest Carbon Partnership Facility (FCPF)</h4>
    <ul>
      <li><strong>Funding:</strong> $100 million</li>
      <li><strong>Focus:</strong> REDD+ readiness and implementation</li>
      <li><strong>Status:</strong> Active, disbursement ongoing</li>
      <li><strong>Key Activities:</strong>
        <ul>
          <li>MRV system development</li>
          <li>Safeguards implementation</li>
          <li>Benefit sharing mechanisms</li>
          <li>Community engagement</li>
        </ul>
      </li>
    </ul>
    
    <h4>Climate Warehouse Initiative</h4>
    <ul>
      <li>Indonesia participating in pilot</li>
      <li>SRN-PPI registry connected to global metadata platform</li>
      <li>Enhances transparency and interoperability</li>
      <li>Reduces double counting risks</li>
    </ul>
    
    <h3>Partnership for Market Implementation (PMI)</h3>
    <ul>
      <li><strong>Funding:</strong> $50 million technical assistance</li>
      <li><strong>Donors:</strong> Germany, Sweden, Norway</li>
      <li><strong>Focus:</strong> Article 6 implementation support</li>
      <li><strong>Key Activities:</strong>
        <ul>
          <li>Regulatory framework development</li>
          <li>Capacity building programs</li>
          <li>MRV system enhancement</li>
          <li>Stakeholder engagement</li>
        </ul>
      </li>
    </ul>
    
    <h3>Green Climate Fund (GCF)</h3>
    <ul>
      <li><strong>Approved Projects:</strong> 3 projects, $200 million total</li>
      <li><strong>Focus:</strong> Renewable energy, energy efficiency, forest conservation</li>
      <li><strong>Co-financing:</strong> $400 million from government and private sector</li>
      <li><strong>Expected Reductions:</strong> 5 million tCO2e over project lifetimes</li>
    </ul>
    
    <h2>Strategic Priorities 2025</h2>
    
    <h3>Priority 1: Expand Bilateral Partnerships</h3>
    <p><strong>Objective:</strong> Increase number of Article 6.2 partnerships from 1 to 4</p>
    <p><strong>Actions:</strong></p>
    <ul>
      <li>Finalize agreement with Singapore (Q1 2025)</li>
      <li>Launch first projects with South Korea (Q2 2025)</li>
      <li>Sign MOU with Switzerland (Q3 2025)</li>
      <li>Explore partnerships with UAE, Saudi Arabia</li>
    </ul>
    <p><strong>Target:</strong> 5 million tCO2e ITMOs transferred in 2025</p>
    
    <h3>Priority 2: Scale Up Domestic Carbon Market</h3>
    <p><strong>Objective:</strong> Increase ETS coverage and trading volume</p>
    <p><strong>Actions:</strong></p>
    <ul>
      <li>Expand mandatory ETS to 200+ facilities (from 50 in pilot)</li>
      <li>Launch transportation sector mechanisms</li>
      <li>Increase carbon tax rate to Rp 50,000/tCO2e</li>
      <li>Develop offset protocols for agriculture and waste</li>
    </ul>
    <p><strong>Target:</strong> 50 million tCO2e annual trading volume, $100 million market value</p>
    
    <h3>Priority 3: Strengthen MRV Systems</h3>
    <p><strong>Objective:</strong> Enhance accuracy and transparency of emissions monitoring</p>
    <p><strong>Actions:</strong></p>
    <ul>
      <li>Deploy CEMS (Continuous Emissions Monitoring Systems) at 100+ facilities</li>
      <li>Integrate satellite monitoring for forestry</li>
      <li>Upgrade SRN-PPI registry with blockchain technology</li>
      <li>Train 500+ additional MRV professionals</li>
    </ul>
    <p><strong>Target:</strong> 95% data quality score in UNFCCC technical review</p>
    
    <h3>Priority 4: Enhance Stakeholder Engagement</h3>
    <p><strong>Objective:</strong> Build capacity and support for carbon markets across sectors</p>
    <p><strong>Actions:</strong></p>
    <ul>
      <li>Conduct 50+ training workshops for businesses</li>
      <li>Establish carbon market help desk for SMEs</li>
      <li>Launch public awareness campaign</li>
      <li>Create industry-specific guidance documents</li>
    </ul>
    <p><strong>Target:</strong> 1000+ entities registered in carbon market systems</p>
    
    <h3>Priority 5: Develop Regional Cooperation</h3>
    <p><strong>Objective:</strong> Position Indonesia as ASEAN carbon market hub</p>
    <p><strong>Actions:</strong></p>
    <ul>
      <li>Host ASEAN carbon market dialogue (Q2 2025)</li>
      <li>Develop harmonization roadmap with regional partners</li>
      <li>Explore pilot linkage with Thailand or Vietnam</li>
      <li>Share lessons learned and best practices</li>
    </ul>
    <p><strong>Target:</strong> MOU on regional carbon market cooperation signed by 5+ ASEAN countries</p>
    
    <h2>Key Performance Indicators - 2025 Targets</h2>
    
    <h3>Environmental Metrics</h3>
    <ul>
      <li>Emissions reductions from carbon pricing: 35 million tCO2e</li>
      <li>ITMOs transferred internationally: 5 million tCO2e</li>
      <li>Carbon credits issued domestically: 20 million tCO2e</li>
      <li>Deforestation rate: <100,000 hectares/year</li>
    </ul>
    
    <h3>Economic Metrics</h3>
    <ul>
      <li>Carbon market transaction value: $100 million</li>
      <li>Carbon pricing revenue: $250 million</li>
      <li>Green investment catalyzed: $2 billion</li>
      <li>Green jobs created: 50,000</li>
    </ul>
    
    <h3>Institutional Metrics</h3>
    <ul>
      <li>Entities covered by carbon pricing: 250+</li>
      <li>Bilateral partnerships: 4 operational</li>
      <li>Article 6.4 projects: 20 registered</li>
      <li>MRV professionals trained: 1500 cumulative</li>
    </ul>
    
    <h2>Challenges and Mitigation Strategies</h2>
    
    <h3>Challenge 1: Price Volatility</h3>
    <p><strong>Risk:</strong> Carbon price fluctuations affecting investment decisions</p>
    <p><strong>Mitigation:</strong></p>
    <ul>
      <li>Implement price floor (Rp 30,000/tCO2e) and ceiling (Rp 150,000/tCO2e)</li>
      <li>Market stabilization reserve for supply management</li>
      <li>Long-term price signals through carbon tax escalation schedule</li>
    </ul>
    
    <h3>Challenge 2: Capacity Constraints</h3>
    <p><strong>Risk:</strong> Insufficient domestic expertise for market operations</p>
    <p><strong>Mitigation:</strong></p>
    <ul>
      <li>Intensive training programs (500+ professionals in 2025)</li>
      <li>International technical assistance partnerships</li>
      <li>University curriculum development</li>
      <li>Certification programs for carbon market professionals</li>
    </ul>
    
    <h3>Challenge 3: Competitiveness Concerns</h3>
    <p><strong>Risk:</strong> Carbon costs affecting industrial competitiveness</p>
    <p><strong>Mitigation:</strong></p>
    <ul>
      <li>Free allocation for trade-exposed industries</li>
      <li>Gradual phase-in of obligations</li>
      <li>Support for energy efficiency investments</li>
      <li>Exploring border carbon adjustments</li>
    </ul>
    
    <h3>Challenge 4: International Recognition</h3>
    <p><strong>Risk:</strong> Indonesian carbon credits not accepted internationally</p>
    <p><strong>Mitigation:</strong></p>
    <ul>
      <li>Alignment with international standards (ISO, GHG Protocol)</li>
      <li>Robust MRV and third-party verification</li>
      <li>Participation in Climate Warehouse for transparency</li>
      <li>Bilateral agreements with quality assurance provisions</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>Indonesia has made substantial progress in establishing a comprehensive carbon trading system. The operational JCM with Japan, advancing partnerships with other countries, strong domestic policy framework, and robust MRV systems position Indonesia as a regional leader in carbon markets. The strategic priorities for 2025 focus on scaling up operations, enhancing quality, and expanding international cooperation. With continued commitment and implementation, Indonesia is on track to achieve its NDC targets and contribute significantly to global climate action.</p>
  </div>',
  'policy_document',
  'published',
  20000,
  NOW(),
  NOW()
);

-- Document 7: Regulatory Development
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Active Regulatory Development: Presidential Regulation 112/2022 Amendment',
  'Detailed analysis of ongoing regulatory development for carbon pricing framework.',
  'regulatory',
  '["regulation", "presidential-decree", "amendment", "public-consultation", "2025"]'::jsonb,
  '<div class="document-content">
    <h1>Active Regulatory Development</h1>
    <h2>Presidential Regulation 112/2022 Amendment Process</h2>
    
    <h3>Background</h3>
    <p>Presidential Regulation No. 112/2022 on the Implementation of Carbon Economic Value established the foundational framework for Indonesia''s carbon pricing system. As implementation has progressed, the need for amendments has emerged to address operational challenges, enhance market mechanisms, and align with international best practices.</p>
    
    <h3>Current Status (December 2024)</h3>
    <ul>
      <li><strong>Stage:</strong> Public consultation and stakeholder engagement</li>
      <li><strong>Lead Agency:</strong> Ministry of Environment and Forestry, Coordinating Ministry for Economic Affairs</li>
      <li><strong>Timeline:</strong> Amendment expected to be finalized Q2 2025</li>
      <li><strong>Consultation Period:</strong> October 2024 - February 2025</li>
    </ul>
    
    <h2>Key Proposed Amendments</h2>
    
    <h3>1. Expanded Sectoral Coverage</h3>
    <p><strong>Current Regulation:</strong> Covers power generation, industry, waste</p>
    <p><strong>Proposed Amendment:</strong></p>
    <ul>
      <li>Add transportation sector (aviation, shipping)</li>
      <li>Include large commercial buildings</li>
      <li>Expand industrial coverage to medium-sized facilities</li>
      <li>Clarify treatment of imported emissions (scope 3)</li>
    </ul>
    <p><strong>Rationale:</strong> Increase coverage from 60% to 75% of national emissions</p>
    
    <h3>2. Enhanced Market Mechanisms</h3>
    <p><strong>Current Regulation:</strong> Basic framework for emissions trading</p>
    <p><strong>Proposed Amendment:</strong></p>
    <ul>
      <li>Detailed rules for allowance allocation (free vs. auctioned)</li>
      <li>Banking and borrowing provisions</li>
      <li>Price stability mechanisms (floor and ceiling)</li>
      <li>Market oversight and manipulation prevention</li>
      <li>Linkage provisions for international cooperation</li>
    </ul>
    <p><strong>Rationale:</strong> Create more robust and liquid carbon market</p>
    
    <h3>3. Strengthened MRV Requirements</h3>
    <p><strong>Current Regulation:</strong> General MRV obligations</p>
    <p><strong>Proposed Amendment:</strong></p>
    <ul>
      <li>Mandatory CEMS for facilities >50,000 tCO2e/year</li>
      <li>Quarterly reporting for large emitters</li>
      <li>Accreditation requirements for verifiers</li>
      <li>Penalties for false reporting (up to 5x carbon value)</li>
      <li>Public disclosure requirements</li>
    </ul>
    <p><strong>Rationale:</strong> Ensure data quality and market integrity</p>
    
    <h3>4. Revenue Allocation Framework</h3>
    <p><strong>Current Regulation:</strong> Revenue goes to state budget</p>
    <p><strong>Proposed Amendment:</strong></p>
    <ul>
      <li>Earmark 60% for climate mitigation and adaptation</li>
      <li>20% for just transition support</li>
      <li>15% for research and development</li>
      <li>5% for administrative costs</li>
      <li>Transparent reporting on revenue use</li>
    </ul>
    <p><strong>Rationale:</strong> Ensure carbon pricing revenue supports climate action</p>
    
    <h3>5. International Cooperation Provisions</h3>
    <p><strong>Current Regulation:</strong> Limited provisions for international transfers</p>
    <p><strong>Proposed Amendment:</strong></p>
    <ul>
      <li>Detailed rules for Article 6.2 ITMO transfers</li>
      <li>Authorization process for international projects</li>
      <li>Corresponding adjustments procedures</li>
      <li>Quality standards for imported/exported credits</li>
      <li>Bilateral agreement framework</li>
    </ul>
    <p><strong>Rationale:</strong> Facilitate international carbon market participation</p>
    
    <h3>6. Compliance and Enforcement</h3>
    <p><strong>Current Regulation:</strong> Basic penalty structure</p>
    <p><strong>Proposed Amendment:</strong></p>
    <ul>
      <li>Graduated penalties based on violation severity</li>
      <li>Administrative sanctions (warnings, fines, permit suspension)</li>
      <li>Criminal penalties for serious violations</li>
      <li>Compliance support programs for first-time violators</li>
      <li>Appeals process and dispute resolution</li>
    </ul>
    <p><strong>Rationale:</strong> Ensure compliance while supporting transition</p>
    
    <h2>Stakeholder Consultation Process</h2>
    
    <h3>Consultation Phases</h3>
    
    <h4>Phase 1: Initial Stakeholder Engagement (Oct-Nov 2024)</h4>
    <ul>
      <li>Presentation of draft amendments to key stakeholders</li>
      <li>Industry associations, environmental NGOs, academic institutions</li>
      <li>10 regional consultations across Indonesia</li>
      <li>Online portal for written submissions</li>
    </ul>
    
    <h4>Phase 2: Public Consultation (Dec 2024 - Jan 2025)</h4>
    <ul>
      <li>Publication of draft regulation for public comment</li>
      <li>30-day comment period</li>
      <li>Public hearings in Jakarta, Surabaya, Medan</li>
      <li>Webinars for remote participation</li>
    </ul>
    
    <h4>Phase 3: Revision and Finalization (Feb-Mar 2025)</h4>
    <ul>
      <li>Analysis of stakeholder feedback</li>
      <li>Revision of draft based on input</li>
      <li>Final stakeholder review</li>
      <li>Submission to President for signature</li>
    </ul>
    
    <h3>Key Stakeholder Groups</h3>
    
    <h4>Industry Associations</h4>
    <ul>
      <li>Indonesian Chamber of Commerce (KADIN)</li>
      <li>Association of Indonesian Cement Industries (ASI)</li>
      <li>Indonesian Steel Association (IISIA)</li>
      <li>Indonesian Pulp and Paper Association (APKI)</li>
      <li>Indonesian Petroleum Association (IPA)</li>
    </ul>
    
    <h4>Environmental Organizations</h4>
    <ul>
      <li>WWF Indonesia</li>
      <li>Greenpeace Indonesia</li>
      <li>Indonesian Forum for the Environment (WALHI)</li>
      <li>Climate Reality Project Indonesia</li>
    </ul>
    
    <h4>Academic and Research Institutions</h4>
    <ul>
      <li>University of Indonesia</li>
      <li>Bandung Institute of Technology</li>
      <li>Bogor Agricultural University</li>
      <li>Indonesian Institute of Sciences (LIPI)</li>
    </ul>
    
    <h4>International Partners</h4>
    <ul>
      <li>World Bank</li>
      <li>UNDP</li>
      <li>Partnership for Market Implementation (PMI)</li>
      <li>Bilateral partners (Japan, Norway, etc.)</li>
    </ul>
    
    <h2>Key Issues and Debates</h2>
    
    <h3>Issue 1: Carbon Price Level</h3>
    <p><strong>Industry Position:</strong> Keep prices low to maintain competitiveness</p>
    <p><strong>Environmental Position:</strong> Increase prices to drive meaningful emissions reductions</p>
    <p><strong>Government Proposal:</strong> Gradual price escalation with competitiveness safeguards</p>
    <ul>
      <li>2025: Rp 50,000/tCO2e ($3.30)</li>
      <li>2027: Rp 75,000/tCO2e ($5.00)</li>
      <li>2030: Rp 100,000/tCO2e ($6.70)</li>
      <li>Free allocation for trade-exposed industries</li>
    </ul>
    
    <h3>Issue 2: Sectoral Coverage</h3>
    <p><strong>Industry Position:</strong> Phased expansion to allow adaptation time</p>
    <p><strong>Environmental Position:</strong> Rapid expansion to maximize emissions coverage</p>
    <p><strong>Government Proposal:</strong> Balanced approach with clear timeline</p>
    <ul>
      <li>2025: Add transportation (aviation, shipping)</li>
      <li>2026: Add large commercial buildings</li>
      <li>2027: Expand to medium-sized industrial facilities</li>
      <li>2028: Review and consider further expansion</li>
    </ul>
    
    <h3>Issue 3: Revenue Use</h3>
    <p><strong>Industry Position:</strong> Return revenue to affected sectors for transition support</p>
    <p><strong>Environmental Position:</strong> Invest in renewable energy and forest conservation</p>
    <p><strong>Government Proposal:</strong> Balanced allocation across priorities</p>
    <ul>
      <li>40% - Renewable energy development</li>
      <li>25% - Forest conservation and restoration</li>
      <li>20% - Just transition support (affected workers and communities)</li>
      <li>10% - Research and development</li>
      <li>5% - Administrative costs</li>
    </ul>
    
    <h3>Issue 4: International Linkage</h3>
    <p><strong>Industry Position:</strong> Ensure Indonesian credits are internationally recognized</p>
    <p><strong>Environmental Position:</strong> Maintain high quality standards to prevent greenwashing</p>
    <p><strong>Government Proposal:</strong> Quality-focused approach</p>
    <ul>
      <li>Align with international standards (Paris Agreement, ISO)</li>
      <li>Robust MRV and third-party verification</li>
      <li>Corresponding adjustments for all international transfers</li>
      <li>Bilateral agreements with quality assurance provisions</li>
    </ul>
    
    <h2>Implementation Timeline</h2>
    
    <h3>Q1 2025</h3>
    <ul>
      <li>Complete public consultation process</li>
      <li>Finalize draft regulation incorporating stakeholder feedback</li>
      <li>Submit to inter-ministerial review</li>
    </ul>
    
    <h3>Q2 2025</h3>
    <ul>
      <li>Presidential signature on amended regulation</li>
      <li>Publication in State Gazette</li>
      <li>Begin development of implementing regulations</li>
      <li>Launch stakeholder education campaign</li>
    </ul>
    
    <h3>Q3 2025</h3>
    <ul>
      <li>Issue implementing regulations (ministerial decrees)</li>
      <li>Update SRN-PPI registry systems</li>
      <li>Train government officials and market participants</li>
      <li>Prepare for expanded coverage</li>
    </ul>
    
    <h3>Q4 2025</h3>
    <ul>
      <li>Implement expanded sectoral coverage</li>
      <li>Launch enhanced MRV requirements</li>
      <li>Begin operation of price stability mechanisms</li>
      <li>First reporting under new framework</li>
    </ul>
    
    <h2>Expected Impacts</h2>
    
    <h3>Environmental Impacts</h3>
    <ul>
      <li>Increase emissions coverage from 60% to 75% of national total</li>
      <li>Additional 20 million tCO2e annual reductions by 2030</li>
      <li>Stronger price signal driving clean technology investment</li>
      <li>Enhanced MRV improving data quality and transparency</li>
    </ul>
    
    <h3>Economic Impacts</h3>
    <ul>
      <li>Carbon market value increase to $200 million by 2027</li>
      <li>Additional $500 million annual revenue by 2030</li>
      <li>$3 billion green investment catalyzed (2025-2030)</li>
      <li>50,000 additional green jobs created</li>
    </ul>
    
    <h3>Social Impacts</h3>
    <ul>
      <li>Just transition support for affected workers</li>
      <li>Community benefits from revenue allocation</li>
      <li>Improved air quality from reduced emissions</li>
      <li>Enhanced climate resilience through adaptation funding</li>
    </ul>
    
    <h2>International Alignment</h2>
    
    <h3>Paris Agreement</h3>
    <ul>
      <li>Strengthens Indonesia''s ability to achieve NDC targets</li>
      <li>Facilitates Article 6 implementation</li>
      <li>Enhances transparency and reporting</li>
      <li>Demonstrates climate ambition and leadership</li>
    </ul>
    
    <h3>Regional Cooperation</h3>
    <ul>
      <li>Positions Indonesia for ASEAN carbon market linkage</li>
      <li>Harmonizes standards with regional partners</li>
      <li>Facilitates cross-border carbon trading</li>
      <li>Establishes Indonesia as regional hub</li>
    </ul>
    
    <h3>International Best Practices</h3>
    <ul>
      <li>Incorporates lessons from EU ETS, California, China</li>
      <li>Aligns with ICAP (International Carbon Action Partnership) principles</li>
      <li>Adopts World Bank recommendations</li>
      <li>Reflects latest climate science and policy research</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>The amendment of Presidential Regulation 112/2022 represents a critical step in strengthening Indonesia''s carbon pricing framework. Through comprehensive stakeholder consultation and careful consideration of international best practices, the amended regulation will enhance market mechanisms, expand coverage, strengthen MRV, and facilitate international cooperation. Implementation of these amendments will position Indonesia as a regional leader in carbon markets and contribute significantly to achieving the country''s climate goals.</p>
  </div>',
  'policy_document',
  'published',
  17000,
  NOW(),
  NOW()
);

-- Document 8: Strategic Analysis
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'the-nusantara-code',
  'Strategic Analysis: Indonesia Carbon Market Opportunity',
  'Comprehensive strategic analysis of Indonesia''s carbon market opportunity and competitive positioning.',
  'strategic-analysis',
  '["strategy", "market-opportunity", "competitive-advantage", "recommendations"]'::jsonb,
  '<div class="document-content">
    <h1>Strategic Analysis: Indonesia Carbon Market Opportunity</h1>
    
    <h2>Executive Summary</h2>
    <p>Indonesia stands at the threshold of becoming a major player in global carbon markets. With the world''s third-largest tropical rainforest, significant renewable energy potential, and a rapidly developing regulatory framework, Indonesia has unique competitive advantages. This strategic analysis quantifies the market opportunity, identifies critical success factors, and provides actionable recommendations for maximizing Indonesia''s carbon market potential.</p>
    
    <h2>Market Opportunity Quantification</h2>
    
    <h3>Supply-Side Analysis</h3>
    
    <h4>REDD+ Potential</h4>
    <ul>
      <li><strong>Forest Area:</strong> 94 million hectares (3rd largest tropical forest globally)</li>
      <li><strong>Baseline Deforestation:</strong> 500,000 hectares/year</li>
      <li><strong>Emissions from Deforestation:</strong> 250 million tCO2e/year</li>
      <li><strong>Reduction Potential:</strong> 150 million tCO2e/year (60% reduction)</li>
      <li><strong>Credit Value (at $10/tCO2e):</strong> $1.5 billion/year</li>
    </ul>
    
    <h4>Renewable Energy Potential</h4>
    <ul>
      <li><strong>Geothermal:</strong> 29 GW potential, 2 GW installed → 27 GW opportunity</li>
      <li><strong>Solar:</strong> 207 GW potential, 0.2 GW installed → 206 GW opportunity</li>
      <li><strong>Wind:</strong> 155 GW potential, 0.1 GW installed → 154 GW opportunity</li>
      <li><strong>Hydro:</strong> 75 GW potential, 6 GW installed → 69 GW opportunity</li>
      <li><strong>Total Emissions Reduction:</strong> 200 million tCO2e/year</li>
      <li><strong>Credit Value (at $5/tCO2e):</strong> $1 billion/year</li>
    </ul>
    
    <h4>Industrial Efficiency</h4>
    <ul>
      <li><strong>Cement Sector:</strong> 20 million tCO2e reduction potential</li>
      <li><strong>Steel Sector:</strong> 10 million tCO2e reduction potential</li>
      <li><strong>Chemicals:</strong> 8 million tCO2e reduction potential</li>
      <li><strong>Pulp & Paper:</strong> 7 million tCO2e reduction potential</li>
      <li><strong>Total:</strong> 45 million tCO2e/year</li>
      <li><strong>Credit Value (at $8/tCO2e):</strong> $360 million/year</li>
    </ul>
    
    <h4>Waste Management</h4>
    <ul>
      <li><strong>Landfill Methane:</strong> 15 million tCO2e reduction potential</li>
      <li><strong>Waste-to-Energy:</strong> 10 million tCO2e reduction potential</li>
      <li><strong>Total:</strong> 25 million tCO2e/year</li>
      <li><strong>Credit Value (at $12/tCO2e):</strong> $300 million/year</li>
    </ul>
    
    <h3>Total Market Opportunity</h3>
    <ul>
      <li><strong>Annual Emissions Reduction Potential:</strong> 420 million tCO2e</li>
      <li><strong>Annual Credit Value (conservative pricing):</strong> $3.16 billion</li>
      <li><strong>10-Year Market Value (2025-2035):</strong> $31.6 billion</li>
      <li><strong>With Price Appreciation (5%/year):</strong> $40 billion</li>
    </ul>
    
    <h3>Demand-Side Analysis</h3>
    
    <h4>Domestic Compliance Demand</h4>
    <ul>
      <li><strong>Covered Emissions:</strong> 400 million tCO2e/year (by 2030)</li>
      <li><strong>Reduction Target:</strong> 29% (116 million tCO2e)</li>
      <li><strong>Offset Allowance:</strong> 20% (23 million tCO2e)</li>
      <li><strong>Annual Demand:</strong> 23 million tCO2e</li>
      <li><strong>Market Value:</strong> $230 million/year (at $10/tCO2e)</li>
    </ul>
    
    <h4>International Demand</h4>
    <ul>
      <li><strong>Article 6.2 Bilateral Agreements:</strong>
        <ul>
          <li>Japan: 2 million tCO2e/year ($20 million)</li>
          <li>South Korea: 1 million tCO2e/year ($10 million)</li>
          <li>Singapore: 3 million tCO2e/year ($45 million)</li>
          <li>Others (projected): 4 million tCO2e/year ($40 million)</li>
        </ul>
      </li>
      <li><strong>Article 6.4 Mechanism:</strong> 5 million tCO2e/year ($50 million)</li>
      <li><strong>Voluntary Carbon Market:</strong> 10 million tCO2e/year ($150 million)</li>
      <li><strong>Total International Demand:</strong> 25 million tCO2e/year ($315 million)</li>
    </ul>
    
    <h4>Total Demand</h4>
    <ul>
      <li><strong>Annual Demand (2030):</strong> 48 million tCO2e</li>
      <li><strong>Market Value:</strong> $545 million/year</li>
      <li><strong>Growth Rate:</strong> 15% annually (2025-2030)</li>
      <li><strong>2035 Projection:</strong> 100 million tCO2e, $1.5 billion</li>
    </ul>
    
    <h2>Competitive Advantages</h2>
    
    <h3>1. Massive Carbon Supply Potential</h3>
    <ul>
      <li><strong>Blue Carbon:</strong> World''s largest mangrove forests (3.5 million hectares)</li>
      <li><strong>Peatlands:</strong> 14.9 million hectares, significant carbon storage</li>
      <li><strong>Tropical Forests:</strong> High carbon density and biodiversity co-benefits</li>
      <li><strong>Renewable Energy:</strong> Abundant geothermal, solar, wind resources</li>
      <li><strong>Competitive Advantage:</strong> Low-cost, high-quality carbon credits</li>
    </ul>
    
    <h3>2. Strategic Geographic Position</h3>
    <ul>
      <li><strong>ASEAN Hub:</strong> Central location in fastest-growing economic region</li>
      <li><strong>Proximity to Demand:</strong> Near Singapore, Japan, South Korea carbon markets</li>
      <li><strong>Maritime Access:</strong> Facilitates project development and trade</li>
      <li><strong>Time Zone:</strong> Overlaps with major Asian financial centers</li>
    </ul>
    
    <h3>3. Strong Policy Framework</h3>
    <ul>
      <li><strong>Presidential Commitment:</strong> Net zero by 2060, 29% NDC target</li>
      <li><strong>Comprehensive Regulation:</strong> Presidential Regulation 112/2022</li>
      <li><strong>Institutional Capacity:</strong> Dedicated Deputy for Carbon Governance</li>
      <li><strong>International Alignment:</strong> Paris Agreement Article 6 implementation</li>
    </ul>
    
    <h3>4. Established Infrastructure</h3>
    <ul>
      <li><strong>National Registry:</strong> SRN-PPI operational and internationally connected</li>
      <li><strong>Carbon Exchange:</strong> IDX Carbon Exchange functional</li>
      <li><strong>MRV Systems:</strong> Satellite monitoring, CEMS, digital platforms</li>
      <li><strong>Financial Sector:</strong> Green bonds, sustainable finance taxonomy</li>
    </ul>
    
    <h3>5. International Partnerships</h3>
    <ul>
      <li><strong>Bilateral Agreements:</strong> Japan JCM operational, others in development</li>
      <li><strong>Multilateral Support:</strong> World Bank, GCF, PMI funding</li>
      <li><strong>Technical Assistance:</strong> UNDP, bilateral partners</li>
      <li><strong>Private Sector Interest:</strong> Major corporations seeking Indonesian credits</li>
    </ul>
    
    <h2>Critical Success Factors</h2>
    
    <h3>1. Regulatory Certainty</h3>
    <p><strong>Importance:</strong> Investors need stable, predictable policy environment</p>
    <p><strong>Current Status:</strong> Good foundation, amendments in progress</p>
    <p><strong>Actions Needed:</strong></p>
    <ul>
      <li>Finalize Presidential Regulation amendments by Q2 2025</li>
      <li>Issue implementing regulations within 6 months</li>
      <li>Commit to 5-year policy stability period</li>
      <li>Establish clear long-term carbon price trajectory</li>
    </ul>
    
    <h3>2. MRV Quality and Transparency</h3>
    <p><strong>Importance:</strong> Credibility of Indonesian credits depends on robust MRV</p>
    <p><strong>Current Status:</strong> Systems operational, continuous improvement needed</p>
    <p><strong>Actions Needed:</strong></p>
    <ul>
      <li>Deploy CEMS at all major facilities by 2026</li>
      <li>Integrate satellite monitoring for all forestry projects</li>
      <li>Achieve 95%+ data quality score in UNFCCC reviews</li>
      <li>Publish real-time data on public dashboard</li>
    </ul>
    
    <h3>3. International Recognition</h3>
    <p><strong>Importance:</strong> Indonesian credits must be accepted globally</p>
    <p><strong>Current Status:</strong> JCM recognized, broader recognition needed</p>
    <p><strong>Actions Needed:</strong></p>
    <ul>
      <li>Align with international standards (ISO 14064, GHG Protocol)</li>
      <li>Participate in Climate Warehouse for interoperability</li>
      <li>Secure bilateral agreements with 5+ countries by 2026</li>
      <li>Engage with voluntary market standards (Verra, Gold Standard)</li>
    </ul>
    
    <h3>4. Stakeholder Capacity</h3>
    <p><strong>Importance:</strong> Market success requires capable participants</p>
    <p><strong>Current Status:</strong> Growing capacity, significant gaps remain</p>
    <p><strong>Actions Needed:</strong></p>
    <ul>
      <li>Train 2000+ carbon market professionals by 2026</li>
      <li>Establish university programs in carbon markets</li>
      <li>Create certification programs for MRV specialists</li>
      <li>Provide technical assistance to project developers</li>
    </ul>
    
    <h3>5. Market Liquidity</h3>
    <p><strong>Importance:</strong> Active trading requires sufficient buyers and sellers</p>
    <p><strong>Current Status:</strong> Limited liquidity, growing gradually</p>
    <p><strong>Actions Needed:</strong></p>
    <ul>
      <li>Expand mandatory coverage to 200+ entities by 2025</li>
      <li>Encourage voluntary participation through incentives</li>
      <li>Facilitate market-making and intermediation</li>
      <li>Link with regional markets for larger pool</li>
    </ul>
    
    <h2>Risk Analysis</h2>
    
    <h3>Risk 1: Policy Reversal</h3>
    <p><strong>Probability:</strong> Low</p>
    <p><strong>Impact:</strong> High</p>
    <p><strong>Mitigation:</strong></p>
    <ul>
      <li>Embed carbon pricing in multiple regulations</li>
      <li>Build broad stakeholder coalition</li>
      <li>Demonstrate economic benefits</li>
      <li>Secure international commitments</li>
    </ul>
    
    <h3>Risk 2: Price Collapse</h3>
    <p><strong>Probability:</strong> Medium</p>
    <p><strong>Impact:</strong> High</p>
    <p><strong>Mitigation:</strong></p>
    <ul>
      <li>Implement price floor mechanism</li>
      <li>Market stabilization reserve</li>
      <li>Diversify demand sources (domestic + international)</li>
      <li>Gradual supply increase to match demand growth</li>
    </ul>
    
    <h3>Risk 3: MRV Failures</h3>
    <p><strong>Probability:</strong> Medium</p>
    <p><strong>Impact:</strong> High</p>
    <p><strong>Mitigation:</strong></p>
    <ul>
      <li>Invest in robust monitoring technology</li>
      <li>Multiple verification layers</li>
      <li>Severe penalties for false reporting</li>
      <li>International technical assistance</li>
    </ul>
    
    <h3>Risk 4: International Competition</h3>
    <p><strong>Probability:</strong> High</p>
    <p><strong>Impact:</strong> Medium</p>
    <p><strong>Mitigation:</strong></p>
    <ul>
      <li>Emphasize quality and co-benefits</li>
      <li>Competitive pricing</li>
      <li>Strong relationships with buyers</li>
      <li>Unique value proposition (biodiversity, blue carbon)</li>
    </ul>
    
    <h3>Risk 5: Capacity Constraints</h3>
    <p><strong>Probability:</strong> High</p>
    <p><strong>Impact:</strong> Medium</p>
    <p><strong>Mitigation:</strong></p>
    <ul>
      <li>Intensive training programs</li>
      <li>International partnerships for knowledge transfer</li>
      <li>Gradual scaling to allow learning</li>
      <li>Incentives for capacity development</li>
    </ul>
    
    <h2>Strategic Recommendations</h2>
    
    <h3>Short-Term (2025-2026)</h3>
    
    <h4>1. Finalize Regulatory Framework</h4>
    <ul>
      <li>Complete Presidential Regulation amendments by Q2 2025</li>
      <li>Issue implementing regulations by Q4 2025</li>
      <li>Provide clear guidance to market participants</li>
      <li>Establish regulatory stability commitment</li>
    </ul>
    
    <h4>2. Scale Up Bilateral Partnerships</h4>
    <ul>
      <li>Finalize agreements with Singapore, South Korea by Q2 2025</li>
      <li>Initiate negotiations with 3+ additional countries</li>
      <li>Target 5 million tCO2e ITMO transfers in 2025</li>
      <li>Showcase successful JCM projects to attract partners</li>
    </ul>
    
    <h4>3. Strengthen MRV Infrastructure</h4>
    <ul>
      <li>Deploy CEMS at 100+ facilities by end 2025</li>
      <li>Upgrade SRN-PPI registry with blockchain</li>
      <li>Integrate with Climate Warehouse</li>
      <li>Achieve 90%+ data quality score</li>
    </ul>
    
    <h4>4. Build Market Liquidity</h4>
    <ul>
      <li>Expand mandatory ETS to 200+ entities</li>
      <li>Launch market-making program</li>
      <li>Facilitate intermediation and brokerage</li>
      <li>Target $100 million annual trading volume</li>
    </ul>
    
    <h4>5. Intensive Capacity Building</h4>
    <ul>
      <li>Train 1000+ professionals in 2025</li>
      <li>Launch university certificate programs</li>
      <li>Establish carbon market help desk</li>
      <li>Conduct 50+ stakeholder workshops</li>
    </ul>
    
    <h3>Medium-Term (2027-2030)</h3>
    
    <h4>1. Regional Market Integration</h4>
    <ul>
      <li>Explore linkage with Thailand, Vietnam carbon markets</li>
      <li>Harmonize standards across ASEAN</li>
      <li>Establish Indonesia as regional hub</li>
      <li>Target 20% of trading volume from regional linkage</li>
    </ul>
    
    <h4>2. Expand Sectoral Coverage</h4>
    <ul>
      <li>Add transportation sector (2027)</li>
      <li>Include commercial buildings (2028)</li>
      <li>Expand to medium-sized facilities (2029)</li>
      <li>Achieve 75% emissions coverage by 2030</li>
    </ul>
    
    <h4>3. Develop Premium Products</h4>
    <ul>
      <li>Blue carbon credits (mangroves, seagrass)</li>
      <li>Biodiversity co-benefit credits</li>
      <li>Community-based forestry credits</li>
      <li>Premium pricing for high-quality credits</li>
    </ul>
    
    <h4>4. Scale International Transfers</h4>
    <ul>
      <li>Increase ITMO transfers to 15 million tCO2e/year</li>
      <li>Diversify buyer base to 10+ countries</li>
      <li>Develop long-term supply agreements</li>
      <li>Target $200 million annual export value</li>
    </ul>
    
    <h4>5. Achieve Market Maturity</h4>
    <ul>
      <li>$500 million annual trading volume</li>
      <li>50 million tCO2e annual transactions</li>
      <li>Stable price discovery</li>
      <li>Recognized as high-quality credit source</li>
    </ul>
    
    <h3>Long-Term (2031-2035)</h3>
    
    <h4>1. Global Market Leadership</h4>
    <ul>
      <li>Position as top 5 global carbon credit supplier</li>
      <li>Share best practices and lessons learned</li>
      <li>Support other developing countries</li>
      <li>Influence international standards and rules</li>
    </ul>
    
    <h4>2. Full NDC Achievement</h4>
    <ul>
      <li>Carbon pricing delivering 150 million tCO2e reductions</li>
      <li>35% contribution to NDC target</li>
      <li>On track for net zero by 2060</li>
      <li>Model for developing country climate action</li>
    </ul>
    
    <h4>3. Economic Transformation</h4>
    <ul>
      <li>$1 billion annual carbon market value</li>
      <li>$10 billion green investment catalyzed</li>
      <li>200,000 green jobs created</li>
      <li>Carbon pricing integrated into economic planning</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>Indonesia has a unique opportunity to become a major player in global carbon markets. With massive supply potential, strategic positioning, strong policy framework, and growing international partnerships, Indonesia can capture significant value while contributing to global climate action. Success requires continued commitment to regulatory certainty, MRV quality, capacity building, and international cooperation. By following the strategic recommendations outlined in this analysis, Indonesia can realize a $2.8-7.5 billion carbon market opportunity over the next decade while achieving its climate goals and supporting sustainable development.</p>
  </div>',
  'policy_document',
  'published',
  22000,
  NOW(),
  NOW()
);

-- ============================================
-- INITIATIVE 2: HERITAGE ATLAS (4 documents)
-- ============================================

INSERT INTO initiatives (id, title, description, category, status, progress, budget, start_date, end_date, created_at, updated_at)
VALUES (
  'heritage-atlas',
  'Heritage Atlas (Royal Pop Indonesia)',
  'AI-powered cultural innovation initiative reviving 50+ mythical characters from Indonesian folklore through neural heritage technology.',
  'cultural',
  'active',
  45,
  850000,
  '2024-03-01',
  '2026-06-30',
  NOW(),
  NOW()
);

-- Document 1: Project Vision
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'heritage-atlas',
  'Heritage Atlas: Project Vision',
  'Vision statement for the Heritage Atlas initiative.',
  'vision',
  '["vision", "heritage", "AI", "folklore"]'::jsonb,
  '<div class="document-content">
    <h1>Heritage Atlas: Project Vision</h1>
    <p>To digitally preserve and creatively re-imagine Indonesian cultural heritage, making ancient myths accessible and engaging for the modern world through cutting-edge AI and immersive storytelling.</p>
    <h2>Core Objectives</h2>
    <ul>
      <li>Revive 50+ mythical characters from Indonesian folklore using Neural Heritage Technology.</li>
      <li>Develop an interactive digital platform (Heritage Atlas) for exploration and engagement.</li>
      <li>Foster cultural pride and intergenerational knowledge transfer.</li>
      <li>Create new artistic and economic opportunities in the cultural technology sector.</li>
    </ul>
  </div>',
  'vision_statement',
  'published',
  1500,
  NOW(),
  NOW()
);

-- Document 2: Technology Stack
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'heritage-atlas',
  'Heritage Atlas: Technology Stack',
  'Technical overview of the technologies used in the Heritage Atlas project.',
  'technical',
  '["technology", "AI", "neural-heritage", "platform", "development"]'::jsonb,
  '<div class="document-content">
    <h1>Heritage Atlas: Technology Stack</h1>
    <h2>Platform Architecture</h2>
    <p>A scalable cloud-based platform leveraging microservices architecture.</p>
    <h2>Key Technologies</h2>
    <ul>
      <li><strong>AI/ML:</strong> Generative Adversarial Networks (GANs), Natural Language Processing (NLP), Computer Vision</li>
      <li><strong>Neural Heritage Technology:</strong> Custom-built models for character reconstruction and animation</li>
      <li><strong>Frontend:</strong> React, Three.js (for 3D rendering)</li>
      <li><strong>Backend:</strong> Python (Django/Flask), Node.js</li>
      <li><strong>Database:</strong> PostgreSQL, MongoDB</li>
      <li><strong>Cloud Infrastructure:</strong> AWS / Google Cloud</li>
      <li><strong>Content Management:</strong> Custom CMS for folklore data</li>
    </ul>
    <h2>Integration</h2>
    <p>Seamless integration of AI-generated assets with interactive user interfaces.</p>
  </div>',
  'technical_document',
  'published',
  4000,
  NOW(),
  NOW()
);

-- Document 3: Character Archetypes
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'heritage-atlas',
  'Heritage Atlas: Character Archetypes',
  'Exploration of mythical character archetypes from Indonesian folklore.',
  'cultural-analysis',
  '["folklore", "mythology", "characters", "archetypes", "Indonesian-culture"]'::jsonb,
  '<div class="document-content">
    <h1>Heritage Atlas: Character Archetypes</h1>
    <p>This document explores key archetypes of mythical characters found in Indonesian folklore, which will serve as foundational elements for the Heritage Atlas initiative.</p>
    <h2>Key Archetypes</h2>
    <ul>
      <li><strong>Guardians of Nature:</strong> Spirits protecting forests, rivers, and mountains (e.g., <em>Peri Hutan</em>).</li>
      <li><strong>Tricksters and Rogues:</strong> Characters known for their wit and mischief (e.g., <em>Si Kabayan</em>).</li>
      <li><strong>Divine Beings and Ancestors:</strong> Figures of power and wisdom, often linked to creation myths (e.g., <em>Dewi Sri</em>).</li>
      <li><strong>Mythical Beasts and Creatures:</strong> Legendary animals or hybrid beings (e.g., <em>Garuda</em>, <em>Naga</em>).</li>
      <li><strong>Human Heroes and Heroines:</strong> Figures embodying courage, sacrifice, and cultural values (e.g., <em>Lutung Kasarung</em>).</li>
    </ul>
    <h2>Revival Strategy</h2>
    <p>Each archetype will be studied for its cultural significance, visual representations, and narrative potential to inform AI-driven generation.</p>
  </div>',
  'policy_document',
  'published',
  3500,
  NOW(),
  NOW()
);

-- Document 4: Impact and Outreach
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'heritage-atlas',
  'Heritage Atlas: Impact and Outreach Strategy',
  'Strategy for maximizing the impact and reach of the Heritage Atlas initiative.',
  'strategy',
  '["impact", "outreach", "engagement", "education", "cultural-tourism"]'::jsonb,
  '<div class="document-content">
    <h1>Heritage Atlas: Impact and Outreach Strategy</h1>
    <h2>Maximizing Cultural Impact</h2>
    <p>The Heritage Atlas aims to reconnect Indonesians and the global community with their rich cultural heritage.</p>
    <h2>Outreach Channels</h2>
    <ul>
      <li><strong>Digital Platform:</strong> Interactive website and mobile app</li>
      <li><strong>Social Media Campaigns:</strong> Engaging content on Instagram, TikTok, YouTube</li>
      <li><strong>Educational Partnerships:</strong> Collaborations with schools and universities</li>
      <li><strong>Cultural Events:</strong> Participation in festivals and exhibitions</li>
      <li><strong>Virtual/Augmented Reality Experiences:</strong> Immersive storytelling</li>
      <li><strong>Gamification:</strong> Integrating gameplay elements to drive user engagement</li>
    </ul>
    <h2>Target Audiences</h2>
    <ul>
      <li>Indonesian youth and students</li>
      <li>Cultural enthusiasts and historians</li>
      <li>Academics and researchers</li>
      <li>Tourists (domestic and international)</li>
    </ul>
    <h2>Metrics for Success</h2>
    <ul>
      <li>User engagement on the platform</li>
      <li>Number of characters revived and visualized</li>
      <li>Media mentions and public awareness</li>
      <li>Partnerships established</li>
      <li>Contribution to cultural education and tourism</li>
    </ul>
  </div>',
  'policy_document',
  'published',
  3000,
  NOW(),
  NOW()
);

-- ============================================
-- INITIATIVE 3: OBJECTIVE TRACK APP (5 documents)
-- ============================================

INSERT INTO initiatives (id, title, description, category, status, progress, budget, start_date, end_date, created_at, updated_at)
VALUES (
  'objective-track-app',
  'Indonesian Objective Track App',
  'Gamified life tracking platform integrating Indonesian cultural values with modern productivity tools.',
  'personal-growth',
  'active',
  35,
  450000,
  '2024-06-01',
  '2025-12-31',
  NOW(),
  NOW()
);

-- Document 1: App Concept
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'objective-track-app',
  'Objective Track App: Concept Overview',
  'Concept and core features of the Indonesian Objective Track App.',
  'concept',
  '["app-concept", "productivity", "gamification", "Indonesian-values"]'::jsonb,
  '<div class="document-content">
    <h1>Objective Track App: Concept Overview</h1>
    <p>An innovative mobile application designed to empower users to achieve personal and professional goals by integrating modern productivity techniques with core Indonesian cultural values.</p>
    <h2>Core Features</h2>
    <ul>
      <li><strong>Goal Setting & Tracking:</strong> SMART goal framework adapted for cultural context.</li>
      <li><strong>Gamified Progress:</strong> Points, badges, and leaderboards inspired by traditional Indonesian games.</li>
      <li><strong>Habit Formation:</strong> Daily challenges and streak tracking.</li>
      <li><strong>Mindfulness & Reflection:</strong> Daily journaling and gratitude prompts rooted in Indonesian philosophy.</li>
      <li><strong>Community Support:</strong> Peer groups and forums for motivation and shared learning.</li>
      <li><strong>Cultural Integration:</strong> Modules on values like <em>Gotong Royong</em> (mutual cooperation) and <em>Musyawarah</em> (deliberation).</li>
    </ul>
    <h2>Target Audience</h2>
    <p>Young adults, students, and professionals in Indonesia seeking a holistic approach to self-improvement.</p>
  </div>',
  'concept_document',
  'published',
  2500,
  NOW(),
  NOW()
);

-- Document 2: Feature Deep Dive - Gamification
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'objective-track-app',
  'Objective Track App: Gamification Mechanics',
  'Detailed explanation of the gamification elements within the app.',
  'feature-deepdive',
  '["gamification", "rewards", "badges", "leaderboards", "cultural-games"]'::jsonb,
  '<div class="document-content">
    <h1>Objective Track App: Gamification Mechanics</h1>
    <p>This document details the gamification strategies employed in the Objective Track App to enhance user engagement and motivation.</p>
    <h2>Gamification Elements</h2>
    <ul>
      <li><strong>Points System:</strong> Earn points for completing tasks, achieving goals, and contributing to the community.</li>
      <li><strong>Badges:</strong> Awarded for milestones, streaks, and demonstrating specific values (e.g., "Gotong Royong" badge for helping others).</li>
      <li><strong>Levels:</strong> Progress through levels based on accumulated points and achievements.</li>
      <li><strong>Leaderboards:</strong> Weekly and monthly leaderboards showcasing top performers.</li>
      <li><strong>Virtual Currency:</strong> Earned currency can be used to unlock new app features or customize profiles.</li>
      <li><strong>Cultural Game Inspirations:</strong> Mechanics inspired by games like <em>Congklak</em> (for strategic planning) and <em>Petak Umpet</em> (for habit consistency).</li>
    </ul>
    <h2>Cultural Adaptation</h2>
    <p>All gamification elements are designed to reflect positive Indonesian cultural values, fostering collaboration and healthy competition.</p>
  </div>',
  'feature_document',
  'published',
  3800,
  NOW(),
  NOW()
);

-- Document 3: Feature Deep Dive - Cultural Values Integration
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'objective-track-app',
  'Objective Track App: Cultural Values Integration',
  'How Indonesian cultural values are integrated into the app''s functionality.',
  'feature-deepdive',
  '["cultural-values", "Indonesian-philosophy", "mindfulness", "community", "holistic-growth"]'::jsonb,
  '<div class="document-content">
    <h1>Objective Track App: Cultural Values Integration</h1>
    <p>This document outlines the seamless integration of Indonesian cultural values into the app''s core functionalities, promoting a holistic approach to personal growth.</p>
    <h2>Key Values and Integration Methods</h2>
    <ul>
      <li><strong>Gotong Royong (Mutual Cooperation):</strong>
        <ul>
          <li>Community forums for support and task collaboration.</li>
          <li>Group challenges and team-based goal setting.</li>
          <li>"Buddy system" feature for accountability partners.</li>
        </ul>
      </li>
      <li><strong>Musyawarah (Deliberation/Consultation):</strong>
        <ul>
          <li>Guided decision-making processes for goal setting.</li>
          <li>Structured discussion prompts in community forums.</li>
          <li>Features encouraging constructive feedback.</li>
        </ul>
      </li>
      <li><strong>Sopan Santun (Politeness/Respect):</strong>
        <ul>
          <li>Community guidelines promoting respectful interaction.</li>
          <li>Positive reinforcement for supportive behavior.</li>
        </ul>
      </li>
      <li><strong>Kerja Keras (Hard Work) & Ikhlas (Sincerity):</strong>
        <ul>
          <li>Emphasis on consistent effort and genuine progress tracking.</li>
          <li>Journaling prompts to reflect on effort and intention.</li>
        </ul>
      </li>
      <li><strong>Bhinneka Tunggal Ika (Unity in Diversity):</strong>
        <ul>
          <li>Celebrating diverse user goals and backgrounds.</li>
          <li>Content modules highlighting Indonesian cultural diversity.</li>
        </ul>
      </li>
    </ul>
    <h2>Holistic Growth Framework</h2>
    <p>The app encourages balance across personal, professional, and social well-being, guided by these values.</p>
  </div>',
  'feature_document',
  'published',
  4200,
  NOW(),
  NOW()
);

-- Document 4: Technical Specifications
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'objective-track-app',
  'Objective Track App: Technical Specifications',
  'Technical details and requirements for the Objective Track App.',
  'technical',
  '["technical-specs", "mobile-app", "development", "backend", "frontend"]'::jsonb,
  '<div class="document-content">
    <h1>Objective Track App: Technical Specifications</h1>
    <h2>Platform Compatibility</h2>
    <ul>
      <li>iOS (version 14.0 and above)</li>
      <li>Android (version 8.0 Oreo and above)</li>
    </ul>
    <h2>Frontend Development</h2>
    <ul>
      <li><strong>Framework:</strong> React Native</li>
      <li><strong>UI/UX:</strong> Clean, intuitive design with culturally relevant elements</li>
      <li><strong>Key Libraries:</strong> React Navigation, Redux, Chart.js</li>
    </ul>
    <h2>Backend Development</h2>
    <ul>
      <li><strong>Language:</strong> Python (Django/FastAPI)</li>
      <li><strong>Database:</strong> PostgreSQL for structured data, Redis for caching</li>
      <li><strong>APIs:</strong> RESTful APIs for communication between frontend and backend</li>
      <li><strong>Authentication:</strong> JWT (JSON Web Tokens)</li>
    </ul>
    <h2>Cloud Infrastructure</h2>
    <ul>
      <li><strong>Provider:</strong> AWS (EC2, RDS, S3)</li>
      <li><strong>Deployment:</strong> Docker and Kubernetes for containerization and orchestration</li>
    </ul>
    <h2>Security</h2>
    <ul>
      <li>End-to-end encryption for user data</li>
      <li>Regular security audits and vulnerability assessments</li>
    </ul>
  </div>',
  'technical_document',
  'published',
  3100,
  NOW(),
  NOW()
);

-- Document 5: Monetization Strategy
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'objective-track-app',
  'Objective Track App: Monetization Strategy',
  'Strategy for monetizing the Objective Track App.',
  'monetization',
  '["monetization", "revenue", "freemium", "subscriptions", "partnerships"]'::jsonb,
  '<div class="document-content">
    <h1>Objective Track App: Monetization Strategy</h1>
    <p>A balanced monetization strategy to ensure sustainability while maintaining user accessibility.</p>
    <h2>Freemium Model</h2>
    <ul>
      <li><strong>Free Tier:</strong> Basic goal setting, habit tracking, limited community access.</li>
      <li><strong>Premium Tier (Subscription):</strong></li>
      <ul>
        <li>Unlock advanced analytics and reports.</li>
        <li>Access to exclusive cultural modules and challenges.</li>
        <li>Unlimited community features and personalized coaching.</li>
        <li>Ad-free experience.</li>
      </ul>
    </ul>
    <h2>In-App Purchases</h2>
    <ul>
      <li>Customization options (themes, avatars).</li>
      <li>One-time purchase of specialized goal-setting templates.</li>
    </ul>
    <h2>B2B Partnerships</h2>
    <ul>
      <li>Corporate wellness programs offering premium access to employees.</li>
      <li>Educational institutions for student engagement.</li>
    </ul>
    <h2>Pricing Strategy</h2>
    <ul>
      <li>Competitive pricing for subscription tiers, offering significant value.</li>
      <li>Regional pricing adjustments for the Indonesian market.</li>
    </ul>
  </div>',
  'monetization_document',
  'published',
  2800,
  NOW(),
  NOW()
);

-- ============================================
-- INITIATIVE 4: 1NCUBATOR PLATFORM (4 documents)
-- ============================================

INSERT INTO initiatives (id, title, description, category, status, progress, budget, start_date, end_date, created_at, updated_at)
VALUES (
  '1ncubator-platform',
  '1ncubator Platform',
  'Green Industrial Innovation Platform accelerating sustainable technology ventures in Indonesia.',
  'technology',
  'active',
  55,
  1200000,
  '2023-09-01',
  '2026-12-31',
  NOW(),
  NOW()
);

-- Document 1: Platform Overview
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  '1ncubator-platform',
  '1ncubator Platform: Overview',
  'Comprehensive overview of the 1ncubator Platform and its mission.',
  'overview',
  '["platform", "innovation", "sustainability", "startups", "green-technology"]'::jsonb,
  '<div class="document-content">
    <h1>1ncubator Platform: Overview</h1>
    <p>The 1ncubator Platform is a catalyst for green industrial innovation in Indonesia, dedicated to accelerating the growth of sustainable technology ventures.</p>
    <h2>Mission</h2>
    <p>To foster a vibrant ecosystem for green startups, connecting them with resources, expertise, and investment to drive the transition to a sustainable industrial future.</p>
    <h2>Key Offerings</h2>
    <ul>
      <li><strong>Incubation Programs:</strong> Tailored support for early-stage green tech startups.</li>
      <li><strong>Acceleration Services:</strong> Scaling support for growth-stage ventures.</li>
      <li><strong>Mentorship Network:</strong> Access to industry experts and successful entrepreneurs.</li>
      <li><strong>Funding Access:</strong> Facilitating connections with impact investors and venture capital.</li>
      <li><strong>Technology Transfer:</strong> Bridging the gap between research and commercialization.</li>
      <li><strong>Policy Advocacy:</strong> Engaging with government to create a supportive regulatory environment.</li>
    </ul>
    <h2>Focus Sectors</h2>
    <ul>
      <li>Renewable Energy</li>
      <li>Circular Economy Solutions</li>
      <li>Sustainable Agriculture & Food Tech</li>
      <li>Green Manufacturing</li>
      <li>Climate Tech</li>
    </ul>
  </div>',
  'overview_document',
  'published',
  5500,
  NOW(),
  NOW()
);

-- Document 2: Incubation Program Details
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  '1ncubator-platform',
  '1ncubator Platform: Incubation Program',
  'Detailed description of the 1ncubator Platform''s incubation program.',
  'program-details',
  '["incubation", "program", "startups", "support", "mentorship"]'::jsonb,
  '<div class="document-content">
    <h1>1ncubator Platform: Incubation Program</h1>
    <p>Our flagship incubation program provides comprehensive support to early-stage green technology startups over a 12-month period.</p>
    <h2>Program Structure</h2>
    <ul>
      <li><strong>Phase 1: Foundation (Months 1-3)</strong>
        <ul>
          <li>Business Model Validation</li>
          <li>Market Research & Customer Discovery</li>
          <li>Legal & IP Setup</li>
          <li>Mentorship Matching</li>
        </ul>
      </li>
      <li><strong>Phase 2: Development (Months 4-8)</strong>
        <ul>
          <li>Product/Technology Development</li>
          <li>Prototyping & MVP Testing</li>
          <li>Team Building & Operations</li>
          <li>Early Customer Acquisition</li>
        </ul>
      </li>
      <li><strong>Phase 3: Growth & Funding (Months 9-12)</strong>
        <ul>
          <li>Scaling Strategies</li>
          <li>Investment Readiness Training</li>
          <li>Pitch Preparation & Investor Networking</li>
          <li>Partnership Development</li>
        </ul>
      </li>
    </ul>
    <h2>Key Benefits</h2>
    <ul>
      <li>Seed funding opportunities</li>
      <li>Access to co-working spaces and lab facilities</li>
      <li>Intensive mentorship from industry leaders</li>
      <li>Workshops and training sessions</li>
      <li>Networking events and demo days</li>
    </ul>
    <h2>Eligibility Criteria</h2>
    <ul>
      <li>Early-stage startup with a focus on green technology</li>
      <li>Innovative and scalable business model</li>
      <li>Strong founding team</li>
      <li>Commitment to sustainability principles</li>
    </ul>
  </div>',
  'program_document',
  'published',
  6500,
  NOW(),
  NOW()
);

-- Document 3: Mentorship Network
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  '1ncubator-platform',
  '1ncubator Platform: Mentorship Network',
  'Details of the 1ncubator Platform''s mentorship network.',
  'mentorship',
  '["mentorship", "experts", "advisors", "network", "support"]'::jsonb,
  '<div class="document-content">
    <h1>1ncubator Platform: Mentorship Network</h1>
    <p>Our robust mentorship network connects startups with experienced professionals, seasoned entrepreneurs, and industry experts.</p>
    <h2>Network Composition</h2>
    <ul>
      <li><strong>Industry Specialists:</strong> Experts in renewable energy, circular economy, materials science, etc.</li>
      <li><strong>Serial Entrepreneurs:</strong> Founders with proven track records in scaling businesses.</li>
      <li><strong>Venture Capitalists & Investors:</strong> Individuals focused on impact and sustainable investments.</li>
      <li><strong>Academics & Researchers:</strong> Experts in relevant scientific and technological fields.</li>
      <li><strong>Policy & Regulatory Advisors:</strong> Specialists in navigating environmental and business regulations.</li>
    </ul>
    <h2>Mentorship Approach</h2>
    <ul>
      <li><strong>Personalized Matching:</strong> Startups are matched with mentors based on their specific needs and challenges.</li>
      <li><strong>Structured Sessions:</strong> Regular one-on-one meetings and group mentoring workshops.</li>
      <li><strong>Advisory Board:</strong> Select startups may be invited to present to a dedicated advisory board.</li>
      <li><strong>Peer Mentoring:</strong> Facilitating knowledge sharing among cohort members.</li>
    </ul>
    <h2>Impact of Mentorship</h2>
    <p>Mentorship plays a crucial role in refining business strategies, overcoming technical hurdles, and accelerating market entry.</p>
  </div>',
  'mentorship_document',
  'published',
  4000,
  NOW(),
  NOW()
);

-- Document 4: Investment Opportunities
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  '1ncubator-platform',
  '1ncubator Platform: Investment Opportunities',
  'Information on investment opportunities within the 1ncubator Platform ecosystem.',
  'investment',
  '["investment", "funding", "venture-capital", "impact-investing", "green-startups"]'::jsonb,
  '<div class="document-content">
    <h1>1ncubator Platform: Investment Opportunities</h1>
    <p>The 1ncubator Platform serves as a gateway for investors seeking high-potential green technology ventures in Indonesia.</p>
    <h2>Investor Value Proposition</h2>
    <ul>
      <li><strong>Curated Deal Flow:</strong> Access to rigorously vetted startups with strong sustainability credentials.</li>
      <li><strong>Impact Measurement:</strong> Focus on ventures with measurable environmental and social impact.</li>
      <li><strong>Diverse Portfolio:</strong> Opportunities across multiple green sectors.</li>
      <li><strong>Co-Investment Opportunities:</strong> Partner with the platform and other impact investors.</li>
    </ul>
    <h2>Investment Stages</h2>
    <ul>
      <li><strong>Pre-Seed & Seed:</strong> Primarily through the incubation program.</li>
      <li><strong>Series A & Beyond:</strong> Through the acceleration program and investor network.</li>
    </ul>
    <h2>Investor Network</h2>
    <ul>
      <li>Angel investors focused on sustainability.</li>
      <li>Venture capital firms with impact mandates.</li>
      <li>Corporate venture arms exploring green tech.</li>
      <li>Development finance institutions.</li>
    </ul>
    <h2>Investment Process</h2>
    <p>Interested investors can connect with the platform team to learn more about current opportunities and co-investment strategies.</p>
  </div>',
  'investment_document',
  'published',
  3800,
  NOW(),
  NOW()
);

-- ============================================
-- VERIFICATION QUERY
-- ============================================

SELECT 
  i.title as initiative,
  i.category,
  i.status,
  i.progress,
  COUNT(d.id) as document_count
FROM initiatives i
LEFT JOIN documents d ON i.id = d.initiative_id
WHERE i.id IN (
  'the-nusantara-code',
  'heritage-atlas',
  'objective-track-app',
  '1ncubator-platform'
)
GROUP BY i.id, i.title, i.category, i.status, i.progress
ORDER BY i.title;
