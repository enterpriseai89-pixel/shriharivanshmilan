import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ctaBg from "@/assets/cta-bg.jpg";
import { useRef } from "react";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 -top-20 -bottom-20" style={{ y: bgY }}>
        <img
          src={ctaBg}
          alt=""
          loading="lazy"
          width={1920}
          height={800}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/80 via-dark-navy/70 to-dark-navy/85" />

      {/* Floating golden particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 3 + Math.random() * 5,
              height: 3 + Math.random() * 5,
              background: i % 3 === 0
                ? "hsl(43 96% 56% / 0.7)"
                : i % 3 === 1
                ? "hsl(25 95% 53% / 0.6)"
                : "hsl(0 0% 100% / 0.4)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-12">
            Experience the transformative power of divine wisdom and join our community of seekers
          </p>
          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+919430880950"
            className="inline-block bg-cta-gradient text-primary-foreground px-14 py-5 rounded-full text-lg font-semibold shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-shadow"
          >
            Book Your Bhagavat Katha
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
