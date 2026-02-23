import React from 'react';
import { LayoutTemplate, Database, MonitorSmartphone, FileCheck2 } from 'lucide-react';

const TechStack = () => {
  const stack = [
    {
      name: "Next.js App Router",
      description: "Server-side rendering for instant loads and #1 SEO rankings.",
      icon: <LayoutTemplate className="h-8 w-8 text-action mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
    },
    {
      name: "Tailwind CSS",
      description: "Pixel-perfect, responsive UI that looks flawless on any mobile device.",
      icon: <MonitorSmartphone className="h-8 w-8 text-action mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
    },
    {
      name: "Zod Validation",
      description: "Strict data schemas to prevent checkout crashes and lost revenue.",
      icon: <FileCheck2 className="h-8 w-8 text-action mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
    },
    {
      name: "Node.js & MongoDB",
      description: "Scalable backend infrastructure built to handle high traffic without slowing down.",
      icon: <Database className="h-8 w-8 text-action mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
    }
  ];

  return (
    <section id="expertise" className="w-full py-24 px-4 bg-bg-secondary/30 border-y border-bg-secondary">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 tracking-tight">
            The Performance Arsenal
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            I don't just write code. I use modern, production-ready tools to engineer business outcomes and protect your investment.
          </p>
        </div>

        {/* The ROI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, index) => (
             <div 
                key={index} 
                className="bg-bg-primary rounded-xl border border-bg-secondary p-6 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 group cursor-default"
             >
                {/* Icon with hover rotation/scale */}
                {item.icon}
                
                {/* Card Title */}
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-action transition-colors duration-300">
                  {item.name}
                </h3>
                
                {/* ROI Description */}
                <p className="text-text-muted leading-relaxed text-sm">
                  {item.description}
                </p>
             </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;