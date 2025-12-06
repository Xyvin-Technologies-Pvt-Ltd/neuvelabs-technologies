"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowLeft, CheckCircle2, Code, TrendingUp } from "lucide-react";
import Link from "next/link";
import { RetroBadge, MetricCard } from "@/components/ui/RetroCard";
import { CornerGlow } from "@/components/ui/FluidShape";

const colorStyles = {
  green: {
    text: "text-neon-green",
    border: "border-neon-green",
    bg: "bg-neon-green/10",
    glow: "text-glow-green",
  },
  cyan: {
    text: "text-neon-cyan",
    border: "border-neon-cyan",
    bg: "bg-neon-cyan/10",
    glow: "text-glow-cyan",
  },
};

export default function CaseStudyPageClient({ caseStudy }) {
  const styles = colorStyles[caseStudy.colorKey] || colorStyles.green;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-background min-h-screen">
        <div className="absolute inset-0 grid-background opacity-50" />
        <CornerGlow position="top-left" color={caseStudy.colorKey} />
        <CornerGlow position="bottom-right" color={caseStudy.colorKey === "green" ? "cyan" : "green"} />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <RetroBadge color={caseStudy.colorKey} className="mb-6">
              <CheckCircle2 className="w-3 h-3" />
              {caseStudy.category}
            </RetroBadge>

            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <span className={`px-3 py-1 border-2 ${styles.border} ${styles.text} font-mono text-xs uppercase`}>
                {caseStudy.industry}
              </span>
              <span className="flex items-center gap-2 text-muted font-mono text-xs">
                <Calendar className="w-4 h-4" />
                {new Date(caseStudy.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">{caseStudy.title}</span>
            </h1>

            <p className="text-xl text-muted leading-relaxed mb-8">
              {caseStudy.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-surface border-y-2 border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color={caseStudy.colorKey} className="mb-6">
                Challenge
              </RetroBadge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {caseStudy.challenge.title}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted text-lg leading-relaxed">
                  {caseStudy.challenge.content}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color={caseStudy.colorKey} className="mb-6">
                Solution
              </RetroBadge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {caseStudy.solution.title}
              </h2>
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-muted text-lg leading-relaxed">
                  {caseStudy.solution.content}
                </p>
              </div>

              {/* Features List */}
              {caseStudy.solution.features && (
                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {caseStudy.solution.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-card border-2 border-border"
                    >
                      <CheckCircle2 className={`w-5 h-5 ${styles.text} flex-shrink-0 mt-0.5`} />
                      <p className="text-muted">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-surface border-y-2 border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color={caseStudy.colorKey} className="mb-6">
                <TrendingUp className="w-3 h-3" />
                Results & Impact
              </RetroBadge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                {caseStudy.results.title}
              </h2>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {caseStudy.results.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="w-full min-w-0"
                  >
                    <MetricCard
                      value={metric.value}
                      label={metric.label}
                      color={caseStudy.colorKey}
                      description={metric.description}
                      className="w-full h-full"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted text-lg leading-relaxed">
                  {caseStudy.results.content}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color={caseStudy.colorKey} className="mb-6">
                <Code className="w-3 h-3" />
                Technology Stack
              </RetroBadge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Built With Modern Technologies
              </h2>
              <div className="flex flex-wrap gap-3">
                {caseStudy.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`px-4 py-2 border-2 ${styles.border} ${styles.text} font-mono text-sm uppercase bg-card`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface border-t-2 border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted text-lg mb-8">
                Let's discuss how we can help you achieve similar results.
              </p>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-8 py-4 border-2 ${styles.border} ${styles.text} font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all bg-card`}
              >
                Start Your Project
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

