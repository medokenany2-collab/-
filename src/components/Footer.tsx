import React from 'react';
import { Phone, MessageCircle, Heart, Sparkles, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  // Pure storefront footer props
}

export const Footer: React.FC<FooterProps> = () => {
  const phoneNumber = '01018390782';
  const whatsappUrl = `https://wa.me/201018390782?text=${encodeURIComponent('مرحباً كنانى للعطور (Kenany)، أود التواصل معكم بخصوص طلب عطر وزيوت عطرية.')}`;

  return (
    <footer id="contact" className="bg-[#050507] text-[#e0e0ea] border-t-2 border-[#d4af37]/30 pt-16 pb-12 relative overflow-hidden font-arabic">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#d4af37]/15">
          
          {/* Brand & Mission Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1a170e] border border-[#d4af37] text-gold-gradient font-cinzel font-bold text-xl">
                K
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-widest text-[#f5e7a9] block">
                  KENANY
                </span>
                <span className="text-xs text-[#d4af37] font-semibold">
                  كنانى للعطور الفاخرة
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#a8a8b8] leading-relaxed">
              دار متخصصة في توفير أجود الزيوت العطرية النقية الفرنسية والشرقية، وتنسيق التركيبات العطرية الخاصة بزجاجات كريستالية فاخرة (30ml, 50ml, 100ml)، بالإضافة إلى استيراد العطور الأصلية بالطلب الخاص.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#14141d] border border-[#d4af37]/25 text-xs text-[#f5e7a9]">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>ضمان نقاء الزيت وثبات يدوم طويلاً</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#f5e7a9] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>أقسام المتجر</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#b5b5c5]">
              <li>
                <a href="#hero" className="hover:text-[#d4af37] transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#bottles" className="hover:text-[#d4af37] transition-colors">
                  قسم الزجاجات ومقاساتها (30ml / 50ml / 100ml)
                </a>
              </li>
              <li>
                <a href="#fragrance-oils" className="hover:text-[#d4af37] transition-colors">
                  زيوت العطور للتركيبات (55+ عطر)
                </a>
              </li>
              <li>
                <a href="#special-request" className="hover:text-[#d4af37] transition-colors">
                  عطور مستوردة أصلية حسب الطلب
                </a>
              </li>
            </ul>
          </div>

          {/* Service Guarantees */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#f5e7a9] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>ضمانات كنانى</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#a8a8b8]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>زيوت عطرية نقية خالية من الإضافات الرديئة</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>ثبات يدوم طويلاً مع فوحان وانتشار مميز</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>شحن وتوصيل لكافة محافظات مصر</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>معاينة العطر والتأكد من الجودة</span>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp Channel */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#f5e7a9] flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>معلومات التواصل والطلب</span>
            </h4>

            {/* Phone Button */}
            <div className="bg-[#101016] border border-[#d4af37]/25 rounded-xl p-3.5 space-y-1">
              <span className="text-[11px] text-[#9090a0] block">رقم الهاتف المباشر:</span>
              <a
                id="footer-phone-number"
                href={`tel:${phoneNumber}`}
                className="font-mono text-lg font-bold text-[#f5e7a9] hover:text-white transition-colors flex items-center gap-2"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>{phoneNumber}</span>
              </a>
            </div>

            {/* WhatsApp Integrated Button */}
            <a
              id="footer-whatsapp-button"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25d366]/20 hover:brightness-110 active:scale-98 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>مراسلتنا عبر واتساب: {phoneNumber}</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-[#a5a5b5] pt-1">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>خدمة العملاء والطلبات متاحة يومياً</span>
            </div>
          </div>

        </div>

        {/* Professional Closing Statement Section (As requested by the user) */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14141e] via-[#1c1a12] to-[#14141e] border border-[#d4af37]/35 text-center max-w-4xl mx-auto shadow-xl">
          <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center">
            <Heart className="w-5 h-5 text-[#d4af37] fill-[#d4af37]/30" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
            كلمة شكر وتقدير من أسرة &quot;كنانى&quot;
          </h3>

          <p className="text-sm sm:text-base text-[#d8d0ba] leading-relaxed max-w-2xl mx-auto">
            نشكركم لاختياركم <strong className="text-[#f5e7a9]">كنانى للعطور (Kenany Perfumes)</strong> – نعتز بثقتكم الغالية، ويسعدنا دائماً أن نكون بصمتكم العطرية المميزة التي تخلد أجمل لحظاتكم وتمنحكم حضوراً فائق الأناقة والجاذبية. شكراً لزيارتكم ودمتم بعبير الفخامة.
          </p>

          <p className="text-xs font-cinzel text-[#a59a76] mt-3 tracking-widest uppercase">
            Thank you for choosing Kenany. We are honored to craft your olfactory signature.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Designer Cred */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#808090] gap-4">
          <p>© {new Date().getFullYear()} كنانى للعطور (Kenany Perfumes). جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#a59a76]">هاتف وواتساب: {phoneNumber}</span>
            <span>•</span>
            <span className="text-[#d4af37]">Pure Luxury & Custom Blends</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
