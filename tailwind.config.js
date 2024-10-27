/** @type {import('tailwindcss').Config} */
export default {
  content: ["public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        body: "60px 1fr",
        welcome: "1.5fr 1fr",
      },
      colors: {
        libelo: {
          50: '#e5eaf5',
          100: '#ccd5eb',
          200: '#99acdb',
          300: '#6682cc',
          400: '#3363b8',
          500: '#083db2',
          600: '#072d89',
          700: '#062260',
          800: '#051837',
          900: '#040d1e',
        }
      }
    },
  },
  plugins: [],
};
