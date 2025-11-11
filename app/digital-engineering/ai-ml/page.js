import { generateMetadata } from "@/lib/metadata";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata = generateMetadata({
  title: "AI & Machine Learning",
  description:
    "Transform your business with cutting-edge AI and ML solutions. Expert AI consulting services in UAE for predictive analytics, NLP, computer vision, and automation.",
  path: "/digital-engineering/ai-ml",
});

export default function AIML() {
  return (
    <ServicePageTemplate
      title="AI & Machine Learning"
      subtitle="Digital Engineering"
      heroImage={"/images/aiMl/aiMl.png"}
      description="Leverage the power of artificial intelligence and machine learning to transform your business operations, enhance customer experiences, and drive innovation."
      features={[
        "Predictive Analytics & Forecasting",
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Recognition",
        "Recommendation Systems",
        "AI Automation & RPA",
        "Custom ML Model Development",
        "AI Strategy & Consulting",
      ]}
      showcaseImages={[
        {
          url: null,
          alt: "AI & ML Solutions",
          caption: "Advanced AI-powered analytics dashboard",
        },
        {
          url: null,
          alt: "Machine Learning Models",
          caption: "Custom ML model deployment pipeline",
        },
      ]}
      benefits={[
        {
          title: "Expert Team",
          description:
            "Our team of AI experts combines deep technical expertise with business acumen to deliver solutions that drive real value.",
        },
        {
          title: "Cutting-Edge Technology",
          description:
            "We work with leading AI frameworks and technologies to build scalable, production-ready systems.",
        },
        {
          title: "Proven Results",
          description:
            "Track record of successful AI implementations across various industries and use cases.",
        },
        {
          title: "End-to-End Support",
          description:
            "From strategy to deployment, we provide comprehensive support throughout your AI journey.",
        },
      ]}
      useCases={[
        {
          title: "Customer Service Automation",
          description:
            "Deploy intelligent chatbots and virtual assistants to handle customer inquiries 24/7, reducing response times and improving satisfaction.",
        },
        {
          title: "Predictive Maintenance",
          description:
            "Use ML models to predict equipment failures before they occur, minimizing downtime and maintenance costs.",
        },
        {
          title: "Fraud Detection",
          description:
            "Implement advanced AI algorithms to detect fraudulent transactions in real-time, protecting your business and customers.",
        },
        {
          title: "Personalized Recommendations",
          description:
            "Leverage recommendation engines to provide personalized product suggestions, increasing customer engagement and sales.",
        },
      ]}
    />
  );
}

