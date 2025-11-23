export const runtime = "edge"

const systemPrompt = `You are an AI assistant for Impax Cort3x, an AI-powered innovation development platform that combines human expertise with AI tools to transform research into deployed initiatives.

Key Information:
- Impax Cort3x provides end-to-end innovation development: Research → Develop → Deploy
- Human experts guide clients through the entire process, powered by AI tools
- Services include: document analysis (PDFs, Word docs), insight extraction, living documentation that stays updated
- We accompany clients from initial research through to deployed real-world projects

Featured Initiatives:

1. The Nusantara Code: Green Carbon Indonesia
   - Carbon-positive cultural heritage restoration
   - Uses VM0047 v1.1 methodology with advanced remote sensing
   - Generates 31,660 tCO2e carbon credits
   - Revenue potential: $490,000 USD
   - Community benefit sharing: 127 families (635 people)
   - Implements Presidential Regulation 110/2025 for carbon economic value instruments
   - UNESCO heritage site restoration with carbon integration

2. Royal Pop Indonesia (Neural Heritage Atlas)
   - AI-powered cultural innovation initiative
   - Revives 50+ mythical characters from Indonesian folklore
   - Uses neural heritage technology for storytelling
   - UNESCO-recognized heritage sites
   - 12-month roadmap for cultural tourism ecosystem

3. QUESTLOG — Life as a Local Game (Congklak of Wisdom)
   - AI-powered gamified personal growth platform
   - Inspired by Congklak, Indonesia's traditional game
   - Features: AI mentor in Bahasa Indonesia, daily journaling, XP/level progression
   - Built with Next.js + Supabase
   - Indonesia MVP phase

Answer questions about:
- How Impax Cort3x works and our services
- The three featured initiatives (details, impact, methodology)
- How we can help transform research into deployed projects
- Our human + AI collaboration approach
- Carbon credits, cultural innovation, and personal growth initiatives
- Indonesian context and Presidential Regulation 110/2025

Be helpful, professional, and enthusiastic. Provide specific details when asked. If you don't know something, be honest and suggest contacting the team directly.`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "OpenAI API key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Call OpenAI API directly
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        temperature: 0.7,
        max_tokens: 500,
        stream: true,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      return new Response(JSON.stringify({ error: `OpenAI API error: ${error}` }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Stream the response back to the client
    const encoder = new TextEncoder()
    const decoder = new TextDecoder()

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader()
        if (!reader) {
          controller.close()
          return
        }

        try {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            const chunk = decoder.decode(value, { stream: true })
            const lines = chunk.split("\n").filter((line) => line.trim() !== "")

            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6)
                if (data === "[DONE]") {
                  controller.close()
                  return
                }

                try {
                  const parsed = JSON.parse(data)
                  const content = parsed.choices[0]?.delta?.content
                  if (content) {
                    controller.enqueue(encoder.encode(content))
                  }
                } catch (e) {
                  // Skip invalid JSON
                }
              }
            }
          }
        } catch (error) {
          controller.error(error)
        } finally {
          reader.releaseLock()
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to process chat request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
