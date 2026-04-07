import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center pt-16">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D className="w-full h-full opacity-40" />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent z-[1]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm border border-primary/20">
              ✨ Divine Wisdom & Spiritual Guidance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight"
          >
            <span className="text-gradient-saffron">Swami</span>
            <br />
            <span className="text-gradient-saffron">Guneshananda</span>
            <br />
            <span className="text-foreground/80">Maharaj</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl"
          >
            Experience the divine wisdom through sacred{" "}
            <span className="text-primary font-semibold">Bhagavat Katha</span>{" "}
            and spiritual teachings from the holy land of Vrindavan
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="tel:+919430880950"
              className="bg-cta-gradient text-primary-foreground px-10 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              Book Bhagavat Katha
            </a>
            <Link
              to="/about"
              className="text-foreground/70 font-medium text-lg hover:text-primary transition-colors px-6 py-4"
            >
              Learn More →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
