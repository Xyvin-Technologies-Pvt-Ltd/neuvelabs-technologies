import { siteConfig } from "@/lib/metadata";

export default function sitemap() {
  const baseUrl = siteConfig.url;

  const routes = [
    "",
    "/about",
    "/digital-engineering",
    "/digital-engineering/ai-ml",
    "/digital-engineering/cloud-devops",
    "/digital-engineering/data-analytics",
    "/digital-engineering/enterprise-software",
    "/specialist-services",
    "/industries",
    "/insights",
    "/contact",
    "/industries/healthcare",
    "/industries/finance-banking",
    "/industries/retail-ecommerce",
    "/industries/manufacturing",
    "/industries/real-estate",
    "/industries/education",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

