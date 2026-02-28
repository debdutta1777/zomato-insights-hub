

# Zomathon Demo Website - Rider Wait Time Optimization

## Overview
A polished, interactive demo website showcasing your hackathon research on optimizing rider wait times. Themed with Zomato's brand colors (red, white, black, gold accents).

## Design Theme
- **Primary**: Zomato red (#E23744), **Accent**: Gold (#D4A853), **Dark sections**: Near-black (#1C1C1C), **Light sections**: White/off-white
- Modern glassmorphism cards, smooth scroll animations, gradient backgrounds
- Clean typography with bold headlines and clear data presentation

## Pages & Sections (Single-page scrollable)

### 1. Hero Section
- Bold headline: "Optimizing Rider Wait Times at Scale"
- Team name, Zomathon branding
- Key stat callouts: **79.25% reduction** in avg wait, **1.30 min** optimized wait
- Animated scroll-down indicator

### 2. Performance Summary
- Three animated metric cards showing Baseline → Optimized with improvement percentages (Avg Wait, P50 Error, P90 Error)
- Counters that animate on scroll

### 3. Interactive Charts (using Recharts)
- **Rider Wait Time Distribution**: Overlapping bar chart (Baseline red vs Optimized green)
- **Hourly Average Wait Time**: Line chart with dual series, tooltips
- **ETA Error Percentiles**: Bar chart comparing P50/P90
- **CDF of ETA Error**: Smooth line chart with both curves
- **ETA Error Histograms**: Side-by-side bar charts
- **Wait Time Reduction Distribution**: Histogram with mean line annotation
- **Feature Importance**: Horizontal bar chart
- **RLRI vs True KPT**: Scatter chart with color encoding

### 4. Methodology Section
- Brief explanation of the correction model approach
- Key features used (base_kpt, prev_noisy_kpt, etc.)

### 5. Key Takeaways
- Summary cards with icons highlighting main findings

### 6. Footer
- Team info, hackathon credit

## Technical Approach
- All charts recreated as interactive Recharts components with real data from your results
- Scroll-triggered animations for visual impact
- Fully responsive layout
- Zomato-inspired color scheme throughout

