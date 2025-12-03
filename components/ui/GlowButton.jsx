"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Pre-defined complete class names for Tailwind JIT
const colorClasses = {
  green: {
    border: "border-neon-green",
    text: "text-neon-green",
    bg: "bg-neon-green",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]",
    hoverBg: "hover:bg-neon-green",
    primaryHover: "hover:bg-neon-green hover:text-background",
    filledHover: "hover:bg-transparent hover:text-neon-green",
  },
  cyan: {
    border: "border-neon-cyan",
    text: "text-neon-cyan",
    bg: "bg-neon-cyan",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]",
    hoverBg: "hover:bg-neon-cyan",
    primaryHover: "hover:bg-neon-cyan hover:text-background",
    filledHover: "hover:bg-transparent hover:text-neon-cyan",
  },
};

export default function GlowButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary", // primary | secondary | ghost | filled
  color = "green", // green | cyan
  size = "md", // sm | md | lg
  className = "",
  disabled = false,
  icon,
  iconPosition = "right",
}) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const colorStyle = colorClasses[color];

  const variants = {
    primary: `
      border-2 ${colorStyle.border} ${colorStyle.text}
      ${colorStyle.primaryHover}
      ${colorStyle.hoverGlow}
    `,
    secondary: `
      bg-surface border-2 border-border
      hover:border-neon-green hover:text-neon-green
      text-foreground hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]
    `,
    ghost: `
      bg-transparent border-2 border-transparent
      ${colorStyle.text}
      hover:border-current
    `,
    filled: `
      ${colorStyle.bg} text-background border-2 ${colorStyle.border}
      ${colorStyle.filledHover}
      ${colorStyle.hoverGlow}
    `,
  };

  const baseClasses = `
    relative inline-flex items-center justify-center gap-3
    font-mono font-bold uppercase tracking-widest
    transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${variants[variant]}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="w-5 h-5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="w-5 h-5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
}
