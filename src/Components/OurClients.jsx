import { motion } from "framer-motion";
import BackgroundLines from "./BackgroudLines";

export function OurClients() {
  const clients = [
    { name: "Nike", src: "/nike.png" },
    { name: "Reebok", src: "/reebok.png" },
    { name: "Gymshark", src: "/gym.png" },
    { name: "Vuori", src: "/vuori.png" },
    { name: "C&A", src: "/CA.png" },
    { name: "Target", src: "/target.jpg" },
    { name: "Cuidado con el Perro", src: "/dog.jpeg" },
    { name: "IKEA", src: "/ikea.png" },
    { name: "Disney", src: "/disney.png" },
  ];

  /* Animations */
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logoAnim = {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-white py-28 overflow-hidden ">
      {/* Background lines */}
      <BackgroundLines className="absolute inset-0 w-full h-full z-0 pointer-events-none" /> 

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* Title */}
        <motion.div variants={fadeUp} className="mb-16">
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-blue-800"
          >
            Our Clients
          </motion.h2>

          {/* Accent line */}
          <motion.div
            className="mt-4 h-1 w-16 bg-skGreen rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Logos */}
        <motion.div
          variants={container}
          className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-16 
          items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.img
              key={index}
              src={client.src}
              alt={client.name}
              variants={logoAnim}
              whileHover={{ y: -6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="h-14 md:h-20 w-auto opacity-90 hover:opacity-100"
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
