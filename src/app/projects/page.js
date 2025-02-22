"use client";

import { motion } from "framer-motion";

const personalProjects = [
  {
    title: "Real-Time Face Recognition with Mask",
    description: "A CNN-based system to recognize masked and unmasked individuals, implemented in Python with a compact hardware model.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    publication: "https://doi.org/10.1145/3603781.3603863",
    demo: "https://youtu.be/ppKqjw5Q08A",
  },
  {
    title: "Water Cleaning Boat",
    description: "An award-winning autonomous boat designed to clean surface water, using Raspberry Pi and Arduino.",
    tech: ["Arduino", "Raspberry Pi", "IoT"],
    demo: "https://drive.google.com/file/d/1lFAGXMjOSxJZxOj1la_DgTmuPDsWb1J3/view",
  },
  {
    title: "Identification of DNA-Binding Proteins",
    description: "A deep learning approach to analyze DNA-binding proteins, playing a key role in gene regulation.",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    github: "https://github.com/SinhaAfroz/BioinformaticsProject",
  },
  {
    title: "Dhaka RentVision: Smart Pricing Insights",
    description: "A predictive model estimating rental prices in Dhaka with 94.5% accuracy, using Linear Regression and Flask for deployment.",
    tech: ["Python", "Linear Regression", "Flask"],
    github: "https://github.com/SinhaAfroz/Dhaka-RentVision-Smart-Pricing-Insights",
  },
  {
    title: "Ticket Reservation System",
    description: "A Java-based bus ticket reservation system, managing bookings via file I/O operations.",
    tech: ["Java", "File I/O"],
    github: "https://github.com/SinhaAfroz/Ticket-Reservation-Project",
  },
  {
    title: "Save the Butterfly",
    description: "A 2D game where players rescue butterflies using arrows, built with C and OpenGL.",
    tech: ["C", "OpenGL"],
    github: "https://github.com/SinhaAfroz/Graphic-Project-Save-the-Butterfly",
  },
];

const professionalProjects = [
  {
    title: "Popular Travel Ltd. B2B Italy Website",
    description: "A web application to manage airline ticket purchasing for B2B users in the Italy branch.",
    tech: ["HTML", "Tailwind CSS", "Vue.js", "Laravel", "MySQL"],
    link: "https://agt.populartravels.it/account/login",
  },
  {
    title: "Dhaka Popular Travel Website",
    description: "A streamlined airline ticket purchasing system for B2B users.",
    tech: ["HTML", "CSS", "Alpine.js"],
    link: "https://populartravel.com.bd/",
  },
];

const Projects = () => {
  return (
    <section className="bg-background min-h-screen py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-primary mb-10">Projects</h1>

      <div className="max-w-6xl w-full">
        {/* Personal Projects Section */}
        <h2 className="text-3xl font-semibold text-secondary mb-6">Personal Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personalProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" className="text-primary font-semibold hover:underline">
                    GitHub
                  </a>
                )}
                {project.publication && (
                  <a href={project.publication} target="_blank" className="text-secondary font-semibold hover:underline">
                    Publication
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90">
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Projects Section */}
        <h2 className="text-3xl font-semibold text-secondary mt-12 mb-6">Professional Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {professionalProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              <div className="mt-4">
                <a href={project.link} target="_blank" className="text-primary font-semibold hover:underline">
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
