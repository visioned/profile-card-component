/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-top": "url('/src/assets/bg-pattern-top.svg')",
        "hero-bottom": "url('/src/assets/bg-pattern-bottom.svg')",
      }
    },
    fontFamily: {
      kumbh: ["Kumbh Sans", "sans-serif"],
    },
  },
  plugins: [],
};
