-- Delete all documents for The Nusantara Code initiative
-- This will remove duplicates and old documents
DELETE FROM documents 
WHERE initiative_id = 'the-nusantara-code';

-- Verify deletion
SELECT COUNT(*) as remaining_documents 
FROM documents 
WHERE initiative_id = 'the-nusantara-code';
