import React, { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";

export default function Stats() {
  const yearsRef = useRef(null);
  const awardsRef = useRef(null);
  const clientsRef = useRef(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      const options = { duration: 3 };
      new CountUp(yearsRef.current, 20, options).start();
      new CountUp(awardsRef.current, 8, options).start();
      new CountUp(clientsRef.current, 25000, options).start();
    }
  }, [visible]);

  return (
    <section ref={sectionRef} className="py-12 text-center">
      {/* Heading */}
      <div
        className={`transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="w-16 h-1 bg-[#91B46C] mx-auto mb-2"></div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#d4af37] tracking-wide">
          STATS
        </h2>
      </div>

      {/* Stats Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-white mt-10 transition-all duration-1000 delay-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <div ref={yearsRef} className="text-4xl md:text-5xl font-extrabold">
            0
          </div>
          <p className="uppercase mt-2 font-semibold tracking-wide text-sm">
            Years of Experience
          </p>
        </div>

        <div>
          <div ref={awardsRef} className="text-4xl md:text-5xl font-extrabold">
            0
          </div>
          <p className="uppercase mt-2 font-semibold tracking-wide text-sm">
            Awards Received
          </p>
        </div>

        <div>
          <div ref={clientsRef} className="text-4xl md:text-5xl font-extrabold">
            0
          </div>
          <p className="uppercase mt-2 font-semibold tracking-wide text-sm">
            Happy Clients
          </p>
        </div>
      </div>
    </section>
  );
}
