"use client"; // Force client-side execution

import { useState, useEffect } from "react";

export default function Snowfall() {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const snowflakes = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 5 + 5}s`,
      opacity: Math.random(),
    }));
    setFlakes(snowflakes);
  }, []);

  return (
    <div className="absolute w-full h-full overflow-hidden pointer-events-none">
      {flakes.map((flake) => (
        <div
        key={flake.id}
        className="absolute bg-secondary w-2 h-2 rounded-full animate-snowfall -z-1"
        style={{
          left: flake.left,
          animationDuration: flake.duration,
          opacity: flake.opacity,
        }}
      ></div>
      
      ))}
    </div>
  );
}