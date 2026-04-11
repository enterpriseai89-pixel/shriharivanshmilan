import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  hue: number;
  type: "trail" | "burst" | "scroll";
}

const BhagwaMouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, speed: 0 });
  const scrollSpeed = useRef(0);
  const lastScroll = useRef(0);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - mouse.current.x;
      const dy = e.clientY - mouse.current.y;
      mouse.current.speed = Math.sqrt(dx * dx + dy * dy);
      mouse.current.prevX = mouse.current.x;
      mouse.current.prevY = mouse.current.y;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const speed = mouse.current.speed;
      const count = Math.min(Math.floor(speed * 0.3) + 2, 12);

      for (let i = 0; i < count; i++) {
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.5;
        const vel = speed * 0.08 + Math.random() * 1.5;
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: Math.cos(angle) * vel * (Math.random() - 0.3),
          vy: Math.sin(angle) * vel * (Math.random() - 0.3) - 0.8,
          life: 1,
          size: Math.random() * (2 + speed * 0.06) + 1.5,
          hue: 15 + Math.random() * 30,
          type: speed > 8 ? "burst" : "trail",
        });
      }

      // Fast movement burst
      if (speed > 20) {
        for (let i = 0; i < 6; i++) {
          const burstAngle = Math.random() * Math.PI * 2;
          particles.current.push({
            x: e.clientX,
            y: e.clientY,
            vx: Math.cos(burstAngle) * (2 + Math.random() * 3),
            vy: Math.sin(burstAngle) * (2 + Math.random() * 3),
            life: 1,
            size: Math.random() * 5 + 3,
            hue: 30 + Math.random() * 15,
            type: "burst",
          });
        }
      }
    };

    const handleScroll = () => {
      const now = performance.now();
      const delta = Math.abs(window.scrollY - lastScroll.current);
      scrollSpeed.current = delta;
      lastScroll.current = window.scrollY;

      if (delta > 5) {
        const count = Math.min(Math.floor(delta * 0.15), 8);
        for (let i = 0; i < count; i++) {
          particles.current.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.5) * 2 - delta * 0.03,
            life: 1,
            size: Math.random() * 3 + 1.5,
            hue: 20 + Math.random() * 25,
            type: "scroll",
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.015;
        p.vx *= 0.99;

        const decayRate = p.type === "burst" ? 0.025 : p.type === "scroll" ? 0.018 : 0.022;
        p.life -= decayRate;
        p.size *= p.type === "burst" ? 0.97 : 0.985;

        if (p.life <= 0 || p.size < 0.3) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const alpha = p.life * (p.type === "burst" ? 0.85 : 0.65);
        ctx.fillStyle = `hsla(${p.hue}, 95%, ${p.type === "burst" ? 60 : 55}%, ${alpha})`;
        ctx.shadowBlur = p.type === "burst" ? 18 : 10;
        ctx.shadowColor = `hsla(${p.hue}, 95%, 55%, ${alpha * 0.5})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        return true;
      });

      if (particles.current.length > 250) {
        particles.current = particles.current.slice(-250);
      }

      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[99] pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default BhagwaMouseTrail;
