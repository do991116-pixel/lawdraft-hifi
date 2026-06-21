import { clsx } from 'clsx'

type Tone = 'blue' | 'green' | 'orange' | 'purple' | 'neutral' | 'red'

const tones: Record<Tone, string> = {
  blue:    'bg-[#EAF2FE] text-[#0066FF]',
  green:   'bg-[#E5F7EC] text-[#0E8A3E]',
  orange:  'bg-[#FCF3E6] text-[#9A6207]',
  purple:  'bg-[#F0ECFE] text-[#6541F2]',
  neutral: 'bg-[#F4F4F5] text-[#70737C]',
  red:     'bg-[#FFEEEE] text-[#CC0000]',
}

export default function Badge({ label, tone = 'neutral', pill = false }: {
  label: string
  tone?: Tone
  pill?: boolean
}) {
  return (
    <span className={clsx(
      'inline-flex items-center text-xs font-semibold',
      pill ? 'px-[13px] py-[7px] rounded-full' : 'px-[11px] py-[5px] rounded-[8px]',
      tones[tone],
    )}>
      {label}
    </span>
  )
}
