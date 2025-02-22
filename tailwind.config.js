/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // navbar: "#4B0082", // Deep Indigo Purple 
        // navbar: "#6A5ACD", // Modern Soft Purple
        navbar: "#800080", // Bold Vibrant Purple


        primary: "#007BFF", // Electric Blue
        secondary: "#FF4081", // Vibrant Magenta
        accent: "#32CD32", // Lime Green
        background: "#f8f9fa", // Soft Cream
        text: "#EAEAEA", // Platinum White
      },
      animation: {
        snowfall: "snowfall 10s linear infinite",
      },
      keyframes: {
        snowfall: {
          "0%": { transform: "translateY(-10%)", opacity: "0" },
          "100%": { transform: "translateY(100vh)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
