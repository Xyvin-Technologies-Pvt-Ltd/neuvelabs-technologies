import { generateMetadata } from "@/lib/metadata";
import ContactForm from "@/components/ContactForm";
import { AnimatedSection } from "@/components/AnimatedSection";

export const metadata = generateMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Neuve Labs Technology. Contact our AI and IT consulting experts in UAE for your digital transformation needs.",
  path: "/contact",
});

export default function Contact() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your business? Let's discuss how our AI and IT
              consulting services can help accelerate your digital transformation
              journey.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email
                </h3>
                <a
                  href="mailto:info@neuvelabs.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  info@neuvelabs.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Location
                </h3>
                <p className="text-gray-600">United Arab Emirates</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Office Hours
                </h3>
                <p className="text-gray-600">
                  Sunday - Thursday: 9:00 AM - 6:00 PM GST
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} className="bg-white p-8 rounded-2xl border border-gray-200">
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

