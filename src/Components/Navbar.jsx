import { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-4">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md border border-gray-100 py-3 px-6 rounded-2xl shadow-lg flex justify-between items-center relative">
        {/* LOGO AREA */}
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt="Charan Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-black tracking-tighter text-[#0f172a]">
            Charan<span className="text-blue-600">sala</span>
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/"
            className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/resume"
            className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            Resume
          </Link>
          <Link
            to="/projects"
            className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none p-2"
        >
          {isOpen ? (
            // X Mark Icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* MOBILE DROPDOWN MENU */}
        <div
          className={`
          absolute top-20 left-0 w-full bg-white border border-gray-100 rounded-2xl shadow-xl p-6 flex flex-col gap-4 transition-all duration-300 transform md:hidden
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
        `}
        >
          <Link
            onClick={toggleMenu}
            to="/"
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 py-2 border-b border-gray-50"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            to="/resume"
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 py-2 border-b border-gray-50"
          >
            Resume
          </Link>
          <Link
            onClick={toggleMenu}
            to="/projects"
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 py-2 border-b border-gray-50"
          >
            Projects
          </Link>
          <Link
            onClick={toggleMenu}
            to="/contact"
            className="text-lg font-semibold text-gray-700 hover:text-blue-600 py-2 border-b border-gray-50"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
