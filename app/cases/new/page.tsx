'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import Sidebar from '@/components/layout/Sidebar'
import Button from '@/components/ui/Button'
import Chip from '@/components/ui/Chip'
import { createCase, updateCase } from '@/lib/db'
import { type DocType } from '@/lib/storage'

const DOC_TYPES: DocType[] = ['의견서', '항소이유서', '고소장', '준비서면', '답변서']

export default function NewCasePage() {
  const router = useRouter()
  const [docType, setDocType] = useState<DocType | null>(null)
  const [caseName, setCaseName] = useState('')
  const [prompt, setPrompt] = useState('')
  const [instructions, setInstructions] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState('')

  const canGenerate = !!docType && caseName.trim().length > 0 && prompt.trim().length > 0

  async function handleGenerate() {
    if (!canGenerate) return
    setGenerating(true)
    setError('')

    let newCase
    try {
      newCase = await createCase(caseName.trim(), docType!, prompt.trim(), instructions.trim() || undefined)
      await updateCase(newCase.id, { status: 'generating' })

      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docType: docType!,
          prompt: prompt.trim(),
          additionalInstructions: instructions.trim() || undefined,
        }),
      })

      if (!res.ok || !res.body) throw new Error('생성 실패')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let draft = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        draft += decoder.decode(value, { stream: true })
      }

      await updateCase(newCase.id, { draft, status: 'review' })
      router.push(`/cases/${newCase.id}`)
    } catch (e) {
      setError(e instanceof Error ? e.message : '초안 생성 중 오류가 발생했습니다.')
      if (newCase) await updateCase(newCase.id, { status: 'draft' })
      setGenerating(false)
    }
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto px-[34px] py-[30px]">
          <div className="flex items-center gap-3 mb-[28px]">
            <Link href="/dashboard">
              <button className="w-8 h-8 rounded-[9px] border border-n-20 flex items-center justify-center hover:bg-n-05 transition-colors">
                <ArrowLeft size={16} className="text-n-70" />
              </button>
            </Link>
            <div>
              <h2 className="text-[22px] font-bold text-n-100 tracking-[-0.02em]">새 사건 작성</h2>
              <p className="text-[13px] text-n-50">AI가 법률 서면 초안을 생성합니다</p>
            </div>
          </div>

          <div className="max-w-[720px] space-y-[22px]">
            <div className="border border-border rounded-[16px] p-[22px]">
              <label className="block text-[14px] font-bold text-n-100 mb-[14px]">서면 유형 선택</label>
              <div className="flex flex-wrap gap-[8px]">
                {DOC_TYPES.map(t => (
                  <Chip key={t} label={t} size="md" active={docType === t} onClick={() => setDocType(t)} />
                ))}
              </div>
            </div>

            <div className="border border-border rounded-[16px] p-[22px]">
              <label className="block text-[14px] font-bold text-n-100 mb-[10px]">
                사건명
                <span className="text-[12px] font-normal text-n-50 ml-2">내부 관리용 이름</span>
              </label>
              <input
                value={caseName}
                onChange={e => setCaseName(e.target.value)}
                placeholder="예: 홍길동 임금체불 사건"
                className="w-full h-[44px] border border-n-20 rounded-[11px] px-[14px] text-[14px] text-n-100 placeholder:text-n-30 outline-none focus:border-blue focus:shadow-[0_0_0_3px_rgba(0,102,255,.1)] transition-all"
              />
            </div>

            <div className="border border-border rounded-[16px] p-[22px]">
              <label className="block text-[14px] font-bold text-n-100 mb-[4px]">사건 개요 및 작성 요청</label>
              <p className="text-[12px] text-n-50 mb-[10px]">당사자 정보, 핵심 사실관계, 주장하려는 법적 논지를 자세히 작성할수록 품질이 높아집니다.</p>
              <textarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder={`예시:\n의뢰인 홍길동(원고)은 2023. 3. 1.부터 2024. 2. 29.까지 피고 주식회사 ○○에서 근무하였습니다.\n피고는 최저임금에 미달하는 월 180만원만 지급하였으며, 퇴직금도 지급하지 않았습니다.\n근로기준법 위반에 기한 임금 차액 및 퇴직금 지급을 구하는 의견서를 작성해 주세요.`}
                rows={8}
                className="w-full border border-n-20 rounded-[11px] px-[14px] py-[12px] text-[14px] text-n-100 placeholder:text-n-30 outline-none focus:border-blue focus:shadow-[0_0_0_3px_rgba(0,102,255,.1)] transition-all resize-none leading-relaxed"
              />
              <div className="text-right text-[12px] text-n-40 mt-[6px]">{prompt.length}자</div>
            </div>

            <div className="border border-border rounded-[16px] overflow-hidden">
              <button
                onClick={() => setShowAdvanced(v => !v)}
                className="w-full flex items-center justify-between p-[18px_22px] hover:bg-n-05 transition-colors"
              >
                <span className="text-[14px] font-bold text-n-100">추가 지시사항 (선택)</span>
                {showAdvanced ? <ChevronUp size={16} className="text-n-50" /> : <ChevronDown size={16} className="text-n-50" />}
              </button>
              {showAdvanced && (
                <div className="px-[22px] pb-[22px] border-t border-n-10">
                  <p className="text-[12px] text-n-50 mb-[10px] mt-[14px]">문체, 강조할 논점, 분량 등 특별한 요청사항을 작성하세요.</p>
                  <textarea
                    value={instructions}
                    onChange={e => setInstructions(e.target.value)}
                    placeholder="예: 간결하고 논리적인 문체로, 손해배상액 계산 부분을 상세하게 작성해 주세요."
                    rows={4}
                    className="w-full border border-n-20 rounded-[11px] px-[14px] py-[12px] text-[14px] text-n-100 placeholder:text-n-30 outline-none focus:border-blue focus:shadow-[0_0_0_3px_rgba(0,102,255,.1)] transition-all resize-none"
                  />
                </div>
              )}
            </div>

            <div className="bg-[#FFFBF0] border border-[#F5D76A] rounded-[13px] p-[14px_16px] text-[13px] text-[#7A5C00] leading-relaxed">
              <strong>⚠ 판례 인용 안내:</strong> AI는 판례를 직접 인용하지 않습니다. 판례가 필요한 위치에는 <code className="bg-[#FFF3CC] px-1 rounded text-[12px]">[판례 인용 필요 — 변호사 직접 보강]</code> 표시가 삽입됩니다. 법령 인용은 ✓VERIFIED / ⚠UNVERIFIED로 구분됩니다.
            </div>

            {error && (
              <div className="bg-[#FFF0F0] border border-[#FFCCCC] rounded-[13px] p-[14px_16px] text-[13px] text-[#CC0000]">{error}</div>
            )}

            <div className="pb-[40px]">
              <Button size="lg" fullWidth onClick={handleGenerate} loading={generating} disabled={!canGenerate || generating}>
                {generating ? 'AI 초안 생성 중…' : '초안 생성하기'}
              </Button>
              {!canGenerate && (
                <p className="text-[12px] text-n-40 text-center mt-[8px]">서면 유형, 사건명, 사건 개요를 모두 입력해야 합니다</p>
              )}
            </div>
          </div>
        </div>

        {generating && (
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-50">
            <div className="flex flex-col items-center gap-5">
              <div className="relative w-[64px] h-[64px]">
                <div className="absolute inset-0 rounded-full border-[3px] border-n-10" />
                <div className="absolute inset-0 rounded-full border-[3px] border-blue border-t-transparent animate-spin" />
              </div>
              <div className="text-center">
                <div className="text-[17px] font-bold text-n-100 mb-[5px]">AI가 초안을 작성하고 있습니다</div>
                <div className="text-[13px] text-n-50">법률 근거 분석 및 서면 구조화 중…</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
