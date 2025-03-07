"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed left-4 top-4 z-50 text-3xl p-3 bg-navbar text-white rounded-lg focus:outline-none"
      >
        <FiMenu />
      </button>

      {/* Sidebar Menu */}
      {isOpen && (
        <div className="fixed left-0 top-0 p-4 mt-16 ml-1 space-y-4 flex flex-col items-center z-40">
          <Link href="/" className={`flex items-center justify-center w-12 h-12 rounded-lg ${pathname === "/" ? "bg-blue-500" : "bg-navbar hover:bg-gray-600"
            }`} onClick={toggleMenu}>
            <AiOutlineHome className="text-white text-2xl" />
          </Link>
          <Link href="/about" className={`flex items-center justify-center w-12 h-12 rounded-lg ${pathname === "/about" ? "bg-blue-500" : "bg-navbar hover:bg-gray-600"
            }`} onClick={toggleMenu}>
            <AiOutlineUser className="text-white text-2xl" />
          </Link>
          <Link href="/projects" className={`flex items-center justify-center w-12 h-12 rounded-lg ${pathname === "/projects" ? "bg-blue-500" : "bg-navbar hover:bg-gray-600"
            }`} onClick={toggleMenu}>
            <AiOutlineProject className="text-white text-2xl" />
          </Link>
          <Link href="/contact" className={`flex items-center justify-center w-12 h-12 rounded-lg ${pathname === "/contact" ? "bg-blue-500" : "bg-navbar hover:bg-gray-600"
            }`} onClick={toggleMenu}>
            <AiOutlineMail className="text-white text-2xl" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;