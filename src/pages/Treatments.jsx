import React, { useState } from "react";
import { Link } from "react-router-dom";

const treatments = [
  { id: "sexual-weakness", name: "Sexual Weakness", img: "ss1" },
  { id: "body-weakness-fatigue", name: "Body Weakness / Fatigue", img: "ss2" },
  { id: "erectile-dysfunction", name: "Erectile Dysfunction", img: "ss3" },
  { id: "weight-gain", name: "Weight Gain (Underweight)", img: "ss44" },
  { id: "premature-ejaculation", name: "Premature Ejaculation", img: "ss5" },
  { id: "nightfall", name: "Nightfall (Wet Dreams)", img: "ss6" },
  { id: "stress-nerve-weakness", name: "Stress & Nerve Weakness", img: "ss7" },
  { id: "sperm-in-urine", name: "Sperm in Urine / Dhatu Rog", img: "ss8" },
  { id: "impotency-fertility", name: "Impotency & Fertility", img: "ss9" },
  { id: "digestive-problems", name: "Digestive Problems", img: "ss10" },
  { id: "diabetes-related-weakness", name: "Diabetes Related Weakness", img: "ss11" },
];

export default function Treatments() {
  return (
    <div className="page-content pt-24 bg-[#0a0f0c] min-h-screen">
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-white text-center mb-10">
            All Treatments
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {treatments.map((t) => (
              <TreatmentCard key={t.id} treatment={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
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
      className="block group rounded-2xl overflow-hidden border border-[#D4AF37]/30 hover:border-[#FFD700] transition-all duration-300 bg-[#D4AF37]"
    >
      {/* Image container (transparent background) */}
      <div className="h-48 w-full flex items-center justify-center overflow-hidden">
        <img
          src={src}
          alt={treatment.name}
          onError={handleError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Text box (kept same) */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-black mb-2">
          {treatment.name}
        </h3>
        <h2 className="text-black/80 text-sm">
          Click to read more about {treatment.name}.
        </h2>
      </div>
    </Link>
  );
}
