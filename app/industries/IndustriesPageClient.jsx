"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  Building2,
  ShoppingBag,
  Factory,
  Home,
  GraduationCap,
  ArrowRight,
  Layers,
} from "lucide-react";
import { RetroBadge } from "@/components/ui/RetroCard";
import { CornerGlow } from "@/components/ui/FluidShape";
import { RetroCTA } from "@/components/RetroPageTemplate";

const industries = [
  {
    title: "Healthcare",
    slug: "healthcare",
    description:
      "Patient management systems, telemedicine platforms, and healthcare data analytics solutions built for compliance and usability.",
    caseStudy:
      "Built secure counselling management systems and patient tracking solutions for healthcare providers.",
    icon: Stethoscope,
    colorKey: "green",
    stats: { value: "80%", label: "Admin time saved" },
  },
  {
    title: "Finance & Banking",
    slug: "finance-banking",
    description:
      "Secure fintech solutions including payment integrations, loyalty platforms, and financial data processing systems.",
    caseStudy:
      "Developed integrated loyalty and payment platforms handling thousands of daily transactions.",
    icon: Building2,
    colorKey: "cyan",
    stats: { value: "35%", label: "Retention increase" },
  },
  {
    title: "Retail & E-commerce",
    slug: "retail-ecommerce",
    description:
      "E-commerce platforms, inventory management, loyalty programs, and customer engagement solutions.",
    caseStudy:
      "Built enterprise loyalty systems with gamification and multi-tier rewards management.",
    icon: ShoppingBag,
    colorKey: "cyan",
    stats: { value: "35K",  label: "Daily transactions" },
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    description:
      "IoT integration, process automation, supply chain solutions, and operational efficiency tools.",
    caseStudy:
      "Implemented document automation and knowledge management systems for industrial operations.",
    icon: Factory,
    colorKey: "green",
    stats: { value: "90%", label: "Time saved" },
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    description:
      "Property management platforms, digital business tools, and community engagement solutions.",
    caseStudy:
      "Built digital identity and community platforms for property management firms.",
    icon: Home,
    colorKey: "cyan",
    stats: { value: "500+", label: "Profiles created" },
  },
  {
    title: "Education",
    slug: "education",
    description:
      "Learning management systems, student support platforms, and educational technology solutions.",
    caseStudy:
      "Custom LMS platforms and counselling management systems for international schools.",
    icon: GraduationCap,
    colorKey: "cyan",
    stats: { value: "1000+", label: "Students managed" },
  },
];

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

export default function IndustriesPageClient() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-background opacity-50" />
        <CornerGlow position="top-right" color="green" />
        <CornerGlow position="bottom-left" color="cyan" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="green" className="mb-8">
                <Layers className="w-3 h-3" />
                Sector Expertise
              </RetroBadge>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-foreground">Industries We</span>
                <br />
                <span className="text-neon-green text-glow-green">
                  Transform
                </span>
              </h1>

              <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
                We deliver industry-specific technology solutions that
                understand your unique challenges and regulatory requirements.
                Explore our proven track record across key sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section
        ref={gridRef}
        className="py-24 bg-surface border-y-2 border-border"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const styles = colorStyles[industry.colorKey];

              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={`/industries/${industry.slug}`}
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
                      className={`text-xl font-bold text-foreground mb-4 ${styles.groupHoverText} transition-colors`}
                    >
                      {industry.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-6">
                      {industry.description}
                    </p>

                    {/* Stats */}
                    <div className="mb-6 p-4 bg-background border-2 border-border">
                      <div
                        className={`text-3xl font-bold font-mono ${styles.text}`}
                      >
                        {industry.stats.value}
                      </div>
                      <div className="text-xs text-muted uppercase tracking-wider">
                        {industry.stats.label}
                      </div>
                    </div>

                    {/* Case Study */}
                    <div className="pt-6 border-t-2 border-border">
                      <div
                        className={`text-xs font-mono font-bold ${styles.text} uppercase tracking-wider mb-2`}
                      >
                        &gt; Case Study
                      </div>
                      <p className="text-muted text-xs leading-relaxed mb-4">
                        {industry.caseStudy}
                      </p>
                      <div
                        className={`flex items-center gap-2 text-xs font-mono ${styles.text} group-hover:translate-x-2 transition-transform`}
                      >
                        Access Sector Data
                        <ArrowRight className="w-3 h-3" />
                      </div>
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
        title="Ready to Transform Your Industry?"
        description="Let's discuss how our industry-specific solutions can help you achieve your business objectives and stay ahead of the competition."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
