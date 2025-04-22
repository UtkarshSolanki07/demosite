/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#9993B2",
        secondary: "#0063ff",
      },
      container: {
        center: true,
        padding:{
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '2rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}

