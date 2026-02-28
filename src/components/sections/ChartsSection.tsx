import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, ScatterChart, Scatter, Cell, ReferenceLine,
} from "recharts";
import {
  waitTimeDistribution, hourlyWaitTime, etaErrorPercentiles, cdfEtaError,
  etaErrorBaseline, etaErrorOptimized, waitTimeReduction, featureImportance, rlriVsKpt,
} from "@/data/chartData";

const COLORS = {
  red: "#E23744",
  green: "#2EAE6D",
  gold: "#D4A853",
  dark: "#1C1C1C",
  lightRed: "#F5858E",
  lightGreen: "#7DD3A8",
};

const ChartCard = ({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`glass-card rounded-2xl p-6 md:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <h3 className="font-display font-bold text-xl text-foreground mb-1">{title}</h3>
      {subtitle && <p className="text-muted-foreground text-sm mb-6">{subtitle}</p>}
      <div className="w-full h-[350px]">{children}</div>
    </div>
  );
};

const ChartsSection = () => {
  return (
    <section className="py-24 px-6 section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-zomato-gold/20 text-zomato-gold text-sm font-semibold mb-4">
            Data Analysis
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Interactive Visualizations
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Deep dive into our optimization results with interactive charts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Wait Time Distribution */}
          <ChartCard title="Rider Wait Time Distribution" subtitle="Baseline vs Optimized (minutes)">
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
          <ChartCard title="Hourly Average Wait Time" subtitle="24-hour pattern comparison">
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
          <ChartCard title="ETA Error Percentiles" subtitle="P50 and P90 comparison">
            <ResponsiveContainer>
              <BarChart data={etaErrorPercentiles} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis type="number" stroke="#888" fontSize={12} />
                <YAxis dataKey="metric" type="category" stroke="#888" fontSize={12} width={50} />
                <Tooltip contentStyle={{ background: "#1C1C1C", border: "1px solid #333", borderRadius: 8 }} />
                <Legend />
                <Bar dataKey="baseline" name="Baseline" fill={COLORS.red} radius={[0, 4, 4, 0]} barSize={30} />
                <Bar dataKey="optimized" name="Optimized" fill={COLORS.green} radius={[0, 4, 4, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* 4. CDF of ETA Error */}
          <ChartCard title="CDF of ETA Error" subtitle="Cumulative distribution function">
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
          <ChartCard title="ETA Error Distribution — Baseline" subtitle="Error spread before optimization">
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
          <ChartCard title="ETA Error Distribution — Optimized" subtitle="Tighter error distribution after optimization">
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
          <ChartCard title="Wait Time Reduction Distribution" subtitle="Distribution of per-order improvements">
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
          <ChartCard title="Feature Importance" subtitle="Key drivers of the correction model">
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

        {/* 9. Full-width Scatter Plot */}
        <div className="mt-8">
          <ChartCard title="RLRI vs True KPT" subtitle="Correlation between predicted and actual kitchen prep times">
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
