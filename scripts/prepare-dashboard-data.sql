-- Ensure all initiatives have complete data for dashboard visualizations
-- This script verifies and aggregates data for dashboard metrics

-- 1. Ensure all initiatives have progress, budget, and metadata
UPDATE initiatives
SET progress = COALESCE(progress, 0),
    budget = COALESCE(budget, 0),
    status = COALESCE(status, 'active')
WHERE progress IS NULL OR budget IS NULL OR status IS NULL;

-- 2. Drop existing views if they exist (to avoid conflicts)
DROP VIEW IF EXISTS initiative_performance CASCADE;
DROP VIEW IF EXISTS document_statistics CASCADE;
DROP VIEW IF EXISTS initiatives_by_geography CASCADE;
DROP VIEW IF EXISTS initiatives_progress_breakdown CASCADE;
DROP VIEW IF EXISTS dashboard_summary CASCADE;

-- 3. Create a view for dashboard summary statistics
CREATE VIEW dashboard_summary AS
SELECT 
  COUNT(*) as total_initiatives,
  COUNT(CASE WHEN status = 'active' THEN 1 END) as active_initiatives,
  COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_initiatives,
  COUNT(CASE WHEN status = 'planning' THEN 1 END) as planning_initiatives,
  ROUND(AVG(COALESCE(progress, 0))::numeric, 2) as average_progress,
  ROUND(SUM(COALESCE(budget, 0))::numeric, 2) as total_budget,
  COUNT(DISTINCT country) as countries_count
FROM initiatives;

-- 4. Create a view for initiatives by category and progress
CREATE VIEW initiatives_progress_breakdown AS
SELECT 
  COALESCE(category, 'Uncategorized') as category,
  COALESCE(status, 'unknown') as status,
  COUNT(*) as count,
  ROUND(AVG(COALESCE(progress, 0))::numeric, 2) as avg_progress,
  ROUND(SUM(COALESCE(budget, 0))::numeric, 2) as total_budget
FROM initiatives
GROUP BY category, status
ORDER BY category, status;

-- 5. Create a view for geographic distribution
CREATE VIEW initiatives_by_geography AS
SELECT 
  country,
  COUNT(*) as initiative_count,
  ROUND(AVG(COALESCE(progress, 0))::numeric, 2) as avg_progress,
  ROUND(SUM(COALESCE(budget, 0))::numeric, 2) as total_budget
FROM initiatives
WHERE country IS NOT NULL
GROUP BY country
ORDER BY initiative_count DESC;

-- 6. Create a view for documents aggregation
CREATE VIEW document_statistics AS
SELECT 
  initiative_id,
  COUNT(*) as total_documents,
  COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_documents,
  COUNT(CASE WHEN status = 'in_progress' THEN 1 END) as in_progress_documents,
  ROUND(AVG(COALESCE(completion_percentage, 0))::numeric, 2) as avg_completion,
  MAX(updated_at) as last_update
FROM documents
WHERE initiative_id IS NOT NULL
GROUP BY initiative_id;

-- 7. Create a view for initiative performance metrics
-- Removed non-existent json_array_length function calls and simplified the view
CREATE VIEW initiative_performance AS
SELECT 
  i.id,
  i.title,
  i.category,
  i.status,
  i.progress,
  i.budget,
  COALESCE(d.total_documents, 0) as document_count,
  COALESCE(d.completed_documents, 0) as completed_documents,
  COALESCE(d.avg_completion, 0) as avg_doc_completion,
  i.created_at,
  i.updated_at,
  i.country
FROM initiatives i
LEFT JOIN document_statistics d ON i.id = d.initiative_id;

-- 8. Grant permissions for dashboard views
GRANT SELECT ON dashboard_summary TO authenticated, anon;
GRANT SELECT ON initiatives_progress_breakdown TO authenticated, anon;
GRANT SELECT ON initiatives_by_geography TO authenticated, anon;
GRANT SELECT ON document_statistics TO authenticated, anon;
GRANT SELECT ON initiative_performance TO authenticated, anon;
