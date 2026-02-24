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
                background: "linear-gradient(180deg, #F9F7F2 0%, #E9E1D4 46%, #E9E1D4 100%)"
            }}
        >
            {/* Fondo decorativo y Textura Desértica */}
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="/fondo.png"
                    alt="Desert texture background"
                    className="w-full h-full object-cover opacity-60 mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
                />
                {/* Iluminación tipo sol del desierto */}
                <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_10%,rgba(249,247,242,0.4),transparent_60%),radial-gradient(1200px_circle_at_85%_90%,rgba(201,185,155,0.15),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(249,247,242,0.2),rgba(233,225,212,0.4))]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-32 items-start">

                    {/* COLUMNA IZQUIERDA: Textos */}
                    <div className="flex flex-col">
                        <header className="mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-8 h-[2px] bg-[#C9B99B]"></span>
                                <div className="text-[12px] tracking-[0.4em] uppercase font-black text-[#111820]">
                                    EVENT STRUCTURE
                                </div>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas font-normal leading-[0.9] tracking-widest text-[#111820] mb-8 uppercase">
                                THREE DAYS OF ELITE <br />
                                <span
                                    className="text-transparent"
                                    style={{ WebkitTextStroke: "1.5px #111820" }}
                                >
                                    CONGRESS & CHAMPIONSHIP IN DUBAI
                                </span>
                            </h2>

                            {/* Bloque Venue Interactivo */}
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/venue block pt-6 border-t border-[#1C1714]/15 cursor-pointer transition-all duration-300 hover:border-[#B88645]/50"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-6 h-[1px] bg-[#B88645] transition-all duration-500 group-hover/venue:w-12 group-hover/venue:bg-[#966b35]"></span>
                                    <span className="text-[10px] tracking-[0.3em] text-[#B88645] uppercase font-bold italic group-hover/venue:text-[#966b35] transition-colors">The Venue</span>
                                </div>
                                <h4 className="text-2xl mt-4 font-bebas text-[#1C1714] uppercase tracking-widest group-hover/venue:text-[#382b23] transition-colors flex items-center gap-2">
                                    Arjaan by Rotana
                                    <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover/venue:opacity-100 group-hover/venue:translate-x-0 transition-all text-[#B88645]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </h4>
                                <p className="mt-2 text-[#4A3B32] group-hover/venue:text-[#1C1714] text-[11px] font-montserrat font-medium uppercase tracking-[0.1em] transition-colors leading-relaxed">
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
                            className="group relative w-full max-w-lg lg:max-w-none lg:w-[115%] xl:w-[125%] transition-transform duration-200 ease-out will-change-transform z-10"
                            style={{ transform: `translateY(${parallaxY}px)` }}
                        >
                            {/* Badge Flotante con Link */}
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute -top-6 -right-4 md:-top-8 md:-right-6 lg:-right-10 z-20 bg-[#111820] text-[#F9F7F2] border border-[#C9B99B]/40 px-5 py-3 rounded-sm shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 active:scale-95 cursor-pointer flex flex-col items-start hover:shadow-[#C9B99B]/20"
                            >
                                <p className="text-[9px] font-black tracking-widest uppercase mb-1 opacity-90 text-[#C9B99B]">Location</p>
                                <p className="text-[11px] font-bebas font-normal tracking-widest uppercase italic whitespace-nowrap">Arjaan by Rotana</p>
                            </a>

                            <div className="absolute inset-10 bg-[#C9B99B] blur-[80px] translate-y-20 opacity-30 group-hover:opacity-50 transition-opacity duration-700" />

                            {/* Contenedor del panel con fondo desértico premium y bordes */}
                            <div
                                className="relative overflow-hidden rounded-xl bg-[#141C24] border border-[#C9B99B]/40 shadow-[0_20px_50px_rgba(17,24,32,0.6)] p-4 md:p-6 lg:p-8 group/card"
                                style={{
                                    backgroundImage: `url('/texture.png')`,
                                    backgroundBlendMode: 'overlay',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                {/* Overlay adicional para oscurecer/uniformizar la textura desértica del fondo y mantener alto contraste */}
                                <div className="absolute inset-0 bg-[#141C24]/80 pointer-events-none" />

                                <img
                                    src="/structure.png"
                                    alt="Program architecture Dubai"
                                    className="relative z-10 w-full h-auto block object-contain scale-[1.02] 
                                    transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                                    drop-shadow-2xl md:ml-2
                                    group-hover/card:scale-[1.08] group-hover/card:-translate-y-2 group-hover/card:drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
                                    style={{
                                        transformOrigin: "center top",
                                    }}
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
        <article className="group relative p-8 rounded-sm bg-white/30 backdrop-blur-sm border-l-2 border-[#111820]/10 hover:border-[#C9B99B] transition-all duration-500 shadow-[0_4px_20px_-10px_rgba(17,24,32,0.05)] hover:shadow-[0_10px_30px_-10px_rgba(201,185,155,0.15)] hover:-translate-y-1">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-[#C9B99B]/5 to-transparent" />
            <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#C9B99B] mb-2">{day}</p>
            <h3 className="text-2xl font-bebas font-normal tracking-widest text-[#111820] group-hover:text-[#111820] transition-colors mb-3 uppercase italic leading-tight">{title}</h3>
            <p className="text-[10px] md:text-xs leading-relaxed text-[#5E7385] group-hover:text-[#111820] font-montserrat font-medium uppercase tracking-[0.1em] transition-colors max-w-sm">{description}</p>
        </article>
    );
}

function PricingRow({ label, detail }: { label: string; detail: string }) {
    return (
        <div className="py-1 group border-b border-white/[0.02] last:border-0">
            <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#C9B99B]/55 group-hover:text-[#C9B99B]/85 transition-colors uppercase tracking-tight">{label}</span>
                <span className="text-[10px] text-[#C9B99B]/30 group-hover:text-[#C9B99B]/45 transition-colors italic">{detail}</span>
            </div>
        </div>
    );
}
