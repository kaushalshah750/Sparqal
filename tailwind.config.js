/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A78BFA",     // Your brand purple
        dark: "#0B0B2C",        // Dark background
        light: "#EDEBFF",       // Light text on dark
        white: "#FFFFFF",
        black: "#000000"
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],  // Geometric modern font
      },
    },
  },
  plugins: [],
}
