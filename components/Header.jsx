"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Digital Engineering",
      href: "/digital-engineering",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Product Engineering",
          href: "/digital-engineering/product-engineering",
          hasSubmenu: true,
        },
        {
          name: "Data Engineering",
          href: "/digital-engineering/data-engineering",
        },
        {
          name: "Cloud Engineering",
          href: "/digital-engineering/cloud-engineering",
        },
        {
          name: "Integration Engineering",
          href: "/digital-engineering/integration-engineering",
        },
        {
          name: "Quality Engineering",
          href: "/digital-engineering/quality-engineering",
        },
        {
          name: "Design Engineering",
          href: "/digital-engineering/design-engineering",
        },
        {
          name: "Fintech Engineering",
          href: "/digital-engineering/fintech-engineering",
          hasSubmenu: true,
        },
      ],
    },
    {
      name: "Specialist Services",
      href: "/specialist-services",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Process Automation Engineering",
          href: "/specialist-services/process-automation",
        },
        { name: "AI Engineering", href: "/specialist-services/ai-engineering" },
        {
          name: "Cyber Security Services",
          href: "/specialist-services/cyber-security",
        },
      ],
    },
    { name: "Industries", href: "/industries" },
    { name: "Insights", href: "/insights" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#202124]/95 backdrop-blur-md shadow-sm"
          : "bg-[#202124]"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                    activeDropdown === link.name
                      ? "text-white underline decoration-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {link.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {/* Caret */}
                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100" />

                        <div className="pt-2 pb-2">
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-between group"
                            >
                              <span>{item.name}</span>
                              {item.hasSubmenu && (
                                <svg
                                  className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M9 5l7 7-7 7" />
                                </svg>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 border-t border-[#202124]/20"
            >
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-3 text-sm font-medium text-white hover:text-white/80"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="pl-4 space-y-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-sm text-white/80 hover:text-white flex items-center justify-between"
                          onClick={() => setIsOpen(false)}
                        >
                          <span>{item.name}</span>
                          {item.hasSubmenu && (
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
