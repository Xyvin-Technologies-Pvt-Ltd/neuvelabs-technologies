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
      description="Transform raw data into actionable insights with our comprehensive data engineering solutions. We build scalable data pipelines, warehouses, and analytics infrastructure that power data-driven decision making. Our expertise spans from batch processing to real-time streaming, ensuring your organization has access to timely, accurate, and reliable data."
      heroImage={"/images/dataEngineering/data-engineering.jpg"}
      features={[
        {
          title: "Data Pipeline Development",
          description: "Design and build robust, scalable data pipelines using Apache Airflow, Prefect, or custom solutions to automate data workflows."
        },
        {
          title: "Data Warehouse Design & Implementation",
          description: "Create modern data warehouses using Snowflake, BigQuery, Redshift, or Databricks with optimized schemas and query performance."
        },
        {
          title: "ETL/ELT Solutions",
          description: "Develop Extract, Transform, Load processes using tools like dbt, Talend, or custom Python/Scala solutions for data integration."
        },
        {
          title: "Real-Time Data Processing",
          description: "Implement streaming data pipelines with Apache Kafka, Apache Flink, or AWS Kinesis for real-time analytics and event processing."
        },
        {
          title: "Data Lake Architecture",
          description: "Design and implement data lakes on AWS S3, Azure Data Lake, or Google Cloud Storage with proper partitioning and cataloging."
        },
        {
          title: "Data Quality & Governance",
          description: "Establish data quality frameworks, implement data validation rules, lineage tracking, and compliance with GDPR, CCPA regulations."
        },
        {
          title: "Big Data Analytics Infrastructure",
          description: "Set up Hadoop, Spark clusters, or serverless big data processing solutions for handling petabytes of data efficiently."
        },
        {
          title: "Data Modeling & Schema Design",
          description: "Create dimensional models, star schemas, and data vault architectures optimized for analytics and reporting needs."
        },
        {
          title: "Data Integration & APIs",
          description: "Build data integration solutions connecting CRM, ERP, marketing platforms, and custom applications for unified data access."
        },
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
            "Build centralized data warehouses that consolidate data from multiple sources including ERP systems, CRM platforms, marketing tools, and operational databases. Enable comprehensive business intelligence, self-service analytics, and executive dashboards with near real-time data updates.",
        },
        {
          title: "Real-Time Analytics Platform",
          description:
            "Create real-time data processing systems using streaming technologies to enable instant analytics for fraud detection, recommendation engines, IoT monitoring, and financial trading platforms. Process millions of events per second with sub-second latency.",
        },
        {
          title: "Data Lake Implementation",
          description:
            "Design and implement data lakes to store and process vast amounts of structured and unstructured data including logs, images, videos, and documents. Enable data scientists to access raw data for machine learning model training and advanced analytics.",
        },
        {
          title: "ETL Pipeline Automation",
          description:
            "Develop automated ETL pipelines that extract data from various sources, apply transformations for data cleansing and enrichment, and load into target systems reliably. Implement error handling, retry mechanisms, and data quality checks.",
        },
        {
          title: "Customer 360 Data Platform",
          description:
            "Build unified customer data platforms that aggregate customer interactions across all touchpoints, creating comprehensive customer profiles for personalization, segmentation, and targeted marketing campaigns.",
        },
        {
          title: "IoT Data Processing",
          description:
            "Design systems to ingest, process, and analyze data from IoT devices and sensors. Handle high-volume, high-velocity data streams with time-series databases and real-time alerting for anomaly detection.",
        },
      ]}
    />
  );
}

