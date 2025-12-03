"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { RetroBadge } from "@/components/ui/RetroCard";
import FluidShape from "@/components/ui/FluidShape";
import GlowButton from "@/components/ui/GlowButton";
import { 
  Brain, 
  Cloud, 
  Database, 
  Cpu, 
  Shield, 
  Workflow,
  ArrowRight,
  Sparkles
} from "lucide-react";

const services = [
  {
    key: "aiEngineering",
    icon: Brain,
    href: "/specialist-services/ai-engineering",
    colorKey: "green",
  },
  {
    key: "cloudEngineering",
    icon: Cloud,
    href: "/digital-engineering/cloud-engineering",
    colorKey: "cyan",
  },
  {
    key: "dataEngineering",
    icon: Database,
    href: "/digital-engineering/data-engineering",
    colorKey: "cyan",
  },
  {
    key: "productEngineering",
    icon: Cpu,
    href: "/digital-engineering/product-engineering",
    colorKey: "green",
  },
  {
    key: "cyberSecurity",
    icon: Shield,
    href: "/specialist-services/cyber-security",
    colorKey: "cyan",
  },
  {
    key: "processAutomation",
    icon: Workflow,
    href: "/specialist-services/process-automation",
    colorKey: "cyan",
  },
];

// Pre-defined complete class names for Tailwind JIT
const colorStyles = {
  green: {
    border: "border-neon-green",
    text: "text-neon-green",
    shadow: "shadow-[0_0_30px_rgba(0,255,136,0.3)]",
    iconShadow: "shadow-[0_0_20px_rgba(0,255,136,0.3)]",
    bgGradient: "from-neon-green/10",
  },
  cyan: {
    border: "border-neon-cyan",
    text: "text-neon-cyan",
    shadow: "shadow-[0_0_30px_rgba(0,255,255,0.3)]",
    iconShadow: "shadow-[0_0_20px_rgba(0,255,255,0.3)]",
    bgGradient: "from-neon-cyan/10",
  },
};

export default function ChapterVision() {
  const t = useTranslations("vision");
  const tServices = useTranslations("services");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      ref={ref}
      className="relative py-32 bg-background overflow-hidden"
    >
      {/* Fluid shape background */}
      <FluidShape
        color="green"
        size={800}
        className="top-[-400px] right-[-400px]"
        blur={100}
        opacity={0.2}
      />
      <FluidShape
        color="cyan"
        size={600}
        className="bottom-[-300px] left-[-300px]"
        blur={80}
        opacity={0.15}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <RetroBadge color="cyan" className="mb-6">
            <Sparkles className="w-3 h-3" />
            {t("badge")}
          </RetroBadge>

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">{t("title")}</span>
          </h2>

          <p className="text-lg text-muted max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Services constellation */}
        <div className="max-w-6xl mx-auto">
          {/* Connection lines SVG - visible on desktop */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--neon-green)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--neon-green)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--neon-green)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;
              const styles = colorStyles[service.colorKey];
              
              return (
                <motion.a
                  key={service.key}
                  href={service.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`
                    relative p-8 rounded-lg
                    bg-surface/50 backdrop-blur-sm
                    border-2 transition-all duration-500
                    group cursor-pointer
                    ${isHovered 
                      ? `${styles.border} ${styles.shadow}` 
                      : 'border-border hover:border-muted'
                    }
                  `}
                >
                  {/* Glow background */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className={`
                      absolute inset-0 rounded-lg -z-10
                      bg-gradient-radial ${styles.bgGradient} to-transparent
                    `}
                  />

                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-lg mb-6
                    flex items-center justify-center
                    bg-background/80 border-2 transition-all duration-300
                    ${isHovered ? `${styles.border} ${styles.iconShadow}` : 'border-border'}
                  `}>
                    <Icon className={`
                      w-8 h-8 transition-colors duration-300
                      ${isHovered ? styles.text : 'text-muted'}
                    `} />
                  </div>

                  {/* Content */}
                  <h3 className={`
                    text-xl font-bold mb-3 transition-colors duration-300
                    ${isHovered ? styles.text : 'text-foreground'}
                  `}>
                    {tServices(`${service.key}.title`)}
                  </h3>
                  
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {tServices(`${service.key}.description`)}
                  </p>

                  {/* Arrow indicator */}
                  <div className={`
                    flex items-center gap-2 text-xs font-mono uppercase tracking-wider
                    transition-all duration-300
                    ${isHovered ? `${styles.text} translate-x-2` : 'text-muted'}
                  `}>
                    {t("explore")}
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Corner accent */}
                  <div className={`
                    absolute top-0 right-0 w-8 h-8
                    border-t-2 border-r-2 rounded-tr-lg
                    transition-all duration-300
                    ${isHovered ? styles.border : 'border-border'}
                  `} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* View all services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <GlowButton
            href="/digital-engineering"
            variant="secondary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View all services
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
