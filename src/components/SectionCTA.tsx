"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function SectionCTA() {
    return (
        <div className="hidden lg:flex justify-center mt-20">
            <a
                href="#tickets"
                className="
          group relative flex items-center gap-6 px-12 py-6
          bg-white text-black rounded-full
          border border-[#C9A24A]/30
          shadow-[0_10px_30px_rgba(0,0,0,0.1)]
          hover:shadow-[0_20px_40px_rgba(201,162,74,0.15)]
          hover:-translate-y-1 transition-all duration-500
        "
            >
                <span className="text-sm font-black uppercase tracking-[0.3em]">Secure Your Spot in Dubai</span>
                <div className="w-10 h-10 rounded-full bg-[#1A150E] flex items-center justify-center text-white transition-transform group-hover:rotate-45">
                    <ArrowRight size={20} />
                </div>

                {/* Subtle glow */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(201,162,74,0.1),transparent_70%)]" />
            </a>
        </div>
    );
}
