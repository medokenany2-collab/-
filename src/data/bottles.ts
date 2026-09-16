export interface BottleDesign {
  id: string;
  name: string;
  arabicName: string;
  size: string;
  capacityMl: number;
  category: 'standard' | 'luxury' | 'pocket';
  tag: string;
  description: string;
  descriptionAr: string;
  features: string[];
  featuresAr: string[];
  recommendedFor: string;
  recommendedForAr: string;
  glassType: string;
  glassTypeAr: string;
  sprayType: string;
  sprayTypeAr: string;
}

export const BOTTLES: BottleDesign[] = [
  {
    id: 'bottle-30ml',
    name: 'Kenany Noir Pocket Luxe',
    arabicName: 'زجاجة كنانى برستيج 30 مل',
    size: '30ml',
    capacityMl: 30,
    category: 'standard',
    tag: 'المقاس العملي والتنقل',
    description: 'Ultra-compact high-clarity Italian flacon, ideal for pocket, purse, and frequent travel.',
    descriptionAr: 'زجاجة كريستالية متينة بتصميم انسيابي عملي، صُممت خصيصاً لترافقك في جيبك وحقيبتك طوال اليوم دون أن تشغل حيزاً.',
    features: ['High-pressure micro mist pump', 'Reinforced drop-resistant crystal', 'Magnetic golden collar'],
    featuresAr: ['مضخة مايكرو سبري فرنسية برذاذ فائق النعومة', 'زجاج كريستالي مقوى عالي النقاء', 'حلقة ذهبية لامعة مانعة للتسريب'],
    recommendedFor: 'Office, daily gym, travel & trial blends',
    recommendedForAr: 'العمل، السفر، الاستخدام اليومي وتجربة التركيبات الجديدة',
    glassType: 'High-Density Clear Crystal',
    glassTypeAr: 'زجاج كريستالي كثيف شديد النقاء',
    sprayType: 'Fine French Micro Mist',
    sprayTypeAr: 'بخاخ فرنسي ناعم برذاذ متجانس'
  },
  {
    id: 'bottle-50ml',
    name: 'Kenany Royal Signature',
    arabicName: 'زجاجة كنانى الملكية 50 مل',
    size: '50ml',
    capacityMl: 50,
    category: 'luxury',
    tag: 'الأكثر طلباً وتوازناً ⭐',
    description: 'The golden mean of perfumery: heavy weighted base, polished gold metal cap, and maximum projection atomizer.',
    descriptionAr: 'المقاس الذهبي والأكثر طلباً بين عملاء كنانى. قاعدة زجاجية ثقيلة وفخمة، غطاء معدني ذهبي مصقول بوزن راقٍ وتصميم يعكس الهيبة.',
    features: ['Weighted base with optical clarity', 'Metallic brushed gold crown cap', 'Atomizer calibrated for dense sillage'],
    featuresAr: ['قاعدة زجاجية سميكة ومصقولة', 'غطاء معدني ذهبي فاخر مختوم', 'رشاش ضبابي يوزع رذاذ الزيت العطري بكفاءة وانتشار واسع'],
    recommendedFor: 'Signature daily scent & prestigious gifting',
    recommendedForAr: 'العطر الشخصي الأساسي، الإهداء الراقي، وسهرات المساء',
    glassType: 'Heavyweight Optic Glass',
    glassTypeAr: 'زجاج ثقيل مصقول بتقنية الإشراق البصري',
    sprayType: 'Wide-Angle Velvet Spray',
    sprayTypeAr: 'مضخة مخملية واسعة الزاوية'
  },
  {
    id: 'bottle-100ml',
    name: 'Kenany Imperial Masterpiece',
    arabicName: 'زجاجة كنانى إمبيريال 100 مل',
    size: '100ml',
    capacityMl: 100,
    category: 'luxury',
    tag: 'قمة الفخامة والاستدامة',
    description: 'Grand luxury flacon for the true connoisseur. Deep glass walls, solid brass-weighted cap, and everlasting capacity.',
    descriptionAr: 'التحفة الإمبراطورية الكبرى لعشاق الفخامة واستخدام العطر بكرم وسخاء. زجاج سميك متين وجاذبية بصرية تزين بها طاولتك الخاصة.',
    features: ['Extra thick bottom crystal', 'Hermetic gold seal collar', 'High-volume velvet dispersion nozzle'],
    featuresAr: ['قاعدة شديدة السماكة توحي بالفخامة والثبات', 'إحكام غلق هيرميتيك يمنع تبخر الزيوت تماماً', 'فوهة ضخ مخملية متسعة لمضاعفة الفوحان'],
    recommendedFor: 'Signature fragrance lovers & executive presence',
    recommendedForAr: 'عطرك المفضل الذي لا تستغني عنه، عشاق الفوحان، وأصحاب الحضور القيادي',
    glassType: 'Extra-Flint Luxury Glass',
    glassTypeAr: 'زجاج إكسترا فلنت فائق السماكة',
    sprayType: 'High-Volume Velvet Cloud',
    sprayTypeAr: 'سحاب مخملي كثيف وفوحان ممتد'
  },
  {
    id: 'bottle-obsidian-100',
    name: 'Kenany Obsidian Noir Frosted',
    arabicName: 'زجاجة أوبسيديان المعتمة 100 مل',
    size: '100ml',
    capacityMl: 100,
    category: 'luxury',
    tag: 'حماية الزيت وحصانة العود',
    description: 'Matte black anti-UV coated flacon that preserves fragrance oils from light degradation.',
    descriptionAr: 'زجاج أسود مطفي فاخر معزول بطلاء واقٍ من الأشعة فوق البنفسجية، يحافظ على نقاء جزيئات الزيوت العطرية والعود لسنوات دون تأكسد.',
    features: ['100% UV light barrier protection', 'Satin-touch matte black finish', 'Gold hot-stamped branding accent'],
    featuresAr: ['حماية 100% من الضوء والحرارة للحفاظ على الزيت العطري', 'ملمس ساتان ناعم مضاد للخدش والتبصيم', 'تفاصيل ذهبية بارزة وفاخرة'],
    recommendedFor: 'Oud, leather, and concentrated dark perfume oils',
    recommendedForAr: 'زيوت العود، الجلود، والزيوت العطرية الثقيلة المركزة',
    glassType: 'Matte Black Coated Glass',
    glassTypeAr: 'زجاج معتم مطلي أسود ملكي',
    sprayType: 'Precision Cloud Sprayer',
    sprayTypeAr: 'رشاش دقيق مضاد للأكسدة'
  },
  {
    id: 'bottle-pocket-atomizer',
    name: 'Kenany Gold Metal Pocket Mist',
    arabicName: 'بخاخ الجيب الميتاليك الذهبي 20 مل',
    size: '20ml',
    capacityMl: 20,
    category: 'pocket',
    tag: 'أناقة الجيب والمناسبات السريعة',
    description: 'Anodized gold aluminum sleeve with twist-up nozzle. Zero leaks, ultra-durable.',
    descriptionAr: 'هيكل ألومنيوم أيروديناميكي مذهب بالكامل بتقنية اللف (Twist)، لا يحتوي على غطاء منفصل قابل للضياع ومقاوم للصدمات بنسبة 100%.',
    features: ['Twist mechanism - no cap to lose', 'Aviation-grade aluminum shield', 'Refillable inner glass ampoule'],
    featuresAr: ['آلية لف ذكية بدون غطاء معرض للضياع', 'درع ألومنيوم طيران خفيف الوزن ومقاوم للصدمات', 'أنبوبة زجاجية داخلية قابلة لإعادة التعبئة'],
    recommendedFor: 'Parties, car compartments & active lifestyle',
    recommendedForAr: 'المناسبات، درج السيارة، والجيب السريع لتجديد الانتعاش',
    glassType: 'Internal Shock-Proof Ampoule',
    glassTypeAr: 'أمبولة زجاجية داخلية محمية',
    sprayType: 'Twist-Up Fine Vaporizer',
    sprayTypeAr: 'فابورايزر فائق النعومة بآلية الفتح السريعة'
  }
];
