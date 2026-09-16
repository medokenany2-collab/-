import React, { useState, useMemo, useRef } from 'react';
import { FRAGRANCES, Fragrance } from '../data/fragrances';
import { SpecialRequestCard } from './SpecialRequestCard';
import { Search, Droplet, Sparkles, MessageCircle, Filter, X, Heart, ExternalLink, ChevronDown, Check, ArrowLeft, RefreshCw } from 'lucide-react';

// Brand Arabic mapping to allow searching brands in Arabic or English
const BRAND_ARABIC_MAP: Record<string, string[]> = {
  'dior': ['ديور', 'كريستيان ديور'],
  'chanel': ['شانيل', 'تشانيل'],
  'creed': ['كريد', 'أفنتوس', 'افنتوس'],
  'tom ford': ['توم فورد', 'فورد'],
  'louis vuitton': ['لويس فيتون', 'لويس فويتون', 'فيتون'],
  'amouage': ['أمواج', 'امواج'],
  'nishane': ['نيشاني', 'نيشان'],
  'mancera': ['مانسيرا', 'مانسيرا باريس'],
  'montale': ['مونتال', 'بيير مونتال'],
  'maison francis kurkdjian': ['فرانسيس كوركدجيان', 'كوركدجيان', 'باكارا'],
  'roja dove': ['روجا دوف', 'روجا'],
  'initio': ['إنيشيو', 'انيشيو', 'إنيشيو بارفيومز'],
  'penhaligon\'s': ['بنهاليغونز', 'بنهاليغون', 'بنهالغنز'],
  'byredo': ['بايريدو', 'باي ريدو'],
  'hermès': ['هيرميس', 'هيرمس'],
  'givenchy': ['جيفنشي'],
  'guerlain': ['جيرلان'],
  'hugo boss': ['هوجو بوس', 'بوس'],
  'lattafa': ['لطافة', 'لطافه'],
  'versace': ['فرزاتشي', 'فيرساتشي'],
  'armani': ['أرماني', 'ارماني', 'جورجيو أرماني'],
  'jean paul gaultier': ['جان بول غوتييه', 'غوتييه'],
  'yves saint laurent': ['إيف سان لوران', 'ايف سان لوران', 'واي اس ال']
};

// Robust Arabic text normalizer (strips diacritics, unifies alef, ta marbuta, ya/alef maqsura, tatweel)
function normalizeArabic(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '') // remove tashkeel
    .replace(/[أإآٱ]/g, 'ا') // unify alef
    .replace(/ة/g, 'ه') // unify ta marbuta
    .replace(/ى/g, 'ي') // unify alef maqsura
    .replace(/ؤ/g, 'و') // unify hamza on waw
    .replace(/ئ/g, 'ي') // unify hamza on ya
    .replace(/ـ/g, '') // remove tatweel
    .replace(/فانيلا/g, 'فانيليا') // synonym normalization
    .trim();
}

// Search matching function
function searchMatchesFragrance(frag: Fragrance, query: string): boolean {
  if (!query.trim()) return true;
  const rawQ = query.toLowerCase().trim();
  const normQ = normalizeArabic(query);
  const words = normQ.split(/\s+/).filter(Boolean);

  // Collect brand Arabic aliases
  const brandKey = frag.brandInspiration.toLowerCase();
  const brandAliases = Object.entries(BRAND_ARABIC_MAP)
    .filter(([k]) => brandKey.includes(k) || k.includes(brandKey))
    .flatMap(([, v]) => v)
    .join(' ');

  const allSearchable = [
    frag.name,
    frag.arabicName,
    frag.brandInspiration,
    brandAliases,
    frag.genderAr,
    frag.family,
    frag.familyAr,
    ...frag.topNotes,
    ...frag.topNotesAr,
    ...frag.heartNotes,
    ...frag.heartNotesAr,
    ...frag.baseNotes,
    ...frag.baseNotesAr,
    ...frag.tags,
    frag.descriptionAr
  ].join(' ');

  const allRaw = allSearchable.toLowerCase();
  const allNorm = normalizeArabic(allSearchable);

  // Direct substring matches
  if (allRaw.includes(rawQ) || allNorm.includes(normQ)) {
    return true;
  }

  // Multi-word search matching: all words must match somewhere in the fragrance info
  return words.every(w => allNorm.includes(w) || allRaw.includes(w));
}

export const FragranceOilsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<'all' | 'men' | 'women' | 'unisex' | 'niche' | 'gourmand' | 'oud'>('all');
  const [selectedFragranceForModal, setSelectedFragranceForModal] = useState<Fragrance | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filtered fragrances with intelligent category fallback
  const { filteredFragrances, hasMatchesInOtherCategories, totalSearchMatches } = useMemo(() => {
    const isSearching = searchQuery.trim().length > 0;
    
    // First, find all fragrances that match search query
    const searchMatches = FRAGRANCES.filter(frag => searchMatchesFragrance(frag, searchQuery));

    // Then apply category filter
    const categoryMatches = searchMatches.filter(frag => {
      if (selectedGender === 'men' && frag.gender !== 'men') return false;
      if (selectedGender === 'women' && frag.gender !== 'women') return false;
      if (selectedGender === 'unisex' && frag.gender !== 'unisex') return false;
      if (selectedGender === 'niche' && !frag.tags.some(t => t.includes('نيش'))) return false;
      if (selectedGender === 'gourmand' && !frag.familyAr.includes('غورماند') && !frag.tags.some(t => t.includes('كراميل') || t.includes('فانيليا') || t.includes('قهوة') || t.includes('شوكولاتة'))) return false;
      if (selectedGender === 'oud' && !frag.familyAr.includes('عود') && !frag.tags.some(t => t.includes('عود') || t.includes('شرقي'))) return false;
      return true;
    });

    // If user searched for something and category returned 0, but other categories have matches:
    const fallbackToAll = isSearching && categoryMatches.length === 0 && searchMatches.length > 0;

    return {
      filteredFragrances: fallbackToAll ? searchMatches : categoryMatches,
      totalSearchMatches: searchMatches.length,
      hasMatchesInOtherCategories: fallbackToAll
    };
  }, [searchQuery, selectedGender]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resultsAnchor = document.getElementById('fragrance-search-results-anchor');
    if (resultsAnchor) {
      resultsAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const executeQuickSearch = (keyword: string) => {
    setSearchQuery(keyword);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    const resultsAnchor = document.getElementById('fragrance-search-results-anchor');
    if (resultsAnchor) {
      resultsAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getWhatsappUrlForFragrance = (frag: Fragrance) => {
    const message = `مرحباً كنانى للعطور، أود طلب زيت عطر (${frag.arabicName} - ${frag.name} المستوحى من ${frag.brandInspiration}) لعمل تركيبة خاصة. ما هي الأحجام والأسعار المتاحة؟`;
    return `https://wa.me/201018390782?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="fragrance-oils" className="py-20 bg-[#07070a] relative border-t border-[#d4af37]/15">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#997a15]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161622] border border-[#d4af37]/30 text-xs font-arabic text-[#f5e7a9] mb-3">
            <Droplet className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>نقاء وتركيز استثنائي • French & Swiss Concentrates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-arabic font-bold text-white mb-4">
            قسم زيوت العطر للتركيبات
            <span className="block text-sm sm:text-base font-cinzel text-gold-gradient tracking-widest mt-1 uppercase">
              Premium Pure Fragrance Oils
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#b0b0be] font-arabic leading-relaxed">
            مجموعة كنانى المختارة بعناية من أنقى الزيوت العطرية العالمية، مطابقة للخلطات الأصلية لأشهر دور العطور العالمية والنيش. مصنفة حسب النوتات الهرمية (الافتتاحية، القلب، والقاعدة) لتختار عطرك بدقة واحترافية.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-4 max-w-4xl mx-auto font-arabic">
          
          {/* Search Input Form */}
          <form
            id="fragrance-search-form"
            onSubmit={handleSearchSubmit}
            className="relative flex items-center w-full"
          >
            <div className="relative w-full flex items-center">
              {/* Clickable Search Icon Button */}
              <button
                type="submit"
                id="btn-search-icon"
                aria-label="تنفيذ البحث"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1.5 text-[#d4af37] hover:text-[#f5e7a9] transition-colors cursor-pointer z-10"
                title="اضغط للبحث"
              >
                <Search className="w-5 h-5" />
              </button>

              <input
                ref={searchInputRef}
                id="fragrance-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث بالاسم (سوفاج، خمرة، أفنتوس، آني...) أو المكون (فانيليا، عود، قهوة، توت)..."
                className="w-full pr-12 pl-24 sm:pl-28 py-3.5 sm:py-4 rounded-2xl bg-[#12121a] border border-[#d4af37]/35 text-white placeholder-[#888899] text-sm focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37]/40 shadow-xl transition-all"
              />

              {/* Clear Query Button */}
              {searchQuery && (
                <button
                  type="button"
                  id="btn-clear-search"
                  onClick={() => {
                    setSearchQuery('');
                    if (searchInputRef.current) searchInputRef.current.focus();
                  }}
                  title="مسح نص البحث"
                  className="absolute left-20 sm:left-24 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors z-10"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              {/* Dedicated High-Contrast Golden Search Button */}
              <button
                type="submit"
                id="btn-search-submit"
                className="absolute left-1.5 top-1/2 -translate-y-1/2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f1df95] to-[#c59e2b] text-[#0a0a0e] font-bold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#d4af37]/25 flex items-center gap-1.5 cursor-pointer z-10"
                title="انقر للبحث الفوري"
              >
                <Search className="w-3.5 h-3.5 text-[#0a0a0e] stroke-[2.5]" />
                <span>بحث</span>
              </button>
            </div>
          </form>

          {/* Quick Search Suggestions */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-[#b5b5c5] pt-1">
            <span className="text-[#d4af37] font-semibold text-[11px] ml-1">الأكثر بحثاً:</span>
            {[
              { label: 'سوفاج', query: 'سوفاج' },
              { label: 'أفنتوس', query: 'أفنتوس' },
              { label: 'توم فورد', query: 'توم فورد' },
              { label: 'لويس فيتون', query: 'لويس فيتون' },
              { label: 'عود', query: 'عود' },
              { label: 'فانيليا', query: 'فانيليا' },
              { label: 'قهوة', query: 'قهوة' },
              { label: 'نيش فاخر', query: 'نيش' }
            ].map((chip) => (
              <button
                key={chip.label}
                type="button"
                onClick={() => executeQuickSearch(chip.query)}
                className={`px-2.5 py-1 rounded-lg text-[11px] transition-all cursor-pointer border ${
                  searchQuery.trim() === chip.query
                    ? 'bg-[#d4af37] text-black font-bold border-[#d4af37]'
                    : 'bg-[#151520] hover:bg-[#1f1f2e] text-[#dcdce5] border-[#d4af37]/20 hover:border-[#d4af37]/50'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <button
              onClick={() => setSelectedGender('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedGender === 'all'
                  ? 'bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-white border border-[#d4af37]/20'
              }`}
            >
              جميع الزيوت ({FRAGRANCES.length})
            </button>
            <button
              onClick={() => setSelectedGender('men')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedGender === 'men'
                  ? 'bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-white border border-[#d4af37]/20'
              }`}
            >
              عطور رجالية
            </button>
            <button
              onClick={() => setSelectedGender('women')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedGender === 'women'
                  ? 'bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-white border border-[#d4af37]/20'
              }`}
            >
              عطور حريمية
            </button>
            <button
              onClick={() => setSelectedGender('unisex')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedGender === 'unisex'
                  ? 'bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-white border border-[#d4af37]/20'
              }`}
            >
              للجنسين (يونيسكس)
            </button>
            <button
              onClick={() => setSelectedGender('niche')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedGender === 'niche'
                  ? 'bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-white border border-[#d4af37]/20'
              }`}
            >
              نيش وملكي فاخر ✨
            </button>
            <button
              onClick={() => setSelectedGender('oud')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedGender === 'oud'
                  ? 'bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-white border border-[#d4af37]/20'
              }`}
            >
              عود وشرقي أصيل
            </button>
            <button
              onClick={() => setSelectedGender('gourmand')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedGender === 'gourmand'
                  ? 'bg-[#d4af37] text-black shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#14141c] text-[#c0c0cc] hover:text-white border border-[#d4af37]/20'
              }`}
            >
              غورماند وفانيليا وقهوة ☕
            </button>
          </div>
        </div>

        {/* Results Counter & Anchor */}
        <div id="fragrance-search-results-anchor" className="scroll-mt-28">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-arabic text-[#9999a8] mb-6 px-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-[#f5e7a9]">
                عرض {filteredFragrances.length} من أصل {FRAGRANCES.length} زيت عطري نقي
              </span>
              {hasMatchesInOtherCategories && (
                <span className="text-[11px] bg-[#d4af37]/15 text-[#f5e7a9] px-2.5 py-0.5 rounded-md border border-[#d4af37]/30">
                  (تم تضمين جميع الأقسام لعرض نتائج بحثك)
                </span>
              )}
            </div>

            {searchQuery && (
              <div className="flex items-center gap-2">
                <span>نتائج البحث عن: &quot;<strong className="text-white">{searchQuery}</strong>&quot;</span>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    if (searchInputRef.current) searchInputRef.current.focus();
                  }}
                  className="text-xs text-[#d4af37] hover:underline flex items-center gap-1 cursor-pointer font-bold"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>إلغاء البحث</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Fragrances Responsive CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          
          {/* SPECIAL REQUEST CARD PLACED RIGHT INSIDE THE FRAGRANCES GRID AS REQUESTED */}
          <SpecialRequestCard />

          {/* Product Cards */}
          {filteredFragrances.map((frag) => (
            <div
              key={frag.id}
              id={`fragrance-card-${frag.id}`}
              className="rounded-2xl p-5 sm:p-6 bg-[#101017] border border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:shadow-xl hover:shadow-[#d4af37]/10 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Card Top Header */}
              <div>
                {/* Brand & Gender Tags */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#181824] border border-[#d4af37]/30 text-[11px] font-cinzel text-[#f5e7a9]">
                      {frag.brandInspiration}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-arabic font-semibold ${
                      frag.gender === 'men'
                        ? 'bg-[#142338] text-[#8ec5fc] border border-[#8ec5fc]/30'
                        : frag.gender === 'women'
                        ? 'bg-[#331728] text-[#f7a4d6] border border-[#f7a4d6]/30'
                        : 'bg-[#2a2414] text-[#ffd875] border border-[#ffd875]/30'
                    }`}>
                      {frag.genderAr}
                    </span>
                  </div>

                  {frag.isPopular && (
                    <span className="text-[10px] font-arabic font-bold text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded-full border border-[#d4af37]/30">
                      الأكثر طلباً ⭐
                    </span>
                  )}
                </div>

                {/* Names */}
                <div className="mb-3">
                  <h3 className="text-xl font-arabic font-bold text-white group-hover:text-[#f5e7a9] transition-colors leading-snug">
                    {frag.arabicName}
                  </h3>
                  <p className="text-xs font-cinzel text-[#a09c8c] tracking-wider mt-0.5 font-medium">
                    {frag.name}
                  </p>
                </div>

                {/* Olfactory Family */}
                <div className="inline-block mb-4 px-2.5 py-1 rounded-lg bg-[#0a0a0f] border border-[#d4af37]/15 text-xs font-arabic text-[#d4af37]">
                  {frag.familyAr}
                </div>

                {/* Brief Sensory Description */}
                <p className="text-xs text-[#b8b8c5] font-arabic leading-relaxed mb-4 line-clamp-2">
                  {frag.descriptionAr}
                </p>

                {/* Structured Olfactory Notes Pyramid */}
                <div className="space-y-2.5 bg-[#09090d] border border-[#d4af37]/15 rounded-xl p-3.5 mb-5 font-arabic text-xs">
                  
                  {/* Top Notes */}
                  <div className="flex items-start gap-2">
                    <span className="w-16 shrink-0 font-bold text-[#f5e7a9] flex items-center gap-1">
                      <span>🍋</span>
                      <span>الافتتاحية:</span>
                    </span>
                    <span className="text-[#e2e2ec] font-normal leading-tight">
                      {frag.topNotesAr.join('، ')}
                    </span>
                  </div>

                  {/* Heart Notes */}
                  <div className="flex items-start gap-2 border-t border-[#d4af37]/10 pt-2">
                    <span className="w-16 shrink-0 font-bold text-[#f5e7a9] flex items-center gap-1">
                      <span>🌸</span>
                      <span>قلب العطر:</span>
                    </span>
                    <span className="text-[#e2e2ec] font-normal leading-tight">
                      {frag.heartNotesAr.join('، ')}
                    </span>
                  </div>

                  {/* Base Notes */}
                  <div className="flex items-start gap-2 border-t border-[#d4af37]/10 pt-2">
                    <span className="w-16 shrink-0 font-bold text-[#f5e7a9] flex items-center gap-1">
                      <span>🪵</span>
                      <span>القاعدة:</span>
                    </span>
                    <span className="text-[#e2e2ec] font-normal leading-tight">
                      {frag.baseNotesAr.join('، ')}
                    </span>
                  </div>

                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {frag.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-arabic text-[#a5a5b5] bg-[#14141d] px-2 py-0.5 rounded-md border border-[#ffffff]/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-[#d4af37]/15 flex items-center gap-2 font-arabic">
                {/* Direct WhatsApp Order */}
                <a
                  id={`btn-order-whatsapp-${frag.id}`}
                  href={getWhatsappUrlForFragrance(frag)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#eccf76] to-[#b8860b] text-[#08080b] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:brightness-110 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>طلب الزيت عبر واتساب</span>
                </a>

                {/* View Detailed Notes Modal Trigger */}
                <button
                  onClick={() => setSelectedFragranceForModal(frag)}
                  title="عرض تفاصيل النوتات كاملة"
                  className="p-2.5 rounded-xl bg-[#181822] hover:bg-[#222230] text-[#f5e7a9] border border-[#d4af37]/30 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredFragrances.length === 0 && (
          <div className="text-center py-16 bg-[#111118] border border-[#d4af37]/20 rounded-2xl p-8 max-w-lg mx-auto font-arabic">
            <Droplet className="w-12 h-12 text-[#d4af37]/40 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-white mb-2">لم نجد عطراً يطابق بحثك حالياً</h4>
            <p className="text-xs text-[#a0a0b0] mb-5">
              لا تقلق! نوفر أي عطر أو زيت عطري غير مدرج في القائمة بالطلب الخاص عبر واتساب فوراً.
            </p>
            <a
              href={`https://wa.me/201018390782?text=${encodeURIComponent(`مرحباً كنانى، أبحث عن زيت عطر (${searchQuery}) هل يتوفر لديكم؟`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4af37] text-black font-bold text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>استفسر عن توفير {searchQuery} عبر واتساب</span>
            </a>
          </div>
        )}

      </div>

      {/* Detailed Perfume Olfactory Modal */}
      {selectedFragranceForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#111118] border-2 border-[#d4af37] p-6 sm:p-7 shadow-2xl font-arabic max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedFragranceForModal(null)}
              className="absolute left-4 top-4 text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-5 pr-2">
              <span className="text-xs font-cinzel text-[#d4af37] tracking-widest uppercase">
                {selectedFragranceForModal.brandInspiration} • {selectedFragranceForModal.genderAr}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedFragranceForModal.arabicName}
              </h3>
              <p className="text-sm font-cinzel text-[#a09c8c]">
                {selectedFragranceForModal.name}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#cecede] leading-relaxed mb-6 bg-[#0a0a0f] p-3 rounded-xl border border-[#d4af37]/15">
              {selectedFragranceForModal.descriptionAr}
            </p>

            {/* Complete Pyramid Details */}
            <div className="space-y-4 mb-6">
              
              <div className="bg-[#161622] rounded-xl p-3 border border-[#d4af37]/20">
                <h5 className="text-xs font-bold text-[#f5e7a9] mb-1.5 flex items-center gap-1.5">
                  <span>🍋</span>
                  <span>الافتتاحية (Top Notes) - أول انطباع للعطر:</span>
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedFragranceForModal.topNotesAr.map((note, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-[#0b0b10] text-xs text-[#e5e5f0] border border-[#d4af37]/20">
                      {note} <span className="text-[10px] text-[#8e8e9e]">({selectedFragranceForModal.topNotes[i]})</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#161622] rounded-xl p-3 border border-[#d4af37]/20">
                <h5 className="text-xs font-bold text-[#f5e7a9] mb-1.5 flex items-center gap-1.5">
                  <span>🌸</span>
                  <span>قلب العطر (Heart Notes) - جوهر الرائحة:</span>
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedFragranceForModal.heartNotesAr.map((note, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-[#0b0b10] text-xs text-[#e5e5f0] border border-[#d4af37]/20">
                      {note} <span className="text-[10px] text-[#8e8e9e]">({selectedFragranceForModal.heartNotes[i]})</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#161622] rounded-xl p-3 border border-[#d4af37]/20">
                <h5 className="text-xs font-bold text-[#f5e7a9] mb-1.5 flex items-center gap-1.5">
                  <span>🪵</span>
                  <span>قاعدة العطر (Base Notes) - الثبات والعمق:</span>
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedFragranceForModal.baseNotesAr.map((note, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-[#0b0b10] text-xs text-[#e5e5f0] border border-[#d4af37]/20">
                      {note} <span className="text-[10px] text-[#8e8e9e]">({selectedFragranceForModal.baseNotes[i]})</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="flex flex-col gap-2">
              <a
                href={getWhatsappUrlForFragrance(selectedFragranceForModal)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#090805] font-bold text-sm text-center shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>طلب هذا العطر عبر واتساب (01018390782)</span>
              </a>
              <button
                onClick={() => setSelectedFragranceForModal(null)}
                className="w-full py-2.5 rounded-xl bg-[#1c1c28] text-[#c0c0d0] text-xs font-semibold hover:text-white transition-colors cursor-pointer"
              >
                إغلاق النافذة
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
