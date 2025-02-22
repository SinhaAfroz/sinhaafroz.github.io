"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import ParticleBackground from "@/components/ParticleBackground";

const About = () => {
  return (
    <section className="bg-background min-h-screen flex items-center justify-center py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
      {/* <ParticleBackground /> */}

        {/* Left: Image */}
        {/* <div className="md:w-1/3 mb-8 md:mb-0">
          <Image
            src="/profile2.jpg" // Update with your actual image path
            alt="Sinha Afroz"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div> */}

        {/* Right: About Text */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl font-bold text-secondary">
            <Typewriter words={["Sinha Afroz", "ML Enthusiast", "Software Engineer", "Aspiring Researcher"]} loop={true} cursor />
          </h1>
          {/* <h1 className="text-4xl font-bold text-primary">Sinha Afroz</h1> */}

          <p className="text-xl text-gray-700 mt-2 font-semibold">
            Graduate in Computer Science and Engineering | ML Enthusiast | Full-Stack Developer | Aspiring Researcher
          </p>

          <h2 className="text-3xl font-bold text-secondary mt-6">About Me</h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            I’m Sinha Afroz, a passionate **computer science graduate** dedicated to developing innovative software solutions that solve **real-world challenges**.
            My expertise lies in **building efficient and scalable systems** while focusing on **enhancing user experience**.
            Beyond software development, I am deeply invested in **research** and aspire to contribute to groundbreaking advancements.
          </p>

          <h2 className="text-3xl font-bold text-secondary mt-6">Professional Summary</h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed">
            **Junior Software Engineer** with experience in developing software solutions for **B2B users**.
            Worked at **Dhaka Popular Travel Ltd.**, optimizing airline ticket purchasing systems.
            Expertise in **frontend & backend development** and **system integration**, with skills in **Python, Vue.js, Laravel, and MySQL**.
          </p>

          {/* Key Highlights */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">Key Highlights</h3>
            <ul className="mt-3 space-y-2 text-lg text-gray-700">
              <li>🚀 Designed front-end interfaces using **Vue.js & Tailwind CSS**</li>
              <li>🔗 Developed **RESTful APIs** using **Laravel & MySQL**</li>
              <li>📊 Automated **data extraction** processes with Python</li>
              <li>🛠️ Deployed systems using **Docker & Linux**</li>
              <li>✈️ Worked with **Amadeus APIs** & airline data</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-secondary mt-6">Academic Background</h2>
          <ul className="mt-3 space-y-2 text-lg text-gray-700">
            <li>🎓 **B.Sc. in CSE** - United International University, **Magna Cum Laude (2024)**</li>
            <li>📚 **HSC** - Dhaka City College (2016)</li>
            <li>🏆 **SSC** - Dhanmondi Govt. Girls High School (2014, Math Olympiad 2012)</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary mt-6">Achievements & Recognition</h2>
          <ul className="mt-3 space-y-2 text-lg text-gray-700">
            <li>🖥️ **Real-Time Face Recognition with Mask** (Published in **CNIOT'23**, China)</li>
            <li>🚢 **Water Cleaning Boat - Simsibin** (1st place, UIU CSE Project Show)</li>
            <li>🎖️ Earned **multiple scholarships & Magna Cum Laude** distinction</li>
            <li>🔬 Awarded **ACM Membership** for research contribution</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary mt-6">Areas of Interest</h2>
          <ul className="mt-3 space-y-2 text-lg text-gray-700">
            <li>🤖 Machine Learning & AI</li>
            <li>🧬 Bioinformatics & Computational Biology</li>
            <li>🎭 Computer Vision & Deep Learning</li>
            <li>🖥️ Software Engineering & Big Data</li>
          </ul>

          {/* Contact Links */}
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/sinha-afroz" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition">
              LinkedIn
            </a>
            <a href="https://github.com/SinhaAfroz" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-secondary transition">
              GitHub
            </a>
            <a href="mailto:sinhaafroz16@gmail.com" className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-secondary transition">
              Email
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
