"use client";

import { motion } from "framer-motion";

export default function FluidShape({
  color = "green", // green | cyan
  size = 400,
  className = "",
  blur = 60,
  opacity = 0.4,
  delay = 0,
}) {
  const colors = {
    green: "#00ff88",
    cyan: "#00ffff",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay }}
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <div
        className="w-full h-full fluid-shape animate-pulse-glow"
        style={{
          background: colors[color],
          filter: `blur(${blur}px)`,
          opacity,
        }}
      />
    </motion.div>
  );
}

// Multiple fluid shapes composition - BOLDER
export function FluidShapeGroup({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <FluidShape
        color="green"
        size={500}
        className="top-[-250px] left-[-250px]"
        blur={100}
        opacity={0.3}
        delay={0}
      />
      <FluidShape
        color="cyan"
        size={350}
        className="bottom-[-150px] right-[-150px]"
        blur={80}
        opacity={0.25}
        delay={0.5}
      />
      <FluidShape
        color="cyan"
        size={250}
        className="top-[40%] right-[10%]"
        blur={60}
        opacity={0.2}
        delay={1}
      />
    </div>
  );
}

// Corner glow accent
export function CornerGlow({
  position = "top-left",
  color = "green",
  className = "",
}) {
  const positions = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const colors = {
    green: "#00ff88",
    cyan: "#00ffff",
  };

  return (
    <div
      className={`absolute w-[300px] h-[300px] pointer-events-none ${positions[position]} ${className}`}
      style={{
        background: `radial-gradient(circle at ${
          position.includes("left") ? "0%" : "100%"
        } ${position.includes("top") ? "0%" : "100%"}, ${
          colors[color]
        }40 0%, transparent 70%)`,
      }}
    />
  );
}
