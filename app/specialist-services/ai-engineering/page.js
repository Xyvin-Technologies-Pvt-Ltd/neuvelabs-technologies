import { generateMetadata } from "@/lib/metadata";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

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
  },
  {
    title: "ML & GenAI Engineering",
    description:
      "Design and deploy machine learning and generative AI solutions for intelligent automation, personalization, and decisioning.",
  },
  {
    title: "AI Platform Operations",
    description:
      "Operationalise AI with MLOps, model monitoring, and responsible AI controls across hybrid cloud environments.",
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
    <div className="pt-32 pb-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#9C9C9C]/40 bg-white/20 px-4 py-2 text-xs uppercase tracking-wide text-[#9C9C9C]">
            <span className="h-2 w-2 rounded-full bg-[#9C9C9C]" />
            Specialist Services · AI Engineering
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl leading-tight text-gray-900">
            Build AI experiences that{" "}
            <span className="bg-linear-to-r from-[#436DCC] via-[#2D51A4] to-[#4B72CC] bg-clip-text text-transparent">
              accelerate national innovation
            </span>{" "}
            across the UAE.
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-gray-600">
            From strategy to production, we engineer AI solutions that enhance
            citizen services, optimise enterprise operations, and create new
            digital products for ambitious organisations in the Middle East.
          </p>
        </AnimatedSection>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6 lg:px-8 mt-16">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CCC9C8] bg-white px-4 py-2 text-xs text-black">
            <span className="h-2 w-2 rounded-full bg-black" />
            How we help
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {aiServices.map((service, index) => (
              <AnimatedCard
                key={service.title}
                index={index}
                className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4B72CC]/40 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#436DCC] via-[#2D51A4] to-[#4B72CC] text-white text-lg font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Vision alignment */}
      <section className="mt-24 bg-gradient-to-r from-[#0F1A36] via-[#1E3261] to-[#2D51A4] text-white">
        <div className="container mx-auto px-6 lg:px-8 py-24">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-wide text-white/70">
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                  UAE Vision 2031
                </div>
                <h2 className="mt-6 text-4xl md:text-5xl leading-tight">
                  Responsible AI engineered with national policies at the core.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  We design human-centred AI that respects data sovereignty, Arabic
                  language needs, and ethical standards defined by the UAE National
                  AI Strategy.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-md">
                <h3 className="text-lg font-semibold text-white">
                  Delivery accelerators
                </h3>
                <ul className="mt-5 space-y-4 text-sm text-white/75">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                    <span>
                      Responsible AI framework covering governance, explainability,
                      and bias mitigation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                    <span>
                      Reusable component library for data pipelines, model ops, and
                      chatbot orchestration.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                    <span>
                      Innovation sprints co-hosted with government accelerators and
                      enterprise R&D teams.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {aiUseCases.map((useCase, index) => (
                <AnimatedCard
                  key={useCase.title}
                  index={index}
                  className="rounded-[24px] border border-white/15 bg-white/10 p-6"
                >
                  <div className="text-sm uppercase tracking-wide text-white/70">
                    {useCase.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {useCase.description}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Frameworks */}
      <section className="container mx-auto px-6 lg:px-8 mt-20">
        <AnimatedSection className="rounded-[32px] border border-gray-200 bg-white px-8 py-14 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#CCC9C8] bg-white px-4 py-2 text-xs text-black">
                <span className="h-2 w-2 rounded-full bg-black" />
                Tech stack
              </div>
              <h2 className="mt-6 text-4xl font-semibold text-gray-900">
                Partnerships with leading AI platforms.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Certified consulting teams integrate enterprise data platforms,
                model lifecycle tooling, and secure AI infrastructure to deliver
                production-grade capabilities.
              </p>
            </div>
            <div className="grid gap-4">
              {frameworks.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-gray-200 bg-[#F7F9FF] px-6 py-4 text-sm font-medium text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 lg:px-8 mt-20">
        <AnimatedSection className="rounded-[32px] bg-gradient-to-r from-[#D1DCE8] via-[#EEF3FF] to-[#FAFCFF] px-10 py-14 text-center">
          <h2 className="text-4xl font-semibold text-gray-900">
            Launch your next AI venture with confidence.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Engage our AI leaders for a discovery workshop, opportunity mapping,
            and MVP plan built around your unique data estate and customer vision.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-[#2D51A4] px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1f3f86]"
          >
            Start an AI workshop
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}


