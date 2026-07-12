"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

// -- WhatsApp Link Generator --
const getWhatsAppUrl = () => {
  const message = `Assalam o Alaikum Bilal!\n\nI visited your business portfolio and I'd like to discuss building a website for my business.\n\ ThanksYou.`;
  return `https://wa.me/923079634314?text=${encodeURIComponent(message)}`;
};

// -- Navigation Links --
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Problems", href: "#problems" },
  { label: "Features", href: "#features" },
  { label: "Live Demo", href: "#live-demo" },
  { label: "Pricing", href: "#pricing" },
];

export default function Footer() {
  // -- Smooth Scroll Handler --
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      const yOffset = -100;
      const y = elem.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full pb-8 pt-24 md:pt-32 bg-background overflow-hidden" id="contact">
      {/* Subtle Background Elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-ring/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Main Glass Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel border border-white/10 rounded-3xl p-8 md:p-16 lg:p-20 shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
        >
          
          {/* Top CTA Section */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1]">
              Let's Build a Professional Website for Your Business.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Whether you&apos;re just getting started or already selling through Instagram and WhatsApp, 
              I&apos;d love to help turn your business into a professional online store.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  size: "lg",
                  className: "w-full sm:w-auto rounded-full px-8 text-base font-medium shadow-lg hover:shadow-ring/20 transition-all duration-300 hover:-translate-y-1 group bg-primary text-primary-foreground hover:bg-primary/90",
                })}
              >
                <MessageCircle className="mr-2.5 h-5 w-5 transition-transform group-hover:scale-110" />
                Let&apos;s Talk on WhatsApp
              </a>
              <div
                className={buttonVariants({
                  variant: "secondary",
                  size: "lg",
                  className: "w-full sm:w-auto rounded-full px-8 text-base font-medium border border-white/5 bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:-translate-y-1 group",
                })}
              >
                <Mail className="mr-2.5 h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                bilalrafique271@gmail.com
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent mb-16 md:mb-20" />

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12">
            
            {/* Left: Brand */}
            <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start">
              <span className="text-2xl font-bold text-foreground tracking-tight mb-4">
                Bilal.dev
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Helping Pakistani businesses build professional websites that grow their brands.
              </p>
            </div>

            {/* Center: Quick Links */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col">
              <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Contact */}
            <div className="md:col-span-3 lg:col-span-3 flex flex-col">
              <h3 className="text-foreground font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:bilalrafique271@gmail.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                  >
                    <Mail className="w-4 h-4 mr-2.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                    Email
                  </a>
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2.5 opacity-70" />
                  Pakistan
                </li>
              </ul>
            </div>
          </div>

          {/* Very Bottom Copyright */}
          <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col items-center justify-center text-center">
            <p className="text-xs text-muted-foreground/60 font-medium">
              © 2026 Bilal.dev
            </p>
            <p className="text-xs text-muted-foreground/50 mt-1">
              Built with Next.js, TypeScript & lots of ☕.
            </p>
          </div>
          
        </motion.div>
      </div>
    </footer>
  );
}