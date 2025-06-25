"use client";

import Image from "next/image";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Hero = () => (
  <section className="min-h-[90vh] flex items-center justify-center text-center px-4">
    <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-5xl mx-auto">
      <div className="md:w-1/2 text-white">
        <h2 className="text-4xl md:text-6xl mt-4 whitespace-nowrap font-extrabold">Shereen Ahmed</h2>
        <p className="text-xl mt-4">Full Stack Developer | Agentic AI Engineer | Freelancer</p>
        
        <div className="flex justify-center md:justify-start gap-5 mt-6 text-7xl justify">
          <a href="https://www.linkedin.com/in/shereen-ahmed-9241482b5/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Shereensheer" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaGithub />
          </a>
          <a href="https://www.fb.com/l/6lp1kJRRR" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
          <a href="https://x.com/shereen_ah29698" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="md:w-1/2 ">
        <img
          src="/hijab.jpg"
          alt="Profile"
          width={300}
          height={300}
          className="rounded-full shadow-lg border-4 border-white "
        />
      </div>
    </div>
  </section>
);