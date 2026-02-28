import { useCountUp } from "@/hooks/useCountUp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { performanceMetrics } from "@/data/chartData";
import { TrendingDown, Target, Zap } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import { motion } from "framer-motion";

const metrics = [
  {
    icon: TrendingDown,
    label: "Avg Wait Time",
    baseline: performanceMetrics.avgWait.baseline,
    optimized: performanceMetrics.avgWait.optimized,
    reduction: performanceMetrics.avgWait.reduction,
    unit: "min",
    color: "from-zomato-red/40 to-zomato-red/10",
  },
  {
    icon: Target,
    label: "Avg Wait Time",
    baseline: performanceMetrics.p50Error.baseline,
    optimized: performanceMetrics.p50Error.optimized,
    reduction: performanceMetrics.p50Error.reduction,
    unit: "min",
    color: "from-zomato-gold/40 to-zomato-gold/10",
  },
  {
    icon: Zap,
    label: "Max Wait Time",
    baseline: performanceMetrics.p90Error.baseline,
    optimized: performanceMetrics.p90Error.optimized,
    reduction: performanceMetrics.p90Error.reduction,
    unit: "min",
    color: "from-zomato-green/40 to-zomato-green/10",
  },
];

const MetricCard = ({ metric, delay, index }: { metric: typeof metrics[0]; delay: number; index: number }) => {
  const { count: reductionCount, ref } = useCountUp(metric.reduction, 2000, 1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 200 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative group"
    >
      {/* Glow border on hover */}
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
      
      <div className="relative glass-card rounded-2xl p-8 transition-all duration-500 border border-white/5 group-hover:border-white/15 overflow-hidden">
        {/* Shimmer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)" }} />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              initial={{ rotate: -20, scale: 0 }}
              whileInView={{ rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, delay: index * 0.15 + 0.2 }}
              className="w-12 h-12 rounded-xl gradient-red flex items-center justify-center shadow-lg shadow-zomato-red/20"
            >
              <metric.icon className="w-6 h-6 text-white" />
            </motion.div>
            <h3 className="font-display font-bold text-lg text-foreground">{metric.label}</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-end gap-2">
              <span className="text-5xl font-display font-bold text-zomato-red">{reductionCount}%</span>
              <span className="text-muted-foreground text-sm mb-2">reduction</span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex-1">
                <div className="text-muted-foreground mb-1">Baseline</div>
                <div className="font-semibold text-foreground text-lg">{metric.baseline} {metric.unit}</div>
              </div>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                className="w-8 h-px bg-border relative origin-left"
              >
                <div className="absolute -right-1 -top-1 text-zomato-red">→</div>
              </motion.div>
              <div className="flex-1">
                <div className="text-muted-foreground mb-1">Optimized</div>
                <div className="font-semibold text-zomato-green text-lg">{metric.optimized} {metric.unit}</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${metric.reduction}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.15 + 0.3, ease: "easeOut" }}
                className="h-full gradient-red rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const PerformanceSection = () => {
  return (
    <section className="relative py-24 px-6 section-warm overflow-hidden">
      <FloatingParticles count={10} dark={false} />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-zomato-red/10 text-zomato-red text-sm font-semibold mb-4"
          >
            🏆 Performance Summary
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Dramatic Improvements
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Our ML correction model significantly reduces rider wait times across all key metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} delay={i * 150} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
