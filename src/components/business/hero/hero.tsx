"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { BrowserMockup } from "@/components/business/hero/browser-mockup";
import { TrustIndicators } from "@/components/business/hero/trust-indicators";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  return (
    <section id="home"
      aria-label="Introduction"
      className="relative mt-23 flex min-h-[90vh] w-full items-center overflow-hidden bg-background py-8 lg:min-h-screen"
    >
      {/* Background layer */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern `mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]`" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute left-1/2 top-0 h-150 w-225 -translate-x-1/2 -translate-y-1/3 rounded-full bg-ring/10 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute bottom-0 right-0 h-100 w-100 translate-x-1/3 translate-y-1/3 rounded-full bg-ring/5 blur-[100px]"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-start px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        
        {/* Left column items - uses 'contents' on mobile so Grid 'order' works seamlessly */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="contents lg:flex lg:flex-col lg:items-start lg:text-left"
        >
          
          {/* 1. Top Badge */}
          <motion.div
            variants={item}
            className="order-1 mt-0 justify-self-start lg:mb-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground sm:px-4 sm:py-2 sm:text-sm">
              <MessageCircle className="h-3.5 w-3.5 text-ring sm:h-4 sm:w-4" />
              <span>Still selling through Instagram & WhatsApp?</span>
            </div>
          </motion.div>

          {/* 2. Main Heading */}
          <motion.h1
            variants={item}
            className="order-2 mt-5 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:mt-0 lg:mb-6 lg:text-[3.4rem]"
          >
            Professional{" "}
            <span className="bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              E-commerce Websites
            </span>
            <span className="mt-1 block lg:mt-0 lg:inline">
              {" "}for Pakistani Businesses
            </span>
          </motion.h1>

          {/* 4. Paragraph (Appears below slideshow on mobile) */}
          <motion.p
            variants={item}
            className="order-4 mt-5 max-w-75 text-pretty text-sm leading-relaxed text-muted-foreground sm:max-w-md sm:text-base lg:mt-0 lg:mb-9 lg:max-w-lg lg:text-lg"
          >
            I build professional e-commerce websites for Pakistani businesses selling through Instagram and WhatsApp—helping automate orders, build a stronger brand, and create a better buying experience.
          </motion.p>

          {/* 5. Buttons */}
          <motion.div
            variants={item}
            className="order-5 mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:mt-0 lg:mb-10"
          >
            <Link href="https://orbit-three-iota.vercel.app" target="_blank" className="w-full sm:w-auto">
              <Button size="lg" className="h-12 w-full text-base sm:h-10 sm:w-auto sm:text-sm">
                View Live Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a 
              href="https://wa.me/923079634314?text=Assalam%20o%20Alaikum%20Bilal!%0A%0AI%20visited%20your%20business%20portfolio%20and%20I'd%20like%20to%20discuss%20building%20a%20website%20for%20my%20business.%0A%0AJazakAllah%20Khair." 
              target="_blank" 
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "secondary", size: "lg", className: "h-12 w-full text-base sm:h-10 sm:w-auto sm:text-sm" })}
            >
              Let&apos;s Talk on WhatsApp
            </a>
          </motion.div>

          {/* 6. Trust Indicators */}
          <motion.div variants={item} className="order-6 mt-8 w-full lg:mt-0 lg:w-auto">
            <TrustIndicators />
          </motion.div>
        </motion.div>

        {/* 3. Browser Mockup Slideshow (Appears below heading on mobile) */}
        <div className="order-3 mt-6 w-full lg:order-0 lg:mt-0 lg:ml-auto">
          <BrowserMockup />
        </div>
        
      </div>
    </section>
  );
}