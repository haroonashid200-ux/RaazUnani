import React from "react";
import { Instagram, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f0c] text-gray-400 text-sm py-6 border-t border-[#D4AF37]/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-4">
        {/* Left */}
        <p className="text-center sm:text-left">
          © 2025 <span className="text-[#D4AF37] font-semibold">Raaz Unani Dawakhana</span>
        </p>

        {/* Right - Social Links */}
        <div className="flex items-center gap-5">
          {/* Instagram */}
          <a
            href="#"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition"
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9550361953?text=Hi%20I%20need%20to%20enquire%20about%20Raaz%20Unani%20Dawakhana"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#D4AF37] transition"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>

          {/* Google Maps - Gold Button */}
         
        </div>
      </div>
    </footer>
  );
}
