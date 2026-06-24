"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, GitMerge, Layers } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface ProjectCardProps {
  title: string;
  version: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  image?: StaticImageData | string;
  featured: boolean;
}

export function ProjectCard({ 
  title, 
  version, 
  description, 
  tech, 
  liveUrl, 
  githubUrl, 
  image, 
  featured 
}: ProjectCardProps) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
      }}
      className={`glass-panel rounded-3xl overflow-hidden flex flex-col ${
        featured ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } border border-zinc-800/50`}
    >
      {/* Project Info */}
      <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-5">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            featured ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
          }`}>
            {version}
          </span>
          {!featured && (
            <span className="flex items-center gap-1 text-xs font-medium text-zinc-500 uppercase tracking-widest">
              <GitMerge className="w-3.5 h-3.5" /> Stepping Stone
            </span>
          )}
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">{title}</h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded-lg">
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {liveUrl && liveUrl !== "#" && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200 group"
            >
              Live Demo
              <ArrowUpRight className="ml-1.5 w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          )}
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-transparent border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200"
          >
            <SiGithub className="mr-2 w-4 h-4" />
            Source
          </a>
        </div>
      </div>

      {/* Project Image Area */}
      <div className={`flex-1 relative bg-zinc-900/50 min-h-75 flex items-center justify-center p-8 group overflow-hidden ${
        featured ? 'border-l border-zinc-800/50' : 'border-r border-zinc-800/50'
      }`}>
        <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        { image ? (
          <div className="relative w-full rounded-xl overflow-hidden border border-zinc-700/50 shadow-2xl transform transition-all duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02] bg-zinc-950 z-10">
            <Image src={image} alt={title} className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500" placeholder="blur" />
          </div>
        ) : (
          <div className="relative w-full aspect-video rounded-xl border border-zinc-800 border-dashed flex flex-col items-center justify-center bg-zinc-900/50 text-zinc-600">
            <Layers className="w-10 h-10 mb-2 opacity-50" />
            <span className="text-sm font-medium">Legacy Architecture</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}