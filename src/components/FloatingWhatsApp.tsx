import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = '01018390782';
  const whatsappUrl = `https://wa.me/201018390782?text=${encodeURIComponent('مرحباً كنانى للعطور، أود الاستفسار عن تفاصيل الزيوت والتركيبات المتاحة.')}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start font-arabic">
      
      {/* Interactive Tooltip / Badge */}
      {showTooltip && (
        <div className="mb-2.5 bg-[#14141e] border border-[#d4af37]/40 rounded-xl p-2.5 shadow-2xl flex items-center gap-2 max-w-xs animate-bounce">
          <div className="w-2 h-2 rounded-full bg-[#25d366] animate-ping" />
          <span className="text-xs text-[#f5e7a9] font-medium">
            تواصل مباشرة مع خبير كنانى: <strong>{phoneNumber}</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white p-0.5 ml-1"
            title="إخفاء"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#20ba58] to-[#2be86e] text-white shadow-2xl shadow-[#25d366]/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20"
        aria-label="تواصل عبر واتساب كنانى"
      >
        <MessageCircle className="w-7 h-7 fill-current" />

        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#25d366]/50 animate-ping pointer-events-none" />
      </a>
    </div>
  );
};
