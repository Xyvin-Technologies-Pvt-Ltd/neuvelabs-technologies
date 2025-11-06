import { generateMetadata } from "@/lib/metadata";
import Link from "next/link";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const metadata = generateMetadata({
  title: "Insights",
  description:
    "Latest insights, articles, and thought leadership on AI, cloud computing, data analytics, and digital transformation from Neuve Labs Technology.",
  path: "/insights",
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
  },
  {
    title: "Cloud Migration Best Practices: A Comprehensive Guide",
    description:
      "Key strategies and best practices for successful cloud migration, from planning to execution and optimization.",
    date: "2024-01-10",
    category: "Cloud & DevOps",
    slug: "cloud-migration-best-practices",
  },
  {
    title: "Data-Driven Decision Making: Building an Analytics Culture",
    description:
      "How organizations can build a data-driven culture that empowers teams to make informed decisions based on analytics.",
    date: "2024-01-05",
    category: "Data Analytics",
    slug: "data-driven-decision-making",
  },
  {
    title: "Digital Transformation in the Middle East: Opportunities and Challenges",
    description:
      "An analysis of the digital transformation landscape in the Middle East, highlighting opportunities and addressing common challenges.",
    date: "2023-12-20",
    category: "Digital Transformation",
    slug: "digital-transformation-middle-east",
  },
];

export default function Insights() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <section className="container mx-auto px-6 lg:px-8 mb-20">
        <AnimatedSection className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Insights
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Stay updated with the latest trends, insights, and thought leadership
            on AI, cloud computing, data analytics, and digital transformation.
          </p>
        </AnimatedSection>
      </section>

      <section className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <AnimatedCard key={insight.slug} index={index} className="contents">
              <article>
              <Link href={`/insights/${insight.slug}`}>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl h-full">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-[#007AFF]">
                      {insight.category}
                    </span>
                    <span className="text-sm text-gray-400 mx-2">•</span>
                    <time className="text-sm text-gray-400">
                      {new Date(insight.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-[#007AFF] transition-colors">
                    {insight.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {insight.description}
                  </p>
                  <div className="flex items-center text-[#007AFF] font-medium">
                    Read more
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
              </article>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </div>
  );
}

