import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, Clock, Thermometer } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problem" className="relative py-24 px-6 section-warm overflow-hidden" ref={ref}>
      <FloatingParticles count={8} dark={false} />

      <div className="relative z-10 max-w-6xl mx-auto">
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
                accent: "border-l-zomato-red",
                glow: "group-hover:shadow-zomato-red/20",
              },
              {
                icon: Thermometer,
                title: "Cold Food Delivery",
                desc: "Late dispatch means food sits ready, quality degrades before rider arrives.",
                accent: "border-l-zomato-gold",
                glow: "group-hover:shadow-zomato-gold/20",
              },
              {
                icon: AlertTriangle,
                title: "Noisy KPT Estimates",
                desc: "Current predictions have high variance — P90 error of 10.45 minutes makes dispatch unreliable.",
                accent: "border-l-zomato-green",
                glow: "group-hover:shadow-zomato-green/20",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group glass-card rounded-2xl border-l-4 ${item.accent} p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-14 h-14 rounded-2xl bg-zomato-red/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-zomato-red" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Baseline vs Optimized comparison */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="glass-card px-8 py-6 rounded-2xl border-l-4 border-l-zomato-red text-center glow-red">
              <div className="text-sm font-semibold text-zomato-red mb-1">Baseline Wait</div>
              <div className="text-4xl font-display font-bold text-foreground">6.28 min</div>
            </div>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-3xl font-bold text-zomato-red"
            >
              →
            </motion.div>
            <div className="glass-card px-8 py-6 rounded-2xl border-l-4 border-l-zomato-green text-center" style={{ boxShadow: '0 0 40px -12px hsl(152, 60%, 45%, 0.3)' }}>
              <div className="text-sm font-semibold text-zomato-green mb-1">Optimized Wait</div>
              <div className="text-4xl font-display font-bold text-foreground">1.30 min</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
