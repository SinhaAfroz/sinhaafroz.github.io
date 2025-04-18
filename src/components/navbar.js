"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 text-white bg-navbar p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
      >
        <FiMenu size={24} />
      </button>

      {/* Animated Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-16 z-40 flex flex-col items-center pt-20 pl-4 space-y-6 
        transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <SidebarLink href="/" icon={<AiOutlineHome />} active={pathname === "/"} toggleMenu={toggleMenu} />
        <SidebarLink href="/about" icon={<AiOutlineUser />} active={pathname === "/about"} toggleMenu={toggleMenu} />
        <SidebarLink href="/projects" icon={<AiOutlineProject />} active={pathname === "/projects"} toggleMenu={toggleMenu} />
        <SidebarLink href="/contact" icon={<AiOutlineMail />} active={pathname === "/contact"} toggleMenu={toggleMenu} />
      </div>
    </>
  );
};

// 💅 Reusable Link Component
const SidebarLink = ({ href, icon, active, toggleMenu }) => {
  return (
    <Link
      href={href}
      onClick={toggleMenu}
      className={`flex items-center justify-center w-12 h-12 rounded-lg bg-navbar
      ${active ? "bg-pink-300" : "hover:bg-gray-600"} transition-colors duration-200`}
    >
      <span className="text-white text-2xl">{icon}</span>
    </Link>
  );
};

export default Navbar;
