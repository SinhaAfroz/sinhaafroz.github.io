import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-700 mb-4 text-lg font-medium">Let's Connect!</p>
        <div className="flex justify-center gap-6">
          {/* Email Icon */}
          <a
            href="mailto:sinhaafroz16@gmail.com"
            className="text-blue-600 hover:bg-secondary transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={28} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/sinha-afroz"
            className="text-blue-600 hover:bg-secondary transition"
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
