"use client";

import { motion } from "framer-motion";

export function ProjectsHeader() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-10"
    >
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        Proof of <span className="text-zinc-600">Work.</span>
      </h1>
      <p className="text-zinc-400 text-base min-w-xs leading-relaxed">
        A collection of the projects I&apos;ve built so far. Showing my progress from writing my first messy JavaScript apps to building structured, full-stack platforms with Next.js and TypeScript.
      </p>
    </motion.div>
  );
}