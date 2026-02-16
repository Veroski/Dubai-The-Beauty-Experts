"use client";

import React from "react";

export function DualApexSection() {
    return (
        <section
            id="apex"
            className="relative overflow-hidden py-24 md:py-32 bg-[#FDFCF9]"
        >
            {/* Warm Dubai Sun Gradient */}
            <div
                className="absolute inset-0 opacity-70 scale-150"
                style={{
                    background: `conic-gradient(
            from 180deg at 50% 50%,
            #FFF8E8 0deg,
            #F2D5A0 120deg,
            #E6B17E 180deg,
            #F2D5A0 240deg,
            #FFF8E8 360deg
          )`,
                    filter: "blur(90px)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Header */}
                <div className="mb-20">
                    <span className="text-[13px] md:text-[14px] tracking-[0.8em] uppercase font-black text-[#B48B2A]">
                        Exclusive Masterclass
                    </span>

                    <h2 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[#243441] leading-[0.9] uppercase">
                        The <span className="italic font-serif text-[#C9A24A]">High-Performance</span> Mind.
                    </h2>

                    <p className="mt-8 text-xl md:text-2xl text-[#5C4A2D] max-w-2xl mx-auto font-medium leading-relaxed">
                        Beyond technique lies the mindset behind iconic results.
                        Two world-class mentors revealed exclusively for the Dubai Congress to elevate your peak performance.
                    </p>
                </div>

                {/* Dual Floating Mystery Cards */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-5xl mx-auto">
                    {/* Card 1: Tactical/Business Mind */}
                    <MysteryCard
                        label="Strategic Authority"
                        sublabel="Business Mindset & Scaling"
                        delay="0s"
                    />

                    {/* Card 2: Performance/Mental Focus */}
                    <MysteryCard
                        label="Peak Performance"
                        sublabel="High-Stakes Mental Architecture"
                        delay="0.5s"
                        accentColor="#E2B0A3"
                    />
                </div>

                {/* Concept Tags */}
                <div className="mt-24 flex flex-wrap justify-center gap-10 md:gap-16">
                    <ConceptItem text="High-Stakes Focus" color="#C9A24A" />
                    <ConceptItem text="Global Authority" color="#E2B0A3" />
                    <ConceptItem text="Mindset Architecture" color="#B48B2A" />
                </div>

                {/* Skyline Decor */}
                <div className="mt-20 flex justify-center">
                    <div className="w-[820px] max-w-[95vw] opacity-90">
                        <svg viewBox="0 0 1200 240" className="w-full h-auto" aria-hidden="true">
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
                                fill="rgba(92,74,45,0.75)"
                                stroke="rgba(201,162,74,0.35)"
                                strokeWidth="1"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(0.2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 5.2s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
}

function MysteryCard({ label, sublabel, delay, accentColor = "#C9A24A" }: { label: string, sublabel: string, delay: string, accentColor?: string }) {
    return (
        <div className="relative mx-auto w-full max-w-[340px] aspect-[3/4]">
            <div
                className="absolute inset-0 blur-[100px] rounded-full opacity-40 transition-colors duration-1000"
                style={{ backgroundColor: accentColor }}
            />

            <div className="relative h-full w-full animate-float" style={{ animationDelay: delay }}>
                <div className="h-full w-full bg-white/40 backdrop-blur-2xl rounded-[2.5rem] border border-white/70 ring-1 ring-[#C9A24A]/20 shadow-[0_40px_80px_-20px_rgba(201,162,74,0.18)] overflow-hidden flex flex-col items-center justify-center border-t-white border-l-white">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.6)_0%,transparent_50%,rgba(226,176,163,0.1)_100%)]" />

                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                        <div className="relative w-56 h-72 opacity-80 filter drop-shadow(0 20px 30px rgba(180,139,42,0.1))">
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-28 h-28 bg-[#F9F6F0] rounded-full ring-1 ring-[#C9A24A]/15 shadow-[inset_0_0_20px_rgba(201,162,74,0.25)]" />
                            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-56 h-56 bg-[#F9F6F0] rounded-t-[100px] ring-1 ring-[#C9A24A]/10 shadow-[inset_0_0_30px_rgba(201,162,74,0.15)]" />

                            <div className="absolute inset-0 flex items-center justify-center pt-8">
                                <span className="text-8xl font-serif text-transparent bg-clip-text bg-[linear-gradient(135deg,#C9A24A_0%,#E2B0A3_50%,#B48B2A_100%)] drop-shadow-[0_0_15px_rgba(226,176,163,0.4)] animate-pulse">
                                    ?
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 w-full px-8">
                        <div className="w-full py-4 rounded-2xl border border-[#E2B0A3]/20 bg-white/60 backdrop-blur-md">
                            <p className="text-[11px] tracking-[0.5em] uppercase font-bold text-[#B48B2A]">
                                {label}
                            </p>
                            <p className="mt-1 text-[12px] text-[#8B7E6D]/80 font-medium">
                                {sublabel}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ConceptItem({ text, color }: { text: string; color: string }) {
    return (
        <div className="flex flex-col items-center group cursor-default">
            <div
                className="h-[2px] w-5 mb-4 transition-all duration-500 group-hover:w-12"
                style={{ backgroundColor: color, opacity: 0.6 }}
            />
            <span className="text-[12px] md:text-[13px] tracking-[0.4em] uppercase font-black text-[#8B7E6D]/70 group-hover:text-[#4A4238] transition-colors">
                {text}
            </span>
        </div>
    );
}
