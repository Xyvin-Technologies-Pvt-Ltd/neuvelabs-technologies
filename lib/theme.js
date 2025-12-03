/**
 * Retro-Futuristic Theme Configuration
 * Neon/Tech dual-theme system with CRT effects
 */

export const themeConfig = {
  dark: {
    name: 'dark',
    label: 'Dark Mode',
    colors: {
      background: '#0a0a0f',
      surface: '#12121a',
      surfaceElevated: '#1a1a24',
      foreground: '#e0e0e0',
      foregroundMuted: '#8888aa',
      neonGreen: '#00ff88',
      neonCyan: '#00d4ff',
    },
  },
  light: {
    name: 'light',
    label: 'Light Mode',
    colors: {
      background: '#f5f5f0',
      surface: '#ffffff',
      surfaceElevated: '#fafafa',
      foreground: '#1a1a2e',
      foregroundMuted: '#555566',
      neonGreen: '#00b368',
      neonCyan: '#0099cc',
    },
  },
};

/**
 * Get theme-aware classes for components
 */
export const getThemeClasses = {
  // Background variants
  background: {
    base: 'bg-background',
    surface: 'bg-surface',
    elevated: 'bg-surface-elevated',
  },
  
  // Text variants
  text: {
    primary: 'text-foreground',
    muted: 'text-muted',
    neon: 'text-neon-green',
    accent: 'text-neon-cyan',
  },
  
  // Border variants
  border: {
    default: 'border-border',
    neon: 'neon-border',
    neonCyan: 'neon-border-cyan',
  },
  
  // Glow effects
  glow: {
    green: 'glow-green',
    cyan: 'glow-cyan',
    textGreen: 'text-glow-green',
    textCyan: 'text-glow-cyan',
  },
  
  // Card styles
  card: {
    base: 'retro-card',
    scanlines: 'retro-card retro-card-scanlines',
    glass: 'glass-card',
  },
  
  // Button styles
  button: {
    primary: 'retro-btn',
    ghost: 'bg-transparent border border-border hover:border-neon-green hover:text-neon-green transition-all',
    filled: 'bg-neon-green text-background hover:glow-green transition-all',
  },
  
  // Text styles
  typography: {
    display: 'font-display',
    mono: 'terminal-text',
    gradient: 'text-gradient-neon',
  },
  
  // Animations
  animation: {
    float: 'animate-float',
    pulseGlow: 'animate-pulse-glow',
    glitch: 'glitch',
    fluidShape: 'fluid-shape',
  },
  
  // Overlays
  overlay: {
    scanlines: 'scanlines',
    noise: 'noise-overlay',
    grid: 'grid-background',
    gridRadial: 'grid-background-radial',
  },
};

/**
 * Combine multiple theme classes
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get chapter-specific styles
 */
export const chapterStyles = {
  signal: {
    wrapper: 'min-h-screen relative overflow-hidden',
    background: 'absolute inset-0 grid-background-radial',
    content: 'relative z-10',
  },
  challenge: {
    wrapper: 'min-h-screen py-24 relative',
    background: 'bg-surface',
  },
  vision: {
    wrapper: 'min-h-screen py-24 relative overflow-hidden',
    background: 'bg-background',
  },
  proof: {
    wrapper: 'min-h-screen py-24 relative',
    background: 'bg-surface',
  },
  contact: {
    wrapper: 'min-h-screen py-24 relative',
    background: 'bg-background grid-background',
  },
};

/**
 * Z-index scale
 */
export const zIndex = {
  background: 0,
  content: 10,
  header: 50,
  modal: 100,
  overlay: 9998,
  scanlines: 9999,
};
