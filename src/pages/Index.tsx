import HeroSection from "@/components/sections/HeroSection";
import PerformanceSection from "@/components/sections/PerformanceSection";
import ChartsSection from "@/components/sections/ChartsSection";
import MethodologySection from "@/components/sections/MethodologySection";
import TakeawaysSection from "@/components/sections/TakeawaysSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <PerformanceSection />
      <ChartsSection />
      <MethodologySection />
      <TakeawaysSection />
      <FooterSection />
    </div>
  );
};

export default Index;
