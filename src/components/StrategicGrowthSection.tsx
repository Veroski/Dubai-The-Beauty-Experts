"use client";

import React from "react";

/**
 * StrategicGrowthSection
 * Helvetica Neue Condensed Black
 * Tamaño reducido al 50%
 * Imagen /desert-dune.webp con tinte degradado coherente
 */

import { SectionCTA } from "./SectionCTA";

export function StrategicGrowthSection() {
  return (
    <section className="relative w-full overflow-hidden pt-16 pb-32 md:pt-24 md:pb-44 bg-[#1A1A1A]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/desert-dune.webp"
          alt="Desert dune"
          className="w-full h-full object-cover"
        />

        {/* Softer tint so the image keeps more light and depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(34,40,44,0.5) 0%, rgba(26,26,26,0.4) 34%, rgba(61,50,43,0.34) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(70%_48%_at_50%_24%,rgba(255,236,205,0.24)_0%,rgba(255,236,205,0.08)_42%,transparent_78%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center">
        {/* LABEL */}
        <div className="text-[12px] tracking-[0.5em] uppercase font-black text-[#D7A468] mb-10">
          STRATEGIC GROWTH
        </div>

        {/* HEADLINE PRINCIPAL */}
        <h2 className="uppercase tracking-tighter leading-[0.9] text-[#F4E6CF] text-4xl md:text-5xl lg:text-6xl font-black drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)]">
          Elevate Your<br />
          Professional Career
        </h2>

        {/* SUBLINE - Cleaner styling */}
        <div className="mt-12 uppercase tracking-tighter text-3xl md:text-4xl font-black text-[#F0D5AD]">
          This Is Not Just Another Event
        </div>

        {/* BLOQUES */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-16 md:mt-24 text-left">
          <GrowthBlock
            title="High-Level Technique"
            description="Advanced methodologies delivered by internationally recognized specialists."
            className="md:translate-y-10"
          />

          <GrowthBlock
            title="Global Positioning"
            description="Connect with leaders and elevate your brand beyond local markets."
            className="md:translate-y-0"
          />

          <GrowthBlock
            title="Authority & Visibility"
            description="Build influence, credibility and strategic presence in the industry."
            className="md:translate-y-10"
          />
        </div>
        <SectionCTA />
      </div>
    </section>
  );
}

type GrowthBlockProps = {
  title: string;
  description: string;
  className?: string;
};

function GrowthBlock({ title, description, className }: GrowthBlockProps) {
  return (
    <div className={`group mx-auto w-full max-w-sm ${className ?? ""}`}>
      <div className="relative rounded-sm border border-[#6B4F3B]/45 bg-[#2B231E]/65 backdrop-blur-[2px] px-8 py-10 transition-all duration-500 will-change-transform group-hover:-translate-y-2 group-hover:border-[#A85E36]/60 group-hover:bg-[#312822]/82 group-hover:shadow-[0_30px_70px_-40px_rgba(12,8,6,0.8)]">
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(168,94,54,0.18),transparent_55%)]" />

        <h3
          className="relative uppercase text-2xl md:text-3xl tracking-[0.12em] mb-6 text-[#CBA785]"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontStretch: "condensed",
          }}
        >
          {title}
        </h3>

        <div className="relative w-14 h-[2px] bg-[#6B4F3B]/65 mb-7 transition-all duration-500 group-hover:w-20 group-hover:bg-[#A85E36]" />

        <p className="relative text-base md:text-lg text-[#CBA785]/78 leading-relaxed group-hover:text-[#CBA785]/92 transition-colors duration-500">
          {description}
        </p>
      </div>
    </div>
  );
}
