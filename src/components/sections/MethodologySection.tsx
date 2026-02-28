import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Zap, Brain, SplitSquareVertical, Truck, BarChart3, Palette } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const accentColors = [
  { border: "from-[hsl(355,78%,56%)] to-[hsl(355,85%,45%)]", iconBg: "bg-zomato-red/20", iconColor: "text-zomato-red", glowColor: "hsl(355,78%,56%)", tagBg: "bg-zomato-red/15 text-zomato-red" },
  { border: "from-[hsl(40,52%,58%)] to-[hsl(35,60%,50%)]", iconBg: "bg-zomato-gold/20", iconColor: "text-zomato-gold", glowColor: "hsl(40,52%,58%)", tagBg: "bg-zomato-gold/15 text-zomato-gold" },
  { border: "from-[hsl(152,60%,45%)] to-[hsl(152,50%,35%)]", iconBg: "bg-zomato-green/20", iconColor: "text-zomato-green", glowColor: "hsl(152,60%,45%)", tagBg: "bg-zomato-green/15 text-zomato-green" },
  { border: "from-[hsl(217,91%,60%)] to-[hsl(217,80%,50%)]", iconBg: "bg-blue-500/20", iconColor: "text-blue-400", glowColor: "hsl(217,91%,60%)", tagBg: "bg-blue-500/15 text-blue-400" },
  { border: "from-[hsl(270,60%,60%)] to-[hsl(270,50%,50%)]", iconBg: "bg-purple-500/20", iconColor: "text-purple-400", glowColor: "hsl(270,60%,60%)", tagBg: "bg-purple-500/15 text-purple-400" },
  { border: "from-[hsl(25,95%,55%)] to-[hsl(25,85%,45%)]", iconBg: "bg-orange-500/20", iconColor: "text-orange-400", glowColor: "hsl(25,95%,55%)", tagBg: "bg-orange-500/15 text-orange-400" },
];

const features = [
  {
    icon: Zap,
    title: "RLRI – Rush Level Risk Index",
    desc: "A novel real-time metric that quantifies kitchen congestion using order density and noisy inflation.",
    detail: "RLRI = 0.6·density_ratio + 0.4·noisy_inflation",
    tags: ["Backward-looking", "No future data", "Live at prediction"],
  },
  {
    icon: Brain,
    title: "Two-Stage Modeling",
    desc: "First model mimics the biased estimator; second corrects its error using RLRI and lag features.",
    detail: "Base Model → Correction",
    tags: ["Robust", "Interpretable", "LightGBM"],
  },
  {
    icon: SplitSquareVertical,
    title: "Strict Temporal Split",
    desc: "All features use only past data. Chronological split (80/20) mirrors real-world deployment.",
    detail: "Train (80%) | Test (20%)",
    tags: ["No leakage", "Production-ready"],
  },
  {
    icon: Truck,
    title: "Dispatch Simulation",
    desc: "Optimized dispatch delays rider so they arrive exactly when food is ready.",
    detail: "Baseline: 6.28 min → Optimized: 1.30 min wait",
    tags: [],
  },
  {
    icon: BarChart3,
    title: "Dramatic Impact",
    desc: "Significant improvements across all key metrics with production-grade model performance.",
    isMetric: true,
    metrics: [
      { value: "79.3%", label: "Wait ↓" },
      { value: "45.5%", label: "Avg Wait Error ↓" },
      { value: "40.1%", label: "Max Wait Error ↓" },
    ],
    tags: [],
  },
  {
    icon: Palette,
    title: "Visual Storytelling",
    desc: "9 custom plots make every improvement undeniable — from wait distributions to feature importance.",
    tags: [],
  },
];

const MethodologySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="methodology" className="relative py-28 px-6 section-dark-glow overflow-hidden" ref={ref}>
      <FloatingParticles count={16} dark />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zomato-gold/15 text-zomato-gold text-sm font-semibold mb-4">
            Key Innovations
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            What Powers Our Solution
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {features.map((f, i) => {
            const color = accentColors[i % accentColors.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative"
              >
                {/* Gradient border */}
                <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-b ${color.border} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </div>

                <div
                  className="relative glass-card-dark rounded-2xl p-7 h-full transition-all duration-400 group-hover:-translate-y-1"
                  style={{ transition: 'box-shadow 0.4s, transform 0.4s' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px -10px ${color.glowColor}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Icon with glow */}
                  <div className="relative w-14 h-14 mb-5">
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-lg"
                      style={{ background: `radial-gradient(circle, ${color.glowColor}, transparent)` }}
                    />
                    <div className={`relative w-full h-full rounded-xl ${color.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <f.icon className={`w-6 h-6 ${color.iconColor}`} />
                    </div>
                  </div>

                  <h3 className={`font-display font-bold text-lg ${color.iconColor} mb-2`}>{f.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">{f.desc}</p>

                  {f.detail && !f.isMetric && (
                    <div className="rounded-xl bg-white/5 border border-white/5 px-4 py-3 text-xs font-mono text-white/50 whitespace-pre-line mb-3">
                      {f.detail}
                    </div>
                  )}

                  {f.isMetric && f.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {f.metrics.map((m, j) => (
                        <div key={j} className="rounded-xl bg-zomato-red/10 border border-zomato-red/10 px-3 py-2 text-center">
                          <div className="text-lg font-display font-bold text-zomato-red">{m.value}</div>
                          <div className="text-xs text-white/50">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {f.tags && f.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {f.tags.map((tag, j) => (
                        <span key={j} className={`text-xs px-2.5 py-0.5 rounded-full ${color.tagBg}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
