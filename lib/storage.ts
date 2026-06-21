// API 키 및 사건 데이터를 localStorage에 저장/조회

const API_KEY_STORAGE = 'lawdraft_api_key'
const CASES_STORAGE = 'lawdraft_cases'

export function saveApiKey(key: string) {
  if (typeof window === 'undefined') return
  localStorage.setItem(API_KEY_STORAGE, key)
}

export function getApiKey(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(API_KEY_STORAGE)
}

export function clearApiKey() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(API_KEY_STORAGE)
}

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

export function getCases(): Case[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(CASES_STORAGE) || '[]')
  } catch {
    return []
  }
}

export function getCase(id: string): Case | null {
  return getCases().find(c => c.id === id) ?? null
}

export function saveCase(c: Case) {
  const cases = getCases().filter(x => x.id !== c.id)
  cases.unshift(c)
  localStorage.setItem(CASES_STORAGE, JSON.stringify(cases))
}

export function createCase(
  name: string,
  docType: DocType,
  prompt: string,
  additionalInstructions?: string,
): Case {
  const c: Case = {
    id: crypto.randomUUID(),
    name,
    docType,
    prompt,
    additionalInstructions,
    status: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  saveCase(c)
  return c
}

export function updateCaseDraft(id: string, draft: string, status: CaseStatus = 'review') {
  const c = getCase(id)
  if (!c) return
  saveCase({ ...c, draft, status, updatedAt: new Date().toISOString() })
}

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
