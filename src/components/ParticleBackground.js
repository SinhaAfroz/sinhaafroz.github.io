"use client";
import { useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 60 },
          color: { value: ["#6366f1", "#818cf8", "#a5b4fc", "#38bdf8"] },
          opacity: {
            value: { min: 0.2, max: 0.6 },
            animation: { enable: true, speed: 0.6, sync: false },
          },
          size: { value: { min: 1, max: 3 }, random: true },
          move: { enable: true, speed: 0.4, direction: "none", random: true, outModes: "bounce" },
          links: {
            enable: true,
            distance: 130,
            color: "#818cf8",
            opacity: 0.25,
            width: 1,
          },
          shape: { type: "circle" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
          },
        },
      }}
    />
  );
}
