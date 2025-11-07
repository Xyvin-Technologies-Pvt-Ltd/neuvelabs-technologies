import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "Design Engineering",
  description:
    "User-centered design engineering services combining UX/UI design with technical implementation. Create beautiful, functional, and intuitive digital experiences.",
  path: "/digital-engineering/design-engineering",
});

export default function DesignEngineering() {
  return (
    <ServicePageTemplate
      title="Design Engineering"
      subtitle="Digital Engineering"
      description="Bridge the gap between design and engineering with our design engineering services. We combine user-centered design principles with technical expertise to create beautiful, functional, and intuitive digital experiences that users love. Our design engineers ensure pixel-perfect implementation while maintaining performance and accessibility standards."
      heroImage={"/images/designEngineering/design-engineering.jpg"}
      features={[
        {
          title: "UX/UI Design & Research",
          description: "Conduct user research, create user personas, journey maps, and design intuitive interfaces that solve real user problems effectively."
        },
        {
          title: "Design System Development",
          description: "Build comprehensive design systems with component libraries, style guides, tokens, and documentation for consistent brand experiences."
        },
        {
          title: "Prototyping & Wireframing",
          description: "Create interactive prototypes using Figma, Adobe XD, or Framer to validate designs, gather feedback, and iterate before development."
        },
        {
          title: "Frontend Development",
          description: "Implement designs using React, Vue, Angular, or Next.js with modern CSS, animations, and responsive layouts matching design specifications."
        },
        {
          title: "Responsive Design Implementation",
          description: "Ensure designs work seamlessly across desktop, tablet, and mobile devices with mobile-first approaches and adaptive layouts."
        },
        {
          title: "Design-to-Code Conversion",
          description: "Convert design mockups into production-ready code with pixel-perfect accuracy, maintaining design integrity and performance."
        },
        {
          title: "User Experience Optimization",
          description: "Analyze user behavior, conduct A/B tests, and optimize user flows to improve conversion rates, engagement, and satisfaction."
        },
        {
          title: "Accessibility-Focused Design",
          description: "Design and implement accessible interfaces compliant with WCAG 2.1 AA standards, ensuring usability for all users including those with disabilities."
        },
        {
          title: "Animation & Micro-interactions",
          description: "Create smooth animations, transitions, and micro-interactions that enhance user experience and provide visual feedback."
        },
      ]}
      showcaseImages={[
        {
          url: null,
          alt: "Design Engineering Solutions",
          caption: "Modern UI/UX design and implementation",
        },
        {
          url: null,
          alt: "Design System Architecture",
          caption: "Comprehensive design system and component library",
        },
      ]}
      benefits={[
        {
          title: "User-Centered Approach",
          description:
            "Design solutions based on user research, testing, and feedback to ensure optimal user experiences and satisfaction.",
        },
        {
          title: "Design Systems",
          description:
            "Create comprehensive design systems that ensure consistency, scalability, and faster development across all products.",
        },
        {
          title: "Technical Excellence",
          description:
            "Combine design expertise with technical implementation to deliver pixel-perfect, performant, and accessible interfaces.",
        },
        {
          title: "Iterative Improvement",
          description:
            "Continuously refine and improve designs based on user data, analytics, and feedback for better outcomes.",
        },
      ]}
      useCases={[
        {
          title: "Product Redesign",
          description:
            "Redesign existing products with modern UX/UI principles, conducting user research, usability testing, and iterative design improvements. Achieve 30-50% improvement in user engagement, reduce bounce rates, and increase conversion rates through data-driven design decisions.",
        },
        {
          title: "Design System Creation",
          description:
            "Develop comprehensive design systems with React/Vue component libraries, design tokens, style guides, and Storybook documentation. Enable faster development, ensure brand consistency, and reduce design debt across multiple products and teams.",
        },
        {
          title: "Mobile-First Design",
          description:
            "Create mobile-first responsive designs that provide exceptional experiences across all devices. Optimize for touch interactions, implement progressive enhancement, and ensure fast loading times on mobile networks.",
        },
        {
          title: "Accessibility-Focused Design",
          description:
            "Design and implement accessible interfaces compliant with WCAG 2.1 AA standards. Ensure keyboard navigation, screen reader compatibility, proper color contrast, and semantic HTML for inclusive user experiences.",
        },
        {
          title: "E-commerce UX Optimization",
          description:
            "Optimize e-commerce user experiences with streamlined checkout flows, product discovery, filtering, and personalized recommendations. Reduce cart abandonment rates and increase average order values through UX improvements.",
        },
        {
          title: "Dashboard & Analytics Design",
          description:
            "Design intuitive dashboards and data visualization interfaces that make complex information accessible. Create interactive charts, filters, and drill-down capabilities for business intelligence and analytics platforms.",
        },
      ]}
    />
  );
}

