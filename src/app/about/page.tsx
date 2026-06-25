"use client";

import { StoryHero } from "@/components/about/story-hero";
import { Timeline } from "@/components/about/timeline";
import { BeyondCode } from "@/components/about/beyond-code";

export default function AboutPage() {
  return (
    <div className="w-full mx-auto px-4  max-w-5xl  mt-20 flex flex-col gap-8">
      <StoryHero />
      <Timeline />
      <BeyondCode />
    </div>
  );
}