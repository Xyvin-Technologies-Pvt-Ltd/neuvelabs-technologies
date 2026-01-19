"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Users,
  Target,
  Lightbulb,
  Trophy,
  Terminal,
  Cpu,
  Globe,
  Zap,
} from "lucide-react";
import FluidShape from "@/components/ui/FluidShape";
import { RetroBadge } from "@/components/ui/RetroCard";
import {
  RetroSection,
  RetroStats,
  RetroCTA,
} from "@/components/RetroPageTemplate";
import GlowButton from "@/components/ui/GlowButton";

export default function AboutPageClient() {
  const t = useTranslations("about");
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const stats = [
    { label: t("stats.projectsDelivered"), value: "500+" },
    { label: t("stats.globalReach"), value: "6+" },
    { label: t("stats.technologyPartnerships"), value: "10+" },
    { label: t("stats.clientSatisfaction"), value: "95%" },
  ];

  const values = [
    {
      title: t("values.innovation.title"),
      description: t("values.innovation.description"),
      icon: Lightbulb,
      colorClass: "green",
    },
    {
      title: t("values.clientSuccess.title"),
      description: t("values.clientSuccess.description"),
      icon: Trophy,
      colorClass: "cyan",
    },
    {
      title: t("values.peopleCentric.title"),
      description: t("values.peopleCentric.description"),
      icon: Users,
      colorClass: "cyan",
    },
    {
      title: t("values.integrity.title"),
      description: t("values.integrity.description"),
      icon: Target,
      colorClass: "green",
    },
  ];

  const capabilities = [
    {
      title: t("capabilities.ai.title"),
      description: t("capabilities.ai.description"),
    },
    {
      title: t("capabilities.cloud.title"),
      description: t("capabilities.cloud.description"),
    },
    {
      title: t("capabilities.enterprise.title"),
      description: t("capabilities.enterprise.description"),
    },
    {
      title: t("capabilities.partnerships.title"),
      description: t("capabilities.partnerships.description"),
    },
  ];

  // Pre-defined color styles to ensure Tailwind includes them
  const colorStyles = {
    green: {
      hoverBorder: "hover:border-neon-green",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]",
      iconHoverBorder: "group-hover:border-neon-green",
      iconHoverShadow: "group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]",
      iconHoverText: "group-hover:text-neon-green",
    },
    cyan: {
      hoverBorder: "hover:border-neon-cyan",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]",
      iconHoverBorder: "group-hover:border-neon-cyan",
      iconHoverShadow: "group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]",
      iconHoverText: "group-hover:text-neon-cyan",
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-background-radial opacity-50" />
        <FluidShape
          color="green"
          size={700}
          className="top-[-350px] left-[-350px]"
          blur={120}
          opacity={0.2}
        />
        <FluidShape
          color="cyan"
          size={500}
          className="bottom-[-250px] right-[-250px]"
          blur={100}
          opacity={0.15}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="green" className="mb-8">
                <Terminal className="w-3 h-3" />
                {t("hero.badge")}
              </RetroBadge>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-foreground">{t("hero.title")}</span>
                <br />
                <span className="text-neon-green text-glow-green">
                  {t("hero.titleHighlight")}
                </span>
              </h1>

              <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-10">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <GlowButton href="/contact" color="green">
                  {t("hero.ctaPrimary")}
                </GlowButton>
                <GlowButton href="/insights" variant="secondary">
                  {t("hero.ctaSecondary")}
                </GlowButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface border-y-2 border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <RetroStats stats={stats} />
        </div>
      </section>

      {/* Our Story */}
      <RetroSection ref={storyRef} variant="default">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="cyan" className="mb-8">
                <Cpu className="w-3 h-3" />
                {t("story.badge")}
              </RetroBadge>

              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                {t("story.title")}
                <br />
                <span className="text-neon-cyan">
                  {t("story.titleHighlight")}
                </span>
              </h2>

              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>{t("story.paragraph1")}</p>
                <p>{t("story.paragraph2")}</p>
                <p>{t("story.paragraph3")}</p>
              </div>
            </motion.div>

            {/* Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="space-y-6">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={storyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="relative pl-12 group"
                  >
                    <div className="absolute left-0 w-8 h-8 bg-surface border-2 border-border flex items-center justify-center group-hover:border-neon-green group-hover:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all">
                      <div className="w-2 h-2 rounded-full bg-neon-green" />
                    </div>
                    <div className="font-bold text-lg text-foreground mb-1 group-hover:text-neon-green transition-colors">
                      {capability.title}
                    </div>
                    <div className="text-muted text-sm">{capability.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </RetroSection>

      {/* Our Values */}
      <RetroSection ref={valuesRef} variant="surface">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <RetroBadge color="cyan" className="mb-6">
              <Zap className="w-3 h-3" />
              {t("values.badge")}
            </RetroBadge>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {t("values.title")}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {t("values.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const styles = colorStyles[value.colorClass];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`
                    p-8 bg-card border-2 border-border
                    ${styles.hoverBorder} ${styles.hoverShadow}
                    transition-all duration-300 group
                  `}
                >
                  <div
                    className={`
                    w-14 h-14 bg-background border-2 border-border
                    flex items-center justify-center mb-6
                    ${styles.iconHoverBorder} ${styles.iconHoverShadow}
                    transition-all
                  `}
                  >
                    <Icon
                      className={`w-7 h-7 text-muted ${styles.iconHoverText} transition-colors`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-neon-green transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </RetroSection>

      {/* Global Presence */}
      <RetroSection variant="grid">
        <FluidShape
          color="cyan"
          size={400}
          className="top-[-200px] left-[-200px]"
          blur={80}
          opacity={0.15}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="cyan" className="mb-6">
                <Globe className="w-3 h-3" />
                {t("global.badge")}
              </RetroBadge>

              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                {t("global.title")}{" "}
                <span className="text-neon-cyan">{t("global.titleHighlight")}</span>
              </h2>

              <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
                {t("global.description")}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  t("global.locations.rak"),
                  t("global.locations.kochi"),
                  t("global.locations.oman"),
                  t("global.locations.singapore"),
                ].map((location, index) => (
                  <motion.div
                    key={location}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 bg-surface/50 border-2 border-border text-center hover:border-neon-green transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-neon-green mx-auto mb-2 animate-pulse" />
                    <div className="text-sm font-mono text-muted">
                      {location}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </RetroSection>

      {/* CTA */}
      <RetroCTA
        title={t("cta.title")}
        description={t("cta.description")}
        buttonText={t("cta.buttonText")}
        buttonHref="/contact"
      />
    </>
  );
}
