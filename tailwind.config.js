/* eslint-disable */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#131313",
        "darker-grey": "#1E1E1E",
        "dark-grey": "#767676",
        grey: "#B0B0B0",
        "light-grey": "#E7E7E7",
        white: "#F8F8F8",
        "dark-blue": "#074C7E",
        blue: "#0C8CE9",
        "light-blue": "#DEE7F0",
        orange: "#E95C0C",
      },
    },
  },
  plugins: [],
};
