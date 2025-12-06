"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Monitor } from "lucide-react";
import { useThemeStore } from "@/store/theme";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, initializeTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initializeTheme();
  }, [initializeTheme]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-full bg-surface ${className}`} />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`
        relative w-10 h-10 rounded-full
        flex items-center justify-center
        bg-surface border border-border
        hover:border-neon-green hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]
        transition-all duration-300
        ${className}
      `}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          scale: 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Moon className="w-5 h-5 text-neon-cyan" />
        ) : (
          <Sun className="w-5 h-5 text-neon-orange" />
        )}
      </motion.div>
      
      {/* Glow ring on hover */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          background: theme === "dark" 
            ? "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(255,102,0,0.1) 0%, transparent 70%)",
        }}
      />
    </motion.button>
  );
}

// Compact inline toggle for header
export function ThemeToggleInline({ className = "" }) {
  const { theme, toggleTheme, initializeTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initializeTheme();
  }, [initializeTheme]);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex items-center gap-2 px-3 py-1.5
        text-sm font-mono text-muted
        hover:text-foreground
        transition-colors
        ${className}
      `}
    >
      {theme === "dark" ? (
        <>
          <Moon className="w-4 h-4" />
          <span className="hidden sm:inline">DARK</span>
        </>
      ) : (
        <>
          <Sun className="w-4 h-4" />
          <span className="hidden sm:inline">LIGHT</span>
        </>
      )}
    </button>
  );
}



