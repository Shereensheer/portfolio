
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="#about" className="hover:text-blue-400">About</Link>
          <Link href="#projects" className="hover:text-blue-400">Projects</Link>
          <Link href="#contact" className="hover:text-blue-400">Contact</Link>
         
        </div>

        {/* Mobile Toggle Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-4 space-y-3 text-white">
          <Link href="#about" className="block hover:text-blue-400">About</Link>
          <Link href="#projects" className="block hover:text-blue-400">Projects</Link>
          <Link href="#contact" className="block hover:text-blue-400">Contact</Link>
          <Link
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-blue-400"
          >
            CV
          </Link>
        </div>
      )}
    </nav>
  );
};
