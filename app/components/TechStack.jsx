import React from 'react';
import { Code2, ImageOff, Layers, AppWindow } from 'lucide-react';

const WhatIFix = () => {
  const fixes = [
    {
      name: "Render-Blocking Scripts",
      description: "Third-party scripts that load before your page does — killing your LCP score and making visitors wait before they can even see your store.",
      icon: <Code2 className="h-8 w-8 text-action mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
    },
    {
      name: "Unoptimized Images",
      description: "Large, uncompressed images are the most common reason Shopify stores load slowly. I compress, resize, and convert them to modern formats automatically.",
      icon: <ImageOff className="h-8 w-8 text-action mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
    },
    {
      name: "Unused JavaScript",
      description: "Every app you install adds JavaScript your visitors are forced to download — even if they never use that feature. I identify and eliminate the waste.",
      icon: <Layers className="h-8 w-8 text-action mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
    },
    {
      name: "Third-Party App Bloat",
      description: "Live chat, popups, review widgets, wishlists — each one adds load time. I audit every app and remove the ones hurting your store more than helping it.",
      icon: <AppWindow className="h-8 w-8 text-action mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
    }
  ];

  return (
    <section id="expertise" className="w-full py-24 px-4 bg-bg-secondary/30 border-y border-bg-secondary">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 tracking-tight">
            {"What I Fix"}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {"Slow Shopify stores almost always have the same problems. Here's exactly what I look for and eliminate — so your store loads faster and stops losing customers."}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fixes.map((item, index) => (
            <div
              key={index}
              className="bg-bg-primary rounded-xl border border-bg-secondary p-6 shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 group cursor-default"
            >
              {item.icon}

              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-action transition-colors duration-300">
                {item.name}
              </h3>

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

export default WhatIFix;