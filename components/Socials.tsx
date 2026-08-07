import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div className="w-full bg-dark-blue">
      <div className="mx-auto flex max-w-300 items-center justify-between px-5 py-2">
        
        {/* Left Info */}
        <div className="flex items-center gap-6 text-xs text-white/80">
           <span className="hidden items-center gap-2 sm:flex">
            <FaPhoneAlt className="text-sm" />
+91 62617 52771          </span>
        <a
  href="https://www.google.com/maps/dir/?api=1&destination=Global+Dental,Sector+338-D,+Near+Aakriti+Greens+Phase-2,+Salaiya,+Bhopal,+M.P,+462039"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden items-center gap-2 transition hover:text-[#56b5da] sm:flex"
>
  <FaMapMarkerAlt className="text-sm" />

  <span>
    Sector 338-D, Near Aakriti Greens Phase-2, Salaiya,
    Bhopal, M.P, 462039
  </span>
</a>


          <a
            href="mailto:contact@smileyteeths.com"
            className="flex items-center gap-2 transition hover:text-white text-red-400"
          >
            <FaEnvelope className="text-sm" />
            <span>dr.richaglobal@gmail.com</span>
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
