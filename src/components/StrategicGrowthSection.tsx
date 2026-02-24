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
    <section className="relative w-full overflow-hidden pt-16 pb-32 md:pt-24 md:pb-44 bg-[#DDC4A1]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/fondo.png"
          alt="Overlapping background"
          className="w-full h-full object-cover opacity-80 mix-blend-multiply [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_60%,transparent_100%)]"
        />

        {/* Softer tint so the image keeps more light and depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #E9E1D4 0%, rgba(201,185,155,0.5) 40%, rgba(17,24,32,0.95) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(70%_48%_at_50%_24%,rgba(249,247,242,0.24)_0%,rgba(249,247,242,0.08)_42%,transparent_78%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center">
        {/* LABEL */}
        <div className="text-[12px] tracking-[0.5em] uppercase font-black text-[#111820] mb-10 drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]">
          STRATEGIC GROWTH
        </div>

        {/* HEADLINE PRINCIPAL */}
        <h2 className="uppercase tracking-tighter leading-[0.9] text-[#111820] text-4xl md:text-5xl lg:text-6xl font-black drop-shadow-[0_10px_20px_rgba(201,185,155,0.6)]">
          Elevate Your<br />
          Professional Career
        </h2>

        {/* SUBLINE - Cleaner styling */}
        <div className="mt-12 uppercase tracking-tighter text-3xl md:text-4xl font-black text-[#111820]">
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
      <div className="relative rounded-sm border border-[#111820]/10 bg-[#F9F7F2]/95 backdrop-blur-md px-8 py-10 transition-all duration-500 will-change-transform group-hover:-translate-y-2 group-hover:border-[#C9B99B]/40 group-hover:bg-white group-hover:shadow-[0_20px_40px_-15px_rgba(17,24,32,0.4)]">
        {/* Color Phase Shift Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9B99B] to-[#5E7385] opacity-80" />

        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(201,185,155,0.05),transparent_55%)]" />

        <h3
          className="relative uppercase text-2xl md:text-3xl tracking-[0.12em] mb-6 text-[#111820]"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontStretch: "condensed",
          }}
        >
          {title}
        </h3>

        <div className="relative w-14 h-[2px] bg-gradient-to-r from-[#C9B99B] to-[#5E7385] mb-7 transition-all duration-500 group-hover:w-20" />

        <p className="relative text-[10px] md:text-xs text-[#5E7385] leading-relaxed font-montserrat font-medium uppercase tracking-[0.1em] group-hover:text-[#111820] transition-colors duration-500">
          {description}
        </p>
      </div>
    </div>
  );
}
