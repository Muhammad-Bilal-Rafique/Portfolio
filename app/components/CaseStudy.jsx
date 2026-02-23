"use client"; // Required for the onClick and useState to work

import React, { useState } from "react";
import { Gauge, CheckCircle2, ExternalLink, Github, X } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Your optimized images
import Home from "@/public/Home.webp";
import ManageProducts from "@/public/ManageProducts.webp";
import MobileView from "@/public/MobileView.webp";
import ProductsDetail from "@/public/ProductsDetail.webp";

const FeaturedProject = () => {
  // State to manage which image is open in fullscreen. null means closed.
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <>
      <section id="work" className="w-full py-24 md:py-32 px-4 border-t border-bg-secondary relative">
        
        {/* PART 1: THE TWO-COLUMN LAYOUT */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Text and Table */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-action font-bold tracking-widest uppercase text-sm mb-3">Featured Case Study</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight text-balance">
                High-Conversion E-Commerce Platform
              </h2>
            </div>

            <p className="text-lg text-text-muted leading-relaxed">
              The <span className="text-text-primary font-semibold">Nexus</span>{" "}
              build was engineered from the ground up to eliminate checkout
              friction. By leveraging{" "}
              <strong className="text-text-primary font-medium">
                Next.js Server Components and Zod
              </strong>{" "}
              for strict data validation, the architecture guarantees rock-solid
              reliability while delivering near-instant page loads.
            </p>

            {/* The ROI Table */}
            <div className="mt-4 border border-bg-secondary rounded-xl overflow-hidden bg-bg-primary shadow-sm">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-bg-secondary/40 text-text-primary border-b border-bg-secondary">
                  <tr>
                    <th className="p-4 font-semibold w-1/3">Metric</th>
                    <th className="p-4 font-semibold text-text-muted w-1/3">Average Competitor</th>
                    <th className="p-4 font-bold text-action w-1/3">My Next.js Build</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-bg-secondary text-text-muted">
                  <tr className="hover:bg-bg-secondary/20 transition-colors">
                    <td className="p-4 font-medium text-text-primary">Load Time</td>
                    <td className="p-4">3.5 seconds</td>
                    <td className="p-4 font-bold text-text-primary flex items-center gap-2">
                      &lt; 0.8 seconds <CheckCircle2 className="h-4 w-4 text-action" />
                    </td>
                  </tr>
                  <tr className="hover:bg-bg-secondary/20 transition-colors">
                    <td className="p-4 font-medium text-text-primary">Lighthouse</td>
                    <td className="p-4">65 / 100</td>
                    <td className="p-4 font-bold text-text-primary flex items-center gap-2">
                      100 / 100 <Gauge className="h-4 w-4 text-action" />
                    </td>
                  </tr>
                  <tr className="hover:bg-bg-secondary/20 transition-colors">
                    <td className="p-4 font-medium text-text-primary">SEO Ready</td>
                    <td className="p-4">Basic</td>
                    <td className="p-4 font-bold text-text-primary flex items-center gap-2">
                      Fully Optimized <CheckCircle2 className="h-4 w-4 text-action" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex flex-wrap gap-4">
              <Button asChild className="bg-action hover:bg-action-hover text-white transition-all">
                <Link href="https://nexus-store-ten.vercel.app/" target="_blank">
                  Live Preview <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-bg-secondary text-text-primary hover:bg-bg-secondary transition-all">
                <Link href="https://github.com/Muhammad-Bilal-Rafique/nexus-store" target="_blank">
                  Source Code <Github className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: The Floating Badge Image */}
          <div className="relative group perspective-1000">
            {/* Added cursor-pointer and onClick here */}
            <div 
              className="relative aspect-video lg:aspect-square xl:aspect-video rounded-2xl overflow-hidden border border-bg-secondary bg-bg-secondary/20 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 cursor-pointer"
              onClick={() => setFullscreenImage(Home)}
            >
              <Image
                src={Home}
                alt="Nexus E-Commerce Main View"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Your original Floating Performance Badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 bg-bg-primary border border-bg-secondary p-4 rounded-xl shadow-xl flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-700 pointer-events-none">
              <div className="bg-action/10 p-3 rounded-full">
                <Gauge className="h-8 w-8 text-action" />
              </div>
              <div>
                <p className="text-xs font-bold text-text-muted uppercase tracking-wider">Performance</p>
                <p className="text-xl font-black text-text-primary">100/100</p>
              </div>
            </div>
          </div>

        </div>


        {/* PART 2: THE VISUAL PROOF GRID */}
        <div className="w-full max-w-6xl mx-auto mt-20">
          <h3 className="text-xl font-bold mb-6 text-text-primary">Platform Capabilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Admin Dashboard */}
            <div 
              className="relative aspect-video md:aspect-4/3 rounded-xl overflow-hidden border border-bg-secondary shadow-md group bg-bg-secondary cursor-pointer"
              onClick={() => setFullscreenImage(ManageProducts)}
            >
              <Image src={ManageProducts} alt="Admin Dashboard" fill className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" />
            </div>

            {/* Product Details */}
            <div 
              className="relative aspect-video md:aspect-4/3 rounded-xl overflow-hidden border border-bg-secondary shadow-md group bg-bg-secondary cursor-pointer"
              onClick={() => setFullscreenImage(ProductsDetail)}
            >
              <Image src={ProductsDetail} alt="Product Details UI" fill className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none" />
            </div>

            {/* Mobile View */}
            <div 
              className="relative aspect-3/4 md:aspect-4/3 rounded-xl overflow-hidden border border-bg-secondary shadow-md group bg-bg-secondary flex items-center justify-center cursor-pointer"
              onClick={() => setFullscreenImage(MobileView)}
            >
              <Image src={MobileView} alt="Mobile View" fill className="object-cover md:object-contain p-0 md:p-4 transition-transform duration-700 group-hover:scale-105 pointer-events-none" />
            </div>

          </div>
        </div>

      </section>

      {/* FULLSCREEN MODAL (LIGHTBOX) OVERLAY */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200 cursor-pointer"
          onClick={() => setFullscreenImage(null)} 
        >
          <div 
            className="relative w-full max-w-6xl h-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image 
              src={fullscreenImage} 
              alt="Fullscreen View" 
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

export default FeaturedProject;