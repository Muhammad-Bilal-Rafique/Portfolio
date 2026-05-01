"use client";

import React, { useState } from "react";
import { Gauge, CheckCircle2, TrendingDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import OldScore from "@/public/OldScore.webp";
import NewScore from "@/public/NewScore.webp";

const metrics = [
  {
    label: "Total Blocking Time",
    before: "1,240ms",
    after: "60ms",
    delta: "-95%",
    good: true,
  },
  {
    label: "Speed Index",
    before: "33.6s",
    after: "3.2s",
    delta: "-90%",
    good: true,
  },
  {
    label: "Largest Contentful Paint",
    before: "2.5s",
    after: "1.7s",
    delta: "-32%",
    good: true,
  },
  {
    label: "First Contentful Paint",
    before: "2.4s",
    after: "1.1s",
    delta: "-54%",
    good: true,
  },
];

const auditFindings = [
  "6 third-party apps injecting scripts on every page load",
  "816 KiB of unused JavaScript downloaded by every visitor",
  "Render-blocking requests delaying page paint by 1,130ms",
  "20 long main-thread tasks blocking user interaction",
  "Speed Index of 33.6s — page visually incomplete for over half a minute",
];

const whatWasDone = [
  "Audited all installed apps — identified which hurt performance vs. provided real business value",
  "Removed all non-essential third-party apps and their script injections",
  "Verified theme code had no leftover script tags from removed apps",
  "Confirmed all app embed toggles were fully disabled in the theme customizer",
];

const CaseStudy = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <>
      <section
        id="case-study"
        className="w-full py-24 md:py-32 px-4 border-t border-bg-secondary relative"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-16">
          {/* HEADER */}
          <div className="flex flex-col gap-4">
            <p className="text-action font-bold tracking-widest uppercase text-sm">
              Featured Case Study
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight text-balance">
              Lumina Jewels: <span className="whitespace-nowrap">60 → 98</span>{" "}
              Performance Score
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              A full audit and optimization of a jewelry store suffering from
              excessive third-party app bloat — resulting in near-perfect Core
              Web Vitals across the board.
            </p>
          </div>

          {/* BEFORE / AFTER SCORE BADGES */}
          {/* BEFORE / AFTER SCORE BADGES */}
          <div className="flex justify-center gap-4">
            <div className="flex flex-col gap-1 border border-bg-secondary rounded-xl px-8 py-6 bg-bg-secondary/20 min-w-[140px]">
              <p className="text-xs font-bold text-text-muted uppercase tracking-wider">
                Before
              </p>
              <p className="text-6xl font-black text-text-muted">60</p>
              <p className="text-xs text-text-muted">Performance</p>
            </div>
            <div className="flex flex-col gap-1 border border-action/30 rounded-xl px-8 py-6 bg-action/5 min-w-[140px]">
              <p className="text-xs font-bold text-action uppercase tracking-wider">
                After
              </p>
              <p className="text-6xl font-black text-action">98</p>
              <p className="text-xs text-text-muted">Performance</p>
            </div>
          </div>

          {/* TWO COLUMN: Problem + What Was Done */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted">
                The Problem
              </h3>
              <ul className="flex flex-col gap-3">
                {auditFindings.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text-muted leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-action flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted">
                What Was Done
              </h3>
              <ul className="flex flex-col gap-3">
                {whatWasDone.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text-muted leading-relaxed"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-action flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
                *After optimization, pages loaded visibly <span className="text-action font-semibold">faster</span>, reducing bounce risk and <span className="text-action font-semibold">improving user experience</span> on mobile
              </div>
          </div>

          {/* KEY METRICS TABLE */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted">
              Key Metric Improvements
            </h3>
            <div className="border border-bg-secondary rounded-xl overflow-hidden bg-bg-primary shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-bg-secondary/40 text-text-primary border-b border-bg-secondary">
                  <tr>
                    <th className="p-4 font-semibold">Metric</th>
                    <th className="p-4 font-semibold text-text-muted">
                      Before
                    </th>
                    <th className="p-4 font-bold text-action">After</th>
                    <th className="p-4 font-semibold text-text-muted">
                      Change
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-bg-secondary text-text-muted">
                  {metrics.map((m) => (
                    <tr
                      key={m.label}
                      className="hover:bg-bg-secondary/20 transition-colors"
                    >
                      <td className="p-4 font-medium text-text-primary">
                        {m.label}
                      </td>
                      <td className="p-4 line-through">{m.before}</td>
                      <td className="p-4 font-bold text-text-primary flex items-center gap-2">
                        {m.after}
                        <Gauge className="h-4 w-4 text-action" />
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-action bg-action/10 px-2 py-1 rounded-full">
                          <TrendingDown className="h-3 w-3" />
                          {m.delta}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SCREENSHOT PROOF */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-text-muted">
              Score Proof
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Old Score */}
              <div className="flex flex-col gap-2">
                <p className="text-md font-semibold text-text-muted uppercase tracking-wider">
                  Before
                </p>
                <div
                  className="relative aspect-video rounded-xl overflow-hidden border border-bg-secondary shadow-md group bg-bg-secondary cursor-pointer"
                  onClick={() => setFullscreenImage(OldScore)}
                >
                  <Image
                    src={OldScore}
                    alt="Lumina Jewels — before optimization score"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* New Score */}
              <div className="flex flex-col gap-2">
                <p className="text-md font-semibold text-action uppercase tracking-wider">
                  After
                </p>
                <div
                  className="relative aspect-video rounded-xl overflow-hidden border border-action/30 shadow-md group bg-bg-secondary cursor-pointer"
                  onClick={() => setFullscreenImage(NewScore)}
                >
                  <Image
                    src={NewScore}
                    alt="Lumina Jewels — after optimization score"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4 items-start">
            <Button
              className="bg-action hover:bg-action-hover text-white transition-all cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Your Free Audit
            </Button>

            {/* Disclaimer */}
            <p className="text-xs text-text-muted max-w-xl leading-relaxed">
              *This optimization was performed on a controlled test store to demonstrate the exact process used on real Shopify stores
            </p>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200 cursor-pointer"
          onClick={() => setFullscreenImage(null)}
        >
          <div
            className="relative w-full max-w-6xl h-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={fullscreenImage}
              alt="Fullscreen Score Proof"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-colors cursor-pointer"
              onClick={() => setFullscreenImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudy;
