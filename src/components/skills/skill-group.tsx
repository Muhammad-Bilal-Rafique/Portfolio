"use client";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillGroupProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  delay?: number;
}

const containerVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.05, delayChildren: 0.1 } 
  }
};

const itemVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  }
};

export function SkillGroup({ title, icon: Icon, skills, delay = 0 }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="glass-panel p-8 rounded-3xl border border-zinc-800/50 flex flex-col h-full"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-zinc-300" />
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
      </div>

      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap gap-2.5 mt-auto"
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            variants={itemVariant}
            className="px-4 py-2 text-sm font-medium text-zinc-300 bg-zinc-900/50 hover:bg-zinc-800 hover:text-white border border-zinc-800 rounded-xl transition-colors duration-200 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}