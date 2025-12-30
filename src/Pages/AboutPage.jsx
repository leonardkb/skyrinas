import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import BackgroundLines from "../Components/BackgroudLines";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  return (
    <main className="bg-white scroll-smooth">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white pt-36 pb-40">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            About Skyrina
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-6 max-w-3xl mx-auto text-blue-100"
          >
            A vertically integrated apparel manufacturing partner delivering
            speed, quality, and consistency to global brands.
          </motion.p>
        </div>

        {/* Bottom wave */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C240,90 480,90 720,70 960,50 1200,40 1440,60 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24">
        
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-800 mb-6"
          >
            Who We Are
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 leading-relaxed max-w-4xl"
          >
            <strong className="text-green-600">
              Skyrina México, S.A. de C.V.
            </strong>{" "}
            was established in 2023 as a strategic joint venture between{" "}
            <strong className="text-green-600">Skytex Mexico</strong> and{" "}
            <strong className="text-green-600">Sabrina Taiwan</strong>.
            Our mission is to redefine apparel manufacturing in the Americas by
            combining advanced Asian production standards with the logistical
            advantages of Mexico.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-700 leading-relaxed max-w-4xl"
          >
            We specialize in high-quality activewear and fashion garments,
            providing full production coverage from yarn to finished product.
            Skyrina is the first Mexican activewear maquila to operate with
            cutting-edge technology and deskilled production systems at scale.
          </motion.p>
        </div>
      </section>

      {/* ================= PARENT COMPANIES ================= */}
      {/* ================= PARENT COMPANIES ================= */}
<section className="bg-blue-50 py-24">
  <div className="max-w-6xl mx-auto px-6">

    {/* Centered Section Title */}
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-16"
    >
      Our Parent Companies
    </motion.h2>

    {/* Cards */}
    <div className="grid gap-12 md:grid-cols-2 ">
      {[{
        title: "Skytex Group",
        content: (
          <>
            Founded in 1994, <strong className="text-green-700">Skytex</strong> is one of the largest
            synthetic fabric manufacturers in the Americas with over{" "}
            <strong className="text-green-700">100,000 m²</strong> of production space and a monthly
            capacity of <strong className="text-green-700">6 million linear meters</strong>.
          </>
        )
      }, {
        title: "Sabrina Taiwan",
        content: (
          <>
            <strong className="text-green-700">Sabrina Taiwan</strong> brings decades of expertise in
            precision garment manufacturing, operational excellence, and
            Asian-level production discipline.
          </>
        )
      }].map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-white rounded-2xl p-8 shadow-lg border  border-2 border-blue-300 
                     hover:-translate-y-1 transition"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            {item.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {item.content}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* ================= VERTICAL INTEGRATION ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-800 mb-8"
          >
            The Power of Vertical Integration
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-gray-700 leading-relaxed"
            >
              Skyrina operates under a fully integrated production model —
              from recycled yarn extrusion to fabric, garment manufacturing,
              and final inspection — ensuring traceability, speed, and
              cost efficiency.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4 text-gray-700"
            >
              {[
                "Guaranteed raw material availability",
                "Shorter production lead times (from 45 days)",
                "Quality control at every production stage",
                "Shared costs across group companies",
                "Reduced dependency on external suppliers",
              ].map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="bg-green-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-800 mb-12"
          >
            Why Work With Skyrina
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "350+ skilled seamstresses led by Taiwan-based experts",
              "Dedicated pre-production & sample development",
              "300,000–400,000 units monthly capacity",
              "Advanced deskilling & template machines",
              "Full production traceability",
              "Delivery to USA in less than 36 hours",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-6 rounded-xl shadow-md border  border-2 border-blue-300 hover:-translate-y-1 transition"
              >
                <p className="text-gray-700 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-800 mb-4"
          >
            Leadership
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            Skyrina is led by <strong>Salvador Cassab</strong>, whose leadership
            drives strategic growth, operational excellence, and long-term
            partnerships with global brands.
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
