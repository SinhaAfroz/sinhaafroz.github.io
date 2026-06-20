import { FaEnvelope, FaLinkedin, FaGithub, FaGraduationCap } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-6 mt-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4">

        <div className="flex gap-5">
          <a href="mailto:sinhaafroz16@gmail.com" title="Email" className="text-gray-400 hover:text-primary transition">
            <FaEnvelope size={18} />
          </a>
          <a href="https://scholar.google.com/citations?user=LgGoP98AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" title="Google Scholar" className="text-gray-400 hover:text-primary transition">
            <FaGraduationCap size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sinha-afroz" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-400 hover:text-primary transition">
            <FaLinkedin size={18} />
          </a>
          <a href="https://github.com/SinhaAfroz" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-400 hover:text-primary transition">
            <FaGithub size={18} />
          </a>
        </div>

        <p className="text-xs text-gray-400" suppressHydrationWarning>&copy; {new Date().getFullYear()} Sinha Afroz</p>

      </div>
    </footer>
  );
};

export default Footer;
