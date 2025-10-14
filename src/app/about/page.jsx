"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHandshake, faEye, faBullseye, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-[#f8fffa] to-[#eafff3] px-6 md:px-20 py-20 flex flex-col items-center text-center md:text-left mt-0">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00A86B]/20 blur-[160px] rounded-full"></div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold text-[#00A86B] mb-10"
      >

        <img
              src={
                "/images/AtalisL.png"
              }
              alt="AtalisPay Logo"
              className="w-20 h-20 object-contain text-center mx-auto mb-4 mt-0"
            />
        About AtalisPay
      </motion.h1>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="max-w-4xl bg-white/80 backdrop-blur-lg shadow-lg rounded-3xl p-8 md:p-12 leading-relaxed text-gray-700"
      >
        <p className="mb-4">
          At <strong className="text-[#00A86B]">AtalisPay</strong>, we’re on a mission to make financial freedom accessible to everyone. 
          Our AI-powered payment platform simplifies money management with seamless access via 
          WhatsApp, Telegram, iOS/Android apps, and a Progressive Web App.
        </p>

        <p className="mb-4">
          From voice-activated payments and receipt scanning to local dialect support and gamified 
          savings challenges, we’re designed to serve all—especially the underbanked.
        </p>

        <p className="mb-4">
          Founded with a vision to transform finance, AtalisPay combines cutting-edge AI, 
          military-grade security, and partnerships with top banks and crypto exchanges 
          to deliver fast, secure, and inclusive services.
        </p>

        <p className="mb-4">
          Whether you’re paying bills, tracking expenses, or joining our{" "}
          <span className="font-semibold text-[#00A86B]">#AtalisPayDaily</span> community, 
          we’re here to empower your financial journey.
        </p>

        <p className="mt-6 text-gray-600 italic">
          Join us and experience a smarter, more inclusive way to manage money.
        </p>

        <div className="mt-8 space-y-2 text-sm md:text-base">
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="text-[#00A86B] mr-2" />
            <strong>Contact:</strong> info@atalispay.com
          </p>
          <p>
            <FontAwesomeIcon icon={faHandshake} className="text-[#00A86B] mr-2" />
            <strong>Partnerships:</strong> partners@atalispay.com
          </p>
        </div>
      </motion.div>

      {/* Vision / Mission / Promise Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl text-center"
      >
        {[
          {
            icon: faEye,
            title: "Our Vision",
            text: "To redefine financial accessibility across Africa using smart, inclusive technology.",
          },
          {
            icon: faBullseye,
            title: "Our Mission",
            text: "To empower individuals and businesses with simple, secure, and borderless digital payments.",
          },
          {
            icon: faShieldAlt,
            title: "Our Promise",
            text: "Innovation, inclusivity, and integrity — ensuring financial freedom for all.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white/80 border border-[#00A86B]/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <FontAwesomeIcon icon={card.icon} className="text-[#00A86B] text-3xl mb-3" />
            <h3 className="text-xl font-semibold text-[#00A86B] mb-3">{card.title}</h3>
            <p className="text-gray-700">{card.text}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
