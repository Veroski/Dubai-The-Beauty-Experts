"use client";

import React, { useEffect, useState, useRef } from "react";

/**
 * ProgramArchitectureSection
 * Con Parallax exagerado y efecto Tilt 3D profundo.
 */
export function ProgramArchitectureSection() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Cálculo de progreso normalizado (0 a 1)
            const sectionHeight = rect.height;
            const progress = (windowHeight - rect.top) / (windowHeight + sectionHeight);

            setScrollProgress(Math.max(0, Math.min(1, progress)));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /**
     * PARALLAX EXAGERADO
     * Multiplicador aumentado a -250 para un recorrido visual largo.
     * La imagen subirá notablemente mientras bajas el scroll.
     */
    const parallaxY = (scrollProgress - 0.5) * -250;

    return (
        <section
            id="program"
            ref={sectionRef}
            className="relative scroll-mt-28 md:scroll-mt-32 overflow-hidden py-24 md:py-56 w-full"
            style={{
                background: "linear-gradient(180deg, #070607 0%, #120D07 40%, #241D12 80%, #3D311B 100%)"
            }}
        >
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(201,162,74,0.03),transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                <header className="mb-24 md:mb-36 max-w-3xl">
                    <div className="text-[11px] tracking-[0.8em] uppercase font-black text-[#C9A24A] opacity-80">
                        EVENT STRUCTURE
                    </div>

                    {/* TÍTULO 40% MÁS PEQUEÑO */}
                    <h2 className="mt-8 text-4xl md:text-5xl font-light leading-[1.05] tracking-tight text-white">
                        Three Days of Elite <br />
                        <span className="text-white/70 italic font-serif">
                            Micropigmentation in Dubai
                        </span>
                    </h2>

                    <p className="mt-8 text-white/40 max-w-xl leading-relaxed">
                        The largest Spanish-speaking micropigmentation congress expands to Dubai.
                        Three days designed to elevate your technique, your positioning and your business.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-32 items-start">
                    {/* Bloques de Información */}
                    <div className="space-y-6 pt-12">
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

                    {/* Área de la Imagen con Parallax y Tilt */}
                    <div className="relative flex justify-center md:justify-end min-h-[500px]">
                        <div
                            className="group relative max-w-md lg:max-w-lg w-full transition-transform duration-200 ease-out will-change-transform"
                            style={{
                                transform: `translateY(${parallaxY}px)`,
                            }}
                        >
                            {/* Sombra proyectada dinámica */}
                            <div className="absolute inset-10 bg-black/80 blur-[60px] translate-y-20 rotate-3 opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Contenedor del TILT 3D */}
                            <div className="relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform-gpu 
                            group-hover:[transform:rotateX(12deg)_rotateY(-12deg)_translateY(-30px)_scale(1.02)]
                            hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">

                                {/* La Imagen sin marco */}
                                <img
                                    src="/estructura.webp"
                                    alt="Program architecture"
                                    className="w-full h-auto block object-cover rounded-sm grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                />

                                {/* Reflejo de luz al inclinar */}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Etiqueta flotante inferior */}
                            <div className="mt-16 text-[10px] tracking-[1em] uppercase text-[#C9A24A] text-center md:text-right font-bold opacity-40 group-hover:opacity-100 group-hover:translate-x-[-10px] transition-all duration-700">
                                Dubai · October 2026 · International Congress
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContextBlock({ day, title, description }) {
    return (
        <article className="group relative p-10 rounded-sm bg-white/[0.01] border-l-2 border-white/5 hover:border-[#C9A24A] transition-all duration-500">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-r from-[#C9A24A]/5 to-transparent" />

            <p className="text-[10px] tracking-[0.5em] uppercase font-bold text-[#C9A24A] mb-4">
                {day}
            </p>
            <h3 className="text-3xl font-light text-white/90 group-hover:text-white transition-colors mb-4 italic">
                {title}
            </h3>
            <p className="text-base leading-relaxed text-white/30 group-hover:text-white/60 transition-colors max-w-sm">
                {description}
            </p>
        </article>
    );
}