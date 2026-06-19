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
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">

      {/* ── Bio block ── */}
      <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-start">

        {/* Left: text */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900">Sinha Afroz</h1>
          <p className="mt-2 text-gray-600 text-base leading-relaxed">
            Ph.D. Student, Computer Science &mdash; <a href="https://www.kennesaw.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">Kennesaw State University</a><br />
            Graduate Research Assistant, <span className="font-medium">DreamSpace Lab</span><br />
            Advisor: <span className="font-medium">Dr. Lei Zhang</span>
          </p>

          <p className="mt-5 text-gray-700 leading-relaxed text-justify text-sm">
            I research <span className="font-semibold">Extended Reality (XR)</span> and{" "}
            <span className="font-semibold">Virtual Reality (VR)</span> applications in healthcare,
            designing immersive, human-centered technologies for real-world clinical use. My current
            project is a multi-user, multi-modal VR system for collaborative medical imaging visualization,
            published at <span className="font-semibold">IEEE VR 2026</span>.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed text-justify text-sm">
            I completed my B.Sc. in CSE from{" "}
            <a href="https://www.uiu.ac.bd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              United International University
            </a>{" "}
            with <span className="font-semibold">Magna Cum Laude</span> honors, and previously
            worked as a Software Engineer building full-stack airline ticketing systems.
          </p>

          {/* ── News ── */}
          <section className="mt-14">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">News</h2>
            <ul className="space-y-3">
              {newsItems.map((item, i) => (
                <li key={i} className="flex gap-4 text-sm text-gray-700">
                  <span className="min-w-[90px] font-medium text-gray-400 shrink-0">{item.date}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </section>


        </div>

        {/* Right: photo + links */}
        <div className="md:w-48 w-32 flex-shrink-0 flex flex-col items-center gap-3">
          <Image
            src="/profile2.jpg"
            alt="Sinha Afroz"
            width={200}
            height={200}
            className="rounded-xl object-cover w-full shadow-md"
          />
          {/* Quick links — full width, uniform size */}
          <div className="flex flex-col gap-3 pt-8 w-full">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition"
            >
              CV / Resume
            </a>
            <a
              href="mailto:sinhaafroz16@gmail.com"
              className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-md hover:border-primary hover:text-primary transition"
            >
              <FaEnvelope size={14} /> Email
            </a>
            <a
              href="https://scholar.google.com/citations?user=LgGoP98AAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-md hover:border-primary hover:text-primary transition"
            >
              <FaGraduationCap size={14} /> Google Scholar
            </a>
            <a
              href="https://www.linkedin.com/in/sinha-afroz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-md hover:border-primary hover:text-primary transition"
            >
              <FaLinkedin size={14} /> LinkedIn
            </a>
            <a
              href="https://github.com/SinhaAfroz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 text-sm px-4 py-2 rounded-md hover:border-primary hover:text-primary transition"
            >
              <FaGithub size={14} /> GitHub
            </a>
          </div>

        </div>
      </div>



      {/* ── Research ── */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Research</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-700 leading-relaxed">
          <p className="font-semibold text-gray-900 mb-1">XR / VR for Healthcare</p>
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
