/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BottlesSection } from './components/BottlesSection';
import { FragranceOilsSection } from './components/FragranceOilsSection';
import { WhyKenany } from './components/WhyKenany';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070709] text-[#f0f0f5] selection:bg-[#d4af37] selection:text-black font-arabic antialiased overflow-x-hidden" dir="rtl">
      {/* 1. Header & Navigation */}
      <Header />

      <main id="main-content">
        {/* 1. Hero Section with Catchy Tagline & CTAs */}
        <Hero />

        {/* 2. Bottles & Sizes Section (قسم الزجاجات ومقاساتها: 30ml, 50ml, 100ml) */}
        <BottlesSection />

        {/* 3. Fragrance Oils Section (80+ Fragrance Oils with Olfactory Pyramid Notes)
            & 4. Special Request Card (Imported Perfumes Available Upon Request) */}
        <FragranceOilsSection />

        {/* Brand Authenticity, Concentration Standards & Guarantees */}
        <WhyKenany />
      </main>

      {/* 5. Footer & Contact Section (Phone: 01018390782, WhatsApp & Closing Statement) */}
      <Footer />

      {/* Persistent Floating WhatsApp Call-to-Action */}
      <FloatingWhatsApp />
    </div>
  );
}

