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
    caseStudy: "Implemented AI-driven patient management system for leading UAE hospital network, reducing wait times by 40% and improving diagnostic accuracy.",
    icon: <Stethoscope className="w-8 h-8" />,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Finance & Banking",
    description:
      "Secure, compliant financial technology solutions including fraud detection, risk analytics, and digital banking platforms.",
    caseStudy: "Deployed real-time fraud detection system for major UAE bank, processing 2M+ transactions daily with 99.9% accuracy and UAE Central Bank compliance.",
    icon: <Building2 className="w-8 h-8" />,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Retail & E-commerce",
    description:
      "Enhance customer experiences with personalized recommendations, inventory management, and omnichannel solutions.",
    caseStudy: "Built AI-powered recommendation engine for regional e-commerce platform, increasing conversion rates by 35% and customer lifetime value by 50%.",
    icon: <ShoppingBag className="w-8 h-8" />,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Manufacturing",
    description:
      "Optimize operations with IoT integration, predictive maintenance, and supply chain automation solutions.",
    caseStudy: "Delivered predictive maintenance platform for JAFZA manufacturing facility, reducing equipment downtime by 60% and maintenance costs by 45%.",
    icon: <Factory className="w-8 h-8" />,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Real Estate",
    description:
      "Modernize property management with smart building solutions, virtual tours, and real estate analytics platforms.",
    caseStudy: "Developed smart building management system for Dubai Marina property, optimizing energy consumption by 30% and enhancing tenant satisfaction.",
    icon: <Home className="w-8 h-8" />,
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "Education",
    description:
      "Enhance learning experiences with e-learning platforms, student analytics, and educational technology solutions.",
    caseStudy: "Created adaptive learning platform for UAE university, personalizing education for 10,000+ students and improving completion rates by 25%.",
    icon: <GraduationCap className="w-8 h-8" />,
    gradient: "from-cyan-500 to-sky-500",
  },
];

export default function Industries() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-50/20 via-white to-white" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Industry Expertise</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tight">
              Industries We <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Serve
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We deliver industry-specific technology solutions that understand your unique challenges and regulatory requirements. Explore our proven track record across key sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <SectionWrapper className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={industry.title} className="group h-full p-8 rounded-3xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-blue-600">
                      {industry.icon}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  {/* Case Study */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                      Case Study
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {industry.caseStudy}
                    </p>
                  </div>
                </div>
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
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Let's discuss how our industry-specific solutions can help you achieve your business objectives and stay ahead of the competition.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}


