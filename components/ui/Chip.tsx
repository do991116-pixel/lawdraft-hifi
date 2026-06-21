'use client'
import { clsx } from 'clsx'

interface Props {
  label: string
  active?: boolean
  size?: 'sm' | 'md'
  onClick?: () => void
}

export default function Chip({ label, active = false, size = 'md', onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-150 whitespace-nowrap',
        size === 'sm' ? 'h-8 px-[14px] text-[13px]' : 'h-[38px] px-4 text-[14px]',
        active
          ? 'bg-[#0066FF] text-white border-none'
          : 'bg-white text-[#37383C] border-[1.5px] border-[#DBDCDF] hover:border-[#989BA2]',
      )}
    >
      {label}
    </button>
  )
}
