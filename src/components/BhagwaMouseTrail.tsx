import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  hue: number;
}

const BhagwaMouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
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
      const speed = Math.sqrt(dx * dx + dy * dy);
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const count = Math.min(Math.floor(speed * 0.2) + 1, 5);
      for (let i = 0; i < count; i++) {
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.2;
        const vel = speed * 0.06 + Math.random() * 0.8;
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 6,
          y: e.clientY + (Math.random() - 0.5) * 6,
          vx: Math.cos(angle) * vel * (Math.random() - 0.3),
          vy: Math.sin(angle) * vel * (Math.random() - 0.3) - 0.5,
          life: 1,
          size: Math.random() * 2.5 + 1,
          hue: 15 + Math.random() * 30,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.01;
        p.vx *= 0.99;
        p.life -= 0.02;
        p.size *= 0.985;

        if (p.life <= 0 || p.size < 0.3) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const alpha = p.life * 0.6;
        ctx.fillStyle = `hsla(${p.hue}, 95%, 55%, ${alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${p.hue}, 95%, 55%, ${alpha * 0.4})`;
        ctx.fill();
        ctx.shadowBlur = 0;

        return true;
      });

      if (particles.current.length > 150) {
        particles.current = particles.current.slice(-150);
      }

      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
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
