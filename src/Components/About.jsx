import React from "react";
import { motion } from "framer-motion";
import BackgroundLines from "./BackgroudLines";

export default function About() {
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

  return (
    <section className="relative overflow-hidden py-20 scroll-smooth">
      <BackgroundLines />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Intro */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-gray-800 mb-4 text-xl">
            <span className="font-bold text-blue-700">
              Skyrina is a leading apparel manufacturing company
            </span>{" "}
            delivering high-quality garments for global markets.
          </p>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
            We combine skilled craftsmanship with advanced production technologies
            to ensure efficiency, consistency, and excellence. Our commitment to
            sustainability and innovation helps partners bring premium products to
            market reliably and responsibly.
          </p>
        </motion.div>

        {/* The Power of Vertical Integration - Simple Flowchart as per image */}
        <motion.div variants={fadeUp} className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-12">
            The Power of Vertical Integration
          </h2>

          {/* Simple Vertical Flowchart SVG */}
          <div className="flex justify-center mb-12">
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              className="mx-auto"
              style={{ background: "transparent" }}
            >
              {/* Box 1: SKYARN */}
              <rect
                x="100"
                y="10"
                width="200"
                height="65"
                rx="8"
                fill="white"
                stroke="#2563EB"
                strokeWidth="2"
                filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
              />
              <text x="200" y="40" textAnchor="middle" fill="#1E3A8A" fontSize="16" fontWeight="bold">
                SKYARN
              </text>
              <text x="200" y="60" textAnchor="middle" fill="#6B7280" fontSize="12">
                CYCLICAL
              </text>

              {/* Arrow 1 */}
              <line
                x1="200"
                y1="75"
                x2="200"
                y2="105"
                stroke="#2563EB"
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />

              {/* Box 2: Skytex */}
              <rect
                x="75"
                y="105"
                width="250"
                height="65"
                rx="8"
                fill="white"
                stroke="#2563EB"
                strokeWidth="2"
                filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
              />
              <text x="200" y="135" textAnchor="middle" fill="#1E3A8A" fontSize="16" fontWeight="bold">
                Skytex
              </text>
              <text x="200" y="155" textAnchor="middle" fill="#6B7280" fontSize="11">
                Manufacturer: S.A. 
              </text>

              {/* Arrow 2 */}
              <line
                x1="200"
                y1="170"
                x2="200"
                y2="200"
                stroke="#2563EB"
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />

              {/* Box 3: Sabrina */}
              <rect
                x="125"
                y="200"
                width="150"
                height="55"
                rx="8"
                fill="white"
                stroke="#2563EB"
                strokeWidth="2"
                filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
              />
              <text x="200" y="232" textAnchor="middle" fill="#1E3A8A" fontSize="16" fontWeight="bold">
                Sabrina
              </text>

              {/* Arrow 3 */}
              <line
                x1="200"
                y1="255"
                x2="200"
                y2="285"
                stroke="#2563EB"
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />

              {/* Box 4: Skyrina (only one) */}
              <rect
                x="100"
                y="285"
                width="200"
                height="55"
                rx="8"
                fill="white"
                stroke="#2563EB"
                strokeWidth="2"
                filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
              />
              <text x="200" y="318" textAnchor="middle" fill="#1E3A8A" fontSize="16" fontWeight="bold">
                Skyrina
              </text>

              {/* Arrowhead Definition */}
              <defs>
                <marker
                  id="arrow"
                  markerWidth="10"
                  markerHeight="7"
                  refX="10"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#2563EB" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Vertical Integration Statement */}
          <div className="text-center mt-6">
            <h4 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">
              Take advantage of vertical integration
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Control your entire supply chain, ensuring quality from yarn extrusion to final product — and guaranteeing repeatability.
            </p>
          </div>

          {/* Benefits List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Guaranteed raw material availability</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Shorter production lead times (from 45 days)</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Quality control at every production stage</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Shared costs across group companies</span>
            </div>
            <div className="flex items-center gap-3 md:col-span-2 md:justify-center">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Reduced dependency on external suppliers</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}