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
    <section className="relative w-full overflow-hidden pt-16 pb-32 md:pt-24 md:pb-44">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/desert-dune.webp"
          alt="Desert dune"
          className="w-full h-full object-cover"
        />

        {/* Tinte con degradado correcto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #3D311B 0%, #4A3D23 18%, rgba(106,91,58,0.85) 40%, rgba(220,207,182,0.75) 75%, #F9F3E9 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center">
        {/* LABEL */}
        <div className="text-[12px] tracking-[0.5em] uppercase font-black text-[#C9A24A] mb-10">
          STRATEGIC GROWTH
        </div>

        {/* HEADLINE PRINCIPAL */}
        <h2
          className="uppercase tracking-tight leading-[0.95] text-[#241D12]"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontStretch: "condensed",
          }}
        >
          <span className="block text-4xl md:text-6xl">
            Elevate Your
          </span>
          <span className="block text-4xl md:text-6xl">
            Professional Career
          </span>
        </h2>

        {/* SUBLINE OUTLINE ESTILO DUBAI */}
        <div
          className="mt-10 uppercase tracking-tight text-3xl md:text-5xl"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontStretch: "condensed",
            WebkitTextStroke: "1px #241D12",
            color: "transparent",
          }}
        >
          This Is Not Just Another Congress
        </div>

        {/* BLOQUES */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mt-16 md:mt-24 text-left">
          <GrowthBlock
            title="High-Level Technique"
            description="Advanced methodologies delivered by internationally recognized specialists."
            className="md:translate-y-0"
          />

          <GrowthBlock
            title="Global Positioning"
            description="Connect with leaders and elevate your brand beyond local markets."
            className="md:translate-y-10"
          />

          <GrowthBlock
            title="Authority & Visibility"
            description="Build influence, credibility and strategic presence in the industry."
            className="md:translate-y-20"
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
      <div className="relative rounded-sm border border-[#241D12]/10 bg-[#F9F3E9]/60 backdrop-blur-[2px] px-8 py-10 transition-all duration-500 will-change-transform group-hover:-translate-y-2 group-hover:border-[#C9A24A]/50 group-hover:bg-[#F9F3E9]/85 group-hover:shadow-[0_30px_70px_-40px_rgba(36,29,18,0.55)]">
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,74,0.18),transparent_55%)]" />

        <h3
          className="relative uppercase text-2xl md:text-3xl tracking-[0.12em] mb-6 text-[#241D12]"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontStretch: "condensed",
          }}
        >
          {title}
        </h3>

        <div className="relative w-14 h-[2px] bg-[#241D12]/20 mb-7 transition-all duration-500 group-hover:w-20 group-hover:bg-[#C9A24A]/70" />

        <p className="relative text-base md:text-lg text-[#241D12]/70 leading-relaxed group-hover:text-[#241D12]/85 transition-colors duration-500">
          {description}
        </p>
      </div>
    </div>
  );
}
