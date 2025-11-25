import { generateMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import SpotlightCarousel from "@/components/SpotlightCarousel";
import CaseStudyCard from "@/components/CaseStudyCard";
import IndustryImpactCard from "@/components/IndustryImpactCard";
import ContactForm from "@/components/ContactForm";
import { caseStudies, industryStories } from "@/lib/caseStudiesData";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "Neuve Labs Technology - Leading AI and IT consulting company in UAE. Discover how we've transformed businesses through innovative technology solutions.",
});

export default function Home() {
  // Get featured case studies (excluding spotlight ones)
  const featuredCaseStudies = caseStudies.filter(
    (study) => study.featured && !study.spotlight
  );

  // Get all other case studies for the grid
  const allCaseStudies = caseStudies.filter((study) => !study.spotlight);

  // Services shown through problem-solving lens
  const servicesThroughStories = [
    {
      title: "How we solve complex AI challenges",
      description: "From fraud detection to predictive analytics, our AI solutions deliver measurable business impact",
      example: "300% improvement in fraud detection for a leading financial institution",
      service: "AI Engineering",
      href: "/specialist-services/ai-engineering",
    },
    {
      title: "How we accelerate cloud transformations",
      description: "Seamless migrations and cloud-native architectures that reduce costs and improve performance",
      example: "25% cost reduction through cloud optimization for a transportation authority",
      service: "Cloud Engineering",
      href: "/digital-engineering/cloud-engineering",
    },
    {
      title: "How we unlock data insights",
      description: "Transform raw data into actionable intelligence that drives strategic decision-making",
      example: "50% faster data processing enabling personalized care for 78M patients",
      service: "Data Engineering",
      href: "/digital-engineering/data-engineering",
    },
    {
      title: "How we build transformative products",
      description: "End-to-end product development from concept to deployment with focus on user experience",
      example: "40% reduction in checkout time with AI-powered self-service solutions",
      service: "Product Engineering",
      href: "/digital-engineering/product-engineering",
    },
  ];

  return (
    <>
      <Hero />

      {/* Spotlight Carousel */}
      <SpotlightCarousel />

     

      {/* Case Studies Grid */}
      <SectionWrapper className="py-32 bg-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Case Studies
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Real{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                    transformations
                  </span>
                  , real impact
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Explore detailed stories of how we&apos;ve helped organizations overcome challenges and achieve remarkable results.
                </p>
              </div>
              <Link
                href="/insights"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
              >
                View all case studies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {allCaseStudies.slice(0, 6).map((study, index) => (
                <CaseStudyCard key={study.id} caseStudy={study} index={index} />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services Through Stories */}
      <SectionWrapper className="py-32 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                Our Approach
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 max-w-4xl">
              Solutions that solve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                real problems
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl">
              We don&apos;t just deliver technology—we solve business challenges with proven solutions.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {servicesThroughStories.map((service, index) => (
                <Link
                  key={service.service}
                  href={service.href}
                  className="group p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-700">
                      <span className="text-blue-600 font-semibold">Example:</span> {service.example}
                    </p>
                  </div>
                  <div className="mt-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                      {service.service}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Engagement Section */}
      <SectionWrapper className="py-32 bg-gray-50 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Stay Connected
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ready to transform{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  your business?
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Let&apos;s discuss how we can help you achieve measurable impact through innovative technology solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get in touch</h3>
                <p className="text-gray-600 mb-6">
                  Have a project in mind? Our team is ready to help you bring your vision to life.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300"
                >
                  Contact us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Explore more</h3>
                <p className="text-gray-600 mb-6">
                  Discover more case studies and insights on how we&apos;ve helped organizations succeed.
                </p>
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-900 font-semibold transition-all duration-300"
                >
                  View insights
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
