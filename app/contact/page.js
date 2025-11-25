import { generateMetadata } from "@/lib/metadata";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = generateMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Neuve Labs. We are ready to help you accelerate your digital transformation journey.",
});

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email Us",
      details: "hello@neuvelabs.com",
      description: "We'll get back to you within 24 hours.",
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-400" />,
      title: "Call Us",
      details: "+971 50 123 4567",
      description: "Mon-Fri from 9am to 6pm.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-400" />,
      title: "Visit Us",
      details: "Dubai Silicon Oasis, Dubai, UAE",
      description: "Come say hello at our office.",
    },
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Extraordinary
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear from you. Let's discuss how we can help you achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-blue-400 font-medium mb-2">{item.details}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
