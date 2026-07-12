"use client";

import { motion } from "framer-motion";
import { Smartphone, Sparkles, Zap, Code2, type LucideIcon } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  label: string;
}

const trustItems: TrustItem[] = [
  { icon: Smartphone, label: "Optimized for Mobile Buyers" },
  { icon: Sparkles, label: "AI Integration" },
  { icon: Zap, label: "Lightning Fast Website" },
  { icon: Code2, label: "WhatsApp Order Confirmation" },
];

export function TrustIndicators() {
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 lg:flex lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-3">
      {trustItems.map((item, i) => (
        <motion.li
          key={item.label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
          className="flex items-start gap-2 text-xs text-muted-foreground sm:items-center sm:text-sm"
        >
          <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-foreground/70 sm:mt-0" aria-hidden />
          <span className="leading-tight">{item.label}</span>
        </motion.li>
      ))}
    </ul>
  );
}