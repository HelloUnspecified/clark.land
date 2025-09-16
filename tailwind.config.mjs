/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Bricolage Grotesque', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['SF Mono', 'Cascadia Code', 'Roboto Mono', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'hero-title': ['clamp(3rem, 8vw, 5.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'hero-subtitle': ['clamp(1.25rem, 4vw, 1.75rem)', { lineHeight: '1.25' }],
        'h1': ['clamp(2.5rem, 6vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h2': ['clamp(2rem, 5vw, 2.75rem)', { lineHeight: '1.25', letterSpacing: '-0.025em' }],
        'h3': ['clamp(1.5rem, 4vw, 2rem)', { lineHeight: '1.25' }],
        'h4': ['clamp(1.25rem, 3vw, 1.5rem)', { lineHeight: '1.5' }],
        'testimonial': ['clamp(1.5rem, 4vw, 2rem)', { lineHeight: '1.6' }],
        'pullquote': ['clamp(1.75rem, 5vw, 2.25rem)', { lineHeight: '1.25' }],
        'lead': ['1.25rem', { lineHeight: '1.6' }],
        'button-hero': ['1.125rem', { letterSpacing: '0.05em', textTransform: 'uppercase' }],
      },
      fontWeight: {
        'light': 200,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'black': 900,
      },
      letterSpacing: {
        'tighter': '-0.025em',
        'wide': '0.05em',
        'wider': '0.1em',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.25',
        'relaxed': '1.6',
        'loose': '1.7',
      },
      maxWidth: {
        'prose': '65ch',
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
    },
  },
  plugins: [],
}