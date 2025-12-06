"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator({ 
  text = "Scroll to explore",
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className={`flex flex-col items-center gap-3 ${className}`}
    >
      {text && (
        <span className="text-xs font-mono uppercase tracking-widest text-muted">
          {text}
        </span>
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
        <div className="w-6 h-10 rounded-full border border-border flex justify-center pt-2">
          <motion.div
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 rounded-full bg-neon-green"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Alternative arrow style
export function ScrollArrow({ className = "" }) {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`text-neon-green ${className}`}
    >
      <ChevronDown className="w-8 h-8" />
    </motion.div>
  );
}



