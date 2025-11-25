import { generateMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/SectionWrapper";
import { Users, Target, Lightbulb, Trophy } from "lucide-react";

export const metadata = generateMetadata({
  title: "About Us",
  description:
    "Learn about Neuve Labs, our mission, vision, and the team driving digital transformation in the UAE and beyond.",
});

export default function About() {
  const stats = [
    { label: "Years of Excellence", value: "10+" },
    { label: "Projects Delivered", value: "500+" },
    { label: "Team Members", value: "150+" },
    { label: "Countries Served", value: "37" },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions.",
      icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Client Success",
      description: "Your growth is our priority. We build to empower your business.",
      icon: <Trophy className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "People Centric",
      description: "We believe in the power of human potential and collaboration.",
      icon: <Users className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Integrity",
      description: "Trust and transparency are the foundations of our partnerships.",
      icon: <Target className="w-8 h-8 text-red-400" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              We Are <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Neuve Labs
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              A collective of passionate innovators, engineers, and strategists dedicated to driving digital transformation and shaping the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <SectionWrapper className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Building the Future, <br /> One Line of Code at a Time.
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between complex technology and business value, Neuve Labs has grown into a leading IT consulting firm in the UAE.
                </p>
                <p>
                  We believe that technology should be an enabler, not a barrier. That's why we focus on creating intuitive, scalable, and robust solutions that solve real-world problems. From startups to enterprises, we partner with organizations to unlock their full potential.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Values */}
      <SectionWrapper className="py-24 bg-black relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Driven by Purpose, Guided by Values
            </h2>
            <p className="text-gray-400 text-lg">
              Our core values define who we are and how we work. They are the compass that guides our decisions and actions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
