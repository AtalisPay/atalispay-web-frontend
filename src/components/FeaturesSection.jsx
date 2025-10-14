"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faShieldAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function FeaturesSection() {
  const features = [
    {
      icon: faBolt,
      title: "Instant Transfers",
      desc: "Send and receive money across Africa instantly — no delays, no stress.",
    },
    {
      icon: faShieldAlt,
      title: "Bank-Grade Security",
      desc: "Your funds and data are protected by industry-leading encryption technology.",
    },
    {
      icon: faMobileAlt,
      title: "All-in-One Wallet",
      desc: "Manage your payments, bills, and cards from one simple and beautiful dashboard.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#00A86B]"
        >
          Why AtalisPay?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
        >
          Built for Africa’s digital generation — fast, secure, and beautifully
          designed for modern financial growth.
        </motion.p>

        {/* Feature Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E6F8EF] text-[#00A86B] mb-6">
                <FontAwesomeIcon icon={feature.icon} size="2x" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
