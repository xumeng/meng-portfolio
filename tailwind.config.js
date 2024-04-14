/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.purple,
      secondary: colors.pink,
    },
    // 在这里添加自定制的文字渐变效果颜色
    // gradientColorStops: (theme) => ({
    //   // "red-blue": [
    //   //   "#5086ed",
    //   //   "#d95040",
    //   //   "#f3be42",
    //   //   "#58a55d",
    //   //   "#ffffff",
    //   //   "#000000",
    //   // ],
    // }),
  },
  plugins: [
    // 这是一个新插件，添加渐变文字颜色的类
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-gradient": {
          background:
            "linear-gradient(to right,  #ffffff, #5086ed, #d95040, #f3be42, #58a55d, #000000)",
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-moz-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "-moz-text-fill-color": "transparent",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
