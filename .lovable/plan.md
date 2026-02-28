

# UI/UX Overhaul Plan

## 1. Hero Section — Food Background Image
- Use AI image generation to create a dark, atmospheric food/cuisine image (or use a food emoji/SVG pattern overlay)
- Actually simpler: add floating food emoji elements (🍕🍔🍜🥟🍛) as animated particles in the hero background using framer-motion
- Keep the dark gradient but add subtle food imagery as decorative floating elements

## 2. Floating Particles Component
- Create `src/components/FloatingParticles.tsx` — animated food emojis floating across sections
- Use framer-motion for smooth drift animations with random positions, speeds, and sizes
- Reuse across hero and other sections for cohesion

## 3. Problem Section — Visual Upgrade
- Change from plain white `bg-background` to a warm gradient background (subtle red-to-cream)
- Add glassmorphism cards with colored left borders and hover lift effects
- Add animated icon backgrounds with glow
- Make the baseline→optimized comparison more dramatic with animated arrow and color contrast

## 4. Methodology Section — Visual Upgrade
- Switch from white to a dark section (`section-dark`) for visual contrast
- Cards get glassmorphism dark styling with colored accent borders
- Add subtle particle overlay
- Colored icon circles per card

## 5. Timeline — Curved SVG Path with Food Icons
- Replace the straight vertical line with a curved SVG path
- Replace lucide icons with food emojis: 🍕 Pizza, 🍔 Burger, 🥟 Dumplings, 🍜 Noodles, 🍛 Curry, 🌮 Taco, 🍰 Cake, 🍣 Sushi, 🎯 Target
- Each step gets a unique food icon in the circle node
- Add a warm gradient background instead of plain light

## 6. "Explore All Results" Button — Centered After Timeline
- Move the gold CTA button out of the TakeawaysSection
- Place it as a standalone centered element right after the TimelineSection in Index.tsx
- Or restructure: add a centered CTA block between Timeline and Takeaways

## 7. Section Backgrounds — Add Color
- Problem: warm cream/rose gradient
- Methodology: dark section with subtle red glow
- Timeline: warm gold-tinted gradient
- Takeaways: dark section
- Alternate dark/light for visual rhythm

## 8. Global Animation Additions
- Add CSS keyframes for `float`, `drift`, `sparkle` in tailwind config
- Food particle animations throughout

## Files to modify:
1. **New**: `src/components/FloatingParticles.tsx` — reusable floating food particles
2. **Edit**: `src/components/sections/HeroSection.tsx` — add food particles overlay
3. **Edit**: `src/components/sections/ProblemSection.tsx` — gradient bg, glassmorphism cards, glow effects
4. **Edit**: `src/components/sections/MethodologySection.tsx` — dark section, glass cards, accent colors
5. **Edit**: `src/components/sections/TimelineSection.tsx` — curved SVG path, food emoji icons, warm bg
6. **Edit**: `src/components/sections/TakeawaysSection.tsx` — dark bg, centered gold CTA
7. **Edit**: `src/pages/Index.tsx` — add centered "Explore All Results" CTA between timeline and takeaways
8. **Edit**: `src/index.css` — new utility classes for section gradients
9. **Edit**: `tailwind.config.ts` — float/drift keyframes

