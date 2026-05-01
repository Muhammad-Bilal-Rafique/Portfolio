"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id='home' className="w-full py-16 md:py-10 flex flex-col items-center justify-center text-center px-4">

      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto">

        {/* Trust Badge */}
        <Badge
          variant="secondary"
          className="bg-action/10 text-action hover:bg-action/20 transition-colors px-4 py-1.5 rounded-full text-sm font-medium border border-action/20"
        >
          ⚡ Shopify Speed Optimization Specialist
        </Badge>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-primary">
          {"Your Shopify store is losing customers to slow load times."}
        </h1>

        {/* Sub-Headline */}
        <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
          {"I fix slow Shopify stores. My recent optimization of Lumina Jewels took their performance score from 60 to 98 — reducing LCP from 2.5s to 1.7s and cutting total blocking time by 95%. The same process is available for your store, starting with a free audit."}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-4">

          {/* Primary */}
          <Button
            size="lg"
            className="bg-action hover:bg-action-hover text-white w-full sm:w-auto transition-all hover:scale-105 active:scale-95 shadow-lg shadow-action/20 group cursor-pointer"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Zap className="h-4 w-4 transition-transform group-hover:scale-110" />
            {"Get Your Free Audit"}
          </Button>

          {/* Secondary */}
          <Button
            variant="outline"
            size="lg"
            className="group border-bg-secondary text-text-primary hover:bg-bg-secondary w-full sm:w-auto transition-all cursor-pointer"
            onClick={() =>
              document.getElementById("case-study")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {"View Case Study"}
            <ArrowUpRight className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-text-primary" />
          </Button>

        </div>
      </div>
    </section>
  );
};

export default Hero;