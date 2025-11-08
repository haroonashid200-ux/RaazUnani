import React, { useState } from "react";
import { Link } from "react-router-dom";

const treatments = [
  { id: "sexual-weakness", name: "Sexual Weakness", img: "ss1" },
  { id: "body-weakness-fatigue", name: "Body Weakness", img: "ss2" },
  { id: "erectile-dysfunction", name: "Erectile Dysfunction", img: "ss3" },
];

export default function TreatmentsPreview() {
  return (
    <section className="py-12 bg-[#0a0f0c]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Our Treatments
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {treatments.map((t) => (
            <TreatmentCard key={t.id} treatment={t} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/treatments"
            className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#DCB95B] text-[#0a0f0c] px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-out"
          >
            View More Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}

function TreatmentCard({ treatment }) {
  const [src, setSrc] = useState(`/${treatment.img}.jpg`);
  const [attempt, setAttempt] = useState(0);
  const extensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

  const handleError = () => {
    const nextAttempt = attempt + 1;
    if (nextAttempt < extensions.length) {
      setSrc(`/${treatment.img}${extensions[nextAttempt]}`);
      setAttempt(nextAttempt);
    } else {
      setSrc("/fallback.jpg");
    }
  };

  return (
    <Link
      to={`/treatments/${treatment.id}`}
      className="block group rounded-2xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#FFD700] transition-all duration-300 ease-out bg-gradient-to-b from-[#D4AF37] to-[#C9A037]"
    >
      {/* Image */}
      <div className="h-40 sm:h-44 overflow-hidden">
        <img
          src={src}
          alt={treatment.name}
          onError={handleError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Body */}
      <div className="p-3 sm:p-5">
        <h3 className="text-sm sm:text-xl font-semibold text-[#0a0f0c] mb-1 sm:mb-2">
          {treatment.name}
        </h3>
        <p className="text-[#0a0f0c]/80 text-xs sm:text-sm leading-relaxed">
          Click to read more.
        </p>
      </div>
    </Link>
  );
}
