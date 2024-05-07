/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-img": "url('./public/bg.jpg')",
        
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: { 
    themes: "",
  },
};
