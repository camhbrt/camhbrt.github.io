/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poiret: ['Poiret One', 'cursive'], 
        hachi: ['Hachi Maru Pop', 'sans'], 
      },
    },
  },
  plugins: [],
}

