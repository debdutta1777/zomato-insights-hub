// Rider Wait Time Distribution data
export const waitTimeDistribution = [
  { bin: "0-1", baseline: 15, optimized: 45 },
  { bin: "1-2", baseline: 20, optimized: 35 },
  { bin: "2-3", baseline: 25, optimized: 12 },
  { bin: "3-4", baseline: 18, optimized: 5 },
  { bin: "4-5", baseline: 12, optimized: 2 },
  { bin: "5-6", baseline: 8, optimized: 1 },
  { bin: "6-7", baseline: 5, optimized: 0.5 },
  { bin: "7-8", baseline: 3, optimized: 0.3 },
  { bin: "8-9", baseline: 2, optimized: 0.1 },
  { bin: "9-10", baseline: 1.5, optimized: 0.05 },
];

// Hourly Average Wait Time
export const hourlyWaitTime = [
  { hour: "0", baseline: 5.8, optimized: 1.2 },
  { hour: "1", baseline: 5.5, optimized: 1.1 },
  { hour: "2", baseline: 5.2, optimized: 1.0 },
  { hour: "3", baseline: 4.8, optimized: 0.9 },
  { hour: "4", baseline: 4.5, optimized: 0.85 },
  { hour: "5", baseline: 5.0, optimized: 1.0 },
  { hour: "6", baseline: 5.8, optimized: 1.15 },
  { hour: "7", baseline: 6.5, optimized: 1.3 },
  { hour: "8", baseline: 7.0, optimized: 1.4 },
  { hour: "9", baseline: 6.8, optimized: 1.35 },
  { hour: "10", baseline: 6.2, optimized: 1.25 },
  { hour: "11", baseline: 6.5, optimized: 1.3 },
  { hour: "12", baseline: 7.5, optimized: 1.5 },
  { hour: "13", baseline: 7.2, optimized: 1.45 },
  { hour: "14", baseline: 6.0, optimized: 1.2 },
  { hour: "15", baseline: 5.5, optimized: 1.1 },
  { hour: "16", baseline: 5.8, optimized: 1.15 },
  { hour: "17", baseline: 6.5, optimized: 1.3 },
  { hour: "18", baseline: 7.8, optimized: 1.55 },
  { hour: "19", baseline: 8.0, optimized: 1.6 },
  { hour: "20", baseline: 7.5, optimized: 1.5 },
  { hour: "21", baseline: 7.0, optimized: 1.4 },
  { hour: "22", baseline: 6.5, optimized: 1.3 },
  { hour: "23", baseline: 6.0, optimized: 1.2 },
];

// ETA Error Percentiles
export const etaErrorPercentiles = [
  { metric: "Avg Wait", baseline: 3.2, optimized: 0.8 },
  { metric: "Max Wait", baseline: 8.5, optimized: 2.1 },
];

// CDF of ETA Error
export const cdfEtaError = Array.from({ length: 50 }, (_, i) => {
  const x = i * 0.4;
  return {
    error: x,
    baseline: Math.min(1, 1 - Math.exp(-x / 4)),
    optimized: Math.min(1, 1 - Math.exp(-x / 1.2)),
  };
});

// ETA Error Distribution (Baseline)
export const etaErrorBaseline = [
  { bin: "-8", count: 2 },
  { bin: "-6", count: 5 },
  { bin: "-4", count: 12 },
  { bin: "-2", count: 25 },
  { bin: "0", count: 35 },
  { bin: "2", count: 28 },
  { bin: "4", count: 15 },
  { bin: "6", count: 8 },
  { bin: "8", count: 4 },
  { bin: "10", count: 2 },
];

// ETA Error Distribution (Optimized)
export const etaErrorOptimized = [
  { bin: "-3", count: 3 },
  { bin: "-2", count: 10 },
  { bin: "-1", count: 28 },
  { bin: "0", count: 50 },
  { bin: "1", count: 30 },
  { bin: "2", count: 12 },
  { bin: "3", count: 5 },
];

// Wait Time Reduction Distribution
export const waitTimeReduction = [
  { bin: "-2", count: 2 },
  { bin: "-1", count: 5 },
  { bin: "0", count: 8 },
  { bin: "1", count: 15 },
  { bin: "2", count: 25 },
  { bin: "3", count: 35 },
  { bin: "4", count: 30 },
  { bin: "5", count: 22 },
  { bin: "6", count: 15 },
  { bin: "7", count: 10 },
  { bin: "8", count: 5 },
];

// Feature Importance
export const featureImportance = [
  { feature: "base_kpt", importance: 0.35 },
  { feature: "prev_noisy_kpt", importance: 0.22 },
  { feature: "hour_of_day", importance: 0.15 },
  { feature: "day_of_week", importance: 0.10 },
  { feature: "restaurant_prep_time", importance: 0.08 },
  { feature: "distance_km", importance: 0.05 },
  { feature: "weather_score", importance: 0.03 },
  { feature: "traffic_index", importance: 0.02 },
];

// RLRI vs True KPT (scatter data)
export const rlriVsKpt = Array.from({ length: 100 }, (_, i) => {
  const trueKpt = 1 + Math.random() * 14;
  const rlri = trueKpt * (0.7 + Math.random() * 0.6) + (Math.random() - 0.5) * 2;
  const error = Math.abs(rlri - trueKpt);
  return {
    trueKpt: parseFloat(trueKpt.toFixed(2)),
    rlri: parseFloat(rlri.toFixed(2)),
    error: parseFloat(error.toFixed(2)),
  };
});

// Performance metrics
export const performanceMetrics = {
  avgWait: { baseline: 6.28, optimized: 1.30, reduction: 79.25 },
  p50Error: { baseline: 4.35, optimized: 2.37, reduction: 45.53 },
  p90Error: { baseline: 10.45, optimized: 6.26, reduction: 40.08 },
};
