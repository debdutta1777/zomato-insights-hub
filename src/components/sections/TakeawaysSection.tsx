import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Clock, BarChart3, Brain, ArrowDownRight, Shield } from "lucide-react";

const takeaways = [
  {
    icon: ArrowDownRight,
    title: "79.25% Reduction",
    desc: "Average rider wait time dropped from 6.27 min to just 1.30 min.",
    color: "gradient-red",
  },
  {
    icon: BarChart3,
    title: "Tighter Error Bounds",
    desc: "P50 and P90 errors reduced by ~75%, making predictions far more reliable.",
    color: "gradient-gold",
  },
  {
    icon: Brain,
    title: "Feature-Driven Insights",
    desc: "base_kpt and prev_noisy_kpt are the strongest predictors, driving 57% of model accuracy.",
    color: "gradient-red",
  },
  {
    icon: Clock,
    title: "Hour-Agnostic Improvement",
    desc: "Consistent wait time reduction across all 24 hours, including peak dinner hours.",
    color: "gradient-gold",
  },
  {
    icon: Shield,
    title: "Robust Correction",
    desc: "The correction model generalizes well, with minimal overfitting across train/test splits.",
    color: "gradient-red",
  },
  {
    icon: CheckCircle,
    title: "Production-Ready",
    desc: "Lightweight model with low latency, suitable for real-time deployment at scale.",
    color: "gradient-gold",
  },
];

const TakeawaysSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-zomato-light" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zomato-gold/20 text-zomato-gold text-sm font-semibold mb-4">
            Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Key Takeaways
          </h2>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {takeaways.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TakeawaysSection;
