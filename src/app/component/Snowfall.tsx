"use client";

import { useEffect, useRef } from "react";

interface Flake {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
}

interface SnowfallProps {
  density?: number;
}

export default function Snowfall({ density = 0.00005 }: SnowfallProps) {
  const color = "#39ff14"; // ✅ GREEN SNOW
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const flakeCount = Math.min(120, Math.floor(width * height * density));
    const flakes: Flake[] = [];

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        vy: Math.random() * 0.7 + 0.3,
        vx: Math.random() * 0.3 - 0.15,
      });
    }

    let lastTime = 0;
    const fpsInterval = 1000 / 30;

    const loop = (timestamp: number) => {
      const elapsed = timestamp - lastTime;
      if (elapsed > fpsInterval) {
        lastTime = timestamp;

        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = color; // 🎉 GREEN FLAKES

        for (const f of flakes) {
          f.y += f.vy;
          f.x += f.vx;

          if (f.y > height) {
            f.y = -5;
            f.x = Math.random() * width;
          }

          ctx.beginPath();
          ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(loop);
    };

    animationRef.current = requestAnimationFrame(loop);

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-30"
    />
  );
}
