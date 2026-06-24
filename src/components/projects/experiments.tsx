"use client";

import { motion } from "framer-motion";
import {Folder } from "lucide-react";

interface MiniProject {
  title: string;
  description: string;
  tech: string[];
}

export function Experiments({ projects }: { projects: MiniProject[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 mb-8">
        <Folder className="w-5 h-5 text-zinc-500" />
        <h3 className="text-2xl font-bold text-white tracking-tight">Experiment & Small Project</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((mini, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl border border-zinc-800/50 hover:bg-zinc-900/40 transition-colors duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-bold text-white">{mini.title}</h4>
              </div>
              <p className="text-sm text-zinc-400 mb-6">{mini.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {mini.tech.map((t) => (
                <span key={t} className="text-[11px] font-medium text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}