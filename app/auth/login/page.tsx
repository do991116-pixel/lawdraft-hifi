'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import Button from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin() {
    if (!email.trim() || !password) return
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error: err } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })
    if (err) {
      setError(
        err.message.includes('Invalid login')
          ? '이메일 또는 비밀번호가 올바르지 않습니다.'
          : err.message.includes('Email not confirmed')
          ? '이메일 인증이 필요합니다. 받은 편지함을 확인해주세요.'
          : err.message,
      )
      setLoading(false)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-n-05 flex flex-col">
      <div className="h-[60px] border-b border-border2 bg-white flex items-center px-8 gap-[10px]">
        <div className="w-[25px] h-[25px] rounded-[7px] bg-blue flex items-center justify-center text-white text-[13px] font-bold">L</div>
        <span className="text-[16px] font-bold text-n-100">LawDraft</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-[440px] bg-white border border-border rounded-[20px] shadow-[0_8px_28px_rgba(23,23,23,.06)] p-10">
          <h2 className="text-[24px] font-bold text-n-100 tracking-[-0.023em] mb-2">로그인</h2>
          <p className="text-[14px] text-n-70 mb-[28px]">LawDraft에 오신 것을 환영합니다.</p>

          <div className="space-y-[14px]">
            <div>
              <label className="block text-[13px] font-semibold text-n-90 mb-[7px]">이메일</label>
              <div className="flex items-center gap-[10px] h-[50px] border-[1.5px] border-n-20 rounded-[12px] px-[14px] focus-within:border-blue focus-within:shadow-[0_0_0_3px_rgba(0,102,255,.1)] transition-all">
                <Mail size={17} className="text-n-50 flex-none" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                  placeholder="name@example.com"
                  className="flex-1 text-[15px] text-n-100 outline-none bg-transparent placeholder:text-n-30"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-n-90 mb-[7px]">비밀번호</label>
              <div className="flex items-center gap-[10px] h-[50px] border-[1.5px] border-n-20 rounded-[12px] px-[14px] focus-within:border-blue focus-within:shadow-[0_0_0_3px_rgba(0,102,255,.1)] transition-all">
                <Lock size={17} className="text-n-50 flex-none" />
                <input
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleLogin()}
                  placeholder="••••••••"
                  className="flex-1 text-[15px] text-n-100 outline-none bg-transparent placeholder:text-n-30"
                />
                <button onClick={() => setShowPw(v => !v)} className="text-n-50 hover:text-n-90">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="mt-[14px] text-[13px] text-[#CC0000] bg-[#FFF0F0] border border-[#FFCCCC] rounded-[10px] px-[14px] py-[10px]">
              {error}
            </div>
          )}

          <Button fullWidth size="lg" onClick={handleLogin} loading={loading} disabled={!email.trim() || !password || loading} className="mt-[22px]">
            로그인
          </Button>

          <div className="text-center mt-[20px] text-[13px] text-n-50">
            계정이 없으신가요?{' '}
            <Link href="/auth/signup" className="text-blue font-semibold hover:underline">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
