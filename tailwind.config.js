/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#081621',
          900: '#0D2230',
          800: '#123245',
          700: '#1A445C',
          600: '#295A74',
          500: '#3C7391',
          400: '#6C94AA',
        },
        sand: {
          50: '#FDFBF6',
          100: '#FAF5EA',
          200: '#F3E9D4',
          300: '#E8D9B8',
          400: '#D8C398',
        },
        sage: {
          400: '#9CBFB2',
          500: '#79A496',
          600: '#5E8878',
          700: '#486B5E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(8,22,33,0.06), 0 12px 32px -8px rgba(8,22,33,0.18)',
        lifted: '0 2px 4px rgba(8,22,33,0.08), 0 24px 48px -12px rgba(8,22,33,0.28)',
        inset: 'inset 0 1px 0 rgba(255,255,255,0.4)',
      },
      maxWidth: {
        content: '1240px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.23, 1, 0.32, 1) both',
        'fade-in': 'fade-in 0.35s cubic-bezier(0.23, 1, 0.32, 1) both',
        'scale-in': 'scale-in 0.25s cubic-bezier(0.23, 1, 0.32, 1) both',
        drift: 'drift 2.2s cubic-bezier(0.77, 0, 0.175, 1) infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)',
        drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
    },
  },
  plugins: [],
}

