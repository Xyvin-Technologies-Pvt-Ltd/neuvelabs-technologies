"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, FileText, Bookmark, Send } from "lucide-react";
import { RetroBadge } from "@/components/ui/RetroCard";
import { CornerGlow } from "@/components/ui/FluidShape";
import GlowButton from "@/components/ui/GlowButton";

const insights = [
  {
    title: "The Future of AI in Enterprise: Trends and Opportunities",
    description:
      "Exploring how artificial intelligence is transforming enterprise operations and creating new opportunities for innovation.",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    slug: "future-of-ai-enterprise",
    colorKey: "green",
    featured: true,
  },
  {
    title: "Cloud Migration Best Practices: A Comprehensive Guide",
    description:
      "Key strategies and best practices for successful cloud migration, from planning to execution and optimization.",
    date: "2024-01-10",
    category: "Cloud & DevOps",
    slug: "cloud-migration-best-practices",
    colorKey: "cyan",
    featured: true,
  },
  {
    title: "Data-Driven Decision Making: Building an Analytics Culture",
    description:
      "How organizations can build a data-driven culture that empowers teams to make informed decisions based on analytics.",
    date: "2024-01-05",
    category: "Data Analytics",
    slug: "data-driven-decision-making",
    colorKey: "cyan",
    featured: false,
  },
  {
    title: "Digital Transformation in the Middle East: Opportunities and Challenges",
    description:
      "An analysis of the digital transformation landscape in the Middle East, highlighting opportunities and addressing common challenges.",
    date: "2023-12-20",
    category: "Digital Transformation",
    slug: "digital-transformation-middle-east",
    colorKey: "green",
    featured: false,
  },
];

const featuredInsights = insights.filter((i) => i.featured);
const remainingInsights = insights.filter((i) => !i.featured);

// Pre-defined complete class names for Tailwind JIT
const colorStyles = {
  green: {
    text: "text-neon-green",
    border: "border-neon-green",
    borderLeft: "border-l-neon-green",
    hoverBorder: "hover:border-neon-green",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]",
    groupHoverText: "group-hover:text-neon-green",
  },
  cyan: {
    text: "text-neon-cyan",
    border: "border-neon-cyan",
    borderLeft: "border-l-neon-cyan",
    hoverBorder: "hover:border-neon-cyan",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]",
    groupHoverText: "group-hover:text-neon-cyan",
  },
};

export default function InsightsPageClient() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-background opacity-50" />
        <CornerGlow position="top-left" color="cyan" />
        <CornerGlow position="bottom-right" color="green" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="cyan" className="mb-8">
                <FileText className="w-3 h-3" />
                Mission Logs
              </RetroBadge>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-foreground">Latest</span>
                <br />
                <span className="text-neon-cyan text-glow-cyan">Insights</span>
              </h1>

              <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
                Data-rich analysis, playbooks, and perspectives from our consultants working with
                government entities, banking leaders, and innovators.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section ref={gridRef} className="py-24 bg-surface border-y-2 border-border">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Featured Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {featuredInsights.map((insight, index) => {
              const styles = colorStyles[insight.colorKey];

              return (
                <motion.div
                  key={insight.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={`/insights/${insight.slug}`}
                    className={`
                      block h-full p-10 bg-card border-2 border-border
                      border-l-4 ${styles.borderLeft}
                      ${styles.hoverBorder} ${styles.hoverGlow}
                      transition-all duration-300 group
                    `}
                  >
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                      <span className={`px-3 py-1 border-2 ${styles.border} ${styles.text} font-mono text-xs uppercase`}>
                        {insight.category}
                      </span>
                      <span className="flex items-center gap-2 text-muted font-mono text-xs">
                        <Calendar className="w-4 h-4" />
                        {new Date(insight.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className={`text-2xl md:text-3xl font-bold text-foreground mb-4 ${styles.groupHoverText} transition-colors`}>
                      {insight.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted text-lg leading-relaxed mb-8">
                      {insight.description}
                    </p>

                    {/* CTA */}
                    <div className={`flex items-center gap-2 font-mono text-sm ${styles.text} group-hover:translate-x-2 transition-transform`}>
                      Access Full Log
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Remaining Insights */}
          <div className="grid md:grid-cols-2 gap-6">
            {remainingInsights.map((insight, index) => {
              const styles = colorStyles[insight.colorKey];

              return (
                <motion.div
                  key={insight.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={`/insights/${insight.slug}`}
                    className={`
                      block h-full p-8 bg-card border-2 border-border
                      ${styles.hoverBorder} ${styles.hoverGlow}
                      transition-all duration-300 group
                    `}
                  >
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                      <span className={`px-2 py-1 border-2 ${styles.border} ${styles.text} font-mono uppercase`}>
                        {insight.category}
                      </span>
                      <span className="text-muted font-mono">
                        {new Date(insight.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-bold text-foreground mb-3 ${styles.groupHoverText} transition-colors`}>
                      {insight.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {insight.description}
                    </p>

                    {/* CTA */}
                    <div className={`flex items-center gap-2 font-mono text-xs ${styles.text} group-hover:translate-x-2 transition-transform`}>
                      Read Article
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30" />
        <CornerGlow position="top-right" color="cyan" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border-2 border-border p-8 md:p-12"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                  <div className="w-3 h-3 rounded-full bg-neon-yellow" />
                  <div className="w-3 h-3 rounded-full bg-neon-green" />
                </div>
                <span className="text-xs font-mono text-muted ml-4">
                  newsletter_subscribe.exe
                </span>
              </div>

              <div className="text-center">
                <RetroBadge color="cyan" className="mb-6">
                  <Bookmark className="w-3 h-3" />
                  Stay Updated
                </RetroBadge>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Insights Delivered to Your Inbox
                </h2>
                <p className="text-muted mb-8">
                  Subscribe for strategic updates on AI, cyber security, and automation shaping
                  the UAE & GCC technology landscape.
                </p>

                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 bg-background border-2 border-border px-6 py-3 font-mono text-foreground placeholder:text-muted/50 focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-neon-cyan text-background font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </form>

                <p className="mt-6 text-xs text-muted font-mono">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
