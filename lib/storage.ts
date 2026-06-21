export type CaseStatus = 'draft' | 'generating' | 'review' | 'done'

export interface Case {
  id: string
  name: string
  docType: DocType
  prompt: string
  additionalInstructions?: string
  draft?: string
  status: CaseStatus
  createdAt: string
  updatedAt: string
}

export type DocType = '의견서' | '항소이유서' | '고소장' | '준비서면' | '답변서'

export function statusLabel(status: CaseStatus): string {
  const map: Record<CaseStatus, string> = {
    draft: '초안 보관',
    generating: 'AI 분석 중',
    review: '검토 필요',
    done: '완료',
  }
  return map[status]
}

export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const min = Math.floor(diff / 60000)
  if (min < 1) return '방금'
  if (min < 60) return `${min}분 전`
  const hr = Math.floor(min / 60)
  if (hr < 24) return `${hr}시간 전`
  return `${Math.floor(hr / 24)}일 전`
}
