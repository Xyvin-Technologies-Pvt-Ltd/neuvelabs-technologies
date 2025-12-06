"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import RetroCard, { RetroBadge } from "@/components/ui/RetroCard";
import { industryStories } from "@/lib/caseStudiesData";
import {
  Radio,
  CreditCard,
  Car,
  HeartPulse,
  Users,
  GraduationCap,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const industryIcons = {
  Telecommunications: Radio,
  Transport: Car,
  "Financial Services": CreditCard,
  Community: Users,
  Education: GraduationCap,
  Healthcare: HeartPulse,
};

// Map industries to their corresponding case study slugs
const industryCaseStudyMap = {
  Telecommunications: "telecom-catalogue-automation",
  Transport: "ev-fleet-management",
  "Financial Services": "loyalty-payment-platform",
  Community: "family-community-platform",
  Education: "custom-lms-platform",
  Healthcare: "counselling-management-system",
};

const cardColors = ["green", "cyan", "green", "cyan", "green", "cyan"];

export default function ChapterChallenge() {
  const t = useTranslations("challenge");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="challenges"
      ref={ref}
      className="relative py-32 bg-surface overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Section header */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <RetroBadge color="cyan" className="mb-6">
            {t("badge")}
          </RetroBadge>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">{t("title")}</span>
          </h2>

          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Industry cards - horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryStories.map((story, index) => {
              const Icon = industryIcons[story.industry] || AlertTriangle;
              const color = cardColors[index % cardColors.length];
              const caseStudySlug = industryCaseStudyMap[story.industry];

              return (
                <motion.div
                  key={story.industry}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <RetroCard
                    color={color}
                    variant="scanlines"
                    className="p-6 h-full"
                    href={`/insights/${caseStudySlug}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`
                        p-3 rounded bg-background/50
                        ${color === "green" ? "text-neon-green" : ""}
                        ${color === "cyan" ? "text-neon-cyan" : ""}
                      `}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-mono uppercase tracking-wider text-muted mb-2">
                          {story.industry}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                          {story.challenge}
                        </h3>
                        <div
                          className={`
                          text-sm font-mono
                          ${color === "green" ? "text-neon-green" : ""}
                          ${color === "cyan" ? "text-neon-cyan" : ""}
                        `}
                        >
                          → {story.outcome}
                        </div>
                      </div>
                    </div>
                  </RetroCard>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile horizontal scroll */}
          <div className="md:hidden overflow-x-auto hide-scrollbar pb-4">
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {industryStories.map((story, index) => {
                const Icon = industryIcons[story.industry] || AlertTriangle;
                const color = cardColors[index % cardColors.length];
                const caseStudySlug = industryCaseStudyMap[story.industry];

                return (
                  <motion.div
                    key={story.industry}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="w-[300px] flex-shrink-0"
                  >
                    <RetroCard
                      color={color}
                      variant="scanlines"
                      className="p-6 h-full"
                      href={`/insights/${caseStudySlug}`}
                    >
                      <div className="flex flex-col gap-4">
                        <div
                          className={`
                          p-3 rounded bg-background/50 w-fit
                          ${color === "green" ? "text-neon-green" : ""}
                          ${color === "cyan" ? "text-neon-cyan" : ""}
                        `}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs font-mono uppercase tracking-wider text-muted mb-2">
                            {story.industry}
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-3">
                            {story.challenge}
                          </h3>
                          <div
                            className={`
                            text-sm font-mono
                            ${color === "green" ? "text-neon-green" : ""}
                            ${color === "cyan" ? "text-neon-cyan" : ""}
                          `}
                          >
                            → {story.outcome}
                          </div>
                        </div>
                      </div>
                    </RetroCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            href="/insights?filter=case-studies"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-muted hover:text-neon-green transition-colors"
          >
            {t("viewAll")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
