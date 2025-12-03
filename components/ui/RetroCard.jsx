"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RetroCard({
  children,
  href,
  className = "",
  color = "green", // green | cyan
  variant = "default", // default | accent | bordered
  hoverable = true,
  onClick,
}) {
  const colorStyles = {
    green: {
      border: "border-neon-green/30",
      hoverBorder: "hover:border-neon-green",
      glow: "hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]",
      accent: "border-t-4 border-t-neon-green",
      bg: "bg-neon-green",
    },
    cyan: {
      border: "border-neon-cyan/30",
      hoverBorder: "hover:border-neon-cyan",
      glow: "hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]",
      accent: "border-t-4 border-t-neon-cyan",
      bg: "bg-neon-cyan",
    },
  };

  const variants = {
    default: `border-2 ${colorStyles[color].border}`,
    accent: `border-2 border-border ${colorStyles[color].accent}`,
    bordered: `border-2 ${colorStyles[color].border}`,
  };

  const baseClasses = `
    relative bg-card
    transition-all duration-300
    ${variants[variant]}
    ${hoverable ? `${colorStyles[color].hoverBorder} ${colorStyles[color].glow} hover:-translate-y-1` : ""}
    ${className}
  `;

  const content = (
    <div className="h-full relative">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,136,0.015)_2px,rgba(0,255,136,0.015)_4px)]" />
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {content}
      </button>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}

// Metric card variant
export function MetricCard({
  value,
  label,
  color = "green",
  icon,
  className = "",
}) {
  const colorClasses = {
    green: "text-neon-green",
    cyan: "text-neon-cyan",
  };

  const glowClasses = {
    green: "text-glow-green",
    cyan: "text-glow-cyan",
  };

  return (
    <RetroCard color={color} variant="accent" className={`p-6 ${className}`}>
      <div className="flex items-start gap-4 relative z-10">
        {icon && (
          <div className={`${colorClasses[color]} opacity-60`}>
            {icon}
          </div>
        )}
        <div>
          <div className={`text-5xl font-bold font-mono ${colorClasses[color]} ${glowClasses[color]}`}>
            {value}
          </div>
          <div className="text-sm text-muted mt-2 uppercase tracking-wider font-mono">
            {label}
          </div>
        </div>
      </div>
    </RetroCard>
  );
}

// Badge/Tag component - BOLD
export function RetroBadge({
  children,
  color = "green",
  className = "",
}) {
  const colorClasses = {
    green: "border-neon-green text-neon-green bg-neon-green/10",
    cyan: "border-neon-cyan text-neon-cyan bg-neon-cyan/10",
  };

  return (
    <span
      className={`
        inline-flex items-center gap-2
        px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-widest
        border-2
        ${colorClasses[color]}
        ${className}
      `}
    >
      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
      {children}
    </span>
  );
}

// Pre-defined complete class names for FeatureCard
const featureColorStyles = {
  green: {
    text: "text-neon-green",
    border: "border-neon-green",
    groupHoverText: "group-hover:text-neon-green",
  },
  cyan: {
    text: "text-neon-cyan",
    border: "border-neon-cyan",
    groupHoverText: "group-hover:text-neon-cyan",
  },
};

// Feature card with icon
export function FeatureCard({
  title,
  description,
  icon: Icon,
  color = "green",
  className = "",
}) {
  const styles = featureColorStyles[color];

  return (
    <RetroCard color={color} variant="default" className={`p-8 group ${className}`}>
      <div className="relative z-10">
        {/* Icon with bold border */}
        <div className={`
          w-14 h-14 mb-6
          border-2 ${styles.border}
          flex items-center justify-center
          transition-all duration-300
        `}>
          {Icon && <Icon className={`w-7 h-7 ${styles.text}`} />}
        </div>
        
        <h3 className={`text-xl font-bold text-foreground mb-3 ${styles.groupHoverText} transition-colors`}>
          {title}
        </h3>
        
        {description && (
          <p className="text-muted text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </RetroCard>
  );
}
