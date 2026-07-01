/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'femsa-navy': '#032177',
        'femsa-orange': '#f96419',
        'femsa-smoke': '#F5F5F5',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Friends', 'Sora', 'sans-serif'],
        body: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
