"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  Target,
  Lightbulb,
  Trophy,
  Terminal,
  Cpu,
  Globe,
  Zap,
} from "lucide-react";
import FluidShape from "@/components/ui/FluidShape";
import { RetroBadge } from "@/components/ui/RetroCard";
import {
  RetroSection,
  RetroStats,
  RetroCTA,
} from "@/components/RetroPageTemplate";
import GlowButton from "@/components/ui/GlowButton";

export default function AboutPageClient() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const stats = [
    { label: "Years of Excellence", value: "10+" },
    { label: "Projects Delivered", value: "500+" },
    { label: "Team Members", value: "150+" },
    { label: "Countries Served", value: "37" },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that define the future.",
      icon: Lightbulb,
      colorClass: "green",
    },
    {
      title: "Client Success",
      description:
        "Your growth is our priority. We build to empower and accelerate your business.",
      icon: Trophy,
      colorClass: "cyan",
    },
    {
      title: "People Centric",
      description:
        "We believe in the power of human potential, creativity, and collaboration.",
      icon: Users,
      colorClass: "magenta",
    },
    {
      title: "Integrity",
      description:
        "Trust and transparency are the foundations of all our partnerships.",
      icon: Target,
      colorClass: "green",
    },
  ];

  const timeline = [
    {
      year: "2014",
      event: "Founded in Dubai with a vision to transform enterprises",
    },
    {
      year: "2016",
      event: "Expanded to 5 countries across Middle East and Asia",
    },
    {
      year: "2018",
      event: "Launched AI & ML practice, pioneering regional adoption",
    },
    { year: "2020", event: "100+ enterprise clients, 200+ projects delivered" },
    { year: "2022", event: "Opened innovation labs in Abu Dhabi and Riyadh" },
    {
      year: "2024",
      event: "Leading digital transformation across 37 countries",
    },
  ];

  // Pre-defined color styles to ensure Tailwind includes them
  const colorStyles = {
    green: {
      hoverBorder: "hover:border-neon-green",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]",
      iconHoverBorder: "group-hover:border-neon-green",
      iconHoverShadow: "group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]",
      iconHoverText: "group-hover:text-neon-green",
    },
    cyan: {
      hoverBorder: "hover:border-neon-cyan",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]",
      iconHoverBorder: "group-hover:border-neon-cyan",
      iconHoverShadow: "group-hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]",
      iconHoverText: "group-hover:text-neon-cyan",
    },
    magenta: {
      hoverBorder: "hover:border-neon-magenta",
      hoverShadow: "hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]",
      iconHoverBorder: "group-hover:border-neon-magenta",
      iconHoverShadow: "group-hover:shadow-[0_0_15px_rgba(255,0,255,0.3)]",
      iconHoverText: "group-hover:text-neon-magenta",
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-background-radial opacity-50" />
        <FluidShape
          color="green"
          size={700}
          className="top-[-350px] left-[-350px]"
          blur={120}
          opacity={0.2}
        />
        <FluidShape
          color="cyan"
          size={500}
          className="bottom-[-250px] right-[-250px]"
          blur={100}
          opacity={0.15}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="green" className="mb-8">
                <Terminal className="w-3 h-3" />
                System Profile
              </RetroBadge>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-foreground">We Are</span>
                <br />
                <span className="text-neon-green text-glow-green">
                  Neuve Labs
                </span>
              </h1>

              <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-10">
                A collective of passionate innovators, engineers, and
                strategists dedicated to driving digital transformation and
                shaping the future of technology.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <GlowButton href="/contact" color="green">
                  Start a Project
                </GlowButton>
                <GlowButton href="/insights" variant="secondary">
                  View Our Work
                </GlowButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface border-y-2 border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <RetroStats stats={stats} />
        </div>
      </section>

      {/* Our Story */}
      <RetroSection ref={storyRef} variant="default">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="cyan" className="mb-8">
                <Cpu className="w-3 h-3" />
                Origin Story
              </RetroBadge>

              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Building the Future,
                <br />
                <span className="text-neon-cyan">
                  One Line of Code at a Time.
                </span>
              </h2>

              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between complex
                  technology and business value, Neuve Labs has grown into a
                  leading IT consulting firm in the UAE.
                </p>
                <p>
                  We believe that technology should be an enabler, not a
                  barrier. That's why we focus on creating intuitive, scalable,
                  and robust solutions that solve real-world problems. From
                  startups to enterprises, we partner with organizations to
                  unlock their full potential.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={storyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="relative pl-12 group"
                  >
                    <div className="absolute left-0 w-8 h-8 bg-surface border-2 border-border flex items-center justify-center group-hover:border-neon-green group-hover:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all">
                      <div className="w-2 h-2 rounded-full bg-neon-green" />
                    </div>
                    <div className="font-mono text-sm text-neon-green mb-1">
                      {item.year}
                    </div>
                    <div className="text-foreground">{item.event}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </RetroSection>

      {/* Our Values */}
      <RetroSection ref={valuesRef} variant="surface">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <RetroBadge color="magenta" className="mb-6">
              <Zap className="w-3 h-3" />
              Core Protocols
            </RetroBadge>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Driven by Purpose, Guided by Values
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Our core values define who we are and how we work. They are the
              compass that guides our decisions and actions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const styles = colorStyles[value.colorClass];

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`
                    p-8 bg-card border-2 border-border
                    ${styles.hoverBorder} ${styles.hoverShadow}
                    transition-all duration-300 group
                  `}
                >
                  <div
                    className={`
                    w-14 h-14 bg-background border-2 border-border
                    flex items-center justify-center mb-6
                    ${styles.iconHoverBorder} ${styles.iconHoverShadow}
                    transition-all
                  `}
                  >
                    <Icon
                      className={`w-7 h-7 text-muted ${styles.iconHoverText} transition-colors`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-neon-green transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </RetroSection>

      {/* Global Presence */}
      <RetroSection variant="grid">
        <FluidShape
          color="magenta"
          size={400}
          className="top-[-200px] left-[-200px]"
          blur={80}
          opacity={0.15}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="cyan" className="mb-6">
                <Globe className="w-3 h-3" />
                Global Network
              </RetroBadge>

              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Transforming Businesses Across{" "}
                <span className="text-neon-cyan">37 Countries</span>
              </h2>

              <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
                From our headquarters in Dubai, we've expanded our reach to
                serve clients across the Middle East, Asia, Europe, and North
                America. Our global presence enables us to deliver local
                expertise with international standards.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Dubai, UAE", "Riyadh, KSA", "Singapore", "London, UK"].map(
                  (location, index) => (
                    <motion.div
                      key={location}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-4 bg-surface/50 border-2 border-border text-center hover:border-neon-green transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-neon-green mx-auto mb-2 animate-pulse" />
                      <div className="text-sm font-mono text-muted">
                        {location}
                      </div>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </RetroSection>

      {/* CTA */}
      <RetroCTA
        title="Ready to join the future?"
        description="Let's discuss how we can help transform your business with cutting-edge technology solutions."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
