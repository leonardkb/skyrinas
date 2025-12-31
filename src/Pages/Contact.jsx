import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 max-w-2xl mx-auto text-blue-100"
          >
            Let’s build strong partnerships and deliver excellence together.
          </motion.p>
        </div>

        {/* Bottom wave */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,40 C120,70 320,10 520,30 760,55 920,90 1140,65 1280,50 1380,40 1440,35 L1440,100 L0,100 Z"
          />
        </svg>
      </section>

      {/* Contact section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* Left info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-700 leading-relaxed max-w-md">
              Whether you’re a global brand, sourcing partner, or retailer,
              Skyrina is ready to support your growth with speed, quality,
              and reliability.
            </p>

            <div className="mt-10 space-y-6">
              <InfoCard title="Location" value="Mexico" />
              <InfoCard title="Email" value="info@skyrina.com" />
              <InfoCard title="Leadership" value="Salvador Cassab" />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100"
          >
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">
              Send a Message
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              <Input label="First Name" placeholder="John" />
              <Input label="Last Name" placeholder="Doe" />
            </div>

            <div className="mt-6">
              <Input label="Email" placeholder="john@company.com" />
            </div>

            <div className="mt-6">
              <Input label="Company" placeholder="Brand / Organization" />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your requirements..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 w-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg"
            >
              Submit Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* Reusable components */

function InfoCard({ title, value }) {
  return (
    <div className="bg-green-600 rounded-xl p-5 border border-blue-100 hover:shadow-lg transition">
      <p className="text-sm text-blue-50">{title}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-2">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>
  );
}
