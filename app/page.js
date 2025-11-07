import { generateMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import ContactForm from "@/components/ContactForm";
import { ShieldCheck, Heart, Star, Play } from "lucide-react";

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
    },
    {
      title: "Financial Services",
      description:
        "Our advanced expertise helps leading organizations manage risk, detect fraud, improve operational efficiency, and increase profitability.",
    },
    {
      title: "Transport",
      description:
        "Our experience in road asset management contributes significantly to the upkeep of highway infrastructure around the world.",
    },
    {
      title: "Insurance",
      description:
        "Prominent insurance providers rely on our solutions for policy assistance, claims processing, property and casualty, and workers compensation.",
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="mt-5 text-4xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
                  <span className="bg-linear-to-r from-[#1E63FF] to-[#7C3AED] bg-clip-text text-transparent">
                    Transforming Businesses
                  </span>{" "}
                  with Product Engineering
                </h2>
              </div>
              <div className="lg:ml-auto lg:max-w-xl">
                <p className="text-lg leading-relaxed text-gray-600 pt-6">
                  At Neuve Labs, we combine technology, creativity, and strategy
                  to design digital products that empower businesses in the UAE
                  and Middle East to innovate, scale, and deliver exceptional
                  user experiences.
                </p>
              </div>
            </div>

            <div className="mt-12 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                We bring together expertise in Data & AI, Cognitive Computing,
                DevSecOps, and Experience Design to create products that truly
                stand out. Our end-to-end product engineering approach spans
                ideation to deployment, ensuring innovation, scalability, and
                quality throughout the lifecycle.
              </p>
              <p>
                With a deep understanding of regional markets, we deliver
                solutions tailored to every client&apos;s needs—helping them
                grow, adapt, and stay competitive. Beyond driving business
                outcomes, we believe in building digital experiences that create
                lasting value for customers, partners, and society.
              </p>
            </div>

            <div className="mt-16">
              <div
                className="relative overflow-hidden rounded-[32px] bg-cover bg-center p-10 sm:p-12 text-white shadow-2xl"
                style={{ backgroundImage: "url('/images/Frame 21.png')" }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-[#0B2A68]/90 via-[#1E3A8A]/80 to-[#2563EB]/70" />
                <div className="absolute inset-0 opacity-40">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.4),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.25),transparent_55%)]" />
                </div>
                <div className="relative max-w-3xl">
                  <p className="text-base sm:text-lg leading-relaxed">
                    Neuve Labs transforms ideas into powerful digital products
                    through cutting-edge technology and deep market insight. We
                    deliver innovative, high-quality solutions that drive
                    business growth and meaningful impact across the UAE and
                    beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Businesses Section */}
      {/* <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <div className="text-sm uppercase tracking-wider text-[#007AFF] mb-4 font-semibold">
                Transforming Businesses
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                With Product Engineering
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Neuve Labs, we bring together the latest technology expertise
                to craft exceptional product experiences that truly stand out.
                With our deep understanding of Data and AI, Cognitive Computing,
                DevSecOps, and Experience Design across various domains, we
                offer comprehensive product engineering services helping many
                leading businesses in the UAE and Middle East grow
                exponentially.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We understand the regional market and the unique challenges and
                opportunities it presents. From ideation to deployment, we cover
                the entire product development lifecycle, ensuring innovative
                and high quality solutions tailored to our client's unique
                requirements. We believe in creating meaningful value and
                driving innovation that extends beyond business success. Through
                digitally driven programs, we aim to make a positive impact on
                our customers, partners, and society.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With Neuve Labs, you can expect nothing less than exceptional
                products that captivate users and drive success. Let us join
                forces to unlock the full potential of your ideas and create
                remarkable digital experiences that make a lasting impression in
                the UAE market and beyond.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-[#007AFF]/20 to-[#8B5CF6]/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-sm">Image Placeholder</p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[#007AFF]/20 to-[#8B5CF6]/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <p className="text-sm">Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Impact & Reach Section */}
      <section className="bg-[#050A1F] text-white">
        <div className="container mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]">
              <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
              <span>Our Impact</span>
            </div>
            <h2 className="mt-8 text-4xl md:text-5xl font-bold leading-tight">
              Empowering industries with{" "}
              <span className="bg-linear-to-r from-[#38BDF8] via-[#4F46E5] to-[#94A3B8] bg-clip-text text-transparent">
                innovation, technology, and measurable results.
              </span>
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impactIndustries.map((industry) => (
                <div
                  key={industry.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pb-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-white text-slate-900 shadow-[0_40px_100px_-40px_rgba(15,23,42,0.6)]">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: "url('/images/Frame 21.png')" }}
              />
              <div className="absolute inset-0 bg-white/85 backdrop-blur-lg" />
              <div className="relative grid gap-12 p-10 sm:p-12 lg:grid-cols-[1.2fr,1fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    Where Expertise
                  </p>
                  <h3 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                    Meets Global Impact
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    We blend deep domain knowledge with engineering excellence
                    to build solutions that scale with confidence and deliver
                    measurable value.
                  </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  {impactStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-white/60 p-6 text-slate-900 shadow-sm"
                    >
                      <div className="text-4xl font-bold text-slate-900">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-base font-semibold">
                        {stat.label}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {stat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are - Maestros Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm uppercase tracking-wider text-[#007AFF] mb-4 font-semibold text-center">
              Maestros
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed text-center mb-12">
              Drawing inspiration from the captivating realms of art and
              aesthetics, we seamlessly merge our profound ardor with advanced
              technological prowess. The outcome is an exquisite fusion of a
              collective of remarkable minds whose zeal to witness your
              enterprise thrive knows no bounds, matching your unwavering
              determination every step of the way.
            </p>
            <div className="bg-linear-to-br from-[#007AFF]/10 to-[#8B5CF6]/10 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-gray-400">
                <Play className="w-20 h-20 mx-auto mb-4" />
                <p className="text-sm">Corporate Video Thumbnail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics, Empathy, Excellence Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-linear-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ethics</h3>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to ethical business practices and transparent
                communication forms the foundation of all our interactions; we
                are always doing what is right for our customers, partners, and
                society.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-linear-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Empathy</h3>
              <p className="text-gray-600 leading-relaxed">
                At Neuve Labs, we prioritize putting ourselves in our clients
                shoes to understand their needs and craft exceptional digital
                solutions that truly make a difference in their lives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-linear-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously striving for excellence in all that we do, from
                delivering high-quality solutions to fostering a positive work
                environment and achieving the highest standards of quality,
                innovation, and customer satisfaction, is at the heart of the
                Neuve Labs DNA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        {/* Heading Section with Azure to Violet Gradient */}
        <div className="bg-linear-to-r from-[#007AFF] via-[#6366F1] to-[#8B5CF6] py-20">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <div className="text-white/80 text-sm uppercase tracking-wider mb-2">
              Services
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              What We Do
            </h2>
          </div>
        </div>

        {/* Services Carousel Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <ServicesCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to transform your business? Let us discuss how our AI and
                IT consulting services can help accelerate your digital
                transformation.
              </p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
