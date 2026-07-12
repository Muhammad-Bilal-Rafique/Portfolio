"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import {
  AlertTriangle,
  MessageCircle,
  MapPin,
  PhoneCall,
  CheckCircle2,
  Circle,
  X,
  Check,
  ChevronDown,
  Globe 
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;
const STAGGER_SECONDS = 0.8

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

function ProblemCard({
  children,
  title,
  caption,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  caption: string;
}) {
  return (
    <motion.div
      variants={cardItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 sm:p-7"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-ring/6 blur-2xl transition-opacity duration-500 group-hover:opacity-150"
      />
      <h3 className="relative mt-6 inline-block text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <p className="relative mt-1.5 mb-6 text-sm leading-relaxed text-muted-foreground">
        {caption}
      </p>
      <div className="relative">{children}</div>
    </motion.div>
  );
}

/* ── Card 1: fake Instagram DM thread ──────────────────────────── */

function ChatDemo() {
  return (
    <div className="rounded-xl border border-border/60 bg-background/60 p-4">
      <div className="flex items-center gap-2 border-b border-border/50 pb-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border/60">
          <FaInstagram className="h-3 w-3 text-foreground/70" aria-hidden />
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          Direct Message
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-secondary px-3 py-2 text-xs text-foreground">
          Hi, Medium available?
        </div>

        <div className="max-w-[75%] self-start rounded-2xl rounded-bl-sm bg-secondary px-3 py-2 text-xs text-foreground">
          Hello?
        </div>
        <div className="max-w-[75%] self-start rounded-2xl rounded-bl-sm bg-secondary px-3 py-2 text-xs text-foreground">
          ???
        </div>

        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-1 self-start rounded-2xl rounded-bl-sm border border-border/50 px-3 py-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
        </motion.div>
      </div>
    </div>
  );
}

/* ── Card 2: manual workflow chain ─────────────────────────────── */

const workflowSteps = [
  { icon: FaInstagram, label: "Instagram Order" },
  { icon: MessageCircle, label: "WhatsApp Chat" },
  { icon: MapPin, label: "Write Address" },
  { icon: PhoneCall, label: "Call Courier" },
  { icon: CheckCircle2, label: "Done" },
];

function WorkflowDemo() {
  return (
    <div className="rounded-xl border border-border/60 bg-background/60 p-4">
      <div className="flex flex-col">
        {workflowSteps.map((step, i) => (
          <div key={step.label} className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card/80">
                <step.icon
                  className="h-3.5 w-3.5 text-foreground/70"
                  aria-hidden
                />
              </div>
              <span className="text-xs font-medium text-foreground">
                {step.label}
              </span>
            </div>
            {i < workflowSteps.length - 1 && (
              <div className="flex justify-start pl-3.75 py-0.5">
                <ChevronDown
                  className="h-3.5 w-3.5 text-muted-foreground/40"
                  aria-hidden
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Card 3: trust hesitation ──────────────────────────────────── */

function TrustDemo() {
  return (
    <div className="rounded-xl border border-border/60 bg-background/60 p-4">
      <div className="flex items-center gap-2 border-b border-border/50 pb-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border/60">
          <FaInstagram className="h-3 w-3 text-foreground/70" aria-hidden />
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          yourbrand.store
        </span>
      </div>

      <div className="mt-3 flex items-start gap-2 rounded-xl border border-border/50 bg-secondary/60 px-3 py-3">
        <AlertTriangle
          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/60"
          aria-hidden
        />
        <p className="text-xs italic leading-relaxed text-muted-foreground">
          &ldquo;Will I actually receive my order?&rdquo;
        </p>
      </div>

      <motion.div
        initial={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: [1, 1, 0], x: [0, 0, 40] }}
        viewport={{ once: true }}
        transition={{ duration: 2, times: [0, 0.6, 1], delay: 2 }}
        className="mt-3 flex items-center justify-end gap-1.5 text-xs text-muted-foreground/70"
      >
        Leaves page
      </motion.div>
    </div>
  );
}

/* ── Card 4: order tracking timeline ───────────────────────────── */

const trackingSteps = [
  { label: "Order Placed", done: true },
  { label: "Preparing", done: true },
  { label: "Shipped", done: true },
  { label: "Out for Delivery", done: false },
  { label: "Delivered", done: false },
];

function TrackingDemo() {
  return (
    <div className="rounded-xl border border-border/60 bg-background/60 p-4">
      <div className="flex flex-col">
        {trackingSteps.map((step, i) => (
          <div key={step.label} className="flex gap-3">
            <div className="flex flex-col items-center">
              {step.done ? (
                <CheckCircle2
                  className="h-4 w-4 text-foreground/80"
                  aria-hidden
                />
              ) : (
                <Circle
                  className="h-4 w-4 text-muted-foreground/40"
                  aria-hidden
                />
              )}
              {i < trackingSteps.length - 1 && (
                <span
                  className={`mt-1 h-5 w-px ${
                    step.done ? "bg-foreground/30" : "bg-muted-foreground/20"
                  }`}
                />
              )}
            </div>
            <span
              className={`pb-4 text-xs font-medium ${
                step.done ? "text-foreground" : "text-muted-foreground/60"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Bottom comparison ──────────────────────────────────────────── */

const dmPoints = [
  "Reply to every customer manually",
  "Customers wait for replies",
  "Repeated questions every day",
  "Orders can get missed",
  "Difficult to manage orders",
  "Harder to build customer trust",
  "No order tracking for customers",
  "Business depends on your availability",
];

const websitePoints = [
  "Accept orders 24/7",
  "Instant order confirmation",
  "Live order tracking",
  "Professional brand image",
  "Customers browse products themselves",
  "Faster buying experience",
  "Fewer manual conversations",
  "More time to grow your business"
];

function ComparisonSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
      className="group/compare relative mt-14 overflow-hidden rounded-2xl border border-border/60 sm:mt-16"
    >
      <div className="relative grid grid-cols-1 sm:grid-cols-2">
        {/* Glowing divider — desktop only */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-linear-to-b from-transparent via-ring/40 to-transparent sm:block"
        />

        {/* Current Process */}
        <div className="bg-card/40 p-7 opacity-75 transition-opacity duration-300 group-hover/compare:opacity-60 sm:p-9">
          <span className="flex justify-center gap-2 text-lg font-medium uppercase tracking-wide text-muted-foreground">
            Current Process
            <MessageCircle/>
          </span>

<motion.ul
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-60px" }}
  className="mt-6 flex flex-col gap-4.5"
>
  {dmPoints.map((point, i) => (
    <motion.li
      key={point}
      variants={{
        hidden: { opacity: 0, x: 12 },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, ease: EASE, delay: i * STAGGER_SECONDS },
        },
      }}
      className="flex items-center gap-3"
    >
      <X className="h-5 w-5 shrink-0 text-red-400/80" aria-hidden />
      <span className="text-sm text-muted-foreground">{point}</span>
    </motion.li>
  ))}
</motion.ul>
        </div>

        {/* Professional Website */}
        <div className="glass-panel border-t border-border/60 p-7 ring-1 ring-inset ring-ring/15 transition-[filter,opacity] duration-300 group-hover/compare:brightness-110 sm:border-l sm:border-t-0 sm:p-9">
          <h1 className="flex justify-center items-center gap-2 text-lg font-medium uppercase tracking-wide text-foreground">
            Professional Website
            <Globe/>
          </h1>
          <motion.ul
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-60px" }}
  className="mt-6 flex flex-col gap-4.5"
>
  {websitePoints.map((point, i) => (
    <motion.li
      key={point}
      variants={{
        hidden: { opacity: 0, x: 12 },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.4, ease: EASE, delay: i * STAGGER_SECONDS },
        },
      }}
      className="flex items-center gap-3"
    >
      <Check className="h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
      <span className="text-sm font-medium text-foreground">{point}</span>
    </motion.li>
  ))}
</motion.ul>
        </div>
      </div>

      {/* Bottom highlighted sentence */}
      <div className="border-t border-border/60 bg-background/40 px-7 py-6 text-center sm:px-9">
        <p className="mx-auto max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
          A professional website works{" "}
          <span className="font-medium text-ring">24/7</span>, builds{" "}
          <span className="font-medium text-ring">trust</span>, and lets
          customers order without waiting for replies.
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main section ──────────────────────────────────────────────── */

export function Problems() {
  return (
    <section id="problems"
      aria-labelledby="problems-heading"
      className="relative w-full overflow-hidden bg-background py-10 sm:py-24 lg:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern `mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]`" />
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
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            From Instagram DMs to a Professional Online Store
          </motion.span>

          <motion.h2
            id="problems-heading"
            variants={fadeUp}
            className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            Every growing brand eventually needs a better buying experience
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Customers today expect a professional shopping experience. Every
            extra message, delay or manual step increases the chance of losing a
            sale.
          </motion.p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          variants={cardsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 lg:grid-cols-2"
        >
          <ProblemCard
            title={
    <>
      Customers <span className="text-ring">wait</span> for replies
    </>
  }
            caption="Every question adds delay — and delay costs sales."
          >
            <ChatDemo />
          </ProblemCard>

          <ProblemCard
            title={
    <>
      Everything is <span className="text-ring">manual</span>
    </>
  }
            caption="One order means five manual steps, every single time."
          >
            <WorkflowDemo />
          </ProblemCard>

          <ProblemCard
            title={
    <>
      Social media alone doesn&apos;t make <span className="text-ring">enough trust</span>
    </>
  }
            caption="Without a real storefront, hesitation wins."
          >
            <TrustDemo />
          </ProblemCard>

          <ProblemCard
            title={
    <>
      Customers want smooth <span className="text-ring">order tracking</span>
    </>
            }
            caption="Customers always know where their order is — no extra WhatsApp messages needed."
          >
            <TrackingDemo />
          </ProblemCard>
        </motion.div>

        {/* Comparison */}
        <ComparisonSection />
      </div>
    </section>
  );
}
