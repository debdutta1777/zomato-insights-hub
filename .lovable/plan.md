

## Plan

### 1. Fix donut text visibility & styling
- In `ChartsSection.tsx`: Make the SummaryDonut cards have a dark background with visible white text, increase donut size, make percentage text larger and bolder

### 2. Change chart layout to single-column centered
- Remove the `grid grid-cols-1 lg:grid-cols-2` layout
- Replace with a single-column layout (`max-w-4xl mx-auto flex flex-col gap-12`)
- Each chart gets its own full-width row, center-aligned

### 3. Move insight text outside charts
- Restructure `ChartCard` so the insight/description text appears as a separate block below/beside the chart card (not inside the chart area)
- Add a short analytical paragraph for each chart explaining the significance of the data

### 4. Make RLRI vs True KPT chart smaller
- Reduce container to `max-w-xl` and chart height to `h-[280px]`

### 5. Add Colab link button to Results hero
- In `Results.tsx`: Add a button/link in the hero section pointing to the Colab notebook URL with an external link icon

### Files to modify:
1. `src/components/sections/ChartsSection.tsx` — donut fix, single-column layout, insight text outside charts, smaller scatter chart
2. `src/pages/Results.tsx` — add Colab button in hero

