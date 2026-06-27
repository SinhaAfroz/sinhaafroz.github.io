"use client";

const highlightName = (authors) =>
  authors.split("Sinha Afroz").map((part, i, arr) =>
    i < arr.length - 1 ? (
      <span key={i}>{part}<strong className="text-gray-900 dark:text-white">Sinha Afroz</strong></span>
    ) : (
      <span key={i}>{part}</span>
    )
  );

const publications = [
  {
    year: "2026",
    title: "Immersive Extended Reality (XR) in Oncology: A Scoping Review of Virtual Reality (VR) and Mixed Reality (MR) Applications for 3D Solid Tumor Visualization",
    authors: "Sinha Afroz, Lei Zhang",
    venue: "Frontiers in Virtual Reality",
    type: "Journal",
    status: "Published",
    links: [{ label: "Frontiers", url: "https://www.frontiersin.org/journals/virtual-reality/articles/10.3389/frvir.2026.1780348/abstract" }],
    tags: ["XR", "Oncology", "Scoping Review"],
  },
  {
    year: "2026",
    title: "Beyond Slices: A Narrative-Driven, Multi-User, Multi-Modal Virtual Reality System for Medical Imaging Presentation",
    authors: "Sinha Afroz, Lei Zhang",
    venue: "IEEE VR 2026",
    type: "Conference",
    status: "Published",
    links: [
      { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/document/11489916" },
      { label: "PDF", url: "https://par.nsf.gov/servlets/purl/10686348" },
    ],
    tags: ["VR", "Medical Imaging", "Multi-User"],
  },
  {
    year: "2023",
    title: "Real-Time Face Recognition with Mask using Deep Convolutional Neural Network",
    authors: "Md. Ashif Mahmud Joy, Md. Fuad Hasan Khan Chowdhury, Sinha Afroz, Md. Nurul Islam, Ruaida Muhsinat, Mukta Akanda Moly, Dewan Md. Farid",
    venue: "CNIOT '23, Xiamen, China (ACM)",
    type: "Conference",
    status: "Published",
    links: [
      { label: "DOI", url: "https://doi.org/10.1145/3603781.3603863" },
      { label: "PDF", url: "https://dl.acm.org/doi/pdf/10.1145/3603781.3603863" },
    ],
    tags: ["Deep Learning", "CNN", "Computer Vision"],
  },
];

const Publications = () => {
  return (
    <section className="bg-white dark:bg-gray-950 min-h-screen py-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 py-4">Publications</h1>

        <div className="space-y-8">
          {publications.map((pub, i) => (
            <div key={i} className="border-l-4 border-secondary pl-5 py-1">
              <p className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">{pub.title}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{highlightName(pub.authors)}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                <span className="italic">{pub.venue}</span> &mdash; {pub.year}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  pub.type === "Journal"
                    ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400"
                    : "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-400"
                }`}>
                  {pub.type}
                </span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  pub.status === "Published"
                    ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400"
                    : "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400"
                }`}>
                  {pub.status}
                </span>

                {pub.links?.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                    [{link.label}]
                  </a>
                ))}

                {pub.tags.map((tag) => (
                  <span key={tag} className="text-xs text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
