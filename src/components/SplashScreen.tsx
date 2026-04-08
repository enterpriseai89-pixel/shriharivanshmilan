import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import radhaKrishnaImg from "@/assets/radha-krishna.jpg";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 800);
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, hsl(25 40% 8%) 0%, hsl(20 30% 5%) 50%, hsl(340 20% 7%) 100%)" }}
        >
          {/* Floating particles */}
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: i % 3 === 0 ? "hsl(25 95% 53%)" : i % 3 === 1 ? "hsl(43 96% 56%)" : "hsl(340 80% 58%)",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 0.9, 0],
                scale: [0.5, 2, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Central glow behind image */}
          <motion.div
            className="absolute w-80 h-80 rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(25 95% 53% / 0.2) 0%, hsl(43 96% 56% / 0.1) 40%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative text-center flex flex-col items-center">
            {/* Radha Krishna Image with 3D perspective */}
            <motion.div
              initial={{ scale: 0, rotateY: -90 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="mb-8 relative"
              style={{ perspective: "800px" }}
            >
              <motion.div
                animate={{ rotateY: [0, 5, -5, 0], rotateX: [0, 3, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={radhaKrishnaImg}
                  alt="Radha Krishna"
                  className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 shadow-2xl"
                  style={{
                    borderColor: "hsl(43 96% 56% / 0.6)",
                    boxShadow: "0 0 60px hsl(25 95% 53% / 0.4), 0 0 120px hsl(43 96% 56% / 0.2), 0 20px 60px rgba(0,0,0,0.5)",
                  }}
                />
                {/* Glowing ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "2px solid hsl(43 96% 56% / 0.3)",
                    boxShadow: "inset 0 0 30px hsl(25 95% 53% / 0.15)",
                  }}
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-heading text-2xl md:text-4xl font-bold tracking-wide"
              style={{
                background: "linear-gradient(135deg, hsl(25 95% 70%), hsl(43 96% 70%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Swami Guneshananda
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg md:text-xl mt-2 tracking-[0.3em] uppercase"
              style={{ color: "hsl(25 40% 60%)" }}
            >
              Maharaj
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="mt-6 h-px w-32 mx-auto"
              style={{
                background: "linear-gradient(90deg, transparent, hsl(43 96% 56%), transparent)",
              }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="mt-4 text-sm tracking-widest"
              style={{ color: "hsl(25 30% 45%)" }}
            >
              हरे कृष्ण · राधे राधे
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
