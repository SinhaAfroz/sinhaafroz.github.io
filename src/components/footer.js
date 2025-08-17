import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-4 text-lg font-medium text-inherit">Let's Connect!</p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:sinhaafroz16@gmail.com"
            className="text-blue-600 hover:scale-125 hover:shadow-2xl transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/sinha-afroz"
            className="text-blue-600 hover:scale-125 hover:shadow-2xl transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
