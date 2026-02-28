import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { performanceMetrics } from "@/data/chartData";
import FloatingParticles from "@/components/FloatingParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Dark animated gradient background */}
      <div className="absolute inset-0 bg-zomato-dark" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, hsl(355, 78%, 56% / 0.5) 0%, transparent 40%), radial-gradient(circle at 80% 70%, hsl(40, 52%, 58% / 0.3) 0%, transparent 40%), radial-gradient(circle at 50% 50%, hsl(355, 78%, 40% / 0.2) 0%, transparent 60%)",
        }}
      />
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating food particles */}
      <FloatingParticles count={16} dark />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Zomato branding */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-display text-3xl md:text-4xl font-bold italic text-white/90 tracking-tight">
            zomato
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/80 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-zomato-gold animate-pulse" />
          Zomathon 2025 — Hackathon Submission
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold text-white leading-[1.05] mb-4"
        >
          KPT Prediction
          <br />
          <span className="text-gradient-gold">&amp; Smart Dispatch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10"
        >
          Optimizing delivery dispatch and predicting kitchen prep times with core Machine Learning
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#timeline"
            className="group px-8 py-3.5 rounded-full gradient-gold text-zomato-dark font-bold text-base hover:shadow-lg hover:shadow-zomato-gold/30 transition-all duration-300 flex items-center gap-2"
          >
            Explore Our Pipeline
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#problem"
            className="px-8 py-3.5 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-300"
          >
            The Problem
          </a>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden max-w-3xl mx-auto"
        >
          {[
            { value: `${performanceMetrics.avgWait.reduction}%`, label: "WAIT REDUCTION" },
            { value: `${performanceMetrics.p50Error.reduction}%`, label: "P50 IMPROVED" },
            { value: "15K+", label: "ORDERS SIMULATED" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm px-8 py-6 text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/50 text-xs font-semibold tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
