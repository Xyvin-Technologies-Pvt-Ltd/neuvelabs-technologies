"use client";

import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Layers, Zap, Trophy, Users } from "lucide-react";

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
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                  {subtitle || "Digital Engineering"}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-10">
                {description}
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
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
                    <Layers className="w-24 h-24 text-white/20" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features && features.length > 0 && (
        <SectionWrapper className="py-24 bg-[#050505]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Key Capabilities
              </h2>
              <p className="text-gray-400 text-lg">
                Comprehensive solutions tailored to drive your digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.07]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {typeof feature === 'string' ? feature : feature.title}
                  </h3>
                  {typeof feature !== 'string' && feature.description && (
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Benefits Section */}
      {benefits && (
        <SectionWrapper className="py-24 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-black to-black" />
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Why Choose Neuve Labs?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                      <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Use Cases Section */}
      {useCases && useCases.length > 0 && (
        <SectionWrapper className="py-24 bg-[#050505]">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Real-World Impact
              </h2>
              <p className="text-gray-400 text-lg">
                See how we're helping organizations solve complex challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-white/10 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-8xl font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {useCase.description}
                    </p>
                    <div className="flex items-center text-indigo-400 font-medium text-sm">
                      Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Image Showcase Section */}
      {showcaseImages && showcaseImages.length > 0 && (
        <SectionWrapper className="py-24 bg-black">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {showcaseImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group"
                >
                  {image.url ? (
                    <Image
                      src={image.url}
                      alt={image.alt || `${title} showcase ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                      <Trophy className="w-16 h-16 text-white/10" />
                    </div>
                  )}
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}
    </>
  );
}

