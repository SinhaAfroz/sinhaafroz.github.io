"use client";

import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle day/night mode"
      className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-sm px-2 py-1 rounded-md hover:bg-white/10"
    >
      {theme === "dark" ? (
        <>
          <FiSun size={15} />
          <span className="hidden sm:inline">Day</span>
        </>
      ) : (
        <>
          <FiMoon size={15} />
          <span className="hidden sm:inline">Night</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
