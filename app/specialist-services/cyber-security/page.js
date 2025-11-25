import { generateMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/SectionWrapper";
import { Shield, Eye, Target } from "lucide-react";

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
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    title: "Threat Detection & Response",
    description:
      "Build 24/7 SOC capabilities, deploy SIEM/XDR platforms, and orchestrate automated response playbooks across hybrid environments.",
    icon: <Eye className="w-8 h-8" />,
    gradient: "from-red-500 to-rose-500",
  },
  {
    title: "Offensive Security",
    description:
      "Conduct red teaming, penetration testing, and adversary emulation to expose vulnerabilities before malicious actors do.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-orange-500 to-amber-500",
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
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-50/20 via-white to-white" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Specialist Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
              Cyber <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Security
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We secure digital infrastructures across banking, government, aviation, and energy sectors through holistic cyber programmes built on global best practice and UAE regulatory compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Security Domains Grid */}
      <SectionWrapper className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Defence Pillars
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive security solutions for mission-critical enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {securityDomains.map((domain, index) => (
              <div key={domain.title} className="group h-full p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-blue-600">
                      {domain.icon}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {domain.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {domain.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Compliance Section */}
      <SectionWrapper className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-50/10 via-white to-white" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              UAE Regulatory Compliance
            </h2>
            <p className="text-gray-600 text-lg">
              Navigate UAE cyber regulations with confidence
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 mb-12">
            {complianceFocus.map((item) => (
              <div key={item} className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                <p className="text-gray-900 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-gray-900 mb-4">30%</div>
              <p className="text-gray-600">
                Reduction in compliance audit timelines through automated evidence collection.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-gray-900 mb-4">24/7</div>
              <p className="text-gray-600">
                Managed SOC coverage with bilingual analysts across Dubai and Riyadh.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
              <div className="text-4xl font-bold text-gray-900 mb-4">4 hrs</div>
              <p className="text-gray-600">
                Average incident response activation time for high-severity alerts.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Industry Protection */}
      <SectionWrapper className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Programmes
            </h2>
            <p className="text-gray-600 text-lg">
              Tailored security solutions for regulated sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industryProtection.map((item, index) => (
              <div key={item.industry} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.industry}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-blue-50/20 via-white to-white" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Secure Your Transformation
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Engage our cyber threat leads for a readiness assessment, red team campaign, or SOC modernisation roadmap tailored to your regulatory landscape.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Arrange a Cyber Consultation
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}



