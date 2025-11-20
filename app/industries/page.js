import { generateMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/SectionWrapper";
import { Stethoscope, Building2, ShoppingBag, Factory, Home, GraduationCap } from "lucide-react";

export const metadata = generateMetadata({
  title: "Industries",
  description:
    "IT consulting services for various industries including Healthcare, Finance, Retail, Manufacturing, and more. Industry-specific technology solutions.",
});

const industries = [
  {
    title: "Healthcare",
    description:
      "Transform patient care with AI-powered diagnostics, telemedicine platforms, and healthcare data analytics solutions.",
    icon: <Stethoscope className="w-8 h-8" />,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Finance & Banking",
    description:
      "Secure, compliant financial technology solutions including fraud detection, risk analytics, and digital banking platforms.",
    icon: <Building2 className="w-8 h-8" />,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Enhance customer experiences with personalized recommendations, inventory management, and omnichannel solutions.",
    icon: <ShoppingBag className="w-8 h-8" />,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Manufacturing",
    description:
      "Optimize operations with IoT integration, predictive maintenance, and supply chain automation solutions.",
    icon: <Factory className="w-8 h-8" />,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Real Estate",
    description:
      "Modernize property management with smart building solutions, virtual tours, and real estate analytics platforms.",
    icon: <Home className="w-8 h-8" />,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "Education",
    description:
      "Enhance learning experiences with e-learning platforms, student analytics, and educational technology solutions.",
    icon: <GraduationCap className="w-8 h-8" />,
    gradient: "from-cyan-500 to-sky-500",
  },
];

export default function Industries() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">Industry Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Industries We <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Serve
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We deliver industry-specific technology solutions that understand your unique challenges and regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <SectionWrapper className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={industry.title} className="group h-full p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.07] relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-white">
                      {industry.icon}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

