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
      description="Connect your systems, applications, and platforms seamlessly with our integration engineering services. We build robust integration solutions that unify your business operations and enable data flow across your entire technology ecosystem. From API development to enterprise service buses, we ensure reliable, secure, and scalable integrations."
      heroImage={"/images/integrationEngineering/integrationE.png"}
        features={[
        {
          title: "API Integration & Development",
          description: "Develop RESTful and GraphQL APIs, integrate third-party APIs, and build API gateways for centralized API management and security."
        },
        {
          title: "Enterprise Service Bus (ESB)",
          description: "Implement ESB solutions using MuleSoft, Apache Camel, or custom solutions for message routing, transformation, and orchestration."
        },
        {
          title: "System-to-System Integration",
          description: "Connect disparate systems including ERP, CRM, e-commerce platforms, databases, and legacy applications with standardized protocols."
        },
        {
          title: "Third-Party Platform Integration",
          description: "Integrate with SaaS platforms like Salesforce, Shopify, Stripe, Twilio, and custom applications via APIs and webhooks."
        },
        {
          title: "Data Synchronization",
          description: "Implement real-time and batch data synchronization between systems with conflict resolution, error handling, and audit trails."
        },
        {
          title: "Real-Time Integration Solutions",
          description: "Build event-driven integrations using message queues, event streaming, and webhooks for instant data updates across systems."
        },
        {
          title: "Integration Testing & Monitoring",
          description: "Develop comprehensive integration tests, set up monitoring dashboards, and implement alerting for integration health and performance."
        },
        {
          title: "Legacy System Integration",
          description: "Connect legacy systems with modern applications using adapters, middleware, and API wrappers to extend system capabilities."
        },
        {
          title: "Integration Architecture Design",
          description: "Design integration patterns, data flow diagrams, and integration roadmaps aligned with business requirements and technical constraints."
        },
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
            "Integrate ERP systems like SAP, Oracle, or Microsoft Dynamics with CRM platforms, e-commerce stores, warehouse management systems, and financial applications. Enable real-time inventory updates, order processing, and financial reconciliation across all systems.",
        },
        {
          title: "Payment Gateway Integration",
          description:
            "Connect multiple payment gateways including Stripe, PayPal, Square, and regional processors to your applications. Implement payment routing logic, handle webhooks for transaction updates, and ensure PCI-DSS compliance for secure payment processing.",
        },
        {
          title: "SaaS Platform Integration",
          description:
            "Integrate various SaaS platforms like Salesforce, HubSpot, Slack, Jira, and custom tools to create unified workflows. Eliminate data silos, enable single sign-on, and automate data synchronization between platforms for seamless operations.",
        },
        {
          title: "Legacy System Modernization",
          description:
            "Connect legacy mainframe systems, AS/400, or older applications with modern cloud applications through API wrappers, message queues, and integration middleware. Extend system capabilities without expensive rewrites while maintaining data integrity.",
        },
        {
          title: "E-commerce Platform Integration",
          description:
            "Integrate e-commerce platforms with inventory management, shipping providers, accounting software, and marketing tools. Automate order fulfillment, inventory updates, shipping label generation, and customer data synchronization.",
        },
        {
          title: "Marketing Automation Integration",
          description:
            "Connect marketing automation platforms like Marketo, Pardot, or HubSpot with CRM systems, email platforms, analytics tools, and customer databases. Enable lead scoring, campaign tracking, and automated customer journey orchestration.",
        },
      ]}
    />
  );
}

