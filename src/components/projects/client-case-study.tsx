"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink, 
  Lock, 
  ShieldCheck, 
  Smartphone, 
  Truck, 
  SlidersHorizontal 
} from "lucide-react";
import BehruzHeroImg from "../../../public/behruz-hero.jpg";
import BehruzLogoImg from "../../../public/behruz-logo.png";
import BehruzProd1 from "../../../public/behruz-product-1.jpg";
import BehruzProd2 from "../../../public/behruz-product-2.jpg";

const keyDeliverables = [
  {
    icon: Smartphone,
    title: "Responsive Couture Storefront",
    desc: "Mobile-first catalog browsing with size selectors (S/M/L/XL), dynamic size guides, and wishlist support.",
  },
  {
    icon: Truck,
    title: "Real-Time Order Tracking UI",
    desc: "Customer tracking portal (/track-order) verifying orders with unique IDs (e.g. BFH-XXXX) and customer phone numbers.",
  },
  {
    icon: SlidersHorizontal,
    title: "Advance Deposit & COD Flow",
    desc: "Tailored Pakistani payment workflow with PKR 1,000 advance transfer verification via WhatsApp receipt and balance on delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Protected Admin Management Portal",
    desc: "Dedicated administrative portal (/admin/login) for catalog management, stock updates, order statuses, and regional delivery fees.",
  },
];

const techStack = [
  "Next.js (App Router)",
  "TypeScript",
  "Tailwind CSS",
  "Cloudinary CDN",
  "Lucide Icons",
];

export function ClientCaseStudy() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full"
    >
      <div className="glass-panel rounded-3xl overflow-hidden border border-zinc-800/60 shadow-2xl shadow-black/60">
        
        {/* Top Header Banner */}
        <div className="border-b border-zinc-800/60 bg-zinc-950/40 px-6 sm:px-10 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
              Real Client Project · Live in Production
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="hidden sm:inline">Delivered Commercial Solution</span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="font-mono text-zinc-400">behruzfashionhouse.com</span>
          </div>
        </div>

        {/* Main Case Study Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12">
          
          {/* Left Column: Context & Deliverables (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              {/* Brand Logo & Name */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-800 p-2 flex items-center justify-center shrink-0">
                  <Image
                    src={BehruzLogoImg}
                    alt="Behruz Fashion House Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Behruz Fashion House
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                    Luxury Pakistani Couture & Pret · Lahore, Pakistan
                  </p>
                </div>
              </div>

              {/* Context Summary */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                Behruz Fashion House is an established Pakistani designer couture brand requiring a modern digital storefront to replace manual social media DM ordering. I designed and engineered a custom, high-performance Next.js e-commerce platform tailored to local buyer expectations—integrating advance deposit workflows, live order tracking, and an administrative portal.
              </p>

              {/* Key Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {keyDeliverables.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.title} 
                      className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col gap-2"
                    >
                      <div className="flex items-center gap-2.5 text-white text-sm font-semibold">
                        <div className="p-1.5 rounded-md bg-white/5 text-emerald-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        {item.title}
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Feature Checklist */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {[
                  "Mobile-first responsive UX",
                  "Automated Cash on Delivery workflow",
                  "WhatsApp international order line",
                  "Cloudinary CDN image optimization",
                  "Dynamic shipping fee calculator",
                  "Role-protected management portal"
                ].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags & Live CTA */}
            <div className="pt-4 border-t border-zinc-800/60">
              <div className="flex flex-wrap gap-2 mb-6">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-900/60 border border-zinc-800 rounded-lg"
                  >
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

                <div className="inline-flex items-center gap-2 text-xs text-zinc-500 px-4 py-2.5 rounded-full border border-zinc-800/60 bg-zinc-900/30">
                  <Lock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Client Proprietary Codebase</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Mockup Showcase (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
            
            {/* Browser Mockup Window */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl group">
              {/* Browser Titlebar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-black/40 border border-zinc-800 text-[11px] text-zinc-400 font-mono max-w-xs truncate">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>https://behruzfashionhouse.com</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Main Banner Screenshot */}
              <div className="relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden bg-black">
                <Image
                  src={BehruzHeroImg}
                  alt="Behruz Fashion House Live Storefront"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Gradient Scrim for Contrast */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Store Tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-black/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                  <span className="font-medium truncate">Luxury Couture Desktop & Mobile Experience</span>
                  <a 
                    href="https://behruzfashionhouse.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 shrink-0 ml-2"
                  >
                    Open <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip: Product Articles & Mobile Detail */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 group">
                <Image
                  src={BehruzProd1}
                  alt="Behruz Couture Article"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-medium text-zinc-300 bg-black/50 px-2 py-0.5 rounded border border-white/10">
                  Catalog Article
                </span>
              </div>

              <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 group">
                <Image
                  src={BehruzProd2}
                  alt="Behruz Kaftan Collection"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-medium text-zinc-300 bg-black/50 px-2 py-0.5 rounded border border-white/10">
                  Pret Collection
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}
