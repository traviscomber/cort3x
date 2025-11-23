-- Create table for sultanate partnership form submissions
CREATE TABLE IF NOT EXISTS sultanate_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sultanate_name TEXT NOT NULL,
  sultanate_region TEXT NOT NULL,
  sultanate_established_year INTEGER,
  sultanate_website TEXT,
  contact_title TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_position TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL,
  interest_level TEXT NOT NULL,
  preferred_communication TEXT NOT NULL,
  message TEXT,
  cultural_assets TEXT,
  additional_notes TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policies
ALTER TABLE sultanate_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (submit the form)
CREATE POLICY "Anyone can submit sultanate forms"
  ON sultanate_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated users can view submissions
CREATE POLICY "Authenticated users can view sultanate submissions"
  ON sultanate_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update submissions
CREATE POLICY "Authenticated users can update sultanate submissions"
  ON sultanate_submissions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_sultanate_submissions_created_at ON sultanate_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sultanate_submissions_status ON sultanate_submissions(status);
