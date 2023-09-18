/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hachi: ['Hachi Maru Pop', 'cursive'], 
        outfit: ['Outfit', 'sans']
      },
    },
  },
  plugins: [],
}

