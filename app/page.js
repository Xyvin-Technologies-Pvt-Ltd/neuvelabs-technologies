import { generateMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import { ShieldCheck, Heart, Star, Play, ArrowRight, Zap, Globe, Users } from "lucide-react";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "Neuve Labs Technology - Leading AI and IT consulting company in UAE. Accelerate digital transformation through AI, Cloud & DevOps, Data Analytics, and Enterprise Software Development.",
});

export default function Home() {
  const impactIndustries = [
    {
      title: "Retail",
      description:
        "Walk into any independent supermarket in the UAE. When you self-checkout, 7 times out of 10 you could be using a Neuve Labs solution.",
      icon: <Star className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Financial Services",
      description:
        "Our advanced expertise helps leading organizations manage risk, detect fraud, improve operational efficiency, and increase profitability.",
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Transport",
      description:
        "Our experience in road asset management contributes significantly to the upkeep of highway infrastructure around the world.",
      icon: <Globe className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Insurance",
      description:
        "Prominent insurance providers rely on our solutions for policy assistance, claims processing, property and casualty, and workers compensation.",
      icon: <Heart className="w-6 h-6 text-red-400" />,
    },
  ];

  const values = [
    {
      title: "Ethics",
      description: "We operate with unwavering integrity and transparency.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Empathy",
      description: "We design with the human experience at the center.",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: "Excellence",
      description: "We pursue perfection in every line of code.",
      icon: <Star className="w-8 h-8" />,
    },
  ];

  const coreFields = [
    {
      title: "AI & Machine Learning",
      description:
        "We harness the power of artificial intelligence and machine learning to create intelligent solutions that drive innovation and transform business operations",
      imgUrl: "hero/ai.png",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Data Analytics",
      description:
        "Unlock the full potential of your data with advanced analytics, business intelligence, and data-driven insights that power strategic decision making",
      imgUrl: "hero/data.png",
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Seamlessly modernize your infrastructure with cloud native solutions, ensure uninterrupted business operations and smooth digital transformations.",
      imgUrl: "hero/cloud.png",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Product Engineering",
      description:
        "End to-end product development from concept to deployment, ensuring innovative solutions that meet market demands and exceed expectations.",
      imgUrl: "hero/product.png",
      gradient: "from-pink-500/20 to-rose-500/20",
    },
  ];

  const impactStats = [
    {
      value: "1650+",
      label: "Engineering Maestros",
      description:
        "Serving 500+ customers across enterprises, ISVs, and start-ups from 37 countries.",
    },
    {
      value: "5",
      label: "Global Locations",
      description:
        "Offices across the UAE, UK and Europe, North America, and Asia.",
    },
  ];

  return (
    <>
      <Hero />

      {/* Product Engineering Narrative Section */}
      <SectionWrapper className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Transforming Businesses
                  </span>{" "}
                  with Product Engineering
                </h2>
                <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                  <p>
                    At Neuve Labs, we combine technology, creativity, and strategy
                    to design digital products that empower businesses in the UAE
                    and Middle East to innovate, scale, and deliver exceptional
                    user experiences.
                  </p>
                  <p>
                    We bring together expertise in Data & AI, Cognitive Computing,
                    DevSecOps, and Experience Design to create products that truly
                    stand out. Our end-to-end product engineering approach spans
                    ideation to deployment.
                  </p>
                </div>
                <div className="mt-10">
                  <button className="group flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                    Learn more about our approach <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 glass-card p-2">
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gray-900 to-black overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('/images/Frame 21.png')] bg-cover bg-center opacity-50 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-white/90 text-lg font-medium leading-relaxed">
                        "Neuve Labs transforms ideas into powerful digital products through cutting-edge technology and deep market insight."
                      </p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Impact & Reach Section */}
      <SectionWrapper className="py-32 bg-[#050505] relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Our Impact</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-4xl">
              Empowering industries with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                innovation, technology, and measurable results.
              </span>
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impactIndustries.map((industry, index) => (
                <div
                  key={industry.title}
                  className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Global Impact Stats */}
      <SectionWrapper className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Where Expertise <br />
                <span className="text-gray-500">Meets Global Impact</span>
              </h3>
              <p className="text-gray-400 text-lg max-w-md">
                We are a global team of innovators, engineers, and strategists dedicated to driving digital transformation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {impactStats.map((stat) => (
                <div key={stat.label} className="relative pl-8 border-l border-white/10">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-blue-400 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-gray-500">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Who We Are */}
      <SectionWrapper className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Who We Are</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                A collective of passionate innovators blending art, ethics, and technology to create meaningful digital experiences.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                Drawing inspiration from the captivating realms of art and
                aesthetics, we seamlessly merge our profound ardor with advanced
                technological prowess. The outcome is an exquisite fusion of a
                collective of remarkable minds.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors text-center group">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What We Do */}
      <SectionWrapper className="py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">What We Do</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 max-w-4xl leading-snug">
              Empowering businesses through intelligent, data-driven and cloud-enabled solutions that accelerate innovation.
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreFields.map((field) => (
                <div
                  key={field.title}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-500"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${field.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative p-6 h-full flex flex-col">
                    <div className="w-full aspect-video rounded-lg overflow-hidden mb-6 bg-black/50">
                      {/* Placeholder for actual images, using colored blocks for now if images fail */}
                      <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/20">
                        <Zap className="w-8 h-8" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                      {field.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">
                      {field.description}
                    </p>

                    <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                      Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

