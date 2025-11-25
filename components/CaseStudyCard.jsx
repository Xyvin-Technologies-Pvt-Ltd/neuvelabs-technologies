"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function CaseStudyCard({ caseStudy, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Background Image */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url('${caseStudy.image}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-transparent" />
        
        {/* Industry Badge */}
        <div className="absolute top-4 left-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-gray-200 backdrop-blur-md shadow-sm">
            <span className="text-xs font-medium text-gray-900 uppercase tracking-wider">
              {caseStudy.industry}
            </span>
          </div>
        </div>

        {/* Metrics Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="text-2xl font-bold text-blue-600">
                {caseStudy.metrics.primary}
              </div>
              <div className="text-xs text-gray-600">
                {caseStudy.metrics.primaryLabel}
              </div>
            </div>
            {caseStudy.metrics.secondary && (
              <div className="flex-1">
                <div className="text-2xl font-bold text-blue-500">
                  {caseStudy.metrics.secondary}
                </div>
                <div className="text-xs text-gray-600">
                  {caseStudy.metrics.secondaryLabel}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {caseStudy.excerpt}
        </h3>

        <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
          {caseStudy.challenge}
        </p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 border border-gray-200"
            >
              {tech}
            </span>
          ))}
          {caseStudy.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-600 border border-gray-200">
              +{caseStudy.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Link */}
        <Link
          href={`/insights/${caseStudy.slug}`}
          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
        >
          View case study
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

