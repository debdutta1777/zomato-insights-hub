import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "problem", label: "Problem" },
  { id: "methodology", label: "Approach" },
  { id: "timeline", label: "Pipeline" },
  { id: "features", label: "Features" },
];

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one with highest intersection ratio
          const best = visible.reduce((a, b) => a.intersectionRatio > b.intersectionRatio ? a : b);
          setActiveSection(best.target.id);
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-zomato-dark/90 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold italic text-white tracking-tight">
            zomato
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {isHome ? (
            <>
              {sections.map(s => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    activeSection === s.id ? 'text-white' : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {s.label}
                  {activeSection === s.id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-zomato-red"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </>
          ) : (
            <Link to="/" className="text-white/70 hover:text-white text-sm font-medium transition-colors">← Back to Home</Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          {isHome ? (
            <Link
              to="/results"
              className="px-5 py-2 rounded-full bg-zomato-red text-white text-sm font-semibold hover:bg-zomato-red/90 transition-colors"
            >
              View Results
            </Link>
          ) : (
            <Link
              to="/"
              className="px-5 py-2 rounded-full bg-zomato-red text-white text-sm font-semibold hover:bg-zomato-red/90 transition-colors"
            >
              Home
            </Link>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
