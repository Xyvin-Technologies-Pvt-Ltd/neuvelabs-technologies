import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "Data Analytics",
  description:
    "Advanced data analytics and business intelligence solutions. Expert data consulting services in UAE for data warehousing, visualization, and predictive analytics.",
  path: "/digital-engineering/data-analytics",
});

export default function DataAnalytics() {
  return (
    <ServicePageTemplate
      title="Data Analytics"
      subtitle="Digital Engineering"
      description="Unlock the power of your data with advanced analytics, business intelligence, and data visualization solutions. Make data-driven decisions with confidence."
      heroImage={"/images/dataAnalytics/dataAnalytics.png"}
      features={[
        "Business Intelligence & Reporting",
        "Data Warehousing & ETL",
        "Advanced Analytics & Modeling",
        "Real-time Data Processing",
        "Data Visualization & Dashboards",
        "Big Data Solutions",
        "Data Strategy & Consulting",
      ]}
      showcaseImages={[
        {
          url: null,
          alt: "Data Analytics Dashboard",
          caption: "Interactive business intelligence dashboard",
        },
        {
          url: null,
          alt: "Data Pipeline",
          caption: "Real-time data processing pipeline",
        },
      ]}
      benefits={[
        {
          title: "Actionable Insights",
          description:
            "Transform raw data into actionable insights that drive strategic decision-making and business growth.",
        },
        {
          title: "Real-Time Analytics",
          description:
            "Access real-time data processing and analytics capabilities to make informed decisions instantly.",
        },
        {
          title: "Scalable Architecture",
          description:
            "Build data platforms that scale with your business, handling increasing volumes of data efficiently.",
        },
        {
          title: "Visual Storytelling",
          description:
            "Create compelling data visualizations and dashboards that make complex data easy to understand.",
        },
      ]}
      useCases={[
        {
          title: "Customer Behavior Analysis",
          description:
            "Analyze customer data to understand behavior patterns, preferences, and trends for better marketing strategies.",
        },
        {
          title: "Operational Efficiency",
          description:
            "Identify bottlenecks and inefficiencies in operations through comprehensive data analysis and reporting.",
        },
        {
          title: "Financial Forecasting",
          description:
            "Build predictive models for financial forecasting, budgeting, and risk assessment.",
        },
        {
          title: "Supply Chain Optimization",
          description:
            "Optimize supply chain operations through data-driven insights into inventory, logistics, and demand forecasting.",
        },
      ]}
    />
  );
}

