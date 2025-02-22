"use client";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // 🔥 FIXED: use loadSlim instead of loadFull

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // 🔥 FIXED: loadSlim instead of loadFull
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 3 },
        particles: {
          number: { value: 30 },
          color: { value: "#ffffff" },
          opacity: { value: 0.5, random: true },
          size: { value: { min: 1, max: 3 }, random: true },
          move: { enable: true, speed: 0.6 },
        },
      }}
    />
  );
}
