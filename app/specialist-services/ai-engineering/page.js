import { generateMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/SectionWrapper";
import { Brain, Cpu, Settings } from "lucide-react";

export const metadata = generateMetadata({
  title: "AI Engineering Services UAE | Machine Learning Solutions Dubai",
  description:
    "Neuve Labs delivers AI engineering services across the UAE. Machine learning development, GenAI platforms, and AI strategy aligned with UAE Vision 2031.",
  path: "/specialist-services/ai-engineering",
});

const aiServices = [
  {
    title: "AI Strategy & Roadmaps",
    description:
      "Co-create adoption roadmaps, governance frameworks, and investment cases aligned with UAE Vision 2031 priorities.",
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "ML & GenAI Engineering",
    description:
      "Design and deploy machine learning and generative AI solutions for intelligent automation, personalization, and decisioning.",
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Platform Operations",
    description:
      "Operationalise AI with MLOps, model monitoring, and responsible AI controls across hybrid cloud environments.",
    icon: <Settings className="w-8 h-8" />,
    gradient: "from-amber-500 to-orange-500",
  },
];

const aiUseCases = [
  {
    title: "Conversational AI & Arabic NLP",
    description:
      "Multilingual chatbots, virtual agents, and service assistants leveraging large language models tuned for Emirati dialects.",
  },
  {
    title: "Predictive Intelligence",
    description:
      "Demand forecasting, risk scoring, and anomaly detection for finance, aviation, and supply chain operations.",
  },
  {
    title: "Computer Vision & IoT",
    description:
      "Real-time video analytics for smart cities, safety compliance, and asset monitoring across industrial sites.",
  },
];

const frameworks = [
  "Azure OpenAI & Microsoft Fabric",
  "AWS SageMaker & Bedrock",
  "Google Vertex AI",
  "Databricks Lakehouse",
  "LangChain & Retrieval-Augmented Generation",
  "Weights & Biases · MLflow",
];

export default function AiEngineering() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-50/20 via-white to-white" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Specialist Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
              AI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Engineering
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              From strategy to production, we engineer AI solutions that enhance citizen services, optimise enterprise operations, and create new digital products for ambitious organisations in the Middle East.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              How We Help
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive AI solutions aligned with UAE Vision 2031 priorities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={service.title} className="group h-full p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-blue-600">
                      {service.icon}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Use Cases Section */}
      <SectionWrapper className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-50/10 via-white to-white" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Real-World Impact
            </h2>
            <p className="text-gray-600 text-lg">
              AI solutions designed for UAE's unique challenges and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aiUseCases.map((useCase, index) => (
              <div key={useCase.title} className="p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Frameworks Section */}
      <SectionWrapper className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading AI Platforms
            </h2>
            <p className="text-gray-600 text-lg">
              Certified consulting teams integrate enterprise data platforms and secure AI infrastructure
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {frameworks.map((item) => (
              <div
                key={item}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
              >
                <p className="text-gray-900 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--tw-gradient-stops))] from-blue-50/20 via-white to-white" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Launch Your Next AI Venture
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Engage our AI leaders for a discovery workshop, opportunity mapping, and MVP plan built around your unique data estate and customer vision.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Start an AI Workshop
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}



