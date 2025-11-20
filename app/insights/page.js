import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export const metadata = generateMetadata({
  title: "Insights",
  description:
    "Latest insights, articles, and thought leadership on AI, cloud computing, data analytics, and digital transformation from Neuve Labs Technology.",
});

// Sample insights - in production, these would come from MDX files or a CMS
const insights = [
  {
    title: "The Future of AI in Enterprise: Trends and Opportunities",
    description:
      "Exploring how artificial intelligence is transforming enterprise operations and creating new opportunities for innovation.",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    slug: "future-of-ai-enterprise",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Cloud Migration Best Practices: A Comprehensive Guide",
    description:
      "Key strategies and best practices for successful cloud migration, from planning to execution and optimization.",
    date: "2024-01-10",
    category: "Cloud & DevOps",
    slug: "cloud-migration-best-practices",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Data-Driven Decision Making: Building an Analytics Culture",
    description:
      "How organizations can build a data-driven culture that empowers teams to make informed decisions based on analytics.",
    date: "2024-01-05",
    category: "Data Analytics",
    slug: "data-driven-decision-making",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Digital Transformation in the Middle East: Opportunities and Challenges",
    description:
      "An analysis of the digital transformation landscape in the Middle East, highlighting opportunities and addressing common challenges.",
    date: "2023-12-20",
    category: "Digital Transformation",
    slug: "digital-transformation-middle-east",
    gradient: "from-green-500 to-emerald-500",
  },
];

const featuredInsights = insights.slice(0, 2);
const remainingInsights = insights.slice(2);

export default function Insights() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Thought Leadership</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Latest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Data-rich analysis, playbooks, and perspectives from our consultants working with government entities, banking leaders, and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <SectionWrapper className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredInsights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group">
                <div className="h-full p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.07] relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${insight.gradient} opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-500`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
                        {insight.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(insight.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {insight.title}
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                      {insight.description}
                    </p>

                    <div className="mt-auto flex items-center text-blue-400 font-medium group-hover:text-blue-300">
                      Read Article
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Remaining Insights */}
          <div className="grid md:grid-cols-2 gap-8">
            {remainingInsights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group">
                <div className="h-full p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.07] relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${insight.gradient} opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-500`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white">
                        {insight.category}
                      </span>
                      <span>
                        {new Date(insight.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {insight.description}
                    </p>

                    <div className="mt-auto flex items-center text-sm text-blue-400 font-medium group-hover:text-blue-300">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Newsletter CTA */}
      <SectionWrapper className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Insights delivered to your inbox
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Subscribe for strategic updates on AI, cyber security, and automation shaping the UAE & GCC technology landscape.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full bg-white/5 border border-white/10 px-6 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="button"
                className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500">
              We respect your privacy and only send relevant updates.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

