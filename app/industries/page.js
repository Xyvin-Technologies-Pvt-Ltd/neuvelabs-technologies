import { generateMetadata } from "@/lib/metadata";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const metadata = generateMetadata({
  title: "Industries",
  description:
    "IT consulting services for various industries including Healthcare, Finance, Retail, Manufacturing, and more. Industry-specific technology solutions.",
  path: "/industries",
});

const industries = [
  {
    title: "Healthcare",
    description:
      "Transform patient care with AI-powered diagnostics, telemedicine platforms, and healthcare data analytics solutions.",
  },
  {
    title: "Finance & Banking",
    description:
      "Secure, compliant financial technology solutions including fraud detection, risk analytics, and digital banking platforms.",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Enhance customer experiences with personalized recommendations, inventory management, and omnichannel solutions.",
  },
  {
    title: "Manufacturing",
    description:
      "Optimize operations with IoT integration, predictive maintenance, and supply chain automation solutions.",
  },
  {
    title: "Real Estate",
    description:
      "Modernize property management with smart building solutions, virtual tours, and real estate analytics platforms.",
  },
  {
    title: "Education",
    description:
      "Enhance learning experiences with e-learning platforms, student analytics, and educational technology solutions.",
  },
];

export default function Industries() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 lg:px-8 mb-20">
        <AnimatedSection className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We deliver industry-specific technology solutions that understand your
            unique challenges and regulatory requirements. Our expertise spans
            multiple sectors, helping organizations achieve their digital
            transformation goals.
          </p>
        </AnimatedSection>
      </section>

      <section className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <AnimatedCard
              key={industry.title}
              index={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {industry.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </div>
  );
}

