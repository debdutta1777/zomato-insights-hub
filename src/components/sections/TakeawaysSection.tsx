import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const uniquePoints = [
  "Real-time RLRI — lightweight, deployable, no future leakage",
  "Two-stage design that learns and corrects bias",
  "Directly optimizes customer wait time — the metric that matters",
  "Full transparency via feature importance",
];

const TakeawaysSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 px-6 section-dark-glow overflow-hidden" ref={ref}>
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card-dark rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🧠</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                What Makes This Unique
              </h2>
            </div>

            <div className="space-y-4">
              {uniquePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zomato-gold mt-0.5 shrink-0" />
                  <p className="text-white/70 text-base">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeawaysSection;
