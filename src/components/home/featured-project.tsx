"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiGithub } from "react-icons/si";
import OrbitImg from "../../../public/orbit.png";

const orbitFeatures = [
  "Role-Based Access Control (Admin/User)",
  "Stripe Payment Integration",
  "AI Reviews Summarizer",
  "Real-time Inventory Tracking",
  "Real-time Order Tracking UI",
  "Order Placement And Delievered Mails"
];

const orbitTech = ["Next.js", "TypeScript", "Stripe", "Zustand", "Auth.js", "Cloudinary"];

export function FeaturedProject() {
  return (
    <section id="work" className="relative w-full py-20 px-4 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Featured Work
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-xl">
          A production-grade e-commerce platform built to demonstrate advanced full-stack architecture, secure payments, and modern state management.
        </p>
      </motion.div>

      {/* The Bento Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="glass-panel rounded-4xl overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-black/50 border border-zinc-800/50"
      >
        
        {/* Left Content Area */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold bg-white text-black rounded-full">
                Latest Release
              </span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                E-Commerce
              </span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Orbit <span className="text-zinc-600">V2</span>
            </h3>
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              A complete rewrite from Nexus (V1). Engineered with TypeScript, 
              Zustand for lightning-fast state, and an integrated admin dashboard handling 
              real-time inventory and AI-driven review summaries.
            </p>

            {/* Feature Checklist */}
            <ul className="space-y-3 mb-10">
              {orbitFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Tags & CTAs */}
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {orbitTech.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://orbit-three-iota.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 font-semibold text-sm px-6 py-3 rounded-full transition-colors duration-200 group"
              >
                Visit Live Site
                <ArrowUpRight className="ml-1.5 w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <a 
                href="https://github.com/Muhammad-Bilal-Rafique/Orbit-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 font-medium text-sm px-6 py-3 rounded-full transition-all duration-200"
              >
                <SiGithub className="mr-2 w-4 h-4" />
                View Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Area (Perspective Presentation) */}
        {/* Right Image Area (Fully Visible Presentation) */}
        <div className="flex-1 relative bg-zinc-900/50 border-t lg:border-t-0 lg:border-l border-zinc-800/50 flex items-center justify-center p-8 md:p-12 group overflow-hidden">
          
          {/* Subtle glowing background effect behind image */}
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          {/* 
            Centered, fully contained image wrapper. 
            w-full ensures it fits inside the padding without getting cut off.
          */}
          <div className="relative w-full rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl transform transition-all duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02] bg-zinc-950 z-10">
            <Image
              src={OrbitImg}
              alt="Orbit Dashboard Screenshot"
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              priority
              placeholder="blur"
            />
          </div>
          
        </div>

      </motion.div>
    </section>
  );
}