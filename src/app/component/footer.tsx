import React from "react";

export const Footer = () => (
  <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-10 border-t border-gray-800 shadow-inner shadow-cyan-500/10">
    <div className="max-w-4xl mx-auto px-6 flex flex-col items-center justify-center space-y-5">
      
      <div className="flex items-center space-x-2 text-gray-300 text-lg font-medium">
        <span>Made </span>
        <span>by Shereen Ahmed</span> <span className="text-pink-500 animate-pulse">❤️</span>
      </div>

      <div className="text-gray-400 text-sm">
        <a href="mailto:shereenahmed306@gmail.com" className="hover:text-cyan-400 transition-colors duration-300">
          shereenahmed330@gmail.com
        </a>
      </div>

      <div className="flex space-x-6 text-xl">
        <a
          href="https://github.com/Shereensheer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          🌐 GitHub
        </a>
        <a
          href="https://linkedin.com/in/shereen-ahmed-9241482b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          💼 LinkedIn
        </a>
        <a
          href="mailto:shereenahmed330@gmail.com"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          ✉️ Email
        </a>
      </div>

      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

