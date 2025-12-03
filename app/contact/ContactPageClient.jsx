"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Terminal, Radio } from "lucide-react";
import FluidShape, { CornerGlow } from "@/components/ui/FluidShape";
import { RetroBadge } from "@/components/ui/RetroCard";
import RetroInput, { RetroTextarea } from "@/components/ui/RetroInput";
import GlowButton from "@/components/ui/GlowButton";

// Pre-defined complete class names for Tailwind JIT
const colorStyles = {
  green: {
    text: "text-neon-green",
    border: "border-neon-green",
    borderTop: "border-t-neon-green",
    hoverGlow: "hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]",
  },
  cyan: {
    text: "text-neon-cyan",
    border: "border-neon-cyan",
    borderTop: "border-t-neon-cyan",
    hoverGlow: "hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]",
  },
  cyan: {
    text: "text-neon-cyan",
    border: "border-neon-cyan",
    borderTop: "border-t-neon-cyan",
    hoverGlow: "hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]",
  },
};

export default function ContactPageClient() {
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@neuvelabs.tech",
      description: "Response within 24 hours",
      colorKey: "green",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+971 50 123 4567",
      description: "Mon-Fri 9am to 6pm GST",
      colorKey: "cyan",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Dubai Silicon Oasis",
      description: "Dubai, UAE",
      colorKey: "cyan",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-background">
        <div className="absolute inset-0 grid-background opacity-50" />
        <CornerGlow position="top-left" color="cyan" />
        <CornerGlow position="bottom-right" color="cyan" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <RetroBadge color="cyan" className="mb-8">
                <Radio className="w-3 h-3" />
                Open Channel
              </RetroBadge>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-foreground">Let's Build Something</span>
                <br />
                <span className="text-neon-cyan text-glow-cyan">Extraordinary</span>
              </h1>

              <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear from you. Let's discuss how we can help
                you achieve your business goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-surface border-y-2 border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const styles = colorStyles[item.colorKey];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`
                    p-6 bg-card border-2 border-border
                    border-t-4 ${styles.borderTop}
                    ${styles.hoverGlow}
                    transition-all duration-300 group
                  `}
                >
                  <div className={`
                    w-12 h-12 mb-4 border-2 ${styles.border}
                    flex items-center justify-center
                  `}>
                    <Icon className={`w-6 h-6 ${styles.text}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className={`font-mono font-bold ${styles.text} mb-1`}>
                    {item.value}
                  </p>
                  <p className="text-sm text-muted">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 grid-background opacity-30" />
        <FluidShape
          color="green"
          size={400}
          className="top-[-200px] right-[-200px]"
          blur={100}
          opacity={0.2}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Terminal window */}
              <div className="bg-card border-2 border-border">
                {/* Terminal header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b-2 border-border bg-surface">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                    <div className="w-3 h-3 rounded-full bg-neon-yellow" />
                    <div className="w-3 h-3 rounded-full bg-neon-green" />
                  </div>
                  <span className="text-xs font-mono text-muted ml-4">
                    transmission_form.exe — SECURE CHANNEL
                  </span>
                </div>

                {/* Form content */}
                <div className="p-8 md:p-12">
                  {status === "success" ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 border-2 border-neon-green flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-neon-green" />
                      </div>
                      <h3 className="text-2xl font-bold text-neon-green text-glow-green mb-4">
                        TRANSMISSION SUCCESSFUL
                      </h3>
                      <p className="text-muted font-mono">
                        Our team will respond to your transmission shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Terminal prompt */}
                      <div className="font-mono text-sm text-neon-green mb-8">
                        <span className="text-muted">&gt;</span> Initialize contact protocol...
                        <span className="terminal-cursor" />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <RetroInput
                          type="text"
                          name="name"
                          label="Your Designation"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <RetroInput
                          type="email"
                          name="email"
                          label="Communication Frequency"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <RetroInput
                        type="text"
                        name="company"
                        label="Organization"
                        placeholder="Acme Corporation"
                        value={formData.company}
                        onChange={handleChange}
                      />

                      <RetroTextarea
                        name="message"
                        label="Transmission Content"
                        placeholder="Describe your project or challenge..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                      />

                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2 text-neon-cyan text-sm font-mono p-4 border-2 border-neon-cyan/50 bg-neon-cyan/10"
                        >
                          <AlertCircle className="w-5 h-5" />
                          TRANSMISSION FAILED. RETRY?
                        </motion.div>
                      )}

                      <div className="flex justify-end pt-4">
                        <GlowButton
                          type="submit"
                          color="green"
                          size="lg"
                          disabled={status === "loading"}
                          icon={<Send className="w-5 h-5" />}
                        >
                          {status === "loading" ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
                        </GlowButton>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Direct contact info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={formInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-muted font-mono">
                Or reach us directly at{" "}
                <a
                  href="mailto:contact@neuvelabs.tech"
                  className="text-neon-green hover:text-glow-green transition-all font-bold"
                >
                  contact@neuvelabs.tech
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
