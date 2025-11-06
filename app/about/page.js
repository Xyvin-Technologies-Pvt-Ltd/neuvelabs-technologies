import { generateMetadata } from "@/lib/metadata";
import { AnimatedSection, AnimatedCard } from "@/components/AnimatedSection";

export const metadata = generateMetadata({
  title: "About Us",
  description:
    "Learn about Neuve Labs Technology - a leading AI and IT consulting company headquartered in UAE, helping enterprises accelerate digital transformation.",
  path: "/about",
});

const values = [
  {
    title: "Innovation",
    description:
      "We stay at the forefront of technology, continuously exploring new solutions and methodologies to deliver cutting-edge results.",
  },
  {
    title: "Excellence",
    description:
      "We maintain the highest standards in everything we do, ensuring quality and reliability in every project we undertake.",
  },
  {
    title: "Partnership",
    description:
      "We build long-term relationships with our clients, working as an extension of their team to achieve shared success.",
  },
  {
    title: "Integrity",
    description:
      "We conduct business with transparency, honesty, and ethical practices, building trust through our actions.",
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 lg:px-8 mb-20">
        <AnimatedSection className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Neuve Labs
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Neuve Labs is a next-generation AI and IT consulting company that
            helps enterprises accelerate digital transformation through
            Artificial Intelligence, Cloud & DevOps, Data Analytics, and
            Enterprise Software Development.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Headquartered in the UAE, we combine global expertise with local
            understanding to deliver technology solutions that drive real
            business value. Our team of experts brings years of experience in
            helping organizations navigate their digital transformation journey.
          </p>
        </AnimatedSection>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To empower organizations with cutting-edge technology solutions
              that transform their business operations, enhance customer
              experiences, and drive sustainable growth in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 lg:px-8 mb-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <AnimatedCard key={value.title} index={index} className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-[#007AFF] via-[#6366F1] to-[#8B5CF6] text-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Choose Neuve Labs?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="opacity-90">Years of Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="opacity-90">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="opacity-90">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

