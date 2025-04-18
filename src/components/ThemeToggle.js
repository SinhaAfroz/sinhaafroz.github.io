"use client";

import { useState, useEffect } from "react";

const ThemeToggle = () => {
  // State to store the current theme
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Function to get the current hour of the day
    const currentHour = new Date().getHours();

    // Automatically set the theme based on the time of the day
    if (currentHour >= 19 || currentHour <= 6) {
      setTheme("dark"); // Night time (7 PM to 6 AM)
    } else {
      setTheme("light"); // Day time (7 AM to 6 PM)
    }

    // Check for user's system preference for color scheme
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
      setTheme("dark"); // Default to dark mode if user's system preference is dark
    }
  }, []);

  // Toggle function to manually change theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Apply the theme to the document
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleTheme}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
      >
        {theme === "dark" ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
