"use client";

import React, { useEffect, useMemo, useState } from "react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = useMemo(
        () => [
            { label: "Tickets", href: "#tickets" },
            { label: "Speakers", href: "#speakers" },
            { label: "Program", href: "#program" },
            { label: "FAQ", href: "#faq" },
            { label: "Contact", href: "#contact" },
        ],
        []
    );

    return (
        <header className="fixed top-0 left-0 w-full z-[100]">

            <nav
                className={`
          w-full transition-all duration-700 px-8 md:px-16
          ${isScrolled ? "py-3" : "py-5"}
        `}
            >
                {/* Background */}
                <div
                    className="absolute inset-0 -z-10 transition-all duration-700"
                    style={{
                        background: `
              linear-gradient(
                to bottom,
                rgba(230,211,163,0.55) 0%,
                rgba(230,211,163,0.30) 45%,
                rgba(0,0,0,0) 100%
              )
            `,
                        backdropFilter: "blur(12px)",
                        borderBottom: isScrolled
                            ? "1px solid rgba(217,179,95,0.25)"
                            : "1px solid rgba(255,255,255,0.05)",
                    }}
                />

                <div className="max-w-screen-2xl mx-auto flex items-center justify-between">

                    {/* Logo */}
                    <a href="#top" className="flex items-center">
                        <img
                            src="/icon.webp"
                            alt="The Beauty Experts"
                            className={`
                w-auto object-contain transition-all duration-700
                ${isScrolled ? "h-12 md:h-14" : "h-16 md:h-20"}
              `}
                        />
                    </a>

                    {/* Links */}
                    <div className="hidden md:flex items-center gap-12">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="
                  relative
                  text-[15px] md:text-[16px]
                  font-semibold uppercase tracking-[0.25em]
                  text-white/90
                  hover:text-[#E6D3A3]
                  transition-all duration-300
                "
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Bottom dissolve */}
            <div
                className="pointer-events-none absolute inset-x-0 top-full h-10"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(217,179,95,0.20), rgba(0,0,0,0))",
                }}
            />
        </header>
    );
}
