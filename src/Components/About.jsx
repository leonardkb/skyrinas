import React from "react";
import { motion } from "framer-motion";
import BackgroundLines from "./BackgroudLines";

export default function About() {
  const pillars = [
    {
      title: "Shorter production lead times",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 16l-3-3 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Guaranteed raw material availability",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 19h14v-2H5v2zM7 7h3v8H7V7zm7 4h3v4h-3v-4z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Quality control at every step",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l3 6 6 .5-4.5 4 1.5 6L12 16l-6 2 1.5-6L3 8.5 9 8 12 2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Cost efficiency through vertical integration",
      svg: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 6h2v6h-2V8zm0 8h2v2h-2v-2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  /* Animations */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 scroll-smooth">
      <BackgroundLines />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Intro */}
        <motion.p
          variants={fadeUp}
          className="text-gray-800 mb-4 text-xl"
        >
          <span className="font-bold text-blue-700">
            Skyrina is a leading apparel manufacturing company
          </span>{" "}
          delivering high-quality garments for global markets.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-base md:text-lg"
        >
          We combine skilled craftsmanship with advanced production technologies
          to ensure efficiency, consistency, and excellence. Our commitment to
          sustainability and innovation helps partners bring premium products to
          market reliably and responsibly.
        </motion.p>

        {/* Spacer */}
        <div className="mt-12" />

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl font-bold text-blue-800 mb-10"
        >
          Our Benefits
        </motion.h2>

        {/* Benefits Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
          gap-12 items-start"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -6, scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              className="flex flex-col items-center text-center px-4 cursor-pointer"
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-green-700 text-white 
                flex items-center justify-center mb-6 shadow-lg"
                whileHover={{ rotate: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {p.svg}
              </motion.div>

              <h4 className="font-semibold text-sm md:text-base text-gray-900 leading-tight max-w-[10rem]">
                {p.title}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

