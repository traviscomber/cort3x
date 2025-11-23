-- Create leads table for sales funnel
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  startup_idea TEXT,
  founder_archetype TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'template_sent', 'engaged', 'converted', 'unsubscribed')),
  source TEXT DEFAULT 'funnel_page',
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policies
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Anyone can submit leads (public access to form)
CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Authenticated users can view all leads (admin access)
CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can update leads (admin access)
CREATE POLICY "Authenticated users can update leads"
  ON leads
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
