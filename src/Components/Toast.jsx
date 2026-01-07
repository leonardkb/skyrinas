import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ show, message }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed z-[110] bottom-6 left-1/2 -translate-x-1/2"
        >
          <div
            className="flex items-start gap-4 bg-white border border-blue-100 
            shadow-2xl rounded-2xl px-6 py-4 min-w-[320px]"
          >
            {/* Icon */}
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full 
              bg-gradient-to-br from-green-500 to-blue-600 text-white shadow-md"
            >
              ✓
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold text-blue-900">
                Consultation Request Received
              </p>
              <p className="text-sm text-gray-600 mt-1">
                {message || "Our team will contact you shortly to discuss next steps."}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

