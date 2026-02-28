import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const uniquePoints = [
  "Real-time RLRI — lightweight, deployable, no future leakage",
  "Two-stage design that learns and corrects bias",
  "Directly optimizes customer wait time — the metric that matters",
  "Full transparency via feature importance",
];

const TakeawaysSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-zomato-light" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🧠</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                What Makes This Unique
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              {uniquePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-zomato-red mt-0.5 shrink-0" />
                  <p className="text-muted-foreground text-base">{point}</p>
                </div>
              ))}
            </div>

            <Link
              to="/results"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full gradient-gold text-zomato-dark font-bold hover:shadow-lg hover:shadow-zomato-gold/30 transition-all duration-300"
            >
              Explore All Results
              <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeawaysSection;
