// Navbar.tsx
"use client";

import Link from "next/link";

export const Navbar = () => (
  <nav className="bg-gray-600  shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
      <h1 className="text-2xl font-bold">MyPortfolio</h1>
      <div className="space-x-6">
        <Link href="#about" className="hover:text-blue-400">About</Link>
        <Link href="#projects" className="hover:text-blue-400">Projects</Link>
        <Link href="#contact" className="hover:text-blue-400">Contact</Link>
      </div>
    </div>
  </nav>
);
