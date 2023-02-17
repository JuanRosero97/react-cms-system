/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "960px",
      lg: "1440px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      spacing: {
        "500p_x": "500px",
        "600p_x": "600px",
      },
    },
  },
  plugins: [require("daisyui")],
};
