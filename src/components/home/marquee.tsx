"use client";

import { motion } from "framer-motion";
import { 
  Triangle, 
  Code2, 
  Atom, 
  Wind, 
  Zap, 
  CreditCard, 
  Image as ImageIcon, 
  Database, 
  Box, 
  ShieldCheck, 
  Layers, 
  Cpu 
} from "lucide-react";

// Your exact Orbit + Nexus tech stack
const techStack = [
  { name: "Next.js", icon: Triangle },
  { name: "TypeScript", icon: Code2 },
  { name: "React", icon: Atom },
  { name: "Tailwind CSS", icon: Wind },
  { name: "Framer Motion", icon: Zap },
  { name: "Stripe", icon: CreditCard },
  { name: "Cloudinary", icon: ImageIcon },
  { name: "MongoDB", icon: Database },
  { name: "Zustand", icon: Box },
  { name: "Auth.js", icon: ShieldCheck },
  { name: "Shadcn UI", icon: Layers },
  { name: "AI SDK", icon: Cpu },
];

export function Marquee() {
  // We duplicate the array to create a seamless, infinite loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="relative w-full py-12 overflow-hidden border-y border-zinc-900/50 bg-background/50 backdrop-blur-sm">
      
      {/* Subtle fade masks on the left and right edges */}
      <div className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* The Scrolling Container */}
      <div className="flex w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust this to make it faster/slower
            repeat: Infinity,
          }}
          className="flex flex-nowrap gap-4 w-max px-4"
        >
          {duplicatedStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur-md shadow-sm transition-colors hover:bg-zinc-800/60 hover:border-zinc-700"
              >
                <Icon className="w-4 h-4 text-zinc-400" strokeWidth={1.5} />
                <span className="text-sm font-medium text-zinc-300 tracking-wide">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}