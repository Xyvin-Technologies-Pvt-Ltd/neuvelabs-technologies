import { generateMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/SectionWrapper";
import { Shield, Cpu, Settings, Layers, CheckCircle2, Terminal } from "lucide-react";

export const metadata = generateMetadata({
  title: "Specialist Services",
  description:
    "Specialized IT consulting services including AI automation, digital transformation consulting, and custom technology solutions for enterprises.",
});

const services = [
  {
    title: "AI Automation Solutions",
    description:
      "Automate complex business processes with intelligent AI-powered solutions that reduce manual work and improve efficiency.",
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Digital Transformation",
    description:
      "Strategic guidance to help organizations navigate their digital transformation journey with expert consulting and roadmap planning.",
    icon: <Layers className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Technology Strategy",
    description:
      "Develop comprehensive technology strategies aligned with your business objectives and growth plans.",
    icon: <Terminal className="w-8 h-8" />,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Solution Architecture",
    description:
      "Design scalable, secure, and efficient solution architectures that support your business requirements.",
    icon: <Settings className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Quality Assurance",
    description:
      "Comprehensive testing services to ensure your software meets quality standards and performs flawlessly.",
    icon: <CheckCircle2 className="w-8 h-8" />,
    gradient: "from-red-500 to-rose-500",
  },
  {
    title: "Cyber Security",
    description:
      "Protect your digital assets with robust security strategies, threat monitoring, and compliance frameworks.",
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-indigo-500 to-violet-500",
  },
];

export default function SpecialistServices() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">Specialized Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Specialist <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Expert consulting engineered for innovation and measurable impact. We combine deep industry insight with engineering rigor.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionWrapper className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="group h-full p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.07] relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us */}
      <SectionWrapper className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Strategic specialists with <span className="text-blue-400">local market intelligence</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                From enterprise-grade automation to security strategy and AI delivery, our teams translate boardroom priorities into engineered solutions aligned with UAE Vision 2031.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Regulatory Alignment", desc: "Built-in compliance with UAE Central Bank, NESA, and ADGM frameworks." },
                  { title: "Co-creation Approach", desc: "Embedded design studios and agile pods elevate your internal capabilities." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">Focus Areas</h3>
              <ul className="space-y-4">
                {[
                  "AI-driven process automation & predictive analytics",
                  "Cyber resilience programs & SOC monitoring",
                  "Applied AI platforms & GenAI copilots",
                  "Enterprise architecture & legacy modernization",
                  "Cloud migration & DevOps transformation"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

