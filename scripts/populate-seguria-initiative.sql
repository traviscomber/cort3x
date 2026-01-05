-- SegurIA Initiative
-- AI-Powered Security Solutions Platform for Industrial, Agricultural, and Logistics Sectors

-- Insert the SegurIA initiative
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
  'seguria-security',
  'SegurIA',
  'Advanced AI-powered security platform providing intelligent surveillance, real-time threat detection, access control, and predictive security analytics for industrial, agricultural, and logistics operations across Latin America. Leveraging computer vision, IoT sensors, and machine learning for comprehensive threat prevention.',
  'security',
  'active',
  85,
  2500000,
  '2023-09-01',
  '2026-12-31',
  'SEC-001',
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

-- Add objectives for SegurIA
UPDATE initiatives
SET objectives = '[
  {
    "title": "Advanced Computer Vision",
    "description": "Deploy AI-powered object detection and recognition algorithms for real-time threat identification, anomaly detection, and behavioral analysis"
  },
  {
    "title": "Predictive Security Analytics",
    "description": "Implement ML models for predictive threat assessment, pattern recognition, and proactive security recommendations"
  },
  {
    "title": "IoT Sensor Integration",
    "description": "Integrate smart sensors, thermal imaging, and environmental monitoring with centralized management platform"
  },
  {
    "title": "Real-Time Alerting System",
    "description": "Build intelligent notification and response system with automated escalation and stakeholder integration"
  },
  {
    "title": "Sector-Specific Solutions",
    "description": "Develop tailored security strategies for industrial facilities, agricultural operations, and logistics centers"
  }
]'::jsonb
WHERE id = 'seguria-security';

-- Add milestones for SegurIA
UPDATE initiatives
SET milestones = '[
  {
    "title": "Industrial Pilot Program",
    "date": "2023-12-01",
    "status": "completed",
    "description": "Successful deployment in 5 major industrial facilities with 97.3% theft prevention rate"
  },
  {
    "title": "Agricultural Monitoring Solution",
    "date": "2024-03-01",
    "status": "completed",
    "description": "Launch specialized monitoring system for livestock protection and equipment security"
  },
  {
    "title": "Logistics Hub Platform",
    "date": "2024-09-01",
    "status": "in-progress",
    "description": "Integration with major logistics centers for cargo tracking and facility security"
  },
  {
    "title": "AI Model Enhancement Phase 2",
    "date": "2025-03-01",
    "status": "planned",
    "description": "Advanced behavioral analysis and predictive threat detection capabilities"
  },
  {
    "title": "Regional Expansion",
    "date": "2025-09-01",
    "status": "planned",
    "description": "Expand to 8 additional Latin American countries with localized compliance"
  },
  {
    "title": "Enterprise Analytics Dashboard",
    "date": "2026-01-01",
    "status": "planned",
    "description": "Comprehensive security intelligence and business intelligence platform"
  }
]'::jsonb
WHERE id = 'seguria-security';

-- Add location data
UPDATE initiatives
SET location_data = '{
  "headquarters": {
    "city": "Santiago",
    "country": "Chile",
    "coordinates": {
      "lat": -33.8688,
      "lng": -51.6213
    }
  },
  "regions": [
    "Central Chile",
    "Northern Mining Regions",
    "Southern Agricultural Zones",
    "Logistics Corridor (Santiago-Valparaíso)"
  ]
}'::jsonb
WHERE id = 'seguria-security';

-- Add partners
UPDATE initiatives
SET partners = '[
  {
    "name": "Computer Vision Research Labs",
    "type": "Technology Partner",
    "contribution": "Advanced neural networks for object detection, behavioral recognition, and anomaly detection algorithms"
  },
  {
    "name": "IoT Hardware Manufacturers",
    "type": "Hardware Partner",
    "contribution": "Specialized cameras with thermal imaging, motion sensors, environmental monitoring devices"
  },
  {
    "name": "Logistics Companies",
    "type": "Customer Partner",
    "contribution": "Real-world use cases, data for model training, integration feedback"
  },
  {
    "name": "Agricultural Cooperatives",
    "type": "Industry Partner",
    "contribution": "Field testing, compliance requirements, market insights"
  },
  {
    "name": "Cybersecurity Firms",
    "type": "Security Partner",
    "contribution": "Platform security, data encryption, threat protection"
  }
]'::jsonb
WHERE id = 'seguria-security';

-- Add risks
UPDATE initiatives
SET risks = '[
  {
    "type": "Privacy & Regulatory",
    "description": "Surveillance regulations and data protection laws across different Latin American jurisdictions",
    "mitigation": "Legal compliance team, GDPR-ready infrastructure, local regulatory partnerships",
    "severity": "High"
  },
  {
    "type": "Technical",
    "description": "Accuracy of AI models in diverse environmental conditions (lighting, weather, terrain)",
    "mitigation": "Continuous model retraining, environmental data augmentation, human verification layers",
    "severity": "Medium"
  },
  {
    "type": "Market Competition",
    "description": "International security companies entering Latin American market",
    "mitigation": "Regional expertise, localized solutions, competitive pricing, superior customer support",
    "severity": "Medium"
  },
  {
    "type": "Infrastructure",
    "description": "Network connectivity and power reliability in remote agricultural/mining regions",
    "mitigation": "Offline processing capability, local edge computing, redundant connectivity",
    "severity": "Medium"
  }
]'::jsonb
WHERE id = 'seguria-security';
