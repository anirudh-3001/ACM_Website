import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface ParticlesProps {
  className?: string;
}

export const Particles = ({ className = "" }: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const animationRef = useRef<number>();
  const scrollDirectionRef = useRef<number>(0);

  const initParticles = useCallback((width: number, height: number) => {
    const count = Math.floor((width * height) / 12000);
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.15 + 0.08,
      });
    }

    particlesRef.current = particles;
  }, []);

  const drawParticles = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((p, i) => {
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 150) {
            const f = ((150 - d) / 150) * 0.03;
            p.vx -= (dx / d) * f;
            p.vy -= (dy / d) * f;
          }
        }

        p.vy += scrollDirectionRef.current * 0.001;

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 119, 182, ${p.opacity})`; // #0077B6
        ctx.fill();

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const o = particles[j];
          const dx = p.x - o.x;
          const dy = p.y - o.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(o.x, o.y);
            ctx.strokeStyle = `rgba(0, 119, 182, ${
              0.07 * (1 - d / 120)
            })`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const r = parent.getBoundingClientRect();
      canvas.width = r.width;
      canvas.height = r.height;
      initParticles(r.width, r.height);
    };

    const onMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - r.left,
        y: e.clientY - r.top,
        active: true,
      };
    };

    const onLeave = () => (mouseRef.current.active = false);

    let lastY = window.scrollY;
    const onScroll = () => {
      scrollDirectionRef.current = (window.scrollY - lastY) * 0.5;
      lastY = window.scrollY;
    };

    const animate = () => {
      drawParticles(ctx, canvas.width, canvas.height);
      scrollDirectionRef.current *= 0.95;
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [initParticles, drawParticles]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: "none" }}
    />
  );
};
