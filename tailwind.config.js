/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0e1a',
        surface: '#111827',
        card: '#151c2f',
        cardBorder: '#1e293b',
        primaryText: '#e2e8f0',
        secondaryText: '#94a3b8',
        accent: '#7c3aed',
        accentLight: '#a78bfa',
        accentOrange: '#f97316',
        accentBlue: '#3b82f6',
        glowPurple: 'rgba(124, 58, 237, 0.3)',
        glowBlue: 'rgba(59, 130, 246, 0.2)',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3), 0 0 60px rgba(124, 58, 237, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.5), 0 0 80px rgba(124, 58, 237, 0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
