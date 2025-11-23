-- Generate project codes for existing initiatives based on their category
-- Category mapping:
-- Environmental / Environmental Policy -> ENV
-- Cultural / Cultural Innovation -> CUL
-- Personal Growth / Platform Development / Mobile Application -> PER

WITH categorized_initiatives AS (
  SELECT 
    id,
    category,
    CASE 
      WHEN category ILIKE '%environmental%' THEN 'ENV'
      WHEN category ILIKE '%cultural%' THEN 'CUL'
      ELSE 'PER'
    END as prefix,
    ROW_NUMBER() OVER (
      PARTITION BY CASE 
        WHEN category ILIKE '%environmental%' THEN 'ENV'
        WHEN category ILIKE '%cultural%' THEN 'CUL'
        ELSE 'PER'
      END 
      ORDER BY created_at
    ) as sequence
  FROM initiatives
  WHERE project_code IS NULL
)
UPDATE initiatives
SET project_code = ci.prefix || '-' || LPAD(ci.sequence::TEXT, 3, '0')
FROM categorized_initiatives ci
WHERE initiatives.id = ci.id;
