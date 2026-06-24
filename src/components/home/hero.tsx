"use client";

import Link from "next/link";
import { motion} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = ["Full-Stack Developer", "Next.js & TypeScript Dev", "Open to Internships"];

function TypewriterText() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      // Pause at full word then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      // Typing or deleting
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentRole.slice(0, prev.length - 1)
            : currentRole.slice(0, prev.length + 1)
        );
      }, isDeleting ? 35 : 65);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span className="text-zinc-500 font-medium inline-flex items-center gap-2">
      {displayText}
      <span className="inline-block w-0.5 h-[1em] bg-indigo-400 align-middle animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section className="mt-20 relative w-full pt-12 pb-20 flex flex-col items-center text-center justify-center overflow-hidden">
      
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-[11px] font-medium tracking-wider text-zinc-300 uppercase mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for Internships & Roles 2026
      </motion.div>

      {/* Main Intro Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1] mb-6"
      >
        Hi, I&apos;m Muhammad Bilal Rafique <br />
        <TypewriterText />
      </motion.h1>

      {/* One-Liner Pitch */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="text-sm sm:text-base text-zinc-400 max-w-xl font-normal leading-relaxed tracking-wide mb-10 px-4"
      >
        Self-taught developer and 4th-semester university student building clean, modern web applications. Focused on <span className="text-white font-medium">Next.js</span> and <span className="text-white font-medium">TypeScript</span>, turning ideas into functional, user-friendly experiences.
      </motion.p>

      {/* Call to Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full px-4"
      >
        {/* Primary Action */}
        <Link
          href="/projects"
          className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 font-semibold text-xs px-6 py-3 rounded-full transition-colors duration-200 group shadow-lg shadow-white/5"
        >
          View All Projects
          <ArrowUpRight className="ml-1.5 w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </Link>
        
        {/* Secondary Action */}
        <Link
          href="#work"
          className="group relative inline-flex items-center justify-center text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 py-2 sm:py-0"
        >
          View Featured Project
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full" />
        </Link>
      </motion.div>

    </section>
  );
}