"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

import OrbitHome from "../../../../public/Orbit-landscape.png";
import OrbitProducts from "../../../../public/orbit-products.png";
import OrbitCart from "../../../../public/orbit-cart.png";
import OrbitOrderTracking from "../../../../public/orbit-order-tracking.png";
import OrbitDashboard from "../../../../public/orbit-dashboard.png";
import OrbitInventory from "../../../../public/orbit-inventory.png";
import OrbitOrders from "../../../../public/orbit-order-management.png";
import { ArrowUpRight } from "lucide-react";

import Link from "next/link";

interface Slide {
  src: StaticImageData;
  alt: string;
  label: string;
}

const slides: Slide[] = [
  { src: OrbitHome, alt: "Orbit storefront home page", label: "Professional Storefront" },
  { src: OrbitProducts, alt: "Orbit product listing page", label: "Products" },
  { src: OrbitCart, alt: "Orbit shopping cart", label: "Cart" },
  {
    src: OrbitOrderTracking,
    alt: "Orbit order tracking",
    label: "Live Order Tracking",
  },
  {
    src: OrbitDashboard,
    alt: "Orbit admin dashboard",
    label: "Admin · Dashboard",
  },
  {
    src: OrbitInventory,
    alt: "Orbit admin inventory management",
    label: "Admin · Inventory Management",
  },
  {
    src: OrbitOrders,
    alt: "Orbit admin order management",
    label: "Admin · Orders Management",
  },
];

const AUTOPLAY_MS = 4000;

interface BrowserMockupProps {
  url?: string;
}

export function BrowserMockup({
  url = "orbit-three-iota.vercel.app",
}: BrowserMockupProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  const current = slides[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.015, y: -4 }}
      onHoverStart={() => setIsPaused(true)}
      onHoverEnd={() => setIsPaused(false)}
      className="relative w-full"
    >
      {/* Ambient glow behind the mockup */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-4xl bg-ring/10 blur-3xl"
      />

      <div className="glass-panel overflow-hidden rounded-2xl shadow-2xl shadow-black/50">
        {/* Browser top bar */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-card/80 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/20" />
          </div>
          <div>
            <Link
              href={`https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mx-auto flex w-full max-w-60 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-ring/40 hover:text-foreground"
            >
              See Live Demo
              <ArrowUpRight  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/*
          Slideshow content area.
          aspect-video (16/9) matches a standard desktop screenshot.
          If your screenshots are a different resolution, change this
          to match — e.g. aspect-[1920/1000] if you know the exact px.
        */}
        <div
          className="relative aspect-video w-full overflow-hidden bg-background"
          role="region"
          aria-label="Orbit product screenshots"
          aria-live="polite"
        >
          {/*
            All slides are mounted at once and preloaded, then crossfaded
            with opacity. This is what actually fixes the black flash:
            there's no unmount/remount cycle waiting on a fresh image
            decode, every slide is already sitting in the DOM.
          */}
          {slides.map((slide, i) => (
            <motion.div
              key={slide.label}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ pointerEvents: i === index ? "auto" : "none" }}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                placeholder="blur"
                sizes="(min-width: 1024px) 640px, 100vw"
                className="object-cover object-top"
              />
            </motion.div>
          ))}

          {/* Caption scrim — sits above the image stack, reflects current slide only */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background/90 via-background/40 to-transparent"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3">
            <span className="rounded-md border border-border/60 bg-background/60 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
              {current.label}
            </span>
            <span className="text-xs text-muted-foreground">
              {index + 1} / {slides.length}
            </span>
          </div>
        </div>

        {/* Dot navigation */}
        <div className="flex items-center justify-center gap-1.5 border-t border-border/60 bg-card/80 py-2.5">
          {slides.map((slide, i) => (
            <button
              key={slide.label}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to ${slide.label} slide`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-5 bg-foreground"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
