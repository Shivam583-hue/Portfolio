"use client"

import { ExpoIcon, GOIcon, NextIcon, ReactIcon, RustIcon, T3Icon } from "@/app/EntireStack/Icons";
import { motion } from "framer-motion";
import Link from "next/link";

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-[90vh] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 animate-pulse-slow" />

      <div className="flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row gap-16 items-center max-w-8xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="md:w-1/2 w-full max-w-xl"
            variants={itemVariants}
          >
            <motion.img
              src="/fy.webp"
              alt="Tech Stack"
              className="w-full rounded-3xl shadow-2xl object-cover transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-12 md:w-1/2 w-full"
            variants={itemVariants}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 text-center md:text-left tracking-tight"
              variants={itemVariants}
            >
              Core Technology Stack
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { Icon: T3Icon, name: "T3 Stack", bg: "bg-[#2e2d3a]", text: "text-white" },
                { Icon: ReactIcon, name: "React", bg: "bg-[#61dafb]", text: "text-[#282c34]" },
                { Icon: NextIcon, name: "Next.js", bg: "bg-[#000000]", text: "text-white" },
                { Icon: ExpoIcon, name: "Expo", bg: "bg-[#4630eb]", text: "text-white" },
                { Icon: RustIcon, name: "Rust", bg: "bg-[#f65b01]", text: "text-white" },
                { Icon: GOIcon, name: "Golang", bg: "bg-[#00add8]", text: "text-white" },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${tech.bg} p-5 rounded-2xl flex items-center gap-4 shadow-xl hover:shadow-2xl transition-shadow duration-300`}
                >
                  <tech.Icon />
                  <span className={`${tech.text} font-semibold text-xl tracking-wide`}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex justify-center md:justify-start mt-8"
              variants={itemVariants}
            >
              <Link href="/EntireStack" className="group relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 bg-gradient-to-r from-cyan-500 to-teal-600 px-8 py-4 rounded-xl 
                    flex items-center gap-3 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <span className="font-medium text-lg text-white tracking-wide">
                    Explore Full Stack
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white transform transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-700 blur-lg group-hover:opacity-75 opacity-0 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
