import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const wa =
    "https://wa.me/9550361953?text=Hi%20I%20need%20to%20enquire%20about%20Raaz%20Unani%20Dawakhana";

  return (
    <section className="relative overflow-hidden bg-[#0a0f0c]">
      {/* Background Image */}
      <div
        className="min-h-[90vh] bg-cover bg-center relative flex items-center px-5 sm:px-8"
        style={{ backgroundImage: "url(/hero.jpg)" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 pt-10 md:pt-0">
          
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#D4AF37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              RAAZ UNANI DAWAKHANA
            </h1>
            <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
              Unani solution to all men’s sexual problems.
            </p>

            <a
              href={wa}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform mt-6"
            >
              WhatsApp Us
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
        <img
  src="/banner1.png"
  alt="Raaz Unani Dawakhana"
  className="w-[75%] sm:w-[50%] md:w-[80%] object-contain drop-shadow-2xl rounded-xl border border-[#D4AF37]/20"
/>

          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-[#2E3E21]" />
    </section>
  );
}
