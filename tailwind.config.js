/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundColor: {
        'custom': '#100d54',
      },
      screens: {
        tablet: "876px",
        xs: "375px",
      },
    },
  },
  plugins: [],
};
