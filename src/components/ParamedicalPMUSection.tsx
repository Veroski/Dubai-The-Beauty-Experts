"use client";

import React from "react";
import { Check } from "lucide-react";

export function ParamedicalPMUSection() {
    return (
        <section id="paramedical" className="relative overflow-hidden py-24 md:py-36 bg-[#4A3724] text-[#F0D7B4]">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#9A6C3D_0%,#A97844_26%,#BC8750_58%,#E0AE72_100%)]" />
                <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(rgba(255,233,194,0.28)_0.85px,transparent_1px)] bg-[size:3px_3px]" />
                <div className="absolute inset-0 opacity-[0.16] bg-[repeating-linear-gradient(168deg,rgba(255,228,182,0.2)_0px,rgba(255,228,182,0.2)_2px,transparent_13px,transparent_30px)]" />
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_16%_12%,rgba(122,92,68,0.26),transparent_60%),radial-gradient(1000px_circle_at_84%_82%,rgba(168,94,54,0.20),transparent_62%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0)_38%,rgba(255,255,255,0.06)_72%,rgba(255,255,255,0)_100%)]" />
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(255,255,255,0.85)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.85)_1px,transparent_1px)] bg-[size:82px_82px]" />
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-[radial-gradient(50%_100%_at_50%_100%,rgba(255,230,182,0.38),transparent)] blur-2xl" />
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-[radial-gradient(50%_100%_at_50%_0%,rgba(168,94,54,0.22),transparent)] blur-2xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
                <header className="relative text-center max-w-4xl mx-auto rounded-3xl px-4 py-5 md:px-8 md:py-9">
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(95%_120%_at_50%_30%,rgba(35,26,20,0.42)_0%,rgba(28,20,15,0.2)_45%,rgba(28,20,15,0)_100%)]" />
                    <p className="relative text-[11px] tracking-[0.7em] uppercase font-black text-[#FFE2B5] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">Exclusive Clinical Format</p>
                    <h2 className="relative mt-6 text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.9] text-[#FFF0DA] drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
                        The Clinical Lounge
                    </h2>
                    <div className="mx-auto mt-6 h-px w-28 bg-gradient-to-r from-transparent via-[#6B4F3B] to-transparent" />
                    <p className="relative mt-8 text-xl md:text-2xl text-[#F2E2CB] leading-relaxed drop-shadow-[0_3px_10px_rgba(0,0,0,0.28)] font-[var(--font-lexend)] font-medium tracking-[-0.01em]">
                        Where clinical excellence meets paramedical micropigmentation.
                    </p>
                </header>

                <LoungePanel className="mt-16 text-center">
                    <p className="text-[11px] tracking-[0.35em] uppercase font-black text-[#E2B37B]">The Concept</p>
                    <h3 className="mt-5 text-3xl md:text-4xl font-black uppercase tracking-tight text-[#FFF0DA]">An Exclusive High-Level Forum</h3>
                    <p className="mt-6 text-lg md:text-xl leading-relaxed text-[#E9D1AE]/92 max-w-3xl mx-auto">
                        A premium clinical roundtable for paramedical experts.
                    </p>
                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                        <StatPill text="2-Hour Expert Forum" />
                        <StatPill text="6 Selected Specialists" />
                        <StatPill text="Live Moderated Exchange" />
                    </div>
                    <p className="mt-6 text-sm md:text-base uppercase tracking-[0.15em] font-black text-[#F1C58E]">
                        Not a demo. Not a solo lecture.
                    </p>
                </LoungePanel>

                <div className="mt-8 grid lg:grid-cols-2 gap-8">
                    <LoungePanel>
                        <p className="text-[11px] tracking-[0.32em] uppercase font-black text-[#E2B37B]">Structure & Topics</p>
                        <h4 className="mt-4 text-2xl font-black uppercase tracking-tight text-[#FFF0DA]">Format</h4>
                        <ul className="mt-5 space-y-2.5">
                            <ListLine text="2-hour moderated discussion" />
                            <ListLine text="6 selected experts only" />
                            <ListLine text="Live professional exchange" />
                            <ListLine text="Audience interaction segment" />
                            <ListLine text="Premium lounge stage setup" />
                        </ul>
                    </LoungePanel>

                    <LoungePanel>
                        <p className="text-[11px] tracking-[0.32em] uppercase font-black text-[#E2B37B]">Structure & Topics</p>
                        <h4 className="mt-4 text-2xl font-black uppercase tracking-tight text-[#FFF0DA]">Key Topics</h4>
                        <ul className="mt-5 grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
                            <ListLine text="Scar camouflage" />
                            <ListLine text="Areola restoration" />
                            <ListLine text="Post-surgical pigmentation" />
                            <ListLine text="Complex clinical cases" />
                            <ListLine text="Advanced safety & protocols" />
                            <ListLine text="Ethics and international standards" />
                        </ul>
                    </LoungePanel>
                </div>

                <LoungePanel className="mt-8">
                    <p className="text-[11px] tracking-[0.35em] uppercase font-black text-[#E2B37B] text-center">Strategic Value For Participants</p>
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                        <ValueItem text="Positioning yourself as a clinical authority" />
                        <ValueItem text="Gaining visibility within an international audience" />
                        <ValueItem text="Being associated with a high-level professional platform" />
                        <ValueItem text="Strengthening your personal and professional brand" />
                    </div>
                    <p className="mt-6 text-center text-sm md:text-base uppercase tracking-[0.14em] font-black text-[#F1C58E]">
                        This forum is designed not only to educate, but to elevate.
                    </p>
                </LoungePanel>

                <div className="relative mt-12 rounded-3xl border border-[#6B4F3B]/55 bg-[linear-gradient(135deg,#2B231E_0%,#332A23_45%,#231C18_100%)] px-8 py-10 text-center shadow-[0_40px_110px_-55px_rgba(12,8,6,0.9)] overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_45%,rgba(168,94,54,0.14)_100%)]" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(50%_100%_at_50%_100%,rgba(122,92,68,0.2),transparent)]" />
                    <p className="text-[11px] tracking-[0.28em] uppercase font-black text-[#A85E36]">
                        Participation Investment
                    </p>
                    <p className="mt-5 text-4xl md:text-5xl font-black text-[#CBA785]">€1,500 + applicable taxes</p>
                    <p className="mt-3 text-[#CBA785]/72 uppercase tracking-[0.15em] text-xs md:text-sm">50% advance · non-refundable reservation</p>
                    <p className="mt-6 text-sm md:text-base leading-relaxed text-[#DDBD96]/85 max-w-4xl mx-auto">
                        Includes participation in the exclusive Clinical Lounge talk, social media promotion, recognition plaque/trophy,
                        and access to key congress days with coffee and meal breaks.
                    </p>
                </div>
            </div>
        </section>
    );
}

function LoungePanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <article className={`group relative rounded-2xl border border-[#8A643F]/45 bg-[linear-gradient(145deg,#3A2D22_0%,#30261E_100%)] p-7 md:p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#D08B4B]/70 hover:shadow-[0_28px_80px_-45px_rgba(34,21,12,0.75)] overflow-hidden ${className}`}>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_15%_10%,rgba(168,94,54,0.16),transparent_50%)]" />
            <div className="relative z-10">{children}</div>
        </article>
    );
}

function ListLine({ text }: { text: string }) {
    return (
        <li className="text-sm md:text-[15px] uppercase tracking-[0.06em] text-[#E8D0AE]/94 font-black">{text}</li>
    );
}

function ValueItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3 rounded-xl border border-[#8A643F]/42 bg-[#362A21]/74 px-4 py-3">
            <Check className="mt-0.5 text-[#F0C98F] shrink-0" size={16} />
            <p className="text-sm md:text-base text-[#E9D1AE]/90 leading-relaxed font-[var(--font-lexend)] font-medium">{text}</p>
        </div>
    );
}

function StatPill({ text }: { text: string }) {
    return (
        <span className="rounded-full border border-[#946A43]/62 bg-[#3A2C21]/72 px-4 py-2 text-[11px] md:text-xs uppercase tracking-[0.15em] font-black text-[#FFD7A2]">
            {text}
        </span>
    );
}
