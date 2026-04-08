import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import krishnaImg from "@/assets/krishna-cute.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center pt-16">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-[0.04]"
            style={{
              width: 200 + i * 80,
              height: 200 + i * 80,
              background: `radial-gradient(circle, hsl(25 95% 53%) 0%, transparent 70%)`,
              left: `${15 + i * 12}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 z-[1]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10">
                Hare Krishna · Radhe Radhe
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
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
          >
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={krishnaImg}
              alt="Lord Krishna"
              width={280}
              height={280}
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
