import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Database, Settings, Eraser, BarChart3, Zap, Wrench, Truck, Timer, Target } from "lucide-react";

const steps = [
  { icon: Database, title: "Dataset Simulation", desc: "Generated 15,000 orders with realistic restaurant biases.", color: "text-zomato-red", border: "border-zomato-red" },
  { icon: Eraser, title: "Data Cleaning", desc: "Removed invalid timestamps, types, dropped NaNs.", color: "text-pink-500", border: "border-pink-500" },
  { icon: Settings, title: "Feature Engineering", desc: "Time features, cyclical encoding, rolling stats. No leakage.", color: "text-blue-500", border: "border-blue-500" },
  { icon: BarChart3, title: "Baseline Model", desc: "LightGBM predicts noisy KPT using basic features.", color: "text-orange-500", border: "border-orange-500" },
  { icon: Zap, title: "RLRI (Rush Index)", desc: "Index captures kitchen congestion in real time.", color: "text-green-500", border: "border-green-500" },
  { icon: Wrench, title: "Error Correction", desc: "Second model predicts error using RLRI & lag features.", color: "text-yellow-500", border: "border-yellow-500" },
  { icon: Truck, title: "Dispatch Simulation", desc: "Rider sent directly when food is ready. Zero wait.", color: "text-red-500", border: "border-red-500" },
  { icon: Timer, title: "Wait Reduction", desc: "Average wait drops from 6.28 to 1.30 minutes.", color: "text-purple-500", border: "border-purple-500" },
  { icon: Target, title: "Final Impact", desc: "P50 error drops 45.5%. Production model ready.", color: "text-teal-500", border: "border-teal-500" },
];

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="timeline" className="py-24 px-6 bg-zomato-light" ref={ref}>
      <div className="max-w-5xl mx-auto">
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
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px" />

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
                  <div className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold mb-2 ${step.color} bg-current/10`}
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <span className={step.color}>STEP {String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className={`font-display font-bold text-xl text-foreground mb-1 ${step.color.replace('text-', 'decoration-')}`}>
                    <span className={step.color}>{step.title}</span>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm inline-block">
                    {step.desc}
                  </p>
                </div>

                {/* Circle node */}
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 ${step.border} bg-background flex items-center justify-center shadow-md z-10`}>
                  <step.icon className={`w-5 h-5 ${step.color}`} />
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
