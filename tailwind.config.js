/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7ff",
          100: "#ebf0ff",
          200: "#d6e0ff",
          300: "#b3c7ff",
          400: "#8aa5ff",
          500: "#667eea",
          600: "#5568d3",
          700: "#4552b6",
          800: "#3a4596",
          900: "#2f3777"
        }
      }
    }
  },
  plugins: []
};
