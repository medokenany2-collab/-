import React, { useState } from 'react';
import { BOTTLES, BottleDesign } from '../data/bottles';
import { Droplets, Check, Sparkles, MessageCircle, Info } from 'lucide-react';

interface BottlesSectionProps {
  onSelectBottleForFragrance?: (bottle: BottleDesign) => void;
}

export const BottlesSection: React.FC<BottlesSectionProps> = ({ onSelectBottleForFragrance }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | '30ml' | '50ml' | '100ml' | 'pocket'>('all');

  const filteredBottles = BOTTLES.filter((bottle) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === '30ml') return bottle.capacityMl === 30;
    if (selectedFilter === '50ml') return bottle.capacityMl === 50;
    if (selectedFilter === '100ml') return bottle.capacityMl === 100;
    if (selectedFilter === 'pocket') return bottle.category === 'pocket';
    return true;
  });

  const getBottleWhatsappUrl = (bottle: BottleDesign) => {
    const text = `مرحباً كنانى للعطور، أود طلب تفصيل عطر في (${bottle.arabicName} سعة ${bottle.size}) مع زيت عطري فاخر.`;
    return `https://wa.me/201018390782?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="bottles" className="py-20 bg-[#0a0a0e] relative border-t border-[#d4af37]/15">
      {/* Glow Effect */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161622] border border-[#d4af37]/30 text-xs font-arabic text-[#f5e7a9] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>فخامة العرض والتقديم</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-arabic font-bold text-white mb-4">
            قسم الزجاجات ومقاساتها
            <span className="block text-sm sm:text-base font-cinzel text-gold-gradient tracking-widest mt-1 uppercase">
              Artisanal Flacons & Capacities
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#b0b0be] font-arabic leading-relaxed">
            نختار لك أرقى تصاميم الزجاجات الإيطالية المعززة ببخاخات ناعمة تمنحك فوحاناً استثنائياً. متوفرة بأحجام مختلفة (30 مل، 50 مل، 100 مل) لتعبئة واختيار تركيبة زيتك العطري المفضل.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 font-arabic">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-[#f5e7a9] border border-[#d4af37]/20'
              }`}
            >
              جميع الزجاجات والمقاسات ({BOTTLES.length})
            </button>
            <button
              onClick={() => setSelectedFilter('30ml')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === '30ml'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-[#f5e7a9] border border-[#d4af37]/20'
              }`}
            >
              مقاس 30 مل (جيب وتنقل)
            </button>
            <button
              onClick={() => setSelectedFilter('50ml')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === '50ml'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-[#f5e7a9] border border-[#d4af37]/20'
              }`}
            >
              مقاس 50 مل (الأكثر طلباً)
            </button>
            <button
              onClick={() => setSelectedFilter('100ml')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === '100ml'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-[#f5e7a9] border border-[#d4af37]/20'
              }`}
            >
              مقاس 100 مل (إمبيريال فخم)
            </button>
            <button
              onClick={() => setSelectedFilter('pocket')}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === 'pocket'
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-[#f5e7a9] border border-[#d4af37]/20'
              }`}
            >
              بخاخ الجيب الميتاليك (Twist)
            </button>
          </div>
        </div>

        {/* Bottles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBottles.map((bottle) => {
            const isSignature = bottle.capacityMl === 50;

            return (
              <div
                key={bottle.id}
                id={`bottle-card-${bottle.id}`}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group ${
                  isSignature
                    ? 'bg-gradient-to-b from-[#181822] via-[#12121a] to-[#0c0c12] border-2 border-[#d4af37] shadow-xl shadow-[#d4af37]/15 ring-1 ring-[#d4af37]/50'
                    : 'bg-[#111116] border border-[#d4af37]/20 hover:border-[#d4af37]/50 shadow-lg'
                }`}
              >
                {/* Popular / Best Choice Badge */}
                {bottle.tag && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#d4af37] to-[#a67c1e] text-[#09090c] text-xs font-arabic font-extrabold shadow-md shadow-black">
                    {bottle.tag}
                  </div>
                )}

                <div>
                  {/* Visual Bottle Representation */}
                  <div className="h-44 w-full flex items-center justify-center mb-6 relative rounded-xl bg-gradient-to-b from-[#09090c] to-[#14141d] border border-[#d4af37]/10 p-4 overflow-hidden">
                    
                    {/* SVG Flacon Illustration */}
                    <div className="relative flex flex-col items-center justify-center">
                      {/* Sprayer Nozzle */}
                      <div className="w-4 h-3 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa8214] rounded-t-sm shadow-sm" />
                      {/* Cap */}
                      <div
                        className={`bg-gradient-to-r from-[#3a3520] via-[#d4af37] to-[#3a3520] border border-[#f3e5ab]/40 rounded-sm mb-1 shadow-md ${
                          bottle.capacityMl === 100 ? 'w-12 h-10' : bottle.capacityMl === 50 ? 'w-10 h-8' : 'w-8 h-7'
                        }`}
                      />
                      {/* Collar */}
                      <div className="w-14 h-2 bg-gradient-to-r from-[#997a15] via-[#f5e7a9] to-[#997a15] rounded-xs" />
                      {/* Glass Body */}
                      <div
                        className={`relative rounded-b-xl border flex flex-col items-center justify-center p-2 backdrop-blur-xs transition-transform group-hover:scale-105 duration-300 ${
                          bottle.id === 'bottle-obsidian-100'
                            ? 'bg-gradient-to-b from-[#1a1a24] to-[#0a0a0f] border-[#d4af37]/40 text-[#f5e7a9]'
                            : bottle.id === 'bottle-pocket-atomizer'
                            ? 'bg-gradient-to-b from-[#c59e2b] via-[#ecd57c] to-[#997a15] border-[#fff] text-[#0a0a0e]'
                            : 'bg-gradient-to-b from-[#ffffff]/10 via-[#d4af37]/15 to-[#050508]/80 border-[#d4af37]/35 text-white'
                        } ${
                          bottle.capacityMl === 100
                            ? 'w-24 h-28'
                            : bottle.capacityMl === 50
                            ? 'w-20 h-24'
                            : bottle.capacityMl === 30
                            ? 'w-16 h-20'
                            : 'w-12 h-26 rounded-full'
                        }`}
                      >
                        {/* Shimmer line inside glass */}
                        <div className="absolute top-2 left-2 right-2 h-[1px] bg-white/20" />
                        <span className="font-cinzel text-xs font-bold tracking-widest text-[#f5e7a9] drop-shadow">
                          KENANY
                        </span>
                        <span className="text-[10px] font-mono mt-1 opacity-90 text-[#e6e6eb]">
                          {bottle.size}
                        </span>
                      </div>
                    </div>

                    {/* Capacity Pill Top Left */}
                    <div className="absolute top-3 left-3 bg-[#08080c]/80 border border-[#d4af37]/30 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-[#f5e7a9]">
                      {bottle.size}
                    </div>
                  </div>

                  {/* Title & Name */}
                  <div className="mb-4">
                    <h3 className="text-xl font-arabic font-bold text-white group-hover:text-[#f5e7a9] transition-colors">
                      {bottle.arabicName}
                    </h3>
                    <p className="text-xs font-cinzel text-[#a09c8c] tracking-wider mt-0.5">
                      {bottle.name}
                    </p>
                  </div>

                  {/* Arabic Description */}
                  <p className="text-xs sm:text-sm text-[#b5b5c2] font-arabic leading-relaxed mb-5">
                    {bottle.descriptionAr}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6 font-arabic">
                    {bottle.featuresAr.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#d0d0dc]">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specs Box */}
                  <div className="bg-[#0b0b10] border border-[#d4af37]/15 rounded-xl p-3 mb-6 space-y-1.5 text-xs font-arabic">
                    <div className="flex justify-between items-center text-[#a8a8b8]">
                      <span>نوع الزجاج:</span>
                      <span className="text-[#f5e7a9] font-medium">{bottle.glassTypeAr}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#a8a8b8]">
                      <span>نوع البخاخ:</span>
                      <span className="text-[#f5e7a9] font-medium">{bottle.sprayTypeAr}</span>
                    </div>
                    <div className="flex justify-between items-center text-[#a8a8b8]">
                      <span>مناسبة لـ:</span>
                      <span className="text-[#d8d8e5] font-medium">{bottle.recommendedForAr}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-[#d4af37]/15 flex flex-col gap-2 font-arabic">
                  <a
                    href={getBottleWhatsappUrl(bottle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm ${
                      isSignature
                        ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#09090c] hover:brightness-110 shadow-md shadow-[#d4af37]/20'
                        : 'bg-[#181824] hover:bg-[#202030] text-[#f5e7a9] border border-[#d4af37]/30'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>طلب هذه الزجاجة ({bottle.size}) مع زيتك المفضل</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Blend Notification Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#14141e] via-[#1a1a28] to-[#14141e] border border-[#d4af37]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right font-arabic shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center shrink-0">
              <Droplets className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">هل ترغب في مزج أكثر من زيت عطري في زجاجة واحدة؟</h4>
              <p className="text-xs sm:text-sm text-[#a8a8b8] mt-0.5">
                نوفر لك خدمة التركيب المخصص (Layering & Custom Blends) لدمج عطرك المفضل مع لمسة عود أو مسك حسب ذوقك.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/201018390782?text=${encodeURIComponent('مرحباً كنانى للعطور، أود طلب استشارة لتركيب خلطة عطرية مخصصة ومدمجة.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl bg-[#d4af37] text-black font-bold text-xs sm:text-sm shrink-0 hover:bg-[#ecd57c] transition-colors"
          >
            طلب تركيبة مخصصة
          </a>
        </div>

      </div>
    </section>
  );
};
