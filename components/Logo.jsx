"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative"
      >
        <Image
          src="/logo1.svg"
          alt="Neuve Labs"
          width={200}
          height={71}
          className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
          priority
        />
      </motion.div>
    </Link>
  );
}
