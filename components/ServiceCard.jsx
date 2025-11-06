"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={service.href}>
        <div className="bg-white p-8 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg h-full">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mb-4">
              <div className="text-white text-2xl font-bold">
                {service.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#007AFF] transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
