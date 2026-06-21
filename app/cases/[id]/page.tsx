'use client'
import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Download, RotateCcw, CheckCircle2, AlertTriangle, BookOpen, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import Sidebar from '@/components/layout/Sidebar'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { getCase, getApiKey, saveCase, type Case } from '@/lib/storage'
import { parseDraft, type ParsedDraft, type DraftSection } from '@/lib/draft-parser'
import { clsx } from 'clsx'

export default function CasePage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [c, setC] = useState<Case | null>(null)
  const [parsed, setParsed] = useState<ParsedDraft | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [regenSection, setRegenSection] = useState<string | null>(null)
  const [regenPrompt, setRegenPrompt] = useState('')
  const [regenLoading, setRegenLoading] = useState(false)
  const [markingDone, setMarkingDone] = useState(false)

  useEffect(() => {
    const apiKey = getApiKey()
    if (!apiKey) { router.replace('/onboarding'); return }
    const caseData = getCase(id)
    if (!caseData) { router.replace('/dashboard'); return }
    setC(caseData)
    if (caseData.draft) {
      setParsed(parseDraft(caseData.draft))
    }
  }, [id, router])

  async function handleRegenSection(section: DraftSection) {
    if (!c) return
    const apiKey = getApiKey()
    if (!apiKey) return
    setRegenLoading(true)

    const sectionPrompt = `다음 섹션을 다시 작성해 주세요:\n섹션 제목: ${section.title}\n원본 내용:\n${section.content}\n\n추가 지시: ${regenPrompt || '없음'}`

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey,
          docType: c.docType,
          prompt: sectionPrompt,
          additionalInstructions: `이 섹션만 ## SECTION: ${section.number}. ${section.title} 형식으로 작성하세요.`,
        }),
      })

      if (!res.ok || !res.body) throw new Error('재생성 실패')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let newContent = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        newContent += decoder.decode(value, { stream: true })
      }

      // Update just this section in the draft
      const updatedDraft = (c.draft || '').replace(
        new RegExp(`## SECTION: ${section.number}[^#]*`, 's'),
        newContent + '\n'
      )
      const updated = { ...c, draft: updatedDraft, updatedAt: new Date().toISOString() }
      saveCase(updated)
      setC(updated)
      setParsed(parseDraft(updatedDraft))
      setRegenSection(null)
      setRegenPrompt('')
    } catch {
      // keep existing content on error
    } finally {
      setRegenLoading(false)
    }
  }

  function handleMarkDone() {
    if (!c) return
    setMarkingDone(true)
    const updated = { ...c, status: 'done' as const, updatedAt: new Date().toISOString() }
    saveCase(updated)
    setC(updated)
    setMarkingDone(false)
  }

  function handleExportDocx() {
    if (!c?.draft) return
    const blob = new Blob([c.draft], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${c.name}_초안.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!c) return null

  const verifiedCount = parsed?.sections.flatMap(s => s.statutes).filter(s => s.verified).length ?? 0
  const unverifiedCount = parsed?.sections.flatMap(s => s.statutes).filter(s => !s.verified).length ?? 0
  const precedentCount = parsed?.sections.filter(s => s.hasPrecedentPlaceholder).length ?? 0
  const allStatutes = parsed?.sections.flatMap(s => s.statutes) ?? []

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-[24px] h-[60px] border-b border-border flex-none">
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <button className="w-8 h-8 rounded-[9px] border border-n-20 flex items-center justify-center hover:bg-n-05 transition-colors">
                <ArrowLeft size={16} className="text-n-70" />
              </button>
            </Link>
            <div>
              <div className="text-[15px] font-bold text-n-100">{c.name}</div>
              <div className="text-[12px] text-n-50">{c.docType}</div>
            </div>
            <Badge
              label={c.status === 'generating' ? 'AI 분석 중' : c.status === 'review' ? '검토 필요' : c.status === 'done' ? '완료' : '초안'}
              tone={c.status === 'review' ? 'orange' : c.status === 'done' ? 'green' : c.status === 'generating' ? 'purple' : 'neutral'}
            />
          </div>
          <div className="flex items-center gap-[10px]">
            {c.status !== 'done' && (
              <Button size="sm" variant="outlined" color="assistive" onClick={handleMarkDone} loading={markingDone}>
                <CheckCircle2 size={14} className="mr-1" />
                검토 완료
              </Button>
            )}
            <Button size="sm" onClick={handleExportDocx} disabled={!c.draft}>
              <Download size={14} className="mr-1" />
              내보내기
            </Button>
          </div>
        </div>

        {/* Content area */}
        {c.status === 'generating' ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-5">
            <div className="relative w-[56px] h-[56px]">
              <div className="absolute inset-0 rounded-full border-[3px] border-n-10" />
              <div className="absolute inset-0 rounded-full border-[3px] border-purple border-t-transparent animate-spin" />
            </div>
            <div className="text-center">
              <div className="text-[17px] font-bold text-n-100 mb-1">AI가 초안을 작성하고 있습니다</div>
              <div className="text-[13px] text-n-50">페이지를 새로고침하면 완료 여부를 확인할 수 있습니다</div>
            </div>
          </div>
        ) : !c.draft ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <div className="text-[15px] text-n-70">초안이 아직 없습니다</div>
            <Link href="/cases/new">
              <Button size="md">새 초안 생성</Button>
            </Link>
          </div>
        ) : (
          <div className="flex-1 flex overflow-hidden">
            {/* Document pane */}
            <div className="flex-1 overflow-auto px-[40px] py-[32px]">
              {parsed ? (
                <>
                  {/* Doc header */}
                  <div className="mb-[32px] pb-[24px] border-b border-border">
                    <div className="text-[11px] font-semibold text-n-50 uppercase tracking-widest mb-[8px]">{c.docType}</div>
                    <h1 className="text-[22px] font-bold text-n-100 tracking-[-0.02em] mb-[6px]">{parsed.title || c.name}</h1>
                    {parsed.caseInfo && (
                      <div className="text-[13px] text-n-70">{parsed.caseInfo}</div>
                    )}
                  </div>

                  {/* Sections */}
                  <div className="space-y-[28px]">
                    {parsed.sections.map((section) => (
                      <div
                        key={section.id}
                        className={clsx(
                          'group rounded-[13px] p-[20px_22px] border transition-all',
                          activeSection === section.id
                            ? 'border-blue bg-[#F4F8FF]'
                            : 'border-transparent hover:border-n-15 hover:bg-n-05',
                        )}
                        onClick={() => setActiveSection(section.id === activeSection ? null : section.id)}
                      >
                        <div className="flex items-start justify-between mb-[10px]">
                          <h2 className="text-[16px] font-bold text-n-100">
                            <span className="text-blue mr-2">{section.number}.</span>
                            {section.title}
                          </h2>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setRegenSection(section.id)
                              setActiveSection(section.id)
                            }}
                            className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-[12px] text-n-50 hover:text-blue transition-all px-[8px] py-[4px] rounded-[7px] hover:bg-blue-lt"
                          >
                            <RefreshCw size={12} />
                            재생성
                          </button>
                        </div>
                        <div className="text-[14px] text-n-90 leading-[1.85] whitespace-pre-wrap">
                          {renderContent(section.content)}
                        </div>

                        {/* Statute tags */}
                        {section.statutes.length > 0 && (
                          <div className="flex flex-wrap gap-[6px] mt-[14px] pt-[12px] border-t border-n-10">
                            {section.statutes.map((s, i) => (
                              <span
                                key={i}
                                className={clsx(
                                  'text-[11px] font-semibold px-[9px] py-[4px] rounded-[7px]',
                                  s.verified
                                    ? 'bg-[#E6FBF0] text-green-dk'
                                    : 'bg-[#FFF5E6] text-[#B06000]',
                                )}
                              >
                                {s.verified ? '✓' : '⚠'} {s.text}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Regen panel */}
                        {regenSection === section.id && (
                          <div
                            className="mt-[14px] pt-[14px] border-t border-blue/20"
                            onClick={e => e.stopPropagation()}
                          >
                            <div className="flex gap-[8px]">
                              <input
                                value={regenPrompt}
                                onChange={e => setRegenPrompt(e.target.value)}
                                placeholder="재생성 지시사항 (선택사항)"
                                className="flex-1 h-[38px] border border-n-20 rounded-[9px] px-[12px] text-[13px] outline-none focus:border-blue"
                                onKeyDown={e => e.key === 'Enter' && handleRegenSection(section)}
                              />
                              <Button
                                size="sm"
                                onClick={() => handleRegenSection(section)}
                                loading={regenLoading}
                                disabled={regenLoading}
                              >
                                재생성
                              </Button>
                              <button
                                onClick={() => { setRegenSection(null); setRegenPrompt('') }}
                                className="text-[12px] text-n-50 hover:text-n-90 px-2"
                              >
                                취소
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <pre className="text-[13px] text-n-90 leading-relaxed whitespace-pre-wrap font-sans">{c.draft}</pre>
              )}
            </div>

            {/* Right panel */}
            <div className="w-[280px] flex-none border-l border-border overflow-auto py-[24px] px-[20px]">
              {/* Summary */}
              <div className="mb-[24px]">
                <div className="text-[12px] font-bold text-n-50 uppercase tracking-widest mb-[12px]">검토 요약</div>
                <div className="space-y-[8px]">
                  <div className="flex items-center justify-between text-[13px]">
                    <span className="text-n-70">섹션 수</span>
                    <span className="font-semibold text-n-100">{parsed?.sections.length ?? 0}개</span>
                  </div>
                  <div className="flex items-center justify-between text-[13px]">
                    <div className="flex items-center gap-[5px] text-green-dk">
                      <CheckCircle2 size={13} />
                      <span>법령 검증 완료</span>
                    </div>
                    <span className="font-semibold text-green-dk">{verifiedCount}건</span>
                  </div>
                  {unverifiedCount > 0 && (
                    <div className="flex items-center justify-between text-[13px]">
                      <div className="flex items-center gap-[5px] text-orange">
                        <AlertTriangle size={13} />
                        <span>검증 필요</span>
                      </div>
                      <span className="font-semibold text-orange">{unverifiedCount}건</span>
                    </div>
                  )}
                  {precedentCount > 0 && (
                    <div className="flex items-center justify-between text-[13px]">
                      <div className="flex items-center gap-[5px] text-purple">
                        <BookOpen size={13} />
                        <span>판례 보강 필요</span>
                      </div>
                      <span className="font-semibold text-purple">{precedentCount}개 섹션</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Statute list */}
              {allStatutes.length > 0 && (
                <div>
                  <div className="text-[12px] font-bold text-n-50 uppercase tracking-widest mb-[12px]">인용 법령</div>
                  <div className="space-y-[6px]">
                    {allStatutes.map((s, i) => (
                      <div
                        key={i}
                        className={clsx(
                          'flex items-start gap-[7px] text-[12px] p-[8px_10px] rounded-[8px]',
                          s.verified ? 'bg-[#E6FBF0]' : 'bg-[#FFF5E6]',
                        )}
                      >
                        <span className={s.verified ? 'text-green-dk' : 'text-orange'}>{s.verified ? '✓' : '⚠'}</span>
                        <span className={clsx('leading-snug', s.verified ? 'text-green-dk' : 'text-[#B06000]')}>{s.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Precedent warning */}
              {precedentCount > 0 && (
                <div className="mt-[20px] bg-purple/10 border border-purple/20 rounded-[10px] p-[12px]">
                  <div className="text-[12px] font-bold text-purple mb-[4px]">판례 인용 안내</div>
                  <div className="text-[11px] text-purple/80 leading-relaxed">
                    AI는 판례를 직접 생성하지 않습니다. <code className="bg-purple/10 px-1 rounded">[판례 인용 필요]</code> 위치에 변호사가 직접 판례를 보강해야 합니다.
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

function renderContent(content: string) {
  return content.split('[판례 인용 필요').map((part, i) => {
    if (i === 0) return part
    const end = part.indexOf(']')
    const rest = part.slice(end + 1)
    return (
      <>
        <span className="inline-flex items-center gap-1 bg-purple/10 border border-purple/20 text-purple text-[11px] font-semibold px-[8px] py-[2px] rounded-[6px] mx-1">
          📚 판례 인용 필요 — 변호사 직접 보강
        </span>
        {rest}
      </>
    )
  })
}
