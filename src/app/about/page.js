"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section className="container bg-white min-h-screen flex items-center justify-center py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">

        {/* Left: About Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-secondary">
            <Typewriter
              words={[
                "Ph.D. Student",
                "Graduate Research Assistant",
                "ML & XR Enthusiast"
              ]}
              loop={true}
              cursor
            />
          </h1>

          <p className="text-xl text-gray-700 mt-2 font-semibold">
            Graduate in Computer Science and Engineering | Full-Stack Developer | Aspiring Researcher
          </p>
          <h2 className="text-3xl font-bold text-secondary mt-6">About Me</h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed text-justify">
            I am a <span className="font-extrabold">Computer Science Ph.D. student</span> and Graduate Research Assistant at{' '}
            <a
              href="https://www.kennesaw.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Kennesaw State University
            </a>
            , working under <span className="font-extrabold">Dr. Lei Zhang</span> at the <span className="font-extrabold">DreamSpace Lab</span>. My research focuses on <span className="font-extrabold">Extended Reality (XR)</span> with applications in the healthcare sector.
            My goal is to design innovative, human-centered technologies that enhance healthcare experiences, improve accessibility, and support real-world clinical solutions.
          </p>

          <h2 className="text-3xl font-bold text-secondary mt-6">Research & Publications</h2>
          <ul className="mt-3 space-y-2 text-lg text-gray-700 list-disc list-inside">
            <li><span className="font-extrabold">Beyond Slices: A Narrative-Driven, Multi-User, Multi-Modal Virtual Reality System for Medical Imaging Presentation</span> – Accepted for <span className="font-extrabold">IEEE VR 2026</span> proceedings and on track for publication in the IEEE Digital Library.</li>
            <li><span className="font-extrabold">Real-Time Face Recognition with Mask using Deep Convolutional Neural Network</span> – Published in <span className="font-extrabold">CNIOT ’23</span> (Xiamen, China, 2023).</li>
          </ul>


          {/* Keep the rest of your original content as-is */}
          <h2 className="text-3xl font-bold text-secondary mt-6">Professional Summary</h2>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed text-justify">
            I’m a highly motivated <span className="font-extrabold">Junior Software Engineer</span> with a passion for solving complex real-world problems using cutting-edge technology.
            During my time at <span className="font-extrabold">Dhaka Popular Travel Ltd.</span>, I worked on optimizing the airline ticket purchasing system.
            My expertise includes frontend development, backend development, and system integration, with a strong foundation in <span className="font-extrabold">Python</span>, <span className="font-extrabold">Vue.js</span>, <span className="font-extrabold">Laravel</span>, and <span className="font-extrabold">MySQL</span>.
          </p>

          {/* Key Highlights */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">Key Highlights</h3>
            <ul className="mt-3 space-y-2 text-lg text-gray-700">
              <li>🚀 Designed front-end interfaces using <span className="font-extrabold">HTML</span>, <span className="font-extrabold">Tailwind CSS</span>, and <span className="font-extrabold">Vue.js</span> based on Figma designs to improve website visuals.</li>
              <li>🔗 Developed <span className="font-extrabold">RESTful APIs</span> using <span className="font-extrabold">Laravel</span> and handled database management with <span className="font-extrabold">MySQL</span>.</li>
              <li>📊 Automated <span className="font-extrabold">data extraction</span> processes using <span className="font-extrabold">Python</span> scripts to gather airline information (logos, codes, etc.).</li>
              <li>🛠️ Tested <span className="font-extrabold">RESTful APIs</span> using <span className="font-extrabold">Postman</span> to ensure proper functionality and performance.</li>
              <li>✈️ Worked with my created <span className="font-extrabold">Kaggle dataset</span> on Airport and Airlines, containing IATA codes, airline logos, and relevant data such as airport names, airline names, and ICAO codes.</li>
              <li>🖥️ Deployed and integrated systems with <span className="font-extrabold">Docker</span> and <span className="font-extrabold">Linux</span> to ensure smooth operations.</li>
              <li>📚 Gained valuable insights into <span className="font-extrabold">Amadeus APIs</span>, familiarizing myself with key airline industry terminology, including PNR and alpha-numeric codes.</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-secondary mt-6">Academic Background</h2>
          <ul className="mt-3 space-y-2 text-lg text-gray-700">
            <li>🎓 <span className="font-extrabold">B.Sc. in CSE</span> - United International University (UIU) | Graduated in 2024 with <span className="font-extrabold">Magna Cum Laude</span> honors, consistently earning scholarships throughout my university years due to academic excellence.</li>
            <li>📚 <span className="font-extrabold">HSC</span> - Dhaka City College | Graduated in 2016</li>
            <li>🏆 <span className="font-extrabold">SSC</span> - Dhanmondi Govt. Girls High School | Graduated in 2014 | Attended <span className="font-extrabold">Bangladesh Math Olympiad</span> in 2012, showcasing strong problem-solving skills.</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary mt-6">Achievements & Recognition</h2>
          <ul className="mt-3 space-y-2 text-lg text-gray-700">
            <li>🖥️ <span className="font-extrabold">Real-Time Face Recognition with Mask</span> - Developed a Deep Convolutional Neural Network (CNN)-based real-time face recognition system capable of identifying individuals wearing masks. Published in <span className="font-extrabold">CNIOT'23</span> (Xiamen, China, 2023).</li>
            <li>🚢 <span className="font-extrabold">Water Cleaning Boat - Simsibin</span> - Designed an innovative water-cleaning boat to address environmental concerns. Won 1st place at UIU CSE Project Show (Spring 2019).</li>
            <li>🎖️ Earned multiple scholarships and <span className="font-extrabold">Magna Cum Laude</span> distinction at the 2024 convocation.</li>
            <li>🔬 Awarded complimentary <span className="font-extrabold">ACM Membership</span> (Aug 2023–Sep 2024) due to publication at CNIOT'23.</li>
          </ul>

          <h2 className="text-3xl font-bold text-secondary mt-6">Areas of Interest</h2>
          <ul className="mt-3 space-y-2 text-lg text-gray-700">
            <li>🕶️ <span className="font-extrabold">Virtual Reality (VR)</span> & <span className="font-extrabold">Extended Reality (XR)</span></li>
            <li>🎭 <span className="font-extrabold">Computer Vision (CV)</span></li>
          </ul>

         
        </div>
      </div>
    </section>
  );
};

export default About;
