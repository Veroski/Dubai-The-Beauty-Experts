"use client";

import React from "react";

export function ParamedicalPMUSection() {
    return (
        <section
            id="paramedical"
            className="relative overflow-hidden py-24 md:py-44 bg-[#110D08]"
        >
            {/* Dynamic Background Beams */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[140%] bg-[radial-gradient(ellipse_at_center,rgba(201,162,74,0.15),transparent_70%)] rotate-12 animate-pulse-slow" />
                <div className="absolute top-[10%] -right-[15%] w-[70%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(226,176,163,0.1),transparent_70%)] -rotate-12 animate-pulse-slow-reverse" />

                {/* Animated Spotlight Beams */}
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#C9A24A]/20 to-transparent rotate-[15deg] blur-[2px]" />
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[#E2B0A3]/20 to-transparent -rotate-[15deg] blur-[2px]" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#C9A24A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col items-center mb-24">
                    <span className="text-[11px] md:text-[13px] tracking-[0.8em] uppercase font-black text-[#C9A24A] mb-8 animate-fade-in">
                        Exclusively Revealed
                    </span>

                    <h2 className="text-center text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase text-[#F9F5ED]">
                        Scar Camouflage<br />
                        <span className="italic font-serif text-[#C9A24A] lowercase tracking-normal">&amp;</span>{" "}
                        <span className="text-[#E2B0A3]">Medical PMU</span>
                    </h2>

                    <div className="mt-12 h-px w-32 bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent" />

                    <p className="mt-12 text-center text-xl md:text-2xl text-[#F9F5ED]/70 max-w-3xl mx-auto font-medium leading-relaxed">
                        A dedicated stage for paramedical micropigmentation.
                        Round table, two sofas, open microphone — specialists debating
                        areola reconstruction, scar camouflage,
                        and the real clinical cases that change lives.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    <FeatureCard
                        label="01"
                        title="Surgical Scars"
                        description="Advanced medical protocols for flattening and pigmenting post-op tissue."
                    />
                    <FeatureCard
                        label="02"
                        title="Areola Restoration"
                        description="Techniques for cancer survivors and clinical cases."
                        accentColor="#E2B0A3"
                    />
                    <FeatureCard
                        label="03"
                        title="Burn Camouflage"
                        description="Managing textural challenges and complex skin types in medical PMU."
                    />
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1) rotate(12deg); }
          50% { opacity: 0.2; transform: scale(1.1) rotate(14deg); }
        }
        @keyframes pulse-slow-reverse {
          0%, 100% { opacity: 0.1; transform: scale(1.1) rotate(-12deg); }
          50% { opacity: 0.2; transform: scale(1) rotate(-14deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 10s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

        </section>
    );
}

function FeatureCard({ label, title, description, accentColor = "#C9A24A" }: { label: string; title: string, description: string, accentColor?: string }) {
    return (
        <div className="group relative">
            <div className="h-full rounded-3xl border border-[#C9A24A]/10 bg-[#1A150E]/40 backdrop-blur-md p-8 transition-all duration-500 hover:border-[#C9A24A]/30 hover:bg-[#1A150E]/60 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] font-black text-[#C9A24A]/40 tracking-widest">{label}</span>
                    <div className="h-px flex-1 bg-[#C9A24A]/10" />
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight text-[#F9F5ED] mb-4 leading-tight">
                    {title}
                </h3>

                <p className="text-sm text-[#F9F5ED]/50 leading-relaxed group-hover:text-[#F9F5ED]/70 transition-colors">
                    {description}
                </p>

                {/* Subtle accent glow */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[radial-gradient(circle_at_center,var(--accent-glow),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ '--accent-glow': `${accentColor}22` } as React.CSSProperties} />
            </div>
        </div>
    );
}
