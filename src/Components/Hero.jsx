import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, when: "beforeChildren" },
    },
  };

  const line = {
    hidden: { y: 24, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  const subtleFloat = {
    animate: { y: [0, -12, 0] },
    transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
  };

  return (
    <section
      ref={ref}
      className="relative h-[90vh] flex items-center overflow-hidden bg-white scroll-smooth"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <motion.img
        src="/image.png"
        alt="Skyrina apparel manufacturing facility"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 14,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        aria-hidden
      />

      {/* Gradient Overlay – ONLY hero section */}
      <motion.div
        className="absolute inset-0 
        bg-gradient-to-r from-blue-900/85 via-blue-800/80 to-green-700/75"
        initial={{ opacity: 0.9 }}
        animate={{ opacity: [0.95, 0.85, 0.95] }}
        transition={{ duration: 10, repeat: Infinity }}
        aria-hidden
      />

      {/* Decorative floating accents */}
      <motion.div
        className="absolute -left-8 top-24 w-28 h-28 rounded-full 
        bg-gradient-to-tr from-green-400 to-blue-400 opacity-30 blur-xl"
        {...subtleFloat}
        aria-hidden
      />
      <motion.div
        className="absolute right-6 bottom-36 w-20 h-20 rounded-full 
        bg-gradient-to-tr from-blue-300 to-green-300 opacity-25 blur-md"
        animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-white">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="max-w-3xl"
        >
          <motion.h1
            id="hero-heading"
            className="text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            variants={line}
          >
            <motion.span className="block text-blue-200 mb-2" variants={line}>
              Welcome to
            </motion.span>

            <motion.span
              className="block bg-clip-text text-transparent 
              bg-gradient-to-r from-green-300 via-teal-200 to-cyan-200"
              variants={line}
            >
              Skyrina
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg max-w-xl leading-relaxed text-white/90"
            variants={line}
          >
            Skyrina delivers world-class apparel manufacturing backed by
            innovation, quality, and sustainability.
          </motion.p>

          <motion.div className="mt-8 flex gap-4" variants={line}>
            <motion.a
              href="#contact"
              className="rounded-md px-6 py-3 
              bg-gradient-to-r from-green-400 to-blue-400 
              text-blue-900 font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Consultation
            </motion.a>

            <motion.a
              href="#learn"
              className="rounded-md px-4 py-3 border border-white/25 
              hover:bg-white/10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Factory Tour
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave – marks end of gradient */}
      <motion.svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 100"
        fill="none"
        initial={{ y: 8, opacity: 0.9 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        aria-hidden
      >
        <path
          d="M0,40 C240,90 480,90 720,70 960,50 1200,40 1440,60 L1440,100 L0,100 Z"
          fill="#ffffff"
        />
      </motion.svg>
    </section>
  );
}
