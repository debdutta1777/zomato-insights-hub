import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";

const steps = [
  { emoji: "🍕", title: "Dataset Simulation", desc: "Generated 15,000 orders with realistic restaurant biases.", color: "text-zomato-red" },
  { emoji: "🍔", title: "Data Cleaning", desc: "Removed invalid timestamps, types, dropped NaNs.", color: "text-pink-500" },
  { emoji: "🥟", title: "Feature Engineering", desc: "Time features, cyclical encoding, rolling stats. No leakage.", color: "text-blue-500" },
  { emoji: "🍜", title: "Baseline Model", desc: "LightGBM predicts noisy KPT using basic features.", color: "text-orange-500" },
  { emoji: "🍛", title: "RLRI (Rush Index)", desc: "Index captures kitchen congestion in real time.", color: "text-zomato-green" },
  { emoji: "🌮", title: "Error Correction", desc: "Second model predicts error using RLRI & lag features.", color: "text-yellow-500" },
  { emoji: "🍰", title: "Dispatch Simulation", desc: "Rider sent directly when food is ready. Zero wait.", color: "text-zomato-red" },
  { emoji: "🍣", title: "Wait Reduction", desc: "Average wait drops from 6.28 to 1.30 minutes.", color: "text-purple-500" },
  { emoji: "🎯", title: "Final Impact", desc: "P50 error drops 45.5%. Production model ready.", color: "text-teal-500" },
];

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="timeline" className="relative py-24 px-6 section-warm-gold overflow-hidden" ref={ref}>
      <FloatingParticles count={8} dark={false} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zomato-red/10 text-zomato-red text-sm font-semibold mb-4">
            Pipeline
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
            <span className="italic text-gradient-red">Step-by-Step</span> Implementation
          </h2>
          <p className="text-muted-foreground text-lg">
            How we built the solution — from data to impact
          </p>
        </div>

        <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Curved SVG path */}
          <svg
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-16 md:w-24"
            viewBox="0 0 80 1000"
            preserveAspectRatio="none"
            fill="none"
            style={{ height: '100%' }}
          >
            <path
              d="M40 0 C60 50, 20 100, 40 150 C60 200, 20 250, 40 300 C60 350, 20 400, 40 450 C60 500, 20 550, 40 600 C60 650, 20 700, 40 750 C60 800, 20 850, 40 900 C60 950, 40 1000, 40 1000"
              stroke="hsl(355, 78%, 56%)"
              strokeWidth="2"
              strokeOpacity="0.3"
              strokeDasharray="8 4"
            />
          </svg>

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Content card */}
                <div className={`flex-1 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-14 md:pl-0`}>
                  <div className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold mb-2`}>
                    <span className={step.color}>STEP {String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-1">
                    <span className={step.color}>{step.title}</span>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm inline-block">
                    {step.desc}
                  </p>
                </div>

                {/* Food emoji circle node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-zomato-red/30 bg-background flex items-center justify-center shadow-lg z-10">
                  <span className="text-xl">{step.emoji}</span>
                </div>

                {/* Spacer for other side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
