'use client'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes } from 'react'

type Variant = 'solid' | 'outlined' | 'ghost'
type Color = 'primary' | 'assistive' | 'danger'
type Size = 'sm' | 'md' | 'lg'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  color?: Color
  size?: Size
  loading?: boolean
  fullWidth?: boolean
}

const base = 'inline-flex items-center justify-center font-semibold whitespace-nowrap rounded-[10px] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none'

const sizes: Record<Size, string> = {
  sm: 'h-[38px] px-4 text-[13px] rounded-[9px]',
  md: 'h-[44px] px-[18px] text-[14px] rounded-[10px]',
  lg: 'h-[52px] px-[22px] text-[15px] rounded-[12px]',
}

const variants: Record<Variant, Record<Color, string>> = {
  solid: {
    primary:   'bg-[#0066FF] text-white hover:bg-[#0052CC] active:bg-[#003EAA]',
    assistive: 'bg-[#171719] text-white hover:bg-[#37383C]',
    danger:    'bg-[#FF4242] text-white hover:bg-[#CC0000]',
  },
  outlined: {
    primary:   'bg-white text-[#0066FF] border-[1.5px] border-[#0066FF] hover:bg-[#EAF2FE]',
    assistive: 'bg-white text-[#37383C] border-[1.5px] border-[#DBDCDF] hover:bg-[#F4F4F5]',
    danger:    'bg-white text-[#FF4242] border-[1.5px] border-[#FF4242] hover:bg-[#FFF0F0]',
  },
  ghost: {
    primary:   'text-[#0066FF] hover:bg-[#EAF2FE]',
    assistive: 'text-[#37383C] hover:bg-[#F4F4F5]',
    danger:    'text-[#FF4242] hover:bg-[#FFF0F0]',
  },
}

export default function Button({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  children,
  className,
  disabled,
  ...rest
}: Props) {
  return (
    <button
      className={clsx(base, sizes[size], variants[variant][color], fullWidth && 'w-full', className)}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  )
}
