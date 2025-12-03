"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { RetroBadge } from "@/components/ui/RetroCard";
import RetroInput, { RetroTextarea } from "@/components/ui/RetroInput";
import GlowButton from "@/components/ui/GlowButton";
import FluidShape from "@/components/ui/FluidShape";
import { Radio, Send, CheckCircle, AlertCircle, Zap } from "lucide-react";

export default function ChapterContact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section ref={ref} className="relative py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Fluid shapes */}
      <FluidShape
        color="cyan"
        size={500}
        className="top-[-200px] left-[-200px]"
        blur={80}
        opacity={0.15}
      />
      <FluidShape
        color="cyan"
        size={400}
        className="bottom-[-150px] right-[-150px]"
        blur={60}
        opacity={0.1}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <RetroBadge color="cyan" className="mb-6">
              <Radio className="w-3 h-3" />
              {t("badge")}
            </RetroBadge>

            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">{t("title")}</span>
            </h2>

            <p className="text-lg text-muted">{t("subtitle")}</p>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-lg p-8 md:p-12">
              {/* Terminal header */}
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-neon-cyan/60" />
                  <div className="w-3 h-3 rounded-full bg-neon-green/60" />
                  <div className="w-3 h-3 rounded-full bg-neon-green/60" />
                </div>
                <span className="text-xs font-mono text-muted ml-4">
                  transmission_form.exe
                </span>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-neon-green mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-neon-green mb-2">
                    {t("form.success")}
                  </h3>
                  <p className="text-muted">
                    Our team will respond to your transmission shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <RetroInput
                      type="text"
                      name="name"
                      label={t("form.name")}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <RetroInput
                      type="email"
                      name="email"
                      label={t("form.email")}
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <RetroInput
                    type="text"
                    name="company"
                    label={t("form.company")}
                    placeholder="Acme Corporation"
                    value={formData.company}
                    onChange={handleChange}
                  />

                  <RetroTextarea
                    name="message"
                    label={t("form.message")}
                    placeholder="Describe your project or challenge..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-neon-cyan text-sm font-mono"
                    >
                      <AlertCircle className="w-4 h-4" />
                      {t("form.error")}
                    </motion.div>
                  )}

                  <div className="flex justify-end pt-4">
                    <GlowButton
                      type="submit"
                      color="green"
                      size="lg"
                      disabled={status === "loading"}
                      icon={
                        status === "loading" ? (
                          <Zap className="w-5 h-5 animate-pulse" />
                        ) : (
                          <Send className="w-5 h-5" />
                        )
                      }
                    >
                      {status === "loading"
                        ? t("form.sending")
                        : t("form.submit")}
                    </GlowButton>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted font-mono">
              Or reach us directly at{" "}
              <a
                href="mailto:contact@neuvelabs.tech"
                className="text-neon-green hover:text-glow-green transition-all"
              >
                contact@neuvelabs.tech
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
