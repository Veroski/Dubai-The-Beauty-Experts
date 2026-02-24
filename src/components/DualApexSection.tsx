"use client";

import React from "react";

export function DualApexSection() {
    return (
        <section
            id="apex"
            className="relative overflow-hidden py-24 md:py-32 bg-[#0B1218]"
        >
            {/* Vectorized Background & Lighting */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B1218_0%,#141C24_100%)]" />

                {/* Custom Vectorized Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.15]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M30 60L60 30L30 0L0 30z' stroke='%23C0C9D4' stroke-width='0.5' stroke-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '80px 80px'
                }} />

                {/* Silver Lighting / Shine */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(192,201,212,0.15),transparent_70%)]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(138,153,168,0.1),transparent_60%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Header */}
                <div className="relative mb-24 max-w-5xl mx-auto px-4 py-6 md:px-8 md:py-10">
                    <span className="relative text-[10px] md:text-xs tracking-widest uppercase font-montserrat font-medium text-[#A3B1C6]">
                        EXCLUSIVE MASTERCLASS
                    </span>

                    <h2 className="relative mt-6 text-5xl md:text-7xl lg:text-8xl font-bebas tracking-wide text-[#F0F4F8] leading-[0.9] uppercase drop-shadow-[0_0_30px_rgba(192,201,212,0.2)]">
                        <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: "1px #F0F4F8" }}
                        >
                            HIGH-PERFORMANCE
                        </span>{" "}
                        <br className="hidden md:block" />
                        MINDS
                    </h2>

                    <p className="relative mt-8 text-[10px] md:text-xs text-[#A3B1C6] max-w-2xl mx-auto font-montserrat tracking-[0.2em] uppercase font-medium leading-relaxed">
                        BEYOND TECHNIQUE LIES THE MINDSET BEHIND ICONIC RESULTS. <br className="hidden md:block" />
                        TWO WORLD-CLASS MENTORS REVEALED EXCLUSIVELY FOR THE DUBAI CHAMPIONSHIP WEEK TO ELEVATE YOUR PEAK PERFORMANCE.
                    </p>
                </div>

                {/* Dual Floating Mystery Cards */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto relative z-20">
                    {/* Card 1: Tactical/Business Mind */}
                    <MysteryCard
                        label="STRATEGIC AUTHORITY"
                        sublabel="BUSINESS MINDSET & SCALING"
                        delay="0s"
                        accentColor="#B0C4DE"
                    />

                    {/* Card 2: Performance/Mental Focus */}
                    <MysteryCard
                        label="PEAK PERFORMANCE"
                        sublabel="HIGH-STAKES MENTAL ARCHITECTURE"
                        delay="0.5s"
                        accentColor="#E6EBEF"
                    />
                </div>

                {/* Concept Tags */}
                <div className="mt-32 flex flex-wrap justify-center gap-10 md:gap-16">
                    <ConceptItem text="HIGH-STAKES FOCUS" />
                    <ConceptItem text="GLOBAL AUTHORITY" />
                    <ConceptItem text="MINDSET ARCHITECTURE" />
                </div>

                {/* Vectorized Skyline / Wave Decor */}
                <div className="mt-24 flex justify-center opacity-40 mix-blend-screen pointer-events-none">
                    <div className="w-[820px] max-w-[95vw]">
                        <svg viewBox="0 0 1200 240" className="w-full h-auto drop-shadow-[0_0_15px_rgba(192,201,212,0.5)]" aria-hidden="true">
                            <path
                                d="
                  M0,220 L0,200 L40,200 L40,170 L70,170 L70,210 L95,210 L95,150
                  L125,150 L125,210 L155,210 L155,175 L190,175 L190,220
                  L240,220 L240,140 L265,140 L265,220
                  L315,220 L315,185 L350,185 L350,220
                  L420,220 L420,165 L445,165 L445,220
                  L520,220 L520,120 L545,120 L545,220
                  L585,220 L585,95 L595,95 L595,60 L605,60 L605,95 L615,95 L615,220
                  L680,220 L680,150 L710,150 L710,220
                  L760,220 L760,130 L790,130 L790,220
                  L850,220 L850,160 L880,160 L880,220
                  L930,220 L930,145 L960,145 L960,220
                  L1010,220 L1010,175 L1040,175 L1040,220
                  L1080,220 L1080,155 L1110,155 L1110,220
                  L1200,220 L1200,240 L0,240 Z
                "
                                fill="none"
                                stroke="url(#silverGrad)"
                                strokeWidth="2"
                            />
                            <defs>
                                <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#A3B1C6" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#F0F4F8" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#A3B1C6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(0.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}

function MysteryCard({ label, sublabel, delay, accentColor = "#C0C9D4" }: { label: string, sublabel: string, delay: string, accentColor?: string }) {
    return (
        <div className="relative mx-auto w-full max-w-[340px] aspect-[3/4]">
            {/* Ambient Silver Glow */}
            <div
                className="absolute inset-0 blur-[80px] rounded-full opacity-40 transition-colors duration-1000"
                style={{ backgroundColor: accentColor }}
            />

            <div className="relative h-full w-full animate-float" style={{ animationDelay: delay }}>
                {/* Silver Glassmorphism Card */}
                <div className="h-full w-full bg-[#141C24]/80 backdrop-blur-xl rounded-[2.5rem] border border-[#C0C9D4]/40 ring-1 ring-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center justify-center group transition-all duration-500 hover:border-white/60 hover:shadow-[0_0_40px_rgba(192,201,212,0.3)]">

                    {/* Metallic Surface Reflection */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,transparent_48%,rgba(163,177,198,0.05)_100%)]" />

                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                        <div className="relative w-56 h-72 opacity-90 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
                            {/* Inner Silhouette Frames */}
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-28 h-28 bg-[#0B1218] rounded-full border border-[#C0C9D4]/30 shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] group-hover:border-[#F0F4F8]/50 transition-colors duration-500" />
                            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-56 h-56 bg-[#0B1218] rounded-t-[100px] border border-[#C0C9D4]/30 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] group-hover:border-[#F0F4F8]/50 transition-colors duration-500" />

                            <div className="absolute inset-0 flex items-center justify-center pt-8">
                                <span className="text-8xl font-bebas tracking-widest uppercase text-transparent bg-clip-text bg-[linear-gradient(135deg,#FFFFFF_0%,#A3B1C6_50%,#7E8D9E_100%)] drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-500">
                                    ?
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 w-full px-6">
                        <div className="w-full py-5 rounded-2xl border border-[#C0C9D4]/20 bg-[#0B1218]/90 backdrop-blur-md transition-colors duration-500 group-hover:border-[#C0C9D4]/50 group-hover:bg-[#141C24]">
                            <p className="text-[10px] tracking-widest uppercase font-montserrat font-medium text-[#A3B1C6] group-hover:text-[#F0F4F8] transition-colors">
                                {label}
                            </p>
                            <p className="mt-2 text-[11px] text-[#F0F4F8] font-montserrat font-medium tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                                {sublabel}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ConceptItem({ text }: { text: string }) {
    return (
        <div className="flex flex-col items-center group cursor-default">
            {/* Silver active line indicator */}
            <div className="h-[2px] w-4 mb-4 bg-[#A3B1C6] opacity-60 transition-all duration-500 group-hover:w-16 group-hover:bg-[#F0F4F8] group-hover:shadow-[0_0_10px_#F0F4F8]" />
            <span className="text-[10px] md:text-xs tracking-widest uppercase font-montserrat font-medium text-[#A3B1C6] group-hover:text-[#F0F4F8] transition-colors">
                {text}
            </span>
        </div>
    );
}
