// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import TreatmentsPreview from '../components/TreatmentsPreview';
import Stats from '../components/Stats';
import MapEmbed from '../components/MapEmbed';
import ThreeSteps from '../components/ThreeSteps'; // 👈 Import the new component

export default function Home() {
  return (
    <div>
      <Hero />
      <main className="max-w-6xl mx-auto px-6">
        <TreatmentsPreview />

        {/* ✅ Replaced "Why Choose Us" with ThreeSteps component */}
        <ThreeSteps />

        <Stats />
        <section className="mt-12">
          <MapEmbed />
        </section>
      </main>
    </div>
  );
}