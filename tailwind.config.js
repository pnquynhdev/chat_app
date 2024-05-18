/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('./public/bg.jpg')",
        "profile-img":"url('./src/assets/profileimg.png')"
      },
      colors: {
        gray: colors.Gray,
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
        blue:{
          900: '#002e63',
          800: '#08457e',
          700: '#26619c',
          600: '#318ce7 ',
          500: '#73c2fb ',
          400: '#7cb9e8',
          300: '#a1caf1',
          200: '#87cefa ',
          100: '#99badd ',
        }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: "",
  },
};
