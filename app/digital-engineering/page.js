import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const metadata = generateMetadata({
  title: "Digital Engineering",
  description:
    "Comprehensive digital engineering services including AI & Machine Learning, Cloud & DevOps, Data Analytics, and Enterprise Software Development.",
  path: "/digital-engineering",
});

const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Transform your business with cutting-edge artificial intelligence and machine learning solutions. From predictive analytics to natural language processing, we help you leverage AI to drive innovation.",
    href: "/digital-engineering/ai-ml",
    icon: "AI",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Modernize your infrastructure with cloud-native solutions and DevOps best practices. Accelerate deployments, improve reliability, and scale effortlessly.",
    href: "/digital-engineering/cloud-devops",
    icon: "☁️",
  },
  {
    title: "Data Analytics",
    description:
      "Unlock the power of your data with advanced analytics, business intelligence, and data visualization solutions. Make data-driven decisions with confidence.",
    href: "/digital-engineering/data-analytics",
    icon: "📊",
  },
  {
    title: "Enterprise Software",
    description:
      "Build robust, scalable enterprise applications tailored to your business needs. From custom software development to legacy system modernization.",
    href: "/digital-engineering/enterprise-software",
    icon: "💼",
  },
];

export default function DigitalEngineering() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-8 mb-20">
        <AnimatedSection className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-400 mb-6">
            Digital Engineering
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We design, build, and deploy cutting-edge digital solutions that
            transform businesses and drive innovation. Our engineering expertise
            spans AI, cloud infrastructure, data analytics, and enterprise
            software development.
          </p>
        </AnimatedSection>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={service.title} index={index}>
              <Link href={service.href}>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[#007AFF] font-medium">
                    Learn more
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </div>
  );
}

