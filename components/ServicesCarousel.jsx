"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Brain, Cloud, BarChart3, Building2, Cpu, Code, Shield, Zap } from "lucide-react";

const services = [
  {
    title: "AI & Machine Learning",
    description:
      "We harness the power of artificial intelligence and machine learning to create intelligent solutions that drive innovation and transform business operations.",
    href: "/digital-engineering/ai-ml",
    icon: Brain,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Seamlessly modernize your infrastructure with cloud-native solutions, ensuring uninterrupted business operations and smooth digital transformation.",
    href: "/digital-engineering/cloud-devops",
    icon: Cloud,
  },
  {
    title: "Data Analytics",
    description:
      "Unlock the full potential of your data with advanced analytics, business intelligence, and data-driven insights that power strategic decision-making.",
    href: "/digital-engineering/data-analytics",
    icon: BarChart3,
  },
  {
    title: "Enterprise Software",
    description:
      "Build robust, scalable enterprise applications tailored to your business needs, ensuring efficiency, security, and long-term growth.",
    href: "/digital-engineering/enterprise-software",
    icon: Building2,
  },
  {
    title: "Product Engineering",
    description:
      "End-to-end product development from concept to deployment, ensuring innovative solutions that meet market demands and exceed expectations.",
    href: "/digital-engineering/product-engineering",
    icon: Cpu,
  },
  {
    title: "Integration Engineering",
    description:
      "Seamlessly connect disparate systems and platforms to create unified, efficient workflows that enhance productivity and reduce complexity.",
    href: "/digital-engineering/integration-engineering",
    icon: Code,
  },
  {
    title: "Cyber Security",
    description:
      "Comprehensive security solutions to protect your digital assets, ensuring data integrity and compliance with industry standards.",
    href: "/specialist-services/cyber-security",
    icon: Shield,
  },
  {
    title: "Process Automation",
    description:
      "Automate repetitive tasks and streamline business processes with intelligent automation solutions that increase efficiency and reduce costs.",
    href: "/specialist-services/process-automation",
    icon: Zap,
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const totalSlides = Math.ceil(services.length / itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const visibleServices = services.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {visibleServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} href={service.href}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-lg border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg h-full group"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#007AFF] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
          aria-label="Previous services"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#007AFF] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
          aria-label="Next services"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

