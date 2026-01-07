import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ConsultationModal from "./ConsultationModal";
import Toast from "./Toast";

export default function Hero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const [openModal, setOpenModal] = useState(false);
  const [toast, setToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, when: "beforeChildren" } },
  };

  const line = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 14 } },
  };

  const handleSuccess = () => {
    // close modal handled inside modal
    setToast(true);

    // Hide toast after 2s and navigate home
    setTimeout(() => {
      setToast(false);
      navigate("/"); // return to home page
    }, 2000);
  };

  return (
    <section
      ref={ref}
      className="relative h-[90vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <video
          src="https://s06keky88ey7lgeh.public.blob.vercel-storage.com/ESPAN%CC%83OL%20%284K%29.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

      {/* Gradient overlay (only within hero up to wave) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-green-700/80"
        initial={{ opacity: 0.9 }}
        animate={{ opacity: [0.95, 0.82, 0.95] }}
        transition={{ duration: 10, repeat: Infinity }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-white">
        <motion.div variants={container} initial="hidden" animate={controls} className="max-w-3xl">
          <motion.h1
            id="hero-heading"
            className="text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            variants={line}
          >
            <motion.span className="block text-blue-200 inline-block mr-2" variants={line}>
              Welcome to
            </motion.span>
            <motion.span
              className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-teal-200 to-cyan-200"
              variants={line}
              style={{ WebkitBackgroundClip: "text" }}
            >
              Skyrina!
            </motion.span>
          </motion.h1>

          <motion.p className="mt-6 text-lg max-w-xl leading-relaxed text-white/90" variants={line}>
            Skyrina delivers world-class apparel manufacturing backed by innovation,
            quality, and sustainability.
          </motion.p>

          <motion.div className="mt-8 flex items-center gap-4" variants={line}>
            <motion.button
              type="button"
              onClick={() => setOpenModal(true)}
              className="inline-flex items-center gap-3 rounded-md px-6 py-3 
              bg-gradient-to-r from-green-400 to-blue-400 text-blue-900 font-semibold shadow-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              Book a consultation
            </motion.button>

            <motion.a
              href="#learn"
              className="inline-flex items-center gap-2 rounded-md px-4 py-3
              border border-white/20 hover:bg-white/10 font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Factory Tour
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <motion.svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 100"
        fill="none"
        initial={{ y: 8, opacity: 0.85 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        aria-hidden
      >
        <path
          d="M0,40 C240,90 480,90 720,70 960,50 1200,40 1440,60 L1440,100 L0,100 Z"
          fill="rgba(255,255,255,1)"
        />
      </motion.svg>

      {/* Modal + Toast */}
      <ConsultationModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={handleSuccess}
      />

      <Toast show={toast} message="You will be contacted shortly." />
    </section>
  );
}
