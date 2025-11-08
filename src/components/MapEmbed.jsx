import React from "react";
import { MapPin } from "lucide-react";

export default function MapEmbed() {
  const query = encodeURIComponent("Raaz Unani Dawakhana, Hindupur, Andhra Pradesh");
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const iframeSrc = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <div className="mt-8">
      {/* Embedded Google Map */}
      <div className="w-full rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={iframeSrc}
          title="Raaz Unani Map"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        />
      </div>

      {/* Gold Google Maps Button */}
      <div className="mt-4 flex justify-end">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#EBCB74] text-[#0a0f0c] px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <MapPin size={18} />
          <span>Open in Google Maps</span>
        </a>
      </div>
    </div>
  );
}
