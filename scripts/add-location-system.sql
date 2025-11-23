-- Add location/country field to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS country TEXT;
ALTER TABLE users ADD COLUMN IF NOT EXISTS location_data JSONB;

-- Add location field to initiatives table
ALTER TABLE initiatives ADD COLUMN IF NOT EXISTS country TEXT;
ALTER TABLE initiatives ADD COLUMN IF NOT EXISTS location_data JSONB;

-- Create countries/locations table with regulatory information
CREATE TABLE IF NOT EXISTS countries (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  flag_emoji TEXT,
  coordinates JSONB NOT NULL,
  timezone TEXT,
  currency TEXT,
  language TEXT,
  regulatory_info JSONB,
  compliance_requirements JSONB,
  legal_framework JSONB,
  business_requirements JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on countries table
ALTER TABLE countries ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Anyone can view countries" ON countries
  FOR SELECT USING (true);

-- Create policy for authenticated users to manage countries
CREATE POLICY "Authenticated users can manage countries" ON countries
  FOR ALL USING (auth.role() = 'authenticated');

-- Insert the three countries with comprehensive regulatory information
INSERT INTO countries (id, name, code, flag_emoji, coordinates, timezone, currency, language, regulatory_info, compliance_requirements, legal_framework, business_requirements)
VALUES 
(
  'chile',
  'Chile',
  'CL',
  '🇨🇱',
  '{"lat": -33.4489, "lng": -70.6693, "city": "Santiago"}',
  'America/Santiago',
  'CLP',
  'Spanish',
  '{
    "environmental": {
      "agency": "Ministry of Environment (MMA)",
      "key_regulations": ["Environmental Impact Assessment System (SEIA)", "Climate Change Framework Law", "Extended Producer Responsibility (REP) Law"],
      "carbon_market": "Voluntary carbon market active, mandatory reporting for large emitters",
      "renewable_energy": "20% renewable energy target by 2025, strong solar and wind potential"
    },
    "innovation": {
      "agency": "CORFO (Production Development Corporation)",
      "incentives": ["R&D tax credits up to 35%", "Startup Chile program", "Innovation vouchers"],
      "ip_protection": "Strong IP protection under INAPI (National Institute of Industrial Property)"
    },
    "data_protection": {
      "law": "Law 19,628 on Protection of Private Life",
      "authority": "Council for Transparency",
      "requirements": "Data localization not required, cross-border transfers allowed with consent"
    }
  }',
  '{
    "business_registration": ["RUT (Tax ID) registration", "Municipal license", "Environmental permits if applicable"],
    "reporting": ["Monthly VAT returns", "Annual income tax", "Environmental reporting for regulated activities"],
    "labor": ["Minimum wage compliance", "Social security contributions", "Occupational health and safety standards"],
    "environmental": ["Environmental Impact Declaration (DIA) or Study (EIA) for certain projects", "Waste management plan", "Emissions monitoring"]
  }',
  '{
    "business_structure": ["Sole proprietorship (Empresa Individual)", "Limited Liability Company (SpA)", "Corporation (SA)", "Branch of foreign company"],
    "contract_law": "Civil law system based on Chilean Civil Code",
    "dispute_resolution": "Courts and arbitration available, member of ICSID",
    "foreign_investment": "Open to foreign investment with few restrictions, protected under investment treaties"
  }',
  '{
    "time_to_register": "5-7 business days",
    "minimum_capital": "No minimum capital for SpA",
    "foreign_ownership": "100% foreign ownership allowed in most sectors",
    "key_documents": ["Articles of incorporation", "Shareholder agreements", "Tax registration", "Municipal permits"]
  }'
),
(
  'usa',
  'United States',
  'US',
  '🇺🇸',
  '{"lat": 38.9072, "lng": -77.0369, "city": "Washington DC"}',
  'America/New_York',
  'USD',
  'English',
  '{
    "environmental": {
      "agency": "Environmental Protection Agency (EPA)",
      "key_regulations": ["Clean Air Act", "Clean Water Act", "National Environmental Policy Act (NEPA)", "Endangered Species Act"],
      "carbon_market": "Regional markets (RGGI, California Cap-and-Trade), voluntary markets active",
      "renewable_energy": "State-level renewable portfolio standards, federal tax credits (ITC, PTC)"
    },
    "innovation": {
      "agency": "Small Business Administration (SBA), SBIR/STTR programs",
      "incentives": ["R&D tax credit", "Opportunity Zones", "State-level innovation grants", "Federal SBIR/STTR funding"],
      "ip_protection": "Strong IP protection under USPTO, comprehensive patent and trademark system"
    },
    "data_protection": {
      "law": "Sector-specific (HIPAA, GLBA, COPPA, state laws like CCPA/CPRA)",
      "authority": "FTC, state attorneys general",
      "requirements": "Varies by state and sector, California CCPA/CPRA most comprehensive"
    }
  }',
  '{
    "business_registration": ["EIN (Employer Identification Number)", "State business registration", "Local business licenses", "Industry-specific permits"],
    "reporting": ["Quarterly payroll taxes", "Annual federal and state tax returns", "Beneficial ownership reporting (FinCEN)", "Industry-specific reporting"],
    "labor": ["Federal minimum wage ($7.25/hr, higher in many states)", "OSHA compliance", "Workers compensation insurance", "Employment eligibility verification (I-9)"],
    "environmental": ["EPA permits for emissions, discharges", "State environmental permits", "Hazardous waste management", "NEPA review for federal actions"]
  }',
  '{
    "business_structure": ["LLC (Limited Liability Company)", "C-Corporation", "S-Corporation", "Partnership", "Sole Proprietorship"],
    "contract_law": "Common law system, Uniform Commercial Code (UCC) for commercial transactions",
    "dispute_resolution": "Federal and state courts, arbitration common in commercial contracts",
    "foreign_investment": "Generally open, CFIUS review for sensitive sectors (national security, critical infrastructure)"
  }',
  '{
    "time_to_register": "1-2 weeks (varies by state)",
    "minimum_capital": "No federal minimum, some states require nominal amounts",
    "foreign_ownership": "100% foreign ownership allowed in most sectors, restrictions in defense, aviation, broadcasting",
    "key_documents": ["Articles of organization/incorporation", "Operating agreement/bylaws", "EIN letter", "State tax registration"]
  }'
),
(
  'indonesia',
  'Indonesia',
  'ID',
  '🇮🇩',
  '{"lat": -6.2088, "lng": 106.8456, "city": "Jakarta"}',
  'Asia/Jakarta',
  'IDR',
  'Indonesian',
  '{
    "environmental": {
      "agency": "Ministry of Environment and Forestry (KLHK)",
      "key_regulations": ["Environmental Protection and Management Law (UU 32/2009)", "Forestry Law", "PROPER environmental rating program"],
      "carbon_market": "Developing carbon market, pilot carbon trading in energy sector",
      "renewable_energy": "23% renewable energy target by 2025, strong geothermal and solar potential"
    },
    "innovation": {
      "agency": "Ministry of Research and Technology/BRIN",
      "incentives": ["Tax holidays for pioneer industries", "Super deduction for R&D (up to 300%)", "Investment allowances"],
      "ip_protection": "IP protection under Directorate General of Intellectual Property (DGIP)"
    },
    "data_protection": {
      "law": "Personal Data Protection Law (UU PDP, effective 2024)",
      "authority": "Ministry of Communication and Informatics",
      "requirements": "Data localization required for public sector data, cross-border transfer restrictions"
    }
  }',
  '{
    "business_registration": ["NIB (Business Identification Number) via OSS system", "Tax registration (NPWP)", "Import license if applicable", "Sector-specific licenses"],
    "reporting": ["Monthly VAT and withholding tax", "Annual corporate income tax", "Quarterly financial reports for certain entities", "Manpower reports"],
    "labor": ["Provincial minimum wage compliance", "BPJS (social security) enrollment", "Manpower regulations (UU Cipta Kerja)", "Local hiring requirements"],
    "environmental": ["AMDAL (Environmental Impact Assessment) for large projects", "UKL-UPL for medium projects", "Waste management permits", "Emissions reporting"]
  }',
  '{
    "business_structure": ["PT (Limited Liability Company)", "PT PMA (Foreign Investment Company)", "Representative Office", "Branch Office"],
    "contract_law": "Civil law system based on Dutch colonial law, Indonesian Civil Code",
    "dispute_resolution": "Courts and BANI (Indonesian Arbitration Board), member of ICSID",
    "foreign_investment": "Negative Investment List restricts certain sectors, minimum capital requirements for foreign investors"
  }',
  '{
    "time_to_register": "2-4 weeks via OSS system",
    "minimum_capital": "IDR 10 billion (~$670,000 USD) for PT PMA in most sectors",
    "foreign_ownership": "Varies by sector (0-100%), check Negative Investment List",
    "key_documents": ["Deed of establishment", "NIB", "Tax registration", "Import license", "Sector permits"]
  }'
)
ON CONFLICT (id) DO NOTHING;
