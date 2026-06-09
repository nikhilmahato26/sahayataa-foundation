/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand identity — forest green, mint surfaces, ink text
        brand: {
          50: '#eafaf1',
          100: '#d2f3e0',
          200: '#a8e7c4',
          300: '#6fd49f',
          400: '#34b878',
          500: '#159b5e',
          600: '#0d7c4a', // primary
          700: '#0b633c',
          800: '#0b4e31',
          900: '#093f29',
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
          tint: '#f3f8f5',
          page: '#f5f8fb',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,.04), 0 12px 32px -12px rgba(15,23,42,.12)',
        'card-hover': '0 2px 4px rgba(15,23,42,.05), 0 20px 44px -16px rgba(13,124,74,.28)',
        pill: '0 8px 20px -8px rgba(13,124,74,.45)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      backgroundImage: {
        'page-soft':
          'radial-gradient(1200px 600px at 90% -10%, #e8f5ee 0%, transparent 55%), linear-gradient(180deg, #f5f8fb 0%, #eef5f0 100%)',
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
