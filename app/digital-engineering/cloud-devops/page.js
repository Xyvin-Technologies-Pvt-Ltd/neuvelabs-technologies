import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "Cloud & DevOps",
  description:
    "Modern cloud infrastructure and DevOps solutions. Expert cloud migration, containerization, CI/CD, and infrastructure automation services in UAE.",
  path: "/digital-engineering/cloud-devops",
});

export default function CloudDevOps() {
  return (
    <ServicePageTemplate
      title="Cloud & DevOps"
      subtitle="Digital Engineering"
      heroImage={"/images/cloudDevops/cloudDevops.png"}
      description="Modernize your infrastructure with cloud-native solutions and DevOps best practices. Accelerate deployments, improve reliability, and scale effortlessly."
      features={[
        "Cloud Migration & Strategy",
        "AWS, Azure, GCP Implementation",
        "Containerization with Docker & Kubernetes",
        "CI/CD Pipeline Development",
        "Infrastructure as Code (IaC)",
        "DevOps Consulting & Training",
        "Cloud Cost Optimization",
      ]}
      showcaseImages={[
        {
          url: null,
          alt: "Cloud Infrastructure",
          caption: "Scalable cloud architecture deployment",
        },
        {
          url: null,
          alt: "DevOps Pipeline",
          caption: "Automated CI/CD pipeline workflow",
        },
      ]}
      benefits={[
        {
          title: "Scalable Infrastructure",
          description:
            "Build cloud-native architectures that scale automatically with your business needs, ensuring optimal performance and cost efficiency.",
        },
        {
          title: "Faster Deployments",
          description:
            "Implement DevOps practices that reduce deployment time from weeks to hours, accelerating your time-to-market.",
        },
        {
          title: "Enhanced Reliability",
          description:
            "Design resilient systems with automated failover and disaster recovery, minimizing downtime and ensuring business continuity.",
        },
        {
          title: "Cost Optimization",
          description:
            "Optimize cloud spending through right-sizing, reserved instances, and automated resource management.",
        },
      ]}
      useCases={[
        {
          title: "Cloud Migration",
          description:
            "Seamlessly migrate legacy applications to the cloud, improving performance and reducing infrastructure costs.",
        },
        {
          title: "Microservices Architecture",
          description:
            "Transform monolithic applications into scalable microservices using containerization and orchestration.",
        },
        {
          title: "Automated Testing & Deployment",
          description:
            "Implement CI/CD pipelines that automate testing and deployment, ensuring quality and consistency.",
        },
        {
          title: "Multi-Cloud Strategy",
          description:
            "Build hybrid and multi-cloud solutions that provide flexibility and avoid vendor lock-in.",
        },
      ]}
    />
  );
}

