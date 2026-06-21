'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Mail, Lock, Eye, EyeOff, User, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const pwMatch = password === passwordConfirm
  const canSubmit = name.trim() && email.trim() && password.length >= 8 && pwMatch

  async function handleSignup() {
    if (!canSubmit) return
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { error: err } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { name: name.trim() },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (err) {
      setError(
        err.message.includes('already registered')
          ? '이미 가입된 이메일입니다. 로그인해주세요.'
          : err.message,
      )
      setLoading(false)
    } else {
      setDone(true)
    }
  }

  if (done) {
    return (
      <div className="min-h-screen bg-n-05 flex flex-col">
        <div className="h-[60px] border-b border-border2 bg-white flex items-center px-8 gap-[10px]">
          <div className="w-[25px] h-[25px] rounded-[7px] bg-blue flex items-center justify-center text-white text-[13px] font-bold">L</div>
          <span className="text-[16px] font-bold text-n-100">LawDraft</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <div className="w-[440px] bg-white border border-border rounded-[20px] shadow-[0_8px_28px_rgba(23,23,23,.06)] p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-[#E6FBF0] flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={28} className="text-green-dk" />
            </div>
            <h2 className="text-[22px] font-bold text-n-100 mb-3">가입 확인 이메일을 보냈습니다</h2>
            <p className="text-[14px] text-n-70 leading-relaxed mb-6">
              <strong className="text-n-90">{email}</strong>으로 보낸 이메일의 링크를 클릭하면<br />바로 이용하실 수 있습니다.
            </p>
            <Link href="/auth/login">
              <Button fullWidth size="md" variant="outlined" color="assistive">로그인 페이지로</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-n-05 flex flex-col">
      <div className="h-[60px] border-b border-border2 bg-white flex items-center px-8 gap-[10px]">
        <div className="w-[25px] h-[25px] rounded-[7px] bg-blue flex items-center justify-center text-white text-[13px] font-bold">L</div>
        <span className="text-[16px] font-bold text-n-100">LawDraft</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        <div className="w-[440px] bg-white border border-border rounded-[20px] shadow-[0_8px_28px_rgba(23,23,23,.06)] p-10">
          <h2 className="text-[24px] font-bold text-n-100 tracking-[-0.023em] mb-2">회원가입</h2>
          <p className="text-[14px] text-n-70 mb-[28px]">베타 기간 동안 무료로 이용하실 수 있습니다.</p>

          <div className="space-y-[14px]">
            <div>
              <label className="block text-[13px] font-semibold text-n-90 mb-[7px]">이름</label>
              <div className="flex items-center gap-[10px] h-[50px] border-[1.5px] border-n-20 rounded-[12px] px-[14px] focus-within:border-blue focus-within:shadow-[0_0_0_3px_rgba(0,102,255,.1)] transition-all">
                <User size={17} className="text-n-50 flex-none" />
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="홍길동"
                  className="flex-1 text-[15px] text-n-100 outline-none bg-transparent placeholder:text-n-30"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-n-90 mb-[7px]">이메일</label>
              <div className="flex items-center gap-[10px] h-[50px] border-[1.5px] border-n-20 rounded-[12px] px-[14px] focus-within:border-blue focus-within:shadow-[0_0_0_3px_rgba(0,102,255,.1)] transition-all">
                <Mail size={17} className="text-n-50 flex-none" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="flex-1 text-[15px] text-n-100 outline-none bg-transparent placeholder:text-n-30"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-n-90 mb-[7px]">비밀번호 <span className="font-normal text-n-50">8자 이상</span></label>
              <div className="flex items-center gap-[10px] h-[50px] border-[1.5px] border-n-20 rounded-[12px] px-[14px] focus-within:border-blue focus-within:shadow-[0_0_0_3px_rgba(0,102,255,.1)] transition-all">
                <Lock size={17} className="text-n-50 flex-none" />
                <input
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="flex-1 text-[15px] text-n-100 outline-none bg-transparent placeholder:text-n-30"
                />
                <button onClick={() => setShowPw(v => !v)} className="text-n-50 hover:text-n-90">
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-n-90 mb-[7px]">비밀번호 확인</label>
              <div className={`flex items-center gap-[10px] h-[50px] border-[1.5px] rounded-[12px] px-[14px] transition-all focus-within:shadow-[0_0_0_3px_rgba(0,102,255,.1)] ${
                passwordConfirm && !pwMatch ? 'border-[#FF4242]' : 'border-n-20 focus-within:border-blue'
              }`}>
                <Lock size={17} className="text-n-50 flex-none" />
                <input
                  type={showPw ? 'text' : 'password'}
                  value={passwordConfirm}
                  onChange={e => setPasswordConfirm(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSignup()}
                  placeholder="••••••••"
                  className="flex-1 text-[15px] text-n-100 outline-none bg-transparent placeholder:text-n-30"
                />
              </div>
              {passwordConfirm && !pwMatch && (
                <p className="text-[12px] text-[#CC0000] mt-[5px]">비밀번호가 일치하지 않습니다.</p>
              )}
            </div>
          </div>

          {error && (
            <div className="mt-[14px] text-[13px] text-[#CC0000] bg-[#FFF0F0] border border-[#FFCCCC] rounded-[10px] px-[14px] py-[10px]">
              {error}
            </div>
          )}

          <Button fullWidth size="lg" onClick={handleSignup} loading={loading} disabled={!canSubmit || loading} className="mt-[22px]">
            회원가입
          </Button>

          <div className="text-center mt-[20px] text-[13px] text-n-50">
            이미 계정이 있으신가요?{' '}
            <Link href="/auth/login" className="text-blue font-semibold hover:underline">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
