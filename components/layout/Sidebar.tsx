'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FolderOpen, BookOpen, Settings, FileText } from 'lucide-react'
import { clsx } from 'clsx'
import Button from '@/components/ui/Button'
import { getApiKey } from '@/lib/storage'
import { useEffect, useState } from 'react'

const nav = [
  { href: '/dashboard', label: '대시보드', icon: LayoutDashboard },
  { href: '/cases', label: '내 사건', icon: FolderOpen },
  { href: '/style-library', label: '내 스타일 라이브러리', icon: BookOpen },
  { href: '/settings', label: '설정', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [hasKey, setHasKey] = useState(false)

  useEffect(() => {
    setHasKey(!!getApiKey())
  }, [])

  return (
    <aside className="w-[248px] flex-none border-r border-border2 bg-n-05 flex flex-col p-[20px_14px]">
      <div className="flex items-center gap-[9px] px-2 py-[6px] mb-[22px]">
        <div className="w-[27px] h-[27px] rounded-[8px] bg-blue flex items-center justify-center text-white text-[13px] font-bold">L</div>
        <span className="text-[17px] font-bold text-n-100">LawDraft</span>
      </div>

      <div className="mb-[18px]">
        <Link href="/cases/new">
          <Button fullWidth>＋&nbsp;&nbsp;새 사건 작성</Button>
        </Link>
      </div>

      <nav className="flex flex-col gap-[2px]">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex items-center gap-[11px] h-[42px] px-3 rounded-[10px] transition-colors',
                active ? 'bg-blue-lt' : 'hover:bg-[#F2F3F4]',
              )}
            >
              <Icon size={19} className={active ? 'text-blue' : 'text-n-70'} />
              <span className={clsx('text-[14px]', active ? 'font-semibold text-blue' : 'font-medium text-n-90')}>
                {label}
              </span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto">
        <div className={clsx(
          'flex items-center gap-[9px] px-3 py-[11px] rounded-[11px] mb-[10px]',
          hasKey ? 'bg-[#E5F7EC]' : 'bg-[#F4F4F5]',
        )}>
          <span className={clsx('w-2 h-2 rounded-full flex-none', hasKey ? 'bg-[#00BF40]' : 'bg-[#DBDCDF]')} />
          <div>
            <div className={clsx('text-xs font-semibold', hasKey ? 'text-green-dk' : 'text-n-50')}>
              {hasKey ? 'Gemini 연결됨' : 'API 키 미연결'}
            </div>
            {hasKey && <div className="text-[11px] text-[#36A45F]">gemini-1.5-pro</div>}
          </div>
        </div>

        <div className="flex items-center gap-[10px] px-2 py-[6px]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A8C7F0] to-[#7FA8E8] flex items-center justify-center text-[13px] font-bold text-white">
            <FileText size={14} />
          </div>
          <div>
            <div className="text-[13px] font-semibold text-n-100">LawDraft 사용자</div>
            <div className="text-[11px] text-n-50">Beta</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
