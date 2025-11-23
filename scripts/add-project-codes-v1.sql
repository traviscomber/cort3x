-- Add project_code column to initiatives table
ALTER TABLE initiatives 
ADD COLUMN IF NOT EXISTS project_code VARCHAR(20) UNIQUE;

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_initiatives_project_code ON initiatives(project_code);

-- Add comment explaining the coding system
COMMENT ON COLUMN initiatives.project_code IS 'Unique project identifier following format: [CATEGORY_PREFIX]-[SEQUENCE] (e.g., ENV-001, CUL-002, PER-003)';
