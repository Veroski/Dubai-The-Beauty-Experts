"use client";

import React from "react";

const GOLD = "#C9A24A";
const INK = "#241D12";

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

const FAQS: FAQItem[] = [
  {
    q: "Where and when exactly is the event taking place?",
    a: (
      <>
        The event will take place at the <strong>Arjaan by Rotana Media City, Dubai</strong>.
        The dates are scheduled for <strong>October 15–17, 2026</strong>.
        This is the first time this prestigious Spanish event crosses borders into the United Arab Emirates.
      </>
    ),
  },
  {
    q: "What is the schedule for the 3 days?",
    a: (
      <ul className="list-disc ml-5 space-y-2">
        <li><strong>October 15:</strong> SMP, PMU, Microblading, and Areola Championship (Model / Latex).</li>
        <li><strong>October 16:</strong> Conferences and uninterrupted live speaker demonstrations.</li>
        <li><strong>October 17:</strong> Continuation of live demonstrations and closing with the grand <strong>Gala Dinner</strong> and awards ceremony.</li>
      </ul>
    ),
  },
  {
    q: "What is the ticket price and what does it include?",
    a: (
      <>
        We are offering a <strong>pre-sale price of €1000 + VAT</strong> (valid until February 2026). The regular price will be €1500 + VAT.
        The pass is <strong>All-Inclusive</strong>: access to conferences, participation in one championship nomination, 2 certificates, official magazine, gift bag, coffee breaks, lunches (October 16 & 17), and the Gala Dinner.
      </>
    ),
  },
  {
    q: "Are payment plans available?",
    a: (
      <>
        Yes, we offer flexible plans to make your attendance easier:
        <ul className="mt-2 space-y-1">
          <li>• <strong>2 installments:</strong> €500 reservation + €500 final payment.</li>
          <li>• <strong>3 installments:</strong> €300 reservation + payments in March and July.</li>
          <li>• <strong>4 installments:</strong> €300 reservation + payments in March, July, and August.</li>
        </ul>
      </>
    ),
  },
  {
    q: "Can I cancel or transfer my ticket?",
    a: (
      <>
        Ticket purchases are <strong>non-refundable</strong>. However,
        we understand that unexpected situations may arise, so <strong>ticket resale is allowed</strong>,
        subject to an administrative processing fee.
      </>
    ),
  },
  {
    q: "How can I get more information or technical assistance?",
    a: (
      <>
        You can contact <strong>Patricia Songel</strong> directly at
        <strong className="ml-1">+34 647 12 24 70</strong> for personalized assistance regarding registrations and additional nominations (€200).
      </>
    ),
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-28 md:scroll-mt-32 overflow-hidden py-24 md:py-32 bg-[#FDFCF9]"
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1100px_circle_at_50%_10%,rgba(201,162,74,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,rgba(36,29,18,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(36,29,18,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <div className="text-[13px] tracking-[0.4em] uppercase font-bold text-[#B48B2A]">
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight text-[#241D12]">
            Everything you need to know about <br />
            <span className="font-serif italic text-[#C9A24A]">The Beauty Experts Dubai</span>
          </h2>
          <div className="mt-8 h-px w-20 mx-auto bg-[#C9A24A]/30" />
        </header>

        <div className="mt-16 space-y-4">
          {FAQS.map((item, idx) => (
            <FAQRow key={idx} item={item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#8B7E6D] uppercase tracking-widest font-medium">
            Arjaan by Rotana Media City · October 15–17, 2026
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQRow({ item }: { item: FAQItem }) {
  return (
    <details className="group border border-[#C9A24A]/20 bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#C9A24A]/40">
      <summary className="list-none cursor-pointer p-6 md:p-8 flex items-center justify-between gap-4 select-none">
        <span className="text-lg md:text-xl font-medium text-[#241D12] pr-4">
          {item.q}
        </span>
        <div className="relative flex-shrink-0 w-6 h-6">
          <div className="absolute inset-0 bg-[#C9A24A] rotate-90 group-open:rotate-180 transition-transform duration-300 h-[2px] w-6 top-1/2 -translate-y-1/2" />
          <div className="absolute inset-0 bg-[#C9A24A] group-open:opacity-0 transition-opacity duration-300 h-6 w-[2px] left-1/2 -translate-x-1/2" />
        </div>
      </summary>
      <div className="px-6 pb-8 md:px-8 md:pb-10 text-[#4A4238]/90 leading-relaxed text-base md:text-lg border-t border-[#C9A24A]/10 pt-4">
        {item.a}
      </div>
    </details>
  );
}
