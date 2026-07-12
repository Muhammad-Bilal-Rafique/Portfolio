"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// -- Navigation Data --

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Problems", href: "#problems" },
  { label: "Features", href: "#features" },
  { label: "Live Demo", href: "#live-demo" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

// -- WhatsApp Link Generator --

const getWhatsAppUrl = () => {
  const message = `Assalam o Alaikum Bilal!\n\nI visited your business portfolio and I'd like to discuss building a website for my business.\n\ Thank You   .`;
  return `https://wa.me/923079634314?text=${encodeURIComponent(message)}`;
};

export default function FloatingNavbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMounted, setIsMounted] = useState(false);
  
  // State to manually control the mobile menu without needing SheetClose
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // -- Scroll Visibility Logic --
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous === undefined) return;
    
    // Hide navbar after scrolling down past 150px
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // -- Active Section Tracker --
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = activeSection;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // -- Smooth Scroll Handler --
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if it's open
    setIsMobileMenuOpen(false);

    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      // Get height of navbar plus some padding to offset the scroll
      const yOffset = -100; 
      const y = elem.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (!isMounted) return null;

  return (
    <motion.div
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-150%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none flex justify-center"
    >
      {/* Floating Pill Container */}
      <div className="pointer-events-auto flex items-center justify-between w-full max-w-5xl glass-panel px-4 py-3 sm:px-6 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10 backdrop-blur-xl">
        
        {/* Left: Brand */}
        <div className="flex flex-col shrink-0">
          <span className="text-base sm:text-lg font-bold text-foreground tracking-tight leading-none">
            Bilal.dev
          </span>
          <span className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-widest mt-1 font-medium">
            Business Websites
          </span>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-secondary/40 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-card rounded-full shadow-sm border border-white/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: CTA & Mobile Menu */}
        <div className="flex items-center gap-3">
          
          {/* Desktop CTA (Native Anchor Styled as Button) */}
          <a 
            href={getWhatsAppUrl()} 
            target="_blank" 
            rel="noopener noreferrer"
            className={buttonVariants({ 
              size: "xs", 
              className: "hidden md:inline-flex rounded-full px-6 font-medium shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5" 
            })}
          >
            Let&apos;s Talk
          </a>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            {/* SheetTrigger natively renders a button, so we just pass classes directly to it */}
            <SheetTrigger 
              className={buttonVariants({ 
                variant: "ghost", 
                size: "icon", 
                className: "md:hidden rounded-full h-9 w-9 text-foreground hover:bg-white/10" 
              })}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            
            {/* Mobile Menu Content */}
            <SheetContent 
              side="top" 
              className="bg-background border-b border-border pt-16 pb-8 px-6 glass-panel"
            >
              <SheetHeader className="hidden">
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col space-y-6 text-center">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.substring(1);
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className={`text-lg font-medium transition-colors ${
                          isActive ? "text-ring" : "text-foreground/80 hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </nav>
                
                <div className="pt-4 border-t border-white/10">
                  <a 
                    href={getWhatsAppUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={buttonVariants({ 
                      size: "lg", 
                      className: "w-full rounded-full font-medium" 
                    })}
                  >
                    Let&apos;s Talk on WhatsApp
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.div>
  );
}