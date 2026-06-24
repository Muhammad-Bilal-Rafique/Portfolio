import Link from "next/link";
import {  Mail, ArrowUpRight } from "lucide-react";
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'; 

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-background/80 backdrop-blur-xl pt-24 pb-8 mt-20 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-emerald-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">

        {/* The Final CTA */}
       {/* The Final CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s build something <span className="text-zinc-600">exceptional.</span>
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto text-base">
            Currently open to summer internships.
            Let&apos;s discuss how my technical skills and drive to build can contribute to your team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 font-bold text-sm px-8 py-4 rounded-full transition-all duration-300 group shadow-xl shadow-white/5"
          >
            Get in Touch
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <Link href="/" className="font-bold text-white text-lg tracking-tight hover:opacity-80 transition-opacity">
            Bilal<span className="text-zinc-500 font-normal text-sm ml-0.5">.dev</span>
          </Link>

     {/* Copyright */}
        <div className="text-center text-xs text-zinc-600 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Muhammad Bilal Rafique. All rights reserved. Built with Next.js & Tailwind.
        </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/Muhammad-Bilal-Rafique" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-full transition-all duration-200"
              aria-label="GitHub"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-bilal-rafique-9b28b038b/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-full transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin
               className="w-5 h-5" />
            </a>
            <a 
              href="mailto:bilalrafique271@gmail.com" 
              className="p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-full transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}