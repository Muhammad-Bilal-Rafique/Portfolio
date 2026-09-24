"use client";

import { motion } from "framer-motion";
import { ProjectsHeader } from "@/components/projects/header";
import { ProjectCard } from "@/components/projects/project-card";
import { Experiments } from "@/components/projects/experiments";
import OrbitImg from "../../../public/orbit.png";
import NexusImg from "../../../public/nexus.png";

import { ClientCaseStudy } from "@/components/projects/client-case-study";

const mainProjects = [
  {
    id: "orbit",
    title: "Orbit",
    version: "V2 - Flagship",
    description: "A complete rewrite of my nexus project. Upgraded to TypeScript, Product Reviews, role-based access control, Real-time order tracking UI, Order confirmation with Mails, and seamless Stripe checkouts. Designed for production-level scale.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Zustand", "Auth.js"],
    liveUrl: "https://orbit-three-iota.vercel.app/",
    githubUrl: "https://github.com/Muhammad-Bilal-Rafique/Orbit-",
    image: OrbitImg,
    featured: true,
  },
  {
    id: "nexus",
    title: "Nexus",
    version: "V1 - Legacy",
    description: "My first full-stack e-commerce attempt. Built entirely in JavaScript without a UI library. This project taught me the painful lessons of prop-drilling and type safety, which directly led to the creation of Orbit.",
    tech: ["React", "JavaScript", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://nexus-store-ten.vercel.app/", 
    githubUrl: "https://github.com/Muhammad-Bilal-Rafique/nexus-store",
    image: NexusImg,
    featured: false,
  }
];

const miniProjects = [
  {
    title: "Task Manager",
    description: "A fast, client-side task manager designed to experiment with React hooks and local state management.",
    tech: ["React", "Tailwind CSS", "LocalStorage"],
  }
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto w-full max-w-5xl px-4 mt-20 flex flex-col gap-24 pb-16">
      
      <ProjectsHeader />

      {/* 1. Commercial Client Work */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 self-start px-2.5 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider uppercase">
            Commercial Delivery
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Client Work & Case Studies
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
            Custom-built, production systems engineered and deployed for real-world businesses.
          </p>
        </div>

        <ClientCaseStudy />
      </section>

      {/* 2. Independent Platforms */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 self-start px-2.5 py-0.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs font-semibold tracking-wider uppercase">
            Architectural Progression
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Independent Platforms
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
            Full-stack platforms tracking my technical evolution from vanilla JavaScript fundamentals to production Next.js and TypeScript architectures.
          </p>
        </div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }} 
          initial="hidden" 
          animate="show" 
          className="flex flex-col gap-12"
        >
          {mainProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>
      </section>

      {/* 3. Experiments */}
      <Experiments projects={miniProjects} />

    </div>
  );
}