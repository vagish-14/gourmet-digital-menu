import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-primary py-12 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-3">
          Cream & Batter
        </h3>
        <p className="font-body text-primary-foreground/60 text-sm mb-6">
          100% Vegetarian · Handcrafted Daily · Est. 2026
        </p>
        <div className="flex justify-center gap-6 text-3xl mb-8">
          <span className="hover:scale-125 transition-transform cursor-pointer">☕</span>
          <span className="hover:scale-125 transition-transform cursor-pointer">🍪</span>
          <span className="hover:scale-125 transition-transform cursor-pointer">🍦</span>
          <span className="hover:scale-125 transition-transform cursor-pointer">🧇</span>
        </div>
        <p className="font-body text-primary-foreground/40 text-xs">
          © 2026 Cream & Batter. All rights reserved.
        </p>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
