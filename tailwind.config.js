import { colors, nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "slide-blue": "#0FC7F940",
        "menu-color": "#FFFFFF",
        "menu-color-dark": "#37435B",
        "gpp-blue": "#0FC7F9",
        "gpp-yellow": "#F4D03A",
        "gpp-green": "#5A8432",
      },
    },
  },
  plugins: [
    nextui({
      layout: {},
      addCommonColors: true,
      themes: {
        light: {
          layout: {},
          colors: {},
        },
      },
    }),
  ],
};
