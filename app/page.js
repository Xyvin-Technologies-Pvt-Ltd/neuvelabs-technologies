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

  const values = [
    {
      title: "Ethics",
      svgUrl: "hero/ethics.svg"
    },
    {
      title: "Empathy",
      svgUrl: "hero/empathy.svg"
    },
    {
      title: "Excellence",
      svgUrl: "hero/excellence.svg"
    }

  ];

  const coreFields = [
    {
      title: "AI & Machine Learning",
      description: 
      "We harness the power of artificial intelligence and machine learning to create intelligent solutions that drive innovation and transform business operations",
      imgUrl: "hero/ai.png"
    },
    {
      title: "Data Analytics",
      description: 
      "Unlock the full potential of your data with advanced analytics, business intelligence, and data-driven insights that power strategic decision making",
      imgUrl: "hero/data.png"
    },
    {
      title: "Cloud & DevOps",
      description: 
      "Seamlessly modernize your infrastructure with cloud native solutions, ensure uninterrupted business operations and smooth digital transformations.",
      imgUrl: "hero/cloud.png"
    },
    {
      title: "Product Engineering",
      description: 
      "End to-end product development from concept to deployment, ensuring innovative solutions that meet market demands and exceed expectations.",
      imgUrl: "hero/product.png"
    },

  ]

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
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-start">
              <div>
                <h2 className="mt-5 text-4xl md:text-3xl lg:text-4xl leading-tight text-gray-900">
                  <span className="bg-linear-to-r from-[#4B72CC] to-[#2D51A4] bg-clip-text text-transparent">
                    Transforming Businesses
                  </span>{" "}
                  with <br></br>Product Engineering
                </h2>
              </div>
              <div className="lg:ml-auto lg:max-w-xl">
                <p className="text-base leading-relaxed text-black pt-6">
                  At Neuve Labs, we combine technology, creativity, and strategy
                  to design digital products that empower businesses in the UAE
                  and Middle East to innovate, scale, and deliver exceptional
                  user experiences.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6 text-xl leading-relaxed text-gray-600">
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
                className="relative overflow-hidden rounded-[20px] bg-cover bg-center p-10 sm:p-12 text-white shadow-2xl"
                style={{ backgroundImage: "url('/images/Frame 21.png')" }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-[#0B2A68]/10 via-[#1E3A8A]/10 to-[#2563EB]/10" />
                <div className="absolute inset-0 opacity-40">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(134, 132, 132, 0.27),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.25),transparent_55%)]" />
                </div>
                <div className="relative pt-20 max-w-3xl">
                  <p className="text-base sm:text-base leading-relaxed">
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
      <section className="bg-gradient-to-r from-[#1a1a1a] to-[#333333] text-white">

        <div className="container mx-auto px-6 lg:px-8 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex text-[#9C9C9C] items-center gap-2 rounded-full border border-[#9C9C9C] bg-white/5 px-4 py-2 text-xs font-semibold ">
              <span className="h-2 w-2 rounded-full bg-[#9C9C9C]" />
              <span>Our Impact</span>
            </div>
            <h2 className="mt-8 text-4xl md:text-4xl leading-tight">
              Empowering industries with<br></br>{" "}
              <span className="bg-linear-to-r from-[#436DCC]  to-[#265AC9] bg-clip-text text-transparent">
                innovation, technology, and measurable &nbsp;  
              </span>
              results.
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {impactIndustries.map((industry) => (
                <div
                  key={industry.title}
                  className="group border-l-1 border-[#474747] pl-3 pb-6 transition-colors duration-300 hover:border-white/30 hover:bg-white/10"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-9 text-sm leading-relaxed text-white/70">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where Expertise Meets Global Impact Section */}
      <section  className="bg-gradient-to-r from-[#D1DCE8] to-[#FAFCFF] text-white">
        
          <div className="container mx-auto px-6 lg:px-8">
            <div className="relative mx-auto  ">
             
              
              <div className="relative grid gap-3 sm:p-8 items-end lg:grid"
                style={{ gridTemplateColumns: "2fr 3fr" }}>
                <div>
                  <h3 className="mt-4 p-0 text-3xl md:text-5xl leading-tight text-slate-900">
                    Where Expertise <br />
                     Meets Global Impact
                  </h3>


                </div>
                <div className="grid gap-0 sm:grid-cols-2">
                  
                  {impactStats.map((stat) => (
                    <div
                      key={stat.label}
                      className=" pl-10 text-slate-900 "
                    >
                      <div className="absolute top-0 h-full w-[1px] bg-gradient-to-t from-gray-500 to-transparent sm:block hidden"></div>
                      <div className="pl-6">
                      <div className="text-4xl sm: text-3xl md:text-6xl font-bold text-slate-900">
                        {stat.value}
                      </div>
                      <div className="mt-2 pt-6 md:text-2xl text-base font-semibold">
                        {stat.label}
                      </div>
                      <p className="mt-3 pb-5 text-sm leading-relaxed text-slate-600">
                        {stat.description}
                      </p>
                    </div>
                    </div>
                  ))}
                  <div className="sm:col-span-2 h-[1px] w-full bg-gradient-to-r from-gray-500 to-transparent sm:block hidden"></div>

                </div>


              </div>
            </div>
          </div>
        
      </section>


      {/* Who We Are - Maestros Section */}
      <section className="pt-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="max-w-7xl mx-auto">

          <div className="inline-flex text-black items-center gap-2 rounded-full border border-[#CCC9C8] bg-white/5 px-4 py-2 text-xs  ">
              <span className="h-2 w-2 rounded-full bg-black " />
              <span>Who We Are</span>
            </div>

            
            <h2 className="text-4xl md:text-4xl py-5  text-gray-900 mb-3 text-left leading-normal">
              A collective of passionate innovators blending of art, ethics, and technology to create meaningful digital experience.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed text-left pb-12">
              Drawing inspiration from the captivating realms of art and
              aesthetics, we seamlessly merge our profound ardor with advanced
              technological prowess. The outcome is an exquisite fusion of a
              collective of remarkable minds whose zeal to witness your
              enterprise thrive knows no bounds, matching your unwavering
              determination every step of the way.
            </p>

            {values.map((value) => (
            <div className="inline-flex text-[#B7B7B7] items-center gap-2 rounded-[42px] border border-[#CCC9C8] bg-black px-10 py-8 mr-12 md:text-2xl ">
                {/* SVG icon */}
                <div className="flex items-center mr-3 justify-center w-8 h-6 ">
                  <img src={value.svgUrl} alt={value.title} className="w-15 h-10" />
                </div>
              <span>{value.title}</span>
            </div>
            ))}
            
          </div>
        </div>
      </section>
      <section className="py-25 bg-white">
        <div className="container mx-auto px-6 lg:px-8">

          <div className="max-w-7xl mx-auto">

            <div className="inline-flex text-black items-center gap-2 rounded-full border border-[#CCC9C8] bg-white/5 px-4 py-2 text-xs  ">
              <span className="h-2 w-2 rounded-full bg-black " />
              <span>What We Do</span>
            </div>

            
            <h2 className="text-4xl md:text-4xl py-5  text-gray-900 text-left leading-normal">
              Empowering businesses through intelligent, data-driven and cloud-enabled solutions that accelerate innovation and digital transformation.
            </h2>

            <div className="mt-5 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
              {coreFields.map((field) => (
                
                <div
                  key={field.title}
                  className="group  pr-3 m-1 transition-colors duration-300 hover:border-gray-100 hover:bg-gray-100"
                >
                  <div className="w-70 h-75 mb-4 rounded-xl overflow-hidden">
                    <img src={field.imgUrl} alt="Example"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl text-black">
                    {field.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">
                    {field.description}
                  </p>
                </div>
              ))}
            </div>
            
            
          </div>
        </div>
      </section>

      

      
      
    </>
  );
}
