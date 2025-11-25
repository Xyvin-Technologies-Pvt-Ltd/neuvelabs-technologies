"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      {/* Logo Icon */}
      <motion.div
        className="relative w-8 h-8"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Main logo shape - Spark/Star icon */}
        <svg className="relative w-full h-full" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neuve-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#3b82f6", stopOpacity:1}} />
              <stop offset="50%" style={{stopColor:"#2563eb", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#1d4ed8", stopOpacity:1}} />
            </linearGradient>
          </defs>
          
          {/* Spark/Star shape inspired by Gemini */}
          <path d="M16 2L18.5 10.5L27 13L18.5 15.5L16 24L13.5 15.5L5 13L13.5 10.5L16 2Z" fill="url(#neuve-gradient)"/>
          <path d="M24 8L25.5 12.5L30 14L25.5 15.5L24 20L22.5 15.5L18 14L22.5 12.5L24 8Z" fill="url(#neuve-gradient)" opacity="0.7"/>
          <path d="M8 20L9.5 24.5L14 26L9.5 27.5L8 32L6.5 27.5L2 26L6.5 24.5L8 20Z" fill="url(#neuve-gradient)" opacity="0.5"/>
        </svg>
      </motion.div>

      {/* Logo Text */}
      <span
        className="text-2xl text-gray-900 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300"
        style={{ fontFamily: "Goglast, sans-serif" }}
      >
        neuvelabs
      </span>
    </Link>
  );
}
