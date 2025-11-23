# 🤖 Impax Cort3x AI Agent System: One-Page Overview

## 🧠 Core Architecture
The platform is powered by a **Dual-Memory AI Agent System** built on OpenAI GPT-4 and Supabase Vector Search.
*   **Base Framework:** All agents follow a standardized *Perceive → Plan → Act → Reflect* workflow.
*   **Episodic Memory:** Remembers specific past interactions using vector embeddings (1536-dim), allowing agents to recall context from previous conversations.
*   **Semantic Memory:** Learns and adapts to user preferences and success patterns over time, continuously improving response quality.

## ✅ Deployed & Active Agents

### 1. @FeasibilityAgent (Project Analyst)
*   **Purpose:** Evaluates project submissions to determine viability and investment readiness.
*   **Core Function:** Generates a comprehensive **100-point Feasibility Score** across 6 dimensions:
    *   Market Viability (20pts)
    *   Sustainability (20pts)
    *   Financial Feasibility (20pts)
    *   Regulatory Compliance (15pts)
    *   Complexity (15pts)
    *   Audit Funnel (10pts)
*   **Capabilities:** Comparison analysis, risk identification, and strategic recommendations.

### 2. Intelligent Document Engine (Automated Researcher)
*   **Purpose:** Keeps platform knowledge and project documents up-to-date autonomously.
*   **Schedule:** Runs every Friday at 2:00 AM UTC.
*   **Workflow:**
    1.  **Research:** Scans global news and reports for relevant topic updates.
    2.  **Analysis:** Uses GPT-4o to identify trends, risks, and opportunities.
    3.  **Update:** Automatically appends insights to project documents with citations.

## 🔜 Roadmap (Coming Soon)
*   **@MarketAgent:** Deep-dive TAM sizing and competitive landscape analysis.
*   **@PitchDeckAgent:** Auto-generation of 15-slide investor decks and financial models.
*   **@CoachingAgent:** Enterprise-tier strategic implementation guidance.

## 🔐 Technical Stack & Security
*   **AI Provider:** OpenAI (GPT-4 Turbo, GPT-4o, text-embedding-3-small).
*   **Infrastructure:** Vercel AI SDK, Supabase (PostgreSQL + pgvector).
*   **Security:** Row-Level Security (RLS) isolation, end-to-end encryption, GDPR compliance.
