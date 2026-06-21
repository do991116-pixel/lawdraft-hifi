import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest } from 'next/server'
import { buildSystemPrompt, buildUserPrompt } from '@/lib/prompts'
import type { DocType } from '@/lib/storage'

export async function POST(req: NextRequest) {
  const { apiKey, docType, prompt, additionalInstructions } = await req.json() as {
    apiKey: string
    docType: DocType
    prompt: string
    additionalInstructions?: string
  }

  if (!apiKey || !docType || !prompt) {
    return new Response('필수 파라미터가 없습니다.', { status: 400 })
  }

  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const genai = new GoogleGenerativeAI(apiKey)
        const model = genai.getGenerativeModel({
          model: 'gemini-1.5-pro',
          systemInstruction: buildSystemPrompt(),
        })

        const result = await model.generateContentStream(
          buildUserPrompt(docType, prompt, additionalInstructions)
        )

        for await (const chunk of result.stream) {
          const text = chunk.text()
          if (text) controller.enqueue(encoder.encode(text))
        }
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e)
        controller.enqueue(encoder.encode(`\n\n[생성 오류: ${msg}]`))
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
