import ServicePageTemplate from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

// Industry data - in a real app this would come from a CMS or database
const industriesData = {
    "healthcare": {
        title: "Healthcare",
        subtitle: "Industry Solutions",
        description: "Transform patient care with AI-powered diagnostics, telemedicine platforms, and healthcare data analytics solutions.",
        features: [
            { title: "Telemedicine Platforms", description: "Secure, compliant video consultation and remote patient monitoring systems." },
            { title: "AI Diagnostics", description: "Machine learning models for early disease detection and medical imaging analysis." },
            { title: "EHR Integration", description: "Seamless integration with Electronic Health Records for unified patient data." },
            { title: "Healthcare Analytics", description: "Data-driven insights for hospital operations and patient outcomes." }
        ],
        benefits: [
            { title: "Improved Patient Care", description: "Deliver better outcomes with personalized, data-driven treatment plans." },
            { title: "Operational Efficiency", description: "Streamline administrative tasks and resource allocation." },
            { title: "Regulatory Compliance", description: "Ensure full compliance with HIPAA, GDPR, and local health regulations." },
            { title: "Cost Reduction", description: "Optimize spending through predictive maintenance and efficient resource use." }
        ],
        useCases: [
            { title: "Remote Patient Monitoring", description: "IoT-enabled devices tracking patient vitals in real-time." },
            { title: "Smart Hospital Management", description: "AI-driven system for bed management and staff scheduling." }
        ]
    },
    "finance-banking": {
        title: "Finance & Banking",
        subtitle: "Industry Solutions",
        description: "Secure, compliant financial technology solutions including fraud detection, risk analytics, and digital banking platforms.",
        features: [
            "Digital Banking Platforms",
            "Fraud Detection Systems",
            "Algorithmic Trading",
            "Risk Management Analytics",
            "Blockchain Solutions",
            "Regulatory Reporting"
        ],
        benefits: [
            { title: "Enhanced Security", description: "State-of-the-art protection against cyber threats and fraud." },
            { title: "Customer Experience", description: "Seamless, personalized banking experiences across all channels." },
            { title: "Data-Driven Insights", description: "Real-time analytics for better investment and lending decisions." },
            { title: "Regulatory Compliance", description: "Automated compliance checks and reporting." }
        ],
        useCases: [
            { title: "AI Fraud Prevention", description: "Real-time transaction monitoring to detect and block suspicious activities." },
            { title: "Robo-Advisory", description: "Automated investment advice based on user risk profiles and goals." }
        ]
    },
    "retail-ecommerce": {
        title: "Retail & E-commerce",
        subtitle: "Industry Solutions",
        description: "Enhance customer experiences with personalized recommendations, inventory management, and omnichannel solutions.",
        features: [
            "E-commerce Platforms",
            "Personalization Engines",
            "Inventory Management",
            "Omnichannel POS",
            "Supply Chain Visibility",
            "Customer Loyalty Programs"
        ],
        benefits: [
            { title: "Increased Sales", description: "Boost conversion rates with personalized product recommendations." },
            { title: "Optimized Inventory", description: "Reduce stockouts and overstock with predictive inventory management." },
            { title: "Customer Loyalty", description: "Build lasting relationships through unified customer experiences." },
            { title: "Operational Agility", description: "Respond quickly to market trends and consumer behavior changes." }
        ],
        useCases: [
            { title: "Smart Mirrors", description: "Interactive fitting rooms that suggest matching items and sizes." },
            { title: "Automated Warehousing", description: "Robotics and AI for efficient order fulfillment and logistics." }
        ]
    },
    "manufacturing": {
        title: "Manufacturing",
        subtitle: "Industry Solutions",
        description: "Optimize operations with IoT integration, predictive maintenance, and supply chain automation solutions.",
        features: [
            "Industrial IoT (IIoT)",
            "Predictive Maintenance",
            "Digital Twins",
            "Supply Chain Automation",
            "Quality Control AI",
            "Smart Factory Solutions"
        ],
        benefits: [
            { title: "Reduced Downtime", description: "Predict equipment failures before they happen." },
            { title: "Higher Quality", description: "Automated visual inspection ensures consistent product quality." },
            { title: "Efficiency Gains", description: "Optimize production lines and resource utilization." },
            { title: "Supply Chain Resilience", description: "Real-time visibility and adaptability in the supply chain." }
        ],
        useCases: [
            { title: "Predictive Maintenance", description: "Sensors monitoring machinery health to schedule maintenance proactively." },
            { title: "Digital Twin Simulation", description: "Virtual replicas of production lines to test optimizations." }
        ]
    },
    "real-estate": {
        title: "Real Estate",
        subtitle: "Industry Solutions",
        description: "Modernize property management with smart building solutions, virtual tours, and real estate analytics platforms.",
        features: [
            "Smart Building Management",
            "Virtual & AR Tours",
            "Property Management Systems",
            "Real Estate Analytics",
            "Tenant Experience Apps",
            "Automated Valuation Models"
        ],
        benefits: [
            { title: "Operational Efficiency", description: "Automate property management tasks and maintenance requests." },
            { title: "Enhanced Tenant Experience", description: "Smart amenities and seamless communication channels." },
            { title: "Data-Driven Valuation", description: "Accurate property valuations based on market data and trends." },
            { title: "Sustainability", description: "Optimize energy consumption in smart buildings." }
        ],
        useCases: [
            { title: "Smart Access Control", description: "Keyless entry and visitor management systems for secure buildings." },
            { title: "Virtual Property Showcases", description: "Immersive 3D tours allowing remote viewing of properties." }
        ]
    },
    "education": {
        title: "Education",
        subtitle: "Industry Solutions",
        description: "Enhance learning experiences with e-learning platforms, student analytics, and educational technology solutions.",
        features: [
            "Learning Management Systems (LMS)",
            "Student Analytics",
            "Virtual Classrooms",
            "EdTech Apps",
            "Digital Assessment Tools",
            "Campus Management Systems"
        ],
        benefits: [
            { title: "Personalized Learning", description: "Adaptive learning paths tailored to individual student needs." },
            { title: "Improved Engagement", description: "Interactive and gamified learning content." },
            { title: "Administrative Efficiency", description: "Streamline enrollment, grading, and record-keeping." },
            { title: "Data-Driven Insights", description: "Track student performance and identify areas for improvement." }
        ],
        useCases: [
            { title: "AI Tutors", description: "Intelligent tutoring systems providing 24/7 academic support." },
            { title: "Remote Proctoring", description: "Secure and scalable online exam proctoring solutions." }
        ]
    }
};

export async function generateStaticParams() {
    return Object.keys(industriesData).map((slug) => ({
        slug,
    }));
}

export function generateMetadata({ params }) {
    const industry = industriesData[params.slug];

    if (!industry) {
        return {
            title: "Industry Not Found",
        };
    }

    return {
        title: `${industry.title} - Industry Solutions`,
        description: industry.description,
    };
}

export default function IndustryPage({ params }) {
    const industry = industriesData[params.slug];

    if (!industry) {
        notFound();
    }

    return (
        <ServicePageTemplate
            title={industry.title}
            subtitle={industry.subtitle}
            description={industry.description}
            features={industry.features}
            benefits={industry.benefits}
            useCases={industry.useCases}
        />
    );
}
