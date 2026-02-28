import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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

const ChartCard = ({ title, subtitle, insight, children, index = 0 }: { title: string; subtitle?: string; insight?: string; children: React.ReactNode; index?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="glass-card rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:shadow-zomato-red/10 transition-all duration-500"
    >
      <h3 className="font-display font-bold text-xl text-foreground mb-1">{title}</h3>
      {subtitle && <p className="text-muted-foreground text-sm mb-2">{subtitle}</p>}
      {insight && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zomato-red/10 text-zomato-red text-xs font-semibold mb-4">
          💡 {insight}
        </div>
      )}
      <div className="w-full h-[350px]">{children}</div>
    </motion.div>
  );
};

// Summary donut data
const summaryDonutData = [
  { name: "Wait Reduced", value: performanceMetrics.avgWait.reduction, fill: COLORS.green },
  { name: "Remaining", value: 100 - performanceMetrics.avgWait.reduction, fill: "#333" },
];

const avgErrorDonut = [
  { name: "Improved", value: performanceMetrics.p50Error.reduction, fill: COLORS.gold },
  { name: "Remaining", value: 100 - performanceMetrics.p50Error.reduction, fill: "#333" },
];

const maxErrorDonut = [
  { name: "Improved", value: performanceMetrics.p90Error.reduction, fill: COLORS.red },
  { name: "Remaining", value: 100 - performanceMetrics.p90Error.reduction, fill: "#333" },
];

const SummaryDonut = ({ data, label, value, delay }: { data: any[]; label: string; value: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass-card rounded-2xl p-6 flex flex-col items-center"
  >
    <div className="w-[140px] h-[140px] relative">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} innerRadius={45} outerRadius={60} dataKey="value" startAngle={90} endAngle={-270} strokeWidth={0}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display font-bold text-xl text-white">{value}</span>
      </div>
    </div>
    <p className="text-white/70 text-sm font-medium mt-2 text-center">{label}</p>
  </motion.div>
);

const ChartsSection = () => {
  return (
    <section className="relative py-24 px-6 section-dark overflow-hidden">
      <FloatingParticles count={20} dark />
      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] opacity-10" style={{ background: 'radial-gradient(ellipse, hsl(355, 78%, 56%), transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] opacity-10" style={{ background: 'radial-gradient(ellipse, hsl(40, 52%, 58%), transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-zomato-gold/20 text-zomato-gold text-sm font-semibold mb-4">
            Data Analysis
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Interactive Visualizations
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Deep dive into our optimization results with interactive charts
          </p>
        </motion.div>

        {/* Summary Donuts at the top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <SummaryDonut data={summaryDonutData} label="Wait Time Reduction" value={`${performanceMetrics.avgWait.reduction}%`} delay={0} />
          <SummaryDonut data={avgErrorDonut} label="Avg Error Improvement" value={`${performanceMetrics.p50Error.reduction}%`} delay={0.15} />
          <SummaryDonut data={maxErrorDonut} label="Max Error Improvement" value={`${performanceMetrics.p90Error.reduction}%`} delay={0.3} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Wait Time Distribution */}
          <ChartCard title="Rider Wait Time Distribution" subtitle="Baseline vs Optimized (minutes)" insight="Optimized model shifts 80% of orders to <2 min wait" index={0}>
            <ResponsiveContainer>
              <BarChart data={waitTimeDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="bin" stroke="#888" fontSize={12} />
                <YAxis stroke="#888" fontSize={12} />
                <Tooltip contentStyle={{ background: "#1C1C1C", border: "1px solid #333", borderRadius: 8 }} />
                <Legend />
                <Bar dataKey="baseline" name="Baseline" fill={COLORS.red} radius={[4, 4, 0, 0]} opacity={0.8} />
                <Bar dataKey="optimized" name="Optimized" fill={COLORS.green} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 2. Hourly Average Wait Time */}
          <ChartCard title="Hourly Average Wait Time" subtitle="24-hour pattern comparison" insight="Peak hours (12-14, 19-20) show highest improvement" index={1}>
            <ResponsiveContainer>
              <LineChart data={hourlyWaitTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="hour" stroke="#888" fontSize={12} />
                <YAxis stroke="#888" fontSize={12} />
                <Tooltip contentStyle={{ background: "#1C1C1C", border: "1px solid #333", borderRadius: 8 }} />
                <Legend />
                <Line type="monotone" dataKey="baseline" name="Baseline" stroke={COLORS.red} strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="optimized" name="Optimized" stroke={COLORS.green} strokeWidth={2.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 3. ETA Error Percentiles */}
          <ChartCard title="ETA Error Percentiles" subtitle="Average and Maximum wait time comparison" insight="Maximum wait time error reduced from 8.5 to 2.1 min" index={2}>
            <ResponsiveContainer>
              <BarChart data={etaErrorPercentiles} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis type="number" stroke="#888" fontSize={12} />
                <YAxis dataKey="metric" type="category" stroke="#888" fontSize={12} width={80} />
                <Tooltip contentStyle={{ background: "#1C1C1C", border: "1px solid #333", borderRadius: 8 }} />
                <Legend />
                <Bar dataKey="baseline" name="Baseline" fill={COLORS.red} radius={[0, 4, 4, 0]} barSize={30} />
                <Bar dataKey="optimized" name="Optimized" fill={COLORS.green} radius={[0, 4, 4, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 4. CDF of ETA Error */}
          <ChartCard title="CDF of ETA Error" subtitle="Cumulative distribution function" insight="90% of optimized orders have <3 min error vs ~8 min baseline" index={3}>
            <ResponsiveContainer>
              <AreaChart data={cdfEtaError}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="error" stroke="#888" fontSize={12} />
                <YAxis stroke="#888" fontSize={12} domain={[0, 1]} />
                <Tooltip contentStyle={{ background: "#1C1C1C", border: "1px solid #333", borderRadius: 8 }} />
                <Legend />
                <Area type="monotone" dataKey="baseline" name="Baseline" stroke={COLORS.red} fill={COLORS.red} fillOpacity={0.15} strokeWidth={2} />
                <Area type="monotone" dataKey="optimized" name="Optimized" stroke={COLORS.green} fill={COLORS.green} fillOpacity={0.15} strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 5. ETA Error Histogram - Baseline */}
          <ChartCard title="ETA Error Distribution — Baseline" subtitle="Error spread before optimization" insight="Wide spread: errors range from -8 to +10 min" index={4}>
            <ResponsiveContainer>
              <BarChart data={etaErrorBaseline}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="bin" stroke="#888" fontSize={12} label={{ value: "Error (min)", position: "bottom", fill: "#888" }} />
                <YAxis stroke="#888" fontSize={12} />
                <Tooltip contentStyle={{ background: "#1C1C1C", border: "1px solid #333", borderRadius: 8 }} />
                <Bar dataKey="count" fill={COLORS.red} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 6. ETA Error Histogram - Optimized */}
          <ChartCard title="ETA Error Distribution — Optimized" subtitle="Tighter error distribution after optimization" insight="Errors tightly centered around 0 with ±2 min range" index={5}>
            <ResponsiveContainer>
              <BarChart data={etaErrorOptimized}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="bin" stroke="#888" fontSize={12} label={{ value: "Error (min)", position: "bottom", fill: "#888" }} />
                <YAxis stroke="#888" fontSize={12} />
                <Tooltip contentStyle={{ background: "#1C1C1C", border: "1px solid #333", borderRadius: 8 }} />
                <Bar dataKey="count" fill={COLORS.green} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 7. Wait Time Reduction Distribution */}
          <ChartCard title="Wait Time Reduction Distribution" subtitle="Distribution of per-order improvements" insight="Mean reduction of ~4 min per order, 95% of orders improved" index={6}>
            <ResponsiveContainer>
              <BarChart data={waitTimeReduction}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="bin" stroke="#888" fontSize={12} label={{ value: "Reduction (min)", position: "bottom", fill: "#888" }} />
                <YAxis stroke="#888" fontSize={12} />
                <Tooltip contentStyle={{ background: "#1C1C1C", border: "1px solid #333", borderRadius: 8 }} />
                <ReferenceLine x="4" stroke={COLORS.gold} strokeDasharray="5 5" label={{ value: "Mean", fill: COLORS.gold, position: "top" }} />
                <Bar dataKey="count" fill={COLORS.gold} radius={[4, 4, 0, 0]} opacity={0.85} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 8. Feature Importance */}
          <ChartCard title="Feature Importance" subtitle="Key drivers of the correction model" insight="base_kpt and prev_noisy_kpt account for 57% of model signal" index={7}>
            <ResponsiveContainer>
              <BarChart data={featureImportance} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis type="number" stroke="#888" fontSize={12} />
                <YAxis dataKey="feature" type="category" stroke="#888" fontSize={11} width={120} />
                <Tooltip contentStyle={{ background: "#1C1C1C", border: "1px solid #333", borderRadius: 8 }} />
                <Bar dataKey="importance" name="Importance" radius={[0, 4, 4, 0]} barSize={24}>
                  {featureImportance.map((_, i) => (
                    <Cell key={i} fill={i < 2 ? COLORS.red : i < 4 ? COLORS.gold : COLORS.lightRed} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* 9. RLRI vs True KPT - Smaller */}
        <div className="mt-8 max-w-2xl mx-auto">
          <ChartCard title="RLRI vs True KPT" subtitle="Correlation between predicted and actual kitchen prep times" insight="Strong positive correlation validates RLRI as a reliable signal" index={8}>
            <ResponsiveContainer>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="trueKpt" name="True KPT" stroke="#888" fontSize={12} label={{ value: "True KPT (min)", position: "bottom", fill: "#888" }} />
                <YAxis dataKey="rlri" name="RLRI" stroke="#888" fontSize={12} label={{ value: "RLRI (min)", angle: -90, position: "insideLeft", fill: "#888" }} />
                <Tooltip contentStyle={{ background: "#1C1C1C", border: "1px solid #333", borderRadius: 8 }} cursor={{ strokeDasharray: "3 3" }} />
                <ReferenceLine segment={[{ x: 0, y: 0 }, { x: 15, y: 15 }]} stroke={COLORS.gold} strokeDasharray="5 5" />
                <Scatter data={rlriVsKpt} name="Orders">
                  {rlriVsKpt.map((entry, i) => (
                    <Cell key={i} fill={entry.error < 2 ? COLORS.green : entry.error < 4 ? COLORS.gold : COLORS.red} opacity={0.7} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;
