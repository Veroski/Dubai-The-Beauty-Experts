"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { SectionCTA } from "./SectionCTA";

interface Speaker {
    id: string;
    name: string;
    image: string;
    group: "prime" | "nonstop" | "speakers";
}

const SPEAKER_DATA: Speaker[] = [
    { id: "prime-1", name: "ELLUS SULBARAN", image: "/artistas-dubai/PRIME-SPEAKERS/ELLUS  SULBARAN.webp", group: "prime" },
    { id: "prime-2", name: "JEFF PICASSO", image: "/artistas-dubai/PRIME-SPEAKERS/JEFF PICASSO.webp", group: "prime" },
    { id: "prime-3", name: "JULIA VASILEVA", image: "/artistas-dubai/PRIME-SPEAKERS/JULIA VASILEVA.webp", group: "prime" },
    { id: "prime-4", name: "KSENIJA OLIVA", image: "/artistas-dubai/PRIME-SPEAKERS/KSENIJA OLIVA.webp", group: "prime" },
    { id: "prime-5", name: "LJUDMILA VALJEVAC", image: "/artistas-dubai/PRIME-SPEAKERS/LJUDMILA VALJEVAC.webp", group: "prime" },
    { id: "prime-6", name: "MARIA GARCIA", image: "/artistas-dubai/PRIME-SPEAKERS/MARIA GARCIA.webp", group: "prime" },
    { id: "prime-7", name: "OSCAR ARANGO", image: "/artistas-dubai/PRIME-SPEAKERS/OSCAR  ARANGO.webp", group: "prime" },
    { id: "prime-8", name: "OSCAR CABALLERO", image: "/artistas-dubai/PRIME-SPEAKERS/OSCAR CABALLERO.webp", group: "prime" },
    { id: "prime-9", name: "RAFA SANZ", image: "/artistas-dubai/PRIME-SPEAKERS/RAFA SANZ.webp", group: "prime" },

    { id: "nonstop-1", name: "ALESSANDRA LA CORTE", image: "/artistas-dubai/JUDGE-DEMO-SPEAKER/ALESSANDRA LA CORTE.webp", group: "nonstop" },
    { id: "nonstop-2", name: "CECILE GOUVEIA", image: "/artistas-dubai/JUDGE-DEMO-SPEAKER/CECILE GOUVEIA.webp", group: "nonstop" },
    { id: "nonstop-3", name: "CERISARA MELISSA", image: "/artistas-dubai/JUDGE-DEMO-SPEAKER/CERISARA MELISSA.webp", group: "nonstop" },
    { id: "nonstop-4", name: "ERIKA CALO", image: "/artistas-dubai/JUDGE-DEMO-SPEAKER/ERIKA CALO.webp", group: "nonstop" },
    { id: "nonstop-5", name: "LIDIA BLASCO", image: "/artistas-dubai/JUDGE-DEMO-SPEAKER/LIDIA BLASCO.webp", group: "nonstop" },
    { id: "nonstop-6", name: "MARYBEL LACEDELLI", image: "/artistas-dubai/JUDGE-DEMO-SPEAKER/MARYBEL LACEDELLI.webp", group: "nonstop" },
    { id: "nonstop-7", name: "NICOLE BLANQUENSHIP", image: "/artistas-dubai/JUDGE-DEMO-SPEAKER/NICOLE BLANQUENSHIP.webp", group: "nonstop" },
    { id: "nonstop-8", name: "PALOMA RUIZ", image: "/artistas-dubai/JUDGE-DEMO-SPEAKER/PALOMA RUIZ.webp", group: "nonstop" },
    { id: "nonstop-9", name: "REBECA VILCHIS", image: "/artistas-dubai/JUDGE-DEMO-SPEAKER/REBECA VILCHIS.webp", group: "nonstop" },
    { id: "nonstop-10", name: "SHEILA PEINADO", image: "/artistas-dubai/JUDGE-DEMO-SPEAKER/SHEILA PEINADO.webp", group: "nonstop" },

    { id: "others-1", name: "CECILE GOUVEIA", image: "/artistas-dubai/OTHER/CECILE GOUVEIA.webp", group: "speakers" },
    { id: "others-2", name: "MARIANNA CZERNIAK", image: "/artistas-dubai/OTHER/MARIANNA CZERNIAK.webp", group: "speakers" },
    { id: "others-3", name: "TRANG NGUYEN", image: "/artistas-dubai/OTHER/TRANG NGUYEN.webp", group: "speakers" },
];

const GOLD = "#A85E36";
const GOLD_SOFT = "rgba(168,94,54,0.3)";

export function SpeakersSection() {
    const prime = useMemo(() => SPEAKER_DATA.filter((s) => s.group === "prime"), []);
    const nonstop = useMemo(() => SPEAKER_DATA.filter((s) => s.group === "nonstop"), []);
    const ambassadors = useMemo(() => SPEAKER_DATA.filter((s) => s.group === "speakers"), []);

    return (
        <section id="speakers" className="relative z-50 bg-[#1A1A1A] text-[#CBA785] py-24 overflow-hidden">
            {/* Dusk background: asphalt to deep taupe */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_18%_12%,rgba(107,79,59,0.24),transparent_58%),radial-gradient(900px_circle_at_82%_28%,rgba(168,94,54,0.18),transparent_56%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#22282C_0%,#1A1A1A_55%,#3D322B_100%)]" />
                <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(to_right,rgba(255,255,255,0.75)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.75)_1px,transparent_1px)] bg-[size:100px_100px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 space-y-24">
                {/* 1. PRIME SPEAKERS - ABSOLUTE PRIORITY */}
                <div className="pt-8">
                    <BlockHeader
                        title={<>PRIME <span className="font-serif italic" style={{ color: GOLD }}>SPEAKERS</span></>}
                        kicker="EXCLUSIVE"
                        desc="Featured artists selected for their impact, experience, and stage presence."
                    />
                    <div className="mt-12">
                        <SingleMarquee
                            items={prime}
                            speedPxPerSec={60}
                            card="large"
                        />
                    </div>
                </div>

                {/* 2. NON STOP DEMO SECOND - Live demonstrations */}
                <BlockHeader
                    title={<>NON STOP <span className="font-serif italic" style={{ color: GOLD }}>DEMO</span></>}
                    kicker="JUDGE & LIVE DEMO SPEAKERS"
                    desc="Continuous live demonstrations: technique in real time, expert evaluation, and feedback you can apply immediately."
                />
                <DoubleMarquee
                    items={nonstop}
                    speedPxPerSec={70}
                    card="medium"
                />

                {/* AMBASSADORS */}
                <div className="pt-4">
                    <BlockHeader
                        title={<>AMBASSADORS</>}
                        kicker="INTERNATIONAL REPRESENTATION"
                        desc="Global voices amplifying the championship spirit across markets, teams, and communities."
                    />

                    <div className="flex flex-wrap justify-center gap-6">
                        {ambassadors.map((speaker) => (
                            <SpeakerCard key={speaker.id} speaker={speaker} variant="small" />
                        ))}
                    </div>
                </div>

                <div className="mx-auto max-w-4xl rounded-3xl border border-[#6B4F3B]/55 bg-[#2B231E]/70 px-8 py-10 text-center shadow-[0_30px_80px_-40px_rgba(41,28,20,0.6)]">
                    <p className="text-[11px] tracking-[0.55em] uppercase font-black text-[#A85E36]">International Teams</p>
                    <h4 className="mt-4 text-3xl md:text-4xl font-black uppercase tracking-tight text-[#CBA785]">
                        Join The Winning Teams
                    </h4>
                    <p className="mt-4 text-lg text-[#CBA785]/82 font-[var(--font-lexend)] font-normal tracking-[0.01em]">
                        Poland • Canada • Vietnam
                    </p>
                </div>

                <SectionCTA />
            </div>

            {/* Global styles for marquee */}
            <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .tbe-marquee { animation: none !important; transform: none !important; }
        }
        .tbe-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
          mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
        }
        @keyframes tbe-marquee-left {
          from { transform: translate3d(0,0,0); }
          to   { transform: translate3d(calc(-1 * var(--tbe-track-width)),0,0); }
        }
        @keyframes tbe-marquee-right {
          from { transform: translate3d(calc(-1 * var(--tbe-track-width)),0,0); }
          to   { transform: translate3d(0,0,0); }
        }
      `}</style>
        </section>
    );
}

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur"
            style={{
                borderColor: "rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.04)",
                color: "rgba(255,255,255,0.78)",
            }}
        >
            {children}
        </div>
    );
}

function BlockHeader({
    title,
    kicker,
    desc,
}: {
    title: React.ReactNode;
    kicker: string;
    desc: string;
}) {
    return (
        <div className="max-w-4xl mx-auto text-center">
            <div className="text-[11px] tracking-[0.6em] uppercase font-black text-[#CBA785]/55 mb-4">
                {kicker}
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.95] text-[#CBA785]">
                {title}
            </h3>
            <p className="mt-8 text-lg md:text-xl text-[#CBA785]/75 max-w-2xl mx-auto font-[var(--font-lexend)] font-normal tracking-[-0.01em] leading-relaxed">
                {desc}
            </p>
            <div className="mt-10 h-px w-24 mx-auto" style={{ background: GOLD_SOFT }} />
        </div>
    );
}

/**
 * Seamless marquee core:
 * - measure width of 1 track
 * - animate wrapper by exactly that width
 */
function SeamlessMarquee({
    items,
    speedPxPerSec,
    direction = "left",
    card,
}: {
    items: Speaker[];
    speedPxPerSec: number;
    direction?: "left" | "right";
    card: "large" | "medium";
}) {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [trackWidth, setTrackWidth] = useState<number>(0);

    useEffect(() => {
        if (!trackRef.current) return;

        const el = trackRef.current;

        const measure = () => {
            const w = el.getBoundingClientRect().width;
            setTrackWidth(Math.max(1, Math.round(w)));
        };

        measure();

        const ro = new ResizeObserver(() => measure());
        ro.observe(el);

        window.addEventListener("load", measure);
        return () => {
            ro.disconnect();
            window.removeEventListener("load", measure);
        };
    }, [items]);

    const durationSec = trackWidth > 0 ? trackWidth / Math.max(10, speedPxPerSec) : 30;

    const animName = direction === "left" ? "tbe-marquee-left" : "tbe-marquee-right";

    return (
        <div className="relative overflow-hidden tbe-mask">
            <div
                className="tbe-marquee flex w-max"
                style={{
                    // Animate the container that holds (track + clone)
                    animationName: animName,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    animationDuration: `${durationSec}s`,
                    willChange: "transform",
                    ["--tbe-track-width" as any]: `${trackWidth}px`,
                }}
            >
                {/* Track A (measured) */}
                <div ref={trackRef} className="flex gap-6 py-6 pr-6">
                    {items.map((speaker) => (
                        <SpeakerCard key={speaker.id} speaker={speaker} variant={card} />
                    ))}
                </div>

                {/* Track B (clone) */}
                <div className="flex gap-6 py-6 pr-6" aria-hidden="true">
                    {items.map((speaker) => (
                        <SpeakerCard key={`${speaker.id}-clone`} speaker={speaker} variant={card} />
                    ))}
                </div>
            </div>

            {/* gold edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-black to-transparent opacity-90" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-black to-transparent opacity-90" />
        </div>
    );
}

function SingleMarquee({
    items,
    speedPxPerSec,
    card,
}: {
    items: Speaker[];
    speedPxPerSec: number;
    card: "large" | "medium";
}) {
    return (
        <SeamlessMarquee items={items} speedPxPerSec={speedPxPerSec} direction="left" card={card} />
    );
}

function DoubleMarquee({
    items,
    speedPxPerSec,
    card,
}: {
    items: Speaker[];
    speedPxPerSec: number;
    card: "large" | "medium";
}) {
    const mid = Math.ceil(items.length / 2);
    const rowA = items.slice(0, mid);
    const rowB = items.slice(mid);

    return (
        <div className="space-y-6">
            <SeamlessMarquee items={rowA} speedPxPerSec={speedPxPerSec} direction="left" card={card} />
            <SeamlessMarquee items={rowB.length ? rowB : rowA} speedPxPerSec={Math.max(40, speedPxPerSec - 10)} direction="right" card={card} />
        </div>
    );
}

function SpeakerCard({ speaker, variant }: { speaker: Speaker; variant: "large" | "medium" | "small" }) {
    const size =
        variant === "large" ? "h-80 w-60" :
            variant === "medium" ? "h-72 w-56" :
                "h-60 w-44";

    const nameSize =
        variant === "large" ? "text-sm md:text-base" :
            variant === "medium" ? "text-xs md:text-sm" :
                "text-[11px] md:text-xs";

    return (
        <div
            className={[
                "group relative shrink-0 overflow-hidden rounded-2xl",
                "border transition-transform duration-700 hover:-translate-y-2",
                size,
            ].join(" ")}
            style={{
                borderColor: "rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
            }}
        >
            <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                loading="lazy"
            />

            {/* Premium overlay: deep + gold glaze */}
            <div className="absolute inset-0 opacity-95"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.78), rgba(0,0,0,0.10) 55%, rgba(0,0,0,0.35))",
                }}
            />

            {/* Subtle gold rim glow on hover */}
            <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                    boxShadow: `inset 0 0 0 1px ${GOLD_SOFT}, 0 0 40px rgba(201,162,74,0.12)`,
                }}
            />

            <div className="absolute bottom-0 left-0 w-full p-4">
                <p className={`font-serif leading-tight uppercase tracking-[0.18em] ${nameSize} text-white`}>
                    {speaker.name}
                </p>
                <div className="mt-2 h-px w-10 group-hover:w-full transition-all duration-700" style={{ background: GOLD_SOFT }} />
            </div>
        </div>
    );
}
