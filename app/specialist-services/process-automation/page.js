import { generateMetadata } from "@/lib/metadata";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const metadata = generateMetadata({
  title: "Process Automation Services in UAE | RPA & Workflow Automation Dubai",
  description:
    "Neuve Labs delivers intelligent process automation services in the UAE. Experts in RPA, workflow automation, and AI-powered operations for enterprises in Dubai and across the Middle East.",
  path: "/specialist-services/process-automation",
});

const automationBenefits = [
  {
    title: "AI-Augmented RPA",
    description:
      "Design, build, and manage digital workers powered by machine learning to streamline finance, HR, and customer operations.",
  },
  {
    title: "Workflow Orchestration",
    description:
      "Connect legacy systems with modern SaaS platforms to orchestrate end-to-end processes with governance and audit trails.",
  },
  {
    title: "Intelligent Document Processing",
    description:
      "Use computer vision and LLM-based extraction to digitise invoices, contracts, and high-volume documents at scale.",
  },
];

const industryUseCases = [
  {
    industry: "Banking & Financial Services",
    highlight:
      "Real-time KYC, trade finance automation, AML monitoring, and regulatory reporting aligned with UAE Central Bank.",
  },
  {
    industry: "Government & Smart Cities",
    highlight:
      "Digital citizen services, permits, and shared services optimised for UAE Digital Government Strategy 2025.",
  },
  {
    industry: "Retail & E-commerce",
    highlight:
      "Inventory forecasting, demand planning, and omni-channel fulfilment with predictive analytics.",
  },
];

const toolset = [
  "UiPath Elite Partner",
  "Automation Anywhere Certified",
  "Microsoft Power Platform",
  "ServiceNow & Salesforce Automation",
  "Generative AI copilots",
  "Azure AI & AWS AI services",
];

export default function ProcessAutomation() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#9C9C9C]/40 bg-white/20 px-4 py-2 text-xs uppercase tracking-wide text-[#9C9C9C]">
            <span className="h-2 w-2 rounded-full bg-[#9C9C9C]" />
            Specialist Services · Process Automation
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl leading-tight text-gray-900">
            RPA and intelligent automation engineered for{" "}
            <span className="bg-linear-to-r from-[#436DCC] via-[#2D51A4] to-[#4B72CC] bg-clip-text text-transparent">
              Dubai&apos;s high-performing enterprises
            </span>
            .
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-gray-600">
            We build automation programmes that combine robotics, AI, and
            orchestration to modernise operations across banking, government, and
            large-scale enterprises in the UAE.
          </p>
        </AnimatedSection>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-6 lg:px-8 mt-16">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CCC9C8] bg-white px-4 py-2 text-xs text-black">
            <span className="h-2 w-2 rounded-full bg-black" />
            Core capabilities
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {automationBenefits.map((benefit, index) => (
              <AnimatedCard
                key={benefit.title}
                index={index}
                className="rounded-[24px] border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#4B72CC]/40 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#436DCC] via-[#2D51A4] to-[#4B72CC] text-white text-lg font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                  {benefit.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Industry use cases */}
      <section className="mt-24 bg-gradient-to-r from-[#0F1A36] via-[#1E3261] to-[#2D51A4] text-white">
        <div className="container mx-auto px-6 lg:px-8 py-24">
          <AnimatedSection className="max-w-6xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-wide text-white/70">
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                  UAE impact
                </div>
                <h2 className="mt-6 text-4xl md:text-5xl leading-tight">
                  Automation blueprints tailored to regulated sectors and smart
                  city ambitions.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  Our delivery pods combine process consultants, solution
                  architects, and AI engineers to implement secure automation at
                  scale without disrupting mission-critical operations.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-md">
                <h3 className="text-lg font-semibold text-white">
                  Programme highlights
                </h3>
                <ul className="mt-5 space-y-4 text-sm text-white/75">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                    <span>
                      80% reduction in back-office processing time for regional
                      banking client using UiPath and Azure AI services.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                    <span>
                      Automated 12 citizen service journeys for UAE government
                      agency with ServiceNow orchestration.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/80" />
                    <span>
                      Established automation centre of excellence with governance
                      and KPI suite for logistics leader in JAFZA.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {industryUseCases.map((item, index) => (
                <AnimatedCard
                  key={item.industry}
                  index={index}
                  className="rounded-[24px] border border-white/15 bg-white/10 p-6"
                >
                  <div className="text-sm uppercase tracking-wide text-white/70">
                    {item.industry}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {item.highlight}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Toolstack */}
      <section className="container mx-auto px-6 lg:px-8 mt-20">
        <AnimatedSection className="rounded-[32px] border border-gray-200 bg-white px-8 py-14 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#CCC9C8] bg-white px-4 py-2 text-xs text-black">
                <span className="h-2 w-2 rounded-full bg-black" />
                Accredited toolset
              </div>
              <h2 className="mt-6 text-4xl font-semibold text-gray-900">
                Certified across enterprise automation & AI platforms.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                We operate vendor-agnostic but carry deep partnerships for
                accelerated deployments, licensing optimisation, and capability
                uplift.
              </p>
            </div>
            <div className="grid gap-4">
              {toolset.map((tool) => (
                <div
                  key={tool}
                  className="rounded-2xl border border-gray-200 bg-[#F7F9FF] px-6 py-4 text-sm font-medium text-gray-700"
                >
                  {tool}
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
            Ready to launch your automation roadmap?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Book a discovery workshop with our automation strategists to evaluate
            opportunity areas, design governance, and build a 90-day execution
            plan.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-[#2D51A4] px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#1f3f86]"
          >
            Schedule a consultation
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
}


