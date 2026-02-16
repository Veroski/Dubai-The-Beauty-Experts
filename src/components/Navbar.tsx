"use client";

import React, { useEffect, useMemo, useState } from "react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Removed "Tickets" and "Contact" from the main mapping to handle them as unique CTA buttons
    const links = useMemo(
        () => [
            { label: "Speakers", href: "#speakers" },
            { label: "Program", href: "#program" },
            { label: "Mindset", href: "#coach" },
            { label: "FAQ", href: "#faq" },
        ],
        []
    );

    const whatsappLink = "https://wa.me/34603908049";

    return (
        <header className="fixed top-0 left-0 w-full z-[100]">
            <nav
                className={`
          w-full transition-all duration-700 px-4 md:px-16
          ${isScrolled ? "py-2 md:py-3" : "py-3 md:py-5"}
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
                ${isScrolled ? "h-10 md:h-14" : "h-12 md:h-20"}
              `}
                        />
                    </a>

                    {/* Desktop Links & CTAs */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-10">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/90 hover:text-[#E6D3A3] transition-all duration-300"
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="flex items-center gap-4 ml-4">
                            {/* WhatsApp Contact Button */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-2.5 border border-[#E6D3A3] text-[#E6D3A3] text-[12px] font-bold uppercase tracking-wider rounded-[4px] hover:bg-[#E6D3A3] hover:text-black transition-all duration-300"
                            >
                                Contact
                            </a>

                            {/* Main Tickets Button */}
                            <a
                                href="#tickets"
                                className="px-6 py-3 bg-[#C9A24A] text-black text-[13px] font-black uppercase tracking-[0.1em] rounded-[4px] shadow-lg hover:bg-white transition-all duration-300 active:scale-95"
                            >
                                Get Tickets
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Backdrop */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-[#1A150E]/60 backdrop-blur-2xl border-t border-white/10 flex flex-col p-8 gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white/80 text-lg font-light uppercase tracking-[0.2em] border-b border-white/5 pb-2"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Mobile CTAs */}
                        <div className="flex flex-col gap-4 mt-4">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-4 border border-[#E6D3A3] text-[#E6D3A3] text-center font-bold uppercase tracking-widest rounded-sm"
                            >
                                Contact WhatsApp
                            </a>
                            <a
                                href="#tickets"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-4 bg-[#C9A24A] text-black text-center font-black uppercase tracking-widest rounded-sm"
                            >
                                Get Tickets
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            <div
                className={`pointer-events-none absolute inset-x-0 top-full h-10 transition-opacity duration-700 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
                style={{
                    background: "linear-gradient(to bottom, rgba(217,179,95,0.20), rgba(0,0,0,0))",
                }}
            />
        </header>
    );
}