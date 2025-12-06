"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FluidShapeGroup } from "@/components/ui/FluidShape";
import { ParticleFieldCanvas } from "@/components/ui/ParticleField";
import TypewriterText from "@/components/ui/TypewriterText";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import GlowButton from "@/components/ui/GlowButton";
import { ArrowRight, Zap } from "lucide-react";

export default function ChapterSignal() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-background-radial opacity-50" />

      {/* Particle field */}
      <ParticleFieldCanvas particleCount={150} />

      {/* Fluid shapes */}
      <FluidShapeGroup />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Pre-title terminal text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-surface/50 border border-border backdrop-blur-sm">
              <Zap className="w-4 h-4 text-neon-green animate-pulse" />
              <TypewriterText
                text={t("preTitle")}
                speed={40}
                delay={500}
                className="text-sm text-neon-green"
              />
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">{t("title")}</span>
            <br />
            <span className="text-gradient-neon text-glow-green">
              {t("titleHighlight")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <GlowButton
              href="#challenges"
              color="green"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {t("cta")}
            </GlowButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator text={t("scrollIndicator")} />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
