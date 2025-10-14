"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-6 md:px-20 text-center md:text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <div className="flex items-center space-x-3">
            <img
              src="/images/atalispay-logo-dark.png"
              alt="AtalisPay Logo"
              className="w-32 h-auto"
            />
          </div>
          <p className="text-gray-600 max-w-sm">
            Simplifying digital payments across Africa — fast, secure, and
            inclusive.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-center space-y-2 font-medium text-gray-700">
          <a href="/about" className="hover:text-[#00A86B] transition">
            About Us
          </a>
          <a href="#waitlist" className="hover:text-[#00A86B] transition">
            Join Waitlist
          </a>
          <a
            href="mailto:info@atalispay.com"
            className="hover:text-[#00A86B] transition"
          >
            Contact Us
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-6 text-gray-500 text-xl">
          <a
            href="https://facebook.com/AtalisPay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00A86B] transition"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://x.com/AtalisPay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00A86B] transition"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://linkedin.com/company/AtalisPay"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00A86B] transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mt-10 pt-6 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#00A86B]">AtalisPay</span>. All
        rights reserved.
      </div>
    </footer>
  );
}
