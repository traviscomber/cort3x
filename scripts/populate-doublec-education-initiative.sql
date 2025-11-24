-- DoubleC.Education Initiative
-- First AI educational platform for trading with Machine Learning

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
  'DoubleC.Education',
  'The first AI-powered educational platform for trading, leveraging advanced Machine Learning algorithms to provide personalized learning experiences, real-time market analysis, and intelligent trading strategies for students and professionals worldwide.',
  'education',
  'active',
  75,
  1200000,
  '2024-06-01',
  '2026-06-30',
  'EDU-001',
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

-- Add objectives for DoubleC.Education
UPDATE initiatives
SET objectives = '[
  {
    "title": "AI-Powered Learning",
    "description": "Develop adaptive learning algorithms that personalize trading education based on individual learning patterns and market conditions"
  },
  {
    "title": "Real-Time Market Analysis",
    "description": "Integrate ML models for live market data analysis, pattern recognition, and predictive analytics"
  },
  {
    "title": "Intelligent Trading Strategies",
    "description": "Create AI-driven strategy recommendations based on risk tolerance, market conditions, and historical performance"
  },
  {
    "title": "Global Platform Access",
    "description": "Scale platform to serve 100,000+ students worldwide with multilingual support and localized content"
  }
]'::jsonb
WHERE id = 'doublec-education';

-- Add milestones for DoubleC.Education
UPDATE initiatives
SET milestones = '[
  {
    "title": "Platform Beta Launch",
    "date": "2024-09-01",
    "status": "completed",
    "description": "Successful beta launch with 1,000+ early adopters"
  },
  {
    "title": "ML Algorithm Integration",
    "date": "2024-12-01",
    "status": "completed",
    "description": "Full integration of machine learning models for personalized learning paths"
  },
  {
    "title": "Trading Simulator Launch",
    "date": "2025-03-01",
    "status": "in-progress",
    "description": "AI-powered trading simulator with real-time market data"
  },
  {
    "title": "International Expansion",
    "date": "2025-09-01",
    "status": "planned",
    "description": "Launch in 10+ countries with localized content and regulatory compliance"
  },
  {
    "title": "Advanced Analytics Dashboard",
    "date": "2026-01-01",
    "status": "planned",
    "description": "Comprehensive analytics and performance tracking for students"
  }
]'::jsonb
WHERE id = 'doublec-education';

-- Add location data
UPDATE initiatives
SET location_data = '{
  "headquarters": {
    "city": "Global",
    "country": "International",
    "coordinates": {
      "lat": 0,
      "lng": 0
    }
  },
  "regions": [
    "North America",
    "Europe",
    "Asia Pacific",
    "Latin America"
  ]
}'::jsonb
WHERE id = 'doublec-education';

-- Add partners
UPDATE initiatives
SET partners = '[
  {
    "name": "Leading Trading Institutions",
    "type": "Educational Partner",
    "contribution": "Curriculum development, regulatory compliance, and market expertise"
  },
  {
    "name": "AI Research Labs",
    "type": "Technology Partner",
    "contribution": "Advanced machine learning model development, neural network optimization, and research collaboration"
  },
  {
    "name": "Financial Data Providers",
    "type": "Data Partner",
    "contribution": "Real-time market data feeds, historical analytics, and alternative data sources"
  },
  {
    "name": "Cloud Infrastructure Partners",
    "type": "Infrastructure Partner",
    "contribution": "Scalable computing resources, GPU acceleration for ML models, and global CDN distribution"
  }
]'::jsonb
WHERE id = 'doublec-education';

-- Add risks
UPDATE initiatives
SET risks = '[
  {
    "type": "Regulatory",
    "description": "Varying financial education regulations across different jurisdictions",
    "mitigation": "Legal compliance team and local regulatory partnerships",
    "severity": "Medium"
  },
  {
    "type": "Technical",
    "description": "ML model accuracy and reliability in volatile market conditions",
    "mitigation": "Continuous model training, validation, and human oversight",
    "severity": "Medium"
  },
  {
    "type": "Market",
    "description": "Competition from established trading education platforms",
    "mitigation": "Focus on AI differentiation and personalized learning experience",
    "severity": "High"
  }
]'::jsonb
WHERE id = 'doublec-education';
