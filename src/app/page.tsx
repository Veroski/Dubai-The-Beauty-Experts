import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { TicketsSection } from "@/components/TicketsSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { ProgramArchitectureSection } from "@/components/ProgramArchitectureSection";
import { StrategicGrowthSection } from "@/components/StrategicGrowthSection";
import { MysteryCoachSection } from "@/components/CoachSection";
import { FAQSection } from "@/components/FAQSection";
import { StickyMobilePay } from "@/components/StickyMobilePay";
import { SectionCTA } from "@/components/SectionCTA";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <SpeakersSection />
      <ProgramArchitectureSection />
      <StrategicGrowthSection />
      <MysteryCoachSection />
      <TicketsSection />
      <FAQSection />

      {/* Mobile Sticky Button */}
      <StickyMobilePay />
    </main>
  );
}
