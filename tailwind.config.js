/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand identity — warm premium gold, gold surfaces, ink text
        brand: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#d4a838', // user exact gold-yellow
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207', // deep amber for text contrast
          800: '#854d0e',
          900: '#713f12',
        },
        accent: {
          DEFAULT: '#1a91d6', // secondary action (Know More)
          dark: '#127bb8',
        },
        ink: {
          DEFAULT: '#0f172a',
          soft: '#334155',
          muted: '#64748b',
        },
        surface: {
          DEFAULT: '#ffffff',
          tint: '#fcfaf5',
          page: '#f5f8fb',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,.04), 0 12px 32px -12px rgba(15,23,42,.12)',
        'card-hover': '0 2px 4px rgba(15,23,42,.05), 0 20px 44px -16px rgba(156,113,24,.28)',
        pill: '0 8px 20px -8px rgba(156,113,24,.45)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      backgroundImage: {
        'page-soft':
          'radial-gradient(1200px 600px at 90% -10%, #faf6ea 0%, transparent 55%), linear-gradient(180deg, #f5f8fb 0%, #f7f4eb 100%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .6s ease both',
      },
    },
  },
  plugins: [],
}
