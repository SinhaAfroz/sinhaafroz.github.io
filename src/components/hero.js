"use client";

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">

        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-800">
            Sinha Afroz
          </h1>
          <p className="text-xl text-gray-700 mt-4">
            PhD Aspirant | Software Engineer | Researcher
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Exploring AI, Bioinformatics & Computer Vision for groundbreaking research.
          </p>

          <h1 className="text-4xl font-bold text-navbar pt-12">
            <Typewriter words={["Sinha Afroz", "ML Enthusiast", "Software Engineer", "Aspiring Researcher"]} loop={true} cursor />
          </h1>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Link href="/projects">
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-all duration-300">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-secondary transition-all duration-300">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          {/* path for github */}
          <Image
            src="/my_portfolio/profile2.jpg"             
            alt="Sinha Afroz"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg transition transform hover:scale-105 duration-300"
          />
          {/* <Image
            src="/profile2.jpg"             
            alt="Sinha Afroz"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg transition transform hover:scale-105 duration-300"
          /> */}
        </div>

      </div>
    </section>
  );
};

export default Hero;
