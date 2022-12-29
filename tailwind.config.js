/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('images/main.jpg')",
        review:
          "linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url('images/glasses.jpg')",
        city: "linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url('images/city-map.jpg')",
      },
      gridTemplateColumns: {
        custom: "repeat(4, minmax(0, 1fr))",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(-100%)",
          },

          "100%": {
            transform: "translateX(0)",
          },
        },
        slideOut: {
          "0%": {
            transform: "translateX(0)",
          },

          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
      animation: {
        slideIn: "slideIn 0.7s linear",
        slideOut: "slideOut 0.7s linear"
      },
    },
    plugins: [],
  },
};
