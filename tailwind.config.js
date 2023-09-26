/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs' : '360px'
      },
      fontFamily: {
        flowers: ['Send Flowers', 'cursive'], 
        outfit: ['Outfit', 'sans']
      },
    },
  },
  plugins: [],
}

