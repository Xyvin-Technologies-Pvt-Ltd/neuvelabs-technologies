"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
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
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Digital Engineering",
          href: "/digital-engineering",
          items: [
            { name: "AI & Machine Learning", href: "/digital-engineering/ai-ml" },
            { name: "Cloud & DevOps", href: "/digital-engineering/cloud-devops" },
            { name: "Data Analytics", href: "/digital-engineering/data-analytics" },
            { name: "Product Engineering", href: "/digital-engineering/product-engineering" },
          ],
        },
        {
          title: "Specialist Services",
          href: "/specialist-services",
          items: [
            { name: "Cyber Security", href: "/specialist-services/cyber-security" },
            { name: "AI Engineering", href: "/specialist-services/ai-engineering" },
            { name: "Process Automation", href: "/specialist-services/process-automation" },
          ],
        },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Key Industries",
          href: "/industries",
          items: [
            { name: "Healthcare", href: "/industries/healthcare" },
            { name: "Finance & Banking", href: "/industries/finance-banking" },
            { name: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
          ],
        },
        {
          title: "More Sectors",
          href: "/industries",
          items: [
            { name: "Manufacturing", href: "/industries/manufacturing" },
            { name: "Real Estate", href: "/industries/real-estate" },
            { name: "Education", href: "/industries/education" },
          ],
        },
      ],
    },
    { name: "Insights", href: "/insights" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 glass" : "py-6 bg-transparent"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <Logo className="h-8 w-auto text-white" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => {
                  setHoveredLink(link.name);
                  if (link.hasDropdown) setActiveDropdown(link.name);
                }}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className="relative text-sm font-medium text-white/80 hover:text-white transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={14} />}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Desktop Dropdown */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl grid grid-cols-2 gap-8"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.dropdownItems.map((section) => (
                      <div key={section.title}>
                        <Link
                          href={section.href}
                          className="text-blue-400 font-semibold mb-4 block hover:text-blue-300 transition-colors"
                        >
                          {section.title}
                        </Link>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="text-sm text-gray-400 hover:text-white transition-colors block py-1"
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
              </div>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-50 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 pb-10">
              {navLinks.map((link, index) => (
                <div key={link.name}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-semibold text-white block py-2 border-b border-white/10 flex items-center justify-between"
                      onClick={() => !link.hasDropdown && setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                      {link.hasDropdown && <ChevronDown size={20} />}
                    </Link>
                  </motion.div>
                  
                  {/* Mobile Dropdown Items */}
                  {link.hasDropdown && (
                    <div className="pl-4 mt-4 space-y-6">
                      {link.dropdownItems.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-blue-400 font-medium mb-2">{section.title}</h4>
                          <ul className="space-y-3 border-l border-white/10 pl-4">
                            {section.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="text-gray-400 hover:text-white block text-sm"
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
                  className="block w-full py-4 rounded-xl bg-blue-600 text-white text-center font-semibold text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
