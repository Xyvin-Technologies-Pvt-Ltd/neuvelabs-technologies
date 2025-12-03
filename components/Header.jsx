"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown, Terminal } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";
import LanguageSwitcher from "./ui/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: t("services"),
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          title: t("digitalEngineering"),
          href: "/digital-engineering",
          items: [
            { name: "AI & Machine Learning", href: "/digital-engineering/ai-ml" },
            { name: "Cloud & DevOps", href: "/digital-engineering/cloud-devops" },
            { name: "Data Analytics", href: "/digital-engineering/data-analytics" },
            { name: "Product Engineering", href: "/digital-engineering/product-engineering" },
          ],
        },
        {
          title: t("specialistServices"),
          href: "/specialist-services",
          items: [
            { name: "Cyber Security", href: "/specialist-services/cyber-security" },
            { name: "AI Engineering", href: "/specialist-services/ai-engineering" },
            { name: "Process Automation", href: "/specialist-services/process-automation" },
          ],
        },
      ],
    },
    { name: t("insights"), href: "/insights" },
    { name: t("about"), href: "/about" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border"
          : "py-5 bg-transparent"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-neon-green/10 border border-neon-green/30 flex items-center justify-center group-hover:border-neon-green group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300">
                <Terminal className="w-4 h-4 text-neon-green" />
              </div>
              <span
                className="text-xl font-bold text-foreground group-hover:text-neon-green transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                neuvelabs
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  if (link.hasDropdown) setActiveDropdown(link.name);
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.hasDropdown ? (
                  <button
                    className={`
                      relative px-4 py-2 text-sm font-mono uppercase tracking-wider
                      text-muted hover:text-foreground transition-colors
                      flex items-center gap-1 group
                    `}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`
                      relative px-4 py-2 text-sm font-mono uppercase tracking-wider
                      text-muted hover:text-foreground transition-colors
                      flex items-center gap-1 group
                    `}
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-neon-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                )}

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-surface/95 backdrop-blur-xl border border-border rounded p-6 shadow-xl grid grid-cols-2 gap-6"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {/* Terminal header decoration */}
                      <div className="col-span-2 flex items-center gap-2 pb-4 mb-4 border-b border-border">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-neon-magenta/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-neon-yellow/60" />
                          <div className="w-2.5 h-2.5 rounded-full bg-neon-green/60" />
                        </div>
                        <span className="text-xs font-mono text-muted ml-2">
                          services_menu.exe
                        </span>
                      </div>

                      {link.dropdownItems.map((section) => (
                        <div key={section.title}>
                          <Link
                            href={section.href}
                            className="text-neon-green font-mono text-sm mb-4 block hover:text-glow-green transition-all"
                          >
                            &gt; {section.title}
                          </Link>
                          <ul className="space-y-2 ml-4 border-l border-border pl-4">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="text-sm text-muted hover:text-foreground transition-colors block py-1"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 text-sm font-mono uppercase tracking-wider border border-neon-green text-neon-green hover:bg-neon-green hover:text-background transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              className="relative z-50 p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-6 lg:hidden overflow-y-auto"
          >
            {/* Scanlines on mobile menu */}
            <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,136,0.02)_2px,rgba(0,255,136,0.02)_4px)]" />

            <nav className="relative flex flex-col gap-4 pb-10">
              {navLinks.map((link, index) => (
                <div key={link.name}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.hasDropdown ? (
                      <div className="text-2xl font-mono text-foreground py-3 border-b border-border flex items-center justify-between">
                        <span>{link.name}</span>
                        <ChevronDown size={20} className="text-muted" />
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-2xl font-mono text-foreground block py-3 border-b border-border flex items-center justify-between group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="group-hover:text-neon-green transition-colors">
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </motion.div>

                  {/* Mobile Dropdown Items */}
                  {link.hasDropdown && (
                    <div className="pl-4 mt-4 space-y-6">
                      {link.dropdownItems.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-neon-green font-mono text-sm mb-3">
                            &gt; {section.title}
                          </h4>
                          <ul className="space-y-3 border-l border-border pl-4">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="text-muted hover:text-foreground block text-sm"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="block w-full py-4 text-center font-mono uppercase tracking-wider border border-neon-green text-neon-green hover:bg-neon-green hover:text-background transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("contact")}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
