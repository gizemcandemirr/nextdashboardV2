const theme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', ...theme.fontFamily.sans],
      },
      colors: {
        gray: {
          400: "#969798",
          500: "#666666",
          700: "#353535",
          800: "#262626",
          900: "#171818",
        },
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["active"] },
  },
};
