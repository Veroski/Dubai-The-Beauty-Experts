import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SpeakersSection } from "@/components/SpeakersSection";
import { ProgramArchitectureSection } from "@/components/ProgramArchitectureSection";
import { StrategicGrowthSection } from "@/components/StrategicGrowthSection";
import { MysteryCoachSection } from "@/components/CoachSection";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SpeakersSection />
      <ProgramArchitectureSection />
      <StrategicGrowthSection />
      <MysteryCoachSection />
    </main>
  );
}
