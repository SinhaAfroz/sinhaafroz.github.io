"use client";

import { motion } from "framer-motion";

const personalProjects = [
  {
    title: "Real-Time Face Recognition with Mask",
    description: "For my final year project, I developed an advanced face recognition system capable of identifying individuals both with and without face masks. Using a convolutional neural network (CNN) in Python, I integrated the solution into a compact hardware model to demonstrate its real-world application. This system helps improve security in crowded places and during health crises, like the pandemic.",
    tech: ["Python", "Deep Learning", "CNN"],
    publication: "https://doi.org/10.1145/3603781.3603863",
    demo: "https://youtu.be/ppKqjw5Q08A",
  },
  {
    title: "Water Cleaning Boat",
    description: "This award-winning project from our university's 'CSE Project Show - Spring 19' involved designing an autonomous boat to clean polluted surface water. With the use of a Raspberry Pi and Arduino Uno, the boat could navigate autonomously and gather water pollutants. This project emphasized environmental sustainability and IoT-based solutions for real-world water quality problems.",
    tech: ["Raspberry Pi", "Arduino Uno"],
    demo: "https://drive.google.com/file/d/1lFAGXMjOSxJZxOj1la_DgTmuPDsWb1J3/view",
  },
  {
    title: "Identification of DNA-Binding Proteins",
    description: "In this project, I used deep learning to predict DNA-binding proteins (DBPs) and their impact on gene expression regulation. Understanding DBPs is crucial for breakthroughs in genetics, especially for diseases related to immune system dysfunction, muscle conditions, and oxygen transport. The project utilized machine learning models, particularly neural networks, to analyze genetic data and predict protein interactions.",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    github: "https://github.com/your-repo-link",
  },
  {
    title: "Dhaka RentVision: Smart Pricing Insights",
    description: "This project predicts rental prices in Dhaka with remarkable accuracy, based on key factors such as location, area size, and number of rooms. After thorough data preprocessing (including one-hot encoding), I achieved a test score of 94.5% using linear regression. The app also features a user-friendly interface built with Flask, allowing real-time rental price predictions for both renters and landlords.",
    tech: ["Python", "Linear Regression", "Flask"],
    github: "https://github.com/your-repo-link",
  },
  {
    title: "Ticket Reservation System",
    description: "Developed a Java-based bus ticket reservation system to streamline the booking process. This project uses file I/O operations for efficient storage and retrieval of reservation data, allowing users to easily book, cancel, and view their tickets. It was built to improve ticket management for bus services and optimize reservation workflows.",
    tech: ["Java", "File I/O"],
    github: "https://github.com/your-repo-link",
  },
  {
    title: "Save the Butterfly",
    description: "As part of my Computer Graphics course, I developed a fun 2D game where players must rescue butterflies trapped in cages using arrows. The project was implemented using C and OpenGL, allowing me to explore interactive graphics and develop fundamental game mechanics.",
    tech: ["C", "OpenGL"],
    github: "https://github.com/your-repo-link",
  },
];

const professionalProjects = [
  {
    title: "Popular Travel Ltd. B2B Italy Website",
    description: "Developed a highly functional web application to manage the airline ticket purchasing process for B2B users in the Italy branch of Popular Travel Ltd. The site allows businesses to book tickets efficiently and integrates with real-time data to enhance the user experience.",
    tech: ["HTML", "Tailwind CSS", "Vue.js", "Laravel", "MySQL"],
    link: "https://agt.populartravels.it/account/login",
  },
  {
    title: "Dhaka Popular Travel Website",
    description: "Streamlined the booking process for airline tickets through a user-friendly web application for B2B users. The system provides an easy interface for businesses to make reservations, while also handling complex data management and real-time availability.",
    tech: ["HTML", "CSS", "Alpine.js"],
    link: "https://populartravel.com.bd/",
  },
];

const Projects = () => {
  return (
    <section className="bg-background min-h-screen py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-text mb-10">Projects</h1>
      <div className="max-w-5xl w-full space-y-16">

        {/* PERSONAL PROJECTS */}
        <div>
          <h2 className="text-3xl font-semibold text-text mb-6">Personal Projects</h2>
          <ul className="space-y-8">
            {personalProjects.map((project, index) => (
              <motion.li
                key={index}
                className="text-text bg-white p-6 rounded-lg shadow-lg text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-1">{project.description}</p>
                <p className="mt-1 italic text-sm">Technologies: {project.tech.join(", ")}</p>
                <div className="flex gap-4 mt-2 text-sm">
                  {project.publication && (
                    <a href={project.publication} target="_blank" className="text-primary underline">Publication</a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" className="text-accent underline">Demo</a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" className="text-secondary underline">GitHub</a>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* PROFESSIONAL PROJECTS */}
        <div>
          <h2 className="text-3xl font-semibold text-text mb-6">Professional Projects</h2>
          <ul className="space-y-8">
            {professionalProjects.map((project, index) => (
              <motion.li
                key={index}
                className="text-text bg-white p-6 rounded-lg shadow-lg text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-1">{project.description}</p>
                <p className="mt-1 italic text-sm">Technologies: {project.tech.join(", ")}</p>
                <div className="flex gap-4 mt-2 text-sm">
                  <a href={project.link} target="_blank" className="text-primary underline">View Project</a>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

      </div>

      <Footer/>
    </section>
  );
};

export default Projects;
