import React, { useState } from "react";
import { motion } from "framer-motion";

export function GlobalPresence() {
  const mapSrc = "/worldmap.png";

  const spots = [
    { id: "Mexico", left: "20%", top: "56%" },
    { id: "Taiwan", left: "80%", top: "32%" },
    { id: "Cambodia", left: "75%", top: "44%" },
    { id: "Vietnam", left: "73%", top: "41%" },
    { id: "China", left: "76%", top: "36%" },
  ];

  const [active, setActive] = useState("Mexico");

  /* Animations */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
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

  const mapAnim = {
    hidden: { opacity: 0, scale: 0.97 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const pinAnim = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 18 },
    },
  };

  return (
    <section className="bg-blue-100 py-20 relative overflow-hidden ">
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl font-semibold text-blue-800 mb-4"
        >
          Our Global Presence
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-600 mb-8"
        >
          Choose the most strategic production location based on cost,
          logistics, and delivery time.
        </motion.p>

        {/* Map */}
        <motion.div
          variants={mapAnim}
          className="relative w-full max-w-4xl mx-auto h-[420px]"
        >
          <img
            src={mapSrc}
            alt="world map"
            className="w-full h-full object-contain pointer-events-none select-none"
            aria-hidden="true"
          />

          {/* Pins */}
          {spots.map((s, i) => (
            <motion.button
              key={s.id}
              variants={pinAnim}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActive(s.id)}
              style={{ left: s.left, top: s.top }}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 
              flex items-center justify-center z-30 rounded-full shadow-lg
              ${active === s.id
                ? "w-11 h-11 bg-green-700"
                : "w-10 h-10 bg-blue-800"}
              `}
              aria-label={s.id}
            >
              {/* Pulse ring for active */}
              {active === s.id && (
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-green-300"
                  animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}

              <span className="w-2 h-2 rounded-full bg-white relative z-10" />
            </motion.button>
          ))}
        </motion.div>

        {/* Location buttons */}
        <motion.div
          variants={container}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {spots.map((s) => (
            <motion.button
              key={s.id}
              variants={fadeUp}
              onClick={() => setActive(s.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition text-sm md:text-base
                ${active === s.id
                  ? "bg-blue-800 text-white"
                  : "bg-white text-blue-800 border border-blue-200"}
              `}
            >
              {s.id}
            </motion.button>
          ))}
        </motion.div>

        {/* Active text */}
        <motion.p
          variants={fadeUp}
          className="text-gray-500 mt-4 text-sm"
        >
          Selected location:{" "}
          <span className="font-semibold text-gray-700">
            {active}
          </span>
        </motion.p>
      </motion.div>

      {/* Bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,90 480,90 720,70 960,50 1200,40 1440,60 L1440,100 L0,100 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
