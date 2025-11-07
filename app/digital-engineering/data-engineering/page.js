import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "Data Engineering",
  description:
    "Build robust data pipelines, data warehouses, and analytics infrastructure. Expert data engineering services for modern data-driven organizations.",
  path: "/digital-engineering/data-engineering",
});

export default function DataEngineering() {
  return (
    <ServicePageTemplate
      title="Data Engineering"
      subtitle="Digital Engineering"
      description="Transform raw data into actionable insights with our comprehensive data engineering solutions. We build scalable data pipelines, warehouses, and analytics infrastructure that power data-driven decision making."
      features={[
        "Data Pipeline Development",
        "Data Warehouse Design & Implementation",
        "ETL/ELT Solutions",
        "Real-Time Data Processing",
        "Data Lake Architecture",
        "Data Quality & Governance",
        "Big Data Analytics Infrastructure",
      ]}
      showcaseImages={[
        {
          url: null,
          alt: "Data Engineering Solutions",
          caption: "Modern data pipeline architecture and infrastructure",
        },
        {
          url: null,
          alt: "Data Warehouse Implementation",
          caption: "Scalable data warehouse and analytics platform",
        },
      ]}
      benefits={[
        {
          title: "Scalable Infrastructure",
          description:
            "We design data systems that can handle massive volumes of data and scale seamlessly as your business grows.",
        },
        {
          title: "Real-Time Processing",
          description:
            "Implement real-time data processing capabilities to enable instant insights and faster decision-making.",
        },
        {
          title: "Data Quality Assurance",
          description:
            "Ensure data accuracy, consistency, and reliability with comprehensive data quality frameworks and governance.",
        },
        {
          title: "Cloud-Native Solutions",
          description:
            "Leverage cloud technologies for cost-effective, flexible, and scalable data engineering solutions.",
        },
      ]}
      useCases={[
        {
          title: "Enterprise Data Warehouse",
          description:
            "Build centralized data warehouses that consolidate data from multiple sources for comprehensive business intelligence and reporting.",
        },
        {
          title: "Real-Time Analytics Platform",
          description:
            "Create real-time data processing systems that enable instant analytics and decision-making for time-sensitive operations.",
        },
        {
          title: "Data Lake Implementation",
          description:
            "Design and implement data lakes to store and process vast amounts of structured and unstructured data efficiently.",
        },
        {
          title: "ETL Pipeline Automation",
          description:
            "Develop automated ETL pipelines that extract, transform, and load data from various sources into target systems reliably.",
        },
      ]}
    />
  );
}

