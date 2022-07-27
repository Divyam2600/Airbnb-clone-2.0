/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        footer: "-2px 6px 20px -3px rgba(150,144,150,1)",
      },
      colors: {
        airbnb: "#ff385c",
      },
      fontFamily: {
        sans: ["Cereal", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "450px",
      },
    },
  },
  variants: {
    lineClamp: ["responsive", "hover"],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("child-active", "& > *:active");
    },
  ],
};
