"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "Year 1",
    title: "The Foundations",
    description: "Started BSCS. Dove into HTML, CSS, JavaScript, and built my first backend endpoints with Node.js, Express, and MongoDB."
  },
  {
    year: "The Pivot",
    title: "Stepping Back to Leap Forward",
    description: "Hit a wall and took a 4-5 month break from coding. Used this time to reset my mindset and realize that tech was what I truly wanted to pursue."
  },
  {
    year: "Year 2",
    title: "Escaping Tutorial Hell",
    description: "Returned with extreme consistency. Shifted from YouTube videos to reading official docs. Picked up React, Next.js, and strict TypeScript."
  },
  {
    year: "Present",
    title: "Modern Architecture & AI",
    description: "Currently building production-grade apps like Orbit. Deeply focused on integrating AI SDKs, Stripe, Zustand, and mastering scalable architectures."
  }
];

export function Timeline() {
  return (
    <section className="relative w-full py-16">
      <div className="flex items-center gap-3 mb-12">
        <h3 className="text-2xl font-bold text-white tracking-tight">The Journey</h3>
      </div>

      <div className="relative border-l border-zinc-800/50 ml-4 md:ml-6 space-y-12">
        {milestones.map((milestone, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Node */}
            <div className="absolute -left-1.25 top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-600 ring-4 ring-background" />
            
            <div className="flex flex-col gap-1 mb-2">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{milestone.year}</span>
              <h4 className="text-xl font-bold text-white tracking-tight">{milestone.title}</h4>
            </div>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
              {milestone.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}