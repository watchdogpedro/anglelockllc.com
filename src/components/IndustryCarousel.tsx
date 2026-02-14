"use client";

import { useState, useEffect } from "react";

const industries = [
  {
    name: "Aerospace & Defense",
    description: "Satellite assembly, jet engine test stands, aircraft fixtures",
    image: "/images/industries/aerospace.jpg", // User will replace
    customers: "Boeing, Defense Contractors",
  },
  {
    name: "Semiconductor Manufacturing",
    description: "Wafer inspection systems, cleanroom equipment, fab frames",
    image: "/images/industries/semiconductor.jpg", // User will replace
    customers: "TSMC, Lam Research",
  },
  {
    name: "Medical & Life Sciences",
    description: "Bioprocessing equipment, cleanroom frames, lab automation",
    image: "/images/industries/medical.jpg", // User will replace
    customers: "Medical Device OEMs",
  },
  {
    name: "Industrial Automation",
    description: "Robot cells, assembly lines, automated material handling",
    image: "/images/industries/automation.jpg", // User will replace
    customers: "Disney Studios, Milwaukee Tool",
  },
];

export default function IndustryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % industries.length);
        setIsTransitioning(false);
      }, 500); // Half of transition time
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentIndustry = industries[currentIndex];

  return (
    <div className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-surface">
      {/* Image Background with Fade Transition */}
      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        {industries.map((industry, idx) => (
          <div
            key={industry.name}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Placeholder gradient until user provides images */}
            <div
              className="h-full w-full bg-gradient-to-br from-surface via-surface-light to-background"
              style={{
                backgroundImage: `url('${industry.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Fallback pattern if image doesn't exist */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div
            className={`transition-all duration-500 ${
              isTransitioning
                ? "translate-y-4 opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            <div className="inline-block rounded-full bg-accent/10 px-3 py-1 backdrop-blur-sm">
              <span className="text-xs font-semibold text-accent">
                {currentIndustry.customers}
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              {currentIndustry.name}
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-silver sm:text-base">
              {currentIndustry.description}
            </p>
          </div>
        </div>

        {/* Industry Indicators */}
        <div className="absolute right-6 top-6 flex flex-col gap-2">
          {industries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                idx === currentIndex
                  ? "w-8 bg-accent"
                  : "bg-silver-dim/30 hover:bg-silver-dim/50"
              }`}
              aria-label={`Go to ${industries[idx].name}`}
            />
          ))}
        </div>
      </div>

      {/* Instruction for user (remove after images added) */}
      <div className="border-t border-border bg-surface/50 p-4 text-center">
        <p className="text-xs text-silver-dim">
          <span className="font-semibold text-accent">
            Add industry images:
          </span>{" "}
          Place customer photos in <code className="rounded bg-background px-2 py-0.5 text-xs">/public/images/industries/</code>
          <br />
          (aerospace.jpg, semiconductor.jpg, medical.jpg, automation.jpg)
        </p>
      </div>
    </div>
  );
}
