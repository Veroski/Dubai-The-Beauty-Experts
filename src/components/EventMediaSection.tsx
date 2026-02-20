"use client";

import React, { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const MAIN_VIDEO_ID = "Oev2ZxH2i4U";
const SHORT_1_ID = "3MwbwAleEFk";
const SHORT_2_ID = "EcEoMxnrmYo";

export function EventMediaSection() {
  const short1Ref = useRef<HTMLDivElement | null>(null);
  const short2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let player1: any;
    let player2: any;
    let ready1 = false;
    let ready2 = false;

    const startLoop = () => {
      if (!ready1 || !ready2 || !player1 || !player2) return;
      player1.mute();
      player2.mute();
      player1.setPlaybackQuality?.("hd1080");
      player2.setPlaybackQuality?.("hd1080");
      player2.pauseVideo();
      player1.playVideo();
    };

    const playShort1 = () => {
      if (!player1 || !player2) return;
      player2.seekTo(0, true);
      player2.pauseVideo();
      player1.seekTo(0, true);
      player1.playVideo();
    };

    const playShort2 = () => {
      if (!player1 || !player2) return;
      player1.seekTo(0, true);
      player1.pauseVideo();
      player2.seekTo(0, true);
      player2.playVideo();
    };

    const buildPlayers = () => {
      if (!short1Ref.current || !short2Ref.current || !window.YT?.Player) return;

      player1 = new window.YT.Player(short1Ref.current, {
        videoId: SHORT_1_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          mute: 1,
          iv_load_policy: 3,
          disablekb: 1,
          vq: "hd1080",
        },
        events: {
          onReady: () => {
            ready1 = true;
            startLoop();
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              playShort2();
            }
          },
        },
      });

      player2 = new window.YT.Player(short2Ref.current, {
        videoId: SHORT_2_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          mute: 1,
          iv_load_policy: 3,
          disablekb: 1,
          vq: "hd1080",
        },
        events: {
          onReady: () => {
            ready2 = true;
            startLoop();
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              playShort1();
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      buildPlayers();
    } else {
      const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }

      const previousHandler = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previousHandler?.();
        buildPlayers();
      };
    }

    return () => {
      player1?.destroy?.();
      player2?.destroy?.();
    };
  }, []);

  return (
    <section id="event-media" className="relative overflow-hidden bg-[#22282C] py-24 md:py-32 text-[#E7DDD1]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1A2025_0%,#29353F_58%,#303D47_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(65%_110%_at_50%_6%,rgba(233,241,249,0.14)_0%,rgba(233,241,249,0)_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.12)_28%,rgba(0,0,0,0.10)_50%,rgba(0,0,0,0.12)_72%,rgba(0,0,0,0.34)_100%)]" />
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[40%] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(225,235,245,0.07)_20%,rgba(225,235,245,0.18)_50%,rgba(225,235,245,0.07)_80%,rgba(255,255,255,0)_100%)] blur-[1.5px]" />
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[22%] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(233,241,249,0.13)_26%,rgba(233,241,249,0.28)_50%,rgba(233,241,249,0.13)_74%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[10%] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(246,250,255,0.12)_20%,rgba(246,250,255,0.24)_50%,rgba(246,250,255,0.12)_80%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-x-0 top-[16%] h-[18%] bg-[radial-gradient(45%_80%_at_50%_50%,rgba(236,244,252,0.10)_0%,rgba(236,244,252,0.03)_46%,rgba(255,255,255,0)_100%)]" />
        <div className="absolute inset-0 opacity-[0.026] bg-[linear-gradient(to_right,rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.9)_1px,transparent_1px)] bg-[size:120px_120px]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#22282C] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <header className="relative mx-auto max-w-3xl text-center rounded-3xl px-4 py-5 md:px-8 md:py-8">
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(95%_120%_at_50%_30%,rgba(20,27,34,0.56)_0%,rgba(20,27,34,0.26)_45%,rgba(20,27,34,0)_100%)]" />
          <p className="relative text-[11px] tracking-[0.6em] uppercase font-black text-[#E7C697] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Exclusive Events</p>
          <div className="mx-auto mt-4 h-px w-28 bg-gradient-to-r from-transparent via-[#7A858E]/80 to-transparent" />
          <h2 className="relative mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] text-[#F6EBDD] drop-shadow-[0_6px_16px_rgba(0,0,0,0.45)]">
            The Beauty Experts
            <span className="block font-serif italic normal-case text-[#E5A77F] mt-2">Immersive Experience</span>
          </h2>
          <p className="relative mt-7 text-base md:text-lg text-[#F3E8DA] leading-relaxed drop-shadow-[0_3px_9px_rgba(0,0,0,0.35)]">
            Join the elite of PMU and SMP in a competitive environment where top professionals reveal high-impact techniques,
            strategy, and stage-level execution.
          </p>
        </header>

        <div className="relative mt-12 rounded-3xl border border-[#7A858E]/35 bg-[#22282C]/45 p-3 md:p-5 shadow-[0_35px_90px_-45px_rgba(0,0,0,0.55)]">
          <div className="pointer-events-none absolute -inset-2 rounded-[28px] border border-[#D99C78]/18" />
          <div className="pointer-events-none absolute -inset-x-6 -bottom-6 h-20 bg-[radial-gradient(50%_80%_at_50%_0%,rgba(217,156,120,0.28),transparent)] blur-xl" />
          <div className="relative w-full overflow-hidden rounded-2xl bg-black aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${MAIN_VIDEO_ID}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${MAIN_VIDEO_ID}&rel=0&modestbranding=1&vq=hd1080`}
              title="The Beauty Experts Evento Principal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <div className="relative mx-auto max-w-4xl rounded-3xl px-4 py-6 md:px-8 md:py-8 text-center">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(95%_120%_at_50%_35%,rgba(17,24,31,0.58)_0%,rgba(17,24,31,0.34)_48%,rgba(17,24,31,0)_100%)]" />
            <h3 className="relative text-3xl md:text-4xl font-black uppercase tracking-tight text-[#FBF2E5] drop-shadow-[0_5px_14px_rgba(0,0,0,0.5)]">
              Inspiration In <span className="text-[#D99C78]">60 Seconds</span>
            </h3>
            <p className="relative mt-4 text-[#F2E5D7] max-w-2xl mx-auto font-[var(--font-lexend)] font-normal tracking-[-0.008em] drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]">
              Short capsules with key moments, fast techniques, and high-value takeaways from the event atmosphere.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ShortCard title="Short The Beauty Experts 1" playerRef={short1Ref} />
            <ShortCard title="Short The Beauty Experts 2" playerRef={short2Ref} />
          </div>
        </div>
      </div>

    </section>
  );
}

function ShortCard({
  title,
  playerRef,
  className = "",
}: {
  title: string;
  playerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
}) {
  return (
    <article className={`group relative rounded-2xl border border-[#7A858E]/35 bg-[#22282C]/45 p-2 transition-all duration-500 hover:-translate-y-2 hover:border-[#D99C78]/70 ${className}`}>
      <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(217,156,120,0.25),transparent_65%)]" />
      <div className="relative w-full overflow-hidden rounded-xl bg-black aspect-[9/16]">
        <div ref={playerRef} className="absolute inset-0 h-full w-full" aria-label={title} />
      </div>
    </article>
  );
}
