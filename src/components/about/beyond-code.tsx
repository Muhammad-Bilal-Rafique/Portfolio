"use client";

import { motion } from "framer-motion";
import { Tv, Activity, Brain } from "lucide-react";

const interests = [
  {
    title: "The Anime Strategist",
    icon: Tv,
    description: "Im a fan of series featuring intense character growth and strategic suspense—favorites include Attack on Titan, Dr. Stone, and Naruto."
  },
  {
    title: "On The Pitch",
    icon: Activity,
    description: "When I'm not debugging, you'll find me playing local cricket matches. It keeps my mind sharp and builds the stamina needed for long coding sessions."
  },
  {
    title: "Disciplined Systems",
    icon: Brain,
    description: "I don't rely on motivation; I build systems. My learning philosophy is rooted in daily repetition, building strong analogies, and staying consistent."
  }
];

export function BeyondCode() {
  return (
    <section className="relative w-full py-16 mb-10">
      <div className="flex items-center gap-3 mb-8">
        <h3 className="text-2xl font-bold text-white tracking-tight">Beyond Coding</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {interests.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-zinc-300" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}