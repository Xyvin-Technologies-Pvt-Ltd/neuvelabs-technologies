import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "Process Automation Services | RPA & Workflow Automation",
  description:
    "Neuve Labs delivers intelligent process automation services. Experts in RPA, workflow automation, and AI-powered operations for enterprises.",
  path: "/specialist-services/process-automation",
});

const features = [
  {
    title: "AI-Augmented RPA",
    description:
      "Design, build, and manage digital workers powered by machine learning to streamline finance, HR, and customer operations.",
  },
  {
    title: "Workflow Orchestration",
    description:
      "Connect legacy systems with modern SaaS platforms to orchestrate end-to-end processes with governance and audit trails.",
  },
  {
    title: "Intelligent Document Processing",
    description:
      "Use computer vision and LLM-based extraction to digitise invoices, contracts, and high-volume documents at scale.",
  },
  {
    title: "Business Process Mining",
    description:
      "Discover automation opportunities through process analytics and identify bottlenecks in existing workflows.",
  },
  {
    title: "Citizen Development Enablement",
    description:
      "Empower business users with low-code automation tools while maintaining IT governance and security.",
  },
  {
    title: "Integration Hub Design",
    description:
      "Create centralised integration layers that connect enterprise applications for seamless data flow.",
  },
];

const benefits = [
  {
    title: "UiPath Elite Partner",
    description:
      "Certified expertise in the leading enterprise RPA platform with end-to-end implementation capabilities.",
  },
  {
    title: "Microsoft Power Platform",
    description:
      "Low-code automation solutions integrated with Microsoft 365 and Azure ecosystem.",
  },
  {
    title: "ServiceNow Automation",
    description:
      "Workflow automation for IT service management, HR, and customer service workflows.",
  },
  {
    title: "Generative AI Copilots",
    description:
      "AI-powered assistants that enhance productivity and automate complex decision-making tasks.",
  },
];

const useCases = [
  {
    title: "Banking & Financial Services",
    description:
      "Real-time KYC, trade finance automation, AML monitoring, and regulatory reporting for financial institutions.",
  },
  {
    title: "Government & Smart Cities",
    description:
      "Digital citizen services, permits processing, and shared services optimised for government efficiency.",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Inventory forecasting, demand planning, and omni-channel fulfilment with predictive analytics.",
  },
  {
    title: "Healthcare Operations",
    description:
      "Patient scheduling, claims processing, and clinical documentation automation for healthcare providers.",
  },
];

export default function ProcessAutomation() {
  return (
    <ServicePageTemplate
      title="Process Automation"
      subtitle="Specialist Services"
      description="We build automation programmes that combine robotics, AI, and orchestration to modernise operations across banking, government, and large-scale enterprises."
      heroImage="/images/integrationEngineering/integration-engineering.jpg"
      features={features}
      benefits={benefits}
      useCases={useCases}
      accentColor="green"
    />
  );
}
