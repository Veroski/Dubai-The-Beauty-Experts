"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, CreditCard } from "lucide-react";

export function StickyMobilePay() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const ticketsSection = document.getElementById("tickets");
            const scrollPos = window.scrollY;

            if (!ticketsSection) {
                setIsVisible(scrollPos > 300);
                return;
            }

            const rect = ticketsSection.getBoundingClientRect();
            // Disappear if the top of the tickets section is near the bottom of the viewport
            const isNearTickets = rect.top < window.innerHeight - 50;

            setIsVisible(scrollPos > 300 && !isNearTickets);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`
                fixed bottom-0 left-0 w-full z-[100] px-4 pb-6 lg:hidden 
                transition-all duration-500 ease-in-out
                ${isVisible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-20 opacity-0 pointer-events-none"}
            `}
        >
            <a
                href="#tickets"
                className="
          flex items-center justify-between
          w-full h-16 px-8
          bg-[#0B1218]/95 backdrop-blur-md text-[#F0F4F8]
          rounded-2xl border border-[#A3B1C6]/30
          shadow-[0_0_15px_rgba(163,177,198,0.15),0_20px_40px_rgba(0,0,0,0.6)]
          active:scale-95 transition-all
        "
            >
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.1em] font-montserrat font-medium text-[#A3B1C6]">Dubai 2026</span>
                    <span className="text-sm uppercase tracking-[0.1em] font-montserrat font-medium">Get Tickets</span>
                </div>

                <div className="flex items-center gap-3">
                    <ArrowRight size={18} className="text-[#A3B1C6]" />
                </div>
            </a>
        </div>
    );
}
