"use client";

import { motion, Variants } from "framer-motion";
import { 
  MessageCircle, 
  Palette, 
  Code2, 
  Rocket, 
  Laptop, 
  Smartphone, 
  Sparkles, 
  MessageSquare, 
  Zap, 
  Layers3 
} from "lucide-react";

// -- Data Structures --

const processSteps = [
  {
    title: "Let's Talk",
    description: "We'll discuss your business, products, goals and answer every question before we begin.",
    icon: MessageCircle,
  },
  {
    title: "Design",
    description: "I'll design a clean modern experience around your brand and customers.",
    icon: Palette,
  },
  {
    title: "Development",
    description: "Your website is built using modern technologies with performance, responsiveness and scalability in mind.",
    icon: Code2,
  },
  {
    title: "Launch",
    description: "After testing and final approval your website goes live and is ready for your customers.",
    icon: Rocket,
  },
];

const features = [
  {
    title: "Modern Tech Stack",
    description: "Built with Next.js, TypeScript and modern web technologies.",
    icon: Laptop,
  },
  {
    title: "Mobile First",
    description: "Optimized for the devices where most customers actually shop.",
    icon: Smartphone,
  },
  {
    title: "AI Ready",
    description: "Future AI features can easily be integrated as your business grows.",
    icon: Sparkles,
  },
  {
    title: "Direct Communication",
    description: "You'll work directly with the developer building your project. No middlemen.",
    icon: MessageSquare,
  },
  {
    title: "Performance Focused",
    description: "Fast loading pages that provide a better customer experience.",
    icon: Zap,
  },
  {
    title: "Scalable Architecture",
    description: "Built cleanly so new features can be added without rebuilding everything.",
    icon: Layers3,
  },
];

// -- Animation Variants --

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const timelineLineVariants: Variants = {
  hidden: { height: 0 },
  visible: { 
    height: "100%", 
    transition: { duration: 1.5, ease: "easeInOut" } 
  },
};

export default function ProcessAndFeatures() {
  return (
    <section className="relative w-full py-0 md:py-0 overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 md:mb-28"
        >
          <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            Simple & Transparent
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            A Simple Process.<br className="hidden sm:block" /> Built on Modern Technology.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            From our first conversation to launching your website, everything is kept simple, 
            transparent and focused on helping your business grow.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Our Process */}
          <div>
            <div className="mb-10">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Our Process</h3>
              <p className="text-muted-foreground">
                A straightforward process with clear communication at every stage.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Background Line */}
              <div className="absolute left-[15px] top-4 bottom-4 w-px bg-white/5" />
              
              {/* Timeline Animated Line */}
              <motion.div 
                variants={timelineLineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="absolute left-[15px] top-4 w-px bg-gradient-to-b from-ring to-ring/20 origin-top"
              />

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col space-y-8 relative"
              >
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div key={index} variants={itemVariants} className="relative pl-12 sm:pl-16 group">
                      
                      {/* Step Number Node */}
                      <div className="absolute left-0 top-3 w-8 h-8 rounded-full border border-border bg-card flex items-center justify-center text-xs font-medium text-foreground z-10 shadow-md transition-colors group-hover:border-ring/50 group-hover:text-ring">
                        {index + 1}
                      </div>

                      {/* Process Card */}
                      <div className="glass-panel p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-white/10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-foreground border border-white/5 group-hover:bg-ring/10 group-hover:text-ring group-hover:border-ring/20 transition-colors">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h4 className="text-lg font-semibold text-foreground">{step.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* RIGHT COLUMN: Why Work With Me */}
          <div>
            <div className="mb-10 lg:mb-14">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Why Work With Me</h3>
              <p className="text-muted-foreground">
                Modern development focused on quality, performance and long-term growth.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col space-y-6 sm:space-y-8"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index} 
                    variants={itemVariants} 
                    className="group flex items-start gap-5 rounded-xl transition-colors"
                  >
                    {/* Feature Icon */}
                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card shadow-sm text-muted-foreground transition-all duration-300 group-hover:text-ring group-hover:border-ring/30 group-hover:bg-ring/5">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    
                    {/* Feature Content */}
                    <div className="flex flex-col pt-1">
                      <h4 className="text-base font-semibold text-foreground mb-1 group-hover:text-ring transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
        </div>

      </div>
    </section>
  );
}