import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Zap, Brain, SplitSquareVertical, Truck, BarChart3, Palette } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const accentColors = [
  { border: "border-t-zomato-red", iconBg: "bg-zomato-red/20", iconColor: "text-zomato-red" },
  { border: "border-t-zomato-gold", iconBg: "bg-zomato-gold/20", iconColor: "text-zomato-gold" },
  { border: "border-t-zomato-green", iconBg: "bg-zomato-green/20", iconColor: "text-zomato-green" },
  { border: "border-t-blue-500", iconBg: "bg-blue-500/20", iconColor: "text-blue-400" },
  { border: "border-t-purple-500", iconBg: "bg-purple-500/20", iconColor: "text-purple-400" },
  { border: "border-t-orange-500", iconBg: "bg-orange-500/20", iconColor: "text-orange-400" },
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
      { value: "45.5%", label: "P50 Error ↓" },
      { value: "40.1%", label: "P90 Error ↓" },
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
    <section id="features" className="relative py-24 px-6 section-dark-glow overflow-hidden" ref={ref}>
      <FloatingParticles count={10} dark />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zomato-gold/15 text-zomato-gold text-sm font-semibold mb-4">
            Key Innovations
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            What Powers Our Solution
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {features.map((f, i) => {
            const color = accentColors[i % accentColors.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`glass-card-dark rounded-2xl border-t-2 ${color.border} p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl ${color.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <f.icon className={`w-6 h-6 ${color.iconColor}`} />
                </div>
                <h3 className={`font-display font-bold text-lg ${color.iconColor} mb-2`}>{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{f.desc}</p>

                {f.detail && !f.isMetric && (
                  <div className="rounded-xl bg-white/5 px-4 py-3 text-xs font-mono text-white/50 whitespace-pre-line mb-3">
                    {f.detail}
                  </div>
                )}

                {f.isMetric && f.metrics && (
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {f.metrics.map((m, j) => (
                      <div key={j} className="rounded-xl bg-zomato-red/10 px-3 py-2 text-center">
                        <div className="text-lg font-display font-bold text-zomato-red">{m.value}</div>
                        <div className="text-xs text-white/50">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {f.tags && f.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {f.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
