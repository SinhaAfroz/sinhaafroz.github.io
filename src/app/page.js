"use client";
import Hero from "@/components/hero";
import VRParticles from "@/components/VRparticles";

const HomePage = () => {
  return (
    <div className="relative">
      <VRParticles />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
