"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Zap, Trophy, Target, Terminal } from "lucide-react";
import { RetroBadge } from "@/components/ui/RetroCard";
import FluidShape, { CornerGlow } from "@/components/ui/FluidShape";
import GlowButton from "@/components/ui/GlowButton";
import { RetroCTA } from "@/components/RetroPageTemplate";

// Pre-defined complete class names for Tailwind JIT
const colorStyles = {
  green: {
    text: "text-neon-green",
    glow: "text-glow-green",
    border: "border-neon-green",
    borderTop: "border-t-neon-green",
    shadow: "shadow-[0_0_30px_rgba(0,255,136,0.4)]",
    hoverBorder: "hover:border-neon-green",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]",
    groupHoverText: "group-hover:text-neon-green",
  },
  cyan: {
    text: "text-neon-cyan",
    glow: "text-glow-cyan",
    border: "border-neon-cyan",
    borderTop: "border-t-neon-cyan",
    shadow: "shadow-[0_0_30px_rgba(0,255,255,0.4)]",
    hoverBorder: "hover:border-neon-cyan",
    hoverShadow: "hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]",
    groupHoverText: "group-hover:text-neon-cyan",
  },
};

export default function ServicePageTemplate({
  title,
  subtitle,
  description,
  heroImage,
  features,
  benefits,
  showcaseImages = [],
  useCases,
  accentColor = "green", // green | cyan
}) {
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const useCasesRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const useCasesInView = useInView(useCasesRef, { once: true, margin: "-100px" });

  const colors = colorStyles[accentColor];
  const featureColors = ["green", "cyan", "green"];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-background opacity-50" />
        <CornerGlow position="top-left" color={accentColor} />
        <CornerGlow position="bottom-right" color="cyan" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <RetroBadge color={accentColor} className="mb-8">
                <Terminal className="w-3 h-3" />
                {subtitle || "Digital Engineering"}
              </RetroBadge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className={`${colors.text} ${colors.glow}`}>{title}</span>
              </h1>

              <p className="text-lg text-muted leading-relaxed mb-10">{description}</p>

              <GlowButton href="/contact" color={accentColor} size="lg">
                Start Your Project
              </GlowButton>
            </motion.div>

            {heroImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-square border-2 border-border overflow-hidden corner-brackets">
                  {/* CRT overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,136,0.02)_2px,rgba(0,255,136,0.02)_4px)]" />
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features && features.length > 0 && (
        <section ref={featuresRef} className="py-24 bg-surface border-y-2 border-border">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <RetroBadge color="cyan" className="mb-6">
                <Zap className="w-3 h-3" />
                Capabilities Unlocked
              </RetroBadge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Key Features
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto">
                Comprehensive solutions tailored to drive your digital transformation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const colorKey = featureColors[index % featureColors.length];
                const fStyles = colorStyles[colorKey];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`
                      p-8 bg-card border-2 border-border
                      border-t-4 ${fStyles.borderTop}
                      ${fStyles.hoverBorder} ${fStyles.hoverShadow}
                      transition-all duration-300 group
                    `}
                  >
                    <div className={`w-12 h-12 mb-6 border-2 ${fStyles.border} flex items-center justify-center`}>
                      <Zap className={`w-6 h-6 ${fStyles.text}`} />
                    </div>
                    <h3 className={`text-xl font-bold text-foreground mb-3 ${fStyles.groupHoverText} transition-colors`}>
                      {typeof feature === "string" ? feature : feature.title}
                    </h3>
                    {typeof feature !== "string" && feature.description && (
                      <p className="text-muted text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits && benefits.length > 0 && (
        <section ref={benefitsRef} className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 grid-background opacity-30" />
          <FluidShape color={accentColor} size={400} className="top-[-200px] right-[-200px]" blur={100} opacity={0.15} />

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Why Choose Neuve Labs?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-6 p-8 bg-surface/50 border-2 border-border hover:border-neon-green transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-neon-green flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all">
                      <CheckCircle2 className="w-6 h-6 text-neon-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-neon-green transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {useCases && useCases.length > 0 && (
        <section ref={useCasesRef} className="py-24 bg-surface border-y-2 border-border">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <RetroBadge color="cyan" className="mb-6">
                <Target className="w-3 h-3" />
                Mission Logs
              </RetroBadge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Real-World Impact
              </h2>
              <p className="text-muted text-lg">
                See how we're helping organizations solve complex challenges
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative p-8 bg-card border-2 border-border hover:border-neon-cyan hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300 group overflow-hidden"
                >
                  {/* Index number */}
                  <div className="absolute top-4 right-4 font-mono text-6xl font-bold text-border group-hover:text-neon-cyan/20 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-neon-cyan transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-6">{useCase.description}</p>
                    <div className="flex items-center gap-2 text-sm font-mono text-muted group-hover:text-neon-cyan transition-colors">
                      <span>Access log</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Showcase Images */}
      {showcaseImages && showcaseImages.length > 0 && (
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {showcaseImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative aspect-video border-2 border-border overflow-hidden group"
                >
                  {image.url ? (
                    <>
                      <div className="absolute inset-0 z-10 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,136,0.02)_2px,rgba(0,255,136,0.02)_4px)]" />
                      <Image
                        src={image.url}
                        alt={image.alt || `${title} showcase ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-surface flex items-center justify-center">
                      <Trophy className="w-16 h-16 text-muted" />
                    </div>
                  )}
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-background/90 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-foreground font-mono text-sm">{image.caption}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <RetroCTA
        title="Ready to get started?"
        description="Let's discuss how we can help you achieve your goals with our expertise."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
