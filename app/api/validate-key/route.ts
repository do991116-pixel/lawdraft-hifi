import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextResponse } from 'next/server'

// 서버 환경변수 키 상태 확인용 (관리자 전용)
export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return NextResponse.json({ valid: false, error: 'GEMINI_API_KEY 환경변수가 설정되지 않았습니다.' })
  }
  try {
    const genai = new GoogleGenerativeAI(apiKey)
    const model = genai.getGenerativeModel({ model: 'gemini-1.5-pro' })
    await model.generateContent('테스트')
    return NextResponse.json({ valid: true, model: 'gemini-1.5-pro' })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e)
    return NextResponse.json({ valid: false, error: msg }, { status: 500 })
  }
}
