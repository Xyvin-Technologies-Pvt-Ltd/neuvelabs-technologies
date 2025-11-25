import { generateMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/SectionWrapper";
import { Bot, Workflow, FileText } from "lucide-react";

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
    icon: <Bot className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Workflow Orchestration",
    description:
      "Connect legacy systems with modern SaaS platforms to orchestrate end-to-end processes with governance and audit trails.",
    icon: <Workflow className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Intelligent Document Processing",
    description:
      "Use computer vision and LLM-based extraction to digitise invoices, contracts, and high-volume documents at scale.",
    icon: <FileText className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
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
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs font-medium text-green-400 uppercase tracking-wider">Specialist Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Process <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Automation
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We build automation programmes that combine robotics, AI, and orchestration to modernise operations across banking, government, and large-scale enterprises in the UAE.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <SectionWrapper className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Core Capabilities
            </h2>
            <p className="text-gray-400 text-lg">
              Intelligent automation engineered for high-performing enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {automationBenefits.map((benefit, index) => (
              <div key={benefit.title} className="group h-full p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.07] relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-4">
                    {benefit.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Use Cases Section */}
      <SectionWrapper className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              UAE Impact
            </h2>
            <p className="text-gray-400 text-lg">
              Automation blueprints tailored to regulated sectors and smart city ambitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industryUseCases.map((item, index) => (
              <div key={item.industry} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.industry}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Toolset Section */}
      <SectionWrapper className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Accredited Toolset
            </h2>
            <p className="text-gray-400 text-lg">
              Certified across enterprise automation & AI platforms
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {toolset.map((tool) => (
              <div
                key={tool}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <p className="text-white font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Launch Your Automation Roadmap
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Book a discovery workshop with our automation strategists to evaluate opportunity areas, design governance, and build a 90-day execution plan.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

