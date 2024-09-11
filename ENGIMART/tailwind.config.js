/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'laranja': '#D5731C',
        'cinza': '#1D1D1E',
        'cinza-claro': '#6B6B6B',
        'giz': '#FAFAFA',
      },

      fontFamily:{
        'open-sans': ["Open Sans", "sans-serif"],
        'fira-code': ["Fira Code", "monospace"],
      }

    },
  },
  plugins: [],
}