/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";

interface CyberBackgroundProps {
  isDarkMode: boolean;
}

export default function CyberBackground({ isDarkMode }: CyberBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle representation
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      alpha: number;
    }

    const particleCount = Math.min(65, Math.floor((width * height) / 22000));
    const particles: Particle[] = [];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.3 + 0.15,
        alpha: 0,
      });
    }

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Mouse movement tracker
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Main render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render custom grid
      const gridSpacing = 40;
      ctx.strokeStyle = isDarkMode 
        ? "rgba(0, 229, 255, 0.015)" 
        : "rgba(59, 130, 246, 0.025)";
      ctx.lineWidth = 1;
      
      for (let x = 0; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw subtle mouse-follow gradient spotlight to enhance futuristic depth
      const mouse = mouseRef.current;
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius * 2
      );
      
      if (isDarkMode) {
        gradient.addColorStop(0, "rgba(0, 229, 255, 0.05)");
        gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.015)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      } else {
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.04)");
        gradient.addColorStop(0.5, "rgba(147, 51, 234, 0.01)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      }
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius * 2, 0, Math.PI * 2);
      ctx.fill();

      // Render and update network particles
      ctx.lineWidth = 0.8;
      
      particles.forEach((p, i) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Boundary bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interactive mouse hover influence
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.alpha = Math.min(1, p.baseAlpha + force * 0.45);
          // Gently attract particles toward mouse to create organic fluid network feedback
          p.x += (dx / dist) * force * 0.5;
          p.y += (dy / dist) * force * 0.5;
        } else {
          p.alpha = p.baseAlpha;
        }

        // Draw particle node
        ctx.fillStyle = isDarkMode 
          ? `rgba(0, 229, 255, ${p.alpha})` 
          : `rgba(37, 99, 235, ${p.alpha})`;
          
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nodes inside proximity
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p2.x - p.x, p2.y - p.y);
          const maxDist = 120;

          if (distNodes < maxDist) {
            const opacity = (1 - distNodes / maxDist) * 0.13 * Math.min(p.alpha, p2.alpha);
            ctx.strokeStyle = isDarkMode 
              ? `rgba(0, 229, 255, ${opacity})` 
              : `rgba(37, 99, 235, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      id="cyber-nodes-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
