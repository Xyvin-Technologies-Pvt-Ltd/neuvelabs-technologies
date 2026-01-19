"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, Calendar, FileText, Bookmark, Send } from "lucide-react";
import { RetroBadge } from "@/components/ui/RetroCard";
import { CornerGlow } from "@/components/ui/FluidShape";

const insights = [
  {
    title: "The Future of AI in Enterprise: Trends and Opportunities",
    description:
      "Exploring how artificial intelligence is transforming enterprise operations and creating new opportunities for innovation.",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    slug: "future-of-ai-enterprise",
    colorKey: "green",
    isCaseStudy: false,
  },
  {
    title: "Cloud Migration Best Practices: A Comprehensive Guide",
    description:
      "Key strategies and best practices for successful cloud migration, from planning to execution and optimization.",
    date: "2024-01-10",
    category: "Cloud & DevOps",
    slug: "cloud-migration-best-practices",
    colorKey: "cyan",
    isCaseStudy: false,
  },
  {
    title: "Industrial AI Document Intelligence: Transforming Technical Knowledge Search",
    description:
      "How we built an AI-powered RAG system that reduced document search time by 90% for a telecommunications team managing thousands of technical specifications.",
    date: "2024-02-20",
    category: "Case Study",
    slug: "industrial-ai-document-intelligence",
    colorKey: "green",
    isCaseStudy: true,
    industry: "Telecommunications & Construction",
  },
  {
    title: "Hyperlocal Business Network: Connecting Rural Communities Digitally",
    description:
      "A comprehensive platform connecting local businesses, service providers, and customers at the grassroots level, transforming rural commerce through digital innovation.",
    date: "2024-02-15",
    category: "Case Study",
    slug: "hyperlocal-business-network",
    colorKey: "cyan",
    isCaseStudy: true,
    industry: "Rural Digital Services",
  },
  {
    title: "Data-Driven Decision Making: Building an Analytics Culture",
    description:
      "How organizations can build a data-driven culture that empowers teams to make informed decisions based on analytics.",
    date: "2024-01-05",
    category: "Data Analytics",
    slug: "data-driven-decision-making",
    colorKey: "cyan",
    isCaseStudy: false,
  },
  {
    title: "Educational Counseling System: Streamlining Student Support Operations",
    description:
      "A comprehensive counseling management platform that streamlined operations for an international school system, managing 1000+ student cases with precision and efficiency.",
    date: "2024-02-10",
    category: "Case Study",
    slug: "educational-counseling-system",
    colorKey: "green",
    isCaseStudy: true,
    industry: "International Education",
  },
  {
    title: "Multi-Tier Loyalty Platform: Scaling Enterprise Rewards",
    description:
      "An enterprise-grade loyalty system handling 35,000 daily transactions for 5,000 concurrent users, featuring multi-tier gamification and intelligent point management.",
    date: "2024-02-05",
    category: "Case Study",
    slug: "multi-tier-loyalty-platform",
    colorKey: "cyan",
    isCaseStudy: true,
    industry: "Retail & Service Industry",
  },
  {
    title: "Digital Business Identity Suite: Zero-Paper Corporate Networking",
    description:
      "A modern digital business card platform with QR codes and real-time analytics, eliminating paper waste while providing actionable engagement insights.",
    date: "2024-01-28",
    category: "Case Study",
    slug: "digital-business-identity-suite",
    colorKey: "green",
    isCaseStudy: true,
    industry: "Corporate Services",
  },
  {
    title: "Family Connection Platform: Multi-Generational Digital Ecosystem",
    description:
      "A comprehensive family management platform combining genealogy tracking, financial management, and community engagement features for extended family networks.",
    date: "2024-01-25",
    category: "Case Study",
    slug: "family-connection-platform",
    colorKey: "cyan",
    isCaseStudy: true,
    industry: "Social & Community",
  },
  {
    title:
      "Digital Transformation in the Middle East: Opportunities and Challenges",
    description:
      "An analysis of the digital transformation landscape in the Middle East, highlighting opportunities and addressing common challenges.",
    date: "2023-12-20",
    category: "Digital Transformation",
    slug: "digital-transformation-middle-east",
    colorKey: "green",
    isCaseStudy: false,
  },
];

// Pre-defined complete class names for Tailwind JIT
const colorStyles = {
  green: {
    text: "text-neon-green",
    border: "border-neon-green",
    hoverBorder: "hover:border-neon-green",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]",
    groupHoverText: "group-hover:text-neon-green",
  },
  cyan: {
    text: "text-neon-cyan",
    border: "border-neon-cyan",
    hoverBorder: "hover:border-neon-cyan",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]",
    groupHoverText: "group-hover:text-neon-cyan",
  },
};

export default function InsightsPageClient() {
  const t = useTranslations("insights");
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: t("filters.all") },
    { id: "case-studies", label: t("filters.caseStudies") },
    { id: "articles", label: t("filters.articles") },
  ];

  useEffect(() => {
    const filter = searchParams.get("filter");
    if (filter === "case-studies" || filter === "articles") {
      setActiveFilter(filter);
    } else {
      setActiveFilter("all");
    }
  }, [searchParams]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    if (filterId === "all") {
      router.push("/insights", { scroll: false });
    } else {
      router.push(`/insights?filter=${filterId}`, { scroll: false });
    }
  };

  const filteredInsights = insights.filter((insight) => {
    if (activeFilter === "case-studies") {
      return insight.isCaseStudy;
    }
    if (activeFilter === "articles") {
      return !insight.isCaseStudy;
    }
    return true;
  });

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
                {t("hero.badge")}
              </RetroBadge>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-foreground">{t("hero.title")}</span>
                <br />
                <span className="text-neon-cyan text-glow-cyan">{t("hero.titleHighlight")}</span>
              </h1>

              <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
                {t("hero.description")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-surface border-y-2 border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-8">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleFilterChange(tab.id)}
                  className={`
                    relative px-4 py-2 font-mono text-sm uppercase tracking-wider
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-neon-cyan border-b-2 border-neon-cyan"
                        : "text-muted hover:text-foreground"
                    }
                  `}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section
        ref={gridRef}
        className="py-24 bg-surface border-b-2 border-border"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map((insight, index) => {
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
                      block h-full p-8 bg-card border-2 border-border
                      ${styles.hoverBorder} ${styles.hoverGlow}
                      transition-all duration-300 group
                    `}
                  >
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                      <span
                        className={`px-2 py-1 border-2 ${styles.border} ${styles.text} font-mono uppercase`}
                      >
                        {insight.category}
                      </span>
                      {insight.isCaseStudy && insight.industry && (
                        <span className="px-2 py-1 border-2 border-border text-muted font-mono uppercase">
                          {insight.industry}
                        </span>
                      )}
                      <span className="text-muted font-mono">
                        {new Date(insight.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl font-bold text-foreground mb-3 ${styles.groupHoverText} transition-colors`}
                    >
                      {insight.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {insight.description}
                    </p>

                    {/* CTA */}
                    <div
                      className={`flex items-center gap-2 font-mono text-xs ${styles.text} group-hover:translate-x-2 transition-transform`}
                    >
                      {insight.isCaseStudy ? t("cta.viewCaseStudy") : t("cta.readArticle")}
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
                  newsletter
                </span>
              </div>

              <div className="text-center">
                <RetroBadge color="cyan" className="mb-6">
                  <Bookmark className="w-3 h-3" />
                  {t("newsletter.badge")}
                </RetroBadge>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t("newsletter.title")}
                </h2>
                <p className="text-muted mb-8">
                  {t("newsletter.description")}
                </p>

                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder={t("newsletter.placeholder")}
                    className="flex-1 bg-background border-2 border-border px-6 py-3 font-mono text-foreground placeholder:text-muted/50 focus:outline-none focus:border-neon-cyan transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-neon-cyan text-background font-mono font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {t("newsletter.button")}
                  </button>
                </form>

                <p className="mt-6 text-xs text-muted font-mono">
                  {t("newsletter.privacy")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
