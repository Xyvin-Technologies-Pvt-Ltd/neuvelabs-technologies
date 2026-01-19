"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function ClientsLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    {
      name: "A Accounting",
      logo: "/images/clients/aaccounting.png",
      alt: "A Accounting Logo",
    },
    {
      name: "Kangaroo",
      logo: "/images/clients/kangaroo-logo.png",
      alt: "Kangaroo Logo",
    },
    {
      name: "Khedmah",
      logo: "/images/clients/khedmah.jpg",
      alt: "Khedmah Logo",
    },
    {
      name: "CBS",
      logo: "/images/clients/cbs.png",
      alt: "CBS Logo",
    },
    {
      name: "Exctel",
      logo: "/images/clients/exctel.png",
      alt: "Exctel Logo",
    },
    {
      name:"Bristlecone",
      logo: "/images/clients/Bristlecone.png",
      alt: "Bristlecone Logo",
    },
    {
      name:"ECO",
      logo: "/images/clients/eco_logo.svg",
      alt: "Elite Road Supplies Co Logo",
    },
    {
      name:"he International Academy of Osteopathy",
      logo: "/images/clients/iao.webp",
      alt: "he International Academy of Osteopathy Logo",
    },
 
  ];

  // Duplicate clients for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section
      ref={ref}
      className="relative py-16 bg-surface border-y-2 border-border overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface/50 border border-border mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              Trusted Partners
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Trusted by{" "}
            <span className="text-neon-cyan">Leading Organizations</span>
          </h2>
          <p className="text-sm text-muted max-w-xl mx-auto">
            We partner with innovative companies across various industries
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          {/* Carousel Container */}
          <div className="flex animate-scroll">
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 mx-6 px-8 py-6 bg-card border-2 border-border hover:border-neon-green transition-all duration-300 group"
              >
                <div className="relative w-32 h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={120}
                    height={60}
                    className="object-contain max-h-12 w-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
