import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Zap, Brain, SplitSquareVertical, Truck, BarChart3, Palette } from "lucide-react";

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
    detail: "Baseline: send immediately → 6.28 min wait\nOptimized: delay by max(0, adjKPT – travel) → 1.30 min wait",
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
    <section id="features" className="py-24 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zomato-gold/15 text-zomato-gold text-sm font-semibold mb-4">
            Key Innovations
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            What Powers Our Solution
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 hover:shadow-xl hover:border-zomato-red/20 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-zomato-red/10 flex items-center justify-center mb-4 group-hover:bg-zomato-red/20 transition-colors">
                <f.icon className="w-5 h-5 text-zomato-red" />
              </div>
              <h3 className="font-display font-bold text-lg text-zomato-red mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{f.desc}</p>

              {f.detail && !f.isMetric && (
                <div className="rounded-xl bg-muted/50 px-4 py-3 text-xs font-mono text-muted-foreground whitespace-pre-line mb-3">
                  {f.detail}
                </div>
              )}

              {f.isMetric && f.metrics && (
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {f.metrics.map((m, j) => (
                    <div key={j} className="rounded-xl bg-zomato-red/5 px-3 py-2 text-center">
                      <div className="text-lg font-display font-bold text-zomato-red">{m.value}</div>
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {f.tags && f.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {f.tags.map((tag, j) => (
                    <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
