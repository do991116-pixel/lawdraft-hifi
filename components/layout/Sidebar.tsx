'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, FolderOpen, BookOpen, Settings, LogOut } from 'lucide-react'
import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import Button from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

const nav = [
  { href: '/dashboard', label: '대시보드', icon: LayoutDashboard },
  { href: '/cases', label: '내 사건', icon: FolderOpen },
  { href: '/style-library', label: '내 스타일 라이브러리', icon: BookOpen },
  { href: '/settings', label: '설정', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUserEmail(user.email ?? null)
        setUserName(user.user_metadata?.name ?? null)
      }
    })
  }, [])

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/auth/login')
    router.refresh()
  }

  const initials = userName
    ? userName.slice(0, 1)
    : userEmail
    ? userEmail.slice(0, 1).toUpperCase()
    : '?'

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
        <div className="flex items-center gap-[9px] px-3 py-[11px] rounded-[11px] mb-[10px] bg-[#E5F7EC]">
          <span className="w-2 h-2 rounded-full flex-none bg-[#00BF40]" />
          <div>
            <div className="text-xs font-semibold text-green-dk">Gemini 연결됨</div>
            <div className="text-[11px] text-[#36A45F]">gemini-1.5-pro · 베타 무료</div>
          </div>
        </div>

        <div className="flex items-center gap-[10px] px-2 py-[6px]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-[#0052CC] flex items-center justify-center text-[13px] font-bold text-white flex-none">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-semibold text-n-100 truncate">{userName || '사용자'}</div>
            <div className="text-[11px] text-n-50 truncate">{userEmail}</div>
          </div>
          <button
            onClick={handleLogout}
            className="w-7 h-7 rounded-[7px] flex items-center justify-center text-n-50 hover:text-n-90 hover:bg-n-10 transition-colors"
            title="로그아웃"
          >
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </aside>
  )
}
