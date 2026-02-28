

## Changes

### 1. Reduce gap between Timeline and "Explore All Results" button
- In `src/pages/Index.tsx`: Change the CTA section padding from `py-16` to `py-6` or `py-8` to bring it closer to the timeline
- In `src/components/sections/TimelineSection.tsx`: Reduce bottom padding from `py-28` to `py-20 pb-8` so the last step is closer to the CTA

### 2. Replace moving dot with bike rider emoji animation
- In `src/components/sections/TimelineSection.tsx`: Replace the `<circle>` SVG element with an SVG `<text>` element containing a 🏍️ (motorcycle/bike rider) emoji
- Keep the same `<animateMotion>` so it rides along the curved path
- Increase size slightly for visibility

### Files to modify:
1. `src/pages/Index.tsx` — reduce CTA section padding
2. `src/components/sections/TimelineSection.tsx` — reduce bottom padding, replace dot with bike rider emoji

