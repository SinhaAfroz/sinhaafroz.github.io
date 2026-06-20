"use client";

import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub, FaGraduationCap } from "react-icons/fa";

const newsItems = [
  {
    date: "May 2026",
    text: 'Paper published at IEEE VR 2026 — "Beyond Slices: A Narrative-Driven, Multi-User, Multi-Modal VR System for Medical Imaging Presentation".',
  },
  {
    date: "Apr 2026",
    text: 'Paper accepted in Frontiers in Virtual Reality — "Immersive Extended Reality (XR) in Oncology: A Scoping Review of VR and Mixed Reality Applications for 3D Solid Tumor Visualization".',
  },
  {
    date: "Jan 2026",
    text: 'Paper accepted at IEEE VR 2026 — "Beyond Slices: A Narrative-Driven, Multi-User, Multi-Modal VR System for Medical Imaging Presentation".',
  },
  {
    date: "Aug 2024",
    text: "Started Ph.D. at Kennesaw State University; joined the DreamSpace Lab as a Graduate Research Assistant.",
  },
  {
    date: "Jul 2023",
    text: 'Published "Real-Time Face Recognition with Mask using Deep CNN" at CNIOT \'23, Xiamen, China.',
  },
  {
    date: "Spring 2019",
    text: 'Won 1st place at UIU CSE Project Show for Water Cleaning Boat "Simsibin".',
  },
];

const Hero = () => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.05)`;
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* ── Bio block ── */}
      <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-start">

        {/* Top on mobile / Right on desktop: photo + links */}
        <div className="w-full md:w-48 flex-shrink-0 flex flex-col items-center gap-3">
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="p-1 rounded-full ring-2 ring-primary ring-offset-4 ring-offset-white dark:ring-offset-gray-950"
            style={{ transition: "transform 0.15s ease", transformStyle: "preserve-3d", cursor: "pointer" }}>
            <Image
              src="/profile2.jpg"
              alt="Sinha Afroz"
              width={200}
              height={200}
              className="rounded-full object-cover w-40 md:w-48 aspect-square"
            />
          </div>
          {/* Quick links */}
          <div className="flex flex-row flex-wrap justify-center md:flex-col gap-2 w-full mt-2">
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white text-xs md:text-sm px-3 py-2 rounded-md hover:opacity-90 transition md:w-full">
              CV / Resume
            </a>
            <a href="mailto:sinhaafroz16@gmail.com"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs md:text-sm px-3 py-2 rounded-md hover:border-primary hover:text-primary transition md:w-full">
              <FaEnvelope size={13} /> Email
            </a>
            <a href="https://scholar.google.com/citations?user=LgGoP98AAAAJ&hl=en" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs md:text-sm px-3 py-2 rounded-md hover:border-primary hover:text-primary transition md:w-full">
              <FaGraduationCap size={13} /> Google Scholar
            </a>
            <a href="https://www.linkedin.com/in/sinha-afroz" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs md:text-sm px-3 py-2 rounded-md hover:border-primary hover:text-primary transition md:w-full">
              <FaLinkedin size={13} /> LinkedIn
            </a>
            <a href="https://github.com/SinhaAfroz" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs md:text-sm px-3 py-2 rounded-md hover:border-primary hover:text-primary transition md:w-full">
              <FaGithub size={13} /> GitHub
            </a>
          </div>
        </div>

        {/* Left on desktop: text */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Sinha Afroz</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Ph.D. Student, Computer Science &mdash; <a href="https://www.kennesaw.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Kennesaw State University</a><br />
            Graduate Research Assistant, <span className="font-medium">DreamSpace Lab</span><br />
            Advisor: <span className="font-medium">Dr. Lei Zhang</span>
          </p>

          <p className="mt-5 text-gray-700 dark:text-gray-300 leading-relaxed text-justify text-sm">
            I research <span className="font-semibold">Extended Reality (XR)</span> and{" "}
            <span className="font-semibold">Virtual Reality (VR)</span> applications in healthcare,
            designing immersive, human-centered technologies for real-world clinical use. My current
            project is a multi-user, multi-modal VR system for collaborative medical imaging visualization,
            published at <span className="font-semibold">IEEE VR 2026</span>.
          </p>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed text-justify text-sm">
            I completed my B.Sc. in CSE from{" "}
            <a href="https://www.uiu.ac.bd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              United International University
            </a>{" "}
            with <span className="font-semibold">Magna Cum Laude</span> honors, and previously
            worked as a Software Engineer building full-stack airline ticketing systems.
          </p>

          {/* ── News ── */}
          <section className="mt-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">News</h2>
            <ul className="space-y-3">
              {newsItems.map((item, i) => (
                <li key={i} className="flex gap-4 text-sm text-gray-700 dark:text-gray-300">
                  <span className="min-w-[90px] font-medium text-gray-400 dark:text-gray-500 shrink-0">{item.date}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </section>


        </div>

      </div>



      {/* ── Research ── */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Research</h2>
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <p className="font-semibold text-gray-900 dark:text-white mb-1">XR / VR for Healthcare</p>
          <p>
            My research explores how immersive extended reality technologies can transform clinical
            workflows from collaborative medical imaging review to patient education and surgical
            planning. I design and evaluate multi-user VR systems grounded in human-centered
            design principles and clinical needs.
          </p>
        </div>
      </section>




    </main>
  );
};

export default Hero;
