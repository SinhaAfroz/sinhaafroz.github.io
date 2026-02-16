import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Call to action */}
        <p className="mb-4 text-lg font-medium text-text">Let's Connect!</p>

        {/* Social / contact icons */}
        <div className="flex justify-center gap-6">
          <a
            href="mailto:sinhaafroz16@gmail.com"
            className="text-primary hover:scale-125 hover:shadow-2xl transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/sinha-afroz"
            className="text-primary hover:scale-125 hover:shadow-2xl transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/yourusername"
            className="text-primary hover:scale-125 hover:shadow-2xl transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub size={28} />
          </a>
        </div>

        {/* Last updated / copyright */}
        <p className="mt-4 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sinha Afroz. Last updated: Feb 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
