import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AlertTriangle, Clock, Thermometer } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const cards = [
    {
      icon: Clock,
      title: "Long Rider Waits",
      desc: "Riders dispatched too early wait idle at restaurants, wasting time and reducing earnings.",
      gradient: "from-[hsl(355,78%,56%)] to-[hsl(355,85%,45%)]",
      glowColor: "hsl(355, 78%, 56%)",
      iconBg: "bg-zomato-red/15",
    },
    {
      icon: Thermometer,
      title: "Cold Food Delivery",
      desc: "Late dispatch means food sits ready, quality degrades before rider arrives.",
      gradient: "from-[hsl(40,52%,58%)] to-[hsl(35,60%,50%)]",
      glowColor: "hsl(40, 52%, 58%)",
      iconBg: "bg-zomato-gold/15",
    },
    {
      icon: AlertTriangle,
      title: "Noisy KPT Estimates",
      desc: "Current predictions have high variance — maximum waiting time error of 10.45 minutes makes dispatch unreliable.",
      gradient: "from-[hsl(152,60%,45%)] to-[hsl(152,50%,35%)]",
      glowColor: "hsl(152, 60%, 45%)",
      iconBg: "bg-zomato-green/15",
    },
  ];

  return (
    <section id="problem" className="relative py-28 px-6 section-warm overflow-hidden" ref={ref}>
      <FloatingParticles count={14} dark={false} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-20">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="group relative"
              >
                {/* Gradient border wrapper */}
                <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-b ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="relative glass-card rounded-2xl p-7 h-full hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400">
                  {/* Icon with glow */}
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
                    <div
                      className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur-xl"
                      style={{ background: `radial-gradient(circle, ${item.glowColor}, transparent)` }}
                    />
                    <div className={`relative w-full h-full rounded-2xl ${item.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-7 h-7 text-zomato-red" />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-zomato-red/30" />
            <span className="text-zomato-red/40 text-xs font-semibold tracking-widest uppercase">Impact</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-zomato-red/30" />
          </div>

          {/* Baseline vs Optimized comparison */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          >
            <div className="relative group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-zomato-red to-zomato-red/50 opacity-30 animate-pulse-glow" />
              <div className="relative glass-card px-10 py-8 rounded-2xl text-center">
                <div className="text-sm font-semibold text-zomato-red mb-2">Baseline Wait</div>
                <div className="text-5xl font-display font-bold text-foreground">6.28</div>
                <div className="text-sm text-muted-foreground mt-1">minutes</div>
              </div>
            </div>

            {/* Reduction badge */}
            <div className="flex flex-col items-center gap-2">
              <div className="hidden sm:block h-px w-12 bg-gradient-to-r from-zomato-red/40 to-zomato-green/40" style={{ background: 'linear-gradient(90deg, hsl(355,78%,56%,0.4), hsl(152,60%,45%,0.4))' }} />
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-zomato-red to-zomato-green text-white text-sm font-bold shadow-lg"
              >
                79.3% ↓
              </motion.div>
              <div className="hidden sm:block h-px w-12" style={{ background: 'linear-gradient(90deg, hsl(355,78%,56%,0.4), hsl(152,60%,45%,0.4))' }} />
            </div>

            <div className="relative group">
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-zomato-green to-zomato-green/50 opacity-30" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
              <div className="relative glass-card px-10 py-8 rounded-2xl text-center" style={{ boxShadow: '0 0 50px -12px hsl(152, 60%, 45%, 0.25)' }}>
                <div className="text-sm font-semibold text-zomato-green mb-2">Optimized Wait</div>
                <div className="text-5xl font-display font-bold text-foreground">1.30</div>
                <div className="text-sm text-muted-foreground mt-1">minutes</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
