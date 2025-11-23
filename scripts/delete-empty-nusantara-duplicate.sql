-- Delete the empty Nusantara Code initiative (keeping the one with documents)

-- First, identify which Nusantara Code has documents
-- Then delete the one without documents

DELETE FROM initiatives 
WHERE id LIKE '%nusantara%' 
AND id NOT IN (
  SELECT DISTINCT initiative_id 
  FROM documents 
  WHERE initiative_id LIKE '%nusantara%'
);

-- This will delete any Nusantara Code initiative that has no associated documents
-- The one with full data (documents) will be preserved
