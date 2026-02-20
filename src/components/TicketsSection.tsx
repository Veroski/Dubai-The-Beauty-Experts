'use client';

import React from "react";
import { ArrowRight, Crown, Star, Trophy } from "lucide-react";

type TicketsSectionProps = {
  stripeVipUrl?: string;
  stripe3DayUrl?: string;
  stripe2DayUrl?: string;
  stripe1DayUrl?: string;
  stripeModelUrl?: string;
  stripeLatexUrl?: string;
  whatsappUrl?: string;
};

export function TicketsSection({
  stripeVipUrl = "https://buy.stripe.com/tu_link_vip",
  stripe3DayUrl = "https://link.fastpaydirect.com/payment-link/6994d69388a3f0af5f805235",
  stripe2DayUrl = "https://buy.stripe.com/tu_link_2day",
  stripe1DayUrl = "https://buy.stripe.com/tu_link_1day",
  stripeModelUrl = "https://buy.stripe.com/tu_link_model",
  stripeLatexUrl = "https://buy.stripe.com/tu_link_latex",
  whatsappUrl = "https://wa.me/34603908049",
}: TicketsSectionProps) {
  const vipCheckout = getCheckoutUrl(stripeVipUrl, whatsappUrl);
  const pass3DayCheckout = getCheckoutUrl(stripe3DayUrl, whatsappUrl);
  const pass2DayCheckout = getCheckoutUrl(stripe2DayUrl, whatsappUrl);
  const pass1DayCheckout = getCheckoutUrl(stripe1DayUrl, whatsappUrl);
  const modelCheckout = getCheckoutUrl(stripeModelUrl, whatsappUrl);
  const latexCheckout = getCheckoutUrl(stripeLatexUrl, whatsappUrl);

  return (
    <section id="tickets" className="relative overflow-hidden py-24 bg-[#11161C] text-[#F3E8DA]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0D1318_0%,#131D26_58%,#1A2630_100%)]" />
        <div className="tickets-focus-wave absolute -inset-x-[20%] -inset-y-[10%] bg-[radial-gradient(82%_138%_at_50%_4%,rgba(247,252,255,0.46)_0%,rgba(247,252,255,0.2)_34%,rgba(247,252,255,0)_70%)]" />
        <div className="tickets-focus-wave-alt absolute -inset-x-[18%] -inset-y-[8%] bg-[radial-gradient(52%_42%_at_50%_34%,rgba(248,253,255,0.34)_0%,rgba(248,253,255,0.13)_40%,transparent_78%)]" />
        <div className="tickets-focus-wave absolute -inset-x-[24%] top-[8%] h-56 bg-[radial-gradient(36%_100%_at_50%_50%,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0)_72%)] blur-xl" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.28)_28%,rgba(0,0,0,0.16)_50%,rgba(0,0,0,0.28)_72%,rgba(0,0,0,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(42%_88%_at_50%_50%,rgba(225,235,245,0.18)_0%,rgba(225,235,245,0.08)_34%,rgba(225,235,245,0)_72%)]" />
        <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(130%_90%_at_50%_15%,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_56%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <header className="text-center max-w-4xl mx-auto">
          <p className="text-[11px] tracking-[0.65em] uppercase font-black text-[#E7C697]">Ticket Architecture</p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] text-[#F6EBDD]">Choose Your Level</h2>
          <p className="mt-6 text-lg md:text-xl text-[#F3E8DA]/88">INTERNATIONAL CONGRESS & CHAMPIONSHIP PMU | SMP</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <GuideItem step="1" title="Choose Intent" text="VIP Experience, Congress Access, or Competition Entry." />
            <GuideItem step="2" title="Pick Pass" text="Select the tier that matches your strategic goal." />
            <GuideItem step="3" title="Secure Spot" text="Fast checkout now. Limited availability for key tiers." />
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <QuickLink href="#vip-ticket" text="Buy VIP Now" />
            <QuickLink href="#core-tickets" text="Buy Congress Pass" />
            <QuickLink href="#competition-tickets" text="Enter Competition" />
          </div>
        </header>

        <div id="vip-ticket" className="mt-16 scroll-mt-24">
          <SectionTitle icon={<Crown size={16} />} label="Premium" title="VIP Pass" />
          <div className="mt-6">
            <div className="relative overflow-hidden rounded-3xl border border-[#6F7D8A]/50 bg-[linear-gradient(145deg,#1A242D_0%,#141D25_52%,#0F161D_100%)] p-8 md:p-10 shadow-[0_42px_130px_-45px_rgba(0,0,0,0.95)]">
              <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(85%_100%_at_0%_0%,rgba(243,232,218,0.14)_0%,transparent_58%)]" />
              <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(120deg,transparent_0%,rgba(231,199,151,0.07)_42%,transparent_79%)]" />
              <div className="absolute right-5 top-5 rounded-full border border-[#E7C697]/70 bg-[linear-gradient(135deg,#FAE9CF_0%,#EBC28E_100%)] px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#3D2B1C] shadow-[0_10px_24px_-14px_rgba(0,0,0,0.8)]">Limited</div>
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black uppercase text-[#F6EBDD] tracking-[-0.02em]">VIP PASS</h3>
                  <p className="mt-2 text-[#F3E8DA]/84 uppercase tracking-[0.14em] text-xs">Everything from 3-Day Pass + exclusive upgrades</p>
                  <p className="mt-5 text-5xl md:text-6xl font-black text-[#F7E2C1]">1500€ <span className="text-base md:text-lg text-[#F3E8DA]/75">+ VAT</span></p>
                </div>
                <BuyButton href={vipCheckout.href} text={vipCheckout.ctaText("Book VIP Priority Now")} variant="vip" />
              </div>

              <ul className="relative z-10 mt-8 grid md:grid-cols-2 gap-3 md:gap-x-6 md:gap-y-4">
                {[
                  "Everything from 3-Day All Inclusive",
                  "Welcome beach party",
                  "Fast-track access",
                  "Front row seating",
                  "Backstage + Meet & Greet",
                  "Premium welcome bag",
                  "Personalized VIP badge",
                  "Front-row gala seating",
                  "Desert excursion",
                ].map((item) => (
                  <Feature key={item} text={item} tone="light" />
                ))}
              </ul>
              <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                <GhostButton href={vipCheckout.href} text={vipCheckout.ctaText("Reserve VIP Immediately")} />
                <GhostButton href={whatsappUrl} text="VIP Help by WhatsApp" />
              </div>
            </div>
          </div>
        </div>

        <div id="core-tickets" className="mt-16 scroll-mt-24">
          <SectionTitle icon={<Star size={16} />} label="Core Experience" title="Congress Access Passes" />
          <div className="mt-6 grid lg:grid-cols-3 gap-6 items-stretch">
            <PassCard
              title="3 Day Pass All Inclusive"
              price="1000€"
              vat="+ VAT"
              badge="Best Value"
              href={pass3DayCheckout.href}
              ctaText={pass3DayCheckout.ctaText("Buy 3 Day Pass")}
              features={[
                "Championship nomination included",
                "Congress sessions + non-stop demos",
                "Gala dinner and awards",
                "Magazine + welcome material",
                "Coffee breaks and lunches",
                "Professional market access",
              ]}
            />
            <PassCard
              title="2 Day Pass"
              price="800€"
              vat="+ VAT"
              href={pass2DayCheckout.href}
              ctaText={pass2DayCheckout.ctaText("Buy 2 Day Pass")}
              features={[
                "2 congress days access",
                "Congress sessions + non-stop demos",
                "Networking and market area",
                "Certification of attendance",
              ]}
            />
            <PassCard
              title="1 Day Pass"
              price="450€"
              vat="+ VAT"
              href={pass1DayCheckout.href}
              ctaText={pass1DayCheckout.ctaText("Buy 1 Day Pass")}
              features={[
                "1 congress day access",
                "Selected conferences and demos",
                "Networking and market area",
                "Certification of attendance",
              ]}
            />
          </div>
        </div>

        <div id="competition-tickets" className="mt-16 scroll-mt-24">
          <SectionTitle icon={<Trophy size={16} />} label="Competition Only" title="Championship Entry" />
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <CompetitionCard
              title="Only Championship Model"
              price="250€"
              href={modelCheckout.href}
              ctaText={modelCheckout.ctaText("Enter Model Championship")}
              note="Competition entry only. No conferences, demos, or gala included."
            />
            <CompetitionCard
              title="Only Championship Latex"
              price="200€"
              href={latexCheckout.href}
              ctaText={latexCheckout.ctaText("Enter Latex Championship")}
              note="Competition entry only. No conferences, demos, or gala included."
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#687786]/52 bg-[#161F28]/88 px-6 py-3 text-[#F3E8DA] hover:text-[#FFFFFF] uppercase tracking-[0.16em] text-xs font-black transition-colors"
          >
            Need custom payment support on WhatsApp <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes tickets-focus-wave {
          0% {
            transform: translate3d(-2.8%, -2.2%, 0) scale(0.98);
            opacity: 0.62;
          }
          50% {
            transform: translate3d(2.8%, 1.8%, 0) scale(1.11);
            opacity: 1;
          }
          100% {
            transform: translate3d(-2.8%, -2.2%, 0) scale(0.98);
            opacity: 0.62;
          }
        }
        @keyframes tickets-focus-wave-alt {
          0% {
            transform: translate3d(2.2%, 1.4%, 0) scale(0.97);
            opacity: 0.56;
          }
          50% {
            transform: translate3d(-3.2%, -1.8%, 0) scale(1.14);
            opacity: 1;
          }
          100% {
            transform: translate3d(2.2%, 1.4%, 0) scale(0.97);
            opacity: 0.56;
          }
        }
        .tickets-focus-wave {
          animation: tickets-focus-wave 8.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform, opacity;
        }
        .tickets-focus-wave-alt {
          animation: tickets-focus-wave-alt 11s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}

function getCheckoutUrl(url: string, fallbackUrl: string) {
  const safeUrl = isConfiguredCheckoutUrl(url) ? url : fallbackUrl;
  const usingFallback = safeUrl === fallbackUrl;
  return {
    href: safeUrl,
    ctaText: (defaultText: string) => (usingFallback ? "Request Payment Link" : defaultText),
  };
}

function isConfiguredCheckoutUrl(url: string) {
  try {
    const parsed = new URL(url);
    const hasHttpProtocol = parsed.protocol === "http:" || parsed.protocol === "https:";
    const looksLikePlaceholder = /(tu_link|example\.com|your-link|placeholder)/i.test(url);
    return hasHttpProtocol && !looksLikePlaceholder;
  } catch {
    return false;
  }
}

function SectionTitle({ icon, label, title }: { icon: React.ReactNode; label: string; title: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#7A858E]/55 bg-[linear-gradient(135deg,#F6EBDD_0%,#E7C697_100%)] px-4 py-2 text-[10px] uppercase tracking-[0.35em] font-black text-[#3E2B1C] w-fit shadow-[0_10px_25px_-18px_rgba(231,199,151,0.35)]">
        {icon}
        {label}
      </div>
      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#F6EBDD]">{title}</h3>
    </div>
  );
}

function BuyButton({ href, text, variant = "default" }: { href: string; text: string; variant?: "default" | "vip" }) {
  const isVip = variant === "vip";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl transition-all duration-300",
        "font-[var(--font-lexend)] uppercase tracking-[0.17em] font-black hover:-translate-y-0.5 hover:scale-[1.02]",
        isVip
          ? "border border-[#E7C697]/85 bg-[linear-gradient(135deg,#FAEAD2_0%,#EBC594_42%,#D19A58_100%)] px-10 py-5 text-base text-[#2D1E12] shadow-[0_20px_46px_-14px_rgba(0,0,0,0.9)] hover:shadow-[0_28px_62px_-12px_rgba(0,0,0,1)] animate-pulse"
          : "border border-[#AEBBC7]/75 bg-[linear-gradient(135deg,#EEF3F8_0%,#D5DEE7_48%,#BCC8D5_100%)] px-7 py-4 text-sm text-[#202D3C] shadow-[0_16px_36px_-14px_rgba(0,0,0,0.92)] hover:shadow-[0_22px_48px_-12px_rgba(0,0,0,1)]",
      ].join(" ")}
    >
      <span className="pointer-events-none absolute -inset-px rounded-xl border border-[#FFF5E5]/52" />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.65)_40%,transparent_70%)] opacity-75 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute -left-[25%] top-0 h-full w-[30%] skew-x-[-20deg] bg-[linear-gradient(90deg,transparent_0%,rgba(255,246,233,0.78)_50%,transparent_100%)] opacity-70 transition-transform duration-700 group-hover:translate-x-[430%]" />
      <span className="relative">{text}</span>
      <ArrowRight className="relative" size={16} />
    </a>
  );
}

function GhostButton({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center gap-2 rounded-xl border border-[#667585]/48 bg-[linear-gradient(135deg,#1D2832_0%,#151E27_100%)] px-5 py-3 text-[#EDE1D1] text-xs uppercase tracking-[0.17em] font-[var(--font-lexend)] font-black hover:brightness-110 transition-all shadow-[0_12px_24px_-16px_rgba(0,0,0,0.95)] hover:shadow-[0_16px_30px_-14px_rgba(0,0,0,1)]"
    >
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(115deg,transparent_0%,rgba(247,233,213,0.14)_45%,transparent_75%)] opacity-70 group-hover:opacity-100 transition-opacity" />
      {text}
      <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={14} />
    </a>
  );
}

function GuideItem({ step, title, text }: { step: string; title: string; text: string }) {
  return (
    <article className="rounded-xl border border-[#667585]/38 bg-[linear-gradient(135deg,rgba(26,35,44,0.92)_0%,rgba(18,25,32,0.94)_100%)] px-4 py-3 text-left shadow-[0_18px_35px_-26px_rgba(0,0,0,0.98)]">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E7C697]">Step {step}</p>
      <p className="mt-1 text-sm font-black uppercase tracking-[0.08em] text-[#F6EBDD]">{title}</p>
      <p className="mt-1.5 text-xs text-[#F3E8DA]/84 leading-relaxed font-[var(--font-lexend)] font-medium tracking-[-0.008em]">{text}</p>
    </article>
  );
}

function QuickLink({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[#AFBBC8]/65 bg-[linear-gradient(135deg,#EEF3F8_0%,#D5DEE7_100%)] px-5 py-2 text-[10px] font-[var(--font-lexend)] font-black uppercase tracking-[0.17em] text-[#1F2C3C] hover:brightness-105 transition-all shadow-[0_10px_18px_-14px_rgba(0,0,0,0.95)]"
    >
      {text}
    </a>
  );
}

function PassCard({
  title,
  price,
  vat,
  features,
  href,
  ctaText,
  badge,
}: {
  title: string;
  price: string;
  vat: string;
  features: string[];
  href: string;
  ctaText?: string;
  badge?: string;
}) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-[#6F7D8A]/50 bg-[linear-gradient(145deg,#1A242D_0%,#141D25_52%,#0F161D_100%)] p-6 md:p-7 shadow-[0_32px_80px_-38px_rgba(0,0,0,0.98)] transition-transform duration-300 hover:-translate-y-1 flex flex-col">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(85%_100%_at_0%_0%,rgba(243,232,218,0.14)_0%,transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(120deg,transparent_0%,rgba(231,199,151,0.07)_42%,transparent_79%)] opacity-80 group-hover:opacity-100 transition-opacity" />
      {badge ? (
        <span className="absolute right-4 top-4 rounded-full border border-[#E7C697]/70 bg-[linear-gradient(135deg,#FAE9CF_0%,#EBC28E_100%)] px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-[#3D2B1C] shadow-[0_10px_24px_-16px_rgba(0,0,0,0.95)]">
          {badge}
        </span>
      ) : null}
      <h4 className="relative z-10 text-2xl font-black uppercase tracking-tight text-[#F6EBDD]">{title}</h4>
      <p className="relative z-10 mt-3 text-3xl font-black text-[#F7E2C1]">{price} <span className="text-sm text-[#F3E8DA]/75">{vat}</span></p>
      <ul className="relative z-10 mt-5 space-y-2">
        {features.map((feature) => (
          <Feature key={feature} text={feature} tone="light" />
        ))}
      </ul>
      <div className="relative z-10 mt-auto pt-6">
        <BuyButton href={href} text={ctaText ?? "Secure Seat Now"} />
      </div>
    </article>
  );
}

function CompetitionCard({
  title,
  price,
  note,
  href,
  ctaText,
}: {
  title: string;
  price: string;
  note: string;
  href: string;
  ctaText?: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-[#6F7D8A]/50 bg-[linear-gradient(145deg,#1A242D_0%,#141D25_52%,#0F161D_100%)] p-7 shadow-[0_32px_80px_-38px_rgba(0,0,0,0.98)]">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(85%_100%_at_0%_0%,rgba(243,232,218,0.14)_0%,transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(120deg,transparent_0%,rgba(231,199,151,0.07)_42%,transparent_79%)]" />
      <h4 className="relative z-10 text-2xl font-black uppercase tracking-tight text-[#F6EBDD]">{title}</h4>
      <p className="relative z-10 mt-3 text-4xl font-black text-[#F7E2C1]">{price} <span className="text-sm text-[#F3E8DA]/75">+ VAT</span></p>
      <p className="relative z-10 mt-4 text-sm text-[#F3E8DA]/84 leading-relaxed">{note}</p>
      <div className="relative z-10 mt-6">
        <BuyButton href={href} text={ctaText ?? "Enter Championship Now"} />
      </div>
    </article>
  );
}

function Feature({ text, tone = "dark" }: { text: string; tone?: "dark" | "light" }) {
  const isLight = tone === "light";
  return (
    <li className={[
      "flex items-start gap-3 text-sm font-[var(--font-lexend)] font-medium tracking-[-0.008em]",
      isLight ? "text-[#F3E8DA]/92" : "text-[#F3E8DA]/92",
    ].join(" ")}>
      <span className={["mt-2 h-1.5 w-1.5 rounded-full", isLight ? "bg-[#E7C697]" : "bg-[#E7C697]"].join(" ")} />
      <span>{text}</span>
    </li>
  );
}
