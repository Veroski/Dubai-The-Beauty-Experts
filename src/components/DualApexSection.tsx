"use client";

import React from "react";

export function DualApexSection() {
    return (
        <section
            id="apex"
            className="relative overflow-hidden py-24 md:py-32 bg-[#1A1A1A]"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,#E0AE72_0%,rgba(224,174,114,0)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#D79F63_0%,#A97848_14%,#7E5C3B_30%,#4A382C_48%,#1F1A17_68%,#171412_100%)]" />
                <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(rgba(71,48,28,0.32)_0.85px,transparent_1px)] bg-[size:3px_3px]" />
                <div className="absolute inset-0 opacity-[0.12] bg-[repeating-linear-gradient(166deg,rgba(230,188,132,0.16)_0px,rgba(230,188,132,0.16)_2px,transparent_14px,transparent_30px)]" />
                <div className="absolute -top-6 left-0 right-0 h-20 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(245,214,170,0.26),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_18%,rgba(122,92,68,0.26),transparent_58%),radial-gradient(1000px_circle_at_84%_82%,rgba(168,94,54,0.2),transparent_62%)]" />
                <div className="absolute -left-[15%] top-[18%] w-[42%] h-[58%] rounded-[999px] border border-[#8E6A47]/25" />
                <div className="absolute right-[-18%] top-[8%] w-[48%] h-[68%] rounded-[999px] border border-[#8E6A47]/20" />
                <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_40%,rgba(255,255,255,0.03)_72%,rgba(255,255,255,0)_100%)]" />
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(255,255,255,0.85)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.85)_1px,transparent_1px)] bg-[size:96px_96px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Header */}
                <div className="relative mb-20 max-w-5xl mx-auto rounded-3xl px-4 py-6 md:px-8 md:py-10">
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(95%_120%_at_50%_30%,rgba(34,25,19,0.45)_0%,rgba(24,18,14,0.25)_45%,rgba(24,18,14,0)_100%)]" />
                    <span className="relative text-[13px] md:text-[14px] tracking-[0.8em] uppercase font-black text-[#F0C892] drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                        Exclusive Masterclass
                    </span>

                    <h2 className="relative mt-8 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-[#F7E8D2] leading-[0.9] uppercase drop-shadow-[0_5px_16px_rgba(0,0,0,0.42)]">
                        <span className="italic font-serif text-[#F2B47E]">High-Performance</span> Minds
                    </h2>

                    <p className="relative mt-8 text-xl md:text-2xl text-[#F4E7D3] max-w-2xl mx-auto font-serif italic font-semibold leading-relaxed tracking-[-0.01em] drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]">
                        Beyond technique lies the mindset behind iconic results.
                        Two world-class mentors revealed exclusively for the Dubai championship week to elevate your peak performance.
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
                    <ConceptItem text="High-Stakes Focus" color="#A85E36" />
                    <ConceptItem text="Global Authority" color="#CBA785" />
                    <ConceptItem text="Mindset Architecture" color="#6B4F3B" />
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
                                fill="rgba(24,18,14,0.8)"
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
                <div className="h-full w-full bg-[linear-gradient(160deg,#2A221D_0%,#231C18_58%,#1A1512_100%)] backdrop-blur-2xl rounded-[2.5rem] border border-[#8E6A47]/30 ring-1 ring-[#A85E36]/20 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.65)] overflow-hidden flex flex-col items-center justify-center">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_48%,rgba(168,94,54,0.15)_100%)]" />
                    <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(rgba(255,230,190,0.22)_0.75px,transparent_1px)] bg-[size:3px_3px]" />

                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                        <div className="relative w-56 h-72 opacity-80 filter drop-shadow(0 20px 30px rgba(180,139,42,0.1))">
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-28 h-28 bg-[#EDE6D8] rounded-full ring-1 ring-[#C9A24A]/18 shadow-[inset_0_0_20px_rgba(201,162,74,0.25)]" />
                            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-56 h-56 bg-[#EDE6D8] rounded-t-[100px] ring-1 ring-[#C9A24A]/10 shadow-[inset_0_0_30px_rgba(201,162,74,0.15)]" />

                            <div className="absolute inset-0 flex items-center justify-center pt-8">
                                <span className="text-8xl font-serif text-transparent bg-clip-text bg-[linear-gradient(135deg,#C9A24A_0%,#F08A32_50%,#B48B2A_100%)] drop-shadow-[0_0_15px_rgba(240,138,50,0.4)] animate-pulse">
                                    ?
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-10 w-full px-8">
                        <div className="w-full py-4 rounded-2xl border border-[#A85E36]/25 bg-[#211A16]/68 backdrop-blur-md">
                            <p className="text-[11px] tracking-[0.5em] uppercase font-bold text-[#B48B2A]">
                                {label}
                            </p>
                            <p className="mt-1 text-[12px] text-[#D9C7AA]/85 font-medium">
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
            <span className="text-[12px] md:text-[13px] tracking-[0.4em] uppercase font-black text-[#C9B99B]/78 group-hover:text-[#F7F1E5] transition-colors">
                {text}
            </span>
        </div>
    );
}
