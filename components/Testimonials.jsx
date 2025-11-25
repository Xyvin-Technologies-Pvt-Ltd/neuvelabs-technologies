"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Neuve Labs transformed our digital infrastructure with their cloud engineering expertise. The seamless migration and ongoing support have been exceptional.",
      author: "Ahmed Al-Mansoori",
      role: "CTO",
      company: "Leading Retail Chain UAE",
      rating: 5,
    },
    {
      quote:
        "Their AI and machine learning solutions have revolutionized our data analytics capabilities. We've seen a 40% improvement in decision-making speed.",
      author: "Sarah Johnson",
      role: "Head of Innovation",
      company: "Financial Services Group",
      rating: 5,
    },
    {
      quote:
        "The product engineering team at Neuve Labs delivered beyond our expectations. Their attention to detail and user-centric approach is remarkable.",
      author: "Mohammed Hassan",
      role: "Product Director",
      company: "Tech Startup",
      rating: 5,
    },
    {
      quote:
        "Working with Neuve Labs has been a game-changer. Their expertise in data engineering helped us unlock insights we never knew existed.",
      author: "Emily Chen",
      role: "Data Strategy Lead",
      company: "Enterprise Corporation",
      rating: 5,
    },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--tw-gradient-stops))] from-blue-50/5 via-transparent to-blue-50/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                Testimonials
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Clients Say
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by leading organizations across industries. Here's what they have to say about working with us.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Quote className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="font-semibold text-gray-900 mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

