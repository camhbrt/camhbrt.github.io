/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        love: ['Love ya like a sister', 'cursive'], 
        outfit: ['Outfit', 'sans']
      },
    },
  },
  plugins: [],
}

