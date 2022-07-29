const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.svelte", "./src/**/*.html", "./src/**/*.css", "./index.html"],
  theme: {
    screens: {
      "2xs": "320px",
      xs: "480px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
