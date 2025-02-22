"use client"; // Ensure it works with hooks

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-navbar text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-2xl font-semibold">Sinha Afroz</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/projects" className="hover:text-gray-300">Projects</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          <Link href="/" className="block hover:text-gray-300" onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="block hover:text-gray-300" onClick={toggleMenu}>About</Link>
          <Link href="/projects" className="block hover:text-gray-300" onClick={toggleMenu}>Projects</Link>
          <Link href="/contact" className="block hover:text-gray-300" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
