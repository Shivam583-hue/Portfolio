"use client"

import React from "react";
import { Download } from "lucide-react";

const HeroHeader = () => {
  return (
    <div className="relative  min-h-[100vh] w-full flex flex-col items-center justify-center text-center">
      <div className="relative z-10 space-y-6 px-4">
        <p className="text-gray-100 tracking-wide">BASED IN INDIA</p>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Software Engineer
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500">
            Specializing In Web & Mobile
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Applications
          </h1>
        </div>

        <p className="text-gray-900 text-md max-w-2xl mx-auto font-mono">
          Hi, I&apos;m Shivam, I create solutions across all layers of software engineering.
        </p>

        <div className="flex items-center justify-center gap-4 pt-4">
          <button className="px-6 py-2.5 rounded-lg bg-transparent text-white hover:bg-gray-900 text-purple-200 transition-colors">
            See My Work
          </button>


          <button className="flex gap-2 bg-gray-800 text-white border border-gray-400 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <Download size={20} />
            Download CV
          </button>

        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
