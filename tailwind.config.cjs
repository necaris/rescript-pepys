/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./frontend/**/*.res.mjs"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: "#root",
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
