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
        navbar: "#7C3AED",   // Violet-700
        primary: "#8B5CF6",  // Violet-500
        secondary: "#A855F7", // Purple-500
        accent: "#EC4899",   // Pink-500
        background: "#FAF5FF", // Purple-50
        text: "#1F1F1F",     // Near black
        darkBackground: '#121212', // Dark background for dark mode
        darkText: '#EAEAEA', // Light text color for dark mode

      },
      keyframes: {
        snowfall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        snowfall: 'snowfall linear infinite',
      },
    },
  },
  plugins: [],
};
