/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // navbar: "#800080", // Bold Vibrant Purple
        // primary: "#007BFF", // Electric Blue
        // secondary: "#FF4081", // Vibrant Magenta
        // accent: "#32CD32", // Lime Green
        // background: "#f8f9fa", // Soft Cream
        // text: "#EAEAEA", // Platinum White
        navbar: "#00BFFF",  // Deep Sky Blue
        primary: "#87CEEB",  // Sky Blue
        secondary: "#00CED1",  // Dark Turquoise
        accent: "#1E90FF",  // Dodger Blue
        background: "#E0FFFF",  // Light Cyan
        text: "#333333",  // Dark Charcoal (for readability)
        darkBackground: '#121212', // Dark background for dark mode
        darkText: '#EAEAEA', // Light text color for dark mode

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
