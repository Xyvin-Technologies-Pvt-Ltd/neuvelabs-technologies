"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      {/* Logo Icon */}
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Main logo shape */}
      </motion.div>

      {/* Logo Text */}
      <span
        className="text-2xl text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"
        style={{ fontFamily: "Goglast, sans-serif" }}
      >
        neuvelabs
      </span>
    </Link>
  );
}
