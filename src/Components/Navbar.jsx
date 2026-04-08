import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleProductsClick = (e) => {
    e.preventDefault();
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <>
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
                {item.path ? (
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
                ) : (
                  <button
                    onClick={handleProductsClick}
                    className="cursor-pointer transition hover:text-green-300"
                  >
                    {item.name}
                  </button>
                )}
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
            <a 
              href="https://www.skytexmexico.com/en/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-300 transition-colors"
            >
              Skytex
            </a>
            <a 
              href="https://www.sabrina.com.tw/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-400 transition-colors"
            >
              Sabrina
            </a>
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
                    {item.path ? (
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
                    ) : (
                      <button
                        onClick={() => {
                          handleProductsClick();
                          setOpen(false);
                        }}
                        className="block cursor-pointer hover:text-green-300 w-full text-left"
                      >
                        {item.name}
                      </button>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Development Message Toast */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100]"
          >
            <div className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg shadow-lg font-medium">
              🚧 Products page is currently in development
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}