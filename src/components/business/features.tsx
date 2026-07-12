"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  ShieldCheck,
  MessageCircleCheck,
  PackageCheck,
  Sparkles,
  Zap,
  Circle,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const headerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const cardsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/* ── Card shell ─────────────────────────────────────────────── */

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: React.ReactNode;
}

function FeatureCard({ icon: Icon, title, description, children }: FeatureCardProps) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 transition-[border-color,box-shadow] duration-300 hover:border-ring/30 hover:shadow-[0_0_28px_-14px_hsl(var(--color-ring)/0.5)] sm:p-7"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-background/60 transition-transform duration-300 group-hover:scale-110 group-hover:border-ring/30">
        <Icon className="h-5 w-5 text-foreground/80" aria-hidden />
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>

      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {children && <div className="mt-5">{children}</div>}
    </motion.div>
  );
}

/* ── Card 4 mini UI: order tracking progress ───────────────────── */

const trackingStages = [
  { label: "Confirmed", done: true },
  { label: "Packed", done: true },
  { label: "Shipped", done: true },
  { label: "Out for Delivery", done: true },
  { label: "Delivered", done: false },
];

function OrderTrackingDemo() {
  const doneCount = trackingStages.filter((s) => s.done).length;
  const fillPercent =
    ((doneCount - 1) / (trackingStages.length - 1)) * 100;

  return (
    <div className="rounded-xl border border-border/60 bg-background/60 p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">
          Order #3847
        </span>
        <span className="text-xs font-medium text-foreground">
          Out for Delivery
        </span>
      </div>

      <div className="relative mt-5 flex items-center justify-between">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-muted-foreground/20" />
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: `${fillPercent}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
          className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-foreground/50"
        />

        {trackingStages.map((stage) =>
          stage.done ? (
            <CheckCircle2
              key={stage.label}
              className="relative z-10 h-4 w-4 bg-background text-foreground/80"
              aria-hidden
            />
          ) : (
            <Circle
              key={stage.label}
              className="relative z-10 h-4 w-4 bg-background text-muted-foreground/40"
              aria-hidden
            />
          )
        )}
      </div>
    </div>
  );
}

/* ── Feature data ───────────────────────────────────────────────── */

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
  demo?: React.ReactNode;
}[] = [
  {
    icon: ShoppingBag,
    title: "Professional Storefront",
    description:
      "Give customers a clean shopping experience instead of browsing products through Instagram posts and chat messages.",
  },
  {
    icon: ShieldCheck,
    title: "Build Customer Trust",
    description:
      "A professional website increases buyer confidence and makes your business feel more established.",
  },
  {
    icon: MessageCircleCheck,
    title: "WhatsApp Order Confirmation",
    description:
      "Customers place an order on your website and instantly receive confirmation through WhatsApp without unnecessary back-and-forth.",
  },
  {
    icon: PackageCheck,
    title: "Order Tracking",
    description:
      "Customers can easily track their orders themselves instead of constantly messaging you for updates.",
    demo: <OrderTrackingDemo />,
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description:
      "Add AI-powered features like customer support, product recommendations, review summaries and intelligent search when your business needs them.",
  },
  {
    icon: Zap,
    title: "Fast & Mobile Friendly",
    description:
      "Built for speed, SEO and mobile shoppers so customers enjoy a smooth experience on every device.",
  },
];

/* ── Main section ──────────────────────────────────────────────── */

export function Features() {
  return (
    <section id="features"
      aria-labelledby="features-heading"
      className="relative w-full overflow-hidden bg-background py-10 sm:py-14 lg:py-10"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={headerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <motion.h2
            id="features-heading"
            variants={fadeUp}
            className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            Build Something Customers Actually Trust
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A professional website doesn&apos;t just look better. It helps
            customers buy faster, trust your business more and reduces the
            manual work you do every day.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={cardsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            >
              {feature.demo}
            </FeatureCard>
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="mx-auto mt-20 flex max-w-xl flex-col items-center text-center sm:mt-24"
        >
          <h3 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Everything works together.
          </h3>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Your website becomes your digital salesperson — available 24/7,
            building trust, answering questions and helping customers place
            orders while you focus on growing your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}