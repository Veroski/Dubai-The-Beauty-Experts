"use client";

import React, { useEffect, useMemo, useState } from "react";
import SimpleParallax from "simple-parallax-js";

import HeroCTA from "./HeroCTA";

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const x = (clientX / innerWidth - 0.5) * 2;
            const y = (clientY / innerHeight - 0.5) * 2;
            setMousePos({ x, y });
        };

        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // TEXTO: más movimiento (queda “más lejos”)
    const text3DStyle: React.CSSProperties = isMobile ? {} : {
        transform: `
      translate3d(${mousePos.x * 25}px, ${mousePos.y * 25 + scrollY * -0.4}px, 90px)
      rotateX(${mousePos.y * -5}deg)
      rotateY(${mousePos.x * 5}deg)
    `,
        transition: "transform 0.15s ease-out",
        willChange: "transform",
    };

    // CTA: más cerca (más Z), pero se mueve MENOS con el ratón
    const cta3DStyle: React.CSSProperties = isMobile ? {} : {
        transform: `
      translate3d(${mousePos.x * 10}px, ${mousePos.y * 10 + scrollY * -0.18}px, 180px)
      rotateX(${mousePos.y * -1.5}deg)
      rotateY(${mousePos.x * 1.5}deg)
    `,
        transition: "transform 0.18s ease-out",
        willChange: "transform",
    };

    const edgeBlurMask = useMemo(() => {
        const mask = `
      radial-gradient(120% 120% at 50% 45%,
        rgba(0,0,0,0) 0%,
        rgba(0,0,0,0) 85%,
        rgba(0,0,0,1) 100%
      ),
      linear-gradient(to top,
        rgba(0,0,0,1) 0%,
        rgba(0,0,0,0) 90%
      )
    `;
        return {
            WebkitMaskImage: mask,
            maskImage: mask,
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
        } as React.CSSProperties;
    }, []);

    return (
        <main id="hero" className="relative min-h-screen w-full bg-[#22282C]">
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden [perspective:1200px] z-10">
                {/* Fondo cielo */}
                <div
                    className="absolute inset-0 z-0 opacity-95"
                    style={{ background: "linear-gradient(180deg, #3B4B59 0%, #22282C 100%)" }}
                />

                {/* Parallax Image (Desktop only) */}
                <div
                    className="hidden md:block absolute inset-0 z-10 pointer-events-none will-change-transform"
                    style={{
                        transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 8}px, 0)`,
                    }}
                >
                    <SimpleParallax delay={0.3} orientation="up" scale={1.15} overflow>
                        <div className="relative w-full h-[120vh]">
                            <div
                                className="absolute inset-0"
                                style={{
                                    ...edgeBlurMask,
                                    filter: "blur(12px)",
                                    transform: "scale(1.05)",
                                }}
                            >
                                <img src="/dubai-skyline-grey.jpg" alt="" className="w-full h-full object-cover" />
                            </div>

                            <img
                                src="/dubai-skyline-grey.jpg"
                                alt="Dubai Skyline"
                                className="relative z-10 w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 z-20 bg-[#22282C]/55 mix-blend-multiply" />
                            <div className="absolute inset-x-0 bottom-0 z-30 h-[45%] bg-gradient-to-t from-[#22282C] via-[#22282C]/45 to-transparent" />
                        </div>
                    </SimpleParallax>
                </div>

                {/* Plain Image (Mobile only) */}
                <div className="md:hidden absolute inset-0 z-10">
                    <img src="/dubai-skyline-grey.jpg" alt="Dubai Skyline" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 z-20 bg-[#22282C]/60" />
                    <div className="absolute inset-x-0 bottom-0 z-30 h-[45%] bg-gradient-to-t from-[#22282C] via-[#22282C]/60 to-transparent" />
                </div>

                {/* Spotlight */}
                <div
                    className="absolute inset-0 z-30 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(420px 260px at 50% 56%, rgba(255,255,255,0.18), rgba(255,255,255,0.06) 45%, rgba(255,255,255,0) 70%)",
                    }}
                />

                {/* Contenedor central 3D */}
                <div className="relative z-40 text-center px-6 pt-24 md:pt-0 max-w-7xl mx-auto [transform-style:preserve-3d]">
                    {/* TEXTO (más lejos) */}
                    <div style={text3DStyle} className="[transform-style:preserve-3d]">
                        {/* Event Name - HUGE and PROMINENT */}
                        <div className="mb-6 md:mb-8">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,#F6FAFF_0%,#DCE5F0_32%,#AEBBCB_60%,#F2F7FF_100%)] drop-shadow-[0_12px_30px_rgba(0,0,0,0.58)] leading-[0.9] uppercase">
                                THE BEAUTY EXPERTS
                            </h1>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(180deg,#FFFFFF_0%,#E7EEF8_35%,#B7C4D4_62%,#F4F8FF_100%)] drop-shadow-[0_12px_30px_rgba(0,0,0,0.52)] leading-[0.9] uppercase mt-2">
                                DUBAI
                            </h1>
                        </div>

                        {/* Subtitle - Official naming */}
                        <p className="text-lg md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-[linear-gradient(180deg,#EEF4FC_0%,#CAD6E5_55%,#9FAFC2_100%)] uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold drop-shadow-[0_8px_18px_rgba(0,0,0,0.52)] mb-4">
                            International Congress &amp; Championship PMU | SMP
                        </p>

                        <p className="text-sm md:text-base text-[#EDF3FB]/92 tracking-[0.2em] font-medium drop-shadow-md max-w-3xl mx-auto">
                            <span className="md:bg-[#7A858E]/32 md:px-4 md:py-2 rounded-sm leading-relaxed [box-decoration-break:clone] [-webkit-box-decoration-break:clone] border-b-2 border-[#B8C6D8]/75 md:border-none">
                            A PLACE TO WITNES GREATNESS - A PLACE TO BECOME IT
                            </span>
                        </p>
                    </div>

                    {/* CTA (más cerca, menos movimiento) */}
                    <div className="mt-12 md:mt-12 flex justify-center" style={cta3DStyle}>
                        <HeroCTA />
                    </div>
                </div>

                {/* Indicador scroll */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4 pointer-events-none">
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white via-white/20 to-transparent animate-pulse" />
                </div>
            </section>


        </main>
    );
}
