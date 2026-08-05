import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div className="w-full bg-dark-blue">
      <div className="mx-auto flex max-w-300 items-center justify-between px-5 py-2">
        
        {/* Left Info */}
        <div className="flex items-center gap-6 text-xs text-white/80">
          <span className="hidden items-center gap-2 sm:flex">
            <FaMapMarkerAlt className="text-sm" />
            95 Brooklyn, New York 11213, US
          </span>

          <a
            href="mailto:contact@smileyteeths.com"
            className="flex items-center gap-2 transition hover:text-white text-red-400"
          >
            <FaEnvelope className="text-sm" />
            <span>contact@smileyteeths.com</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 text-white">
          <a
            href="#"
            aria-label="Instagram"
            className="transition hover:text-white text-pink-500"
          >
            <FaInstagram size={14} />
          </a>

          <a
            href="#"
            aria-label="Facebook"
            className="transition hover:text-white text-blue-400"
          >
            <FaFacebookF  size={14} />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="transition hover:text-white text-cyan-400"
          >
            <FaTwitter size={14} />
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            className="transition hover:text-white text-blue-400"
          >
            <FaLinkedinIn size={14} />
          </a>
        </div>

      </div>
    </div>
  );
}
