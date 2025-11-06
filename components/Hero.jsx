"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef(null);
  const [showNeuveLabs, setShowNeuveLabs] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force video to load and play
      video.load();
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });

      // Handle video load events
      const handleLoadedData = () => {
        console.log("Video loaded successfully");
        video.play().catch((error) => {
          console.error("Error playing video after load:", error);
        });
      };

      const handleError = (e) => {
        console.error("Video error:", e);
        console.error("Video error details:", video.error);
      };

      // Track video time to show Neuve Labs at 8 seconds (burst moment)
      const handleTimeUpdate = () => {
        if (video.currentTime >= 8 && video.currentTime < 20) {
          // Show from 8s to 16s (8 seconds of reveal)
          setShowNeuveLabs(true);
        } else {
          // Hide before 8s or after 16s (or when video loops)
          setShowNeuveLabs(false);
        }
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("error", handleError);
      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("error", handleError);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Subtle overlay - reduced since background is already black */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Dramatic Neuve Labs Reveal at 8 seconds (burst moment) */}
      <AnimatePresence>
        {showNeuveLabs && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1], // Elastic bounce effect
            }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight"
              style={{
                fontFamily: "Goglast, sans-serif",
                textShadow:
                  "0 0 60px rgba(255, 255, 255, 0.8), 0 0 120px rgba(255, 255, 255, 0.4)",
              }}
            >
              neuvelabs
            </motion.h2>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showNeuveLabs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 lg:px-8 pt-32 pb-20 relative z-10"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Transform Your Business
                <br />
                <span className="text-white">With Innovation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
              >
                {/* Unlock the power of cutting-edge AI, Cloud & DevOps, Data
                Analytics, and Enterprise Software to accelerate your digital
                journey and achieve extraordinary results. */}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
