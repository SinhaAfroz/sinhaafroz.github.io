"use client"; // ✅ Needed for Next.js App Router

import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Feel free to reach out for collaborations, research discussions, or just to say hi!
      </p>

      {/* Contact Icons */}
      <div className="flex gap-6 mb-6">
        <a
          href="mailto:sinhaafroz16@gmail.com"
          className="text-blue-600 hover:bg-secondary px-1 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={32} />
        </a>

        <a
          href="https://www.linkedin.com/in/sinha-afroz"
          className="text-blue-600 hover:bg-secondary transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={32} />
        </a>
      </div>

      {/* Google Form Button */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdmoABBieoAsf2TPEdOHOL-9_1B62XSz-fDCt9DI55I4cxqSw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-secondary transition"
      >
        Send Me a Message 💌
      </a>
    </div>
  );
};

export default ContactPage;
