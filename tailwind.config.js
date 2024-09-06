/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fontmt: ["Montserrat", 'sans-serif']
    },
    colors: {
      'purple': '#722ED1',     
    },
    extend: {},
  },
  plugins: [],
}

