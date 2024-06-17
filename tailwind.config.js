/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#B21A12",
        secondary: "#FE7466",
        footer: "#FE7466",
      }
    },
  },
  plugins: [],
}

