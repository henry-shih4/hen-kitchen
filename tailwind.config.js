/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "ui-sans-serif", "sans-serif"],
        nunito: ["Nunito", "ui-sans-serif", "sans-serif"],
      },
      backgroundImage: {
        main: "url('images/main.jpg')",
        review:
          "linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url('images/glasses.jpg')",
        city: "linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url('images/city-map.jpg')",
        chef: "linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url('images/chef3.jpg')",
        chef2:
          "linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url('images/chefs4.jpg')",
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
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
    plugins: [],
  },
};
