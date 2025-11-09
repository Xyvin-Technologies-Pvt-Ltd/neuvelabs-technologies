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
      description="Deliver flawless software with our comprehensive quality engineering services. We implement robust testing strategies, automation frameworks, and quality assurance processes that ensure your applications meet the highest standards of reliability and performance. Our quality-first approach reduces defects, accelerates releases, and builds confidence in your software."
      heroImage={"/images/qualityEngineering/qualityE.png"}
      features={[
        {
          title: "Test Automation Framework",
          description: "Develop comprehensive test automation frameworks using Selenium, Cypress, Playwright, or Appium for web and mobile applications."
        },
        {
          title: "Performance & Load Testing",
          description: "Conduct performance testing using JMeter, Gatling, or k6 to identify bottlenecks, optimize response times, and ensure scalability under load."
        },
        {
          title: "Security Testing & Penetration Testing",
          description: "Perform security audits, vulnerability assessments, and penetration testing to identify and remediate security weaknesses before production."
        },
        {
          title: "API Testing & Validation",
          description: "Create automated API test suites using Postman, REST Assured, or custom tools to validate endpoints, contracts, and integration flows."
        },
        {
          title: "Mobile App Testing",
          description: "Test iOS and Android applications across devices, screen sizes, and OS versions with automated and manual testing strategies."
        },
        {
          title: "Continuous Testing Integration",
          description: "Integrate testing into CI/CD pipelines with automated test execution, reporting, and quality gates to prevent defects from reaching production."
        },
        {
          title: "Quality Assurance Strategy",
          description: "Develop comprehensive QA strategies, test plans, risk assessments, and quality metrics aligned with business objectives and user expectations."
        },
        {
          title: "Accessibility Testing",
          description: "Ensure applications comply with WCAG standards through automated and manual accessibility testing for inclusive user experiences."
        },
        {
          title: "Test Data Management",
          description: "Implement test data management strategies including synthetic data generation, data masking, and test environment provisioning."
        },
      ]}
      showcaseImages={[
        {
          url: "/images/qualityEngineering/qualityS1.png",
          alt: "Quality Engineering Solutions",
          caption: "Comprehensive test automation and quality assurance",
        },
        {
          url: "/images/qualityEngineering/qualityS2.png",
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
            "Develop comprehensive test automation frameworks covering unit tests, integration tests, API tests, and end-to-end UI tests. Achieve 80%+ test coverage, reduce manual testing effort by 70%, and enable faster, more reliable releases with automated regression testing.",
        },
        {
          title: "Performance Testing",
          description:
            "Conduct load testing, stress testing, spike testing, and endurance testing to ensure applications can handle expected user loads, peak traffic, and scale effectively. Identify performance bottlenecks, optimize database queries, and validate auto-scaling configurations.",
        },
        {
          title: "Security Testing",
          description:
            "Perform security audits, penetration testing, vulnerability scanning, and OWASP Top 10 assessments. Identify SQL injection, XSS, CSRF vulnerabilities, and ensure compliance with security standards before production deployment.",
        },
        {
          title: "CI/CD Quality Gates",
          description:
            "Integrate quality checks into CI/CD pipelines with automated test execution, code coverage thresholds, static code analysis, and quality gates. Prevent defective code from reaching production and maintain high code quality standards.",
        },
        {
          title: "Mobile App Quality Assurance",
          description:
            "Test mobile applications across iOS and Android devices, different screen sizes, OS versions, and network conditions. Validate app performance, battery usage, memory leaks, and compatibility with various device configurations.",
        },
        {
          title: "API Testing & Contract Testing",
          description:
            "Create comprehensive API test suites validating request/response formats, error handling, authentication, rate limiting, and contract compliance. Implement contract testing with Pact or similar tools to ensure API compatibility.",
        },
      ]}
    />
  );
}

