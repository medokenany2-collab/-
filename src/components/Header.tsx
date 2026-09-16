import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Sparkles, Menu, X, Droplet, Layers, Search } from 'lucide-react';

interface HeaderProps {
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '01018390782';
  const whatsappUrl = `https://wa.me/201018390782?text=${encodeURIComponent('مرحباً كنانى للعطور (Kenany)، أود الاستفسار عن زيوت العطور والزجاجات المتاحة.')}`;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080c]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-3 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#08080c] via-[#08080c]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Luxury Monogram Emblem */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#241f12] to-[#0d0c07] border-2 border-[#d4af37] shadow-lg shadow-[#d4af37]/10 group-hover:border-[#f3e5ab] transition-all">
              <span className="font-cinzel text-xl sm:text-2xl font-bold text-gold-gradient select-none">
                K
              </span>
              <div className="absolute inset-0 rounded-full border border-[#d4af37]/30 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-cinzel text-xl sm:text-2xl font-extrabold tracking-widest text-[#f5e7a9] group-hover:text-[#ffffff] transition-colors">
                  KENANY
                </span>
                <span className="text-[10px] sm:text-xs font-arabic text-[#d4af37] font-semibold tracking-wider">
                  كنانى
                </span>
              </div>
              <span className="text-[10px] tracking-[0.25em] text-[#a59a76] uppercase font-cinzel">
                Haute Parfumerie
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-arabic">
            <a
              href="#hero"
              id="nav-home"
              className="text-[#d8d8e2] hover:text-[#d4af37] transition-colors font-medium hover:underline underline-offset-8 decoration-[#d4af37]/40"
            >
              الرئيسية
            </a>
            <a
              href="#bottles"
              id="nav-bottles"
              className="text-[#d8d8e2] hover:text-[#d4af37] transition-colors font-medium flex items-center gap-1.5 hover:underline underline-offset-8 decoration-[#d4af37]/40"
            >
              <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
              قسم الزجاجات ومقاساتها
            </a>
            <a
              href="#fragrance-oils"
              id="nav-oils"
              className="text-[#d8d8e2] hover:text-[#d4af37] transition-colors font-medium flex items-center gap-1.5 hover:underline underline-offset-8 decoration-[#d4af37]/40"
            >
              <Droplet className="w-3.5 h-3.5 text-[#d4af37]" />
              زيوت العطور للتركيبات
            </a>
            <a
              href="#special-request"
              id="nav-special"
              className="text-[#f3e5ab] hover:text-[#ffffff] bg-[#d4af37]/10 border border-[#d4af37]/30 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all hover:bg-[#d4af37]/20"
            >
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              عطور مستوردة بالطلب
            </a>
            <a
              href="#contact"
              id="nav-contact"
              className="text-[#d8d8e2] hover:text-[#d4af37] transition-colors font-medium hover:underline underline-offset-8 decoration-[#d4af37]/40"
            >
              تواصل معنا
            </a>
          </nav>

          {/* Action CTAs: Search, Phone and WhatsApp */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Search Button */}
            <button
              id="header-search-btn"
              onClick={() => {
                const el = document.getElementById('fragrance-search-input');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  el.focus();
                }
              }}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#f5e7a9] hover:text-white bg-[#14141d] border border-[#d4af37]/30 hover:border-[#d4af37] rounded-lg transition-all cursor-pointer"
              title="البحث عن عطر أو زيت"
            >
              <Search className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden md:inline">بحث</span>
            </button>

            {/* Direct Phone Call */}
            <a
              id="header-phone-link"
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#f5e7a9] hover:text-white transition-colors"
              title="اتصل بنا مباشرة"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span dir="ltr" className="font-mono text-sm tracking-wider">
                {phoneNumber}
              </span>
            </a>

            {/* WhatsApp CTA */}
            <a
              id="header-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-arabic font-bold rounded-lg bg-gradient-to-r from-[#d4af37] via-[#f1df95] to-[#c59e2b] text-[#0a0a0e] shadow-md shadow-[#d4af37]/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#0a0a0e]" />
              <span>واتساب كنانى</span>
            </a>
          </div>

          {/* Mobile Menu Toggle & Mobile Search */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="header-mobile-search-btn"
              onClick={() => {
                const el = document.getElementById('fragrance-search-input');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  el.focus();
                }
              }}
              className="p-2.5 rounded-lg bg-[#14141d] border border-[#d4af37]/30 text-[#d4af37] hover:text-white focus:outline-none cursor-pointer"
              title="بحث"
              aria-label="بحث في العطور"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#14141d] border border-[#d4af37]/30 text-[#f5e7a9] focus:outline-none"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 pb-4 border-t border-[#d4af37]/20 bg-[#0d0d12] rounded-xl px-4 flex flex-col gap-3 font-arabic">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d4af37] py-1 text-sm font-semibold"
            >
              الرئيسية
            </a>
            <a
              href="#bottles"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d4af37] py-1 text-sm flex items-center justify-between"
            >
              <span>قسم الزجاجات ومقاساتها</span>
              <span className="text-xs text-[#d4af37]">30ml / 50ml / 100ml</span>
            </a>
            <a
              href="#fragrance-oils"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d4af37] py-1 text-sm flex items-center justify-between"
            >
              <span>زيوت العطور للتركيبات</span>
              <span className="text-xs text-[#d4af37]">80+ زيت فاخر</span>
            </a>
            <a
              href="#special-request"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f5e7a9] bg-[#d4af37]/15 p-2 rounded-lg text-sm font-bold flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              عطور مستوردة أصلية حسب الطلب
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-[#d4af37] py-1 text-sm"
            >
              معلومات التواصل
            </a>

            <div className="pt-2 border-t border-[#d4af37]/15 flex flex-col gap-2">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#181822] text-[#f5e7a9] text-sm border border-[#d4af37]/20"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span dir="ltr">01018390782</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0a0a0e] font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>مراسلة واتساب: 01018390782</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
