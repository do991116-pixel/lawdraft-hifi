'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { KeyRound, Eye, EyeOff, CheckCircle2, Loader2, Lock, Info } from 'lucide-react'
import Button from '@/components/ui/Button'
import { saveApiKey } from '@/lib/storage'

export default function OnboardingPage() {
  const router = useRouter()
  const [apiKey, setApiKey] = useState('')
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState<'idle' | 'validating' | 'ok' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function validate() {
    if (!apiKey.trim()) return
    setStatus('validating')
    setErrorMsg('')
    try {
      const res = await fetch('/api/validate-key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: apiKey.trim() }),
      })
      const data = await res.json()
      if (data.valid) {
        setStatus('ok')
      } else {
        setStatus('error')
        setErrorMsg(data.error || '검증 실패')
      }
    } catch {
      setStatus('error')
      setErrorMsg('네트워크 오류가 발생했습니다.')
    }
  }

  function connect() {
    saveApiKey(apiKey.trim())
    router.push('/dashboard')
  }

  const validated = status === 'ok'

  return (
    <div className="min-h-screen bg-n-05 flex flex-col">
      {/* Header */}
      <div className="h-[60px] border-b border-border2 bg-white flex items-center px-8 gap-[10px]">
        <div className="w-[25px] h-[25px] rounded-[7px] bg-blue flex items-center justify-center text-white text-[13px] font-bold">L</div>
        <span className="text-[16px] font-bold text-n-100">LawDraft</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        {/* Stepper */}
        <div className="flex items-center mb-11">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center">
              <CheckCircle2 size={14} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[13px] font-semibold text-n-90">약관 동의</span>
          </div>
          <div className="w-12 h-[2px] bg-blue mx-3 rounded-full" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue flex items-center justify-center text-white text-xs font-bold">2</div>
            <span className="text-[13px] font-bold text-n-100">API 키 연결</span>
          </div>
          <div className="w-12 h-[2px] bg-[#E4E4E5] mx-3 rounded-full" />
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-n-15 flex items-center justify-center text-n-50 text-xs font-bold">3</div>
            <span className="text-[13px] font-semibold text-n-50">시작</span>
          </div>
        </div>

        {/* Card */}
        <div className="w-[580px] bg-white border border-border rounded-[20px] shadow-[0_8px_28px_rgba(23,23,23,.06)] p-10">
          <div className="w-12 h-12 rounded-[13px] bg-blue-lt flex items-center justify-center mb-[18px]">
            <KeyRound size={24} className="text-blue" />
          </div>
          <h2 className="text-[24px] font-bold text-n-100 tracking-[-0.023em] mb-2">Gemini API 키 연결</h2>
          <p className="text-[14px] leading-[1.65] text-n-70 mb-[26px]">
            베타는 회원님의 Google AI Studio 키로 직접 호출합니다. 키는 브라우저에만 저장되며 서버에 보관되지 않습니다.
          </p>

          {/* Info box */}
          <div className="flex gap-3 bg-[#F7FAFF] border border-[#E1ECFC] rounded-[13px] p-[15px_16px] mb-[26px]">
            <Info size={20} className="text-blue flex-none mt-[1px]" />
            <div>
              <div className="text-[13px] font-semibold text-[#0054D6] mb-[3px]">키 발급이 처음이신가요?</div>
              <div className="text-[13px] leading-[1.55] text-n-90">
                Google AI Studio → API keys → Create key 에서 발급하세요.{' '}
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer"
                  className="text-blue font-semibold underline underline-offset-2">
                  발급 바로가기 →
                </a>
              </div>
            </div>
          </div>

          {/* Input */}
          <label className="block text-[13px] font-semibold text-n-90 mb-2">API 키</label>
          <div className={`flex items-center gap-[10px] h-[50px] border-[1.5px] rounded-[12px] px-[14px] mb-[10px] bg-white transition-all ${
            status === 'error' ? 'border-[#FF4242] shadow-[0_0_0_3px_rgba(255,66,66,.1)]' :
            status === 'ok' ? 'border-green shadow-[0_0_0_3px_rgba(0,191,64,.1)]' :
            'border-blue shadow-[0_0_0_3px_rgba(0,102,255,.1)]'
          }`}>
            <KeyRound size={18} className="text-n-50 flex-none" />
            <input
              type={show ? 'text' : 'password'}
              value={apiKey}
              onChange={e => { setApiKey(e.target.value); setStatus('idle') }}
              onKeyDown={e => e.key === 'Enter' && validate()}
              placeholder="AIzaSy..."
              className="flex-1 bg-transparent text-[15px] text-n-100 outline-none font-mono tracking-wider placeholder:text-n-30 placeholder:font-sans placeholder:tracking-normal"
            />
            <button onClick={() => setShow(v => !v)} className="text-n-50 hover:text-n-90">
              {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Status message */}
          {status === 'ok' && (
            <div className="flex items-center gap-[6px] mb-7">
              <CheckCircle2 size={15} className="text-green" />
              <span className="text-[12px] font-semibold text-green-dk">유효성 검증 완료 · 테스트 호출 성공 (gemini-1.5-pro)</span>
            </div>
          )}
          {status === 'error' && (
            <div className="text-[12px] text-[#CC0000] mb-7 font-medium">{errorMsg}</div>
          )}
          {(status === 'idle' || status === 'validating') && <div className="mb-7" />}

          {/* Buttons */}
          {!validated ? (
            <Button
              fullWidth
              size="lg"
              onClick={validate}
              loading={status === 'validating'}
              disabled={!apiKey.trim() || status === 'validating'}
            >
              {status === 'validating' ? '검증 중…' : 'API 키 검증하기'}
            </Button>
          ) : (
            <Button fullWidth size="lg" onClick={connect}>
              연결하고 시작하기
            </Button>
          )}

          {/* Security note */}
          <div className="flex items-center gap-[6px] justify-center mt-[18px]">
            <Lock size={14} className="text-n-50" />
            <span className="text-[12px] text-n-50">브라우저 localStorage 저장 · 서버 전송 시 즉시 삭제 · 로그 미기록</span>
          </div>
        </div>
      </div>
    </div>
  )
}
