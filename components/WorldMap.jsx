"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

/** Equirectangular projection → CSS % for a 2:1 world map */
function project(lat, lng) {
  return {
    x: ((lng + 180) / 360) * 100,
    y: ((90 - lat) / 180) * 100,
  };
}

const LOCATIONS = [
  { id: "uae", key: "rak", lat: 25.8, lng: 55.9 },
  { id: "oman", key: "oman", lat: 23.6, lng: 58.5 },
  { id: "india", key: "kochi", lat: 9.93, lng: 76.27 },
  { id: "singapore", key: "singapore", lat: 1.35, lng: 103.82 },
  { id: "australia", key: "australia", lat: -25.27, lng: 133.78 },
  { id: "belgium", key: "belgium", lat: 50.85, lng: 4.35 },
  { id: "netherlands", key: "netherlands", lat: 52.37, lng: 4.9 },
  { id: "usa", key: "usa", lat: 37.09, lng: -95.71 },
];

export default function WorldMap({ labels }) {
  const [activeId, setActiveId] = useState(null);

  const markers = LOCATIONS.map((loc) => ({
    ...loc,
    ...project(loc.lat, loc.lng),
    label: labels[loc.key] ?? loc.key,
  }));

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[2/1] max-h-[440px] mx-auto overflow-hidden border-2 border-border bg-surface/40">
        {/* Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,255,0.07)_0%,transparent_65%)]" />
        <div
          className="absolute inset-0 opacity-[0.1] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Accurate equirectangular land silhouette */}
        <div
          className="absolute inset-0 bg-neon-cyan/25"
          style={{
            WebkitMaskImage: "url(/images/world-land.svg)",
            maskImage: "url(/images/world-land.svg)",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-foreground/10"
          style={{
            WebkitMaskImage: "url(/images/world-land.svg)",
            maskImage: "url(/images/world-land.svg)",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
          aria-hidden="true"
        />

        {/* Equator guide */}
        <div className="absolute left-[4%] right-[4%] top-1/2 border-t border-dashed border-neon-cyan/20 pointer-events-none" />

        {/* Markers */}
        {markers.map((marker, index) => {
          const isActive = activeId === marker.id;
          return (
            <motion.button
              key={marker.id}
              type="button"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.07 }}
              className="absolute -translate-x-1/2 -translate-y-full group z-10 focus:outline-none"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              onMouseEnter={() => setActiveId(marker.id)}
              onMouseLeave={() => setActiveId(null)}
              onFocus={() => setActiveId(marker.id)}
              onBlur={() => setActiveId(null)}
              aria-label={marker.label}
            >
              <span className="absolute left-1/2 top-[72%] -translate-x-1/2 w-3 h-3">
                <span className="absolute inset-0 rounded-full bg-neon-green/40 animate-ping" />
                <span className="absolute inset-[3px] rounded-full bg-neon-green shadow-[0_0_10px_rgba(0,255,136,0.8)]" />
              </span>

              <MapPin
                className={`relative w-5 h-5 md:w-6 md:h-6 drop-shadow-[0_0_8px_rgba(0,255,136,0.7)] transition-colors ${
                  isActive ? "text-neon-cyan" : "text-neon-green"
                }`}
                fill="currentColor"
                strokeWidth={1.5}
              />

              <span
                className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-1 whitespace-nowrap px-2 py-1 text-[10px] md:text-xs font-mono tracking-wide border transition-all duration-200 ${
                  isActive
                    ? "opacity-100 translate-y-0 border-neon-cyan/50 bg-surface text-neon-cyan"
                    : "opacity-0 translate-y-1 border-border bg-surface/95 text-muted group-hover:opacity-100 group-hover:translate-y-0"
                }`}
              >
                {marker.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Location chips */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {markers.map((marker, index) => (
          <motion.button
            key={marker.id}
            type="button"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 + index * 0.05 }}
            onMouseEnter={() => setActiveId(marker.id)}
            onMouseLeave={() => setActiveId(null)}
            onFocus={() => setActiveId(marker.id)}
            onBlur={() => setActiveId(null)}
            className={`inline-flex items-center gap-2 px-3 py-1.5 border text-xs font-mono transition-colors ${
              activeId === marker.id
                ? "border-neon-cyan text-neon-cyan bg-neon-cyan/10"
                : "border-border text-muted hover:border-neon-green hover:text-foreground"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                activeId === marker.id ? "bg-neon-cyan" : "bg-neon-green"
              } animate-pulse`}
            />
            {marker.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
