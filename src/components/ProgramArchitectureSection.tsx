"use client";

import React, { useEffect, useState, useRef } from "react";
import { SectionCTA } from "./SectionCTA";

/**
 * ProgramArchitectureSection - Versión Ultra-Compacta con Links
 * Se ha eliminado la separación excesiva y se ha añadido redirección a Google Maps.
 */
export function ProgramArchitectureSection() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    // Enlace oficial de Google Maps para Arjaan by Rotana Dubai Media City
    const googleMapsUrl = "https://maps.app.goo.gl/yPU1irdnEbFzqfth9";

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            setScrollProgress(Math.max(0, Math.min(1, progress)));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const parallaxY = (scrollProgress - 0.5) * -250;

    return (
        <section
            id="program"
            ref={sectionRef}
            className="relative scroll-mt-28 md:scroll-mt-32 overflow-hidden py-24 md:py-40 w-full"
            style={{
                background: "linear-gradient(180deg, #3D322B 0%, #312721 46%, #231C18 100%)"
            }}
        >
            {/* Fondo decorativo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_14%,rgba(122,92,68,0.22),transparent_58%),radial-gradient(1000px_circle_at_82%_88%,rgba(168,94,54,0.18),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,14,10,0.18),rgba(12,9,7,0.56))]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-32 items-start">

                    {/* COLUMNA IZQUIERDA: Textos */}
                    <div className="flex flex-col">
                        <header className="mb-8">
                            <div className="text-[11px] tracking-[0.8em] uppercase font-black text-[#A85E36] opacity-90 mb-6">
                                EVENT STRUCTURE
                            </div>

                            <h2 className="text-4xl md:text-5xl font-light leading-[1.05] tracking-tight text-[#CBA785] mb-6">
                                Three Days of Elite <br />
                                <span className="text-[#CBA785]/75 italic font-serif">
                                    Congress & Championship in Dubai
                                </span>
                            </h2>

                            {/* Bloque Venue Interactivo */}
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/venue block pt-6 border-t border-[#6B4F3B]/35 cursor-pointer transition-all duration-300 hover:border-[#A85E36]/50"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-6 h-[1px] bg-[#A85E36] transition-all duration-500 group-hover/venue:w-12"></span>
                                    <span className="text-[9px] tracking-[0.4em] text-[#A85E36] uppercase font-bold italic">The Venue</span>
                                </div>
                                <h4 className="text-xl text-[#CBA785] font-light uppercase tracking-wider group-hover/venue:text-[#A85E36] transition-colors flex items-center gap-2">
                                    Arjaan by Rotana
                                    <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover/venue:opacity-100 group-hover/venue:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </h4>
                                <p className="mt-1 text-[#CBA785]/50 group-hover/venue:text-[#CBA785]/80 text-sm tracking-wide leading-relaxed transition-colors">
                                    Al Sufouh Complex, Dubai Media City.
                                </p>
                            </a>
                        </header>

                        {/* ITINERARIO */}
                        <div className="space-y-4">
                            <ContextBlock
                                day="15 OCT"
                                title="International Championship & Opening Evening"
                                description="Elite artists compete live. Precision, artistry, and recognition at the highest level. Private opening for participants."
                            />
                            <ContextBlock
                                day="16 OCT"
                                title="Full Congress Day 1: Mastery & Global Strategy"
                                description="Uninterrupted day of advanced masterclasses, live technical demonstrations, and high-impact business strategies to scale your professional career."
                            />
                            <ContextBlock
                                day="17 OCT"
                                title="Full Congress Day 2: Authority & Gala Dinner"
                                description="Final masterclasses focused on professional positioning and leadership. The experience culminates with the prestigious Gala Dinner and International Awards Ceremony."
                            />
                        </div>

                        {/* Pricing Reminder — Clean Table Structure */}
                        
                    </div>

                    {/* COLUMNA DERECHA: Imagen con Link en el Badge */}
                    <div className="relative flex justify-center md:justify-end min-h-[500px]">
                        <div
                            className="group relative max-w-md lg:max-w-lg w-full transition-transform duration-200 ease-out will-change-transform"
                            style={{ transform: `translateY(${parallaxY}px)` }}
                        >
                            {/* Badge Flotante con Link */}
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute -top-4 -right-2 z-20 bg-[#A85E36] text-[#F3E3D2] px-4 py-3 rounded-sm shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 active:scale-95 cursor-pointer flex flex-col items-start"
                            >
                                <p className="text-[8px] font-black tracking-widest uppercase mb-0.5 opacity-70">Location</p>
                                <p className="text-[10px] font-serif italic whitespace-nowrap">Arjaan by Rotana, Dubai</p>
                            </a>

                            <div className="absolute inset-10 bg-black/80 blur-[60px] translate-y-20 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Solo parallax por scroll, sin tilt 3D en hover */}
                            <div className="relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu">

                                <img
                                    src="/estructura-dubai.png"
                                    alt="Program architecture Dubai"
                                    className="w-full h-auto block object-cover rounded-sm transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <SectionCTA />
            </div>
        </section>
    );
}

function ContextBlock({ day, title, description }) {
    return (
        <article className="group relative p-8 rounded-sm bg-white/[0.01] border-l border-[#6B4F3B]/40 hover:border-[#A85E36] transition-all duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-[#A85E36]/10 to-transparent" />
            <p className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#A85E36] mb-2">{day}</p>
            <h3 className="text-2xl font-light text-[#CBA785]/90 group-hover:text-[#CBA785] transition-colors mb-2 italic">{title}</h3>
            <p className="text-sm leading-relaxed text-[#CBA785]/45 group-hover:text-[#CBA785]/72 transition-colors max-w-sm">{description}</p>
        </article>
    );
}

function PricingRow({ label, detail }: { label: string; detail: string }) {
    return (
        <div className="py-1 group border-b border-white/[0.02] last:border-0">
            <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#CBA785]/55 group-hover:text-[#CBA785]/85 transition-colors uppercase tracking-tight">{label}</span>
                <span className="text-[10px] text-[#CBA785]/30 group-hover:text-[#CBA785]/45 transition-colors italic">{detail}</span>
            </div>
        </div>
    );
}
