'use client';

import React from "react";
import { Check, Calendar, ArrowRight, ShieldCheck, Zap, CreditCard } from "lucide-react";

type TicketsSectionProps = {
  stripeCheckoutUrl?: string;
  whatsappUrl?: string;
};

export function TicketsSection({
  stripeCheckoutUrl = "https://buy.stripe.com/tu_link_aqui", // Reemplazar con link real
  whatsappUrl = "https://wa.me/+34647122470", // Reemplazar con link real
}: TicketsSectionProps) {

  return (
    <section id="tickets" className="relative overflow-hidden py-24 bg-[#FDFBF7] text-[#1A150E]">
      {/* Background Polish */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,162,74,0.08),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Minimalist Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif italic text-[#1A150E]">
            Join the <span className="font-sans font-black not-italic uppercase text-[#C9A24A]">Elite</span> in Dubai
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#C9A24A]/40" />
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#B48B2A]">A PLACE TO WITNESS GREATNESS - A PLACE TO BECOME IT</p>
            <span className="h-px w-8 bg-[#C9A24A]/40" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* VALUE PROPOSITION */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#B48B2A]">All-Inclusive Experience</h3>
              <div className="grid gap-4">
                <Benefit title="Dual Certification" detail="Attendance & Championship official credentials." />
                <Benefit title="5-Star Catering" detail="Gourmet lunches, coffee breaks & Gala Dinner." />
                <Benefit title="VIP Master Kit" detail="Welcome Bag + THE BEAUTY EXPERTS 2026 Magazine." />
                <Benefit title="World-Class Networking" detail="Photocall with masters & industry titans." />
              </div>
            </div>

            <div className="inline-flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#C9A24A]/10 shadow-sm">
              <Calendar className="text-[#C9A24A]" size={20} />
              <div>
                <p className="text-xs font-black uppercase tracking-tighter">October 15, 16, 17 • 2026</p>
                <p className="text-[10px] text-gray-400 font-serif italic">The Beauty Experts Summit • Dubai</p>
              </div>
            </div>
          </div>

          {/* CONVERSION ENGINE */}
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#C9A24A] rounded-[44px] blur-xl opacity-10 group-hover:opacity-15 transition duration-1000"></div>

              <div className="relative bg-white border-2 border-[#C9A24A]/20 rounded-[40px] p-8 md:p-12 shadow-[0_40px_80px_-30px_rgba(201,162,74,0.15)]">

                {/* Price & Scarcity */}
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black tracking-tighter text-[#1A150E]">1.000€</span>
                      <span className="text-gray-400 line-through text-lg">1.500€</span>
                    </div>
                    <p className="text-xs font-bold text-[#C9A24A] uppercase tracking-widest mt-1">+ VAT | Early Bird Price</p>
                  </div>
                  <div className="text-right">
                    <span className="text-red-600 text-[10px] font-black uppercase bg-red-50 px-3 py-1 rounded-full animate-pulse">
                      Selling out fast
                    </span>
                  </div>
                </div>

                {/* MAIN STRIPE BUTTON */}
                <div className="space-y-8">
                  <div className="relative">
                    <a
                      href={stripeCheckoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col items-center justify-center w-full py-7 px-10 bg-[#1A150E] text-white rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-black shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)] overflow-hidden"
                    >
                      <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-[45deg] -translate-x-full group-hover:animate-shine-fast" />

                      <span className="text-lg font-black uppercase tracking-[0.2em] flex items-center gap-3">
                        Pay with Stripe <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                      </span>
                      <span className="text-[9px] text-[#C9A24A] font-bold mt-1 tracking-[0.1em] opacity-90 uppercase">
                        Secure Checkout
                      </span>
                    </a>

                    <div className="flex justify-center items-center gap-4 mt-5 opacity-40 grayscale hover:grayscale-0 transition-all cursor-default">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-4" alt="Stripe" />
                      <div className="h-3 w-px bg-gray-300" />
                      <CreditCard size={14} />
                    </div>
                  </div>

                  {/* PAYMENT PLANS -> WHATSAPP */}
                  <div className="space-y-3">
                    <p className="text-center text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">Or use a Flexible Payment Plan</p>

                    <InstallmentOption
                      plan="2 Payments"
                      detail="500€ Today + 500€ Later"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    />
                    <InstallmentOption
                      plan="3 Payments"
                      detail="300€ Reserve • 350€ (March) • 350€ (July)"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    />
                    <InstallmentOption
                      plan="4 Payments"
                      detail="300€ • 300€ (Mar) • 200€ (Jul) • 200€ (Aug)"
                      onClick={() => window.open(whatsappUrl, '_blank')}
                    />
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  <ShieldCheck size={14} className="text-[#C9A24A]" />
                  Authorized Stripe Partner • Secure Transaction
                </div>
              </div>

              {/* WHATSAPP SUPPORT */}
              <div className="mt-8 text-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#B48B2A] hover:text-[#1A150E] transition-colors flex items-center justify-center gap-2 group"
                >
                  Need help? Chat with Dubai Support <Zap size={14} fill="#B48B2A" className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes shine-fast {
          0% { transform: translateX(-150%) skewX(-45deg); }
          30% { transform: translateX(250%) skewX(-45deg); }
          100% { transform: translateX(250%) skewX(-45deg); }
        }
        .animate-shine-fast {
          animation: shine-fast 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}

function Benefit({ title, detail }: { title: string, detail: string }) {
  return (
    <div className="flex items-start gap-4 p-2 border-b border-[#C9A24A]/5">
      <div className="mt-1 text-[#C9A24A]">
        <Check size={16} strokeWidth={4} />
      </div>
      <div>
        <h4 className="text-[11px] font-black uppercase tracking-wider text-[#1A150E]">{title}</h4>
        <p className="text-xs text-gray-400 font-medium leading-tight">{detail}</p>
      </div>
    </div>
  );
}

function InstallmentOption({ plan, detail, onClick }: { plan: string, detail: string, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 bg-[#FAF9F6] border border-gray-100 rounded-2xl text-left hover:border-[#C9A24A] hover:bg-white transition-all group flex justify-between items-center"
    >
      <div>
        <span className="block text-[10px] font-black uppercase text-[#B48B2A] group-hover:text-[#1A150E]">{plan}</span>
        <span className="text-[11px] text-gray-400 font-medium">{detail}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[8px] font-bold uppercase text-[#C9A24A] opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
        <ArrowRight size={14} className="text-gray-300 group-hover:text-[#C9A24A] group-hover:translate-x-1 transition-all" />
      </div>
    </button>
  );
}