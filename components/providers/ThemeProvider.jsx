"use client";

import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/theme";
import { useLanguageStore } from "@/store/language";
import ScanlineOverlay from "@/components/ui/ScanlineOverlay";

export default function ThemeProvider({ children }) {
  const { initializeTheme } = useThemeStore();
  const { initializeLocale } = useLanguageStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Initialize both theme and language on mount
    initializeTheme();
    initializeLocale();
    setMounted(true);
  }, [initializeTheme, initializeLocale]);

  // Prevent flash of incorrect theme
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0a0a0f]">
        {children}
      </div>
    );
  }

  return (
    <>
      {children}
      <ScanlineOverlay enabled={true} />
    </>
  );
}



