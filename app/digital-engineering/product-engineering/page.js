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
      description="Transform your ideas into successful products with our comprehensive product engineering services. From concept validation to scalable deployment, we deliver end-to-end solutions that drive business growth. Our team combines technical excellence with business acumen to build products that users love and businesses rely on."
      features={[
        {
          title: "Product Strategy & Roadmap",
          description: "Define product vision, create comprehensive roadmaps, and establish success metrics aligned with business objectives."
        },
        {
          title: "MVP Development & Validation",
          description: "Build minimum viable products quickly to validate market fit, gather user feedback, and iterate based on real-world data."
        },
        {
          title: "Full-Stack Product Development",
          description: "Develop complete products from frontend interfaces to backend systems, databases, and third-party integrations."
        },
        {
          title: "Microservices Architecture",
          description: "Design and implement scalable microservices architectures that enable independent deployment and horizontal scaling."
        },
        {
          title: "API Design & Development",
          description: "Create RESTful and GraphQL APIs with comprehensive documentation, versioning, and developer-friendly interfaces."
        },
        {
          title: "Product Scalability & Performance",
          description: "Optimize products for performance, implement caching strategies, and ensure systems can handle millions of users."
        },
        {
          title: "Product Launch & Go-to-Market Support",
          description: "Assist with product launches, deployment strategies, monitoring setup, and post-launch optimization."
        },
        {
          title: "DevOps & CI/CD Integration",
          description: "Implement continuous integration and deployment pipelines for automated testing, building, and releasing."
        },
        {
          title: "Product Analytics & Monitoring",
          description: "Integrate analytics tools, set up monitoring dashboards, and implement error tracking for product insights."
        },
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
            "Build scalable SaaS platforms with multi-tenancy, subscription management, billing systems, and enterprise-grade security features. Support thousands of customers with isolated data and customizable configurations.",
        },
        {
          title: "Mobile App Products",
          description:
            "Develop native iOS and Android applications, as well as cross-platform solutions using React Native or Flutter. Create seamless user experiences with robust backend infrastructure, push notifications, and offline capabilities.",
        },
        {
          title: "E-commerce Platforms",
          description:
            "Create comprehensive e-commerce solutions with payment gateway integration, inventory management, order processing, shipping integrations, and personalized shopping experiences powered by AI recommendations.",
        },
        {
          title: "Enterprise Product Suite",
          description:
            "Design and develop enterprise software suites with modular architecture, SSO integration, role-based access control, audit logging, and advanced analytics dashboards for business intelligence.",
        },
        {
          title: "Marketplace Platforms",
          description:
            "Build multi-sided marketplace platforms connecting buyers and sellers with payment processing, escrow services, rating systems, and dispute resolution mechanisms.",
        },
        {
          title: "Content Management Systems",
          description:
            "Develop custom CMS solutions with flexible content models, workflow management, version control, multi-language support, and headless architecture for omnichannel publishing.",
        },
      ]}
    />
  );
}

