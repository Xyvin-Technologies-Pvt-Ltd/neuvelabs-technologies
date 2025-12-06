"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator({ text, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 3 }}
      className={`flex flex-col items-center gap-3 ${className}`}
    >
      {text && (
        <motion.span
          className="text-xs md:text-sm text-muted font-mono uppercase tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {text}
        </motion.span>
      )}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <ChevronDown className="w-5 h-5 text-neon-green" />
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-neon-green to-transparent mt-1"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function ScrollArrow({ className = "", color = "green" }) {
  const colorClasses = {
    green: {
      text: "text-neon-green",
      gradient: "from-neon-green",
    },
    cyan: {
      text: "text-neon-cyan",
      gradient: "from-neon-cyan",
    },
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`flex flex-col items-center ${className}`}
    >
      <ChevronDown className={`w-5 h-5 ${colors.text}`} />
      <motion.div
        className={`w-px h-8 bg-gradient-to-b ${colors.gradient} to-transparent mt-1`}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

