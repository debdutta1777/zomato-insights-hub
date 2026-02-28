

# UI/UX Improvement Plan (Excluding Hero Section)

## Sections to Enhance

### 1. Problem Section — More Dynamic & Impactful
- Add animated gradient border on cards instead of just left border
- Add icon glow effect behind each icon (colored radial gradient)
- Make the baseline→optimized comparison bigger with a connecting animated dotted line and a "79.3% reduction" badge between them
- Add a subtle pulsing ring animation on the comparison cards
- Increase spacing and add a decorative divider between cards and comparison

### 2. Methodology Section — Richer Cards
- Add a hover shine/shimmer effect across cards (CSS gradient sweep)
- Make tag pills more colorful — match each card's accent color instead of generic white/10
- Add a subtle animated border glow on hover using box-shadow transitions
- Add connecting lines/dots between cards to suggest a flow
- Increase card padding and add a subtle inner gradient

### 3. Timeline Section — Polish
- Add a gradient fill to the SVG curved path (red→gold fade) instead of single color
- Add a pulsing dot animation that travels along the path
- Give each food emoji node a colored ring matching the step color
- Add glassmorphism background to each content card
- Step labels get colored pill backgrounds instead of just colored text

### 4. Takeaways Section — More Visual Impact
- Add animated check marks that appear sequentially on scroll
- Add a gold gradient border on the card
- Add floating particles to this section
- Each point gets a subtle separator line
- Add a gold accent glow behind the card

### 5. Navbar — Active Section Highlighting
- Add scroll-spy to highlight the active nav link based on scroll position
- Add a subtle bottom indicator line on active link

### 6. Footer — Slightly Richer
- Add a subtle red gradient line at the top instead of plain border
- Add social/team links row

### 7. Results Page Hero — More Impact
- Add floating particles
- Add a radial gradient glow behind the heading

## Files to modify:
1. `src/components/sections/ProblemSection.tsx` — gradient borders, icon glow, bigger comparison
2. `src/components/sections/MethodologySection.tsx` — shimmer hover, colored tags, glow
3. `src/components/sections/TimelineSection.tsx` — gradient path, colored rings, glass cards
4. `src/components/sections/TakeawaysSection.tsx` — sequential animations, gold border, particles
5. `src/components/Navbar.tsx` — active section highlight with scroll spy
6. `src/components/sections/FooterSection.tsx` — gradient top border
7. `src/pages/Results.tsx` — particles and glow in results hero

