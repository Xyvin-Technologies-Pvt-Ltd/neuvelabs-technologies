"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Twitter, Linkedin, Github, Mail, MapPin, ArrowRight, Terminal, Zap } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "AI & Machine Learning", href: "/digital-engineering/ai-ml" },
    { name: "Cloud Engineering", href: "/digital-engineering/cloud-engineering" },
    { name: "Data Engineering", href: "/digital-engineering/data-engineering" },
    { name: "Product Engineering", href: "/digital-engineering/product-engineering" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-surface border-t border-border overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-20" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded bg-neon-green/10 border border-neon-green/30 flex items-center justify-center group-hover:border-neon-green group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300">
                <Terminal className="w-4 h-4 text-neon-green" />
              </div>
              <span
                className="text-2xl font-bold text-foreground group-hover:text-neon-green transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                neuvelabs
              </span>
            </Link>
            
            <p className="text-muted leading-relaxed max-w-sm font-mono text-sm">
              {t("tagline")}
            </p>
            
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/neuvelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-background border border-border flex items-center justify-center text-muted hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/neuvelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-background border border-border flex items-center justify-center text-muted hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com/neuvelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-background border border-border flex items-center justify-center text-muted hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neon-green mb-6">
              &gt; Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted hover:text-foreground transition-colors text-sm block group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-neon-green transition-opacity">
                      _
                    </span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neon-green mb-6">
              &gt; Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-foreground transition-colors text-sm block group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-neon-green transition-opacity">
                      _
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neon-green mb-6">
              &gt; Stay Connected
            </h4>
            <p className="text-muted text-sm mb-4">
              Subscribe for latest insights and tech transmissions.
            </p>
            
            <form className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-background border border-border rounded px-4 py-2.5 text-sm font-mono text-foreground focus:outline-none focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,136,0.2)] transition-all placeholder:text-muted/50"
              />
              <button
                type="submit"
                className="bg-neon-green/10 border border-neon-green text-neon-green px-4 py-2.5 rounded transition-all hover:bg-neon-green hover:text-background hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] flex items-center justify-center"
              >
                <ArrowRight size={18} />
              </button>
            </form>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted group">
                <Mail size={16} className="text-neon-cyan" />
                <a
                  href="mailto:info@neuvelabs.com"
                  className="hover:text-foreground transition-colors font-mono"
                >
                  info@neuvelabs.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={16} className="text-neon-cyan" />
                <span>RAK Free Zone, United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted text-sm">
            <Zap size={14} className="text-neon-green" />
            <span className="font-mono">
              &copy; {currentYear} Neuve Labs Technology. {t("copyright")}
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-mono">
            <Link
              href="/privacy"
              className="text-muted hover:text-neon-green transition-colors"
            >
              {t("links.privacy")}
            </Link>
            <Link
              href="/terms"
              className="text-muted hover:text-neon-green transition-colors"
            >
              {t("links.terms")}
            </Link>
            <Link
              href="/careers"
              className="text-muted hover:text-neon-green transition-colors"
            >
              {t("links.careers")}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-neon-green/10 blur-[100px] rounded-full" />
    </footer>
  );
}
