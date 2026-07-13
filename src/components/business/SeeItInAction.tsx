"use client";

import { motion } from "framer-motion";
import { Check, ExternalLink, Lock } from "lucide-react";

import Image from "next/image";
import OrbitImg from "../../../public/Orbit-landscape.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Variants } from "framer-motion";

const features = [
  "Professional product pages",
  "Secure checkout experience",
  "Mobile-first design",
  "Order management dashboard",
  "AI-powered review summaries",
  "Fast loading performance",
  "Responsive on every device",
  "Clean admin interface",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut", // Properly typed now
    },
  },
};

export default function SeeItInAction() {
  return (
    <section id="live-demo" className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground mb-6">
            <span className="flex h-2 w-2 rounded-full bg-ring mr-2 animate-pulse"></span>
            Real Project
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            See What Your Business <br className="hidden sm:block" /> Could Look
            Like
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This is a real project I built to demonstrate the quality,
            performance, and experience you can expect for your own business.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
          {/* Left Side (40%) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-[40%] flex flex-col space-y-8"
          >
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl md:text-3xl font-semibold text-foreground mb-3"
              >
                Modern E-commerce Experience
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground leading-relaxed"
              >
                Designed with performance, trust and customer experience in
                mind.
              </motion.p>
            </div>

            <motion.ul
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-sm font-medium text-foreground/80"
                >
                  <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="pt-4 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto font-medium">
                  <Link
                    href="https://orbit-three-iota.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-sm border-l-2 border-border pl-3">
                Every business is different. Your website will be designed
                around your products, branding and goals.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side (60%) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[60%]"
          >
            {/* Browser Mockup Container */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="relative group rounded-xl border border-white/10 glass-panel shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >
              {/* Browser Header Bar */}
              <div className="flex items-center gap-5 px-4 py-3 border-b border-white/5 bg-black/20 backdrop-blur-md">
                <div className="flex space-x-2 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>

                {/* Search Bar */}
                <div className="mx-auto flex items-center justify-center w-full max-w-lg px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-muted-foreground font-mono">
                  <Lock className="w-3 h-3 mr-1.5 opacity-70" />
                  https://orbit-three-iota.vercel.app/
                </div>

                {/* Spacer to balance the traffic lights */}
                <div className="w-11 shrink-0" />
              </div>

              {/* Browser Content (Image) */}
              <div className="relative aspect-video w-full bg-white dark:bg-black overflow-hidden">
                <Image
                  src={OrbitImg}
                  alt="Orbit E-commerce Storefront"
                  fill
                  className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority
                />

                {/* Subtle Inner Shadow Overlay */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)] pointer-events-none" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
