"use client";

import { useEffect, useRef } from "react";

type Flake = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  swing: number;
  swingAmp: number;
  alpha: number;
};

interface SnowfallProps {
  density?: number; // flakes per pixel
  color?: string; // neon color
}

export default function Snowfall({
  density = 0.00012,
  color = "#39ff14",
}: SnowfallProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>(0);
  const flakesRef = useRef<Flake[]>([]);
  const reduceMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = mq.matches;
    const handleChange = (e: MediaQueryListEvent) =>
      (reduceMotion.current = e.matches);
    mq.addEventListener?.("change", handleChange);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const rand = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const initFlakes = () => {
      flakesRef.current = [];
      const count = Math.max(20, Math.floor(width * height * density));
      for (let i = 0; i < count; i++) {
        flakesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: rand(1, 3.2),
          vy: rand(0.3, 1.2),
          vx: rand(-0.4, 0.4),
          swing: rand(0, Math.PI * 2),
          swingAmp: rand(0.3, 1.3),
          alpha: rand(0.5, 1),
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(canvas.offsetWidth * dpr);
      canvas.height = Math.floor(canvas.offsetHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      initFlakes();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (const f of flakesRef.current) {
        f.swing += 0.01;
        const wobble = Math.sin(f.swing) * f.swingAmp;
        f.x += f.vx + wobble * 0.05;
        f.y += f.vy;

        if (f.y > height + 6) {
          f.y = -6;
          f.x = Math.random() * width;
        }
        if (f.x > width + 6) f.x = -6;
        if (f.x < -6) f.x = width + 6;

        ctx.globalAlpha = f.alpha;
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    if (!reduceMotion.current) {
      animationRef.current = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
      mq.removeEventListener?.("change", handleChange);
    };
  }, [density, color]);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 select-none">
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
    </div>
  );
}
