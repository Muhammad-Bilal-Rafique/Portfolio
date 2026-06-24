"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BilalImage from "../../../public/me.jpg"

export function StoryHero() {
  return (
    <section className="relative w-full pt-10 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          The <span className="text-zinc-600">Developer</span> Behind the Code.
        </h1>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          I&apos;m a 4th-semester BSCS student at UVAS. What started as a general curiosity for programming quickly evolved into a deep obsession with modern web architecture.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side: The Narrative */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 space-y-6 text-zinc-300 leading-relaxed text-sm md:text-base"
        >
          <p>
            My journey into tech hasn&apos;t been a perfect straight line. During my first year, I dove headfirst into HTML, CSS, JS, and the MERN stack. I made the classic beginner mistake of trying to build an entirely new project for every single micro-concept I learned. It was exhausting.
          </p>
          <p>
            Eventually, I burned out and didn&apos;t touch code for almost five months. But stepping away was exactly what I needed. When I came back, I returned with serious focus and a new philosophy: <strong className="text-white font-semibold">build with purpose, and learn by doing.</strong>
          </p>
          <p>
            I transitioned out of &quot;tutorial hell&quot; on YouTube and started reading official documentation—learning tools like Shadcn and Next.js straight from the source. Today, web development isn&apos;t just my major; it&apos;s what I genuinely enjoy doing every single day. I love the challenge of a tough bug, and I&apos;ve learned that sometimes the best debugging tool is just taking a 5-minute walk.
          </p>
        </motion.div>

        {/* Right Side: The Photo Container */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:w-100 shrink-0"
        >
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-zinc-800/50 p-2 transform transition-transform hover:scale-[1.02] duration-500 shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-tr from-yellow-500/10 to-transparent opacity-50" />
            <Image
              src={BilalImage}
              alt="Muhammad Bilal Rafique"
              width={500}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}