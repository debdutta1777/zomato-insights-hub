const FooterSection = () => {
  return (
    <footer className="relative py-12 px-6 section-dark overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zomato-red/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl font-bold italic text-white tracking-tight">
              zomato
            </span>
            <span className="text-white/30">|</span>
            <span className="text-white/50 text-sm font-medium">Zomathon 2025</span>
          </div>

          <p className="text-white/30 text-sm text-center">
            Optimizing rider wait times through data-driven ML approaches. Built with passion at the Zomato Hackathon.
          </p>

          <p className="text-white/20 text-xs">
            © 2025 Hackathon Submission
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
