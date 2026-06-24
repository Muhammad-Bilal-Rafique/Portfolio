import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import {FeaturedProject} from "@/components/home/featured-project"
import {Skills} from "@/components/home/skills"

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <Marquee />
      <FeaturedProject/>
        <Skills/>
    </div>
  );
}