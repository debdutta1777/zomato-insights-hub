import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { performanceMetrics } from "@/data/chartData";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-red opacity-95" />
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 20% 50%, hsl(355, 90%, 65% / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(40, 52%, 58% / 0.2) 0%, transparent 50%)"
      }} />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-black/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-zomato-gold animate-pulse" />
          Zomathon 2025 — Hackathon Submission
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6"
        >
          Optimizing Rider
          <br />
          <span className="text-gradient-gold bg-clip-text" style={{
            background: "linear-gradient(135deg, hsl(40, 70%, 70%), hsl(45, 80%, 60%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Wait Times
          </span>
          <br />
          at Scale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12"
        >
          A data-driven approach to reducing rider wait times using ML-based ETA correction models
        </motion.p>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Reduction in Avg Wait", value: `${performanceMetrics.avgWait.reduction}%`, sub: `${performanceMetrics.avgWait.baseline} → ${performanceMetrics.avgWait.optimized} min` },
            { label: "Optimized Avg Wait", value: `${performanceMetrics.avgWait.optimized} min`, sub: "Down from 6.27 min" },
            { label: "P90 Error Reduction", value: `${performanceMetrics.p90Error.reduction}%`, sub: `${performanceMetrics.p90Error.baseline} → ${performanceMetrics.p90Error.optimized} min` },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card-dark rounded-2xl p-6 text-left border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/90 font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/50 text-xs">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
