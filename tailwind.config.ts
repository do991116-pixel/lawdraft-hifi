import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pretendard JP"', '"Pretendard"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        blue: {
          DEFAULT: '#0066FF',
          lt: '#EAF2FE',
          dk: '#0052CC',
        },
        green: {
          DEFAULT: '#00BF40',
          lt: '#E5F7EC',
          dk: '#0E8A3E',
        },
        orange: {
          DEFAULT: '#E8820C',
          lt: '#FCF3E6',
        },
        purple: {
          DEFAULT: '#6541F2',
          lt: '#F0ECFE',
        },
        n: {
          100: '#171719',
          90: '#37383C',
          70: '#70737C',
          50: '#989BA2',
          30: '#C2C4C8',
          20: '#DBDCDF',
          15: '#EDEDEF',
          10: '#F4F4F5',
          '05': '#FAFAFB',
        },
        border: '#ECECEE',
        border2: '#EFEFF1',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(23,23,23,.1)',
        modal: '0 12px 36px rgba(23,23,23,.08)',
      },
    },
  },
  plugins: [],
}
export default config
