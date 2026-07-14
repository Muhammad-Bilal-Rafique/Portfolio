"use client";

import { motion, Variants } from "framer-motion";
import { Check, Plus, } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const getWhatsAppLink = (packageName: string) => {
  const phone = "923079634314";

  const message = `Assalam o Alaikum Bilal!

I visited your business portfolio and I'm interested in the ${packageName} package.

I'd like to discuss my business requirements and get more details.

Thank You.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

// -- Data Structures --

const packages = [
  {
    id: "starter",
    name: "Starter",
    description:
      "Perfect for businesses launching their first professional website.",
    priceLabel: "Starting at",
    currency: "PKR",
    price: "15,000",
    features: [
      "Up to 8 Pages",
"Premium UI Design, Fully Responsive",
"Product Catalog + Categories",
"Product Detail Pages",
"Cart Flow",
"Simple Admin Panel",
"Admin: Order Details & Status",
"Admin: Inventory Management",
"Admin: Add/Edit Products",
"Contact Form, Google Maps, Social Links",
"Fast Performance, Basic SEO",
"Deployment Assistance",
"Two Revision Rounds",
"30 Days Support",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth",
    description:
      "Perfect for businesses already selling through Instagram & WhatsApp.",
    priceLabel: "Starting at",
    currency: "PKR",
    price: "20,000",
    includesPrevious: "Everything in Starter Plus",
    features: [
      "Everything in Starter, plus:",
"Product Search",
"Customer Accounts",
"Order History",
"Wishlist",
"Advanced Admin Dashboard",
"Admin: Monthly Sales Reports + Analytics",
"Admin: Download Sales reports",
"Order Tracking for Customers",
"Better SEO",
"Performance Optimization",
"Priority Support",
    ],
    buttonText: "Let's Build It",
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    description:
      "Best for brands looking for custom solutions and future growth.",
    priceLabel: "Custom Quote",
    currency: "",
    price: "",
    includesPrevious: "Everything in Growth",
    features: [
      "Everything in Growth, plus:",
"AI Product Recommendations",
"AI Customer Support (Chatbot)",
"AI Review Summaries",
"Third-Party API Integrations",
"Custom Features (Business-Specific)",
"Multi-Admin Access & Roles",
"Advanced Analytics & Reporting",
"Future Scalability Planning",
"Dedicated Priority Support",
    ],
    buttonText: "Contact Me",
    popular: false,
  },
];

const includedFeatures = [
  "Mobile Responsive",
  "Modern UI",
  "Clean Code",
  "WhatsApp Support",
  "Fast Performance",
  "Deployment Assistance",
  "30 Days Support",
  "Future Guidance",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.10] pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-ring/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground mb-6 shadow-sm">
            Flexible Packages
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6">
            Choose the Right Package <br className="hidden sm:block" /> for Your
            Business
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every business is different. These packages are starting points and
            can be customized based on your requirements.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 items-start max-w-6xl mx-auto mb-24"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className={`relative flex flex-col h-full rounded-2xl glass-panel p-8 transition-all duration-300 ${
                pkg.popular
                  ? "border-ring/30 shadow-[0_0_40px_rgba(255,255,255,0.05)] lg:scale-105 z-10 bg-card/80"
                  : "border-white/5 hover:border-white/15 bg-black/20"
              }`}
            >
              {/* Popular Badge & Subtle Glow for Middle Card */}
              {pkg.popular && (
                <>
                  <div className="absolute -inset-px rounded-2xl border border-ring/50 pointer-events-none" />
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                    <span className="bg-ring text-ring-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Most Popular
                    </span>
                  </div>
                </>
              )}

              {/* Card Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed h-10">
                  {pkg.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {pkg.priceLabel}
                </p>
                <div className="flex items-baseline gap-2">
                  {pkg.currency && (
                    <span className="text-xl font-semibold text-foreground/80">
                      {pkg.currency}
                    </span>
                  )}
                  {pkg.price ? (
                    <span className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                      {pkg.price}
                    </span>
                  ) : (
                    <span className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                      Custom Quote
                    </span>
                  )}
                </div>
              </div>

              <div className="h-px w-full bg-border/50 mb-8" />

              {/* Features List */}
              <div className="flex-grow mb-8">
                {pkg.includesPrevious && (
                  <div className="flex items-center gap-2 mb-4 text-sm font-medium text-foreground/90">
                    <Plus className="w-4 h-4 text-ring" />
                    <span>{pkg.includesPrevious}</span>
                  </div>
                )}
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <div className="mr-3 mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
         <a
  href={getWhatsAppLink(pkg.name)}
  target="_blank"
  rel="noopener noreferrer"
  className={`${buttonVariants({ 
    size: "lg", 
    variant: pkg.popular ? "default" : "secondary" 
  })} w-full mt-auto font-medium transition-all ${
    pkg.popular ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" : ""
  }`}
>
  {pkg.buttonText}
</a>
            </motion.div>
          ))}
        </motion.div>

        {/* Every Package Includes (Glass Panel) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto glass-panel border border-white/5 rounded-2xl p-8 md:p-10 mb-24"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground">
              Every Package Includes
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {includedFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium text-foreground/80 hover:bg-secondary transition-colors"
              >
                <Check className="w-3.5 h-3.5 text-ring" />
                {feature}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
