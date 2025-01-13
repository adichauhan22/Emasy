/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          200: "#a3e635",
          400: "#6ee7b7",
          600: "#34d399",
          800: "#059669",
        },
      },
    },
  },
  plugins: [],
}