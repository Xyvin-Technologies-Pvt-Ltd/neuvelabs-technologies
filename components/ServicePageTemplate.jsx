"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCard } from "./AnimatedSection";
import Image from "next/image";

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  showcaseImages = [],
  useCases,
}) {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-[#007AFF] font-semibold">
                  {subtitle || "Digital Engineering"}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {description}
              </p>
            </AnimatedSection>

            {/* Hero Image */}
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#007AFF]/10 via-[#6366F1]/10 to-[#8B5CF6]/10">
                {heroImage ? (
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <svg
                        className="w-24 h-24 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-sm">Hero Image Placeholder</p>
                    </div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features && features.length > 0 && (
        <section className="py-20 bg-[#FAFAFA]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Comprehensive solutions tailored to your business needs
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <AnimatedCard
                    key={index}
                    index={index}
                    className="bg-white p-8 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title || feature}
                    </h3>
                    {feature.description && (
                      <p className="text-gray-600">{feature.description}</p>
                    )}
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Image Showcase Section */}
      {showcaseImages && showcaseImages.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Our Work
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  See how we've helped businesses transform with our solutions
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {showcaseImages.map((image, index) => (
                  <AnimatedCard
                    key={index}
                    index={index}
                    className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#007AFF]/10 to-[#8B5CF6]/10 group"
                  >
                    {image.url ? (
                      <Image
                        src={image.url}
                        alt={image.alt || `${title} showcase ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <svg
                            className="w-16 h-16 mx-auto mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p className="text-sm">Showcase Image {index + 1}</p>
                        </div>
                      </div>
                    )}
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <p className="text-white font-medium">{image.caption}</p>
                      </div>
                    )}
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits && (
        <section className="py-20 bg-gradient-to-r from-[#007AFF] via-[#6366F1] to-[#8B5CF6] text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Why Choose Neuve Labs?
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <AnimatedCard
                    key={index}
                    index={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-white/90 leading-relaxed">
                      {benefit.description}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {useCases && useCases.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Use Cases
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Real-world applications of our solutions
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <AnimatedCard
                    key={index}
                    index={index}
                    className="border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#007AFF] to-[#8B5CF6] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-lg">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

