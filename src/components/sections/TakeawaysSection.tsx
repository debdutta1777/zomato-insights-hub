import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const uniquePoints = [
  "Real-time RLRI — lightweight, deployable, no future leakage",
  "Two-stage design that learns and corrects bias",
  "Directly optimizes customer wait time — the metric that matters",
  "Full transparency via feature importance",
];

const TakeawaysSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-28 px-6 section-dark-glow overflow-hidden" ref={ref}>
      <FloatingParticles count={12} dark />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Gold accent glow behind card */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, hsl(40, 52%, 58%), transparent)' }} />
          </div>

          <div className="relative">
            {/* Gradient border */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-zomato-gold/40 via-zomato-gold/20 to-zomato-red/20" />
            
            <div className="relative glass-card-dark rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">🧠</span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
                  What Makes This Unique
                </h2>
              </div>

              <div className="space-y-0">
                {uniquePoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.4 }}
                  >
                    <div className="flex items-start gap-3 py-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                      >
                        <div className="w-6 h-6 rounded-full bg-zomato-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-zomato-gold" />
                        </div>
                      </motion.div>
                      <p className="text-white/70 text-base">{point}</p>
                    </div>
                    {i < uniquePoints.length - 1 && (
                      <div className="h-px bg-white/5 ml-9" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeawaysSection;
