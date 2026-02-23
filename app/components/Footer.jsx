"use client"; 

import React, { useState } from "react";
import { Mail, Linkedin, Github, MessageCircle, Check } from "lucide-react";

const Footer = () => {
  // State to manage the "Copied!" animation
  const [copied, setCopied] = useState(false);
  const email = "bilalrafique271@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reverts back after 2 seconds to gmail
  };

  return (
    <footer
      id="contact"
      className="w-full bg-text-primary text-bg-primary py-24 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Ready to engineer your next{" "}
          <span className="text-action">high-performance</span> project?
        </h2>

        <p className="text-bg-secondary/70 text-lg mb-10 max-w-2xl mx-auto">
          I'm currently available for freelance Next.js and Full-Stack
          opportunities. Let's build something that loads faster and converts better.
        </p>

        {/* CTA Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          
          {/* Primary Button: WhatsApp */}
          <a
            href="https://wa.me/923041054477?text=Hi%20Bilal,%20I'm%20interested%20in%20a%20Next.js%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-action hover:bg-action/80 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20 w-full sm:w-auto"
          >
            <MessageCircle className="h-6 w-6" />
            Connect on WhatsApp
          </a>

          {/* Secondary Button: Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-center gap-3 bg-transparent border-2 border-bg-secondary/20 hover:bg-bg-secondary/10 text-bg-primary px-8 py-4 rounded-full font-bold text-lg transition-all active:scale-95 w-full sm:w-auto"
          >
            {copied ? (
              <>
                <Check className="h-6 w-6 text-action" />
                <span className="text-action">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="h-6 w-6" />
                {email}
              </>
            )}
          </button>

        </div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/muhammad-bilal-rafique-9b28b038b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-action transition-colors flex items-center gap-2"
            >
              <Linkedin className="h-5 w-5" /> LinkedIn
            </a>
            <a
              href="https://github.com/Muhammad-Bilal-Rafique"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-action transition-colors flex items-center gap-2"
            >
              <Github className="h-5 w-5" /> GitHub
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-bg-secondary/10 w-full text-sm text-bg-secondary/40">
            © {new Date().getFullYear()} Muhammad Bilal Rafique. Built for
            Performance.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;