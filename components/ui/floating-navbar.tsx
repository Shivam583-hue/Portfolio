"use client"

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/lib/util";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/20 rounded-full bg-black/40 backdrop-blur-md shadow-[0px_8px_16px_-6px_rgba(0,0,0,0.2),0px_0px_16px_-2px_rgba(0,0,0,0.1)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative text-white items-center flex space-x-1 hover:text-white/80 transition-colors font-medium"
          )}
        >
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </Link>
      ))}
      <button className="border text-sm font-medium relative border-white/30 text-white px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 transition-all hover:border-white/50 hover:shadow-[0px_0px_16px_rgba(255,255,255,0.1)]">
        <span>CLI</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-violet-400 to-transparent h-px" />
      </button>
    </motion.div>
  );
};

export default FloatingNav;
