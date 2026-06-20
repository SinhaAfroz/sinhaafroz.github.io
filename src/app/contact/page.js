"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaGraduationCap } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-950 min-h-screen py-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Contact</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">
          Feel free to reach out for research collaborations, questions, or just to say hello.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="w-full">
            <iframe
              src="https://docs.google.com/forms/d/1oAUg0D_9WnwfFnJv4QFJBHCEcva678YCWNKBT1P_dpw/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg border border-gray-200 dark:border-gray-700"
            >
              Loading…
            </iframe>
          </div>

          <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white mb-1">Sinha Afroz</p>
              <p className="text-gray-500 dark:text-gray-400">Ph.D. Student, Computer Science</p>
              <p className="text-gray-500 dark:text-gray-400">DreamSpace Lab, <a href="https://www.kennesaw.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Kennesaw State University</a></p>
              <p className="text-gray-500 dark:text-gray-400">Advisor: Dr. Lei Zhang</p>
            </div>

            <div className="space-y-3">
              <a href="mailto:sinhaafroz16@gmail.com" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition">
                <FaEnvelope size={16} className="text-primary" />
                sinhaafroz16@gmail.com
              </a>
              <a href="https://scholar.google.com/citations?user=LgGoP98AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition">
                <FaGraduationCap size={16} className="text-primary" />
                Google Scholar
              </a>
              <a href="https://www.linkedin.com/in/sinha-afroz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition">
                <FaLinkedin size={16} className="text-primary" />
                linkedin.com/in/sinha-afroz
              </a>
              <a href="https://github.com/SinhaAfroz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition">
                <FaGithub size={16} className="text-primary" />
                github.com/SinhaAfroz
              </a>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-gray-600 dark:text-gray-400">
              <p className="font-medium text-gray-800 dark:text-gray-200 mb-1">Open to</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Research collaborations in XR / VR / HCI</li>
                <li>Healthcare technology discussions</li>
                <li>Speaking or panel invitations</li>
                <li>General questions about my work</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
