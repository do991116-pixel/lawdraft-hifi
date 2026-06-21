import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { apiKey } = await req.json()
  if (!apiKey?.startsWith('AIza')) {
    return NextResponse.json({ valid: false, error: '키 형식이 올바르지 않습니다.' }, { status: 400 })
  }
  try {
    const genai = new GoogleGenerativeAI(apiKey)
    const model = genai.getGenerativeModel({ model: 'gemini-1.5-pro' })
    await model.generateContent('테스트')
    return NextResponse.json({ valid: true, model: 'gemini-1.5-pro' })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    const friendly = msg.includes('API_KEY_INVALID') || msg.includes('400')
      ? '유효하지 않은 API 키입니다.'
      : msg.includes('quota') || msg.includes('429')
      ? '할당량 초과입니다. 잠시 후 다시 시도해주세요.'
      : '키 검증에 실패했습니다: ' + msg
    return NextResponse.json({ valid: false, error: friendly }, { status: 400 })
  }
}
