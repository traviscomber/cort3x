-- Add email automation tracking and lead scoring to leads table
ALTER TABLE leads
ADD COLUMN IF NOT EXISTS lead_score INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS engagement_level TEXT DEFAULT 'cold' CHECK (engagement_level IN ('cold', 'warm', 'hot')),
ADD COLUMN IF NOT EXISTS last_email_sent_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS email_open_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS email_click_count INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS canvas_downloaded BOOLEAN DEFAULT FALSE,
ADD COLUMN IF NOT EXISTS onboarding_completed BOOLEAN DEFAULT FALSE;

-- Create email automation log table
CREATE TABLE IF NOT EXISTS email_automation_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  email_type TEXT NOT NULL,
  sent_at TIMESTAMPTZ DEFAULT NOW(),
  opened_at TIMESTAMPTZ,
  clicked_at TIMESTAMPTZ,
  status TEXT DEFAULT 'sent' CHECK (status IN ('sent', 'opened', 'clicked', 'bounced', 'failed'))
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_email_automation_log_lead_id ON email_automation_log(lead_id);
CREATE INDEX IF NOT EXISTS idx_email_automation_log_sent_at ON email_automation_log(sent_at);

-- Create function to update lead score
CREATE OR REPLACE FUNCTION update_lead_score()
RETURNS TRIGGER AS $$
BEGIN
  -- Recalculate lead score based on engagement
  UPDATE leads
  SET 
    lead_score = (
      CASE WHEN canvas_downloaded THEN 20 ELSE 0 END +
      CASE WHEN onboarding_completed THEN 30 ELSE 0 END +
      (email_open_count * 5) +
      (email_click_count * 10) +
      CASE WHEN startup_idea IS NOT NULL AND startup_idea != '' THEN 15 ELSE 0 END
    ),
    engagement_level = 
      CASE 
        WHEN (
          CASE WHEN canvas_downloaded THEN 20 ELSE 0 END +
          CASE WHEN onboarding_completed THEN 30 ELSE 0 END +
          (email_open_count * 5) +
          (email_click_count * 10)
        ) >= 50 THEN 'hot'
        WHEN (
          CASE WHEN canvas_downloaded THEN 20 ELSE 0 END +
          CASE WHEN onboarding_completed THEN 30 ELSE 0 END +
          (email_open_count * 5) +
          (email_click_count * 10)
        ) >= 25 THEN 'warm'
        ELSE 'cold'
      END
  WHERE id = NEW.lead_id;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for email engagement
CREATE TRIGGER update_lead_score_on_email_engagement
AFTER INSERT OR UPDATE ON email_automation_log
FOR EACH ROW
EXECUTE FUNCTION update_lead_score();
