import { generateMetadata } from "@/lib/metadata";
import InsightsPageClient from "./InsightsPageClient";

export const metadata = generateMetadata({
  title: "Insights",
  description:
    "Latest insights, articles, and thought leadership on AI, cloud computing, data analytics, and digital transformation from Neuve Labs Technology.",
});

export default function Insights() {
  return <InsightsPageClient />;
}
