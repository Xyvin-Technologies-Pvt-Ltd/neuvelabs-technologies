import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "AI Engineering Services | Machine Learning Solutions",
  description:
    "Neuve Labs delivers AI engineering services. Machine learning development, GenAI platforms, and AI strategy for modern enterprises.",
  path: "/specialist-services/ai-engineering",
});

const features = [
  {
    title: "AI Strategy & Roadmaps",
    description:
      "Co-create adoption roadmaps, governance frameworks, and investment cases aligned with your business priorities.",
  },
  {
    title: "ML & GenAI Engineering",
    description:
      "Design and deploy machine learning and generative AI solutions for intelligent automation, personalization, and decisioning.",
  },
  {
    title: "AI Platform Operations",
    description:
      "Operationalise AI with MLOps, model monitoring, and responsible AI controls across hybrid cloud environments.",
  },
  {
    title: "Conversational AI & NLP",
    description:
      "Multilingual chatbots, virtual agents, and service assistants leveraging large language models.",
  },
  {
    title: "Predictive Intelligence",
    description:
      "Demand forecasting, risk scoring, and anomaly detection for finance, aviation, and supply chain operations.",
  },
  {
    title: "Computer Vision & IoT",
    description:
      "Real-time video analytics for smart cities, safety compliance, and asset monitoring across industrial sites.",
  },
];

const benefits = [
  {
    title: "Azure OpenAI & Microsoft Fabric",
    description:
      "Enterprise-grade AI with Azure's comprehensive suite of cognitive services and data platform.",
  },
  {
    title: "AWS SageMaker & Bedrock",
    description:
      "Scalable ML infrastructure with Amazon's foundation models and end-to-end ML workflow.",
  },
  {
    title: "Google Vertex AI",
    description:
      "Unified AI platform with AutoML, custom training, and pre-trained models.",
  },
  {
    title: "Databricks Lakehouse",
    description:
      "Data intelligence platform combining the best of data warehouses and data lakes.",
  },
];

const useCases = [
  {
    title: "Intelligent Document Processing",
    description:
      "Automate extraction and classification of invoices, contracts, and high-volume documents using AI-powered OCR and NLP.",
  },
  {
    title: "Customer Service Automation",
    description:
      "Deploy conversational AI agents that handle inquiries, process requests, and escalate complex issues intelligently.",
  },
  {
    title: "Predictive Maintenance",
    description:
      "Use sensor data and ML models to predict equipment failures before they occur, reducing downtime and costs.",
  },
  {
    title: "Fraud Detection Systems",
    description:
      "Real-time anomaly detection and risk scoring to identify fraudulent transactions and suspicious activities.",
  },
];

export default function AiEngineering() {
  return (
    <ServicePageTemplate
      title="AI Engineering"
      subtitle="Specialist Services"
      description="From strategy to production, we engineer AI solutions that enhance operations, optimise enterprise workflows, and create new digital products for ambitious organisations."
      heroImage="/images/cloudEngineering/cloud-engineering.jpg"
      features={features}
      benefits={benefits}
      useCases={useCases}
      accentColor="green"
    />
  );
}
