// AI 출력 마크다운을 화면 렌더링용 구조체로 파싱

export interface DraftSection {
  id: string
  number: string
  title: string
  content: string
  statutes: StatuteRef[]
  hasPrecedentPlaceholder: boolean
}

export interface StatuteRef {
  text: string
  verified: boolean
}

export interface ParsedDraft {
  title: string
  caseInfo: string
  sections: DraftSection[]
  raw: string
}

export function parseDraft(raw: string): ParsedDraft {
  const lines = raw.split('\n')
  let title = ''
  let caseInfo = ''
  const sections: DraftSection[] = []
  let currentSection: Omit<DraftSection, 'id'> | null = null

  for (const line of lines) {
    const trimmed = line.trim()

    const titleMatch = trimmed.match(/^##\s+TITLE:\s*(.+)/)
    if (titleMatch) {
      title = titleMatch[1].trim()
      continue
    }

    const caseMatch = trimmed.match(/^##\s+CASE:\s*(.+)/)
    if (caseMatch) {
      caseInfo = caseMatch[1].trim()
      continue
    }

    const sectionMatch = trimmed.match(/^##\s+SECTION:\s*(\d+)\.\s*(.+)/)
    if (sectionMatch) {
      if (currentSection) {
        sections.push({ ...currentSection, id: crypto.randomUUID() })
      }
      currentSection = {
        number: sectionMatch[1],
        title: sectionMatch[2].trim(),
        content: '',
        statutes: [],
        hasPrecedentPlaceholder: false,
      }
      continue
    }

    if (currentSection) {
      currentSection.content += line + '\n'
      if (trimmed.includes('[판례 인용 필요')) {
        currentSection.hasPrecedentPlaceholder = true
      }
      // 법령 추출
      const statuteMatches = trimmed.matchAll(/([가-힣]+법\s*제\d+조[^✓⚠\n]*?)\s*(✓VERIFIED|⚠UNVERIFIED)/g)
      for (const m of statuteMatches) {
        currentSection.statutes.push({
          text: m[1].trim(),
          verified: m[2] === '✓VERIFIED',
        })
      }
    }
  }

  if (currentSection) {
    sections.push({ ...currentSection, id: crypto.randomUUID() })
  }

  // 태그 제거 (렌더링 시 별도 처리)
  for (const s of sections) {
    s.content = s.content
      .replace(/✓VERIFIED/g, '')
      .replace(/⚠UNVERIFIED/g, '')
      .trim()
  }

  return { title, caseInfo, sections, raw }
}
