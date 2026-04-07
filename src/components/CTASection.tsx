import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const CTASection = () => {
  return (
    <section className="py-24 bg-cta-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute text-primary-foreground/20 text-sm"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
          >
            ✨
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Experience the transformative power of divine wisdom and join our community of seekers
          </p>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+919430880950"
            className="inline-block bg-card text-primary px-12 py-5 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-shadow"
          >
            Book Your Bhagavat Katha
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
