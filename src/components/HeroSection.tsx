import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Cafe spread" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/30 text-primary-foreground/80 text-sm font-body tracking-widest uppercase">
            100% Vegetarian · Est. 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Cream & Batter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          Handcrafted daily with love — from artisan coffees to decadent desserts
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-body font-semibold rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Explore Our Menu
            <span className="text-xl">↓</span>
          </a>
        </motion.div>

        {/* Floating elements - hidden on mobile to avoid overlap */}
        <motion.div
          className="absolute top-20 left-10 text-5xl animate-float hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          ☕
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-5xl animate-float hidden md:block"
          style={{ animationDelay: "1s" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          🍦
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
