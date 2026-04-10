import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface CinematicSectionProps {
  children: ReactNode;
  image: string;
  className?: string;
  contentClassName?: string;
}

const auraSpots = [
  { className: "-left-10 top-24 h-44 w-44 bg-primary/10", duration: 9 },
  { className: "right-[12%] top-16 h-36 w-36 bg-secondary/10", duration: 8 },
  { className: "bottom-12 left-1/3 h-32 w-32 bg-primary/10", duration: 7 },
  { className: "bottom-24 right-0 h-52 w-52 bg-primary/10", duration: 10 },
];

const CinematicSection = ({ children, image, className, contentClassName }: CinematicSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);

  return (
    <section ref={sectionRef} className={cn("relative overflow-hidden py-24", className)}>
      <motion.div className="absolute inset-0 -top-16 -bottom-16" style={{ y: bgY, scale: bgScale }}>
        <img
          src={image}
          alt=""
          loading="lazy"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--card) / 0.9) 0%, hsl(var(--background) / 0.76) 34%, hsl(var(--background) / 0.92) 100%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {auraSpots.map((spot) => (
          <motion.div
            key={spot.className}
            className={`absolute rounded-full blur-3xl ${spot.className}`}
            animate={{ y: [0, -24, 0], x: [0, 8, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: spot.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className={cn("container relative z-10 mx-auto px-4", contentClassName)}>{children}</div>
    </section>
  );
};

export default CinematicSection;