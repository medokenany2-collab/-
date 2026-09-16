import React from 'react';
import { Sparkles, Droplets, ShieldCheck, ArrowDown, MessageCircle, Layers } from 'lucide-react';

interface HeroProps {
  onExploreOils: () => void;
  onExploreBottles: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreOils, onExploreBottles }) => {
  const whatsappUrl = `https://wa.me/201018390782?text=${encodeURIComponent('مرحباً كنانى للعطور، أرغب في الاستفسار عن تفصيل تركيبة عطرية خاصة.')}`;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#060608] via-[#0b0b10] to-[#070709]"
    >
      {/* Subtle Background Glows & Luxury Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-[#d4af37]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#997a15]/5 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#d4af37]/5 blur-[90px] rounded-full pointer-events-none" />

      {/* Decorative Golden Ambient Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14141c] border border-[#d4af37]/30 text-xs sm:text-sm font-arabic text-[#f5e7a9] mb-6 shadow-lg shadow-black/60">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>دار كنانى للعطور الفاخرة • Haute Parfumerie & Custom Blends</span>
        </div>

        {/* Brand Display Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-cinzel font-extrabold tracking-wider text-white mb-3">
          KENANY
          <span className="block text-2xl sm:text-3xl md:text-4xl font-arabic font-bold text-gold-gradient mt-2 tracking-normal">
            عطور وزيوت كنانى الفاخرة
          </span>
        </h1>

        {/* Catchy Tagline */}
        <p className="max-w-2xl text-base sm:text-xl font-arabic text-[#c8c8d2] font-normal leading-relaxed mb-8">
          عالم الفخامة العطرية والزيوت النقية.. نصنع بصمتك العطرية الخاصة بأعلى درجات التركيز مع تشكيلة واسعة من أفخر الزجاجات وعطور مستوردة أصلية نوفرها خصيصاً حسب طلبك.
        </p>

        {/* Key Features Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-10 text-right">
          <div className="bg-[#121218]/90 border border-[#d4af37]/20 rounded-xl p-3 flex items-center gap-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center shrink-0">
              <Droplets className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#f5e7a9] font-arabic">زيوت نقية 100%</h4>
              <p className="text-[10px] text-[#9a9aa8] font-arabic">خام فرنسي وسويسري أصيل</p>
            </div>
          </div>

          <div className="bg-[#121218]/90 border border-[#d4af37]/20 rounded-xl p-3 flex items-center gap-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#f5e7a9] font-arabic">زجاجات 30/50/100ml</h4>
              <p className="text-[10px] text-[#9a9aa8] font-arabic">تصاميم إيطالية بكريستال فاخر</p>
            </div>
          </div>

          <div className="bg-[#121218]/90 border border-[#d4af37]/20 rounded-xl p-3 flex items-center gap-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#f5e7a9] font-arabic">مستورد بالطلب</h4>
              <p className="text-[10px] text-[#9a9aa8] font-arabic">عطور نيش وأصلية بالاسم</p>
            </div>
          </div>

          <div className="bg-[#121218]/90 border border-[#d4af37]/20 rounded-xl p-3 flex items-center gap-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-[#d4af37]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#f5e7a9] font-arabic">ثبات وفوحان دائم</h4>
              <p className="text-[10px] text-[#9a9aa8] font-arabic">تركيب احترافي محكم</p>
            </div>
          </div>
        </div>

        {/* Primary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto font-arabic">
          <button
            id="hero-explore-oils-btn"
            onClick={onExploreOils}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#ecd57c] to-[#c59e2b] text-[#09090c] font-bold text-base shadow-xl shadow-[#d4af37]/25 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Droplets className="w-5 h-5 text-[#09090c]" />
            <span>تصفح زيوت العطور (55+ عطر عالمي)</span>
          </button>

          <button
            id="hero-explore-bottles-btn"
            onClick={onExploreBottles}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#14141c] hover:bg-[#1a1a24] text-[#f5e7a9] border border-[#d4af37]/40 font-semibold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#d4af37]" />
            <span>قسم الزجاجات ومقاساتها</span>
          </button>

          <a
            id="hero-whatsapp-direct-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1d4d2d]/30 hover:bg-[#1d4d2d]/50 text-[#85e29f] border border-[#25d366]/40 font-semibold text-sm transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25d366]" />
            <span>استشارة عطرية مباشرة</span>
          </a>
        </div>

        {/* Quick Down Indicator */}
        <div className="mt-12 opacity-60 hover:opacity-100 transition-opacity">
          <a
            href="#bottles"
            className="flex flex-col items-center text-xs text-[#a39f90] hover:text-[#d4af37] font-arabic gap-1"
          >
            <span>استكشف تفاصيل الزجاجات والزيوت بالأسفل</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
          </a>
        </div>

      </div>
    </section>
  );
};
