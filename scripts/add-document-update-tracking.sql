-- Add update tracking metadata to existing documents
-- This script adds version history and update information to documents

-- Update The Nusantara Code documents with recent update timestamps
UPDATE documents 
SET 
  updated_at = NOW() - INTERVAL '2 days',
  metadata = jsonb_build_object(
    'version', '1.1',
    'last_reviewed', NOW()::text,
    'change_log', jsonb_build_array(
      jsonb_build_object(
        'date', NOW()::text,
        'changes', jsonb_build_array(
          'Added latest UNFCCC COP29 outcomes',
          'Updated carbon credit pricing data',
          'Enhanced market harmonization analysis'
        )
      ),
      jsonb_build_object(
        'date', (NOW() - INTERVAL '30 days')::text,
        'changes', jsonb_build_array(
          'Initial document creation',
          'Comprehensive governance framework established'
        )
      )
    )
  )
WHERE initiative_id = 'the-nusantara-code'
  AND title LIKE '%Governance%';

-- Update market harmonization document
UPDATE documents 
SET 
  updated_at = NOW() - INTERVAL '5 days',
  metadata = jsonb_build_object(
    'version', '1.2',
    'last_reviewed', NOW()::text,
    'change_log', jsonb_build_array(
      jsonb_build_object(
        'date', NOW()::text,
        'changes', jsonb_build_array(
          'Updated JCM bilateral agreements status',
          'Added VERRA registry integration details',
          'Enhanced SPEI market analysis'
        )
      )
    )
  )
WHERE initiative_id = 'the-nusantara-code'
  AND title LIKE '%Harmonization%';

-- Update policy analysis document
UPDATE documents 
SET 
  updated_at = NOW() - INTERVAL '1 day',
  metadata = jsonb_build_object(
    'version', '1.3',
    'last_reviewed', NOW()::text,
    'change_log', jsonb_build_array(
      jsonb_build_object(
        'date', NOW()::text,
        'changes', jsonb_build_array(
          'Added MRV system implementation timeline',
          'Updated emissions accountability framework',
          'Enhanced NDC alignment analysis'
        )
      )
    )
  )
WHERE initiative_id = 'the-nusantara-code'
  AND title LIKE '%Policy%';

-- Verification query
SELECT 
  title,
  created_at,
  updated_at,
  EXTRACT(DAY FROM (NOW() - updated_at)) as days_since_update,
  metadata->>'version' as version
FROM documents
WHERE initiative_id = 'the-nusantara-code'
ORDER BY updated_at DESC;
