import { generateMetadata } from "@/lib/metadata";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const metadata = generateMetadata({
  title: "Specialist Services",
  description:
    "Specialized IT consulting services including AI automation, digital transformation consulting, and custom technology solutions for enterprises.",
  path: "/specialist-services",
});

const services = [
  {
    title: "AI Automation Solutions",
    description:
      "Automate complex business processes with intelligent AI-powered solutions that reduce manual work and improve efficiency.",
  },
  {
    title: "Digital Transformation Consulting",
    description:
      "Strategic guidance to help organizations navigate their digital transformation journey with expert consulting and roadmap planning.",
  },
  {
    title: "Technology Strategy",
    description:
      "Develop comprehensive technology strategies aligned with your business objectives and growth plans.",
  },
  {
    title: "Solution Architecture",
    description:
      "Design scalable, secure, and efficient solution architectures that support your business requirements.",
  },
  {
    title: "Quality Assurance & Testing",
    description:
      "Comprehensive testing services to ensure your software meets quality standards and performs flawlessly.",
  },
  {
    title: "Technical Consulting",
    description:
      "Expert technical consulting to help you make informed technology decisions and solve complex challenges.",
  },
];

export default function SpecialistServices() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 lg:px-8 mb-20">
        <AnimatedSection className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Specialist Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our specialized consulting services help organizations leverage
            cutting-edge technology to solve complex business challenges and drive
            innovation.
          </p>
        </AnimatedSection>
      </section>

      <section className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard
              key={service.title}
              index={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </div>
  );
}

