import React from 'react';
import { Sparkles, Globe, MessageCircle, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const SpecialRequestCard: React.FC = () => {
  const whatsappUrl = `https://wa.me/201018390782?text=${encodeURIComponent('مرحباً كنانى للعطور، أود الاستفسار عن توفير عطر مستورد أصلي بالطلب خاص بي (اسم العطر: ... )')}`;

  return (
    <div
      id="special-request"
      className="col-span-1 md:col-span-2 lg:col-span-3 relative rounded-2xl p-6 sm:p-8 overflow-hidden bg-gradient-to-r from-[#18150c] via-[#241e10] to-[#161309] border-2 border-[#d4af37] shadow-2xl shadow-[#d4af37]/20 my-4"
    >
      {/* Background Accent Graphics */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#b8860b]/10 blur-3xl rounded-full pointer-events-none" />
      
      {/* Floating Crown/Special Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/60 text-xs font-arabic font-bold text-[#f5e7a9] mb-4 shadow-sm">
        <Sparkles className="w-4 h-4 text-[#d4af37]" />
        <span>خدمة الاستيراد الحصري • Bespoke Sourcing</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left / Main Text Area */}
        <div className="lg:col-span-8 font-arabic text-right">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            يوجد عطور مستوردة أصلية حسب الطلب
            <span className="block text-sm sm:text-base font-cinzel text-[#f5e7a9] tracking-wider mt-1 font-semibold">
              Imported Designer & Niche Perfumes Available Upon Request
            </span>
          </h3>

          <p className="text-xs sm:text-base text-[#ded8c4] leading-relaxed mb-6 max-w-2xl">
            هل تبحث عن عطر أصلي مستورد غير متوفر في الأسواق المحلية، أو إصدار نيش حصري من أشهر الدور الفرنسية والإيطالية؟ في <strong className="text-[#f5e7a9]">كنانى</strong> نوفر لك أي عطر أصلي بعبوته الأصلية والمغلقة مع ضمان الأصالة 100% وبأفضل الأسعار التنافسية.
          </p>

          {/* Guarantees List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="flex items-center gap-2 bg-[#0d0c07]/80 border border-[#d4af37]/30 rounded-xl p-2.5">
              <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span className="text-xs text-[#e8e0cb] font-medium">أصلي 100% مع الباتش كود</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0d0c07]/80 border border-[#d4af37]/30 rounded-xl p-2.5">
              <Globe className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span className="text-xs text-[#e8e0cb] font-medium">استيراد مباشر من أوروبا ودبي</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0d0c07]/80 border border-[#d4af37]/30 rounded-xl p-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span className="text-xs text-[#e8e0cb] font-medium">توفير جميع إصدارات النيش والديزاينر</span>
            </div>
          </div>
        </div>

        {/* Right / CTA Box */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-5 rounded-xl bg-[#0e0c07]/90 border border-[#d4af37]/40 shadow-inner font-arabic text-center">
          <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mb-3">
            <MessageCircle className="w-6 h-6 text-[#f5e7a9]" />
          </div>

          <h4 className="text-sm sm:text-base font-bold text-white mb-1">
            أرسل اسم العطر أو صورته
          </h4>
          <p className="text-xs text-[#b8b09d] mb-4">
            سيتم الرد عليك فوراً بالسعر الدقيق وموعد الاستلام والتوصيل حتى باب بيتك.
          </p>

          <a
            id="btn-special-request-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c59e2b] text-[#090805] font-extrabold text-sm shadow-lg shadow-[#d4af37]/30 hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#090805]" />
            <span>طلب عطر مستورد عبر واتساب</span>
          </a>

          <span className="text-[11px] text-[#918a7c] font-mono mt-2" dir="ltr">
            01018390782
          </span>
        </div>
      </div>
    </div>
  );
};
