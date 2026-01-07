-- DoubleC.Education Initiative - CHILE Market Focus
-- Updated to focus on Chilean market with university partnerships as R&D engine

-- Insert the DoubleC.Education initiative
INSERT INTO initiatives (
  id,
  title,
  description,
  category,
  status,
  progress,
  budget,
  start_date,
  end_date,
  project_code,
  created_at,
  updated_at
) VALUES (
  'doublec-education',
  'DoubleC.Education Chile',
  'AI-powered trading education platform focusing on Chile market, leveraging university partnerships as R&D engine. Provides personalized learning experiences through advanced Machine Learning, integrated with Chilean financial markets and regulatory frameworks.',
  'education',
  'active',
  75,
  1200000,
  '2024-06-01',
  '2026-06-30',
  'EDU-CHILE-001',
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
  project_code = EXCLUDED.project_code,
  updated_at = NOW();

-- Add objectives focused on Chile market and university partnerships
UPDATE initiatives
SET objectives = '[
  {
    "title": "University Partnership R&D Engine",
    "description": "Establish research collaborations with Universidad de Chile, Pontificia Universidad Católica, and Universidad de Concepción to develop cutting-edge AI/ML educational models grounded in academic research"
  },
  {
    "title": "Chilean Market Adaptation",
    "description": "Integrate Chilean financial markets (SVS-regulated instruments, CLP trading), localized content in Spanish, and compliance with SERNAGEOMIN and ChileCMF regulations"
  },
  {
    "title": "University Integration Program",
    "description": "Develop institutional licensing for Chilean universities to integrate DoubleC platform into finance, economics, and business administration curricula"
  },
  {
    "title": "Research Advancement",
    "description": "Publish peer-reviewed papers on AI-driven personalized finance education, attracting academic talent and enhancing platform credibility"
  }
]'::jsonb
WHERE id = 'doublec-education';

-- Update milestones for Chile market launch
UPDATE initiatives
SET milestones = '[
  {
    "title": "University Partnerships Established",
    "date": "2024-09-01",
    "status": "completed",
    "description": "Signed research agreements with top 3 Chilean universities"
  },
  {
    "title": "Spanish Localization Complete",
    "date": "2024-12-01",
    "status": "completed",
    "description": "Full platform localization and Chilean market data integration"
  },
  {
    "title": "Chile Market Launch",
    "date": "2025-03-01",
    "status": "in-progress",
    "description": "Official launch in Chile with 5,000+ initial users"
  },
  {
    "title": "University Curriculum Integration",
    "date": "2025-09-01",
    "status": "planned",
    "description": "Integration with 10+ university finance programs"
  },
  {
    "title": "Research Publication Series",
    "date": "2026-01-01",
    "status": "planned",
    "description": "Publish 5+ peer-reviewed papers on AI education effectiveness in Chilean market"
  }
]'::jsonb
WHERE id = 'doublec-education';

-- Update location data to focus on Chile
UPDATE initiatives
SET location_data = '{
  "headquarters": {
    "city": "Santiago",
    "country": "Chile",
    "coordinates": {
      "lat": -33.8688,
      "lng": -51.2093
    }
  },
  "regions": [
    "Región Metropolitana",
    "Biobío Region",
    "Valparaíso Region",
    "Araucanía Region"
  ],
  "key_cities": [
    "Santiago",
    "Concepción",
    "Valparaíso"
  ]
}'::jsonb
WHERE id = 'doublec-education';

-- Update partners to reflect Chilean university and market focus
UPDATE initiatives
SET partners = '[
  {
    "name": "Universidad de Chile",
    "type": "Research Partner",
    "contribution": "AI/ML research labs, faculty expertise, student recruitment, curriculum co-development"
  },
  {
    "name": "Pontificia Universidad Católica",
    "type": "Academic Partner",
    "contribution": "Business school integration, fintech innovation lab, institutional licensing"
  },
  {
    "name": "Universidad de Concepción",
    "type": "Research Partner",
    "contribution": "Economics and finance research, regional expansion support"
  },
  {
    "name": "SVS (Superintendencia de Valores y Seguros)",
    "type": "Regulatory Partner",
    "contribution": "Compliance framework alignment, market data access"
  },
  {
    "name": "Chilean Fintech Association",
    "type": "Industry Partner",
    "contribution": "Network access, regulatory advocacy, market partnerships"
  }
]'::jsonb
WHERE id = 'doublec-education';

-- Update risks to reflect Chile-specific market challenges
UPDATE initiatives
SET risks = '[
  {
    "type": "Regulatory",
    "description": "Evolving Chilean financial education regulations and ChileCMF compliance requirements",
    "mitigation": "Dedicated regulatory team, ongoing SVS/ChileCMF liaison, legal partnerships",
    "severity": "Medium"
  },
  {
    "type": "Market",
    "description": "Limited awareness of AI-powered trading education in Chile",
    "mitigation": "University partnerships for credibility, academic publishing strategy, B2B institutional sales",
    "severity": "Medium"
  },
  {
    "type": "Technical",
    "description": "Integration with Chilean market data feeds and regional infrastructure",
    "mitigation": "Partnerships with local data providers, cloud infrastructure in LATAM region",
    "severity": "Low"
  }
]'::jsonb
WHERE id = 'doublec-education';
