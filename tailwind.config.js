/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom :{
          primary: "#f5487f",
          secondary: "#1f306e",
          white: "#F9F6EE",
        
        }}
    },
  },
 
  plugins: [require("daisyui")],
}

