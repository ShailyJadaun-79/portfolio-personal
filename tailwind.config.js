/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC', // Very light slate
        surface: '#FFFFFF', // Pure white for cards
        primaryText: '#0F172A', // Dark slate for readability
        secondaryText: '#475569', // Medium slate for subtitles
        accent: '#2563EB', // Professional muted blue (No neon)
      }
    },
  },
  plugins: [],
}
