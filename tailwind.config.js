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
        outfit: ['Outfit', 'sans'],
        indie: ['Indie Flower', 'cursive'],
        poiret: ['Poiret One', 'sans']
      },

      animation: {
        'spin-slow': 'spin 30s linear infinite',
      }
   
    },
  },
  plugins: [],
}

