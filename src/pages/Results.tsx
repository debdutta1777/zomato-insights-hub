import Navbar from "@/components/Navbar";
import PerformanceSection from "@/components/sections/PerformanceSection";
import ChartsSection from "@/components/sections/ChartsSection";
import FooterSection from "@/components/sections/FooterSection";

const Results = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        {/* Results hero */}
        <section className="py-16 px-6 section-dark">
          <div className="max-w-6xl mx-auto text-center">
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
