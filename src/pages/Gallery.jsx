import React from "react";

const images = Array.from({ length: 6 }).map((_, i) => `/public/r${i + 1}.jpeg`);

export default function Gallery() {
  return (
    <div className="page-content">
  {/* page code here */}
      <section className="bg-[#0a0f0c] py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-10">Gallery</h1>

        {/* Masonry Grid Layout */}
        <div className="columns-2 sm:columns-3 gap-4 space-y-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-lg hover:scale-[1.03] hover:shadow-[#D4AF37]/40 transition-transform duration-300 ease-out"
            >
              <img
                src={src}
                alt={`gallery-${idx}`}
                loading="lazy"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
</div>


  );
}
