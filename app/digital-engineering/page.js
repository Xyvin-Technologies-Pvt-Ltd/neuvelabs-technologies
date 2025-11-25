import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import { Brain, Cloud, BarChart3, Code2, ArrowRight } from "lucide-react";

export const metadata = generateMetadata({
  title: "Digital Engineering",
  description:
    "Comprehensive digital engineering services including AI & Machine Learning, Cloud & DevOps, Data Analytics, and Enterprise Software Development.",
});

const services = [
  {
    title: "AI & Machine Learning",
    description:
      "Transform your business with cutting-edge artificial intelligence and machine learning solutions. From predictive analytics to natural language processing, we help you leverage AI to drive innovation.",
    href: "/digital-engineering/ai-ml",
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Modernize your infrastructure with cloud-native solutions and DevOps best practices. Accelerate deployments, improve reliability, and scale effortlessly.",
    href: "/digital-engineering/cloud-devops",
    icon: <Cloud className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Data Analytics",
    description:
      "Unlock the power of your data with advanced analytics, business intelligence, and data visualization solutions. Make data-driven decisions with confidence.",
    href: "/digital-engineering/data-analytics",
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Enterprise Software",
    description:
      "Build robust, scalable enterprise applications tailored to your business needs. From custom software development to legacy system modernization.",
    href: "/digital-engineering/enterprise-software",
    icon: <Code2 className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500",
  },
];

export default function DigitalEngineering() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Core Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Engineering
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We design, build, and deploy cutting-edge digital solutions that transform businesses and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link key={service.title} href={service.href} className="group">
                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.07] relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex items-center text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                      Explore Solutions
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

