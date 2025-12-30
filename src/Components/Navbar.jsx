import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2"
        >
          <Link to="/" className="text-xl font-bold">
            Skyrina
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {menu.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer transition ${
                    isActive
                      ? "text-green-300"
                      : "hover:text-green-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        {/* Parent brands */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden md:flex gap-3 font-semibold"
        >
          <span className="text-blue-200">Skytex</span>
          <span className="text-green-300">Sabrina</span>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-blue-900/95 text-white overflow-hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="flex flex-col gap-4 px-6 py-6"
            >
              {menu.map((item) => (
                <motion.li
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block cursor-pointer ${
                        isActive
                          ? "text-green-300"
                          : "hover:text-green-300"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
