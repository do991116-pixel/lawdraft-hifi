import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LawDraft — AI 법률 서면 작성',
  description: 'Gemini AI 기반 한국 법률 서면 초안 생성 도구',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
