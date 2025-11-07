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
      description="Bridge the gap between design and engineering with our design engineering services. We combine user-centered design principles with technical expertise to create beautiful, functional, and intuitive digital experiences that users love."
      features={[
        "UX/UI Design & Research",
        "Design System Development",
        "Prototyping & Wireframing",
        "Frontend Development",
        "Responsive Design Implementation",
        "Design-to-Code Conversion",
        "User Experience Optimization",
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
            "Redesign existing products with modern UX/UI principles, improving usability, engagement, and conversion rates.",
        },
        {
          title: "Design System Creation",
          description:
            "Develop comprehensive design systems with component libraries, style guides, and documentation for consistent brand experiences.",
        },
        {
          title: "Mobile-First Design",
          description:
            "Create mobile-first responsive designs that provide exceptional experiences across all devices and screen sizes.",
        },
        {
          title: "Accessibility-Focused Design",
          description:
            "Design and implement accessible interfaces that comply with WCAG standards and are usable by everyone.",
        },
      ]}
    />
  );
}

