import Navbar from "@/components/Navbar";
import PerformanceSection from "@/components/sections/PerformanceSection";
import ChartsSection from "@/components/sections/ChartsSection";
import FooterSection from "@/components/sections/FooterSection";
import FloatingParticles from "@/components/FloatingParticles";
import { ExternalLink } from "lucide-react";

const Results = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        {/* Results hero */}
        <section className="relative py-20 px-6 section-dark overflow-hidden">
          <FloatingParticles count={12} dark />
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
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-6">
              Interactive visualizations and performance metrics from our optimization model
            </p>
            <a
              href="https://colab.research.google.com/drive/1zfzfIIslQnuB0_TxdpjageekwzUO26TO?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zomato-red text-white font-semibold hover:bg-zomato-red/90 transition-colors shadow-lg shadow-zomato-red/25"
            >
              <ExternalLink className="w-4 h-4" />
              View Full Notebook on Colab
            </a>
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
