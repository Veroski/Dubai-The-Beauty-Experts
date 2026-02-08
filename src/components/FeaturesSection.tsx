"use client";

import React from "react";

interface FeaturesSectionProps {
    scrollY: number;
}

export function FeaturesSection({ scrollY }: FeaturesSectionProps) {
    // Paralax inverso suave
    const reverseParallaxOffset = scrollY * 0.25;

    /**
     * Máscara progresiva: 
     * Empieza totalmente transparente y llega a opacidad total al 40% del contenedor.
     */
    const maskStyle: React.CSSProperties = {
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 30%, black 70%)',
        maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 30%, black 70%)',
    };

    return (
        <section
            className="relative z-50 px-8 pb-40 bg-gradient-to-b from-[#E6D3A3] via-[#F6EEDB] to-[#FFFFFF] pointer-events-none"
            style={{
                transform: `translateY(-${reverseParallaxOffset}px)`,
                marginTop: "-40vh", // Solapamiento profundo para transición invisible
                paddingTop: "55vh",  // Espacio extra para que el contenido emerja de la arena
                ...maskStyle
            }}
        >
            <div className="max-w-6xl mx-auto text-center pointer-events-auto">
                <h2 className="text-5xl font-serif mb-16 italic text-deepPetrol tracking-tight">
                    A New Horizon
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="group h-80 rounded-3xl bg-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 p-10 backdrop-blur-md transition-transform duration-500 hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 bg-gradient-to-tr from-[#E6D3A3] to-[#B89B5E] rounded-2xl mb-6 rotate-3 group-hover:rotate-12 transition-transform" />
                            <div className="space-y-4">
                                <div className="h-4 w-2/3 bg-deepPetrol/10 rounded-full" />
                                <div className="h-3 w-full bg-deepPetrol/5 rounded-full" />
                                <div className="h-3 w-5/6 bg-deepPetrol/5 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}