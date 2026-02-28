import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cpu, GitBranch, Database, Layers } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Collection",
    desc: "Historical order data with actual vs predicted kitchen prep times, rider assignments, and delivery metrics.",
  },
  {
    icon: Layers,
    title: "Feature Engineering",
    desc: "Key features: base_kpt, prev_noisy_kpt, hour_of_day, day_of_week, restaurant_prep_time, distance_km, weather & traffic indices.",
  },
  {
    icon: Cpu,
    title: "ML Correction Model",
    desc: "Gradient-boosted model trained to predict ETA correction offsets, reducing systematic biases in wait time estimates.",
  },
  {
    icon: GitBranch,
    title: "RLRI Integration",
    desc: "Real-time Learnable Rider Intelligence adapts predictions based on recent order patterns and rider behavior.",
  },
];

const MethodologySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zomato-red/10 text-zomato-red text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Methodology
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A systematic approach to correcting ETA predictions and minimizing rider idle time
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="glass-card rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl gradient-red flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-bold text-zomato-gold mb-2">STEP {i + 1}</div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
