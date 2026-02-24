"use client";

import React from "react";

export function ParamedicalPMUSection() {
    return (
        <section id="paramedical" className="relative w-full overflow-hidden bg-[#141C24] text-[#E9E1D4] py-24 md:py-32">

            {/* --- BACKGROUND LAYERS (Elegant Deep Blue & Gold) --- */}
            <div className="absolute inset-0 pointer-events-none select-none">

                {/* 1. Base: Deep Blue Gradient (Original Palette) */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#0F161C_0%,#1B2A36_50%,#101820_100%)]" />

                {/* 2. Subtle Texture (Noise instead of lines) */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMC41IiByZXN1bHQ9ImIiLz48ZmVDb2xvck1hdHJpeCBpbj0iYiIgdHlwZT0ibWF0cml4IiB2YWxHVZz0iMSAwIDAgMCAwIDAgMSAwIDAgMCAwIDAgMSAwIDAgMCAwIDAgMSAwIiByZXN1bHQ9ImMiLz48L2ZpbHRlcj48cmVjdCB3aWRHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZmZmIiBmaWx0ZXI9InVybCgjbnUpIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')]" />

                {/* 3. Elegant Lighting (Warm Gold Glow & Cool Blue) */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(201,185,155,0.08),transparent_70%)] blur-[100px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(94,115,133,0.1),transparent_70%)] blur-[100px]" />

                {/* 4. Vignette for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(transparent_0%,rgba(0,0,0,0.6)_100%)]" />
            </div>

            {/* --- CONTENT --- */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
                    <div className="text-center md:text-left space-y-2 relative">
                        {/* Gold Accent Bar */}
                        <div className="hidden md:block absolute -left-6 top-2 w-1 h-20 bg-gradient-to-b from-[#C9B99B] to-transparent opacity-60" />

                        <h3 className="uppercase font-montserrat font-medium tracking-widest text-[#C9B99B] text-[10px] md:text-xs mb-4">
                            High Precision Forum
                        </h3>
                        <h2 className="text-6xl md:text-8xl font-bebas text-[#F9F7F2] tracking-widest leading-[0.9] drop-shadow-2xl uppercase">
                            THE CLINICAL <br />
                            {/* Outline Text */}
                            <span
                                className="text-transparent"
                                style={{ WebkitTextStroke: "1.5px #F9F7F2" }}
                            >
                                LOUNGE
                            </span>
                        </h2>
                    </div>
                    <GoldBoxLogo />
                </div>

                {/* MAIN GRID LAYOUT (Structure Maintained) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT COLUMN: Concept (Glass Panel - Blue/Gold edition) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">

                        <div className="h-full bg-[#1B2A36]/50 backdrop-blur-xl border-t border-l border-[#C9B99B]/30 border-b border-r border-black/30 p-10 rounded-2xl relative shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] group">

                            {/* Gold reflection effect on top edge */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9B99B]/50 to-transparent opacity-70" />

                            <div className="space-y-8">
                                <p className="font-montserrat text-[#F0F4F8] text-[10px] md:text-xs tracking-widest uppercase font-medium leading-relaxed">
                                    <strong className="text-[#C9B99B]">THE CLINICAL LOUNGE</strong> IS AN EXCLUSIVE SPACE FOR EXPERTS. WHERE CLINICAL EXCELLENCE MEETS PARAMEDICAL MICROPIGMENTATION.
                                </p>

                                {/* Subtle separator */}
                                <div className="flex items-center gap-4 opacity-60">
                                    <div className="h-px flex-1 bg-gradient-to-r from-[#C9B99B]/50 to-transparent" />
                                    <span className="text-[10px] uppercase tracking-widest font-montserrat text-[#C9B99B]">Exclusive Environment</span>
                                </div>

                                <p className="font-montserrat text-[#F9F7F2]/80 text-[10px] md:text-xs tracking-widest uppercase font-medium leading-relaxed">
                                    NOT A DEMONSTRATION. NOT A LECTURE. A CURATED EXPERT DISCUSSION DESIGNED FOR DEPTH, CREDIBILITY, AND PRECISION.
                                </p>
                            </div>

                            <div className="mt-10 pt-6 border-t border-[#C9B99B]/20 flex flex-col md:flex-row md:items-center gap-4">
                                <span className="font-bebas text-[#E9E1D4] text-2xl tracking-widest uppercase opacity-90">VITAL METRICS:</span>
                                <div className="flex flex-wrap gap-4 text-[10px] font-montserrat text-[#C9B99B] uppercase tracking-widest font-medium">
                                    <span>RECOGNITION</span>
                                    <span className="text-[#5E7385]">•</span>
                                    <span>Visibility</span>
                                    <span className="text-[#5E7385]">•</span>
                                    <span>Respect</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Agenda (Dark Blue Panel) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="h-full bg-[#121A21] border border-[#1B2A36] p-8 rounded-2xl relative overflow-hidden shadow-lg">

                            <h4 className="font-bebas text-4xl text-[#F9F7F2] tracking-widest uppercase mb-8 flex items-center gap-4">
                                {/* Precision Surgical Dot */}
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9B99B] opacity-40"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C9B99B]"></span>
                                </span>
                                CLINICAL AGENDA
                            </h4>

                            <ul className="space-y-6">
                                {[
                                    "Scar Camouflage",
                                    "Areola Restoration",
                                    "Post-Surgical Pigmentation",
                                    "Clinical Cases & Protocols",
                                    "Ethics & Excellence"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center group">
                                        {/* Precision Surgical Diamond */}
                                        <svg className="w-3 h-3 text-[#C9B99B] mr-4 shrink-0 transition-transform group-hover:scale-125 duration-300" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L22 12L12 22L2 12L12 2Z" />
                                        </svg>
                                        <span className="font-montserrat text-[#E9E1D4]/90 font-medium text-[10px] md:text-xs tracking-widest uppercase group-hover:text-white transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 p-5 rounded-lg bg-[#18232C] border-l-[3px] border-[#C9B99B]/70 relative">
                                {/* Subtle gold glow behind the quote box */}
                                <p className="font-montserrat text-[#F9F7F2]/80 text-[10px] md:text-xs uppercase tracking-widest font-medium leading-relaxed">
                                    "HEALING IS PRECISION, KNOWLEDGE AND <strong className="text-[#C9B99B] font-bold">RESPONSIBILITY</strong>."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FOOTER: Investment (Blue & Gold Bar) */}
                <div className="mt-10 bg-gradient-to-r from-[#1B2A36] via-[#C9B99B]/30 to-[#1B2A36] p-[1px] rounded-lg shadow-[0_10px_30px_-5px_rgba(0,0,0,0.5)]">
                    <div className="bg-[#141C24] rounded-lg p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
                        {/* Subtle noise overlay in footer */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUdyYXBoaWMiIHN0ZERldmlhdGlvbj0iMC41IiByZXN1bHQ9ImIiLz48ZmVDb2xvck1hdHJpeCBpbj0iYiIgdHlwZT0ibWF0cml4IiB2YWxHVZz0iMSAwIDAgMCAwIDAgMSAwIDAgMCAwIDAgMSAwIDAgMCAwIDAgMSAwIiByZXN1bHQ9ImMiLz48L2ZpbHRlcj48cmVjdCB3aWRHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZmZmIiBmaWx0ZXI9InVybCgjbnUpIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+')]" />

                        <div className="text-center lg:text-left relative z-10">
                            <p className="text-[#C9B99B] uppercase tracking-[0.2em] text-[10px] font-montserrat font-medium mb-2">
                                ACCESS GRANT
                            </p>
                            <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                                <span className="font-bebas text-5xl text-[#F9F7F2]">€1,500</span>
                                <span className="font-montserrat text-[#F9F7F2]/50 text-xs uppercase">+ VAT</span>
                            </div>
                        </div>

                        <div className="hidden lg:block h-12 w-px bg-[#5E7385]/30" />

                        <div className="max-w-xl text-center lg:text-left relative z-10">
                            <p className="text-[#F9F7F2]/80 text-[10px] md:text-xs tracking-widest uppercase font-medium font-montserrat leading-relaxed">
                                INCLUDES EXCLUSIVE CLINICAL LOUNGE ACCESS, RECOGNITION PLAQUE, AND FULL CONGRESS ENTRY.
                            </p>
                        </div>

                        <div className="relative z-10">
                            <a
                                href="https://link.fastpaydirect.com/payment-link/699e2d87e0aef97d62a161c6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 bg-[#C9B99B] hover:bg-[#F9F7F2] text-[#141C24] font-montserrat font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs transition-colors duration-300"
                            >
                                SECURE ACCESS
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

function GoldBoxLogo() {
    return (
        <div className="relative shrink-0 w-24 h-24 flex flex-col items-center justify-center border border-[#C9B99B] bg-[#141C24] shadow-[0_0_20px_rgba(201,185,155,0.1)]">
            <div className="absolute inset-1 border border-[#C9B99B]/30" />
            <span className="uppercase font-montserrat font-bold tracking-widest text-[#C9B99B] text-[8px] leading-loose text-center">
                The<br />Beauty<br />Experts
            </span>
        </div>
    );
}