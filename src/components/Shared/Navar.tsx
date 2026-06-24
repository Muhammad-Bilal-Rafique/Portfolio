"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-5 inset-x-0 z-50 max-w-5xl mx-auto px-4">
      <nav className="glass-panel rounded-full py-2.5 px-5 flex items-center justify-between shadow-2xl shadow-black/50">
        
        {/* Brand Logo */}
        <Link href="/" className="font-bold text-white text-base tracking-tight hover:opacity-80 transition-opacity">
          Bilal<span className="text-zinc-500 font-normal text-xs ml-0.5">.dev</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200"
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 33 }}
                  />
                )}
                <span className={isActive ? "text-black font-semibold" : "text-zinc-400 hover:text-white"}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions (CV + Hire Me) */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="/cv.pdf" 
            download
            className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            CV
          </a>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 rounded-full text-xs font-semibold px-4 py-2 transition-colors duration-200 group"
          >
            Hire Me
            <ArrowUpRight className="ml-1 w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-zinc-400 hover:text-white rounded-full transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-16 inset-x-4 glass-panel rounded-2xl p-3 flex flex-col gap-1 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                    isActive 
                      ? "bg-white text-black font-semibold" 
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {/* Mobile Actions Grid */}
            <div className="flex gap-2 mt-2">
              <a 
                href="/cv.pdf" 
                download
                className="flex-1 inline-flex items-center justify-center border border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl font-semibold py-3 text-sm transition-colors duration-200"
              >
                <FileText className="mr-1.5 w-4 h-4" />
                CV
              </a>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="flex-2 inline-flex items-center justify-center bg-white text-black hover:bg-zinc-200 rounded-xl font-semibold py-3 text-sm transition-colors duration-200"
              >
                Hire Me
                <ArrowUpRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}