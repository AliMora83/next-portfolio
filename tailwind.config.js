/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,tsx,jsx}",
    "./components/**/*.{html,js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
