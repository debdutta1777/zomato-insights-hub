import { useCountUp } from "@/hooks/useCountUp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { performanceMetrics } from "@/data/chartData";
import { TrendingDown, Target, Zap } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const metrics = [
  {
    icon: TrendingDown,
    label: "Avg Wait Time",
    baseline: performanceMetrics.avgWait.baseline,
    optimized: performanceMetrics.avgWait.optimized,
    reduction: performanceMetrics.avgWait.reduction,
    unit: "min",
  },
  {
    icon: Target,
    label: "Avg Wait Time Error",
    baseline: performanceMetrics.p50Error.baseline,
    optimized: performanceMetrics.p50Error.optimized,
    reduction: performanceMetrics.p50Error.reduction,
    unit: "min",
  },
  {
    icon: Zap,
    label: "Max Wait Time Error",
    baseline: performanceMetrics.p90Error.baseline,
    optimized: performanceMetrics.p90Error.optimized,
    reduction: performanceMetrics.p90Error.reduction,
    unit: "min",
  },
];

const MetricCard = ({ metric, delay }: { metric: typeof metrics[0]; delay: number }) => {
  const { count: reductionCount, ref } = useCountUp(metric.reduction, 2000, 1);
  const { isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="glass-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl gradient-red flex items-center justify-center">
          <metric.icon className="w-6 h-6 text-white" />
        </div>
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
          <div className="w-8 h-px bg-border relative">
            <div className="absolute -right-1 -top-1 text-zomato-red">→</div>
          </div>
          <div className="flex-1">
            <div className="text-muted-foreground mb-1">Optimized</div>
            <div className="font-semibold text-zomato-green text-lg">{metric.optimized} {metric.unit}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full gradient-red rounded-full transition-all duration-1000"
            style={{ width: `${reductionCount}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const PerformanceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 px-6 section-warm overflow-hidden" ref={ref}>
      <FloatingParticles count={10} dark={false} />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zomato-red/10 text-zomato-red text-sm font-semibold mb-4">
            Performance Summary
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Dramatic Improvements
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Our ML correction model significantly reduces rider wait times across all key metrics
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {metrics.map((metric, i) => (
            <MetricCard key={metric.label} metric={metric} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
