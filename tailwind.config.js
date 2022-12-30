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
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(5%)",
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(5%)",
          },

          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        slideUp: "slideUp 0.7s ease-in forwards",
      },
    },
    plugins: [],
  },
};
