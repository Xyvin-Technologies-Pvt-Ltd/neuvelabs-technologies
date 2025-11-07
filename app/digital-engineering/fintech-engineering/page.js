import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "FinTech Engineering",
  description:
    "Specialized FinTech engineering services for payment systems, banking solutions, and financial platforms. Secure, compliant, and scalable financial technology solutions.",
  path: "/digital-engineering/fintech-engineering",
});

export default function FinTechEngineering() {
  return (
    <ServicePageTemplate
      title="FinTech Engineering"
      subtitle="Digital Engineering"
      description="Build secure, compliant, and innovative financial technology solutions with our specialized FinTech engineering services. From payment processing to banking platforms, we deliver solutions that meet the highest standards of security and regulatory compliance."
      features={[
        "Payment Processing Systems",
        "Banking Platform Development",
        "Digital Wallet Solutions",
        "Blockchain & Cryptocurrency Integration",
        "Regulatory Compliance (PCI-DSS, GDPR)",
        "Fraud Detection & Prevention",
        "Financial Data Analytics",
      ]}
      showcaseImages={[
        {
          url: null,
          alt: "FinTech Engineering Solutions",
          caption: "Secure payment processing and banking infrastructure",
        },
        {
          url: null,
          alt: "Financial Platform Architecture",
          caption: "Scalable FinTech platform and transaction processing",
        },
      ]}
      benefits={[
        {
          title: "Security First",
          description:
            "Implement bank-grade security measures including encryption, tokenization, and multi-factor authentication to protect financial data.",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Ensure full compliance with financial regulations including PCI-DSS, GDPR, and regional banking standards.",
        },
        {
          title: "High Performance",
          description:
            "Build systems capable of processing millions of transactions with low latency and high availability requirements.",
        },
        {
          title: "Scalable Architecture",
          description:
            "Design financial platforms that can scale to handle growing transaction volumes and user bases seamlessly.",
        },
      ]}
      useCases={[
        {
          title: "Payment Gateway Development",
          description:
            "Develop secure payment gateways that support multiple payment methods, currencies, and provide seamless checkout experiences.",
        },
        {
          title: "Digital Banking Platform",
          description:
            "Build comprehensive digital banking platforms with account management, transfers, bill payments, and financial planning features.",
        },
        {
          title: "Cryptocurrency Exchange",
          description:
            "Create secure cryptocurrency trading platforms with wallet management, trading engines, and compliance features.",
        },
        {
          title: "Lending Platform",
          description:
            "Develop peer-to-peer lending or loan management platforms with credit scoring, risk assessment, and automated processing capabilities.",
        },
      ]}
    />
  );
}

