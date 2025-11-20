import { generateMetadata } from "@/lib/metadata";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const metadata = generateMetadata({
  title: "Cyber Security Services UAE | Information Security Consulting Dubai",
  description:
    "Neuve Labs delivers enterprise cyber security services across the UAE. Penetration testing, SOC operations, compliance, and incident response for regulated industries in Dubai and the Middle East.",
  path: "/specialist-services/cyber-security",
});

const securityDomains = [
  {
    title: "Security Strategy & Governance",
    description:
      "Mature your cyber posture with assessments, policy frameworks, and executive scorecards aligned with UAE Information Assurance Standards.",
  },
  {
    title: "Threat Detection & Response",
    description:
      "Build 24/7 SOC capabilities, deploy SIEM/XDR platforms, and orchestrate automated response playbooks across hybrid environments.",
  },
  {
    title: "Offensive Security",
    description:
      "Conduct red teaming, penetration testing, and adversary emulation to expose vulnerabilities before malicious actors do.",
  },
];

const complianceFocus = [
  "UAE Information Assurance Standards (NESA)",
  "Dubai Electronic Security Center (DESC)",
  "Abu Dhabi ADHICS & healthcare regulations",
  "ISO 27001, ISO 22301, PCI DSS",
  "SAMA & CB UAE cyber security guidelines",
  "NCA ECC & national defence standards",
];

const industryProtection = [
  {
    industry: "Financial Services",
    highlight:
      "Zero-trust architecture, SWIFT CSP compliance, and fraud analytics for banks and fintech platforms.",
  },
  {
    industry: "Government & Public Sector",
    highlight:
      "Secure cloud migration, critical infrastructure protection, and digital identity resilience.",
  },
  {
    industry: "Energy & Utilities",
    highlight:
      "OT/ICS risk management, anomaly detection, and incident response for smart grid operations.",
  },
];

export default function CyberSecurity() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#9C9C9C]/40 bg-white/20 px-4 py-2 text-xs uppercase tracking-wide text-[#9C9C9C]">
            <span className="h-2 w-2 rounded-full bg-[#9C9C9C]" />
            Specialist Services · Cyber Security
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl leading-tight text-gray-900">
            Proactive cyber defence for{" "}
            <span className="bg-linear-to-r from-[#436DCC] via-[#2D51A4] to-[#4B72CC] bg-clip-text text-transparent">
              mission-critical UAE enterprises
            </span>
            .
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-gray-600">
            We secure digital infrastructures across banking, government, aviation,
            and energy sectors through holistic cyber programmes built on global
            best practice and UAE regulatory compliance.
          </p>
        </AnimatedSection>
      </section>

      {/* Security domains */}
      <section className="container mx-auto px-6 lg:px-8 mt-16">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CCC9C8] bg-white px-4 py-2 text-xs text-black">
            <span className="h-2 w-2 rounded-full bg-black" />
            Defence pillars
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {securityDomains.map((domain, index) => (
              <AnimatedCard
                key={domain.title}
                index={index}
                className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4B72CC]/40 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#436DCC] via-[#2D51A4] to-[#4B72CC] text-white text-lg font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                  {domain.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {domain.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Compliance and assurance */}
      <section className="mt-24 bg-gradient-to-r from-[#0F1A36] via-[#1E3261] to-[#2D51A4] text-white">
        <div className="container mx-auto px-6 lg:px-8 py-24">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-wide text-white/70">
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                  Compliance & assurance
                </div>
                <h2 className="mt-6 text-4xl md:text-5xl leading-tight">
                  Navigate UAE cyber regulations with confidence.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  Our compliance squads partner with CISOs and risk officers to
                  translate regulatory mandates into pragmatic controls, automated
                  reporting, and continuous assurance programmes.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-md">
                <h3 className="text-lg font-semibold text-white">
                  Certification expertise
                </h3>
                <ul className="mt-5 grid gap-3 text-sm text-white/75">
                  {complianceFocus.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 rounded-[28px] border border-white/10 bg-white/5 p-8">
              <div className="grid gap-6 md:grid-cols-3 text-sm text-white/80">
                <div>
                  <div className="text-3xl font-semibold text-white">30%</div>
                  <p className="mt-3 text-white/70">
                    Reduction in compliance audit timelines through automated
                    evidence collection.
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-white">24/7</div>
                  <p className="mt-3 text-white/70">
                    Managed SOC coverage with bilingual analysts across Dubai and
                    Riyadh.
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-semibold text-white">4 hrs</div>
                  <p className="mt-3 text-white/70">
                    Average incident response activation time for high-severity
                    alerts.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Industry protection */}
      <section className="container mx-auto px-6 lg:px-8 mt-20">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CCC9C8] bg-white px-4 py-2 text-xs text-black">
            <span className="h-2 w-2 rounded-full bg-black" />
            Industry programmes
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {industryProtection.map((item, index) => (
              <AnimatedCard
                key={item.industry}
                index={index}
                className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4B72CC]/40 hover:shadow-lg"
              >
                <div className="text-sm uppercase tracking-wide text-[#2D51A4]">
                  {item.industry}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {item.highlight}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 lg:px-8 mt-20">
        <AnimatedSection className="rounded-[32px] bg-gradient-to-r from-[#D1DCE8] via-[#EEF3FF] to-[#FAFCFF] px-10 py-14 text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Secure your next transformation initiative.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Engage our cyber threat leads for a readiness assessment, red team
            campaign, or SOC modernisation roadmap tailored to your regulatory
            landscape.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-[#2D51A4] px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1f3f86]"
          >
            Arrange a cyber consultation
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}


