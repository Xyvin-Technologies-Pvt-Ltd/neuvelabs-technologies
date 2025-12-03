"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import RetroCard, { RetroBadge, MetricCard } from "@/components/ui/RetroCard";
import GlowButton from "@/components/ui/GlowButton";
import { caseStudies } from "@/lib/caseStudiesData";
import { ArrowRight, FileText, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Get featured case studies
const featuredCases = caseStudies.filter(c => c.featured).slice(0, 4);

export default function ChapterProof() {
  const t = useTranslations("proof");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 bg-surface overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* Diagonal accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <RetroBadge color="green" className="mb-6">
            <FileText className="w-3 h-3" />
            {t("badge")}
          </RetroBadge>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-foreground">{t("title")}</span>
              </h2>
              <p className="text-lg text-muted max-w-2xl">
                {t("subtitle")}
              </p>
            </div>
            
            <GlowButton
              href="/insights"
              variant="secondary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View all case studies
            </GlowButton>
          </div>
        </motion.div>

        {/* Featured case study - large card */}
        {featuredCases[0] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Link
              href={`/insights/${featuredCases[0].slug}`}
              className="block group"
            >
              <RetroCard
                color="green"
                variant="scanlines"
                className="overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className="relative h-64 md:h-auto min-h-[300px]">
                    <Image
                      src={featuredCases[0].image}
                      alt={featuredCases[0].clientType}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* CRT overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/50 to-transparent" />
                    <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,136,0.03)_2px,rgba(0,255,136,0.03)_4px)]" />
                  </div>

                  {/* Content side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-muted">
                        {featuredCases[0].industry}
                      </span>
                      <span className="text-muted">•</span>
                      <span className="text-xs font-mono text-neon-green">
                        Featured
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-neon-green transition-colors">
                      {featuredCases[0].excerpt}
                    </h3>

                    <p className="text-muted mb-6 leading-relaxed">
                      {featuredCases[0].challenge}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div>
                        <div className="text-3xl font-bold font-mono text-neon-green text-glow-green">
                          {featuredCases[0].metrics.primary}
                        </div>
                        <div className="text-xs text-muted uppercase tracking-wider">
                          {featuredCases[0].metrics.primaryLabel}
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold font-mono text-neon-cyan text-glow-cyan">
                          {featuredCases[0].metrics.secondary}
                        </div>
                        <div className="text-xs text-muted uppercase tracking-wider">
                          {featuredCases[0].metrics.secondaryLabel}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {featuredCases[0].technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono bg-background/50 border border-border rounded text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </RetroCard>
            </Link>
          </motion.div>
        )}

        {/* Other case studies grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {featuredCases.slice(1, 4).map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Link href={`/insights/${study.slug}`} className="block group h-full">
                <RetroCard
                  color={index === 0 ? "magenta" : index === 1 ? "cyan" : "green"}
                  className="p-6 h-full"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-4 h-4 text-neon-green" />
                    <span className="text-xs font-mono uppercase tracking-wider text-muted">
                      {study.industry}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-neon-green transition-colors line-clamp-2">
                    {study.excerpt}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className={`
                      text-2xl font-bold font-mono
                      ${index === 0 ? 'text-neon-magenta' : index === 1 ? 'text-neon-cyan' : 'text-neon-green'}
                    `}>
                      {study.metrics.primary}
                    </span>
                    <span className="text-xs text-muted">
                      {study.metrics.primaryLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-muted group-hover:text-foreground transition-colors">
                    {t("readMore")}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </RetroCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

