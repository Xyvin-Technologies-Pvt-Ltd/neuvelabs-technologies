import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "Cloud Engineering",
  description:
    "Expert cloud engineering services including cloud migration, architecture design, DevOps, and infrastructure automation. Transform your business with cloud-native solutions.",
  path: "/digital-engineering/cloud-engineering",
});

export default function CloudEngineering() {
  return (
    <ServicePageTemplate
      title="Cloud Engineering"
      subtitle="Digital Engineering"
      description="Accelerate your digital transformation with our comprehensive cloud engineering services. From migration to optimization, we help you leverage the full power of cloud computing."
      features={[
        "Cloud Migration & Strategy",
        "Cloud Architecture Design",
        "Multi-Cloud Solutions",
        "Container Orchestration (Kubernetes)",
        "Serverless Architecture",
        "Infrastructure as Code (IaC)",
        "Cloud Cost Optimization",
      ]}
      showcaseImages={[
        {
          url: null,
          alt: "Cloud Engineering Solutions",
          caption: "Scalable cloud infrastructure and architecture",
        },
        {
          url: null,
          alt: "Cloud Migration Pipeline",
          caption: "Seamless cloud migration and deployment process",
        },
      ]}
      benefits={[
        {
          title: "Cost Optimization",
          description:
            "Optimize your cloud spending with right-sizing, reserved instances, and efficient resource management strategies.",
        },
        {
          title: "Scalability & Performance",
          description:
            "Design cloud architectures that automatically scale to meet demand while maintaining optimal performance.",
        },
        {
          title: "Security & Compliance",
          description:
            "Implement robust security measures and compliance frameworks to protect your cloud infrastructure and data.",
        },
        {
          title: "24/7 Monitoring",
          description:
            "Ensure high availability and reliability with comprehensive monitoring, alerting, and automated incident response.",
        },
      ]}
      useCases={[
        {
          title: "Legacy System Migration",
          description:
            "Migrate legacy applications and infrastructure to modern cloud platforms, improving performance and reducing costs.",
        },
        {
          title: "Hybrid Cloud Setup",
          description:
            "Design and implement hybrid cloud architectures that combine on-premises and cloud resources for optimal flexibility.",
        },
        {
          title: "Kubernetes Deployment",
          description:
            "Deploy and manage containerized applications at scale using Kubernetes for orchestration and automation.",
        },
        {
          title: "Serverless Application Development",
          description:
            "Build serverless applications that automatically scale and reduce operational overhead while optimizing costs.",
        },
      ]}
    />
  );
}

