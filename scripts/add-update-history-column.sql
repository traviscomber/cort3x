-- Add update_history column to documents table to track changes over time
ALTER TABLE documents 
ADD COLUMN IF NOT EXISTS update_history JSONB DEFAULT '[]'::jsonb;

-- Add index for faster queries on update history
CREATE INDEX IF NOT EXISTS idx_documents_update_history 
ON documents USING gin(update_history);

-- Add comment explaining the structure
COMMENT ON COLUMN documents.update_history IS 
'Array of update logs with structure: [{date, findings, recommendations, summary, sources}]';

-- Example update history structure:
-- [
--   {
--     "date": "2025-01-10T00:00:00Z",
--     "findings": ["New carbon pricing regulation announced", "Market expansion to 5 new sectors"],
--     "recommendations": ["Update compliance guidelines", "Engage with new sector stakeholders"],
--     "summary": "Major regulatory update with market expansion",
--     "sources": ["Ministry of Environment", "Carbon Market Report 2025"]
--   }
-- ]
