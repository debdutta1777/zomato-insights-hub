import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
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

      {/* Centered CTA after timeline */}
      <section className="py-16 px-6 section-warm-gold">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/results"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-full gradient-gold text-zomato-dark font-bold text-lg hover:shadow-xl hover:shadow-zomato-gold/30 transition-all duration-300 animate-pulse-glow"
          >
            Explore All Results
            <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <TakeawaysSection />
      <FooterSection />
    </div>
  );
};

export default Index;
