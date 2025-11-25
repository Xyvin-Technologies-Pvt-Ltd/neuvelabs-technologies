"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef(null);
  const [showNeuveLabs, setShowNeuveLabs] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure video is loaded
      video.load();

      // Handle video play promise
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Video is playing");
          })
          .catch((error) => {
            console.error("Error playing video:", error);
            // Try to play again after a short delay
            setTimeout(() => {
              video.play().catch((err) => {
                console.error("Retry play failed:", err);
              });
            }, 500);
          });
      }

      // Handle video loading errors
      const handleError = (e) => {
        console.error("Video loading error:", e);
      };

      const handleLoadedData = () => {
        console.log("Video loaded successfully");
        video.play().catch((error) => {
          console.error("Error playing after load:", error);
        });
      };

      const handleTimeUpdate = () => {
        if (video.currentTime >= 8 && video.currentTime < 20) {
          setShowNeuveLabs(true);
        } else {
          setShowNeuveLabs(false);
        }
      };

      video.addEventListener("error", handleError);
      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("error", handleError);
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-600/5 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Neuve Labs Reveal */}
      <AnimatePresence mode="wait">
        {showNeuveLabs ? (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
          >
            <h2
              className="text-7xl md:text-9xl font-bold text-white tracking-tighter"
              style={{
                fontFamily: "Goglast, sans-serif",
                textShadow: "0 0 80px rgba(59, 130, 246, 0.5)",
              }}
            >
              neuvelabs
            </h2>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 lg:px-8 relative z-10"
          >
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-medium text-blue-200 tracking-wide uppercase">
                  Future of Digital Engineering
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight"
              >
                Transform Your Business <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  With Innovation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Unlock the power of cutting-edge AI, Cloud & DevOps, and Data
                Analytics to accelerate your digital journey.
              </motion.p>

         
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
