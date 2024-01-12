/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Very-Dark-Gray": "#2b2b2b",
        "Dark-Gray": "#969696",
      },
      backgroundImage: {
        'desktop-pattern': "url('./images/pattern-bg-desktop.png')",
        'mobile-pattern': "url('./images/pattern-bg-mobile.png')",
      },
    },

    screens: {

      xs: "476px",

      sm: "576px",

      md: "768px",

      lg: "992px",

      xl: "1280px",
    },

    fontFamily: {
      primary: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
