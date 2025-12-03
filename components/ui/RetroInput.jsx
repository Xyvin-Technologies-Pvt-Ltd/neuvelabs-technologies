"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RetroInput({
  type = "text",
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  className = "",
  error,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-xs font-mono font-bold uppercase tracking-widest text-muted mb-3"
        >
          {label}
          {required && <span className="text-neon-cyan ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          required={required}
          className={`
            w-full px-4 py-4
            bg-background border-2
            font-mono text-foreground
            placeholder:text-muted/40
            outline-none
            transition-all duration-300
            ${focused
              ? "border-neon-green shadow-[0_0_20px_rgba(0,255,136,0.3)]"
              : "border-border hover:border-muted"
            }
            ${error ? "border-neon-cyan shadow-[0_0_15px_rgba(0,255,255,0.3)]" : ""}
          `}
        />
        {/* Corner accents when focused */}
        {focused && (
          <>
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-neon-green" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-neon-green" />
          </>
        )}
      </div>
      {error && (
        <p className="mt-2 text-xs text-neon-cyan font-mono">&gt; {error}</p>
      )}
    </div>
  );
}

// Textarea variant
export function RetroTextarea({
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  rows = 4,
  className = "",
  error,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-xs font-mono font-bold uppercase tracking-widest text-muted mb-3"
        >
          {label}
          {required && <span className="text-neon-cyan ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          required={required}
          rows={rows}
          className={`
            w-full px-4 py-4
            bg-background border-2
            font-mono text-foreground
            placeholder:text-muted/40
            outline-none resize-none
            transition-all duration-300
            ${focused
              ? "border-neon-green shadow-[0_0_20px_rgba(0,255,136,0.3)]"
              : "border-border hover:border-muted"
            }
            ${error ? "border-neon-cyan shadow-[0_0_15px_rgba(0,255,255,0.3)]" : ""}
          `}
        />
        {/* Corner accents when focused */}
        {focused && (
          <>
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-neon-green" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-neon-green" />
          </>
        )}
      </div>
      {error && (
        <p className="mt-2 text-xs text-neon-cyan font-mono">&gt; {error}</p>
      )}
    </div>
  );
}
