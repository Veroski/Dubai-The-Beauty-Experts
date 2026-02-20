import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TicketsSection } from "@/components/TicketsSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { EventMediaSection } from "@/components/EventMediaSection";
import { ProgramArchitectureSection } from "@/components/ProgramArchitectureSection";
import { StrategicGrowthSection } from "@/components/StrategicGrowthSection";
import { ParamedicalPMUSection } from "@/components/ParamedicalPMUSection";
import { DualApexSection } from "@/components/DualApexSection";
import { FAQSection } from "@/components/FAQSection";
import { StickyMobilePay } from "@/components/StickyMobilePay";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <EventMediaSection />
      <SpeakersSection />
      <ProgramArchitectureSection />
      <StrategicGrowthSection />
      <ParamedicalPMUSection />
      <DualApexSection />
      <TicketsSection />
      <FAQSection />

      {/* Mobile Sticky Button */}
      <StickyMobilePay />
    </main>
  );
}
