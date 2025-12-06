"use client";

import Link from "next/link";
import { Twitter, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  const services = [
    { name: t("services.aiMl"), href: "/digital-engineering/ai-ml" },
    {
      name: t("services.cloudDevops"),
      href: "/digital-engineering/cloud-devops",
    },
    {
      name: t("services.dataAnalytics"),
      href: "/digital-engineering/data-analytics",
    },
    {
      name: t("services.enterpriseSoftware"),
      href: "/digital-engineering/enterprise-software",
    },
  ];

  const company = [
    { name: t("company.about"), href: "/about" },
    { name: t("company.industries"), href: "/industries" },
    { name: t("company.insights"), href: "/insights" },
    { name: t("company.contact"), href: "/contact" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <h3
                className="text-3xl font-bold text-white tracking-tight"
                style={{ fontFamily: "Goglast, sans-serif" }}
              >
                neuvelabs
              </h3>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              {t("description")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/neuvelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/neuvelabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">
              {t("services.title")}
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">
              {t("company.title")}
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-6">
              {t("newsletter.title")}
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              {t("newsletter.description")}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors flex items-center justify-center"
                aria-label={t("newsletter.button")}
              >
                <ArrowRight size={18} />
              </button>
            </form>
            <div className="mt-8 space-y-2">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-blue-500" />
                <a
                  href={`mailto:${t("contact.email")}`}
                  className="hover:text-white transition-colors"
                >
                  {t("contact.email")}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-blue-500" />
                <span>{t("contact.location")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Neuve Labs Technology. {t("copyright")}
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              {t("links.privacy")}
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              {t("links.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
