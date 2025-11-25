"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ClientsLogos() {
  // Replace these with actual client logo paths or use placeholder images
  const clients = [
    {
      name: "Client 1",
      logo: "/images/clients/client1.png", // Add your client logos to public/images/clients/
      alt: "Client 1 Logo",
    },
    {
      name: "Client 2",
      logo: "/images/clients/client2.png",
      alt: "Client 2 Logo",
    },
    {
      name: "Client 3",
      logo: "/images/clients/client3.png",
      alt: "Client 3 Logo",
    },
    {
      name: "Client 4",
      logo: "/images/clients/client4.png",
      alt: "Client 4 Logo",
    },
    {
      name: "Client 5",
      logo: "/images/clients/client5.png",
      alt: "Client 5 Logo",
    },
    {
      name: "Client 6",
      logo: "/images/clients/client6.png",
      alt: "Client 6 Logo",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
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
                Trusted Partners
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Organizations
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud to partner with innovative companies across various industries.
            </p>
          </motion.div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0"
              >
                {/* Option 1: Using Image component (recommended if you have logo images) */}
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={120}
                    height={60}
                    className="object-contain max-h-12 w-auto"
                  />
                ) : (
                  // Option 2: Placeholder text (use until you add logos)
                  <span className="text-gray-400 font-semibold text-sm">
                    {client.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

