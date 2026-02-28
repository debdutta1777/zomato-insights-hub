import Navbar from "@/components/Navbar";
import PerformanceSection from "@/components/sections/PerformanceSection";
import ChartsSection from "@/components/sections/ChartsSection";
import FooterSection from "@/components/sections/FooterSection";
import FloatingParticles from "@/components/FloatingParticles";

const Results = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        {/* Results hero */}
        <section className="relative py-20 px-6 section-dark overflow-hidden">
          <FloatingParticles count={12} dark />
          {/* Radial glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[400px] opacity-15" style={{ background: 'radial-gradient(ellipse, hsl(355, 78%, 56%), transparent 70%)' }} />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-zomato-gold/20 text-zomato-gold text-sm font-semibold mb-4">
              Analysis & Results
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              Our Findings
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Interactive visualizations and performance metrics from our optimization model
            </p>
          </div>
        </section>
        <PerformanceSection />
        <ChartsSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Results;
