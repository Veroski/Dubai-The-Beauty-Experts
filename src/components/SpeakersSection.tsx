"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

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
    { id: "nonstop-2", name: "CELINE NANTEL", image: "/artistas-dubai/JUDGE-DEMO-SPEAKER/CELINE NANTEL.webp", group: "nonstop" },
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

const GOLD = "#C9A24A";
const GOLD_SOFT = "rgba(201,162,74,0.25)";

export function SpeakersSection() {
    const prime = useMemo(() => SPEAKER_DATA.filter((s) => s.group === "prime"), []);
    const nonstop = useMemo(() => SPEAKER_DATA.filter((s) => s.group === "nonstop"), []);
    const specialists = useMemo(() => SPEAKER_DATA.filter((s) => s.group === "speakers"), []);

    return (
        <section id="speakers" className="relative z-50 bg-[#070607] text-white py-24 overflow-hidden">
            {/* Luxury background: obsidian + gold glow + sand haze */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_20%_15%,rgba(201,162,74,0.18),transparent_60%),radial-gradient(900px_circle_at_85%_35%,rgba(140,190,255,0.10),transparent_58%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_55%_110%,rgba(220,190,140,0.10),transparent_55%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
                <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:90px_90px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 space-y-16">
                {/* Context header (English) */}
                <header className="max-w-3xl mx-auto text-center">
                    <div className="text-[11px] tracking-[0.5em] uppercase font-semibold text-white/60">
                        THE LINEUP
                    </div>

                    <h2 className="mt-4 text-5xl md:text-6xl font-light tracking-tight">
                        Meet the <span className="font-serif italic" style={{ color: GOLD }}>Artists</span>
                    </h2>

                    <p className="mt-5 text-base md:text-lg text-white/70 leading-relaxed">
                        Dubai edition. A curated roster of international speakers, non-stop live demos, and specialist support — built for mastery, visibility, and growth.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <Pill>International roster</Pill>
                        <Pill>Live demos</Pill>
                        <Pill>Judging panel</Pill>
                        <Pill>Workshops</Pill>
                    </div>
                </header>

                {/* NON STOP FIRST (double row) */}
                <BlockHeader
                    title={<>NON STOP <span className="font-serif italic" style={{ color: GOLD }}>DEMO</span></>}
                    kicker="JUDGE & LIVE DEMO SPEAKERS"
                    desc="Continuous stage action: technique in real time, evaluation, and feedback you can apply immediately."
                />
                <DoubleMarquee
                    items={nonstop}
                    speedPxPerSec={70}
                    card="medium"
                />

                {/* PRIME */}
                <BlockHeader
                    title={<>PRIME <span className="font-serif italic" style={{ color: GOLD }}>SPEAKERS</span></>}
                    kicker="EXCLUSIVITY & MASTERY"
                    desc="Headline names selected for impact, expertise, and stage presence."
                />
                <SingleMarquee
                    items={prime}
                    speedPxPerSec={60}
                    card="large"
                />

                {/* SPECIALISTS */}
                <div className="pt-4">
                    <BlockHeader
                        title={<>SPECIALISTS</>}
                        kicker="WORKSHOPS & SUPPORT"
                        desc="Supporting experts and workshop leaders to deepen your skills beyond the main stage."
                    />

                    <div className="flex flex-wrap justify-center gap-6">
                        {specialists.map((speaker) => (
                            <SpeakerCard key={speaker.id} speaker={speaker} variant="small" />
                        ))}
                    </div>
                </div>
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
            <div className="text-[11px] tracking-[0.55em] uppercase font-semibold text-white/60">
                {kicker}
            </div>
            <h3 className="mt-4 text-5xl md:text-6xl font-light tracking-tight">
                {title}
            </h3>
            <p className="mt-5 text-sm md:text-base text-white/70 leading-relaxed">
                {desc}
            </p>
            <div className="mt-6 h-px w-24 mx-auto" style={{ background: GOLD_SOFT }} />
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
