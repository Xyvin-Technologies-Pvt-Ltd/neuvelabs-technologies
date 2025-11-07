import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "Product Engineering",
  description:
    "End-to-end product engineering services from concept to launch. Expert product development, architecture design, and scalable solutions for modern businesses.",
  path: "/digital-engineering/product-engineering",
});

export default function ProductEngineering() {
  return (
    <ServicePageTemplate
      title="Product Engineering"
      subtitle="Digital Engineering"
      description="Transform your ideas into successful products with our comprehensive product engineering services. From concept validation to scalable deployment, we deliver end-to-end solutions that drive business growth."
      features={[
        "Product Strategy & Roadmap",
        "MVP Development & Validation",
        "Full-Stack Product Development",
        "Microservices Architecture",
        "API Design & Development",
        "Product Scalability & Performance",
        "Product Launch & Go-to-Market Support",
      ]}
      showcaseImages={[
        {
          url: null,
          alt: "Product Engineering Solutions",
          caption: "Scalable product architecture and infrastructure",
        },
        {
          url: null,
          alt: "Product Development Pipeline",
          caption: "End-to-end product development lifecycle",
        },
      ]}
      benefits={[
        {
          title: "Agile Methodology",
          description:
            "We follow agile development practices to ensure rapid iteration, continuous feedback, and faster time-to-market for your products.",
        },
        {
          title: "Scalable Architecture",
          description:
            "Our products are built with scalability in mind, ensuring they can grow with your business needs without major rewrites.",
        },
        {
          title: "User-Centric Design",
          description:
            "We prioritize user experience and design, creating products that are not only functional but also intuitive and engaging.",
        },
        {
          title: "Continuous Innovation",
          description:
            "We stay ahead of technology trends and continuously improve your product with the latest tools and best practices.",
        },
      ]}
      useCases={[
        {
          title: "SaaS Platform Development",
          description:
            "Build scalable SaaS platforms with multi-tenancy, subscription management, and enterprise-grade security features.",
        },
        {
          title: "Mobile App Products",
          description:
            "Develop native and cross-platform mobile applications with seamless user experiences and robust backend infrastructure.",
        },
        {
          title: "E-commerce Platforms",
          description:
            "Create comprehensive e-commerce solutions with payment integration, inventory management, and personalized shopping experiences.",
        },
        {
          title: "Enterprise Product Suite",
          description:
            "Design and develop enterprise software suites with modular architecture, integration capabilities, and advanced analytics.",
        },
      ]}
    />
  );
}

