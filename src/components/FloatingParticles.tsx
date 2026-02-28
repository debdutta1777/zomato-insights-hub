import { motion } from "framer-motion";
import { useMemo } from "react";

const FOOD_EMOJIS = ["🍕", "🍔", "🍜", "🥟", "🍛", "🌮", "🍰", "🍣", "🥘", "🍱", "🧁", "🍩"];

interface FloatingParticlesProps {
  count?: number;
  dark?: boolean;
  className?: string;
}

const FloatingParticles = ({ count = 12, dark = true, className = "" }: FloatingParticlesProps) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      emoji: FOOD_EMOJIS[i % FOOD_EMOJIS.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 18 + Math.random() * 20,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 5,
      drift: 30 + Math.random() * 40,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute select-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            opacity: dark ? 0.15 : 0.2,
          }}
          animate={{
            y: [-p.drift / 2, p.drift / 2, -p.drift / 2],
            x: [-p.drift / 3, p.drift / 3, -p.drift / 3],
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
};

export default FloatingParticles;
