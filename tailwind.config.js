/** @type {import('tailwindcss').Config} */
export default {
  content: ["public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        body: "60px 1fr",
      },
    },
  },
  plugins: [],
};
