import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        key="splash"
        initial={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
        animate={{ opacity: 1, clipPath: "circle(120% at 50% 50%)" }}
        exit={{ opacity: 0, clipPath: "circle(0% at 50% 50%)" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center 
                   bg-gradient-to-br from-blue-900 via-blue-900 to-green-700"
      >
        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          {/* <motion.img
            alt="Skyrina Logo"
            className="w-36 h-36 mb-6"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          /> */}

          {/* Company Name */}
          <motion.h1
            className="text-white text-3xl font-bold tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Skyrina
          </motion.h1>

          {/* Accent line */}
          <motion.div
            className="mt-4 h-1 w-16 bg-green-500 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />

          {/* Tagline */}
          <motion.p
            className="mt-4 text-sm text-white/80 max-w-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            Precision Apparel Manufacturing
          </motion.p>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
