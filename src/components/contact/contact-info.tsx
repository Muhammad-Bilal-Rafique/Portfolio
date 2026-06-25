"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'; 

const links = [
  { name: "Email", href: "mailto:bilalrafique271@gmail.com", icon: Mail, text: "bilalrafique271@gmail.com" },
  { name: "GitHub", href: "https://github.com/Muhammad-Bilal-Rafique", icon: SiGithub, text: "https://github.com/Muhammad-Bilal-Rafique" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-bilal-rafique-9b28b038b/", icon: FaLinkedin, text: "https://www.linkedin.com/in/muhammad-bilal-rafique-9b28b038b/" },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Open to summer internships
        </div>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Let&apos;s build something.
        </h2>
        <p className="text-zinc-400 text-base leading-relaxed max-w-md">
          Whether you&apos;re a recruiter looking to fill a summer role or looking to connect over web architecture, my inbox is open.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col gap-4 mt-4"
      >
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl glass-panel border border-zinc-800/50 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-0.5">{link.name}</h3>
                <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">{link.text}</p>
              </div>
            </a>
          );
        })}
      </motion.div>
    </div>
  );
}