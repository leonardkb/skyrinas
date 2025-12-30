import React from "react";
import { motion } from "framer-motion";

export function Technology() {
  const tech = [
    {
      title: "Template Machines",
      desc: "Ensure stitching precision even with less experienced operators.",
      image: "/template.png",
    },
    {
      title: "Automated Guided Vehicles (AGVs)",
      desc: "Optimize warehouse operations without manual labor.",
      image: "/robot.png",
    },
    {
      title: "Production Control & Scanning",
      desc: "Ensure traceability at every stage of production.",
      image: "/planning.png",
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
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20  overflow-hidden ">
      <motion.div
        className="max-w-6xl mx-auto px-6 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-3"
        >
          Technological Advancement
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Reducing errors and eliminating learning curves through deskilling
          technology.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={container}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-start"
        >
          {tech.map((item, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center"
            >
              {/* Card */}
              <motion.article
                className="w-full bg-white rounded-2xl overflow-hidden 
                shadow-md hover:shadow-2xl transition"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 md:h-60 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </motion.article>

              {/* Title */}
              <motion.h3
                variants={fadeUp}
                className="mt-4 text-lg md:text-xl font-semibold text-green-700"
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="mt-2 text-gray-600 max-w-xs text-center"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
