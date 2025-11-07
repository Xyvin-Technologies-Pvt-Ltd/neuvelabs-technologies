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
      description="Accelerate your digital transformation with our comprehensive cloud engineering services. From migration to optimization, we help you leverage the full power of cloud computing. Our team specializes in AWS, Azure, and GCP, delivering scalable, secure, and cost-effective cloud solutions that drive business innovation."
      features={[
        {
          title: "Cloud Migration & Strategy",
          description: "Plan and execute seamless migrations from on-premises to cloud, including lift-and-shift, re-platforming, and cloud-native refactoring strategies."
        },
        {
          title: "Cloud Architecture Design",
          description: "Design highly available, fault-tolerant cloud architectures following best practices for scalability, security, and performance optimization."
        },
        {
          title: "Multi-Cloud Solutions",
          description: "Implement multi-cloud strategies to avoid vendor lock-in, improve resilience, and optimize costs across AWS, Azure, and GCP platforms."
        },
        {
          title: "Container Orchestration (Kubernetes)",
          description: "Deploy and manage Kubernetes clusters on EKS, AKS, GKE, or self-managed infrastructure with CI/CD integration and auto-scaling."
        },
        {
          title: "Serverless Architecture",
          description: "Build serverless applications using AWS Lambda, Azure Functions, or Google Cloud Functions for cost-effective, auto-scaling solutions."
        },
        {
          title: "Infrastructure as Code (IaC)",
          description: "Implement infrastructure automation using Terraform, CloudFormation, or Pulumi for version-controlled, repeatable deployments."
        },
        {
          title: "Cloud Cost Optimization",
          description: "Analyze cloud spending, implement cost optimization strategies, reserved instances, spot instances, and right-sizing recommendations."
        },
        {
          title: "DevOps & CI/CD Pipelines",
          description: "Set up continuous integration and deployment pipelines using Jenkins, GitLab CI, GitHub Actions, or AWS CodePipeline."
        },
        {
          title: "Cloud Security & Compliance",
          description: "Implement security best practices, IAM policies, encryption, network security, and compliance frameworks (SOC 2, ISO 27001, HIPAA)."
        },
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
            "Migrate legacy applications and infrastructure to modern cloud platforms like AWS, Azure, or GCP. Modernize applications during migration, improve performance with cloud-native services, reduce infrastructure costs by 40-60%, and eliminate on-premises maintenance overhead.",
        },
        {
          title: "Hybrid Cloud Setup",
          description:
            "Design and implement hybrid cloud architectures that seamlessly combine on-premises data centers with public cloud resources. Enable data sovereignty compliance, maintain low-latency connections, and provide flexible workload placement based on requirements.",
        },
        {
          title: "Kubernetes Deployment",
          description:
            "Deploy and manage containerized applications at scale using Kubernetes on EKS, AKS, or GKE. Implement auto-scaling, rolling updates, service mesh with Istio, and GitOps workflows for automated deployments across multiple environments.",
        },
        {
          title: "Serverless Application Development",
          description:
            "Build serverless applications using Lambda, Functions, or Cloud Run that automatically scale from zero to millions of requests. Reduce operational overhead, pay only for execution time, and achieve 99.99% availability with built-in fault tolerance.",
        },
        {
          title: "Disaster Recovery & Backup",
          description:
            "Implement comprehensive disaster recovery solutions with automated backups, cross-region replication, and RTO/RPO targets. Test failover procedures regularly and ensure business continuity during outages.",
        },
        {
          title: "Cloud-Native Application Development",
          description:
            "Develop cloud-native applications leveraging managed services like RDS, S3, SQS, and EventBridge. Build microservices architectures with API gateways, service discovery, and distributed tracing for observability.",
        },
      ]}
    />
  );
}

