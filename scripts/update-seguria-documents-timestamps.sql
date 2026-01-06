-- Update all SegurIA documents with current timestamp to reflect today's update
UPDATE documents
SET updated_at = NOW()
WHERE initiative_id = 'seguria-security'
AND id IN (
  'seguria-platform-architecture',
  'seguria-ai-models',
  'seguria-market-analysis',
  'seguria-sector-solutions',
  'seguria-financial-model'
);
