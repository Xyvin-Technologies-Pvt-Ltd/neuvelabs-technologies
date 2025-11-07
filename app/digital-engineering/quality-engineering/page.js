import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "Quality Engineering",
  description:
    "Comprehensive quality engineering services including test automation, performance testing, and QA strategy. Ensure your software meets the highest quality standards.",
  path: "/digital-engineering/quality-engineering",
});

export default function QualityEngineering() {
  return (
    <ServicePageTemplate
      title="Quality Engineering"
      subtitle="Digital Engineering"
      description="Deliver flawless software with our comprehensive quality engineering services. We implement robust testing strategies, automation frameworks, and quality assurance processes that ensure your applications meet the highest standards of reliability and performance."
      features={[
        "Test Automation Framework",
        "Performance & Load Testing",
        "Security Testing & Penetration Testing",
        "API Testing & Validation",
        "Mobile App Testing",
        "Continuous Testing Integration",
        "Quality Assurance Strategy",
      ]}
      showcaseImages={[
        {
          url: null,
          alt: "Quality Engineering Solutions",
          caption: "Comprehensive test automation and quality assurance",
        },
        {
          url: null,
          alt: "Performance Testing Platform",
          caption: "Advanced performance and load testing infrastructure",
        },
      ]}
      benefits={[
        {
          title: "Automated Testing",
          description:
            "Implement comprehensive test automation that reduces manual effort, accelerates releases, and improves test coverage.",
        },
        {
          title: "Early Defect Detection",
          description:
            "Identify and resolve issues early in the development cycle, reducing costs and time-to-market for your products.",
        },
        {
          title: "Performance Optimization",
          description:
            "Ensure your applications perform optimally under various load conditions through comprehensive performance testing.",
        },
        {
          title: "Quality Culture",
          description:
            "Establish a quality-first culture with best practices, processes, and tools that ensure consistent delivery excellence.",
        },
      ]}
      useCases={[
        {
          title: "End-to-End Test Automation",
          description:
            "Develop comprehensive test automation frameworks covering unit, integration, and end-to-end testing for faster, reliable releases.",
        },
        {
          title: "Performance Testing",
          description:
            "Conduct load, stress, and performance testing to ensure applications can handle expected user loads and scale effectively.",
        },
        {
          title: "Security Testing",
          description:
            "Perform security audits, penetration testing, and vulnerability assessments to protect applications from threats and breaches.",
        },
        {
          title: "CI/CD Quality Gates",
          description:
            "Integrate quality checks into CI/CD pipelines to automatically validate code quality and prevent defects from reaching production.",
        },
      ]}
    />
  );
}

