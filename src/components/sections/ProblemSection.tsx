import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, Clock, Thermometer } from "lucide-react";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problem" className="py-24 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-zomato-red/10 text-zomato-red text-sm font-semibold mb-4">
              The Challenge
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Problem Statement
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Accurate Kitchen Preparation Time (KPT) is critical for rider dispatch. Current noisy KPT leads to long rider waits or cold food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Clock,
                title: "Long Rider Waits",
                desc: "Riders dispatched too early wait idle at restaurants, wasting time and reducing earnings.",
              },
              {
                icon: Thermometer,
                title: "Cold Food Delivery",
                desc: "Late dispatch means food sits ready, quality degrades before rider arrives.",
              },
              {
                icon: AlertTriangle,
                title: "Noisy KPT Estimates",
                desc: "Current predictions have high variance — P90 error of 10.45 minutes makes dispatch unreliable.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-zomato-red/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-zomato-red/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-zomato-red" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Baseline vs Optimized comparison */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="px-8 py-5 rounded-2xl border-2 border-zomato-red/30 bg-zomato-red/5 text-center">
              <div className="text-sm font-semibold text-zomato-red mb-1">Baseline Wait</div>
              <div className="text-3xl font-display font-bold text-foreground">6.28 min</div>
            </div>
            <div className="text-2xl font-bold text-muted-foreground">→</div>
            <div className="px-8 py-5 rounded-2xl border-2 border-zomato-green/30 bg-zomato-green/5 text-center">
              <div className="text-sm font-semibold text-zomato-green mb-1">Optimized Wait</div>
              <div className="text-3xl font-display font-bold text-foreground">1.30 min</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
