# Impax Cort3x AI Agents

## Overview
Impax Cort3x uses specialized AI agents powered by OpenAI to analyze project feasibility, generate insights, and provide strategic guidance. Each agent has specific expertise and memory capabilities for continuous learning.

## Available Agents

### @feasibility-agent
**Purpose:** Analyzes project submissions and generates 100-point feasibility scores

**Capabilities:**
- Evaluates projects across 6 dimensions (market viability, sustainability, financial feasibility, regulatory compliance, implementation complexity, audit funnel)
- Generates detailed scoring breakdowns with explanations
- Identifies risks and opportunities
- Provides actionable recommendations

**Memory:**
- Episodic: Remembers past project evaluations and their outcomes
- Semantic: Learns industry patterns, success factors, and risk indicators

**Usage:**
\`\`\`
@feasibility-agent analyze [project-id]
@feasibility-agent compare [project-id-1] [project-id-2]
\`\`\`

### @market-agent
**Purpose:** Conducts market research and competitive analysis

**Capabilities:**
- Market sizing and TAM analysis
- Competitive landscape assessment
- Industry trend identification
- Customer segment analysis
- Growth potential evaluation

**Memory:**
- Episodic: Tracks market changes and competitor moves over time
- Semantic: Builds knowledge of industry dynamics and market patterns

**Usage:**
\`\`\`
@market-agent research [industry] [geography]
@market-agent competitors [company-name]
\`\`\`

### @pitch-deck-agent
**Purpose:** Creates professional pitch decks and business plans (Professional tier)

**Capabilities:**
- Generates investor-ready pitch decks (15-20 slides)
- Creates comprehensive business plans (30-40 pages)
- Develops financial projections (3-5 years)
- Crafts compelling narratives and value propositions

**Memory:**
- Episodic: Remembers successful pitch structures and investor feedback
- Semantic: Learns what resonates with different investor types

**Usage:**
\`\`\`
@pitch-deck-agent create [project-id] --style=[investor-type]
@pitch-deck-agent revise [deck-id] --feedback=[comments]
\`\`\`

### @coaching-agent
**Purpose:** Provides strategic guidance and implementation support (Enterprise tier)

**Capabilities:**
- Strategic planning and roadmapping
- Problem-solving and decision support
- Implementation guidance
- Performance optimization
- Resource allocation advice

**Memory:**
- Episodic: Tracks client progress, challenges, and solutions over sessions
- Semantic: Develops expertise in client-specific context and preferences

**Usage:**
\`\`\`
@coaching-agent session [topic]
@coaching-agent review-progress [project-id]
\`\`\`

## Agent Architecture

### Memory System
All agents use a dual-memory architecture:

**Episodic Memory:**
- Stores specific interactions and experiences
- Capacity: 100 recent episodes per agent
- Retrieval: Similarity-based using embeddings
- Purpose: Context-aware responses based on past interactions

**Semantic Memory:**
- Stores generalized patterns and preferences
- Updates: Continuous learning with decay factor (0.9)
- Purpose: Long-term knowledge and improved decision-making

### Data Privacy & Security
- All project data is encrypted in transit and at rest
- OpenAI API uses enterprise agreements (no training on user data)
- Data retention: Temporary processing only
- RLS (Row-Level Security) ensures user data isolation
- Full GDPR compliance

### Agent Workflow
1. **Perceive:** Process user input and detect intent
2. **Plan:** Create action plan based on memory and context
3. **Act:** Execute plan using OpenAI models
4. **Revise:** Adjust based on feedback
5. **Reflect:** Store experience in memory for future learning

## Technical Stack
- **AI Provider:** OpenAI (GPT-4, GPT-4 Turbo)
- **Framework:** Vercel AI SDK
- **Memory Store:** Supabase (PostgreSQL + pgvector)
- **Embeddings:** OpenAI text-embedding-3-small
- **Security:** RLS, encryption, enterprise API agreements

## Integration
Agents are accessible via:
- Web interface (dashboard)
- API endpoints (`/api/agents/[agent-name]`)
- Server actions (for real-time updates)

## Performance Metrics
- Response time: < 5 seconds for standard queries
- Accuracy: 95%+ on feasibility scoring
- User satisfaction: Tracked per agent interaction
- Learning rate: Improves 5-10% per 100 interactions
