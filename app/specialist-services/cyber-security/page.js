import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "Cyber Security Services | Information Security Consulting",
  description:
    "Neuve Labs delivers enterprise cyber security services. Penetration testing, SOC operations, compliance, and incident response for regulated industries.",
  path: "/specialist-services/cyber-security",
});

const features = [
  {
    title: "Security Strategy & Governance",
    description:
      "Mature your cyber posture with assessments, policy frameworks, and executive scorecards aligned with industry standards.",
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
  {
    title: "Zero Trust Architecture",
    description:
      "Implement identity-centric security models with continuous verification and least-privilege access controls.",
  },
  {
    title: "Cloud Security Posture",
    description:
      "Secure multi-cloud environments with automated compliance monitoring and misconfiguration detection.",
  },
  {
    title: "Incident Response Planning",
    description:
      "Develop and test incident response procedures to ensure rapid recovery from security events.",
  },
];

const benefits = [
  {
    title: "Industry Compliance Expertise",
    description:
      "Navigate complex regulatory requirements including ISO 27001, SOC 2, GDPR, and industry-specific standards.",
  },
  {
    title: "24/7 Security Operations",
    description:
      "Round-the-clock monitoring and rapid response capabilities to protect your critical assets.",
  },
  {
    title: "Proactive Threat Intelligence",
    description:
      "Stay ahead of emerging threats with actionable intelligence and continuous vulnerability assessment.",
  },
  {
    title: "Business Continuity Focus",
    description:
      "Security solutions designed to minimise business impact while maximising protection.",
  },
];

const useCases = [
  {
    title: "Financial Services Security",
    description:
      "Zero-trust architecture, SWIFT CSP compliance, and fraud analytics for banks and fintech platforms.",
  },
  {
    title: "Government & Public Sector",
    description:
      "Secure cloud migration, critical infrastructure protection, and digital identity resilience.",
  },
  {
    title: "Energy & Utilities",
    description:
      "OT/ICS risk management, anomaly detection, and incident response for smart grid operations.",
  },
  {
    title: "Healthcare Data Protection",
    description:
      "HIPAA-compliant security frameworks, medical device security, and patient data protection.",
  },
];

export default function CyberSecurity() {
  return (
    <ServicePageTemplate
      title="Cyber Security"
      subtitle="Specialist Services"
      description="We secure digital infrastructures across banking, government, healthcare, and energy sectors through holistic cyber programmes built on global best practice and regulatory compliance."
      heroImage="/images/qualityEngineering/quality-engineering.jpg"
      features={features}
      benefits={benefits}
      useCases={useCases}
      accentColor="cyan"
    />
  );
}
