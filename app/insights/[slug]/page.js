import { generateMetadata as createMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

// In production, this would fetch from MDX files or a CMS
const insights = {
  "future-of-ai-enterprise": {
    title: "The Future of AI in Enterprise: Trends and Opportunities",
    description:
      "Exploring how artificial intelligence is transforming enterprise operations and creating new opportunities for innovation.",
    date: "2024-01-15",
    category: "AI & Machine Learning",
    content: `
      <p>Artificial Intelligence is revolutionizing how enterprises operate, compete, and innovate. From predictive analytics to automated decision-making, AI technologies are becoming integral to business success.</p>
      <h2>Key Trends Shaping Enterprise AI</h2>
      <p>Several trends are driving AI adoption in enterprise settings:</p>
      <ul>
        <li>Generative AI for content creation and automation</li>
        <li>AI-powered predictive analytics for business intelligence</li>
        <li>Automated customer service and support</li>
        <li>Intelligent process automation</li>
      </ul>
      <h2>Opportunities for Growth</h2>
      <p>Organizations that successfully implement AI solutions can achieve significant competitive advantages, including improved efficiency, enhanced customer experiences, and new revenue streams.</p>
    `,
  },
  "cloud-migration-best-practices": {
    title: "Cloud Migration Best Practices: A Comprehensive Guide",
    description:
      "Key strategies and best practices for successful cloud migration, from planning to execution and optimization.",
    date: "2024-01-10",
    category: "Cloud & DevOps",
    content: `
      <p>Cloud migration is a critical step in digital transformation, but it requires careful planning and execution to ensure success.</p>
      <h2>Planning Phase</h2>
      <p>Before migrating, organizations must assess their current infrastructure, identify dependencies, and develop a comprehensive migration strategy.</p>
      <h2>Execution Strategies</h2>
      <p>Common migration approaches include lift-and-shift, re-platforming, and re-architecting, each with its own benefits and considerations.</p>
    `,
  },
};

export async function generateMetadata({ params }) {
  const insight = insights[params.slug];
  if (!insight) {
    return createMetadata({
      title: "Insight Not Found",
      description: "The requested insight could not be found.",
    });
  }
  return createMetadata({
    title: insight.title,
    description: insight.description,
    path: `/insights/${params.slug}`,
  });
}

export default function InsightPage({ params }) {
  const insight = insights[params.slug];

  if (!insight) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <article className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
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
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {insight.title}
        </h1>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />
      </article>
    </div>
  );
}

