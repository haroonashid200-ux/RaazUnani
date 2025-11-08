import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    title: "Natural Treatment",
    text: "We use pure Unani herbal medicines, no side effects, safe for everyone.",
  },
  {
    title: "Personal Care",
    text: "Every patient gets personal attention and medicines tailored to their body and problem.",
  },
  {
    title: "Experienced Doctors",
    text: "Our Unani specialist has many years of experience in men’s health and stomach problems.",
  },
];

export default function ThreeSteps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-[#0a0f0c]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl font-bold mb-12"
        >
          Why Us
        </motion.h2>

        {/* ---------- PC / TABLET VIEW ---------- */}
        <div className="hidden sm:block">
          {/* Horizontal Line + Circles */}
          <div className="relative flex items-center justify-between mb-10">
            {/* Gold Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute left-0 right-0 h-[5px] bg-gradient-to-r from-[#D4AF37] to-[#C9A037] origin-left"
            />
            {items.map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.3 }}
                className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C9A037] flex items-center justify-center text-white shadow-lg shadow-[#D4AF37]/25"
              >
                {/* Check icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="w-8 h-8"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>
            ))}
          </div>

          {/* Text Below Circles */}
          <div className="grid grid-cols-3 gap-8 text-center">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.3 }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-raazMuted leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ---------- MOBILE VIEW ---------- */}
        <div className="flex sm:hidden flex-col gap-8 mt-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C9A037] flex items-center justify-center text-white shadow-lg shadow-[#D4AF37]/30 shrink-0">
                {/* Check icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="w-6 h-6"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-white text-left">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
