const FooterSection = () => {
  return (
    <footer className="py-16 px-6 section-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl gradient-red flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="font-display font-bold text-2xl text-white">Zomathon 2025</span>
          </div>
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Optimizing rider wait times through data-driven ML approaches. 
            Built with passion at the Zomato Hackathon.
          </p>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/30 text-xs">
            © 2025 Zomathon Hackathon Submission • Built with React & Recharts
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
