"use client";

import React from "react";

interface HeroCTAProps {
    href?: string;
    label?: string;
    subtext?: string;
    className?: string;
}

export default function HeroCTA({
    href = "#tickets",
    label = "Get Tickets Now",
    subtext = "Limited availability for this session",
    className = "",
}: HeroCTAProps) {

    return (
        <div className={`group relative flex flex-col items-center gap-6 ${className}`}>
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(1.5%, -1.5%) scale(1.01); }
                    66% { transform: translate(-1%, 1.5%) scale(0.99); }
                }
                .liquid-animate {
                    animation: float 8s ease-in-out infinite;
                }
            `}</style>

            {/* Placa glass de fondo */}
            <div
                className="absolute -inset-x-12 -inset-y-10 md:-inset-x-20 md:-inset-y-12 rounded-[40px] pointer-events-none overflow-hidden"
                style={{
                    background:
                        "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                    boxShadow:
                        "0 20px 40px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.06)",
                }}
            />

            {/* BOTÓN */}
            <a
                href={href}
                aria-label={label}
                className={[
                    "relative inline-flex items-center justify-center",
                    "cursor-pointer overflow-hidden",
                    "h-16 md:h-20 px-12 md:px-16",
                    "rounded-[22px]",
                    "font-extrabold uppercase tracking-tighter text-lg md:text-xl",
                    "text-white whitespace-nowrap",
                    "transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    "hover:-translate-y-1 hover:scale-[1.015]",
                    "active:scale-[0.97]",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
                ].join(" ")}
                style={{
                    background: `
                        linear-gradient(
                            180deg,
                            rgba(35,35,35,0.55) 0%,
                            rgba(18,18,18,0.75) 100%
                        )
                    `,
                    backdropFilter: "blur(12px) saturate(140%)",
                    WebkitBackdropFilter: "blur(12px) saturate(140%)",
                    border: "1px solid rgba(217,179,95,0.5)",
                    boxShadow: `
                        0 14px 28px rgba(0,0,0,0.5),
                        0 4px 8px rgba(0,0,0,0.35),
                        inset 0 1px 0 rgba(255,255,255,0.25),
                        inset 0 -3px 8px rgba(0,0,0,0.45)
                    `
                }}
            >

                {/* Gradiente interno dorado más sólido */}
                <div
                    className="absolute inset-0 opacity-55 group-hover:opacity-75 transition-opacity duration-700 liquid-animate"
                    style={{
                        background: `
                            radial-gradient(circle at 20% 30%, rgba(217,179,95,0.35) 0%, transparent 55%),
                            radial-gradient(circle at 80% 70%, rgba(234,208,138,0.25) 0%, transparent 60%)
                        `,
                        filter: "blur(8px)",
                    }}
                />

                {/* Línea superior de luz */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Glow interno controlado */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                        background:
                            "radial-gradient(60% 120% at 50% 0%, rgba(255,255,255,0.12) 0%, transparent 100%)"
                    }}
                />

                {/* Sheen elegante */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className={[
                            "absolute top-0 -left-[100%] h-full w-[200%]",
                            "opacity-0 group-hover:opacity-30",
                            "rotate-[35deg] translate-x-0 group-hover:translate-x-full",
                            "transition-all duration-[1.1s] ease-in-out",
                        ].join(" ")}
                        style={{
                            background:
                                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)",
                        }}
                    />
                </div>

                {/* Contenido */}
                <span className="relative z-20 flex items-center gap-4 drop-shadow-sm">
                    {label}
                    <span className="relative flex items-center justify-center w-6 h-6">
                        <svg
                            className="w-6 h-6 transition-all duration-500 group-hover:translate-x-1.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </span>
                </span>
            </a>

            {subtext && (
                <div className="relative mt-2">
                    <span className="text-xs md:text-sm text-white/70 font-bold uppercase tracking-[0.2em]">
                        {subtext}
                    </span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-white/20" />
                </div>
            )}
        </div>
    );
}
