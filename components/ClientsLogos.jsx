"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    name: "A Accounting",
    logo: "/images/clients/aaccounting.png",
    alt: "A Accounting Logo",
    href: "https://aaccounting.me",
  },
  {
    name: "Kangaroo Care",
    logo: "/images/clients/kangaroo-logo.png",
    alt: "Kangaroo Care Logo",
    href: "https://kangaroocare.com.au/",
  },
  {
    name: "Khedmah",
    logo: "/images/clients/khedmah.jpg",
    alt: "Khedmah Logo",
    href: "https://www.khedmah.om",
  },
  {
    name: "CBS",
    logo: "/images/clients/cbs.png",
    alt: "CBS Logo",
    href: "https://www.continuityoman.com",
  },
  {
    name: "Exctel",
    logo: "/images/clients/exctel.png",
    alt: "Exctel Logo",
    href: "https://www.exctel.com",
  },
  {
    name: "Bristlecone",
    logo: "/images/clients/Bristlecone.png",
    alt: "Bristlecone Logo",
    href: "https://www.bristlecone.com",
    invert: true,
  },
  {
    name: "Elite Road Supplies Co",
    logo: "/images/clients/eco_logo.svg",
    alt: "Elite Road Supplies Co Logo",
    href: "https://www.eliteroadsupplies.com",
  },
  {
    name: "International Academy of Osteopathy",
    logo: "/images/clients/iao.webp",
    alt: "International Academy of Osteopathy Logo",
    href: "https://www.osteopathy.academy",
  },
];

export default function ClientsLogos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const duplicatedClients = [...clients, ...clients];

  return (
    <section
      ref={ref}
      className="relative py-16 bg-surface border-y-2 border-border overflow-hidden"
    >
      <div className="absolute inset-0 grid-background opacity-20" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
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

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          <div className="flex animate-scroll">
            {duplicatedClients.map((client, index) => (
              <motion.a
                key={`${client.name}-${index}`}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: (index % clients.length) * 0.08,
                }}
                aria-label={`Visit ${client.name}`}
                className="group relative shrink-0 mx-4 w-44 h-28 overflow-hidden bg-white border-2 border-border hover:border-neon-green transition-all duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={176}
                  height={112}
                  className={`h-full w-full object-contain object-center ${
                    client.invert ? "brightness-0" : ""
                  }`}
                  draggable={false}
                />

                <span className="absolute inset-0 flex items-center justify-center bg-[#050508]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 text-xs font-mono font-medium text-white text-center leading-snug">
                    {client.name}
                  </span>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
