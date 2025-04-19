"use client";

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-100 to-purple-100 dark:bg-darkBackground">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-6 gap-12">

        {/* Left: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900">Sinha Afroz</h1>
          <p className="text-xl text-gray-700 mt-4">
            PhD Aspirant | Software Engineer | Researcher
          </p>
          {/* <p className="text-lg text-gray-600 mt-2 leading-relaxed">
            Bridging AI, Bioinformatics & Extended Reality to reshape immersive research frontiers.
          </p> */}

          {/* Personal Introduction */}
          <p className="text-md text-gray-600 mt-6">
            Hello, I am Sinha Afroz, born and raised in Dhaka, Bangladesh. I graduated in Computer Science and Engineering from United International University with a strong academic record. After completing my studies, I gained hands-on industry experience as a Software Engineer, where I worked on various projects involving software development, system design, and data handling. My passion for technology drives me to continue learning and applying my skills in innovative ways.
          </p>

          <h1 className="text-4xl font-bold text-primary pt-12">
            <Typewriter
              words={[
                "ML Enthusiast",
                "Immersive Tech Explorer",
                "Aspiring Researcher"
              ]}
              loop={true}
              cursor
            />
          </h1>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Link href="/projects">
              <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-2xl transition-all duration-300">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-tr from-primary via-pink-400 to-secondary p-[6px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:rotate-2 transition-transform duration-500">
            <Image
              src="/profile2.jpg"
              alt="Sinha Afroz"
              width={500}
              height={500}
              className="rounded-full object-cover w-full h-full shadow-xl"
            />
            <div className="absolute inset-0 rounded-full border-[6px] border-white animate-pulse opacity-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
