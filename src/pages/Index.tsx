import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import MethodologySection from "@/components/sections/MethodologySection";
import TimelineSection from "@/components/sections/TimelineSection";
import TakeawaysSection from "@/components/sections/TakeawaysSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <MethodologySection />
      <TimelineSection />
      <TakeawaysSection />
      <FooterSection />
    </div>
  );
};

export default Index;
