"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Cpu,
  Settings,
  Layers,
  CheckCircle2,
  Terminal,
  Brain,
  Workflow,
  ArrowRight,
  Zap,
} from "lucide-react";
import { RetroBadge } from "@/components/ui/RetroCard";
import { CornerGlow } from "@/components/ui/FluidShape";
import FluidShape from "@/components/ui/FluidShape";
import { RetroCTA } from "@/components/RetroPageTemplate";

const services = [
  {
    title: "AI Engineering",
    description:
      "Build production-ready AI systems. From model development to deployment and MLOps infrastructure.",
    href: "/specialist-services/ai-engineering",
    icon: Brain,
    colorKey: "green",
  },
  {
    title: "Cyber Security",
    description:
      "Protect your digital assets with robust security strategies, threat monitoring, and compliance frameworks.",
    href: "/specialist-services/cyber-security",
    icon: Shield,
    colorKey: "cyan",
  },
  {
    title: "Process Automation",
    description:
      "Automate complex business processes with intelligent AI-powered solutions that reduce manual work.",
    href: "/specialist-services/process-automation",
    icon: Workflow,
    colorKey: "cyan",
  },
];

const focusAreas = [
  "AI-driven process automation & predictive analytics",
  "Cyber resilience programs & SOC monitoring",
  "Applied AI platforms & GenAI copilots",
  "Enterprise architecture & legacy modernization",
  "Cloud migration & DevOps transformation",
];

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

export default function SpecialistServicesClient() {
  const gridRef = useRef(null);
  const whyRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-background opacity-50" />
        <CornerGlow position="top-right" color="cyan" />
        <CornerGlow position="bottom-left" color="cyan" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="cyan" className="mb-8">
                <Terminal className="w-3 h-3" />
                Specialized Expertise
              </RetroBadge>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-foreground">Specialist</span>
                <br />
                <span className="text-neon-cyan text-glow-cyan">Services</span>
              </h1>

              <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
                Expert consulting engineered for innovation and measurable
                impact. We combine deep industry insight with engineering rigor.
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
          <div className="grid md:grid-cols-3 gap-6">
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
                      border-l-4 ${styles.borderLeft}
                      ${styles.hoverBorder} ${styles.hoverGlow}
                      transition-all duration-300 group
                    `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                      w-16 h-16 mb-6 border-2 ${styles.border}
                      flex items-center justify-center
                      transition-all duration-300
                    `}
                    >
                      <Icon className={`w-8 h-8 ${styles.text}`} />
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
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        ref={whyRef}
        className="py-24 bg-background relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-background opacity-30" />
        <FluidShape
          color="cyan"
          size={400}
          className="top-[-200px] left-[-200px]"
          blur={100}
          opacity={0.15}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="cyan" className="mb-6">
                <Zap className="w-3 h-3" />
                Why Us
              </RetroBadge>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strategic specialists with{" "}
                <span className="text-neon-cyan">
                  local market intelligence
                </span>
              </h2>

              <p className="text-muted text-lg leading-relaxed mb-8">
                From enterprise-grade automation to security strategy and AI
                delivery, our teams translate boardroom priorities into
                engineered solutions aligned with UAE Vision 2031.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Regulatory Alignment",
                    desc: "Built-in compliance with UAE Central Bank, NESA, and ADGM frameworks.",
                  },
                  {
                    title: "Co-creation Approach",
                    desc: "Embedded design studios and agile pods elevate your internal capabilities.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={whyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4 p-4 bg-surface/50 border-2 border-border hover:border-neon-green transition-colors group"
                  >
                    <div className="w-12 h-12 border-2 border-neon-green flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all">
                      <CheckCircle2 className="w-6 h-6 text-neon-green" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-bold mb-1 group-hover:text-neon-green transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={whyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border-2 border-border p-8"
            >
              {/* Terminal header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                  <div className="w-3 h-3 rounded-full bg-neon-yellow" />
                  <div className="w-3 h-3 rounded-full bg-neon-green" />
                </div>
                <span className="text-xs font-mono text-muted ml-4">
                  focus_areas.txt
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-6">
                Focus Areas
              </h3>
              <ul className="space-y-4">
                {focusAreas.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-muted group"
                  >
                    <span className="text-neon-green font-mono">&gt;</span>
                    <span className="group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <RetroCTA
        title="Ready to Specialize?"
        description="Let's discuss how our specialist services can help you achieve measurable impact."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
