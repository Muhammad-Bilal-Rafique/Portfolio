"use client";

import { LayoutTemplate, Database, Terminal, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: LayoutTemplate,
    description: "Building fluid, interactive, and highly optimized user interfaces.",
    skills: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Zustand"]
  },
  {
    title: "Backend & Data",
    icon: Database,
    description: "Architecting secure APIs, authentication, and database models.",
    skills: ["Node.js", "MongoDB", "RESTful APIs", "Auth.js (NextAuth)", "RBAC", "Server Actions"]
  },
  { 
    title: "Tools & Infrastructure",
    icon: Terminal,
    description: "Deploying and scaling production-grade applications.",
    skills: ["Git & GitHub", "Vercel", "Stripe Checkout", "Cloudinary", "Resend (Emails)", "AI SDK"]
  },
  {
    title: "AI & Integrations",
    icon: Sparkles,
    description: "Always eager to learn and deepen my core stack. Currently focused on embedding AI capabilities to build smart, automated web experiences.",
    skills: ["Vercel AI SDK", "LLM APIs", "AI Summarization", "System Prompts", "RESTful APIs"]
}
];


// Add the `: Variants` type to both objects
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  },
};

export function Skills() {
  return (
    <section className="relative w-full py-20 px-4 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
          Technical Arsenal
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-xl">
          Categorized overview of my current tech stack and the tools I use to build scalable web applications.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-panel p-8 rounded-4xl border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-2xl">
                  <Icon className="w-6 h-6 text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                </div>
              </div>
              
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 rounded-xl hover:text-white hover:border-zinc-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}