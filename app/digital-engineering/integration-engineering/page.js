import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "Integration Engineering",
  description:
    "Seamless system integration services connecting your applications, APIs, and platforms. Expert integration engineering for unified business operations.",
  path: "/digital-engineering/integration-engineering",
});

export default function IntegrationEngineering() {
  return (
    <ServicePageTemplate
      title="Integration Engineering"
      subtitle="Digital Engineering"
      description="Connect your systems, applications, and platforms seamlessly with our integration engineering services. We build robust integration solutions that unify your business operations and enable data flow across your entire technology ecosystem."
      features={[
        "API Integration & Development",
        "Enterprise Service Bus (ESB)",
        "System-to-System Integration",
        "Third-Party Platform Integration",
        "Data Synchronization",
        "Real-Time Integration Solutions",
        "Integration Testing & Monitoring",
      ]}
      showcaseImages={[
        {
          url: null,
          alt: "Integration Engineering Solutions",
          caption: "Comprehensive system integration architecture",
        },
        {
          url: null,
          alt: "API Integration Platform",
          caption: "Unified API gateway and integration platform",
        },
      ]}
      benefits={[
        {
          title: "Seamless Connectivity",
          description:
            "Connect disparate systems and applications with minimal disruption to existing operations and workflows.",
        },
        {
          title: "Real-Time Synchronization",
          description:
            "Enable real-time data synchronization across systems to ensure consistency and up-to-date information everywhere.",
        },
        {
          title: "Scalable Architecture",
          description:
            "Build integration solutions that scale with your business and can accommodate future system additions easily.",
        },
        {
          title: "Reliable & Secure",
          description:
            "Implement robust error handling, security protocols, and monitoring to ensure reliable and secure integrations.",
        },
      ]}
      useCases={[
        {
          title: "ERP System Integration",
          description:
            "Integrate ERP systems with CRM, e-commerce, and other business applications for unified data management and workflows.",
        },
        {
          title: "Payment Gateway Integration",
          description:
            "Connect multiple payment gateways and processors to your applications for flexible payment processing capabilities.",
        },
        {
          title: "SaaS Platform Integration",
          description:
            "Integrate various SaaS platforms and tools to create a unified workflow and eliminate data silos across your organization.",
        },
        {
          title: "Legacy System Modernization",
          description:
            "Connect legacy systems with modern applications through APIs and integration layers, extending system lifespan and capabilities.",
        },
      ]}
    />
  );
}

