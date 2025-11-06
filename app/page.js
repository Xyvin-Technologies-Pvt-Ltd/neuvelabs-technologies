import { generateMetadata } from "@/lib/metadata";
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import ContactForm from "@/components/ContactForm";
import { Search, Settings, CheckCircle, ShoppingCart, TrendingUp, Shield, Truck, Users, Globe, ShieldCheck, Heart, Star, Play } from "lucide-react";

export const metadata = generateMetadata({
  title: "Home",
  description:
    "Neuve Labs Technology - Leading AI and IT consulting company in UAE. Accelerate digital transformation through AI, Cloud & DevOps, Data Analytics, and Enterprise Software Development.",
});


export default function Home() {
  return (
    <>
      <Hero />

      {/* Explore, Engineer, Excel Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Explore</h3>
              <p className="text-gray-600 leading-relaxed">
                We embody the essential process of continuous learning and
                experimentation necessary to identify and solve problems, uncover
                new opportunities, and create novel solutions that drive innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Engineer</h3>
              <p className="text-gray-600 leading-relaxed">
                We are set apart by our passion for innovation and our unique blend
                of technical expertise, creative thinking, and customer-centric design.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Excel</h3>
              <p className="text-gray-600 leading-relaxed">
                Our foundation for building trust, establishing a competitive edge,
                and creating long-lasting relationships with our customers based on
                the exceptional product quality we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Businesses Section */}
      <section className="py-24 bg-[#FAFAFA]">
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
                At Neuve Labs, we bring together the latest technology expertise to
                craft exceptional product experiences that truly stand out. With our
                deep understanding of Data and AI, Cognitive Computing, DevSecOps, and
                Experience Design across various domains, we offer comprehensive product
                engineering services helping many leading businesses in the UAE and
                Middle East grow exponentially.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We understand the regional market and the unique challenges and
                opportunities it presents. From ideation to deployment, we cover the
                entire product development lifecycle, ensuring innovative and high
                quality solutions tailored to our client's unique requirements. We
                believe in creating meaningful value and driving innovation that
                extends beyond business success. Through digitally driven programs, we
                aim to make a positive impact on our customers, partners, and society.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With Neuve Labs, you can expect nothing less than exceptional products
                that captivate users and drive success. Let us join forces to unlock
                the full potential of your ideas and create remarkable digital
                experiences that make a lasting impression in the UAE market and beyond.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-[#007AFF]/20 to-[#8B5CF6]/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <p className="text-sm">Image Placeholder</p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[#007AFF]/20 to-[#8B5CF6]/20 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-sm">Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retail</h3>
              <p className="text-gray-600 leading-relaxed">
                Walk into any independent supermarket in the UAE. When you self-checkout,
                7 times out of 10 you could be using a Neuve Labs solution.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced expertise helped leading organizations better manage risk,
                detect fraud, improve operational efficiency, and increase profitability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance</h3>
              <p className="text-gray-600 leading-relaxed">
                Many prominent insurance providers trust and rely on our solutions for
                policy assistance, claims processing, property & casualty, workers'
                compensation, etc.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transport</h3>
              <p className="text-gray-600 leading-relaxed">
                Our expertise in Road Asset Management, contributes significantly towards
                the upkeep of highway network infrastructure around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#007AFF] via-[#6366F1] to-[#8B5CF6] text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1650+</div>
                <div className="text-lg opacity-90">Engineering Maestros</div>
                <div className="text-sm opacity-75 mt-1">
                  Serving 500+ customers across enterprises, ISVs, and start-ups from 37 countries.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5</div>
                <div className="text-lg opacity-90">Global Locations</div>
                <div className="text-sm opacity-75 mt-1">
                  We have multiple offices in UAE, UK & Europe, North America, and Asia.
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
              Drawing inspiration from the captivating realms of art and aesthetics, we
              seamlessly merge our profound ardor with advanced technological prowess. The
              outcome is an exquisite fusion of a collective of remarkable minds whose zeal
              to witness your enterprise thrive knows no bounds, matching your unwavering
              determination every step of the way.
            </p>
            <div className="bg-gradient-to-br from-[#007AFF]/10 to-[#8B5CF6]/10 rounded-lg aspect-video flex items-center justify-center">
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ethics</h3>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to ethical business practices and transparent
                communication forms the foundation of all our interactions; we are
                always doing what's right for our customers, partners, and society.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Empathy</h3>
              <p className="text-gray-600 leading-relaxed">
                At Neuve Labs, we prioritize putting ourselves in our clients' shoes to
                understand their needs and craft exceptional digital solutions that
                truly make a difference in their lives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#007AFF] via-[#6366F1] to-[#8B5CF6] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously striving for excellence in all that we do, from delivering
                high-quality solutions to fostering a positive work environment and
                achieving the highest standards of quality, innovation, and customer
                satisfaction, is at the heart of Neuve Labs' DNA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        {/* Heading Section with Azure to Violet Gradient */}
        <div className="bg-gradient-to-r from-[#007AFF] via-[#6366F1] to-[#8B5CF6] py-20">
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
                Ready to transform your business? Let's discuss how our AI and IT
                consulting services can help accelerate your digital transformation.
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
