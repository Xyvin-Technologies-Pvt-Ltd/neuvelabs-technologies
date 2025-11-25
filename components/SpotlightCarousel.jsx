"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getSpotlightCaseStudies } from "@/lib/caseStudiesData";

export default function SpotlightCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const spotlightStudies = getSpotlightCaseStudies();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % spotlightStudies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [spotlightStudies.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + spotlightStudies.length) % spotlightStudies.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % spotlightStudies.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                Spotlight
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Transformations
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover how we've helped organizations achieve measurable impact through innovative technology solutions.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="relative h-[600px] md:h-[700px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url('${spotlightStudies[currentIndex].image}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
                      <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-md mb-6">
                          <span className="text-xs font-medium text-gray-900 uppercase tracking-wider">
                            {spotlightStudies[currentIndex].industry}
                          </span>
                        </div>

                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                          {spotlightStudies[currentIndex].excerpt}
                        </h3>

                        <div className="flex flex-wrap gap-6 mb-8">
                          <div className="flex items-center gap-3">
                            <div className="text-3xl md:text-4xl font-bold text-blue-600">
                              {spotlightStudies[currentIndex].metrics.primary}
                            </div>
                            <div className="text-sm text-gray-600 max-w-[120px]">
                              {spotlightStudies[currentIndex].metrics.primaryLabel}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-3xl md:text-4xl font-bold text-blue-500">
                              {spotlightStudies[currentIndex].metrics.secondary}
                            </div>
                            <div className="text-sm text-gray-600 max-w-[120px]">
                              {spotlightStudies[currentIndex].metrics.secondaryLabel}
                            </div>
                          </div>
                        </div>

                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                          {spotlightStudies[currentIndex].challenge}
                        </p>

                        <Link
                          href={`/insights/${spotlightStudies[currentIndex].slug}`}
                          className="group inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                        >
                          Read the full story
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-gray-50 border border-gray-200 shadow-md flex items-center justify-center text-gray-700 transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white hover:bg-gray-50 border border-gray-200 shadow-md flex items-center justify-center text-gray-700 transition-all duration-300 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {spotlightStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

