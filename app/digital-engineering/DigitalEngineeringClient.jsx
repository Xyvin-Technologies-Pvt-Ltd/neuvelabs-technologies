"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Brain,
  Cloud,
  BarChart3,
  Code2,
  Database,
  Layers,
  Cpu,
  Workflow,
  ArrowRight,
  Terminal,
  Zap,
} from "lucide-react";
import { RetroBadge } from "@/components/ui/RetroCard";
import { CornerGlow } from "@/components/ui/FluidShape";
import { RetroCTA } from "@/components/RetroPageTemplate";

// Pre-defined complete class names for Tailwind JIT
const colorStyles = {
  green: {
    text: "text-neon-green",
    border: "border-neon-green",
    borderTop: "border-t-neon-green",
    hoverBorder: "hover:border-neon-green",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]",
    groupHoverText: "group-hover:text-neon-green",
  },
  cyan: {
    text: "text-neon-cyan",
    border: "border-neon-cyan",
    borderTop: "border-t-neon-cyan",
    hoverBorder: "hover:border-neon-cyan",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]",
    groupHoverText: "group-hover:text-neon-cyan",
  },
};

export default function DigitalEngineeringClient() {
  const t = useTranslations("digitalEngineering");
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const services = [
    {
      title: t("services.aiMl.title"),
      description: t("services.aiMl.description"),
      href: "/digital-engineering/ai-ml",
      icon: Brain,
      colorKey: "green",
      cta: t("services.aiMl.cta"),
    },
    {
      title: t("services.cloudEngineering.title"),
      description: t("services.cloudEngineering.description"),
      href: "/digital-engineering/cloud-engineering",
      icon: Cloud,
      colorKey: "cyan",
      cta: t("services.cloudEngineering.cta"),
    },
    {
      title: t("services.dataEngineering.title"),
      description: t("services.dataEngineering.description"),
      href: "/digital-engineering/data-engineering",
      icon: Database,
      colorKey: "cyan",
      cta: t("services.dataEngineering.cta"),
    },
    {
      title: t("services.productEngineering.title"),
      description: t("services.productEngineering.description"),
      href: "/digital-engineering/product-engineering",
      icon: Cpu,
      colorKey: "green",
      cta: t("services.productEngineering.cta"),
    },
    {
      title: t("services.dataAnalytics.title"),
      description: t("services.dataAnalytics.description"),
      href: "/digital-engineering/data-analytics",
      icon: BarChart3,
      colorKey: "cyan",
      cta: t("services.dataAnalytics.cta"),
    },
    {
      title: t("services.enterpriseSoftware.title"),
      description: t("services.enterpriseSoftware.description"),
      href: "/digital-engineering/enterprise-software",
      icon: Code2,
      colorKey: "cyan",
      cta: t("services.enterpriseSoftware.cta"),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-background opacity-50" />
        <CornerGlow position="top-left" color="green" />
        <CornerGlow position="bottom-right" color="cyan" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="green" className="mb-8">
                <Zap className="w-3 h-3" />
                {t("hero.badge")}
              </RetroBadge>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-foreground">{t("hero.title")}</span>
                <br />
                <span className="text-neon-green text-glow-green">
                  {t("hero.titleHighlight")}
                </span>
              </h1>

              <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
                {t("hero.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        ref={gridRef}
        className="py-24 bg-surface border-y-2 border-border"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const styles = colorStyles[service.colorKey];

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={service.href}
                    className={`
                      block h-full p-8 bg-card border-2 border-border
                      border-t-4 ${styles.borderTop}
                      ${styles.hoverBorder} ${styles.hoverGlow}
                      transition-all duration-300 group
                    `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                      w-14 h-14 mb-6 border-2 ${styles.border}
                      flex items-center justify-center
                      transition-all duration-300
                    `}
                    >
                      <Icon className={`w-7 h-7 ${styles.text}`} />
                    </div>

                    {/* Title & Description */}
                    <h2
                      className={`text-2xl font-bold text-foreground mb-4 ${styles.groupHoverText} transition-colors`}
                    >
                      {service.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <div
                      className={`flex items-center gap-2 font-mono text-sm ${styles.text} group-hover:translate-x-2 transition-transform`}
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

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
