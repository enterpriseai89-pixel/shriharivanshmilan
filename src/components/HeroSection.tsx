import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import krishnaImg from "@/assets/krishna-cute.png";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden flex items-center pt-16">
      {/* Parallax background image */}
      <motion.div className="absolute inset-0 -top-10 -bottom-10" style={{ y: bgY, scale: bgScale }}>
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/65 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />

      {/* Floating golden particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 3 + Math.random() * 6,
              height: 3 + Math.random() * 6,
              background: i % 3 === 0
                ? "hsl(43 96% 56% / 0.7)"
                : i % 3 === 1
                ? "hsl(25 95% 53% / 0.5)"
                : "hsl(340 80% 58% / 0.4)",
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0.3, 1.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div className="container mx-auto px-4 relative z-10" style={{ y: textY }}>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold backdrop-blur-md border border-primary/20 shadow-lg shadow-primary/10">
                Hare Krishna · Radhe Radhe
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            >
              <span className="text-gradient-saffron">Swami Guneshananda Ji</span>
              <br />
              <span className="text-foreground/80">Maharaj</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-base md:text-lg text-foreground/70 max-w-xl mx-auto lg:mx-0"
            >
              Experience the divine wisdom through sacred{" "}
              <span className="text-primary font-semibold">Bhagavat Katha</span>{" "}
              from the holy land of Vrindavan, Uttar Pradesh
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="tel:+919430880950"
                className="bg-cta-gradient text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-all shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Book Bhagavat Katha
              </a>
              <Link
                to="/about"
                className="text-foreground/70 font-medium text-base hover:text-primary transition-colors px-6 py-3.5"
              >
                Learn More →
              </Link>
            </motion.div>
          </div>

          {/* Krishna Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
            style={{ perspective: "600px" }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 8, -8, 0],
                rotateX: [0, 4, -4, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={krishnaImg}
                alt="Lord Krishna"
                width={280}
                height={280}
                className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.3)) drop-shadow(0 0 60px hsl(25 95% 53% / 0.2))",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
