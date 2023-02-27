/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/portfolio-images/bg-home-6.jpg')",
      },
      keyframes: {
        globus: {
          "0%, 100%": {
            transform: "rotate(-10deg);",
          },
          "50%": {
            transform: "rotate(10deg);",
          },
        },
      },
      animation: {
        globus: "globus 1s linear infinite",
      },
    },
  },
  plugins: [],
};
