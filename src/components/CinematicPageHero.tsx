import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CinematicPageHeroProps {
  image: string;
  title: string;
  highlight?: string;
  subtitle: string;
  eyebrow?: string;
}

const glowSpots = [
  { className: "top-16 left-[8%] h-40 w-40 bg-primary/15", duration: 7 },
  { className: "top-24 right-[10%] h-52 w-52 bg-secondary/10", duration: 9 },
  { className: "bottom-10 left-1/4 h-32 w-32 bg-primary/10", duration: 8 },
];

const sparkles = [
  { left: "12%", top: "28%", color: "bg-primary/50", delay: 0.2 },
  { left: "22%", top: "62%", color: "bg-primary-foreground/50", delay: 1 },
  { left: "74%", top: "26%", color: "bg-secondary/40", delay: 0.6 },
  { left: "82%", top: "58%", color: "bg-primary/40", delay: 1.4 },
  { left: "50%", top: "20%", color: "bg-primary-foreground/40", delay: 0.9 },
  { left: "60%", top: "72%", color: "bg-primary/35", delay: 1.8 },
];

const CinematicPageHero = ({
  image,
  title,
  highlight,
  subtitle,
  eyebrow = "Swami Guneshananda Ji",
}: CinematicPageHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[72vh] items-center overflow-hidden pt-32 pb-24"
    >
      <motion.div className="absolute inset-0 -top-12 -bottom-16" style={{ y: bgY, scale: bgScale }}>
        <img
          src={image}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background) / 0.18) 0%, hsl(var(--background) / 0.72) 56%, hsl(var(--background) / 0.96) 100%), linear-gradient(90deg, hsl(var(--background) / 0.86) 0%, hsl(var(--background) / 0.38) 54%, hsl(var(--background) / 0.8) 100%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {glowSpots.map((spot) => (
          <motion.div
            key={spot.className}
            className={`absolute rounded-full blur-3xl ${spot.className}`}
            animate={{ y: [0, -18, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: spot.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {sparkles.map((sparkle) => (
          <motion.div
            key={`${sparkle.left}-${sparkle.top}`}
            className={`absolute h-2.5 w-2.5 rounded-full ${sparkle.color} shadow-lg`}
            style={{ left: sparkle.left, top: sparkle.top }}
            animate={{ y: [0, -22, 0], opacity: [0.15, 1, 0.15], scale: [0.8, 1.35, 0.8] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: sparkle.delay }}
          />
        ))}
      </div>

      <motion.div className="container relative z-10 mx-auto px-4 text-center" style={{ y: contentY }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/55 px-5 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-5xl text-4xl font-heading font-bold leading-tight md:text-6xl"
        >
          <span>{title}</span>{" "}
          {highlight ? <span className="text-gradient-saffron">{highlight}</span> : null}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-foreground/75"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex flex-col items-center gap-3 text-sm font-medium text-muted-foreground"
        >
          <span>Scroll to experience more</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-7 justify-center rounded-full border border-primary/25 bg-card/40 pt-2 backdrop-blur-md"
          >
            <span className="h-3 w-1.5 rounded-full bg-primary/70" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicPageHero;