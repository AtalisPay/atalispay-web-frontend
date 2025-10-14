"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function WaitlistSection() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    try {
      const API = process.env.NEXT_PUBLIC_API_URL;
      const { name, email } = formData;
      const res = await fetch(`${API}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "" });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Server error, please try again later.");
    }
  };

  return (
    <section
      id="waitlist"
      className="py-24 px-6 md:px-12 lg:px-20 bg-gray-50 text-gray-800"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-[#00A86B]"
        >
          Join the AtalisPay Waitlist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 text-base md:text-lg max-w-xl mx-auto"
        >
          Be the first to experience Africa’s most seamless and secure digital
          payment system.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="relative w-full sm:w-auto flex-grow">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full sm:w-60 lg:w-72 pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A86B] transition"
              required
            />
          </div>

          <div className="relative w-full sm:w-auto flex-grow">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full sm:w-72 lg:w-80 pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A86B] transition"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-gray-400 cursor-wait"
                : "bg-[#00A86B] hover:bg-[#00925D]"
            } text-white font-semibold px-8 py-3 rounded-full shadow-md transition w-full sm:w-auto whitespace-nowrap text-base sm:text-lg`}
          >
            {loading ? "Submitting..." : "Join Now"}
          </motion.button>
        </motion.form>

        {/* Success Message */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mt-6 flex items-center justify-center text-[#00A86B] font-semibold text-lg"
            >
              <FontAwesomeIcon icon={faCheckCircle} className="mr-2" />
              You’ve been added to the waitlist!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
