-- Enable pgvector extension for vector similarity search
CREATE EXTENSION IF NOT EXISTS vector;

-- Create agent memory tables for episodic and semantic memory

-- Episodic Memory: Stores specific agent experiences
CREATE TABLE IF NOT EXISTS agent_episodic_memory (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  agent_type TEXT NOT NULL,
  state TEXT NOT NULL,
  action TEXT NOT NULL,
  outcome TEXT NOT NULL,
  embedding vector(1536),
  -- Renamed from 'timestamp' to 'occurred_at' to avoid reserved keyword
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Semantic Memory: Stores learned preferences
CREATE TABLE IF NOT EXISTS agent_semantic_memory (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  agent_type TEXT NOT NULL,
  key TEXT NOT NULL,
  value DOUBLE PRECISION NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, agent_type, key)
);

-- Pattern Recognition: Stores action patterns and success rates
CREATE TABLE IF NOT EXISTS agent_patterns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  agent_type TEXT NOT NULL,
  pattern_key TEXT NOT NULL,
  context TEXT NOT NULL,
  action TEXT NOT NULL,
  success_count INTEGER NOT NULL DEFAULT 0,
  total_count INTEGER NOT NULL DEFAULT 0,
  success_rate DOUBLE PRECISION NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id, agent_type, pattern_key)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_episodic_user_agent ON agent_episodic_memory(user_id, agent_type);
-- Updated index to use 'occurred_at' instead of 'timestamp'
CREATE INDEX IF NOT EXISTS idx_episodic_occurred_at ON agent_episodic_memory(occurred_at DESC);
CREATE INDEX IF NOT EXISTS idx_semantic_user_agent ON agent_semantic_memory(user_id, agent_type);
CREATE INDEX IF NOT EXISTS idx_patterns_user_agent ON agent_patterns(user_id, agent_type);
CREATE INDEX IF NOT EXISTS idx_patterns_success_rate ON agent_patterns(success_rate DESC);

-- Enable RLS
ALTER TABLE agent_episodic_memory ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_semantic_memory ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_patterns ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can manage their own episodic memory"
  ON agent_episodic_memory
  FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own semantic memory"
  ON agent_semantic_memory
  FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own patterns"
  ON agent_patterns
  FOR ALL
  USING (auth.uid() = user_id);

-- Function for vector similarity search
CREATE OR REPLACE FUNCTION match_episodes(
  query_embedding vector(1536),
  match_threshold float,
  match_count int,
  p_user_id uuid,
  p_agent_type text
)
RETURNS TABLE (
  id uuid,
  user_id uuid,
  agent_type text,
  state text,
  action text,
  outcome text,
  -- Updated return column name
  occurred_at timestamptz,
  similarity float
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    agent_episodic_memory.id,
    agent_episodic_memory.user_id,
    agent_episodic_memory.agent_type,
    agent_episodic_memory.state,
    agent_episodic_memory.action,
    agent_episodic_memory.outcome,
    -- Updated to return 'occurred_at' instead of 'timestamp'
    agent_episodic_memory.occurred_at,
    1 - (agent_episodic_memory.embedding <=> query_embedding) as similarity
  FROM agent_episodic_memory
  WHERE 
    agent_episodic_memory.user_id = p_user_id
    AND agent_episodic_memory.agent_type = p_agent_type
    AND 1 - (agent_episodic_memory.embedding <=> query_embedding) > match_threshold
  ORDER BY agent_episodic_memory.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;
