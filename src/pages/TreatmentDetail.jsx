import React, { useState } from "react";
import { useParams } from "react-router-dom";

const treatments = {
  "sexual-weakness": {
    title: "Sexual Weakness",
    img: "ss1",
    content:
      "Unani medicine strengthens reproductive health using tonics (Muqawwi-e-Bah), nervine tonics, and diet-based treatments. The therapy focuses on restoring balance, vitality, and confidence naturally.",
  },
  "body-weakness-fatigue": {
    title: "Body Weakness / Fatigue",
    img: "ss2",
    content:
      "This treatment rejuvenates the body using herbal tonics, energy-restoring Majun, and lifestyle correction. It improves stamina, sleep quality, and overall vitality.",
  },
  "erectile-dysfunction": {
    title: "Erectile Dysfunction",
    img: "ss3",
    content:
      "ED is treated by strengthening the nervous system and improving blood flow through herbal tonics and oils. The focus is on long-term recovery, not short-term stimulation.",
  },
  "weight-gain": {
    title: "Weight Gain (Underweight)",
    img: "ss44",
    content:
      "Unani weight-gain therapy enhances digestion and absorption with natural tonics, herbs, and mineral preparations — promoting healthy and sustained weight gain.",
  },
  "premature-ejaculation": {
    title: "Premature Ejaculation",
    img: "ss5",
    content:
      "Herbal tonics, nerve-strengthening regimens, and specific local applications are used to increase control and stamina naturally, without side effects.",
  },
  nightfall: {
    title: "Nightfall (Wet Dreams)",
    img: "ss6",
    content:
      "Nightfall is treated through nerve-calming tonics and nutritional therapies that restore control, reduce anxiety, and balance body heat and temperament.",
  },
  "stress-nerve-weakness": {
    title: "Stress & Nerve Weakness",
    img: "ss7",
    content:
      "Unani therapy uses brain tonics, natural calming herbs, and rejuvenators that strengthen nerves and improve mental peace and physical strength.",
  },
  "sperm-in-urine": {
    title: "Sperm in Urine / Dhatu Rog",
    img: "ss8",
    content:
      "Unani formulations improve seminal retention and reproductive organ strength. The approach restores normal function by balancing body heat and nutrition.",
  },
  "impotency-fertility": {
    title: "Impotency & Fertility",
    img: "ss9",
    content:
      "Fertility issues are addressed through tonics that enhance sperm count, motility, and reproductive health while improving hormonal balance naturally.",
  },
  "digestive-problems": {
    title: "Digestive Problems",
    img: "ss10",
    content:
      "This therapy strengthens the stomach and liver using mild laxatives, herbs, and dietary guidance — improving digestion and removing toxins naturally.",
  },
  "diabetes-related-weakness": {
    title: "Diabetes Related Weakness",
    img: "ss11",
    content:
      "Herbal formulations regulate sugar levels and strengthen the body’s energy. Unani doctors focus on improving stamina, circulation, and nerve function.",
  },
};

export default function TreatmentDetail() {
  const { id } = useParams();
  const treatment = treatments[id];
  const [src, setSrc] = useState(`/${treatment?.img || "fallback"}.jpg`);
  const [attempt, setAttempt] = useState(0);

  const extensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

  const handleError = () => {
    const next = attempt + 1;
    if (next < extensions.length) {
      setSrc(`/${treatment.img}${extensions[next]}`);
      setAttempt(next);
    } else {
      setSrc("/fallback.jpg");
    }
  };

  if (!treatment)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0f0c] text-white">
        <p>Treatment details not found.</p>
      </div>
    );

  const wa = `https://wa.me/9550361953?text=Hi%20I%20need%20to%20enquire%20about%20${encodeURIComponent(
    treatment.title
  )}`;

  return (
    <section className="min-h-screen bg-[#0a0f0c] mt-5 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#D4AF37]/30 mb-8">
          <img
            src={src}
            alt={treatment.title}
            onError={handleError}
            className="w-full h-64 sm:h-96 object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-4 text-center">
          {treatment.title}
        </h1>

        {/* Description */}
        <p className="text-[#d9d9d9] text-lg leading-relaxed text-justify mb-10">
          {treatment.content}
        </p>

        {/* WhatsApp Button */}
        <div className="flex justify-center">
          <a
            href={wa}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0a0f0c] font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300"
          >
            Book Consultation via WhatsApp
          </a>
        </div>

        {/* Decorative Line */}
        <div className="mt-12 border-t border-[#D4AF37]/30 pt-6 text-center text-sm text-[#aaaaaa]">
          * Treatments are customized by certified Unani doctors according to
          your body temperament (Mizaj) and root cause.
        </div>
      </div>
    </section>
  );
}
