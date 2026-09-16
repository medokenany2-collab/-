import React from 'react';
import { Droplet, Award, ShieldCheck, Sparkles, Truck, HeartHandshake } from 'lucide-react';

export const WhyKenany: React.FC = () => {
  return (
    <section className="py-16 bg-[#08080c] border-t border-[#d4af37]/15 relative font-arabic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161622] border border-[#d4af37]/30 text-xs text-[#f5e7a9] mb-3">
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>معايير الجودة الفائقة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            لماذا يفضل عشاق العطور دار &quot;كنانى&quot;؟
          </h2>
          <p className="text-xs sm:text-sm text-[#a8a8b8]">
            نلتزم بأعلى مقاييس صناعة العطور الراقية من نقاء الزيت حتى تسليم الزجاجة بين يديك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-[#0f0f15] border border-[#d4af37]/20 rounded-2xl p-6 hover:border-[#d4af37]/45 transition-all text-right shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-4">
              <Droplet className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">زيوت عطرية فرنسية نقية 100%</h3>
            <p className="text-xs sm:text-sm text-[#a8a8b8] leading-relaxed">
              نستورد زيوتنا الخام من كبرى معامل العطور الأوروبية (جراس الفرنسية وسويسرا)، خالية تماماً من الكحول التجاري والشوائب الرديئة التي تغير رائحة العطر.
            </p>
          </div>

          <div className="bg-[#0f0f15] border border-[#d4af37]/20 rounded-2xl p-6 hover:border-[#d4af37]/45 transition-all text-right shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">نسبة تركيز عالية وثبات أسطوري</h3>
            <p className="text-xs sm:text-sm text-[#a8a8b8] leading-relaxed">
              يتم تركيب عطور كنانى بتركيز Extrait de Parfum فائق الثبات، ليبقى عبير العطر فوّاحاً على ملابسك لأيام دون أن يبهت أو يتغير.
            </p>
          </div>

          <div className="bg-[#0f0f15] border border-[#d4af37]/20 rounded-2xl p-6 hover:border-[#d4af37]/45 transition-all text-right shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mb-4">
              <HeartHandshake className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">خدمة تفصيل واستيراد العطور</h3>
            <p className="text-xs sm:text-sm text-[#a8a8b8] leading-relaxed">
              سواء كنت تريد تركيبة مدمجة خاصة أو تبحث عن عطر عالمي أصلي ومستورد مختوم بالطلب، نحن نوفر لك كل رغباتك بضمان الأصالة والتوصيل السريع.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
