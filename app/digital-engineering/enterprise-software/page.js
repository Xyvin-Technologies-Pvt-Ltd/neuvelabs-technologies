import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "Enterprise Software Development",
  description:
    "Custom enterprise software development services in UAE. Build scalable, robust applications with modern technologies and best practices.",
  path: "/digital-engineering/enterprise-software",
});

export default function EnterpriseSoftware() {
  return (
    <ServicePageTemplate
      title="Enterprise Software Development"
      subtitle="Digital Engineering"
      description="Build robust, scalable enterprise applications tailored to your business needs. From custom software development to legacy system modernization."
      heroImage={"/images/enterpriseSoftware/enterpriseSoftware.png"}
      features={[
        "Custom Application Development",
        "Legacy System Modernization",
        "Microservices Architecture",
        "API Development & Integration",
        "Enterprise System Integration",
        "Quality Assurance & Testing",
        "Maintenance & Support",
      ]}
      showcaseImages={[
        {
          url: null,
          alt: "Enterprise Software",
          caption: "Custom enterprise application interface",
        },
        {
          url: null,
          alt: "System Architecture",
          caption: "Scalable microservices architecture",
        },
      ]}
      benefits={[
        {
          title: "Scalable Solutions",
          description:
            "Develop enterprise-grade software solutions that scale with your business growth and evolving needs.",
        },
        {
          title: "Best Practices",
          description:
            "Follow industry best practices in software engineering to deliver reliable, maintainable applications.",
        },
        {
          title: "Modern Technology",
          description:
            "Leverage cutting-edge technologies and frameworks to build high-performance, future-proof applications.",
        },
        {
          title: "Comprehensive Support",
          description:
            "Provide ongoing maintenance, updates, and support to ensure your software continues to perform optimally.",
        },
      ]}
      useCases={[
        {
          title: "Custom ERP Systems",
          description:
            "Develop custom Enterprise Resource Planning systems tailored to your specific business processes and requirements.",
        },
        {
          title: "Legacy Modernization",
          description:
            "Modernize legacy systems with modern architectures, improving performance, security, and maintainability.",
        },
        {
          title: "API-First Development",
          description:
            "Build API-first applications that enable seamless integration with third-party services and systems.",
        },
        {
          title: "Workflow Automation",
          description:
            "Create custom software solutions that automate complex business workflows, increasing efficiency and reducing errors.",
        },
      ]}
    />
  );
}

