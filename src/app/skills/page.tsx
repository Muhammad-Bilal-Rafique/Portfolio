"use client";

import { motion } from "framer-motion";
import { Layout, Database, Wrench, Sparkles } from "lucide-react";
import { SkillGroup } from "@/components/skills/skill-group";

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: Layout,
    skills: [
      "Next.js", 
      "React", 
      "TypeScript", 
      "JavaScript", 
      "Zustand", 
      "Tailwind CSS", 
      "Shadcn UI", 
      "Framer Motion",
      "HTML & CSS"
    ]
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      "Node.js", 
      "Express.js", 
      "MongoDB"
    ]
  },
  {
    title: "Tools & Infrastructure",
    icon: Wrench,
    skills: [
      "Git & GitHub", 
      "Vercel", 
      "Stripe", 
      "Cloudinary"
    ]
  },
  {
    title: "Currently Exploring",
    icon: Sparkles,
    skills: [
      "AI SDKs & LLM APIs", 
      "AI Feedback Summarization"
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className="mt-20 mx-auto w-full max-w-5xl px-4 flex flex-col gap-12 pb-20">
      
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          The <span className="text-zinc-600">Arsenal.</span>
        </h1>
        <p className="text-zinc-400 text-base max-w-2xl leading-relaxed">
          The technologies I use to build modern web applications. Focused on type safety, clean user interfaces, and scalable architectures.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {skillCategories.map((category, idx) => (
          <SkillGroup 
            key={category.title}
            title={category.title}
            icon={category.icon}
            skills={category.skills}
            delay={idx * 0.1}
          />
        ))}
      </div>

    </div>
  );
}