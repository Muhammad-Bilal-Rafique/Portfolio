"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Lock } from "lucide-react";
import { SiGithub } from "react-icons/si";
import OrbitImg from "../../../public/orbit.png";
import BehruzHeroImg from "../../../public/behruz-hero.jpg";
import BehruzLogoImg from "../../../public/behruz-logo.png";
import BehruzProd1 from "../../../public/behruz-product-1.jpg";
import BehruzProd2 from "../../../public/behruz-product-2.jpg";

const behruzFeatures = [
  "Responsive Mobile-First Luxury Storefront",
  "Real-Time Order Tracking UI (/track-order)",
  "Advance Deposit & Cash on Delivery (COD) Flow",
  "Protected Admin Portal for Orders & Stock",
  "Dynamic Store & Regional Shipping Settings",
  "WhatsApp Order & International Customer Helpline"
];

const behruzTech = ["Next.js", "TypeScript", "Tailwind CSS", "Cloudinary", "Lucide"];

const orbitFeatures = [
  "Role-Based Access Control (Admin/User)",
  "Stripe Payment Integration",
  "AI Reviews Summarizer",
  "Real-time Inventory Tracking",
  "Real-time Order Tracking UI",
  "Order Placement And Delivered Mails"
];

const orbitTech = ["Next.js", "TypeScript", "Stripe", "Zustand", "Auth.js", "Cloudinary"];

export function FeaturedProject() {
  return (
    <section id="work" className="relative w-full py-20 px-4 max-w-6xl mx-auto flex flex-col gap-16">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-[11px] font-medium tracking-wider text-zinc-400 uppercase mb-3">
          Portfolio Highlights
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-3">
          Featured Work
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
          From live commercial platforms built for paying clients to deep architectural exploration in full-stack engineering.
        </p>
      </motion.div>

      {/* ========================================================
          TIER 1: CLIENT SPOTLIGHT — BEHRUZ FASHION HOUSE
         ======================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="glass-panel rounded-4xl overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-black/50 border border-zinc-800/60"
      >
        {/* Left Content Area */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-between relative z-10">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Real Client Project
              </span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                E-Commerce Storefront · Live in Production
              </span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-black border border-zinc-800 p-1.5 flex items-center justify-center shrink-0">
                <Image
                  src={BehruzLogoImg}
                  alt="Behruz Logo"
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Behruz Fashion House
              </h3>
            </div>
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              A custom-built e-commerce storefront for an established Pakistani luxury couture brand in Lahore. Engineered from scratch with a responsive mobile catalog, advance bank deposit verification with Cash on Delivery, a real-time order tracking UI, and a protected administrative portal for full product and order control.
            </p>

            {/* Feature Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {behruzFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Tags & CTAs */}
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {behruzTech.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://behruzfashionhouse.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 group shadow-lg shadow-white/5"
              >
                Visit Live Website
                <ArrowUpRight className="ml-1.5 w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <div className="inline-flex items-center gap-2 text-xs text-zinc-500 px-4 py-3 rounded-full border border-zinc-800/80 bg-zinc-900/30">
                <Lock className="w-3.5 h-3.5 text-zinc-500" />
                <span>Client Proprietary Codebase</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Area (Browser Window Mockup) */}
        <div className="flex-1 relative bg-zinc-900/40 border-t lg:border-t-0 lg:border-l border-zinc-800/50 flex flex-col justify-center p-6 sm:p-10 group overflow-hidden">
          
          <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl bg-zinc-950 z-10 transition-all duration-700 group-hover:-translate-y-1">
            
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-black/40 border border-zinc-800 text-[11px] text-zinc-400 font-mono">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>https://behruzfashionhouse.com</span>
              </div>
              <div className="w-6" />
            </div>

            {/* Storefront Hero View */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-black">
              <Image
                src={BehruzHeroImg}
                alt="Behruz Fashion House Storefront"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-black/70 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                <span className="font-medium truncate">Couture Storefront & Catalog Experience</span>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Store
                </span>
              </div>
            </div>
          </div>

          {/* Mini product preview bar */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <Image
                src={BehruzProd1}
                alt="Behruz Article 1"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-zinc-300 bg-black/60 px-1.5 py-0.5 rounded">
                Luxury Couture
              </span>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <Image
                src={BehruzProd2}
                alt="Behruz Article 2"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1.5 left-2 text-[10px] font-medium text-zinc-300 bg-black/60 px-1.5 py-0.5 rounded">
                Pret Collection
              </span>
            </div>
          </div>

        </div>
      </motion.div>

      {/* ========================================================
          TIER 2: ARCHITECTURE SPOTLIGHT — ORBIT (V2)
         ======================================================== */}
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
                Flagship Architecture
              </span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
                Full-Stack · TypeScript & Stripe
              </span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Orbit <span className="text-zinc-600">V2</span>
            </h3>
            
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              A complete architectural rewrite of Nexus. Engineered with TypeScript, 
              Zustand for predictable state management, Stripe payment processing, and an 
              integrated admin dashboard with AI-driven review summarization.
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
                Visit Live Demo
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

        {/* Right Image Area */}
        <div className="flex-1 relative bg-zinc-900/50 border-t lg:border-t-0 lg:border-l border-zinc-800/50 flex items-center justify-center p-8 md:p-12 group overflow-hidden">
          
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
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