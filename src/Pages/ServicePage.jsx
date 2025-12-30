import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { OurClients } from "../Components/OurClients";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ServicePage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* ================= VIDEO HERO ================= */}
      <section className="relative h-[85vh] overflow-hidden">
        <video
          src="https://s06keky88ey7lgeh.public.blob.vercel-storage.com/ESPAN%CC%83OL%20%284K%29.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/75 to-green-700/70" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            className="max-w-4xl text-white"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-extrabold"
            >
              Our Services
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-blue-100"
            >
              End-to-end apparel manufacturing powered by technology,
              speed, and vertical integration.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,90 480,90 720,70 960,50 1200,40 1440,60 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-16"
          >
            What We Offer
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Fabric & Raw Material Integration",
                desc: "Direct access to Skytex fabrics ensures availability, consistency, and reduced lead times.",
              },
              {
                title: "Design & Prototyping",
                desc: "Dedicated pre-production teams for sampling, embroidery, and specialty finishes.",
              },
              {
                title: "Garment Manufacturing",
                desc: "High-capacity production with deskilled systems and advanced template machines.",
              },
              {
                title: "Quality Control",
                desc: "Inspection and traceability at every stage of production.",
              },
              {
                title: "Production Planning & Scanning",
                desc: "Real-time production tracking and control systems for accuracy and efficiency.",
              },
              {
                title: "Logistics & Fast Delivery",
                desc: "Proximity to the U.S. enables delivery within 36 hours from Mexico.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-blue-100 
                           hover:-translate-y-1 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR CUSTOMERS ================= */}
      {/* <section className="bg-blue-50 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <OurClients />
        </motion.div>
      </section> */}

      <Footer />
    </main>
  );
}
