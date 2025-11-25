"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IndustryImpactCard({ story, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
        {/* Icon */}
        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {story.icon}
        </div>

        {/* Industry Name */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
          {story.industry}
        </h3>

        {/* Challenge */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          <span className="font-semibold text-gray-700">Challenge:</span> {story.challenge}
        </p>

        {/* Outcome */}
        <div className="mt-auto pt-6 border-t border-gray-200">
          <p className="text-base text-gray-900 leading-relaxed">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 font-semibold">
              {story.outcome}
            </span>
          </p>
        </div>

        {/* Hover Indicator */}
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
            Learn more
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

