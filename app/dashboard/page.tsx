'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FileText, ChevronRight, Search } from 'lucide-react'
import Sidebar from '@/components/layout/Sidebar'
import Badge from '@/components/ui/Badge'
import Chip from '@/components/ui/Chip'
import { getCases } from '@/lib/db'
import { type Case, type CaseStatus, statusLabel, timeAgo } from '@/lib/storage'
import { clsx } from 'clsx'

const statusTone: Record<CaseStatus, 'orange' | 'purple' | 'green' | 'neutral'> = {
  review: 'orange',
  generating: 'purple',
  done: 'green',
  draft: 'neutral',
}

type Filter = 'all' | 'review' | 'generating' | 'done' | 'draft'
const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'review', label: '검토 필요' },
  { key: 'generating', label: '작성 중' },
  { key: 'done', label: '완료' },
]

export default function DashboardPage() {
  const [cases, setCases] = useState<Case[]>([])
  const [filter, setFilter] = useState<Filter>('all')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCases().then(data => { setCases(data); setLoading(false) })
  }, [])

  const filtered = cases.filter(c => {
    if (filter !== 'all' && c.status !== filter) return false
    if (search && !c.name.includes(search) && !c.prompt.includes(search)) return false
    return true
  })

  const reviewCount = cases.filter(c => c.status === 'review').length

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="px-[34px] pt-[30px] pb-0">
          <div className="flex items-end justify-between mb-[26px]">
            <div>
              <h2 className="text-[25px] font-bold text-n-100 tracking-[-0.023em] mb-[5px]">대시보드</h2>
              <p className="text-[14px] text-n-70">
                진행 중인 사건 {cases.length}건 · 검토 필요 {reviewCount}건
              </p>
            </div>
            <div className="flex items-center h-[42px] w-[260px] border border-n-20 rounded-[11px] px-[13px] gap-[9px]">
              <Search size={17} className="text-n-50" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="사건 검색"
                className="flex-1 text-[14px] outline-none placeholder:text-[#B0B3B8] bg-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[15px] mb-0">
            <div className="border border-border rounded-[16px] p-[20px_22px]">
              <div className="text-[13px] text-n-70 mb-3">전체 사건</div>
              <div className="flex items-baseline gap-[6px]">
                <span className="text-[30px] font-bold text-n-100 tracking-[-0.02em]">{cases.length}</span>
                <span className="text-[13px] text-n-70">건</span>
              </div>
              <div className="text-[12px] text-blue font-semibold mt-[9px]">초안 생성 완료 {cases.filter(c=>c.draft).length}건</div>
            </div>
            <div className="border border-border rounded-[16px] p-[20px_22px]">
              <div className="text-[13px] text-n-70 mb-3">검증 대기</div>
              <div className="flex items-baseline gap-[6px]">
                <span className={clsx('text-[30px] font-bold tracking-[-0.02em]', reviewCount > 0 ? 'text-orange' : 'text-n-100')}>{reviewCount}</span>
                <span className="text-[13px] text-n-70">건 인용 확인 필요</span>
              </div>
              {reviewCount > 0
                ? <div className="text-[12px] text-orange font-semibold mt-[9px]">⚠ 법령 인용 검토 미완료</div>
                : <div className="text-[12px] text-green-dk font-semibold mt-[9px]">✓ 모두 검증 완료</div>
              }
            </div>
            <div className="border border-border rounded-[16px] p-[20px_22px]">
              <div className="text-[13px] text-n-70 mb-3">서면 유형</div>
              <div className="flex flex-wrap gap-[6px] mt-1">
                {['의견서','항소이유서','고소장','준비서면','답변서'].map(t => {
                  const count = cases.filter(c=>c.docType===t).length
                  return count > 0 ? (
                    <span key={t} className="text-[11px] font-semibold bg-blue-lt text-blue px-[9px] py-[4px] rounded-[7px]">{t} {count}</span>
                  ) : null
                })}
                {cases.length === 0 && <span className="text-[12px] text-n-50">사건 없음</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 px-[34px] py-[24px] overflow-auto">
          <div className="flex items-center gap-[10px] mb-[14px]">
            <h3 className="text-[17px] font-bold text-n-100 tracking-[-0.01em]">사건 목록</h3>
            <div className="flex gap-[7px] ml-[6px]">
              {filters.map(f => (
                <Chip key={f.key} label={f.label} size="sm" active={filter === f.key} onClick={() => setFilter(f.key)} />
              ))}
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-[200px]">
              <div className="w-8 h-8 border-2 border-blue border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="border border-dashed border-n-20 rounded-[16px] p-[48px] text-center">
              <FileText size={36} className="text-n-30 mx-auto mb-3" />
              <div className="text-[15px] font-semibold text-n-70 mb-2">
                {cases.length === 0 ? '아직 사건이 없습니다' : '조건에 맞는 사건이 없습니다'}
              </div>
              <p className="text-[13px] text-n-50 mb-5">새 사건 작성 버튼으로 첫 초안을 생성해보세요.</p>
              <Link href="/cases/new">
                <span className="text-[13px] font-semibold text-blue underline underline-offset-2">새 사건 작성 →</span>
              </Link>
            </div>
          ) : (
            <div className="border border-border rounded-[16px] overflow-hidden">
              {filtered.map((c, i) => (
                <Link key={c.id} href={`/cases/${c.id}`}>
                  <div className={clsx(
                    'flex items-center p-[17px_20px] cursor-pointer hover:bg-n-05 transition-colors',
                    i < filtered.length - 1 && 'border-b border-[#F2F2F3]',
                  )}>
                    <div className="w-[42px] h-[42px] rounded-[11px] bg-blue-lt flex items-center justify-center flex-none mr-[15px]">
                      <FileText size={20} className="text-blue" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[15px] font-semibold text-n-100 mb-[3px] truncate">{c.name}</div>
                      <div className="text-[12px] text-n-50">{c.docType} · {timeAgo(c.updatedAt)}</div>
                    </div>
                    <Badge label={statusLabel(c.status)} tone={statusTone[c.status]} />
                    <ChevronRight size={18} className="text-n-30 ml-[14px]" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
