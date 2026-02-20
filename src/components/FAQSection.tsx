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
        <li><strong>October 16:</strong> Congress sessions and uninterrupted live speaker demonstrations.</li>
        <li><strong>October 17:</strong> Continuation of live demonstrations and closing with the grand <strong>Gala Dinner</strong> and awards ceremony.</li>
      </ul>
    ),
  },
  {
    q: "What is the ticket price and what does it include?",
    a: (
      <>
        Current reference early bird for the 3-day pass: <strong>€1,000 + VAT</strong>.
        The price follows a monthly escalation structure: <strong>€1,100</strong>, <strong>€1,200</strong>, reaching <strong>€1,500 + VAT</strong> closer to the event.
        Both <strong>single payment</strong> and flexible <strong>installment plans</strong> are available.
        Your pass includes: Full congress access, one championship nomination, dual certification, official kit, magazine, coffee breaks, lunches, and the <strong>exclusive Gala Dinner</strong>.
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
    q: "Can I register for additional championship nominations?",
    a: (
      <>
        Yes. Your ticket includes <strong>one championship nomination</strong>. Additional nominations are available for <strong>€200 each</strong>.
        Contact <strong>Patricia Songel</strong> at <strong>+34 647 12 24 70</strong> for registration.
      </>
    ),
  },
  {
    q: "How can I get more information or technical assistance?",
    a: (
      <>
        You can contact <strong>Patricia Songel</strong> directly at
        <strong className="ml-1">+34 647 12 24 70</strong> for personalized assistance regarding registrations, payments, and any questions about the event.
      </>
    ),
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-28 md:scroll-mt-32 overflow-hidden py-24 md:py-32 bg-[#161C22]"
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#12181D_0%,#18222C_58%,#1F2B35_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(72%_125%_at_50%_5%,rgba(243,249,255,0.2)_0%,rgba(243,249,255,0.07)_36%,rgba(243,249,255,0)_68%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.22)_28%,rgba(0,0,0,0.14)_50%,rgba(0,0,0,0.22)_72%,rgba(0,0,0,0.48)_100%)]" />
        <div className="absolute inset-0 opacity-[0.14] bg-[repeating-linear-gradient(168deg,rgba(228,237,247,0.12)_0px,rgba(228,237,247,0.12)_1px,rgba(255,255,255,0)_10px,rgba(255,255,255,0)_22px)]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <div className="text-[13px] tracking-[0.4em] uppercase font-bold text-[#E7C697]">
            Frequently Asked Questions
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight text-[#F6EBDD]">
            Everything you need to know about <br />
            <span className="font-serif italic text-[#E7C697]">The Beauty Experts Dubai</span>
          </h2>
          <div className="mt-8 h-px w-20 mx-auto bg-[#E7C697]/35" />
        </header>

        <div className="mt-16 space-y-4">
          {FAQS.map((item, idx) => (
            <FAQRow key={idx} item={item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-[#F3E8DA]/70 uppercase tracking-widest font-medium">
            Arjaan by Rotana Media City · October 15–17, 2026
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQRow({ item }: { item: FAQItem }) {
  return (
    <details className="group border border-[#6F7D8A]/40 bg-[linear-gradient(145deg,#1A242D_0%,#141D25_52%,#0F161D_100%)] backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#E7C697]/55">
      <summary className="list-none cursor-pointer p-6 md:p-8 flex items-center justify-between gap-4 select-none">
        <span className="text-lg md:text-xl font-medium text-[#F6EBDD] pr-4">
          {item.q}
        </span>
        <div className="relative flex-shrink-0 w-6 h-6">
          <div className="absolute inset-0 bg-[#E7C697] rotate-90 group-open:rotate-180 transition-transform duration-300 h-[2px] w-6 top-1/2 -translate-y-1/2" />
          <div className="absolute inset-0 bg-[#E7C697] group-open:opacity-0 transition-opacity duration-300 h-6 w-[2px] left-1/2 -translate-x-1/2" />
        </div>
      </summary>
      <div className="px-6 pb-8 md:px-8 md:pb-10 text-[#F3E8DA]/88 leading-relaxed text-base md:text-lg border-t border-[#6F7D8A]/24 pt-4">
        {item.a}
      </div>
    </details>
  );
}
