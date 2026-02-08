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
                background: "linear-gradient(180deg, #070607 0%, #120D07 40%, #241D12 80%, #3D311B 100%)"
            }}
        >
            {/* Fondo decorativo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,162,74,0.03),transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-32 items-start">

                    {/* COLUMNA IZQUIERDA: Textos */}
                    <div className="flex flex-col">
                        <header className="mb-8">
                            <div className="text-[11px] tracking-[0.8em] uppercase font-black text-[#C9A24A] opacity-80 mb-6">
                                EVENT STRUCTURE
                            </div>

                            <h2 className="text-4xl md:text-5xl font-light leading-[1.05] tracking-tight text-white mb-6">
                                Three Days of Elite <br />
                                <span className="text-white/70 italic font-serif">
                                    Micropigmentation in Dubai
                                </span>
                            </h2>

                            {/* Bloque Venue Interactivo */}
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/venue block pt-6 border-t border-white/10 cursor-pointer transition-all duration-300 hover:border-[#C9A24A]/40"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="w-6 h-[1px] bg-[#C9A24A] transition-all duration-500 group-hover/venue:w-12"></span>
                                    <span className="text-[9px] tracking-[0.4em] text-[#C9A24A] uppercase font-bold italic">The Venue</span>
                                </div>
                                <h4 className="text-xl text-white font-light uppercase tracking-wider group-hover/venue:text-[#C9A24A] transition-colors flex items-center gap-2">
                                    Arjaan by Rotana
                                    <svg className="w-3 h-3 opacity-0 -translate-x-2 group-hover/venue:opacity-100 group-hover/venue:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </h4>
                                <p className="mt-1 text-white/40 group-hover/venue:text-white/60 text-sm tracking-wide leading-relaxed transition-colors">
                                    Al Sufouh Complex, Dubai Media City.
                                </p>
                            </a>
                        </header>

                        {/* ITINERARIO */}
                        <div className="space-y-4">
                            <ContextBlock
                                day="15 OCT"
                                title="International Championship & Private Gala"
                                description="Top artists compete on stage. Precision, artistry and recognition at the highest level."
                            />
                            <ContextBlock
                                day="16 OCT"
                                title="Main Congress & Live Demonstrations"
                                description="Advanced techniques, live demos and real strategies from leading micropigmentation specialists."
                            />
                            <ContextBlock
                                day="17 OCT"
                                title="Business, Mindset & Grand Awards"
                                description="Positioning, authority and growth. Close the experience with leadership sessions and final awards."
                            />
                        </div>
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
                                className="absolute -top-4 -right-2 z-20 bg-[#C9A24A] text-black px-4 py-3 rounded-sm shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 active:scale-95 cursor-pointer flex flex-col items-start"
                            >
                                <p className="text-[8px] font-black tracking-widest uppercase mb-0.5 opacity-70">Location</p>
                                <p className="text-[10px] font-serif italic whitespace-nowrap">Arjaan by Rotana, Dubai</p>
                            </a>

                            <div className="absolute inset-10 bg-black/80 blur-[60px] translate-y-20 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Contenedor del TILT */}
                            <div className="relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu 
                            group-hover:[transform:rotateX(8deg)_rotateY(-8deg)_translateY(-20px)_scale(1.01)]
                            hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.9)]">

                                <img
                                    src="/estructura.webp"
                                    alt="Program architecture Dubai"
                                    className="w-full h-auto block object-cover rounded-sm grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
        <article className="group relative p-8 rounded-sm bg-white/[0.01] border-l border-white/5 hover:border-[#C9A24A] transition-all duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-[#C9A24A]/5 to-transparent" />
            <p className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#C9A24A] mb-2">{day}</p>
            <h3 className="text-2xl font-light text-white/90 group-hover:text-white transition-colors mb-2 italic">{title}</h3>
            <p className="text-sm leading-relaxed text-white/30 group-hover:text-white/60 transition-colors max-w-sm">{description}</p>
        </article>
    );
}