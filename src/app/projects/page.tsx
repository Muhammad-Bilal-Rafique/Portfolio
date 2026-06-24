"use client";

import { motion } from "framer-motion";
import { ProjectsHeader } from "@/components/projects/header";
import { ProjectCard } from "@/components/projects/project-card";
import { Experiments } from "@/components/projects/experiments";
import OrbitImg from "../../../public/orbit.png";
import NexusImg from "../../../public/nexus.png";

const mainProjects = [
  {
    id: "orbit",
    title: "Orbit",
    version: "V2 - Flagship",
    description: "A complete rewrite of my nexus project. Upgraded to TypeScript,Product Reviews , role-based access control , Real-time order tracking UI , Order confirmation with Mails , and seamless Stripe checkouts. Designed for production-level scale.",
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
    image:NexusImg,
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
    <div className="container w-full max-w-5xl mx-2 mt-20 flex flex-col gap-20">
      
      <ProjectsHeader />

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

      <Experiments projects={miniProjects} />

    </div>
  );
}