"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

export default function ParticleField({
  particleCount = 100,
  className = "",
  color = "var(--neon-green)",
  maxSize = 3,
  speed = 1,
}) {
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * maxSize + 0.5,
      duration: (Math.random() * 4 + 2) / speed,
      delay: Math.random() * 2,
    }));
  }, [particleCount, maxSize, speed]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full star"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            boxShadow: `0 0 ${particle.size * 2}px ${color}`,
            "--duration": `${particle.duration}s`,
            "--delay": `${particle.delay}s`,
          }}
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Canvas-based particle field for better performance with many particles
export function ParticleFieldCanvas({
  particleCount = 200,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        opacityDirection: Math.random() > 0.5 ? 1 : -1,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Update opacity
        p.opacity += p.opacityDirection * 0.005;
        if (p.opacity >= 0.8 || p.opacity <= 0.1) {
          p.opacityDirection *= -1;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${p.opacity})`;
        ctx.fill();

        // Draw glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${p.opacity * 0.3})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
}


