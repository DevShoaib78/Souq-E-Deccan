import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors from brandguidelines.json
        maroon: {
          DEFAULT: '#5B1F1F',
          50: '#F5E8E8',
          100: '#E8CFCF',
          200: '#D4A3A3',
          300: '#BC7474',
          400: '#8B4545',
          500: '#5B1F1F',
          600: '#4A1919',
          700: '#3A1313',
          800: '#2A0E0E',
          900: '#1A0909',
        },
        gold: {
          DEFAULT: '#C9A24D',
          50: '#FCF8EE',
          100: '#F7EDCF',
          200: '#EDD9A0',
          300: '#DEC470',
          400: '#C9A24D',
          500: '#B18A35',
          600: '#8C6D2A',
          700: '#67501F',
          800: '#433414',
          900: '#1E1709',
        },
        sand: {
          DEFAULT: '#F5EEDC',
          50: '#FDFCF8',
          100: '#FAF7EF',
          200: '#F5EEDC',
          300: '#E8DCBE',
          400: '#D9C89D',
          500: '#C9B47C',
          600: '#B19A57',
          700: '#8A7841',
          800: '#5E512C',
          900: '#322B17',
        },
        teal: {
          DEFAULT: '#2E7C7A',
          50: '#E8F4F3',
          100: '#C6E5E4',
          200: '#91CCCB',
          300: '#5CB2B0',
          400: '#3A9593',
          500: '#2E7C7A',
          600: '#256564',
          700: '#1C4D4C',
          800: '#133534',
          900: '#0A1C1C',
        },
        coffee: {
          DEFAULT: '#2A1A14',
          50: '#F3EFED',
          100: '#E0D6D1',
          200: '#C2ADA3',
          300: '#A38474',
          400: '#7A5C4A',
          500: '#503C30',
          600: '#3D2D24',
          700: '#2A1A14',
          800: '#1A100D',
          900: '#0D0806',
        },
      },
      fontFamily: {
        heading: ['var(--font-cormorant)', 'Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-lato)', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'pattern-moroccan': `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A24D' fill-opacity='0.08'%3E%3Cpath d='M30 30l15-15v30L30 30zm0 0l-15 15V15l15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        'pattern-arch': `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M40 0c22.091 0 40 17.909 40 40v40H0V40C0 17.909 17.909 0 40 0z' fill='%23C9A24D' fill-opacity='0.04'/%3E%3C/g%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
}

export default config



