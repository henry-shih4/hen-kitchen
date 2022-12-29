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
    },
    plugins: [],
  },
};
