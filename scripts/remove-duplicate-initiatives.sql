-- Remove duplicate Nusantara Code and Heritage Atlas initiatives
-- Keep only the complete versions with full data

-- First, let's identify which initiatives to keep and which to delete
-- We'll keep initiatives that have documents attached (full data)
-- and delete the ones without documents (empty data)

-- Delete empty Nusantara Code duplicate (if it has no documents)
DELETE FROM initiatives 
WHERE id = 'the-nusantara-code' 
AND NOT EXISTS (
  SELECT 1 FROM documents WHERE initiative_id = 'the-nusantara-code'
);

-- Delete the Heritage Atlas duplicate (gray icon, incomplete)
-- Keep only "Royal Pop Indonesia - National Heritage Atlas" (orange icon, complete)
DELETE FROM initiatives 
WHERE (
  title = 'Heritage Atlas (Royal Pop Indonesia)' 
  OR id LIKE '%heritage-atlas%'
)
AND id != 'royal-pop-indonesia'
AND NOT EXISTS (
  SELECT 1 FROM documents WHERE initiative_id = initiatives.id LIMIT 5
);

-- Verify remaining initiatives
SELECT id, title, description, 
  (SELECT COUNT(*) FROM documents WHERE initiative_id = initiatives.id) as doc_count
FROM initiatives 
ORDER BY created_at;
