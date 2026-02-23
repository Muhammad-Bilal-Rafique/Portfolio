import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {Badge} from "@/components/ui/badge"
import { ArrowUpRight,Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    // The main wrapper with massive vertical padding for that premium, breathable feel
    <section id='home' className="w-full py-16 md:py-10 flex flex-col items-center justify-center text-center px-4">
      
      {/* Container with your requested gap spacing */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
        
        {/* 1. The Trust Badge */}
        <Badge 
          variant="secondary" 
          className="bg-action/10 text-action hover:bg-action/20 transition-colors px-4 py-1.5 rounded-full text-sm font-medium border border-action/20"
        >
          🏆 100/100 Google Lighthouse Score
        </Badge>

        {/* 2. The Headline (H1) */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-text-primary">
          I build high-performance web applications designed to help your business grow.
        </h1>

        {/* 3. The Sub-Headline (p) */}
        <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
          I am a Full-Stack Developer specializing in Next.js and Tailwind CSS. My recent e-commerce build, Nexus, achieved a perfect performance score, proving my code is built for speed and ROI.
        </p>

        {/* 4. The Call to Action (Buttons) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mt-4">
          
          {/* Primary Button */}
       <Button 
  asChild 
  size="lg" 
  className="bg-action hover:bg-action-hover text-white w-full sm:w-auto transition-all hover:scale-105 active:scale-95 shadow-lg shadow-action/20 group"
>
  <Link href="#contact" className="flex items-center gap-2">
    <Sparkles className="h-4 w-4 transition-transform group-hover:rotate-12" />
    <span>Let's Discuss Your Project</span>
  </Link>
</Button>

          {/* Secondary Outline Button */}
       <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="group border-bg-secondary text-text-primary hover:bg-bg-secondary w-full sm:w-auto transition-all"
          >
            <Link href="#work" className="flex items-center gap-2">
              <span>View Case Study</span>
              <ArrowUpRight className="h-4 w-4 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-text-primary" />
            </Link>
          </Button>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;