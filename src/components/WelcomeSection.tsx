import krishnaImg from "@/assets/krishna-cute.png";
import swamiImg from "@/assets/swami-photo.jpg";
import welcomeBg from "@/assets/welcome-bg.jpg";
import AnimatedSection from "./AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "10000+", label: "Lives Touched" },
  { value: "500+", label: "Kathas Conducted" },
];

const WelcomeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 -top-20 -bottom-20" style={{ y: bgY }}>
        <img
          src={welcomeBg}
          alt=""
          loading="lazy"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />

      {/* Interactive floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 80 + i * 40,
              height: 80 + i * 40,
              background: i % 2 === 0
                ? "radial-gradient(circle, hsl(25 95% 53% / 0.08) 0%, transparent 70%)"
                : "radial-gradient(circle, hsl(43 96% 56% / 0.06) 0%, transparent 70%)",
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30 - i * 5, 0],
              x: [0, 10 + i * 3, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.img
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              src={krishnaImg}
              alt="Krishna"
              loading="lazy"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-center text-foreground">
              Welcome to <span className="text-gradient-saffron">Divine Wisdom</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-foreground/70 text-lg leading-relaxed">
              Swami Guneshananda Ji brings decades of spiritual wisdom and devotion to guide
              souls on their divine journey. Through his enlightening Bhagavat Katha, experience the
              profound teachings that transform hearts and minds.
            </p>
            <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
              Join thousands of devotees who have found peace, purpose, and spiritual awakening
              through his sacred teachings in the holy land of Vrindavan, Uttar Pradesh.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <AnimatedSection key={stat.label} delay={i * 0.15}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="text-center p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-border/30 shadow-lg"
                  >
                    <div className="text-3xl md:text-4xl font-heading font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative group">
              <div className="rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={swamiImg}
                  alt="Swami Guneshananda Maharaj"
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-80 md:h-[32rem] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/10 blur-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-secondary/10 blur-2xl -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
