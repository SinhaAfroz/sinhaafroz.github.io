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
    title: "A Human-in-the-Loop Immersive Generative Virtual Reality System for Imagery-Based Psychotherapeutic Practices",
    authors: "Sinha Afroz, Wendy G. Lichtenthal, Erica C. Kaye, Lei Zhang",
    venue: "IEEE International Symposium on Mixed and Augmented Reality (ISMAR) 2026 — Adjunct Proceedings",
    type: "Conference",
    status: "Accepted",
    tags: ["VR", "Psychotherapy", "Generative AI", "Healthcare"],
  },
  {
    year: "2026",
    title: "Immersive Extended Reality (XR) in Oncology: A Scoping Review of Virtual Reality (VR) and Mixed Reality (MR) Applications for 3D Solid Tumor Visualization",
    authors: "Sinha Afroz, Lei Zhang",
    venue: "Frontiers in Virtual Reality",
    type: "Journal",
    status: "Published",
    links: [
      { label: "Frontiers", url: "https://www.frontiersin.org/journals/virtual-reality/articles/10.3389/frvir.2026.1780348/abstract" },
      { label: "DOI", url: "https://doi.org/10.3389/frvir.2026.1780348" },
    ],
    citation: "Afroz S and Zhang L (2026) Front. Virtual Real. 7:1780348. doi: 10.3389/frvir.2026.1780348",
    tags: ["XR", "Oncology", "Scoping Review"],
  },
  {
    year: "2026",
    title: "Beyond Slices: A Narrative-Driven, Multi-User, Multi-Modal Virtual Reality System for Medical Imaging Presentation",
    authors: "Sinha Afroz, Devon Haynes, Reece Freeman, Mason Prather, Feiyu Lu, Brooke Zhao, Joy Li, Sungchul Jung, Lei Zhang",
    venue: "2026 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW) — 3DUI Contest Demo, Daegu, Korea, pp. 1339–1340",
    type: "Conference",
    status: "Published",
    links: [
      { label: "IEEE Xplore", url: "https://ieeexplore.ieee.org/abstract/document/11489916" },
      { label: "DOI", url: "https://doi.org/10.1109/VRW70859.2026.00344" },
      { label: "PDF", url: "https://par.nsf.gov/servlets/purl/10686348" },
    ],
    citation: "S. Afroz et al., in 2026 IEEE VRW, Daegu, Korea, 2026, pp. 1339–1340, doi: 10.1109/VRW70859.2026.00344",
    tags: ["VR", "Medical Imaging", "Multi-User", "3DUI Contest"],
  },
  {
    year: "2023",
    title: "Real-Time Face Recognition with Mask using Deep Convolutional Neural Network",
    authors: "Md. Ashif Mahmud Joy, Md. Fuad Hasan Khan Chowdhury, Sinha Afroz, Md. Nurul Islam, Ruaida Muhsinat, Mukta Akanda Moly, Dewan Md. Farid",
    venue: "Proceedings of the 2023 4th International Conference on Computing, Networks and Internet of Things (CNIOT '23), Xiamen, China, pp. 457–461",
    type: "Conference",
    status: "Published",
    links: [
      { label: "DOI", url: "https://doi.org/10.1145/3603781.3603863" },
      { label: "PDF", url: "https://dl.acm.org/doi/pdf/10.1145/3603781.3603863" },
      { label: "ResearchGate", url: "https://www.researchgate.net/publication/372694340_Real-Time_Face_Recognition_with_Mask_using_Deep_Convolutional_Neural_Network" },
    ],
    tags: ["Deep Learning", "CNN", "Computer Vision"],
  },
];

const PubList = ({ items }) => (
  <ol className="space-y-6">
    {items.map((pub, i) => (
      <li key={i} className="flex gap-4 text-sm">
        <span className="text-secondary font-semibold shrink-0 mt-0.5">[{i + 1}]</span>
        <div>
          <p className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">{pub.title}</p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">{highlightName(pub.authors)}</p>
          <p className="text-gray-500 dark:text-gray-400 italic">{pub.venue}, {pub.year}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
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
      </li>
    ))}
  </ol>
);

const Publications = () => {
  const journals = publications.filter(p => p.type === "Journal");
  const conferences = publications.filter(p => p.type === "Conference");

  return (
    <section className="bg-white dark:bg-gray-950 min-h-screen py-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 py-4">Publications</h1>
        {/* <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">
          Research output from the DreamSpace Lab, Kennesaw State University.
        </p> */}

        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            Journal Papers
          </h2>
          <PubList items={journals} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
            Conference Papers
          </h2>
          <PubList items={conferences} />
        </div>

      </div>
    </section>
  );
};

export default Publications;
