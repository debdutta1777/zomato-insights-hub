import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, ScatterChart, Scatter, Cell, ReferenceLine,
  PieChart, Pie,
} from "recharts";
import {
  waitTimeDistribution, hourlyWaitTime, etaErrorPercentiles, cdfEtaError,
  etaErrorBaseline, etaErrorOptimized, waitTimeReduction, featureImportance, rlriVsKpt,
  performanceMetrics,
} from "@/data/chartData";

const COLORS = {
  red: "#E23744",
  green: "#2EAE6D",
  gold: "#D4A853",
  dark: "#1C1C1C",
  lightRed: "#F5858E",
  lightGreen: "#7DD3A8",
};

/* ── Animated gradient border wrapper ── */
const GlowBorder = ({ children, color = "red" }: { children: React.ReactNode; color?: "red" | "gold" | "green" }) => {
  const gradients = {
    red: "from-zomato-red/40 via-transparent to-zomato-red/20",
    gold: "from-zomato-gold/40 via-transparent to-zomato-gold/20",
    green: "from-zomato-green/40 via-transparent to-zomato-green/20",
  };
  return (
    <div className="relative group">
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-br ${gradients[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm`} />
      <div className="relative">{children}</div>
    </div>
  );
};

/* ── Chart number badge ── */
const ChartNumber = ({ num }: { num: number }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
    className="absolute -top-4 -left-4 z-20 w-10 h-10 rounded-full bg-gradient-to-br from-zomato-red to-zomato-red/80 flex items-center justify-center shadow-lg shadow-zomato-red/30"
  >
    <span className="text-white font-bold text-sm">{String(num).padStart(2, '0')}</span>
  </motion.div>
);

const ChartCard = ({ title, subtitle, insight, analysis, children, index = 0, glowColor = "red" as "red" | "gold" | "green" }: { title: string; subtitle?: string; insight?: string; analysis?: string; children: React.ReactNode; index?: number; glowColor?: "red" | "gold" | "green" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      className="w-full relative"
    >
      <ChartNumber num={index + 1} />
      <GlowBorder color={glowColor}>
        <div className="rounded-2xl p-6 md:p-8 transition-all duration-500" style={{ background: "linear-gradient(145deg, #1a1a2e, #16213e)" }}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-display font-bold text-xl text-white mb-1">{title}</h3>
              {subtitle && <p className="text-white/60 text-sm">{subtitle}</p>}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full h-[350px] bg-[#0d1117] rounded-xl p-3 border border-white/5"
          >
            {children}
          </motion.div>
        </div>
      </GlowBorder>
      {/* Insight & analysis OUTSIDE the chart card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4 px-2 space-y-2"
      >
        {insight && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zomato-red/15 text-zomato-red text-sm font-semibold backdrop-blur-sm">
            💡 {insight}
          </div>
        )}
        {analysis && (
          <p className="text-white/55 text-sm leading-relaxed max-w-3xl">{analysis}</p>
        )}
      </motion.div>
    </motion.div>
  );
};

// Summary donut data
const summaryDonutData = [
  { name: "Wait Reduced", value: performanceMetrics.avgWait.reduction, fill: COLORS.green },
  { name: "Remaining", value: 100 - performanceMetrics.avgWait.reduction, fill: "#222" },
];
const avgErrorDonut = [
  { name: "Improved", value: performanceMetrics.p50Error.reduction, fill: COLORS.gold },
  { name: "Remaining", value: 100 - performanceMetrics.p50Error.reduction, fill: "#222" },
];
const maxErrorDonut = [
  { name: "Improved", value: performanceMetrics.p90Error.reduction, fill: COLORS.red },
  { name: "Remaining", value: 100 - performanceMetrics.p90Error.reduction, fill: "#222" },
];

const SummaryDonut = ({ data, label, value, subtitle, delay, icon }: { data: any[]; label: string; value: string; subtitle: string; delay: number; icon: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.85 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 200 }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    className="rounded-2xl p-6 flex flex-col items-center border border-white/5 hover:border-white/15 transition-colors duration-500 relative overflow-hidden group"
    style={{ background: "linear-gradient(145deg, #1a1a2e, #16213e)" }}
  >
    {/* Shimmer effect on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)" }} />
    
    <span className="text-2xl mb-2">{icon}</span>
    <div className="w-[160px] h-[160px] relative">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} innerRadius={50} outerRadius={68} dataKey="value" startAngle={90} endAngle={-270} strokeWidth={0}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + 0.3, type: "spring" }}
          className="font-display font-extrabold text-2xl text-white drop-shadow-lg"
        >
          {value}
        </motion.span>
      </div>
    </div>
    <p className="text-white font-semibold text-base mt-3 text-center">{label}</p>
    <p className="text-white/50 text-xs mt-1 text-center">{subtitle}</p>
  </motion.div>
);

const TOOLTIP_STYLE = { background: "#1C1C1C", border: "1px solid #444", borderRadius: 8, color: "#fff" };
const TOOLTIP_PROPS = { contentStyle: TOOLTIP_STYLE, itemStyle: { color: "#fff" }, labelStyle: { color: "#fff" } } as const;

/* ── Divider between charts ── */
const ChartDivider = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"
  />
);

const ChartsSection = () => {
  return (
    <section className="relative py-24 px-6 section-dark overflow-hidden">
      <FloatingParticles count={25} dark />
      {/* Multiple radial glows for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] opacity-8" style={{ background: 'radial-gradient(ellipse, hsl(355, 78%, 56%), transparent 70%)' }} />
        <div className="absolute top-[50%] right-[15%] w-[500px] h-[500px] opacity-8" style={{ background: 'radial-gradient(ellipse, hsl(40, 52%, 58%), transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] opacity-5" style={{ background: 'radial-gradient(ellipse, hsl(145, 63%, 42%), transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-zomato-gold/20 text-zomato-gold text-sm font-semibold mb-4"
          >
            📊 Data Analysis
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Interactive Visualizations
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Deep dive into our optimization results with interactive charts
          </p>
        </motion.div>

        {/* Summary Donuts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <SummaryDonut data={summaryDonutData} label="Wait Time Reduction" value={`${performanceMetrics.avgWait.reduction}%`} subtitle={`${performanceMetrics.avgWait.baseline} → ${performanceMetrics.avgWait.optimized} min`} delay={0} icon="⏱️" />
          <SummaryDonut data={avgErrorDonut} label="Avg Error Improvement" value={`${performanceMetrics.p50Error.reduction}%`} subtitle={`${performanceMetrics.p50Error.baseline} → ${performanceMetrics.p50Error.optimized} min`} delay={0.15} icon="🎯" />
          <SummaryDonut data={maxErrorDonut} label="Max Error Improvement" value={`${performanceMetrics.p90Error.reduction}%`} subtitle={`${performanceMetrics.p90Error.baseline} → ${performanceMetrics.p90Error.optimized} min`} delay={0.3} icon="⚡" />
        </div>

        {/* Single-column centered charts */}
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <ChartCard title="Rider Wait Time Distribution" subtitle="Baseline vs Optimized (minutes)" insight="Optimized model shifts 80% of orders to <2 min wait" analysis="The distribution clearly shows a leftward shift after optimization — the majority of rider wait times are compressed into the 0–2 minute range, eliminating the long tail of 5–10 minute waits that plagued the baseline system." index={0} glowColor="red">
            <ResponsiveContainer>
              <BarChart data={waitTimeDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="bin" stroke="#ccc" fontSize={13} />
                <YAxis stroke="#ccc" fontSize={13} />
                <Tooltip {...TOOLTIP_PROPS} />
                <Legend wrapperStyle={{ color: '#ccc' }} />
                <Bar dataKey="baseline" name="Baseline" fill={COLORS.red} radius={[4, 4, 0, 0]} opacity={0.8} animationDuration={1200} />
                <Bar dataKey="optimized" name="Optimized" fill={COLORS.green} radius={[4, 4, 0, 0]} animationDuration={1200} animationBegin={300} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartDivider />

          <ChartCard title="Hourly Average Wait Time" subtitle="24-hour pattern comparison" insight="Peak hours (12–14, 19–20) show highest improvement" analysis="During lunch (12–14h) and dinner (19–20h) rush, baseline wait times spike to 7–8 minutes. Our optimized model keeps wait times consistently below 1.6 minutes even during peak demand, demonstrating robustness under high load." index={1} glowColor="green">
            <ResponsiveContainer>
              <LineChart data={hourlyWaitTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="hour" stroke="#ccc" fontSize={13} />
                <YAxis stroke="#ccc" fontSize={13} />
                <Tooltip {...TOOLTIP_PROPS} />
                <Legend wrapperStyle={{ color: '#ccc' }} />
                <Line type="monotone" dataKey="baseline" name="Baseline" stroke={COLORS.red} strokeWidth={2.5} dot={false} animationDuration={1500} />
                <Line type="monotone" dataKey="optimized" name="Optimized" stroke={COLORS.green} strokeWidth={2.5} dot={false} animationDuration={1500} animationBegin={400} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartDivider />

          <ChartCard title="ETA Error Percentiles" subtitle="Average and Maximum wait time comparison" insight="Maximum wait time error reduced from 8.5 to 2.1 min" analysis="Both average and maximum ETA errors see dramatic reductions. The max error dropping from 8.5 to 2.1 minutes is critical — it means even worst-case predictions are now actionable for dispatchers." index={2} glowColor="red">
            <ResponsiveContainer>
              <BarChart data={etaErrorPercentiles} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis type="number" stroke="#ccc" fontSize={13} />
                <YAxis dataKey="metric" type="category" stroke="#ccc" fontSize={13} width={80} />
                <Tooltip {...TOOLTIP_PROPS} />
                <Legend wrapperStyle={{ color: '#ccc' }} />
                <Bar dataKey="baseline" name="Baseline" fill={COLORS.red} radius={[0, 4, 4, 0]} barSize={30} animationDuration={1200} />
                <Bar dataKey="optimized" name="Optimized" fill={COLORS.green} radius={[0, 4, 4, 0]} barSize={30} animationDuration={1200} animationBegin={300} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartDivider />

          <ChartCard title="CDF of ETA Error" subtitle="Cumulative distribution function" insight="90% of optimized orders have <3 min error vs ~8 min baseline" analysis="The CDF shows the optimized model reaches 90% cumulative probability at ~3 minutes of error, whereas the baseline needs ~8 minutes. This steep curve indicates high prediction confidence and reliability." index={3} glowColor="green">
            <ResponsiveContainer>
              <AreaChart data={cdfEtaError}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="error" stroke="#ccc" fontSize={13} />
                <YAxis stroke="#ccc" fontSize={13} domain={[0, 1]} />
                <Tooltip {...TOOLTIP_PROPS} />
                <Legend wrapperStyle={{ color: '#ccc' }} />
                <Area type="monotone" dataKey="baseline" name="Baseline" stroke={COLORS.red} fill={COLORS.red} fillOpacity={0.15} strokeWidth={2} animationDuration={1500} />
                <Area type="monotone" dataKey="optimized" name="Optimized" stroke={COLORS.green} fill={COLORS.green} fillOpacity={0.15} strokeWidth={2} animationDuration={1500} animationBegin={400} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartDivider />

          <ChartCard title="ETA Error Distribution — Baseline" subtitle="Error spread before optimization" insight="Wide spread: errors range from -8 to +10 min" analysis="Before optimization, ETA errors are spread across a wide range (-8 to +10 minutes), indicating unreliable predictions that cause both early and late rider arrivals." index={4} glowColor="red">
            <ResponsiveContainer>
              <BarChart data={etaErrorBaseline}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="bin" stroke="#ccc" fontSize={13} label={{ value: "Error (min)", position: "bottom", fill: "#ccc" }} />
                <YAxis stroke="#ccc" fontSize={13} />
                <Tooltip {...TOOLTIP_PROPS} />
                <Bar dataKey="count" fill={COLORS.red} radius={[4, 4, 0, 0]} animationDuration={1200} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartDivider />

          <ChartCard title="ETA Error Distribution — Optimized" subtitle="Tighter error distribution after optimization" insight="Errors tightly centered around 0 with ±2 min range" analysis="Post-optimization, the error distribution becomes sharply peaked around zero with a ±2 minute range — the model's predictions closely match actual kitchen prep times, enabling precise rider dispatch." index={5} glowColor="green">
            <ResponsiveContainer>
              <BarChart data={etaErrorOptimized}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="bin" stroke="#ccc" fontSize={13} label={{ value: "Error (min)", position: "bottom", fill: "#ccc" }} />
                <YAxis stroke="#ccc" fontSize={13} />
                <Tooltip {...TOOLTIP_PROPS} />
                <Bar dataKey="count" fill={COLORS.green} radius={[4, 4, 0, 0]} animationDuration={1200} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartDivider />

          <ChartCard title="Wait Time Reduction Distribution" subtitle="Distribution of per-order improvements" insight="Mean reduction of ~4 min per order, 95% of orders improved" analysis="Nearly all orders benefit from the optimization. The distribution peaks at 3–4 minute reductions, with a mean of ~4 minutes saved per order. Only 5% of orders show no improvement or marginal degradation." index={6} glowColor="gold">
            <ResponsiveContainer>
              <BarChart data={waitTimeReduction}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="bin" stroke="#ccc" fontSize={13} label={{ value: "Reduction (min)", position: "bottom", fill: "#ccc" }} />
                <YAxis stroke="#ccc" fontSize={13} />
                <Tooltip {...TOOLTIP_PROPS} />
                <ReferenceLine x="4" stroke={COLORS.gold} strokeDasharray="5 5" label={{ value: "Mean", fill: COLORS.gold, position: "top" }} />
                <Bar dataKey="count" fill={COLORS.gold} radius={[4, 4, 0, 0]} opacity={0.85} animationDuration={1200} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartDivider />

          <ChartCard title="Feature Importance" subtitle="Key drivers of the correction model" insight="base_kpt and prev_noisy_kpt account for 57% of model signal" analysis="The top two features — base kitchen prep time and previous noisy KPT — together explain 57% of model variance. Time-based features (hour, day) add contextual awareness, while distance and weather provide marginal but meaningful corrections." index={7} glowColor="red">
            <ResponsiveContainer>
              <BarChart data={featureImportance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis type="number" stroke="#ccc" fontSize={13} />
                <YAxis dataKey="feature" type="category" stroke="#ccc" fontSize={12} width={120} />
                <Tooltip {...TOOLTIP_PROPS} />
                <Bar dataKey="importance" name="Importance" radius={[0, 4, 4, 0]} barSize={24} animationDuration={1200}>
                  {featureImportance.map((_, i) => (
                    <Cell key={i} fill={i < 2 ? COLORS.red : i < 4 ? COLORS.gold : COLORS.lightRed} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartDivider />

          {/* RLRI vs True KPT - Smaller */}
          <div className="max-w-xl mx-auto w-full">
            <ChartCard title="RLRI vs True KPT" subtitle="Predicted vs actual kitchen prep times" insight="Strong positive correlation validates RLRI as a reliable signal" analysis="Points cluster tightly around the diagonal (y=x), confirming that RLRI predictions closely match true kitchen prep times. Green points (error <2 min) dominate, validating the model's accuracy." index={8} glowColor="gold">
              <ResponsiveContainer width="100%" height={280}>
                <ScatterChart margin={{ bottom: 25, left: 15, right: 15, top: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="trueKpt" name="True KPT" stroke="#ccc" fontSize={12} type="number" domain={[0, 16]} ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16]} tickFormatter={(v: number) => `${v}`} label={{ value: "True KPT (min)", position: "insideBottom", offset: -15, fill: "#ccc", fontSize: 13, fontWeight: 600 }} />
                  <YAxis dataKey="rlri" name="RLRI" stroke="#ccc" fontSize={12} type="number" domain={[0, 22]} ticks={[0, 5, 10, 15, 20]} tickFormatter={(v: number) => `${v}`} label={{ value: "RLRI (min)", angle: -90, position: "insideLeft", fill: "#ccc", fontSize: 13, fontWeight: 600 }} />
                  <Tooltip {...TOOLTIP_PROPS} cursor={{ strokeDasharray: "3 3" }} formatter={(value: number) => value.toFixed(1)} />
                  <ReferenceLine segment={[{ x: 0, y: 0 }, { x: 16, y: 16 }]} stroke={COLORS.gold} strokeDasharray="5 5" />
                  <Scatter data={rlriVsKpt} name="Orders" animationDuration={1500}>
                    {rlriVsKpt.map((entry, i) => (
                      <Cell key={i} fill={entry.error < 2 ? COLORS.green : entry.error < 4 ? COLORS.gold : COLORS.red} opacity={0.7} />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;
