"use client";

import { useRef, forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal, Zap, CheckCircle2, ExternalLink } from "lucide-react";
import FluidShape from "@/components/ui/FluidShape";
import { RetroBadge } from "@/components/ui/RetroCard";
import GlowButton from "@/components/ui/GlowButton";

// Retro Section Wrapper with forwardRef
export const RetroSection = forwardRef(function RetroSection({ children, className = "", variant = "default" }, forwardedRef) {
  const internalRef = useRef(null);
  // Use the forwarded ref if provided, otherwise use internal ref
  const ref = forwardedRef || internalRef;
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    default: "bg-background",
    surface: "bg-surface",
    grid: "bg-background grid-background",
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative py-24 overflow-hidden ${variants[variant]} ${className}`}
    >
      {children}
    </motion.section>
  );
});

// Retro Hero Section
export function RetroHero({
  badge,
  title,
  titleHighlight,
  description,
  image,
  children,
}) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-background">
      {/* Background elements */}
      <div className="absolute inset-0 grid-background-radial opacity-50" />
      <FluidShape
        color="green"
        size={600}
        className="top-[-300px] right-[-300px]"
        blur={100}
        opacity={0.2}
      />
      <FluidShape
        color="magenta"
        size={400}
        className="bottom-[-200px] left-[-200px]"
        blur={80}
        opacity={0.15}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {badge && (
              <RetroBadge color="green" className="mb-8">
                {badge}
              </RetroBadge>
            )}

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-foreground">{title}</span>
              {titleHighlight && (
                <>
                  <br />
                  <span className="text-gradient-neon text-glow-green">
                    {titleHighlight}
                  </span>
                </>
              )}
            </h1>

            <p className="text-lg text-muted leading-relaxed mb-10">
              {description}
            </p>

            {children}
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded overflow-hidden border border-border">
                {/* CRT overlay effect */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,136,0.03)_2px,rgba(0,255,136,0.03)_4px)]" />
                {/* Neon border glow */}
                <div className="absolute inset-0 z-20 pointer-events-none border border-neon-green/20 rounded" />
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-neon-green" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-neon-green" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

// Retro Feature Grid
export function RetroFeatureGrid({ title, subtitle, badge, features }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colors = ["green", "cyan", "magenta"];

  return (
    <RetroSection ref={ref} variant="surface">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {badge && (
            <RetroBadge color="cyan" className="mb-6">
              {badge}
            </RetroBadge>
          )}
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const color = colors[index % colors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  group p-8 rounded bg-card border transition-all duration-300
                  border-border hover:border-neon-${color}
                  hover:shadow-[0_0_20px_rgba(${color === 'green' ? '0,255,136' : color === 'cyan' ? '0,212,255' : '255,0,255'},0.2)]
                `}
              >
                <div className={`
                  w-12 h-12 rounded bg-background border border-border
                  flex items-center justify-center mb-6
                  group-hover:border-neon-${color} transition-colors
                `}>
                  <Zap className={`w-6 h-6 text-muted group-hover:text-neon-${color} transition-colors`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {typeof feature === "string" ? feature : feature.title}
                </h3>
                {typeof feature !== "string" && feature.description && (
                  <p className="text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </RetroSection>
  );
}

// Retro Benefits Section
export function RetroBenefits({ title, benefits }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <RetroSection variant="grid">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 p-8 rounded bg-surface/50 backdrop-blur-sm border border-border hover:border-neon-green transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded bg-neon-green/10 border border-neon-green/30 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all">
                  <CheckCircle2 className="w-6 h-6 text-neon-green" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-neon-green transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </RetroSection>
  );
}

// Retro Use Cases / Mission Logs
export function RetroUseCases({ title, subtitle, useCases }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <RetroSection variant="surface">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <RetroBadge color="magenta" className="mb-6">
            Mission Logs
          </RetroBadge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-muted text-lg">{subtitle}</p>}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded bg-card border border-border hover:border-neon-magenta transition-all duration-300 group overflow-hidden"
            >
              {/* Index number */}
              <div className="absolute top-4 right-4 font-mono text-6xl font-bold text-border group-hover:text-neon-magenta/20 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-neon-magenta transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-muted leading-relaxed mb-6">
                  {useCase.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-mono text-muted group-hover:text-neon-magenta transition-colors">
                  <span>Access log</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </RetroSection>
  );
}

// Retro Stats Grid
export function RetroStats({ stats }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colors = ["green", "cyan", "magenta", "green"];

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const color = colors[index % colors.length];
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`
              p-6 rounded bg-surface border border-border text-center
              hover:border-neon-${color} transition-all duration-300
              hover:shadow-[0_0_15px_rgba(${color === 'green' ? '0,255,136' : color === 'cyan' ? '0,212,255' : '255,0,255'},0.2)]
            `}
          >
            <div className={`text-4xl font-bold font-mono text-neon-${color} mb-2`}>
              {stat.value}
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted">
              {stat.label}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// Retro CTA Section
export function RetroCTA({ title, description, buttonText, buttonHref }) {
  return (
    <RetroSection variant="grid" className="py-32">
      <FluidShape
        color="cyan"
        size={500}
        className="top-[-200px] right-[-200px]"
        blur={80}
        opacity={0.15}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted mb-10">{description}</p>
            <GlowButton
              href={buttonHref}
              color="green"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              {buttonText}
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </RetroSection>
  );
}

// Main Template Export
export default function RetroPageTemplate({
  badge,
  title,
  titleHighlight,
  description,
  heroImage,
  features,
  benefits,
  useCases,
  ctaTitle = "Ready to start your mission?",
  ctaDescription = "Let's discuss how we can help you achieve your goals.",
  ctaButtonText = "Initiate Contact",
  ctaButtonHref = "/contact",
}) {
  return (
    <>
      <RetroHero
        badge={badge}
        title={title}
        titleHighlight={titleHighlight}
        description={description}
        image={heroImage}
      />

      {features && features.length > 0 && (
        <RetroFeatureGrid
          badge="Capabilities Unlocked"
          title="Key Features"
          subtitle="Comprehensive solutions tailored to drive your digital transformation"
          features={features}
        />
      )}

      {benefits && benefits.length > 0 && (
        <RetroBenefits
          title="Why Choose Neuve Labs?"
          benefits={benefits}
        />
      )}

      {useCases && useCases.length > 0 && (
        <RetroUseCases
          title="Real-World Impact"
          subtitle="See how we're helping organizations solve complex challenges"
          useCases={useCases}
        />
      )}

      <RetroCTA
        title={ctaTitle}
        description={ctaDescription}
        buttonText={ctaButtonText}
        buttonHref={ctaButtonHref}
      />
    </>
  );
}

