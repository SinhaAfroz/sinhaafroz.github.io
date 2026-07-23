"use client";

const researchProjects = [
  {
    title: "A Human-in-the-Loop Immersive Generative VR System for Imagery-Based Psychotherapy",
    description:
      "Designed and developed an immersive VR system that integrates generative AI to support imagery-based psychotherapeutic practices. The system places a human therapist in the loop, enabling real-time scene generation tailored to patient needs. Built in collaboration with researchers from the University of Miami and St. Jude Children's Research Hospital.",
    tech: ["Unity", "VR", "Generative AI", "HCI"],
    status: "Accepted — IEEE ISMAR 2026 (Adjunct Proceedings)",
    statusColor: "yellow",
    links: [
      { label: "Demo", url: "https://kennesawedu-my.sharepoint.com/:v:/g/personal/safroz1_students_kennesaw_edu/IQBmoOrphZqTR4O2fMiqomohAamtsJ0TN5MM8r6-vugzveo?e=r4VnRF&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D" },
    ],
  },
  {
    title: "Beyond Slices: Multi-User, Multi-Modal VR for Medical Imaging",
    description:
      "Built a narrative-driven, multi-user Virtual Reality system that allows clinicians and students to collaboratively explore 3D medical imaging data. The system supports multiple interaction modalities and was developed as part of the IEEE 3DUI Contest, enabling immersive medical education and surgical planning workflows.",
    tech: ["Unity", "VR", "Multi-User Networking", "Medical Imaging"],
    status: "Published — IEEE VRW 2026, pp. 1339–1340",
    statusColor: "green",
    links: [
      { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/abstract/document/11489916" },
      { label: "DOI", url: "https://doi.org/10.1109/VRW70859.2026.00344" },
      { label: "PDF", url: "https://par.nsf.gov/servlets/purl/10686348" },
      { label: "Demo", url: "https://kennesawedu-my.sharepoint.com/:v:/g/personal/safroz1_students_kennesaw_edu/IQAp6qMgaTQaRY95bGONFx1bAQ7BOFzlVoBNKrfuicFO-Rs?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=q1hkzy" },
    ],
  },
];

const otherProjects = [
  {
    title: "Real-Time Face Recognition with Mask",
    description:
      "Developed an advanced face recognition system capable of identifying individuals both with and without face masks using a deep CNN in Python. Integrated into a compact hardware model to demonstrate real-world security applications during health crises.",
    tech: ["Python", "Deep Learning", "CNN"],
    publication: "https://doi.org/10.1145/3603781.3603863",
    demo: "https://www.youtube.com/embed/ppKqjw5Q08A?autoplay=0&controls=1",
  },
  {
    title: "Water Cleaning Boat — Simsibin",
    description:
      "Award-winning autonomous boat designed to clean polluted surface water, built for the UIU CSE Project Show (Spring 2019). Used a Raspberry Pi and Arduino Uno to enable autonomous navigation and pollutant collection, emphasizing IoT-based environmental sustainability.",
    tech: ["Raspberry Pi", "Arduino Uno", "IoT"],
    award: "🏆 1st Place — UIU CSE Project Show, Spring 2019",
    demo: "https://drive.google.com/file/d/1lFAGXMjOSxJZxOj1la_DgTmuPDsWb1J3/preview",
  },
  {
    title: "Identification of DNA-Binding Proteins",
    description:
      "Used deep learning to predict DNA-binding proteins (DBPs) and their role in gene expression regulation. Applied neural networks to analyze genetic data and predict protein interactions — relevant to diseases involving immune dysfunction, muscle conditions, and oxygen transport.",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    github: "https://github.com/SinhaAfroz/DNA-binding-protein-Region-Prediction",
  },
  {
    title: "Dhaka RentVision: Smart Pricing Insights",
    description:
      "Predicts rental prices in Dhaka based on location, area size, and number of rooms. Achieved 94.5% accuracy using linear regression after thorough data preprocessing. Features a real-time prediction interface built with Flask.",
    tech: ["Python", "Linear Regression", "Flask"],
    github: "https://github.com/SinhaAfroz/Dhaka-RentVision-Smart-Pricing-Insights",
  },
  {
    title: "Ticket Reservation System",
    description:
      "Java-based bus ticket reservation system with file I/O for efficient storage and retrieval of booking data. Allows users to book, cancel, and view tickets — built to streamline reservation workflows for bus services.",
    tech: ["Java", "File I/O"],
    github: "https://github.com/SinhaAfroz/Ticket-Reservation-Project",
  },
  {
    title: "Save the Butterfly",
    description:
      "A 2D interactive game built for a Computer Graphics course where players rescue butterflies trapped in cages using arrows. Implemented in C and OpenGL, exploring interactive graphics and game mechanics.",
    tech: ["C", "OpenGL"],
    github: "https://github.com/SinhaAfroz/Graphic-Project-Save-the-Butterfly",
  },
];

const professionalProjects = [
  {
    title: "Popular Travel Ltd. B2B Italy Website",
    description:
      "Developed a full-stack web application to manage airline ticket purchasing for B2B users in the Italy branch of Popular Travel Ltd. Integrated real-time data and built an efficient booking interface for business clients.",
    tech: ["HTML", "Tailwind CSS", "Vue.js", "Laravel", "MySQL"],
    link: "https://agt.populartravels.it/account/login",
  },
  {
    title: "Dhaka Popular Travel Website",
    description:
      "Streamlined the airline ticket booking process through a user-friendly B2B web application. Handled complex data management, real-time availability, and reservation workflows for business users.",
    tech: ["HTML", "CSS", "Alpine.js"],
    link: "https://populartravel.com.bd/",
  },
];

const statusColors = {
  green: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400",
  yellow: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400",
};

const Tag = ({ text }) => (
  <span className="text-xs text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded-full">
    {text}
  </span>
);

const Projects = () => {
  return (
    <section className="bg-white dark:bg-gray-950 min-h-screen py-6 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 py-2">Projects</h1>
        {/* <p className="text-gray-500 dark:text-gray-400 text-sm mb-12">
          Research and personal projects from my work at the DreamSpace Lab and beyond.
        </p> */}

        {/* Research Projects */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            Research Projects
          </h2>
          <div className="space-y-6">
            {researchProjects.map((project, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-900">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-base leading-snug">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{project.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[project.statusColor]}`}>
                    {project.status}
                  </span>
                  {project.links?.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                      [{link.label}]
                    </a>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => <Tag key={t} text={t} />)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Projects */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            Industry Projects
          </h2>
          <div className="space-y-6">
            {professionalProjects.map((project, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-900">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-base leading-snug">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{project.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline">[View Project]</a>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => <Tag key={t} text={t} />)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            Other Projects
          </h2>
          <div className="space-y-6">
            {otherProjects.map((project, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 bg-gray-50 dark:bg-gray-900">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-base leading-snug">{project.title}</h3>
                {project.award && (
                  <p className="text-xs text-yellow-600 dark:text-yellow-400 font-medium mt-1">{project.award}</p>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{project.description}</p>

                {project.demo && (
                  <div className="mt-4">
                    <iframe
                      width="100%"
                      height="280"
                      src={project.demo}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                  </div>
                )}

                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {project.publication && (
                    <a href={project.publication} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline">[Publication]</a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline">[GitHub]</a>
                  )}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tech.map((t) => <Tag key={t} text={t} />)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
