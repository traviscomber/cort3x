-- Rewrite to use correct initiatives table schema (no headquarters, theme_color, icon fields)
-- Use JSONB arrays for partners and milestones instead of separate tables
INSERT INTO public.initiatives (
  id,
  title,
  description,
  category,
  status,
  progress,
  project_code,
  country,
  created_by,
  objectives,
  milestones,
  partners,
  risks,
  created_at,
  updated_at
) VALUES (
  'questlog',
  'QUESTLOG — Life as a Local Game',
  'AI-powered self-growth platform that turns real life into a gamified journey inspired by local traditional games. Users journal, reflect, and complete habits to earn XP, unlock levels, and watch their life progress visually — all themed through their local culture.',
  'AI & Gaming',
  'active',
  45,
  'AI-001',
  'Global',
  'system',
  jsonb_build_array(
    jsonb_build_object('title', 'AI-Powered Habit Tracking', 'description', 'Create personalized habit loops using AI analysis'),
    jsonb_build_object('title', 'Cultural Gamification', 'description', 'Localized game mechanics based on traditional games'),
    jsonb_build_object('title', 'Progress Visualization', 'description', 'Visual character and life progression system'),
    jsonb_build_object('title', 'Community Features', 'description', 'Social challenges and leaderboards by region')
  ),
  jsonb_build_array(
    jsonb_build_object('name', 'Indonesia MVP Launch', 'description', 'Release Congklak of Wisdom Edition', 'target_date', '2025-03-31', 'status', 'in-progress'),
    jsonb_build_object('name', 'AI Mentor Beta', 'description', 'Launch AI mentor in Bahasa Indonesia', 'target_date', '2025-02-28', 'status', 'in-progress'),
    jsonb_build_object('name', 'France Edition', 'description', 'Pétanque of Balance localization', 'target_date', '2025-06-30', 'status', 'planned'),
    jsonb_build_object('name', 'Japan Edition', 'description', 'Zen Garden Path localization', 'target_date', '2025-09-30', 'status', 'planned'),
    jsonb_build_object('name', 'Global Rollout', 'description', 'Multi-region deployment', 'target_date', '2026-01-31', 'status', 'planned')
  ),
  jsonb_build_array(
    jsonb_build_object('name', 'OpenAI', 'type', 'AI Provider', 'status', 'active'),
    jsonb_build_object('name', 'Vercel', 'type', 'Infrastructure', 'status', 'active'),
    jsonb_build_object('name', 'Supabase', 'type', 'Database', 'status', 'active')
  ),
  jsonb_build_array(
    jsonb_build_object('risk', 'AI accuracy in personalization', 'impact', 'Medium', 'mitigation', 'Continuous training and user feedback loops'),
    jsonb_build_object('risk', 'Cultural sensitivity in game mechanics', 'impact', 'High', 'mitigation', 'Local cultural advisory boards'),
    jsonb_build_object('risk', 'User retention in gamified platform', 'impact', 'Medium', 'mitigation', 'Dynamic reward system and community engagement')
  ),
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  updated_at = NOW();
