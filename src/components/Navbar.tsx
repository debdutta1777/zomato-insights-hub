import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

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
              <a href="#problem" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Problem</a>
              <a href="#methodology" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Approach</a>
              <a href="#timeline" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Pipeline</a>
              <a href="#features" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Features</a>
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
