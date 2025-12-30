import { motion } from "framer-motion";

export function DesignPrototyping() {
  const features = [
    "Sampling & prototyping",
    "Embroidery & logo applications",
    "Specialty garment finishes",
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-sky-200 
      via-green-600 to-blue-800 py-28 pb-40 overflow-hidden text-white "
    >
      {/* decorative blobs */}
      <motion.div
        className="absolute -top-28 -left-28 w-96 h-96 bg-blue-600 
        opacity-20 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-28 -right-20 w-72 h-72 bg-indigo-700
        opacity-15 rounded-full blur-2xl pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Title – masked reveal */}
        <motion.h2
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold drop-shadow-lg tracking-tight text-blue-50"
        >
          Design & Prototyping
        </motion.h2>

        {/* Divider – grows from center */}
        <motion.div
          className="mx-auto my-6 h-1 w-48 bg-blue-300 rounded-full shadow-md"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          style={{ transformOrigin: "center" }}
        />

        {/* Description – soft blur reveal */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="text-sky-100 max-w-2xl mx-auto mb-14"
        >
          Bring your ideas to life with the support of a specialized product
          development team and a dedicated pre-production environment.
        </motion.p>

        {/* Cards – depth rise animation */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-slate-900/30 
              via-indigo-900/22 to-black/20 backdrop-blur-sm 
              rounded-2xl p-8 shadow-lg border border-white/10"
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 
                rounded-full bg-blue-500 text-white text-2xl mb-4 shadow-sm"
                animate={{ rotate: [0, 6, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✓
              </motion.div>

              <h3 className="text-lg font-semibold text-white/95">
                {item}
              </h3>

              <p className="text-sky-100 mt-3 text-sm">
                Fast turnaround, expert finishing and high-fidelity samples to
                validate designs.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

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
