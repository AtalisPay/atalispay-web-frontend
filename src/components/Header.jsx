"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Get Started");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    setButtonText("Coming Soon...");
    setTimeout(() => setButtonText("Get Started"), 2500);
  };

  return (
    <>
      {/* Overlay when mobile menu is open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 z-50
          transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            scrolled
              ? "w-[70%] bg-[rgba(200, 252, 233, 0.12)] backdrop-blur-2xl shadow-md"
              : "w-[90%] bg-[#00A86B] shadow-lg"
          }
          ${menuOpen ? "rounded-t-none" : "rounded-full"}
        `}
      >
        <div className="flex items-center justify-between px-6 py-3 h-[64px]">
          {/* Logo */}
          <div className="flex items-center space-x-3 select-none">
            <img
              src={
                scrolled
                  ? "/images/atalispay-logo-dark.png"
                  : "/images/atalispay-logo-light.png"
              }
              alt="AtalisPay Logo"
              className="w-32 h-32 object-contain"
            />
            {/* <span
              className={`text-lg font-semibold transition-colors duration-300 ${
                scrolled ? "text-[#00A86B]" : "text-white"
              }`}
            >
              AtalisPay
            </span> */}
          </div>

          {/* Desktop Nav */}
          <nav
            className={`hidden md:flex space-x-8 font-medium transition-colors duration-300 ${
              scrolled ? "text-[#00A86B]" : "text-white"
            }`}
          >
            <a href="/app" className="hover:text-gray-300 transition-colors">
              Home
            </a>

            <a href="/about" className="hover:text-gray-300 transition-colors">
              About
            </a>
            <a
              href="#waitlist"
              className="hover:text-gray-300 transition-colors"
            >
              Waitlist
            </a>
          </nav>

          {/* CTA Button (Desktop Only) */}
          <button
            onClick={handleButtonClick}
            className={`hidden md:inline font-semibold px-5 py-2 rounded-full transition-all duration-300 ${
              scrolled
                ? "bg-[#00A86B] text-white hover:bg-[#00925d]"
                : "bg-white text-[#00A86B] hover:bg-gray-100"
            }`}
          >
            {buttonText}
          </button>

          {/* Mobile Toggle */}
          <button
            className={`text-2xl md:hidden transition-colors duration-300 ${
              scrolled ? "text-[#00A86B]" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-[#00A86B] shadow-lg py-6 flex flex-col items-center space-y-4 text-white font-medium md:hidden rounded-b-3xl"
            >
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-200"
              >
                About
              </a>
              <a
                href="#waitlist"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-200"
              >
                Waitlist
              </a>

              <button
                onClick={handleButtonClick}
                className="bg-white/90 text-[#00A86B] font-semibold px-6 py-2 rounded-full hover:bg-white transition"
              >
                {buttonText}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
