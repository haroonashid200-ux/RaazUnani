import React from 'react';
import Stats from '../components/Stats';

const testimonials = [
  { name: "Raju", review: "My nervous weakness got solved" },
  { name: "Manoj", review: "Professional doctor,full privacy hospital" },
  { name: "Suresh", review: "Unani medicine helped.Now i am more energetic" },
];

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-white">
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl mt-8 font-extrabold mb-4 text-[#d4af37] text-center md:text-left">
        Who We Are
      </h1>

      {/* Content Block */}
      <div className="md:flex gap-12 items-center">
        {/* Text Column */}
        <div className="md:w-1/2">
          <p className="text-raazMuted leading-relaxed text-lg md:text-xl">
            Raaz Unani Dawakhana offers traditional Unani care focused on men’s sexual health.
            Our approach includes individualized diagnosis, herbal formulations, and lifestyle
            guidance. We combine classical knowledge with patient-centered care.
          </p>
        </div>

        {/* Image Column */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
          <img
            src="/r1.jpeg"
            alt="Raaz Unani Dawakhana - JustDial Certified"
            className="w-full max-w-[320px] h-auto object-cover rounded-xl shadow-xl border border-[#d4af37]/30"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16">
        <Stats />
      </div>

      {/* Testimonials */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#d4af37] text-center md:text-left">
          Testimonials
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-[rgba(255,255,255,0.05)] rounded-2xl hover:bg-[rgba(255,255,255,0.1)] transition flex flex-col items-center text-center"
            >
              {/* Invisible profile placeholder */}
              <div className="w-16 h-16 rounded-full bg-white/20 mb-4 flex items-center justify-center text-xl font-bold text-white/30">
                {t.name[0]}
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.name}</h3>
              <p className="text-raazMuted">{t.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
