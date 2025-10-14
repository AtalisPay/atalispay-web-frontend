"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left min-h-screen px-6 md:px-20 overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#00A86B]">
          Powering Africa’s <br className="hidden md:block" /> Digital Payments
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Secure, fast, and borderless financial solutions designed for the next
          generation of African businesses and individuals.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#waitlist"
            className="bg-[#00A86B] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#00925d] transition"
          >
            Join Waitlist
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/about"
            className="bg-white text-[#00A86B] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Learn More
          </motion.a>
        </div>
      </motion.div>

      {/* Right Illustration — Floating Phone UI */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex justify-center items-center mt-12 md:mt-0 w-full md:w-1/2"
      >
        {/* Soft Green Glow */}
        <div className="absolute w-[500px] h-[500px] bg-[#00A86B]/20 blur-[150px] rounded-full top-1/2 -translate-y-1/2 -z-10"></div>

        {/* Floating app image */}
        <motion.img
          src="/images/atalispay-ui.png"
          alt="AtalisPay App UI"
          className="bottom-[-45px] relative w-[800px] md:w-[900px] drop-shadow-2xl rounded-3xl"
          initial={{ y: 15 }}
          animate={{ y: [15, -10, 15] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-[#f9fffc] to-[#f1fff6]" />
    </section>
  );
}
