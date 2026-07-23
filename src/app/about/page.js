"use client";

import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-950 min-h-screen py-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">

        <div className="mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">Sinha Afroz</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mt-2">
            Ph.D. Student in Computer Science &middot; Graduate Research Assistant &middot; DreamSpace Lab, KSU
          </p>
          <div className="text-2xl font-bold text-secondary mt-3">
            <Typewriter
              words={["XR / VR Researcher", "Healthcare Immersive Tech", "HCI Researcher", "PhD Researcher"]}
              loop={true}
              cursor
            />
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700 mb-10" />

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-secondary mb-3">About</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            I am a Ph.D. student in Computer Science at{" "}
            <a href="https://www.kennesaw.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Kennesaw State University</a>
            , advised by <span className="font-semibold">Dr. Lei Zhang</span> at the{" "}
            <span className="font-semibold">DreamSpace Lab</span>. My research focuses on{" "}
            <span className="font-semibold">Extended Reality (XR)</span> and{" "}
            <span className="font-semibold">Virtual Reality (VR)</span> applications in healthcare — designing
            immersive, human-centered technologies that improve accessibility and support real-world clinical solutions.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify mt-4">
            I completed my B.Sc. in Computer Science and Engineering from{" "}
            <a href="https://www.uiu.ac.bd" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
              United International University
            </a>{" "}
            in 2022 with <span className="font-semibold">Magna Cum Laude</span> honors. Prior to my PhD, I worked as a Software Engineer at{" "}
            <span className="font-semibold">Dhaka Popular Travel Ltd.</span>, building full-stack systems for B2B airline ticketing.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-secondary mb-3">Research &amp; Publications</h2>
          <ol className="space-y-6 list-none">

            {/* [1] */}
            <li className="flex gap-4 text-sm">
              <span className="text-secondary font-semibold shrink-0 mt-0.5">[1]</span>
              <div>
                <p className="text-gray-800 dark:text-gray-100 leading-snug">
                  <strong>S. Afroz</strong>, W. G. Lichtenthal, E. C. Kaye, and L. Zhang, &ldquo;A Human-in-the-Loop Immersive Generative Virtual Reality System for Imagery-Based Psychotherapeutic Practices,&rdquo; <span className="italic">IEEE International Symposium on Mixed and Augmented Reality (ISMAR) — Adjunct Proceedings</span>, 2026.
                </p>
                <p className="mt-1 text-xs">
                  <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-medium">Accepted</span>
                </p>
              </div>
            </li>

            {/* [2] */}
            <li className="flex gap-4 text-sm">
              <span className="text-secondary font-semibold shrink-0 mt-0.5">[2]</span>
              <div>
                <p className="text-gray-800 dark:text-gray-100 leading-snug">
                  <strong>S. Afroz</strong> and L. Zhang, &ldquo;Immersive Extended Reality (XR) in Oncology: A Scoping Review of Virtual Reality (VR) and Mixed Reality (MR) Applications for 3D Solid Tumor Visualization,&rdquo; <span className="italic">Frontiers in Virtual Reality</span>, vol. 7, p. 1780348, 2026.
                </p>
                <p className="mt-1 flex gap-3 text-xs">
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Published</span>
                  <a href="https://www.frontiersin.org/journals/virtual-reality/articles/10.3389/frvir.2026.1780348/abstract" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Frontiers</a>
                  <a href="https://doi.org/10.3389/frvir.2026.1780348" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">DOI</a>
                </p>
              </div>
            </li>

            {/* [3] */}
            <li className="flex gap-4 text-sm">
              <span className="text-secondary font-semibold shrink-0 mt-0.5">[3]</span>
              <div>
                <p className="text-gray-800 dark:text-gray-100 leading-snug">
                  <strong>S. Afroz</strong>, D. Haynes, R. Freeman, M. Prather, F. Lu, B. Zhao, J. Li, S. Jung, and L. Zhang, &ldquo;Beyond Slices: A Narrative-Driven, Multi-User, Multi-Modal Virtual Reality System for Medical Imaging Presentation,&rdquo; in <span className="italic">2026 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW) — 3DUI Contest Demo</span>, Daegu, Korea, 2026, pp. 1339–1340.
                </p>
                <p className="mt-1 flex gap-3 text-xs">
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Published</span>
                  <a href="https://ieeexplore.ieee.org/document/11489916" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">IEEE Xplore</a>
                  <a href="https://doi.org/10.1109/VRW70859.2026.00344" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">DOI</a>
                  <a href="https://par.nsf.gov/servlets/purl/10686348" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">PDF</a>
                </p>
              </div>
            </li>

            {/* [4] */}
            <li className="flex gap-4 text-sm">
              <span className="text-secondary font-semibold shrink-0 mt-0.5">[4]</span>
              <div>
                <p className="text-gray-800 dark:text-gray-100 leading-snug">
                  Md. A. Mahmud Joy, Md. F. H. Khan Chowdhury, <strong>S. Afroz</strong>, Md. N. Islam, R. Muhsinat, M. A. Moly, and D. Md. Farid, &ldquo;Real-Time Face Recognition with Mask using Deep Convolutional Neural Network,&rdquo; in <span className="italic">Proc. 2023 4th Int. Conf. Computing, Networks and Internet of Things (CNIOT &apos;23)</span>, Xiamen, China, 2023, pp. 457–461.
                </p>
                <p className="mt-1 flex gap-3 text-xs">
                  <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Published</span>
                  <a href="https://doi.org/10.1145/3603781.3603863" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">DOI</a>
                  <a href="https://dl.acm.org/doi/pdf/10.1145/3603781.3603863" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">PDF</a>
                  <a href="https://www.researchgate.net/publication/372694340_Real-Time_Face_Recognition_with_Mask_using_Deep_Convolutional_Neural_Network" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ResearchGate</a>
                </p>
              </div>
            </li>

          </ol>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-secondary mb-3">Research Interests</h2>
          <div className="flex flex-wrap gap-3">
            {["Extended Reality (XR)", "Virtual Reality (VR)", "Human-Computer Interaction (HCI)", "Medical Imaging Visualization", "Computer Vision", "Immersive Systems"].map((tag) => (
              <span key={tag} className="bg-purple-50 dark:bg-purple-900/30 text-secondary border border-secondary px-4 py-1 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-secondary mb-3">Education</h2>
          <div className="space-y-4">
            {[
              { degree: "Ph.D. in Computer Science", detail: "Kennesaw State University — DreamSpace Lab, advised by Dr. Lei Zhang", year: "2025 – Present" },
              { degree: "B.Sc. in Computer Science & Engineering", detail: "United International University — Graduated Magna Cum Laude", year: "2022" },
              { degree: "HSC", detail: "Dhaka City College", year: "2016" },
              { degree: "SSC", detail: "Dhanmondi Govt. Girls High School — Bangladesh Math Olympiad participant (2012)", year: "2014" },
            ].map((e, i) => (
              <div key={i} className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">{e.degree}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{e.detail}</p>
                </div>
                <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap">{e.year}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-secondary mb-3">Industry Experience</h2>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-100">Software Engineer</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Dhaka Popular Travel Ltd.</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                <li>Built B2B airline ticketing frontend with <span className="font-medium">Vue.js</span> and <span className="font-medium">Tailwind CSS</span>.</li>
                <li>Developed RESTful APIs using <span className="font-medium">Laravel</span> and managed <span className="font-medium">MySQL</span> databases.</li>
                <li>Automated airline data extraction (logos, IATA/ICAO codes) using <span className="font-medium">Python</span>.</li>
                <li>Deployed and integrated systems with <span className="font-medium">Docker</span> on <span className="font-medium">Linux</span>.</li>
                <li>Published an Airport &amp; Airlines <span className="font-medium">Kaggle dataset</span> from this work.</li>
              </ul>
            </div>
            <span className="text-sm text-gray-400 dark:text-gray-500 whitespace-nowrap ml-6">Jan 2023 – Dec 2023</span>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-secondary mb-3">Achievements &amp; Recognition</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
            <li>Paper published in <span className="font-semibold">Frontiers in Virtual Reality</span> (Jun 2026) — scoping review of XR in oncology.</li>
            <li>Published at <span className="font-semibold">IEEE VR 2026</span> — multi-user VR system for medical imaging presentation. <a href="https://ieeexplore.ieee.org/document/11489916" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">IEEE Xplore</a></li>
            <li>Published at <span className="font-semibold">CNIOT &apos;23</span> (ACM); awarded complimentary ACM Membership (Aug 2023 – Sep 2024).</li>
            <li>Graduated with <span className="font-semibold">Magna Cum Laude</span> honors at UIU 2022 convocation; earned merit scholarships throughout.</li>
            <li><span className="font-semibold">1st Place</span> — UIU CSE Project Show (Spring 2019) for Water Cleaning Boat "Simsibin".</li>
            <li>Bangladesh Math Olympiad participant (2012).</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
