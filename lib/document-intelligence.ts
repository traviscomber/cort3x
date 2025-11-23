import { generateText } from "ai"

export interface DocumentUpdate {
  documentId: string
  title: string
  newFindings: string[]
  recommendations: string[]
  updatedContent: string
  sources: string[]
  updateSummary: string
}

export interface ResearchFindings {
  news: Array<{
    title: string
    summary: string
    source: string
    date: string
    relevance: number
  }>
  documents: Array<{
    title: string
    summary: string
    source: string
    type: string
  }>
  keyInsights: string[]
  trends: string[]
}

/**
 * Research latest news and documents for a given topic
 */
export async function researchTopic(topic: string, keywords: string[]): Promise<ResearchFindings> {
  const searchQuery = `${topic} ${keywords.join(" ")} latest news updates 2025`

  // Use AI to search and analyze findings
  const { text } = await generateText({
    model: "openai/gpt-4o",
    prompt: `You are a research analyst. Search for and analyze the latest news, reports, and developments about: ${topic}
    
Keywords: ${keywords.join(", ")}

Please provide:
1. Recent news articles (last 30 days)
2. Important documents or reports
3. Key insights and trends
4. Emerging developments

Format your response as JSON with this structure:
{
  "news": [{"title": "", "summary": "", "source": "", "date": "", "relevance": 0-10}],
  "documents": [{"title": "", "summary": "", "source": "", "type": ""}],
  "keyInsights": [""],
  "trends": [""]
}`,
  })

  try {
    return JSON.parse(text)
  } catch (error) {
    console.error("[v0] Failed to parse research findings:", error)
    return {
      news: [],
      documents: [],
      keyInsights: [],
      trends: [],
    }
  }
}

/**
 * Generate document updates based on research findings
 */
export async function generateDocumentUpdate(
  documentTitle: string,
  currentContent: string,
  findings: ResearchFindings,
): Promise<DocumentUpdate> {
  const { text } = await generateText({
    model: "openai/gpt-4o",
    prompt: `You are a strategic analyst updating documentation for: ${documentTitle}

Current document content (first 2000 chars):
${currentContent.substring(0, 2000)}

Recent research findings:
${JSON.stringify(findings, null, 2)}

Please provide:
1. New findings to add to the document (bullet points)
2. Strategic recommendations for moving forward
3. Updated content section that incorporates the new findings
4. Summary of what changed

Format as JSON:
{
  "newFindings": [""],
  "recommendations": [""],
  "updatedContent": "",
  "updateSummary": "",
  "sources": [""]
}`,
  })

  try {
    const update = JSON.parse(text)
    return {
      documentId: "",
      title: documentTitle,
      ...update,
    }
  } catch (error) {
    console.error("[v0] Failed to parse document update:", error)
    return {
      documentId: "",
      title: documentTitle,
      newFindings: [],
      recommendations: [],
      updatedContent: currentContent,
      sources: [],
      updateSummary: "No updates available",
    }
  }
}

/**
 * Analyze initiative progress and provide recommendations
 */
export async function analyzeInitiativeProgress(
  initiativeName: string,
  currentProgress: number,
  documents: Array<{ title: string; content: string }>,
): Promise<{
  progressAssessment: string
  nextSteps: string[]
  risks: string[]
  opportunities: string[]
  successMetrics: string[]
}> {
  const { text } = await generateText({
    model: "openai/gpt-4o",
    prompt: `You are a strategic advisor analyzing the initiative: ${initiativeName}

Current progress: ${currentProgress}%

Available documentation:
${documents.map((d) => `- ${d.title}`).join("\n")}

Please provide:
1. Progress assessment (what's working, what needs attention)
2. Next steps to move forward (prioritized)
3. Risks to monitor
4. Opportunities to pursue
5. Success metrics to track

Format as JSON:
{
  "progressAssessment": "",
  "nextSteps": [""],
  "risks": [""],
  "opportunities": [""],
  "successMetrics": [""]
}`,
  })

  try {
    return JSON.parse(text)
  } catch (error) {
    console.error("[v0] Failed to parse progress analysis:", error)
    return {
      progressAssessment: "Analysis unavailable",
      nextSteps: [],
      risks: [],
      opportunities: [],
      successMetrics: [],
    }
  }
}
