"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default function FloatingFAQ() {
  const faqUrl = "https://atalispaybot.netlify.app/";

  return (
    <motion.a
      href={faqUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#00A86B] text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center hover:bg-[#009760] transition duration-300"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      title="Visit FAQs"
    >
      <FontAwesomeIcon icon={faQuestionCircle} className="text-2xl" />
    </motion.a>
  );
}
