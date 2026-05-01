"use client";

import React, { useState } from "react";
import { Mail, Linkedin, Github, Check } from "lucide-react";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "bilal@bilaldev.tech";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="contact"
      className="w-full bg-text-primary text-bg-primary py-24 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
          {"Is your Shopify store losing sales to "}
          <span className="text-action">{"slow load times?"}</span>
        </h2>

        <p className="text-bg-secondary/70 text-lg mb-10 max-w-2xl mx-auto">
          {
            "I offer a free audit for Shopify stores — no commitment, no jargon. You'll get a clear breakdown of what's slowing your store down and what it's costing you."
          }
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://wa.me/923079634314?text=Hi%20Bilal,%20I'd%20like%20a%20free%20audit%20for%20my%20Shopify%20store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-action hover:bg-action/80 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-lg w-full sm:w-auto"
          >
            {"Request Free Audit"}
          </a>

          {/* Copy Email */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center justify-center gap-3 bg-transparent border-2 border-bg-secondary/20 hover:bg-bg-secondary/10 text-bg-primary px-8 py-4 rounded-full font-bold text-lg transition-all active:scale-95 w-full sm:w-auto"
          >
            {copied ? (
              <>
                <Check className="h-5 w-5 text-action" />
                <span className="text-action">{"Copied!"}</span>
              </>
            ) : (
              <>
                <Mail className="h-5 w-5" />
                {email}
              </>
            )}
          </button>
        </div>

        {/* Secondary: WhatsApp as plain text link */}
        <p className="text-bg-secondary/50 text-sm mb-12">
          {"Or message me directly on "}
          <a
            href="https://wa.me/923079634314"
            target="_blank"
            rel="noopener noreferrer"
            className="text-action hover:underline"
          >
            {"WhatsApp"}
          </a>
        </p>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/muhammad-bilal-rafique-9b28b038b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-action transition-colors flex items-center gap-2 text-sm"
            >
              <Linkedin className="h-5 w-5" />
              {"LinkedIn"}
            </a>

            <a
              href="https://github.com/Muhammad-Bilal-Rafique"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-action transition-colors flex items-center gap-2 text-sm"
            >
              <Github className="h-5 w-5" />
              {"GitHub"}
            </a>
          </div>

          <div className="pt-8 border-t border-bg-secondary/10 w-full text-sm text-bg-secondary/40">
            {"© "}
            {new Date().getFullYear()}
            {" Muhammad Bilal Rafique · Velox Agency · "}
            <a
              href={`mailto:${email}`}
              className="hover:text-action transition-colors"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;