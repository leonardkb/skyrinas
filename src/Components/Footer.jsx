import { motion } from "framer-motion";

export function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-green-700 text-white overflow-hidden scroll-smooth">
      {/* Main footer */}
      <motion.div
        className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* Company branding */}
        <motion.div variants={item}>
          <h2 className="text-3xl font-bold mb-2">Skyrina</h2>
          <p className="text-sm opacity-90">
            México, S.A. de C.V.
          </p>
        </motion.div>

        {/* Company links */}
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">
            Company
          </h3>
          <ul className="space-y-4 text-sm opacity-90">
            {["About", "Services", "Contact", "Privacy Policy"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="hover:underline hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Skytex Group */}
        <motion.div variants={item}>
          <h3 className="text-lg font-semibold mb-6 uppercase tracking-wide">
            Skytex Group
          </h3>
          <ul className="space-y-4 text-sm opacity-90">
            {[
              "Skytex Mexico",
              "Skymatt",
              "Skyfelt",
              "Skyrug",
              "Skyenergy",
              "Skyrina",
              "SkyYarn",
            ].map((brand) => (
              <li
                key={brand}
                className={`hover:underline cursor-pointer transition ${
                  brand === "Skyrina" ? "font-semibold" : ""
                }`}
              >
                {brand}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        className="border-t border-white/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm opacity-80 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} Skyrina México, S.A. de C.V. All rights reserved.
          </p>
          <p>
            Developed by <span className="font-semibold">Leonard</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
