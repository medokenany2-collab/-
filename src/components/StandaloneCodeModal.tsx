import React, { useState } from 'react';
import { X, Copy, Check, Code2, Download, FileCode, Sparkles } from 'lucide-react';

interface StandaloneCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StandaloneCodeModal: React.FC<StandaloneCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'html' | 'css' | 'js'>('all');

  if (!isOpen) return null;

  const handleCopy = () => {
    // In standalone file or via fetch
    fetch('/standalone-kenany.html')
      .then(res => res.text())
      .then(text => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      })
      .catch(() => {
        // Fallback
        const fallbackText = document.documentElement.outerHTML;
        navigator.clipboard.writeText(fallbackText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
  };

  const handleDownload = () => {
    fetch('/standalone-kenany.html')
      .then(res => res.text())
      .then(text => {
        const blob = new Blob([text], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'kenany-perfumes-standalone.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch(err => {
        console.error('Download error:', err);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md font-arabic">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0e0e14] border-2 border-[#d4af37] p-6 sm:p-8 shadow-2xl max-h-[90vh] flex flex-col text-right">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#d4af37]/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <span>الكود المصدري المستقل النقي (HTML, CSS & JS)</span>
                <span className="text-xs font-normal text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded-full border border-[#d4af37]/25">
                  ملف واحد متكامل 100%
                </span>
              </h3>
              <p className="text-xs text-[#a0a0b0]">
                كود نقي ومستقل بالكامل بدون أي اعتماديات خارجية معقدة، جاهز للنشر أو الحفظ الفوري
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative Note */}
        <div className="my-4 bg-[#14141e] border border-[#d4af37]/20 rounded-xl p-4 text-xs text-[#d0d0de] leading-relaxed">
          <p className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
            <span>
              تم إعداد كود نقي ومستقل ومدمج في ملف واحد (<code className="text-[#f5e7a9] font-mono">standalone-kenany.html</code>) يشمل كود HTML الهيكلي، تنسيقات CSS الفاخرة للأسود والذهبي، والـ JavaScript التفاعلي للبحث والفلاتر ومودال النوتات وواتساب.
            </span>
          </p>
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-[#d4af37]/20 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>تم نسخ الكود بالكامل للحافظة!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-black" />
                  <span>نسخ الكود بالكامل (One-Click Copy)</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-2.5 rounded-xl bg-[#1c1c28] hover:bg-[#252538] text-[#f5e7a9] border border-[#d4af37]/30 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#d4af37]" />
              <span>تحميل كملف .html</span>
            </button>
          </div>

          <span className="text-xs text-[#808090]">
            الحجم: ~65 كيلوبايت كود صافي
          </span>
        </div>

        {/* Preview Code Window */}
        <div className="flex-1 overflow-y-auto rounded-xl bg-[#09090d] border border-[#d4af37]/20 p-4 font-mono text-left text-xs text-[#8ee0a3] select-all relative" dir="ltr">
          <div className="text-[#65737e] mb-2 font-mono">
            {`<!-- ======================================================== -->
<!--  KENANY PERFUMES - HAUTE PARFUMERIE & LUXURY OILS       -->
<!--  Production-Ready Single-File HTML / CSS / Vanilla JS   -->
<!--  Phone & WhatsApp: 01018390782                          -->
<!-- ======================================================== -->`}
          </div>
          <pre className="whitespace-pre-wrap leading-relaxed text-[11px] text-[#e0e0e0]">
{`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kenany | عطور و زيوت كنانى الفاخرة</title>
  <!-- Google Fonts: Cinzel, Cairo & Plus Jakarta Sans -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Cinzel:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;600&display=swap">
  <style>
    /* Premium Deep Black & Rich Gold Custom Stylesheet */
    :root {
      --gold-primary: #d4af37;
      --gold-light: #f5e7a9;
      --gold-dark: #997a15;
      --bg-black: #070709;
      --card-black: #111117;
    }
    /* Clean custom grid, animations, and modal styles ... */
  </style>
</head>
<body>
  <!-- Header with Kenany Luxury Emblem -->
  <!-- Hero with Catchy Tagline & Badges -->
  <!-- Bottles Section (30ml, 50ml, 100ml) -->
  <!-- 55+ Fragrance Oils Grid with Accurate Olfactory Notes -->
  <!-- Distinctive Highlighted Special Request Card -->
  <!-- Footer with Phone 01018390782, WhatsApp & Closing Statement -->
</body>
</html>`}
          </pre>
        </div>

        {/* Footer info */}
        <div className="mt-4 pt-3 border-t border-[#d4af37]/15 flex items-center justify-between text-xs text-[#8a8a9a]">
          <span>يمكنك أيضاً فتح ملف <code className="text-[#f5e7a9]">standalone-kenany.html</code> مباشرة في أي متصفح ويب.</span>
          <button
            onClick={onClose}
            className="text-[#d4af37] hover:underline"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
