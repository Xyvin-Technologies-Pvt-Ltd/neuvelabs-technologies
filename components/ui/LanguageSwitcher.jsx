"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Languages, Globe } from "lucide-react";
import { useLanguageStore } from "@/store/language";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher({ className = "" }) {
  const { locale, toggleLocale, initializeLocale } = useLanguageStore();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    initializeLocale();
  }, [initializeLocale]);

  const handleToggle = () => {
    toggleLocale();
    // Set cookie for server-side detection
    document.cookie = `NEXT_LOCALE=${locale === 'en' ? 'ar' : 'en'}; path=/; max-age=31536000`;
    // Refresh to apply new locale
    router.refresh();
  };

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-full bg-surface ${className}`} />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className={`
        relative w-10 h-10 rounded-full
        flex items-center justify-center
        bg-surface border border-border
        hover:border-neon-cyan hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]
        transition-all duration-300
        ${className}
      `}
      aria-label={`Switch to ${locale === 'en' ? 'Arabic' : 'English'}`}
    >
      <span className="font-mono text-xs font-bold">
        {locale === "en" ? "AR" : "EN"}
      </span>
    </motion.button>
  );
}

// Expanded language selector with labels
export function LanguageSwitcherExpanded({ className = "" }) {
  const { locale, setLocale, initializeLocale } = useLanguageStore();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    initializeLocale();
  }, [initializeLocale]);

  const handleChange = (newLocale) => {
    setLocale(newLocale);
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  if (!mounted) return null;

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <Globe className="w-4 h-4 text-muted mr-2" />
      <button
        onClick={() => handleChange("en")}
        className={`
          px-2 py-1 text-xs font-mono uppercase
          border transition-all duration-300
          ${locale === "en"
            ? "border-neon-green text-neon-green shadow-[0_0_10px_rgba(0,255,136,0.3)]"
            : "border-border text-muted hover:border-neon-green hover:text-foreground"
          }
        `}
      >
        EN
      </button>
      <button
        onClick={() => handleChange("ar")}
        className={`
          px-2 py-1 text-xs font-mono
          border transition-all duration-300
          ${locale === "ar"
            ? "border-neon-green text-neon-green shadow-[0_0_10px_rgba(0,255,136,0.3)]"
            : "border-border text-muted hover:border-neon-green hover:text-foreground"
          }
        `}
      >
        عر
      </button>
    </div>
  );
}

