export interface Fragrance {
  id: string;
  name: string;
  arabicName: string;
  brandInspiration: string;
  gender: 'men' | 'women' | 'unisex';
  genderAr: string;
  family: string;
  familyAr: string;
  topNotes: string[];
  topNotesAr: string[];
  heartNotes: string[];
  heartNotesAr: string[];
  baseNotes: string[];
  baseNotesAr: string[];
  descriptionAr: string;
  isPopular?: boolean;
  tags: string[];
}

export const FRAGRANCES: Fragrance[] = [
  // 1. Sauvage
  {
    id: 'sauvage',
    name: 'Sauvage',
    arabicName: 'سوفاج',
    brandInspiration: 'Dior',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Aromatic Fougere',
    familyAr: 'أروماتك فوچير منعش',
    topNotes: ['Calabrian Bergamot', 'Pepper'],
    topNotesAr: ['برغموت كالابريا', 'فلفل حار'],
    heartNotes: ['Sichuan Pepper', 'Lavender', 'Pink Pepper', 'Vetiver', 'Patchouli', 'Geranium'],
    heartNotesAr: ['فلفل سيتشوان', 'لافندر فرنسي', 'فلفل وردي', 'نجيل الهند', 'باتشولي'],
    baseNotes: ['Ambroxan', 'Cedar', 'Labdanum'],
    baseNotesAr: ['أمبروكسان نقي', 'خشب الأرز', 'لابدانوم'],
    descriptionAr: 'العطر الرجالي الأكثر شهرة عالمياً بطابعه الجذاب والمنعش الحاد مع ثبات أسطوري.',
    isPopular: true,
    tags: ['رجالي', 'منعش', 'فوحان عالي', 'يومي']
  },

  // 2. Bleu de Chanel
  {
    id: 'bleu-de-chanel',
    name: 'Bleu de Chanel',
    arabicName: 'بلو دي شانيل',
    brandInspiration: 'Chanel',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Woody Aromatic',
    familyAr: 'خشبي أروماتك فاخر',
    topNotes: ['Grapefruit', 'Lemon', 'Mint', 'Pink Pepper'],
    topNotesAr: ['جريب فروت', 'ليمون منعش', 'نعناع بارد', 'فلفل وردي'],
    heartNotes: ['Ginger', 'Nutmeg', 'Jasmine', 'Iso E Super'],
    heartNotesAr: ['زنجبيل نضر', 'جوزة الطيب', 'ياسمين', 'إيزو إي سوبر'],
    baseNotes: ['Incense', 'Vetiver', 'Cedar', 'Sandalwood', 'Patchouli', 'White Musk'],
    baseNotesAr: ['بخور ملكي', 'خشب الصندل', 'خشب الأرز', 'مسك أبيض', 'باتشولي'],
    descriptionAr: 'قمة الأناقة الفرنسية الكلاسيكية، يجمع بين انتعاش الحمضيات وعمق البخور والأخشاب.',
    isPopular: true,
    tags: ['رجالي', 'رسمي', 'فخامة', 'كلاسيكي']
  },

  // 3. Aventus
  {
    id: 'aventus',
    name: 'Aventus',
    arabicName: 'أفنتوس',
    brandInspiration: 'Creed',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Chypre Fruity',
    familyAr: 'فاكهي مدخن أرستقراطي',
    topNotes: ['Pineapple', 'Bergamot', 'Blackcurrant', 'Apple'],
    topNotesAr: ['أناناس ملكي', 'برغموت', 'كشمش أسود', 'تفاح أخضر'],
    heartNotes: ['Birch', 'Patchouli', 'Moroccan Jasmine', 'Rose'],
    heartNotesAr: ['أخشاب البتولا المدخنة', 'باتشولي', 'ياسمين مغربي', 'ورد'],
    baseNotes: ['Musk', 'Oakmoss', 'Ambergris', 'Vanilla'],
    baseNotesAr: ['مسك فاخر', 'طحلب البلوط', 'عنبر الحوت', 'فانيليا ناعمة'],
    descriptionAr: 'عطر الملوك والفرسان، توليفة ساحرة من الأناناس المنعش مع نفحات أخشاب البتولا المدخنة.',
    isPopular: true,
    tags: ['رجالي', 'نيش', 'أرستقراطي', 'ملكي']
  },

  // 4. Invictus
  {
    id: 'invictus',
    name: 'Invictus',
    arabicName: 'إنفكتوس',
    brandInspiration: 'Paco Rabanne',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Woody Aquatic',
    familyAr: 'مائي خشبي رياضي',
    topNotes: ['Sea Notes', 'Grapefruit', 'Mandarin Orange'],
    topNotesAr: ['أمواج بحرية منعشة', 'جريب فروت', 'يوسفي'],
    heartNotes: ['Bay Leaf', 'Jasmine'],
    heartNotesAr: ['أوراق الغار الملكي', 'ياسمين'],
    baseNotes: ['Ambergris', 'Guaiac Wood', 'Oakmoss', 'Patchouli'],
    baseNotesAr: ['عنبر الحوت', 'خشب الغاياك', 'طحلب البلوط', 'باتشولي'],
    descriptionAr: 'عطر النصر والطاقة الحيوية المنعشة برائحة البحر والنفحات الرياضية الجذابة.',
    tags: ['رجالي', 'رياضي', 'منعش', 'صيفي']
  },

  // 5. 1 Million
  {
    id: 'one-million',
    name: '1 Million',
    arabicName: 'وان مليون',
    brandInspiration: 'Paco Rabanne',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Warm Spicy Leather',
    familyAr: 'تابلي دافئ مع لمسة جلدية',
    topNotes: ['Blood Mandarin', 'Grapefruit', 'Mint'],
    topNotesAr: ['يوسفي أحمر', 'جريب فروت', 'نعناع'],
    heartNotes: ['Cinnamon', 'Spicy Notes', 'Rose'],
    heartNotesAr: ['قرفة حارة', 'توابل عطرية', 'ورد جوري'],
    baseNotes: ['Amber', 'Leather', 'Woody Notes', 'Indian Patchouli'],
    baseNotesAr: ['عنبر ذهبي', 'جلد ناعم', 'أخشاب ثمينة', 'باتشولي هندي'],
    descriptionAr: 'عطر الجاذبية الذهبية المطلقة بمزيج القرفة والعنبر والجلود الفاخرة.',
    isPopular: true,
    tags: ['رجالي', 'سهرات', 'جذاب', 'شتوي']
  },

  // 6. Stronger With You
  {
    id: 'stronger-with-you',
    name: 'Stronger With You',
    arabicName: 'سترونجر ويز يو',
    brandInspiration: 'Emporio Armani',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Aromatic Fougère Warm',
    familyAr: 'أروماتك دافئ ومحلى بالكستناء',
    topNotes: ['Cardamom', 'Pink Pepper', 'Mint', 'Violet Leaf'],
    topNotesAr: ['حبهان / هيل', 'فلفل وردي', 'نعناع', 'أوراق البنفسج'],
    heartNotes: ['Chestnut', 'Pineapple', 'Melon', 'Cinnamon', 'Sage'],
    heartNotesAr: ['كستناء محلاة', 'أناناس', 'شمام', 'قرفة', 'مرمية'],
    baseNotes: ['Vanilla', 'Chestnut', 'Amberwood', 'Cedar'],
    baseNotesAr: ['فانيليا مدغشقر', 'كستناء', 'خشب العنبر', 'خشب الأرز'],
    descriptionAr: 'من أروع العطور الرومانسية الدافئة، يجمع بين الكستناء المحلاة والفانيليا الغنية والتوابل.',
    isPopular: true,
    tags: ['رجالي', 'دافئ', 'رومانسي', 'شتوي']
  },

  // 7. Ultra Male
  {
    id: 'ultra-male',
    name: 'Ultra Male',
    arabicName: 'ألترا ميل',
    brandInspiration: 'Jean Paul Gaultier',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Amber Fougere Fruity',
    familyAr: 'عنبري فاكهي مغري',
    topNotes: ['Pear', 'Lavender', 'Mint', 'Bergamot', 'Lemon'],
    topNotesAr: ['كمثرى ناضجة', 'لافندر فرنسي', 'نعناع', 'برغموت', 'ليمون'],
    heartNotes: ['Cinnamon', 'Clary Sage', 'Caraway'],
    heartNotesAr: ['قرفة حارة', 'مرمية كلاري', 'كراوية ناعمة'],
    baseNotes: ['Black Vanilla Husk', 'Amber', 'Patchouli', 'Cedar'],
    baseNotesAr: ['فانيليا سوداء كثيفة', 'عنبر دافئ', 'باتشولي', 'خشب الأرز'],
    descriptionAr: 'قنبلة الفواح والجاذبية الليلية برائحة الكمثرى والفانيليا السوداء والقرفة.',
    isPopular: true,
    tags: ['رجالي', 'سهرات', 'فوحان جبار', 'شبابي']
  },

  // 8. Le Male
  {
    id: 'le-male',
    name: 'Le Male',
    arabicName: 'لو ميل',
    brandInspiration: 'Jean Paul Gaultier',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Amber Fougere',
    familyAr: 'أروماتك كلاسيكي باودري',
    topNotes: ['Lavender', 'Mint', 'Cardamom', 'Bergamot', 'Artemisia'],
    topNotesAr: ['خزامى (لافندر)', 'نعناع بارد', 'حبهان', 'برغموت'],
    heartNotes: ['Cinnamon', 'Orange Blossom', 'Caraway'],
    heartNotesAr: ['قرفة دافئة', 'زهر البرتقال', 'كراوية'],
    baseNotes: ['Vanilla', 'Tonka Bean', 'Amber', 'Sandalwood', 'Cedar'],
    baseNotesAr: ['فانيليا ناعمة', 'حبوب التونكا', 'عنبر', 'خشب الصندل'],
    descriptionAr: 'الأسطورة الكلاسيكية للجاذبية الذكورية بنفحات اللافندر والنعناع والفانيليا المهدئة.',
    tags: ['رجالي', 'كلاسيكي', 'باودري', 'ناعم']
  },

  // 9. Eros
  {
    id: 'eros',
    name: 'Eros',
    arabicName: 'إيروس',
    brandInspiration: 'Versace',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Aromatic Fougere',
    familyAr: 'أروماتك منعش ومغري',
    topNotes: ['Mint', 'Green Apple', 'Lemon'],
    topNotesAr: ['نعناع منعش حاد', 'تفاح أخضر مقرمش', 'ليمون إيطالي'],
    heartNotes: ['Tonka Bean', 'Ambroxan', 'Geranium'],
    heartNotesAr: ['حبوب التونكا', 'أمبروكسان', 'إبرة الراعي'],
    baseNotes: ['Madagascar Vanilla', 'Virginian Cedar', 'Atlas Cedar', 'Vetiver', 'Oakmoss'],
    baseNotesAr: ['فانيليا مدغشقر', 'خشب أرز فرجينيا', 'نجيل الهند', 'طحلب البلوط'],
    descriptionAr: 'عطر إله الحب والإغراء اليوناني، انفجار من النعناع البارد مع التونكا والفانيليا الفاخرة.',
    isPopular: true,
    tags: ['رجالي', 'شبابي', 'سهرات', 'فوحان قوي']
  },

  // 10. Y EDP
  {
    id: 'y-edp',
    name: 'Y EDP',
    arabicName: 'واي أو دو بارفان',
    brandInspiration: 'Yves Saint Laurent',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Aromatic Fougere Woody',
    familyAr: 'أروماتك خشبي منعش حديث',
    topNotes: ['Apple', 'Ginger', 'Bergamot'],
    topNotesAr: ['تفاح أخضر منعش', 'زنجبيل طازج', 'برغموت'],
    heartNotes: ['Sage', 'Juniper Berries', 'Geranium'],
    heartNotesAr: ['مرمية أنيقة', 'توت العرعر', 'إبرة الراعي'],
    baseNotes: ['Amberwood', 'Tonka Bean', 'Cedar', 'Vetiver', 'Olibanum'],
    baseNotesAr: ['خشب العنبر', 'حبوب التونكا', 'خشب الأرز', 'لبان جاوي'],
    descriptionAr: 'عطر الرجل العصري الناجح، مزيج مذهل من التفاح والزنجبيل مع خشب العنبر الفاخر.',
    isPopular: true,
    tags: ['رجالي', 'عصري', 'طاقة', 'دوام وسهرات']
  },

  // 11. Acqua Di Gio
  {
    id: 'acqua-di-gio',
    name: 'Acqua Di Gio',
    arabicName: 'أكوا دي جيو',
    brandInspiration: 'Giorgio Armani',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Aromatic Aquatic',
    familyAr: 'مائي أروماتك أسطوري',
    topNotes: ['Lime', 'Lemon', 'Bergamot', 'Jasmine', 'Orange', 'Mandarin', 'Neroli'],
    topNotesAr: ['لايم بحري', 'ليمون', 'برغموت', 'يوسفي', 'نيرولي'],
    heartNotes: ['Sea Notes', 'Jasmine', 'Calone', 'Peach', 'Freesia', 'Rosemary'],
    heartNotesAr: ['نسيم البحر الأبيض المتوسط', 'روزماري', 'كالون', 'خوخ', 'ياسمين'],
    baseNotes: ['White Musk', 'Cedar', 'Oakmoss', 'Patchouli', 'Amber'],
    baseNotesAr: ['مسك أبيض نقي', 'خشب الأرز', 'طحلب البلوط', 'باتشولي'],
    descriptionAr: 'العطر الصيفي المائي الأكثر مبيعاً في تاريخ العطور، نسيم البحر والجزر الإيطالية الساحرة.',
    isPopular: true,
    tags: ['رجالي', 'صيفي', 'مائي', 'انتعاش نقي']
  },

  // 12. Layton Parfums de Marly
  {
    id: 'layton',
    name: 'Layton',
    arabicName: 'ليتون بارفيومز دي مارلي',
    brandInspiration: 'Parfums de Marly',
    gender: 'unisex',
    genderAr: 'للجنسين (يميل للرجالي)',
    family: 'Amber Floral Spicy',
    familyAr: 'نيش ملكي فانيليا وتفاح وتوابل',
    topNotes: ['Apple', 'Lavender', 'Bergamot', 'Mandarin Orange'],
    topNotesAr: ['تفاح كراميل مقرمش', 'خزامى', 'برغموت', 'يوسفي'],
    heartNotes: ['Cardamom', 'Jasmine', 'Violet', 'Geranium'],
    heartNotesAr: ['حبهان / هيل هندي', 'ياسمين', 'بنفسج مخملي', 'إبرة الراعي'],
    baseNotes: ['Vanilla', 'Pepper', 'Guaiac Wood', 'Patchouli', 'Sandalwood'],
    baseNotesAr: ['فانيليا بوربون', 'فلفل أسود', 'خشب الغاياك', 'صندل', 'باتشولي'],
    descriptionAr: 'عطر النيش الملكي الفاخر بامتياز، تداخل التفاح واللافندر مع الفانيليا الفخمة والهيل.',
    isPopular: true,
    tags: ['نيش', 'ملكي', 'شتوي', 'فخامة مطلقة']
  },

  // 13. Dunhill (Desire Red)
  {
    id: 'dunhill-desire',
    name: 'Dunhill Desire',
    arabicName: 'دنهل ديزاير الأحمر',
    brandInspiration: 'Alfred Dunhill',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Amber Woody Fruity',
    familyAr: 'عنبري فاكهي شرقي جذاب',
    topNotes: ['Apple', 'Lemon', 'Neroli', 'Bergamot'],
    topNotesAr: ['تفاح أحمر', 'ليمون منعش', 'نيرولي', 'برغموت'],
    heartNotes: ['Rose', 'Teak Wood', 'Patchouli'],
    heartNotesAr: ['ورد جوري', 'خشب الساج الفاخر', 'باتشولي'],
    baseNotes: ['Vanilla', 'Musk'],
    baseNotesAr: ['فانيليا دافئة', 'مسك ناعم'],
    descriptionAr: 'العطر الرجالي الجذاب ذو الهالة المغناطيسية برائحة التفاح والخشب الدافئ والفانيليا.',
    tags: ['رجالي', 'جذاب', 'كلاسيكي', 'ثابت']
  },

  // 14. Pi Givenchy
  {
    id: 'pi-givenchy',
    name: 'Pi Givenchy',
    arabicName: 'باي جيفنشي',
    brandInspiration: 'Givenchy',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Amber Woody Sweet',
    familyAr: 'عنبري خشبي سويت فاخر',
    topNotes: ['Mandarin Orange', 'Tarragon', 'Rosemary', 'Basil'],
    topNotesAr: ['يوسفي', 'طرحون', 'إكليل الجبل', 'ريحان عطري'],
    heartNotes: ['Anise', 'Neroli', 'Geranium', 'Lily of the Valley'],
    heartNotesAr: ['يانسون نجمي', 'نيرولي', 'إبرة الراعي', 'زنبق الوادي'],
    baseNotes: ['Vanilla', 'Almond', 'Tonka Bean', 'Benzoin', 'Cedar'],
    baseNotesAr: ['فانيليا كريمية', 'لوز حلو محمص', 'تونكا', 'بنزوين جاوي', 'خشب الأرز'],
    descriptionAr: 'تحفة دافئة كالحرير بمزيج اللوز المحمص والفانيليا البنزوين، لمحبّي العطور السويت الهادئة.',
    tags: ['رجالي', 'سويت', 'دافئ', 'شتوي ناعم']
  },

  // 15. Bianco Latte
  {
    id: 'bianco-latte',
    name: 'Bianco Latte',
    arabicName: 'بيانكو لاتي',
    brandInspiration: 'Giardini Di Toscana',
    gender: 'unisex',
    genderAr: 'للجنسين (عشاق الغورماند)',
    family: 'Amber Gourmand',
    familyAr: 'غورماند كراميل وحليب وعسل',
    topNotes: ['Caramel'],
    topNotesAr: ['كراميل سائل دافئ'],
    heartNotes: ['Honey', 'Coumarin'],
    heartNotesAr: ['عسل نحل ذهبي', 'كومارين ناعم'],
    baseNotes: ['Vanilla', 'White Musk'],
    baseNotesAr: ['فانيليا حليبية كريمية', 'مسك أبيض نظيف'],
    descriptionAr: 'تريند العطور العالمي الأول، رائحة الكراميل بالحليب والفانيليا والعسل كحلوى إيطالية فاخرة.',
    isPopular: true,
    tags: ['للجنسين', 'غورماند', 'كراميل', 'تريند عالمي']
  },

  // 16. Sculpture
  {
    id: 'sculpture',
    name: 'Sculpture Homme',
    arabicName: 'سكالبشر هوم',
    brandInspiration: 'Nikos',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Amber Fougere Fresh',
    familyAr: 'زهري حمضي عنبري مشرق',
    topNotes: ['Orange Blossom', 'Lemon', 'Bergamot', 'Mandarin Orange'],
    topNotesAr: ['زهر البرتقال المتوسطي', 'ليمون', 'برغموت', 'يوسفي'],
    heartNotes: ['Jasmine', 'Lily-of-the-Valley', 'Rose', 'Geranium'],
    heartNotesAr: ['ياسمين ندي', 'زنبق الوادي', 'ورد', 'إبرة الراعي'],
    baseNotes: ['Tonka Bean', 'Benzoin', 'Amber', 'Cedar'],
    baseNotesAr: ['حبوب التونكا الحلوة', 'بنزوين', 'عنبر دافئ', 'خشب الأرز'],
    descriptionAr: 'العطر الإغريقي المنعش الأنيق بنفحات زهر البرتقال والتونكا الساحرة.',
    tags: ['رجالي', 'منعش', 'صيفي', 'زهري حمضي']
  },

  // 17. Khamrah Qahwa
  {
    id: 'khamrah-qahwa',
    name: 'Khamrah Qahwa',
    arabicName: 'خمرة قهوة',
    brandInspiration: 'Lattafa',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Warm Spicy Coffee Gourmand',
    familyAr: 'قهوة عربية وتوابل شرقية دافئة',
    topNotes: ['Cinnamon', 'Cardamom', 'Ginger'],
    topNotesAr: ['قرفة حارة', 'هيل عربي أصيل', 'زنجبيل'],
    heartNotes: ['Coffee', 'Praline', 'Candied Fruits', 'White Flowers'],
    heartNotesAr: ['بن محمص غني (قهوة)', 'برالين كراميل', 'فواكه مسكرة'],
    baseNotes: ['Vanilla', 'Tonka Bean', 'Benzoin', 'Musk', 'Coffee'],
    baseNotesAr: ['فانيليا دافئة', 'تونكا', 'بنزوين راتنجي', 'مسك'],
    descriptionAr: 'مزيج القهوة العربية المحمصة مع الهيل والقرفة والبرالين، عطر شتوي غني بالفخامة الشرقية.',
    isPopular: true,
    tags: ['للجنسين', 'قهوة', 'شتوي فخم', 'غورماند شرقي']
  },

  // 18. Khamrah Smoke (Special Edition)
  {
    id: 'khamrah-smoke',
    name: 'Khamrah Smoke',
    arabicName: 'خمرة سموك (مدخن)',
    brandInspiration: 'Lattafa Signature Blend',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Smoky Amber Woody',
    familyAr: 'عنبري خشبي بخوري مدخن',
    topNotes: ['Nutmeg', 'Cinnamon', 'Bergamot'],
    topNotesAr: ['جوزة الطيب', 'قرفة دافئة', 'برغموت'],
    heartNotes: ['Dates', 'Praline', 'Smoky Incense', 'Tuberose'],
    heartNotesAr: ['تمر سكري فاخر', 'برالين', 'بخور مدخن ثقيل', 'مسك الروم'],
    baseNotes: ['Smoky Woods', 'Oud', 'Vanilla', 'Tonka', 'Amberwood', 'Myrrh'],
    baseNotesAr: ['أخشاب مدخنة', 'لمسة عود راقية', 'فانيليا سوداء', 'مر وبخور'],
    descriptionAr: 'نسخة عميقة مدخنة معززة بعبير البخور والأخشاب المحترقة مع حلاوة التمر والتوابل.',
    tags: ['للجنسين', 'مدخن', 'بخور', 'شتوي ثقيل']
  },

  // 19. Khamrah
  {
    id: 'khamrah',
    name: 'Khamrah',
    arabicName: 'خمرة الأصلي',
    brandInspiration: 'Lattafa',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Aromatic Spicy Gourmand',
    familyAr: 'تابلي دافئ مع تمور وبرالين وفانيليا',
    topNotes: ['Cinnamon', 'Nutmeg', 'Bergamot'],
    topNotesAr: ['قرفة غنية', 'جوزة الطيب', 'برغموت منعش'],
    heartNotes: ['Dates', 'Praline', 'Tuberose', 'Mahonial'],
    heartNotesAr: ['تمر محلى', 'برالين شوكولاتة', 'مسك الروم'],
    baseNotes: ['Vanilla', 'Tonka Bean', 'Benzoin', 'Amberwood', 'Akigalawood', 'Myrrh'],
    baseNotesAr: ['فانيليا كريمية', 'تونكا', 'بنزوين', 'خشب العنبر', 'مر عطري'],
    descriptionAr: 'العطر الأكثر شهرة وشعبية بفوحان جبار ورائحة التمر والبرالين الفاخر مع لمسة فانيليا.',
    isPopular: true,
    tags: ['للجنسين', 'تمور وبرالين', 'فوحان جبار', 'سهرات']
  },

  // 20. Black Opium
  {
    id: 'black-opium',
    name: 'Black Opium',
    arabicName: 'بلاك أوبيوم',
    brandInspiration: 'Yves Saint Laurent',
    gender: 'women',
    genderAr: 'حريمي',
    family: 'Amber Vanilla Coffee',
    familyAr: 'عنبري فانيليا وقهوة مغري',
    topNotes: ['Pear', 'Pink Pepper', 'Orange Blossom'],
    topNotesAr: ['كمثرى لذيذة', 'فلفل وردي', 'زهر البرتقال'],
    heartNotes: ['Coffee', 'Jasmine', 'Bitter Almond', 'Licorice'],
    heartNotesAr: ['قهوة سوداء مركزة', 'ياسمين مسكر', 'لوز مر', 'عرق سوس'],
    baseNotes: ['Vanilla', 'Patchouli', 'Cashmere Wood', 'Cedar'],
    baseNotesAr: ['فانيليا دافئة', 'باتشولي ناعم', 'خشب الكشمير', 'خشب الأرز'],
    descriptionAr: 'جرعة من الأدرينالين والإثارة الأنثوية مع القهوة السوداء والفانيليا الساحرة.',
    isPopular: true,
    tags: ['حريمي', 'سهرات', 'قهوة وفانيليا', 'إغراء']
  },

  // 21. Burberry Her
  {
    id: 'burberry-her',
    name: 'Burberry Her',
    arabicName: 'بربري هير',
    brandInspiration: 'Burberry',
    gender: 'women',
    genderAr: 'حريمي',
    family: 'Floral Fruity Gourmand',
    familyAr: 'فاكهي توت وفراولة مسكي',
    topNotes: ['Strawberry', 'Raspberry', 'Blackberry', 'Sour Cherry', 'Blackcurrant'],
    topNotesAr: ['فراولة طازجة', 'توت أحمر', 'توت أسود', 'كرز حامض'],
    heartNotes: ['Violet', 'Jasmine'],
    heartNotesAr: ['زهور البنفسج', 'ياسمين ندي'],
    baseNotes: ['Musk', 'Vanilla', 'Cashmeran', 'Woody Notes', 'Amber', 'Oakmoss'],
    baseNotesAr: ['مسك ناعم نظيف', 'فانيليا مخملية', 'كشميران', 'عنبر'],
    descriptionAr: 'سحر التوت البريطاني والفراولة البرية المحاطة بالمسك الكشميري الرقيق والأنثوي.',
    isPopular: true,
    tags: ['حريمي', 'توت وفراولة', 'ناعم ورقيق', 'أنثوي']
  },

  // 22. Madawi Oud
  {
    id: 'madawi-oud',
    name: 'Madawi Oud',
    arabicName: 'مضاوي عود',
    brandInspiration: 'Arabian Oud',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Oriental Floral Oud',
    familyAr: 'شرقي فاخر زهور وعود وخوخ',
    topNotes: ['Peach', 'Apple Blossom', 'Bergamot'],
    topNotesAr: ['خوخ مخملي', 'زهر التفاح', 'برغموت خفيف'],
    heartNotes: ['Pineapple Blossom', 'Rose', 'Orange Blossom'],
    heartNotesAr: ['زهر الأناناس', 'ورد جوري دمشقي', 'زهر البرتقال'],
    baseNotes: ['Cambodian Oud', 'Musk', 'Amber', 'Patchouli'],
    baseNotesAr: ['عود كمبودي فاخر', 'مسك الغزال', 'عنبر ملكي', 'باتشولي'],
    descriptionAr: 'عطر الفخامة الشرقية والخليجية الأيقوني بزهور الخوخ الممزوجة بنفحات العود الكمبودي النقي.',
    isPopular: true,
    tags: ['للجنسين', 'عود شرقي', 'ملكي فاخر', 'خليجي']
  },

  // 23. Marbert Man
  {
    id: 'marbert-man',
    name: 'Marbert Man',
    arabicName: 'ماربرت مان الكلاسيكي',
    brandInspiration: 'Marbert',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Chypre Aromatic Leather',
    familyAr: 'تشيبر جلدي وأعشاب كلاسيكي',
    topNotes: ['Bergamot', 'Lavender', 'Artemisia'],
    topNotesAr: ['برغموت', 'لافندر', 'شيح عشبي'],
    heartNotes: ['Geranium', 'Cinnamon', 'Carnation', 'Honey', 'Rose'],
    heartNotesAr: ['إبرة الراعي', 'قرفة دافئة', 'قرنفل', 'عسل نقي'],
    baseNotes: ['Leather', 'Oakmoss', 'Cedar', 'Patchouli', 'Amber'],
    baseNotesAr: ['جلد طبيعي عتيق', 'طحلب السنديان', 'خشب الأرز', 'باتشولي'],
    descriptionAr: 'عطر الرجولة الأصيلة الكلاسيكية، ثبات وهيبة عطرية لا تتكرر برائحة الجلود العتيقة والأخشاب.',
    tags: ['رجالي', 'كلاسيكي عتيق', 'هيبة', 'ثبات خيالي']
  },

  // 24. Angels' Share
  {
    id: 'angels-share',
    name: "Angels' Share",
    arabicName: 'أنجلز شير (حصة الملائكة)',
    brandInspiration: 'Kilian',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Vanilla Spicy Boozy',
    familyAr: 'كونياك وقرفة وفانيليا وبلوط نيش',
    topNotes: ['Cognac Essence'],
    topNotesAr: ['مستخلص الكونياك الفاخر المعتّق'],
    heartNotes: ['Cinnamon', 'Tonka Bean', 'Oak'],
    heartNotesAr: ['قرفة فاخرة', 'حبوب التونكا', 'خشب البلوط المعتّق'],
    baseNotes: ['Praline', 'Vanilla', 'Sandalwood'],
    baseNotesAr: ['برالين كراميل', 'فانيليا ناعمة', 'خشب الصندل'],
    descriptionAr: 'تحفة دار كيليان الباريسية، رائحة براميل البلوط المعتّقة بالكونياك والقرفة والبرالين الفاخر.',
    isPopular: true,
    tags: ['نيش', 'للجنسين', 'كونياك وقرفة', 'فخامة خيالية']
  },

  // 25. Black XS
  {
    id: 'black-xs',
    name: 'Black XS',
    arabicName: 'بلاك إكس إس',
    brandInspiration: 'Paco Rabanne',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Amber Woody Fruity',
    familyAr: 'تابلي دافئ مع لمسة برالين وليمون',
    topNotes: ['Calabrian Lemon', 'Kalamanzi (Citrus)'],
    topNotesAr: ['ليمون كالابريا الحامض', 'حمضيات كالامانزي'],
    heartNotes: ['Praline', 'Cinnamon', 'Black Cardamom', 'Tolu Balsam'],
    heartNotesAr: ['حلوى البرالين اللذيذة', 'قرفة', 'حبهان أسود', 'بلسم تولو'],
    baseNotes: ['Black Amber', 'Patchouli', 'Ebony Wood', 'Palisander Rosewood'],
    baseNotesAr: ['عنبر أسود', 'باتشولي', 'خشب الأبنوس الفاخر', 'خشب الورد'],
    descriptionAr: 'عطر الروك والشباب المتمرد، تضارب ممتع بين حمضيات البداية وحلاوة شوكولاتة البرالين بالأخشاب.',
    tags: ['رجالي', 'شبابي', 'برالين وليمون', 'جاذبية']
  },

  // 26. Erba Pura
  {
    id: 'erba-pura',
    name: 'Erba Pura',
    arabicName: 'إربا بورا',
    brandInspiration: 'Xerjoff',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Fruity Musk',
    familyAr: 'سلة فواكه متوسطية ومسك أبيض نيش',
    topNotes: ['Sicilian Orange', 'Calabrian Bergamot', 'Sicilian Lemon'],
    topNotesAr: ['برتقال صقلي مشرق', 'برغموت كالابريا', 'ليمون صقلي'],
    heartNotes: ['Mediterranean Fruits Basket'],
    heartNotesAr: ['سلة فواكه استوائية متوسطية حلوة'],
    baseNotes: ['White Musk', 'Madagascar Vanilla', 'Amber'],
    baseNotesAr: ['مسك أبيض نظيف مكثف', 'فانيليا مدغشقر', 'عنبر دافئ'],
    descriptionAr: 'قنبلة الفواح والبهجة، سلة فواكه استوائية غنية مغمورة بأطنان من المسك الأبيض والفانيليا الفاخرة.',
    isPopular: true,
    tags: ['نيش', 'للجنسين', 'فوحان نووي', 'فواكه ومسك']
  },

  // 27. Raghba
  {
    id: 'raghba',
    name: 'Raghba',
    arabicName: 'رغبة',
    brandInspiration: 'Lattafa',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Oriental Vanilla Wood',
    familyAr: 'فانيليا وبخور وسكر محروق وعود',
    topNotes: ['Sugar', 'Vanilla'],
    topNotesAr: ['سكر مكرمل دافئ', 'فانيليا'],
    heartNotes: ['Incense', 'Oud', 'Sandalwood'],
    heartNotesAr: ['بخور شرقي', 'خشب العود', 'خشب الصندل'],
    baseNotes: ['Musk', 'Amber', 'Leather'],
    baseNotesAr: ['مسك غني', 'عنبر بلسمي', 'لمسة جلدية خفيفة'],
    descriptionAr: 'عطر العشاق الشرقي، حلاوة السكر المكرمل مع دفء خشب العود والبخور المعطر للملابس.',
    tags: ['للجنسين', 'شرقي سكر', 'بخور وفانيليا', 'ثبات عالي']
  },

  // 28. Very Sexy
  {
    id: 'very-sexy',
    name: 'Very Sexy',
    arabicName: 'فيري سيكسي',
    brandInspiration: "Victoria's Secret",
    gender: 'women',
    genderAr: 'حريمي',
    family: 'Amber Floral Fruity',
    familyAr: 'توت أسود وكليمنتين وفانيليا أنثوي مغري',
    topNotes: ['Blackberry', 'Clementine', 'Cactus', 'Cappuccino', 'Pepper'],
    topNotesAr: ['توت العليق الأسود', 'يوسفي كليمنتين', 'كابتشينو خفيف'],
    heartNotes: ['Orchid', 'Hortensia', 'Mimosa', 'Camellia'],
    heartNotesAr: ['أوركيد فخم', 'ميموزا ناعمة', 'كاميليا'],
    baseNotes: ['Musk', 'Blackberry', 'Amber', 'Woody Notes'],
    baseNotesAr: ['مسك مغري', 'عنبر دافئ', 'أخشاب ناعمة'],
    descriptionAr: 'العطر الأنثوي المثير الأشهر، مزيج ساحر من التوت الأسود والكليمنتين مع زهور الأوركيد والمسك.',
    isPopular: true,
    tags: ['حريمي', 'إغراء', 'أنثوي جذاب', 'توت وفاكهة']
  },

  // 29. 212 VIP (Men)
  {
    id: '212-vip',
    name: '212 VIP Men',
    arabicName: '212 في آي بي',
    brandInspiration: 'Carolina Herrera',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Amber Woody Boozy',
    familyAr: 'باشن فروت وتوابل ونفحات حفلات',
    topNotes: ['Passionfruit', 'Lime', 'Pepper', 'Ginger'],
    topNotesAr: ['باشن فروت (فاكهة الآلام)', 'لايم حامض', 'فلفل أسود', 'زنجبيل'],
    heartNotes: ['Mint', 'Gin & Vodka Accord', 'Spices'],
    heartNotesAr: ['نعناع مثلج', 'توابل عطرية منعشة'],
    baseNotes: ['Amber', 'Leather', 'Woody Notes'],
    baseNotesAr: ['عنبر دافئ', 'جلد شبابي أنيق', 'أخشاب فاخرة'],
    descriptionAr: 'تذكرة دخول عالم السهرات والحفلات الفاخرة برائحة الباشن فروت والنعناع المثلج والأخشاب.',
    tags: ['رجالي', 'سهرات', 'شبابي مميز', 'باشن فروت']
  },

  // 30. Turab Al Dhahab
  {
    id: 'turab-al-dhahab',
    name: 'Turab Al Dhahab',
    arabicName: 'تراب الذهب',
    brandInspiration: 'Ard Al Zaafaran',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Warm Floral Coconut Gourmand',
    familyAr: 'جوز هند دافئ وفانيليا ومسك شرقي',
    topNotes: ['Lime', 'Bergamot', 'Anise'],
    topNotesAr: ['لايم منعش', 'برغموت', 'يانسون خفيف'],
    heartNotes: ['Coconut', 'Sugar Cane', 'Ylang-Ylang', 'Rose'],
    heartNotesAr: ['جوز هند كريمي دافئ', 'قصب سكر حلو', 'إيلنغ إيلنغ', 'ورد'],
    baseNotes: ['Vanilla', 'White Musk', 'Sandalwood', 'Amber'],
    baseNotesAr: ['فانيليا غنية', 'مسك أبيض قطني', 'صندل كريمي', 'عنبر'],
    descriptionAr: 'رائحة شمسية ذهبية استوائية غنية بجوز الهند الكريمي وقصب السكر والمسك الأبيض الحريري.',
    tags: ['للجنسين', 'جوز هند', 'سكر وفانيليا', 'دافئ استوائي']
  },

  // 31. Alexandria II
  {
    id: 'alexandria-ii',
    name: 'Alexandria II',
    arabicName: 'إسكندرية 2 (ألكسندريا 2)',
    brandInspiration: 'Xerjoff',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Woody Oud Floral',
    familyAr: 'نيش فخم لافندر وعود معتق وخشب الصندل',
    topNotes: ['Palisander Rosewood', 'Lavender', 'Cinnamon', 'Apple'],
    topNotesAr: ['خشب الورد الباليساندر', 'خزامى فرنسية', 'قرفة دافئة', 'تفاح'],
    heartNotes: ['Rose', 'Cedar', 'Lily-of-the-Valley'],
    heartNotesAr: ['ورد بلغاري ملكي', 'خشب الأرز', 'زنبق الوادي'],
    baseNotes: ['Laotian Oud', 'Sandalwood', 'Amber', 'Vanilla', 'Musk'],
    baseNotesAr: ['عود لاوسي معتق فاخر', 'خشب الصندل السريلانكي', 'عنبر', 'فانيليا', 'مسك'],
    descriptionAr: 'إمبراطورية من الفخامة الأرستقراطية، لافندر ناعم مع أندر أنواع العود اللاوسي وخشب الصندل.',
    isPopular: true,
    tags: ['نيش فاخر', 'للجنسين', 'عود ملكي', 'ثبات جبار']
  },

  // 32. Fahrenheit
  {
    id: 'fahrenheit',
    name: 'Fahrenheit',
    arabicName: 'فهرنهايت',
    brandInspiration: 'Dior',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Aromatic Leather Violet',
    familyAr: 'جلدي بنفسج خشبي لا مثيل له',
    topNotes: ['Nutmeg Flower', 'Lavender', 'Cedar', 'Chamomile', 'Mandarin', 'Hawthorn', 'Bergamot', 'Lemon'],
    topNotesAr: ['زهور جوزة الطيب', 'خزامى', 'أرز', 'بابونج', 'يوسفي'],
    heartNotes: ['Violet Leaf', 'Nutmeg', 'Cedar', 'Sandalwood', 'Carnation', 'Honeysuckle', 'Jasmine', 'Lily-of-the-Valley'],
    heartNotesAr: ['أوراق البنفسج الخضراء المميزة', 'جوزة الطيب', 'خشب الصندل', 'قرنفل'],
    baseNotes: ['Leather', 'Vetiver', 'Musk', 'Amber', 'Patchouli', 'Tonka Bean'],
    baseNotesAr: ['نفحة جلدية حادة فريدة', 'نجيل الهند', 'مسك', 'عنبر', 'باتشولي'],
    descriptionAr: 'البصمة العطرية التي قلبت موازين الرجولة، نوتة البنفسج الخضراء الممزوجة بالجلد والحرارة.',
    tags: ['رجالي', 'كلاسيكي أيقوني', 'جلدي', 'شخصية قوية']
  },

  // 33. Ombré Leather
  {
    id: 'ombre-leather',
    name: 'Ombré Leather',
    arabicName: 'أومبري ليزر',
    brandInspiration: 'Tom Ford',
    gender: 'unisex',
    genderAr: 'للجنسين (يميل للرجالي)',
    family: 'Leather Warm Floral',
    familyAr: 'جلدي خام ناعم وهيل وياسمين نيش',
    topNotes: ['Cardamom'],
    topNotesAr: ['هيل أخضر فاخر نقي'],
    heartNotes: ['Leather', 'Jasmine Sambac'],
    heartNotesAr: ['جلد فاخر ناعم (مثل سترات الجلد الفارهة)', 'ياسمين سامباك'],
    baseNotes: ['Amber', 'Moss', 'Patchouli'],
    baseNotesAr: ['عنبر دافئ', 'طحالب خضراء رطبة', 'باتشولي نقي'],
    descriptionAr: 'أنقى رائحة جلد في العالم، فخامة مطلقة مستوحاة من صحراء الغرب الأمريكي بأناقة توم فورد.',
    isPopular: true,
    tags: ['نيش', 'جلدي فخم', 'فخامة ثقيلة', 'للجنسين']
  },

  // 34. Tommy Hilfiger
  {
    id: 'tommy',
    name: 'Tommy',
    arabicName: 'تومي هيلفيغر',
    brandInspiration: 'Tommy Hilfiger',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Citrus Aromatic',
    familyAr: 'حمضي منعش نظيف برائحة التفاح والنعناع',
    topNotes: ['Mint', 'Bergamot', 'Grapefruit', 'Lavender'],
    topNotesAr: ['نعناع بارد', 'برغموت', 'جريب فروت', 'خزامى'],
    heartNotes: ['Granny Smith Apple', 'Cranberry', 'Rose'],
    heartNotesAr: ['تفاح أخضر أمريكي', 'توت بري', 'ورد أصفر'],
    baseNotes: ['Cotton Flower', 'Cactus', 'Amber'],
    baseNotesAr: ['زهر القطن النظيف', 'صبار', 'عنبر خفيف'],
    descriptionAr: 'عطر الانتعاش والشباب اليومي النظيف، رائحة تمنحك إحساس النظافة والحيوية بعد الاستحمام.',
    tags: ['رجالي', 'انتعاش يومي', 'نظافة', 'صيفي']
  },

  // 35. Gucci Rush
  {
    id: 'gucci-rush',
    name: 'Gucci Rush',
    arabicName: 'جوتشي راش',
    brandInspiration: 'Gucci',
    gender: 'women',
    genderAr: 'حريمي',
    family: 'Chypre Fruity Exotic',
    familyAr: 'خوخ وباتشولي وفانيليا مغناطيسي',
    topNotes: ['Peach', 'Californian Gardenia', 'African Freesia Petals'],
    topNotesAr: ['خوخ ناضج غني', 'غاردينيا كاليفورنيا', 'فريسيا إفريقية'],
    heartNotes: ['Coriander', 'Damask Rose', 'Jasmine'],
    heartNotesAr: ['كزبرة دافئة', 'ورد دمشقي', 'ياسمين'],
    baseNotes: ['Patchouli', 'Natural Vanilla', 'Vetiver'],
    baseNotesAr: ['باتشولي قوي مغناطيسي', 'فانيليا طبيعية', 'نجيل الهند'],
    descriptionAr: 'العطر النسائي الجريء والمغري ذو الفوحان الكثيف برائحة الخوخ الحار والباتشولي.',
    tags: ['حريمي', 'جريء ومغري', 'خوخ وباتشولي', 'فوحان عالي']
  },

  // 36. Coco Chanel (Coco Mademoiselle)
  {
    id: 'coco-mademoiselle',
    name: 'Coco Mademoiselle',
    arabicName: 'كوكو مادموزيل',
    brandInspiration: 'Chanel',
    gender: 'women',
    genderAr: 'حريمي',
    family: 'Amber Floral Citrus',
    familyAr: 'زهري شرقي ناعم برتقال وباتشولي',
    topNotes: ['Orange', 'Mandarin Orange', 'Bergamot', 'Orange Blossom'],
    topNotesAr: ['برتقال صقلي مشرق', 'يوسفي', 'برغموت', 'زهر البرتقال'],
    heartNotes: ['Turkish Rose', 'Jasmine', 'Mimosa', 'Ylang-Ylang'],
    heartNotesAr: ['ورد تركي ندي', 'ياسمين فرنسي', 'ميموزا', 'إيلنغ إيلنغ'],
    baseNotes: ['Patchouli', 'White Musk', 'Vanilla', 'Vetiver', 'Tonka Bean', 'Opoponax'],
    baseNotesAr: ['باتشولي نقي مخفف', 'مسك أبيض راقي', 'فانيليا ناعمة', 'نجيل الهند'],
    descriptionAr: 'ملكة العطور النسائية الفرنسية، تجسيد للرقي والأناقة والأنوثة المستقلة النابضة بالحياة.',
    isPopular: true,
    tags: ['حريمي', 'فرنسي راقي', 'أيقوني', 'كل الأوقات']
  },

  // 37. Good Girl
  {
    id: 'good-girl',
    name: 'Good Girl',
    arabicName: 'جود جيرل (الحذاء الشهير)',
    brandInspiration: 'Carolina Herrera',
    gender: 'women',
    genderAr: 'حريمي',
    family: 'Amber Floral Gourmand',
    familyAr: 'لوز وتونكا وكاكاو وياسمين جذاب',
    topNotes: ['Almond', 'Coffee', 'Bergamot', 'Lemon'],
    topNotesAr: ['لوز مقرمش', 'قهوة دافئة', 'برغموت', 'ليمون'],
    heartNotes: ['Tuberose', 'Jasmine Sambac', 'Orange Blossom', 'Orris', 'Bulgarian Rose'],
    heartNotesAr: ['مسك الروم (تيوب روز)', 'ياسمين سامباك أبيض', 'زهر البرتقال'],
    baseNotes: ['Tonka Bean', 'Cacao', 'Vanilla', 'Praline', 'Sandalwood', 'Musk', 'Amber', 'Cashmere Wood', 'Patchouli', 'Cinnamon', 'Cedar'],
    baseNotesAr: ['حبوب التونكا الغنية', 'كاكاو داكن', 'فانيليا وكراميل برالين', 'خشب الكشمير'],
    descriptionAr: 'تناقض ساحر بين نقاء زهور التيوب روز البيضاء وعمق الكاكاو والتونكا والقهوة.',
    isPopular: true,
    tags: ['حريمي', 'سهرات وجاذبية', 'كاكاو ولوز', 'فوحان ممتاز']
  },

  // 38. Ehsas
  {
    id: 'ehsas',
    name: 'Ehsas',
    arabicName: 'إحساس الشرقي',
    brandInspiration: 'Arabian Oud Luxury Blend',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Oriental Amber Woody Floral',
    familyAr: 'شرقي فاخر زهور وورد ودهن عود وعنبر',
    topNotes: ['White Rose', 'Bergamot', 'Saffron'],
    topNotesAr: ['ورد أبيض نقي', 'برغموت منعش', 'زعفران إيراني أصيل'],
    heartNotes: ['Cedarwood', 'Jasmine', 'Lily-of-the-Valley'],
    heartNotesAr: ['خشب الأرز اللبناني', 'ياسمين مخملي', 'زنبق الوادي'],
    baseNotes: ['Dehn Oud', 'Warm Amber', 'Sandalwood', 'White Musk'],
    baseNotesAr: ['دهن عود صافي', 'عنبر دافئ فواح', 'خشب صندل هندي', 'مسك أبيض'],
    descriptionAr: 'عطر الإحساس والمشاعر الشرقية الفياضة، رائحة الزعفران والورد والعود الملكي المطعم بالعنبر.',
    tags: ['للجنسين', 'شرقي أصيل', 'زعفران وعود', 'فخامة هادئة']
  },

  // 39. Si Passione (Red)
  {
    id: 'si-passione',
    name: 'Sì Passione',
    arabicName: 'سي باسيون (الأحمر)',
    brandInspiration: 'Giorgio Armani',
    gender: 'women',
    genderAr: 'حريمي',
    family: 'Floral Fruity Bright',
    familyAr: 'فاكهي زهري مشرق كشمش أسود وكمثرى',
    topNotes: ['Pear', 'Blackcurrant', 'Pink Pepper', 'Grapefruit'],
    topNotesAr: ['كمثرى ناعمة', 'كشمش أسود مركز', 'فلفل وردي دافئ', 'جريب فروت'],
    heartNotes: ['Pineapple', 'Rose', 'Jasmine', 'Heliotrope'],
    heartNotesAr: ['أناناس مشرق', 'ورد أحمر ندي', 'ياسمين', 'هيليوتروب'],
    baseNotes: ['Vanilla', 'Cedar', 'Amberwood', 'Patchouli'],
    baseNotesAr: ['فانيليا رقيقة', 'خشب الأرز', 'خشب العنبر', 'باتشولي'],
    descriptionAr: 'عطر الشغف واللون الأحمر، إعلان صريح بالثقة والأنوثة الجريئة بعبير الكشمش والكمثرى والورد.',
    isPopular: true,
    tags: ['حريمي', 'شغف وأنوثة', 'أحمر أنيق', 'فاكهي راقي']
  },

  // 40. Scandal
  {
    id: 'scandal',
    name: 'Scandal',
    arabicName: 'سكاندال',
    brandInspiration: 'Jean Paul Gaultier',
    gender: 'women',
    genderAr: 'حريمي',
    family: 'Chypre Floral Honey Gourmand',
    familyAr: 'عسل نحل نقي وغاردينيا وباتشولي مسكر',
    topNotes: ['Blood Orange', 'Mandarin Orange'],
    topNotesAr: ['برتقال أحمر ياقوتي', 'يوسفي طازج'],
    heartNotes: ['Honey', 'Gardenia', 'Orange Blossom', 'Jasmine', 'Peach'],
    heartNotesAr: ['عسل نحل ذهبي ثقيل', 'غاردينيا بيضاء', 'زهر البرتقال', 'خوخ'],
    baseNotes: ['Beeswax', 'Caramel', 'Patchouli', 'Licorice'],
    baseNotesAr: ['شمع العسل الفاخر', 'كراميل دافئ', 'باتشولي أرضي', 'عرق سوس'],
    descriptionAr: 'عطر الفضيحة والإغراء المسكر، بحر من العسل الذهبي والكراميل الممزوجين بزهور الغاردينيا.',
    isPopular: true,
    tags: ['حريمي', 'عسل وكراميل', 'سهرات صاخبة', 'فوحان ممتد']
  },

  // -------------------------------------------------------------
  // ADDITIONS: 15 Highly popular, best-selling global fragrance oils
  // -------------------------------------------------------------

  // 41. Baccarat Rouge 540
  {
    id: 'baccarat-rouge-540',
    name: 'Baccarat Rouge 540',
    arabicName: 'باكارات روج 540',
    brandInspiration: 'Maison Francis Kurkdjian',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Floral Woody',
    familyAr: 'نيش سكر محروق وزعفران وعنبر حيتان',
    topNotes: ['Saffron', 'Jasmine'],
    topNotesAr: ['زعفران نقي أحمر', 'ياسمين مائي'],
    heartNotes: ['Amberwood', 'Ambergris'],
    heartNotesAr: ['خشب العنبر المضيء', 'عنبر الحوت'],
    baseNotes: ['Fir Resin', 'Cedar'],
    baseNotesAr: ['صمغ التنوب البلسمي', 'خشب الأرز'],
    descriptionAr: 'العطر النيش الأكثر شهرة وانتشاراً في العصر الحديث، توقيع عطري هوائي لا يُنسى كبلورات الكريستال المصهور.',
    isPopular: true,
    tags: ['نيش أسطوري', 'للجنسين', 'زعفران وعنبر', 'أيقونة عالمية']
  },

  // 42. Tom Ford Tobacco Vanille
  {
    id: 'tobacco-vanille',
    name: 'Tobacco Vanille',
    arabicName: 'توباكو فانيل',
    brandInspiration: 'Tom Ford',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Spicy Warm',
    familyAr: 'تبغ فاخر وفانيليا وفواكه مجففة نيش',
    topNotes: ['Tobacco Leaf', 'Spicy Notes'],
    topNotesAr: ['أوراق التبغ الكوبية الفاخرة', 'توابل عطرية دافئة'],
    heartNotes: ['Vanilla', 'Cacao', 'Tonka Bean', 'Tobacco Blossom'],
    heartNotesAr: ['فانيليا بوربون مكثفة', 'كاكاو داكن', 'تونكا', 'زهر التبغ'],
    baseNotes: ['Dried Fruits', 'Woody Notes'],
    baseNotesAr: ['فواكه مجففة معسلة', 'أخشاب راقية'],
    descriptionAr: 'قمة الفخامة الشتوية من توم فورد، مزيج غني من أوراق التبغ المعتقة مع الفانيليا والكاكاو.',
    isPopular: true,
    tags: ['نيش', 'للجنسين', 'تبغ وفانيليا', 'شتوي ثقيل']
  },

  // 43. Creed Silver Mountain Water
  {
    id: 'silver-mountain-water',
    name: 'Silver Mountain Water',
    arabicName: 'سيلفر ماونتن ووتر',
    brandInspiration: 'Creed',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Aromatic Fresh Tea Citrus',
    familyAr: 'شاي أخضر وكشمش وثلوج جبال الألب',
    topNotes: ['Bergamot', 'Mandarin Orange'],
    topNotesAr: ['برغموت مثلج', 'يوسفي منعش'],
    heartNotes: ['Green Tea', 'Blackcurrant'],
    heartNotesAr: ['شاي أخضر نقي منعش', 'كشمش أسود حامض خفيف'],
    baseNotes: ['Musk', 'Petitgrain', 'Sandalwood', 'Galbanum'],
    baseNotesAr: ['مسك أبيض جليدي', 'بيتيغرين', 'خشب صندل', 'غالبانوم'],
    descriptionAr: 'نسيم الثلوج المتلألئة على قمم جبال الألب السويسرية بعبير الشاي الأخضر والكشمش والمسك.',
    tags: ['نيش', 'للجنسين', 'ثلجي نقي', 'شاي ومسك']
  },

  // 44. Dior Homme Intense
  {
    id: 'dior-homme-intense',
    name: 'Dior Homme Intense',
    arabicName: 'ديور هوم إنتنس',
    brandInspiration: 'Dior',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Woody Floral Musk Powdery',
    familyAr: 'سوسن باودري وكاكاو وخشب أرز ملكي',
    topNotes: ['Lavender'],
    topNotesAr: ['خزامى فرنسية نقية'],
    heartNotes: ['Iris', 'Ambrette (Musk Mallow)', 'Pear'],
    heartNotesAr: ['سوسن باودري أرستقراطي', 'بذور الأمبريت', 'كمثرى'],
    baseNotes: ['Virginia Cedar', 'Vetiver'],
    baseNotesAr: ['خشب أرز فيرجينيا العريق', 'نجيل الهند'],
    descriptionAr: 'القمة المطلقة للشياكة الرسمية الرجالية بنوتة السوسن الباودرية الفاخرة والأخشاب.',
    isPopular: true,
    tags: ['رجالي', 'سوسن باودري', 'رسمي فخم', 'شياكة استثنائية']
  },

  // 45. Montale Chocolate Greedy
  {
    id: 'chocolate-greedy',
    name: 'Chocolate Greedy',
    arabicName: 'شوكليت جريدي',
    brandInspiration: 'Montale',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Vanilla Chocolate Gourmand',
    familyAr: 'بسكويت شوكولاتة وكاكاو وبن دافئ',
    topNotes: ['Coffee', 'Cacao'],
    topNotesAr: ['بن محمص', 'كاكاو دافئ'],
    heartNotes: ['Bitter Orange', 'Vanilla'],
    heartNotesAr: ['برتقال مر معسل', 'فانيليا كوكيز'],
    baseNotes: ['Tonka Bean', 'Dry Fruits'],
    baseNotesAr: ['حبوب التونكا', 'فواكه مجففة حلوة'],
    descriptionAr: 'لكل عشاق الكاكاو، رائحة كوكيز الشوكولاتة المخبوزة طازجة مع الفانيليا وحبوب البن.',
    tags: ['للجنسين', 'شوكولاتة', 'كوكيز وغورماند', 'ثبات مونتال']
  },

  // 46. Initio Oud for Greatness
  {
    id: 'oud-for-greatness',
    name: 'Oud for Greatness',
    arabicName: 'عود فور جريتنس',
    brandInspiration: 'Initio Parfums Prives',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Warm Spicy Oud Aromatic',
    familyAr: 'عود طبيعي وزعفران وجوزة الطيب نيش',
    topNotes: ['Saffron', 'Nutmeg', 'Lavender'],
    topNotesAr: ['زعفران ملكي أحمر', 'جوزة الطيب', 'خزامى'],
    heartNotes: ['Natural Agarwood (Oud)'],
    heartNotesAr: ['عود طبيعي نقي عالي التركيز'],
    baseNotes: ['Patchouli', 'Musk'],
    baseNotesAr: ['باتشولي أرضي فاخر', 'مسك أبيض نقي'],
    descriptionAr: 'طاقة العود الخالصة المهيبة، تمازج حاد بين الزعفران وجوزة الطيب مع أفخم قطرات خشب العود.',
    isPopular: true,
    tags: ['نيش', 'عود طبيعي', 'هيبة وقوة', 'ثبات خارق']
  },

  // 47. Maison Margiela By the Fireplace
  {
    id: 'by-the-fireplace',
    name: 'By the Fireplace',
    arabicName: 'باي ذا فايربليس',
    brandInspiration: 'Maison Margiela Replica',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Woody Warm Gourmand Smoky',
    familyAr: 'كستناء مشوية وأخشاب مدخنة وفانيليا',
    topNotes: ['Cloves', 'Pink Pepper', 'Orange Blossom'],
    topNotesAr: ['قرنفل دافئ', 'فلفل وردي', 'زهر البرتقال'],
    heartNotes: ['Chestnut', 'Guaiac Wood', 'Juniper'],
    heartNotesAr: ['كستناء مشوية على الحطب', 'خشب الغاياك', 'عرعر'],
    baseNotes: ['Vanilla', 'Peru Balsam', 'Cashmeran'],
    baseNotesAr: ['فانيليا دافئة مريحة', 'بلسم بيرو', 'كشميران'],
    descriptionAr: 'إحساس الدفء المطلق في ليلة شتوية مثلجة بجوار مدفأة الحطب مع رائحة الكستناء المشوية.',
    tags: ['نيش', 'للجنسين', 'كستناء وحطب', 'شتوي استثنائي']
  },

  // 48. Versace Dylan Blue
  {
    id: 'dylan-blue',
    name: 'Dylan Blue',
    arabicName: 'ديلان بلو',
    brandInspiration: 'Versace',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Aromatic Fougere Fresh Aquatic',
    familyAr: 'أزرق منعش بخور وأمبروكسان وبحر',
    topNotes: ['Calabrian Bergamot', 'Water Notes', 'Grapefruit', 'Fig Leaf'],
    topNotesAr: ['برغموت كالابريا', 'أمواج مائية منعشة', 'جريب فروت', 'أوراق التين'],
    heartNotes: ['Ambroxan', 'Black Pepper', 'Patchouli', 'Violet Leaf', 'Papyrus'],
    heartNotesAr: ['أمبروكسان فواح', 'فلفل أسود', 'باتشولي', 'أوراق البنفسج'],
    baseNotes: ['Incense', 'Musk', 'Tonka Bean', 'Saffron'],
    baseNotesAr: ['بخور غامض', 'مسك نظيف', 'تونكا', 'زعفران'],
    descriptionAr: 'الأزرق المتوسطي الجريء، انتعاش البحر والبرغموت مع قاعدة بخورية عميقة لا تقاوم.',
    tags: ['رجالي', 'منعش أزرق', 'يومي وجذاب', 'فوحان ممتاز']
  },

  // 49. Narciso Rodriguez For Her
  {
    id: 'narciso-for-her',
    name: 'For Her EDP',
    arabicName: 'نارسيسو رودريغيز فور هير',
    brandInspiration: 'Narciso Rodriguez',
    gender: 'women',
    genderAr: 'حريمي',
    family: 'Floral Woody Musk Powder',
    familyAr: 'مسك نقي أنثوي وورد ودراق وباتشولي',
    topNotes: ['Rose', 'Peach'],
    topNotesAr: ['ورد زهري ناعم', 'خوخ دراق مخملي'],
    heartNotes: ['Musk', 'Amber'],
    heartNotesAr: ['قلب المسك الشهير الخالص لنارسيسو', 'عنبر خفيف'],
    baseNotes: ['Patchouli', 'Sandalwood'],
    baseNotesAr: ['باتشولي نقي', 'خشب الصندل الكريمي'],
    descriptionAr: 'سحر المسك الأنثوي الحريري الأكثر نقاءً وجاذبية، أنوثة هادئة وراقية تذوب في الحواس.',
    tags: ['حريمي', 'مسك نقي', 'أنوثة راقية', 'ناعم وثابت']
  },

  // 50. Yves Saint Laurent Libre
  {
    id: 'ysl-libre',
    name: 'Libre EDP',
    arabicName: 'إيف سان لوران ليبر',
    brandInspiration: 'Yves Saint Laurent',
    gender: 'women',
    genderAr: 'حريمي',
    family: 'Amber Fougere Floral',
    familyAr: 'لافندر فرنسي وزهر برتقال وفانيليا حرة',
    topNotes: ['Lavender', 'Mandarin Orange', 'Blackcurrant', 'Petitgrain'],
    topNotesAr: ['خزامى فرنسية منعشة', 'يوسفي مشرق', 'كشمش أسود', 'بيتيغرين'],
    heartNotes: ['Lavender', 'Orange Blossom', 'Jasmine'],
    heartNotesAr: ['لافندر مقطر', 'زهر البرتقال المغربي', 'ياسمين سامباك'],
    baseNotes: ['Madagascar Vanilla', 'Musk', 'Cedar', 'Ambergris'],
    baseNotesAr: ['فانيليا مدغشقر الغنية', 'مسك نظيف', 'أرز', 'عنبر الحوت'],
    descriptionAr: 'عطر الحرية والجرأة للمرأة العصرية القوية، تزاوج مبتكر بين اللافندر وزهر البرتقال والفانيليا.',
    isPopular: true,
    tags: ['حريمي', 'لافندر أنثوي', 'فخم وأنيق', 'ثبات قوي']
  },

  // 51. Tom Ford Lost Cherry
  {
    id: 'lost-cherry',
    name: 'Lost Cherry',
    arabicName: 'لوست شيري',
    brandInspiration: 'Tom Ford',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Floral Cherry Boozy',
    familyAr: 'كرز أسود مسكر ولوز مر وفانيليا نيش',
    topNotes: ['Bitter Almond', 'Black Cherry', 'Cherry Liqueur'],
    topNotesAr: ['لوز مر أرستقراطي', 'كرز أسود ناضج', 'مستخلص الكرز المسكر'],
    heartNotes: ['Sour Cherry', 'Plum', 'Turkish Rose', 'Jasmine Sambac'],
    heartNotesAr: ['كرز حامض بري', 'برقوق مجفف', 'ورد تركي'],
    baseNotes: ['Vanilla', 'Tonka Bean', 'Cinnamon', 'Peru Balsam', 'Benzoin', 'Sandalwood', 'Cloves', 'Cedar', 'Patchouli', 'Vetiver'],
    baseNotesAr: ['فانيليا مدغشقر', 'تونكا دافئة', 'قرفة', 'بلسم بيرو', 'صندل'],
    descriptionAr: 'عطر الكرز الأسود الحصري الأكثر جاذبية وإغراء في عالم النيش، حلوى محرمة تنبض باللذة والفخامة.',
    isPopular: true,
    tags: ['نيش', 'للجنسين', 'كرز أسود ولوز', 'إغراء لا يقاوم']
  },

  // 52. Jean Paul Gaultier Le Male Elixir
  {
    id: 'le-male-elixir',
    name: 'Le Male Elixir',
    arabicName: 'لو ميل إلكسير',
    brandInspiration: 'Jean Paul Gaultier',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Amber Fougere Warm Sweet',
    familyAr: 'عسل ولافندر وتونكا وبنزوين مركز',
    topNotes: ['Lavender', 'Mint'],
    topNotesAr: ['خزامى مكثفة', 'نعناع طازج'],
    heartNotes: ['Vanilla', 'Benzoin'],
    heartNotesAr: ['فانيليا غنية محروقة', 'راتنج البنزوين'],
    baseNotes: ['Honey', 'Tonka Bean', 'Tobacco'],
    baseNotesAr: ['عسل ذهبي دافئ', 'حبوب التونكا المحمصة', 'لمسة تبغ راقية'],
    descriptionAr: 'الإكسير الذهبي الأكثر إشعالاً للحواس، فوحان ذهبي لا ينتهي من العسل والتونكا والفانيليا.',
    isPopular: true,
    tags: ['رجالي', 'عسل وتونكا', 'فوحان جبار', 'سهرات شتوية']
  },

  // 53. Kilian Black Phantom
  {
    id: 'black-phantom',
    name: 'Black Phantom',
    arabicName: 'بلاك فانتوم (الشبح الأسود)',
    brandInspiration: 'Kilian',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Vanilla Coffee Rum Gourmand',
    familyAr: 'قهوة سوداء وقصب سكر وشوكولاتة ولوز نيش',
    topNotes: ['Rum', 'Sugar Cane'],
    topNotesAr: ['مستخلص مشروب القراصنة المركز', 'سكر قصب كاريبي'],
    heartNotes: ['Dark Chocolate', 'Coffee', 'Caramel', 'Almond'],
    heartNotesAr: ['شوكولاتة داكنة مرة', 'قهوة إسبريسو مركزة', 'كراميل', 'لوز'],
    baseNotes: ['Heliotrope', 'Sandalwood'],
    baseNotesAr: ['هيليوتروب مخملي', 'خشب الصندل الدافئ'],
    descriptionAr: 'شعار "Memento Mori"، عطر القراصنة الغامض بنفحات القهوة الإيرلندية والشوكولاتة الداكنة.',
    tags: ['نيش', 'للجنسين', 'قهوة وشوكولاتة', 'غامض وفخم']
  },

  // 54. Xerjoff Naxos
  {
    id: 'naxos',
    name: 'Naxos 1861',
    arabicName: 'ناكسوس 1861',
    brandInspiration: 'Xerjoff',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Aromatic Spicy Honey Tobacco',
    familyAr: 'عسل صقلي وتبغ معتق ولافندر وحمضيات نيش',
    topNotes: ['Lavender', 'Bergamot', 'Lemon'],
    topNotesAr: ['خزامى إيطالية', 'برغموت صقلي', 'ليمون منعش'],
    heartNotes: ['Honey', 'Cinnamon', 'Cashmeran', 'Jasmine Sambac'],
    heartNotesAr: ['عسل نحل صقلي معتق', 'قرفة دافئة', 'كشميران حريري'],
    baseNotes: ['Tobacco Leaf', 'Tonka Bean', 'Vanilla'],
    baseNotesAr: ['أوراق التبغ الذهبي الفاخر', 'تونكا', 'فانيليا ناعمة'],
    descriptionAr: 'العطر النيش الأسطوري المستوحى من جزيرة صقلية، تناغم معجز بين العسل الصافي وأوراق التبغ واللافندر.',
    isPopular: true,
    tags: ['نيش أسطوري', 'للجنسين', 'عسل وتبغ', 'ثبات خيالي']
  },

  // 55. Louis Vuitton Imagination
  {
    id: 'imagination',
    name: 'Imagination',
    arabicName: 'إيماجينيشن لويس فيتون',
    brandInspiration: 'Louis Vuitton',
    gender: 'men',
    genderAr: 'رجالي (يميل للجنسين)',
    family: 'Citrus Aromatic Amber Black Tea',
    familyAr: 'شاي أسود وأمبروكسان وحمضيات إيطالية نيش',
    topNotes: ['Citron', 'Calabrian Bergamot', 'Sicilian Orange'],
    topNotesAr: ['أترج إيطالي فاخر', 'برغموت كالابريا', 'برتقال صقلي'],
    heartNotes: ['Tunisian Neroli', 'Nigerian Ginger', 'Ceylon Cinnamon'],
    heartNotesAr: ['نيرولي تونسي مشرق', 'زنجبيل نيجيري طازج', 'قرفة سيلانية'],
    baseNotes: ['Chinese Black Tea', 'Ambroxan', 'Guaiac Wood', 'Olibanum'],
    baseNotesAr: ['شاي أسود صيني نادر', 'أمبروكسان نقي فائق الجودة', 'خشب الغاياك', 'لبان'],
    descriptionAr: 'قمة الانتعاش الفاره في العالم، شاي أسود نادر مع أمبروكسان نقي وحمضيات كالابريا التي تطلق العنان للمخيلة.',
    isPopular: true,
    tags: ['نيش فاخر', 'رجالي', 'شاي أسود وحمضيات', 'انتعاش ملوكي']
  },

  // 56. Tuscan Leather - Tom Ford
  {
    id: 'tuscan-leather',
    name: 'Tuscan Leather',
    arabicName: 'توسكان ليزر',
    brandInspiration: 'Tom Ford',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Leather Chypre Fruity',
    familyAr: 'جلود فاخرة وتوت وتوت بري وزعفران نيش',
    topNotes: ['Raspberry', 'Saffron', 'Thyme'],
    topNotesAr: ['توت العليق الأحمر البري', 'زعفران إسباني', 'زعتر بري'],
    heartNotes: ['Olibanum', 'Jasmine'],
    heartNotesAr: ['لبان عطري مدخن', 'ياسمين ليلي ناعم'],
    baseNotes: ['Leather', 'Suede', 'Amber', 'Woody Notes'],
    baseNotesAr: ['جلد توسكاني فاخر', 'شامواه مخملي', 'عنبر نقي', 'أخشاب ثمينة'],
    descriptionAr: 'العطر الجلدي الأكثر فخامة وشهرة في العالم، يمزج رائحة الجلود الملكية المدبوغة مع حلاوة التوت البري ونفحات الزعفران.',
    isPopular: true,
    tags: ['نيش أسطوري', 'للجنسين', 'جلود مدبوغة', 'فخامة مطلقة']
  },

  // 57. Black Orchid - Tom Ford
  {
    id: 'black-orchid',
    name: 'Black Orchid',
    arabicName: 'بلاك أوركيد',
    brandInspiration: 'Tom Ford',
    gender: 'unisex',
    genderAr: 'للجنسين (جاذبية طاغية)',
    family: 'Amber Floral Warm Spicy',
    familyAr: 'زهري شرقي دافئ وغامض',
    topNotes: ['Truffle', 'Gardenia', 'Black Currant', 'Ylang-Ylang', 'Bergamot'],
    topNotesAr: ['كمأة سوداء نادرة', 'غاردينيا', 'كشمش أسود', 'يلانغ يلانغ', 'برغموت'],
    heartNotes: ['Orchid', 'Spices', 'Gardenia', 'Fruity Notes'],
    heartNotesAr: ['أوركيد أسود ساحر', 'توابل شرقية دافئة', 'لوتس بري'],
    baseNotes: ['Mexican Chocolate', 'Patchouli', 'Vanille', 'Incense', 'Amber', 'Sandalwood'],
    baseNotesAr: ['شوكولاتة مكسيكية داكنة', 'باتشولي معتق', 'فانيليا غنية', 'بخور مدخن', 'عنبر وصندل'],
    descriptionAr: 'عطر غامض ومثير للغاية يجمع بين زهرة الأوركيد السوداء النادرة والكمأة والشوكولاتة المرة والبخور لجاذبية لا تقاوم.',
    isPopular: true,
    tags: ['سهرات', 'للجنسين', 'غامض وجذاب', 'ثبات خيالي']
  },

  // 58. Oud Wood - Tom Ford
  {
    id: 'oud-wood',
    name: 'Oud Wood',
    arabicName: 'عود وود',
    brandInspiration: 'Tom Ford',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Woody Oriental Spicy',
    familyAr: 'أخشاب وعود دافئ راقٍ',
    topNotes: ['Rosewood', 'Cardamom', 'Chinese Pepper'],
    topNotesAr: ['خشب الورد البرازيلي', 'حبهان دافئ', 'فلفل صيني ناعم'],
    heartNotes: ['Oud Wood', 'Sandalwood', 'Vetiver'],
    heartNotesAr: ['خشب العود النقي المدخن', 'صندل هندي كريمي', 'نجيل الهند'],
    baseNotes: ['Tonka Bean', 'Vanilla', 'Amber'],
    baseNotesAr: ['حبوب التونكا الدافئة', 'فانيليا ناعمة', 'عنبر ذهبي'],
    descriptionAr: 'أرقى تجسيد عصري لخشب العود النادر بروح غربية راقية تناسب الاجتماعات الرسمية والمناسبات الراقية بفوحان هادئ فائق الأناقة.',
    isPopular: true,
    tags: ['نيش', 'للجنسين', 'عود فاخر', 'رسمي وأنيق']
  },

  // 59. Hacivat - Nishane
  {
    id: 'hacivat',
    name: 'Hacivat',
    arabicName: 'هاشيفات',
    brandInspiration: 'Nishane',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Chypre Fruity Woody',
    familyAr: 'حمضيات وفواكه وأخشاب شايبر نيش',
    topNotes: ['Pineapple', 'Grapefruit', 'Bergamot'],
    topNotesAr: ['أناناس استوائي طبيعي ناضج', 'جريب فروت مشرق', 'برغموت'],
    heartNotes: ['Cedar', 'Patchouli', 'Jasmine'],
    heartNotesAr: ['خشب الأرز الأطلسي', 'باتشولي إندونيسي', 'ياسمين أبيض'],
    baseNotes: ['Oakmoss', 'Woody Notes'],
    baseNotesAr: ['طحلب البلوط النقي (أوكموس)', 'أخشاب جافة عميقة'],
    descriptionAr: 'إمبراطور الفوحان المنعش في عالم عطور النيش، افتتاحية أناناس طبيعي غني مع طحلب البلوط والأخشاب لثبات يدوم لأيام.',
    isPopular: true,
    tags: ['نيش تركي', 'للجنسين', 'أناناس وفاكهي', 'فوحان مدمر']
  },

  // 60. Ani - Nishane
  {
    id: 'ani',
    name: 'Ani',
    arabicName: 'آني',
    brandInspiration: 'Nishane',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Floral Spicy Vanilla',
    familyAr: 'فانيليا نيش دافئة وزنجبيل وهيل',
    topNotes: ['Ginger', 'Bergamot', 'Pink Pepper', 'Green Notes'],
    topNotesAr: ['زنجبيل حار طازج', 'برغموت منعش', 'فلفل وردي', 'نوتات عشبية خضراء'],
    heartNotes: ['Cardamom', 'Black Currant', 'Turkish Rose'],
    heartNotesAr: ['حب الهيل الفاخر', 'كشمش أسود حلو', 'ورد تركي أصيل'],
    baseNotes: ['Vanilla', 'Benzoin', 'Sandalwood', 'Cedar', 'Patchouli', 'Ambergris', 'Musk'],
    baseNotesAr: ['فانيليا مدغشقر المخملية', 'بنزوين سيام', 'خشب الصندل', 'عنبر الحوت'],
    descriptionAr: 'عطر الفانيليا الأكثر تعقيداً وجمالاً في العالم، يبتعد عن السكرية ليمزج الزنجبيل الحارق مع الهيل وقاعدة الفانيليا الفاتنة.',
    isPopular: true,
    tags: ['نيش', 'للجنسين', 'فانيليا وتوابل', 'شتاء وخريف']
  },

  // 61. Interlude Man - Amouage
  {
    id: 'interlude-man',
    name: 'Interlude Man',
    arabicName: 'إنترلود مان (الوحش الأزرق)',
    brandInspiration: 'Amouage',
    gender: 'men',
    genderAr: 'رجالي فخم جداً',
    family: 'Amber Woody Spicy Smoke',
    familyAr: 'بخور عماني ملكي وعنبر ودخان وجلود',
    topNotes: ['Oregano', 'Pepper', 'Bergamot'],
    topNotesAr: ['أوريغانو بري', 'فلفل حار', 'برغموت حمضي'],
    heartNotes: ['Incense', 'Amber', 'Opoponax', 'Cistus'],
    heartNotesAr: ['لبان حوجري عماني فاخر', 'كهرمان دافئ', 'أوبوبوناكس صمغي'],
    baseNotes: ['Leather', 'Oud', 'Patchouli', 'Sandalwood'],
    baseNotesAr: ['جلد مدخن غليظ', 'عود طبيعي عريق', 'باتشولي', 'صندل'],
    descriptionAr: 'الملقب بالـ "Blue Beast" لقوته الأسطورية؛ سيمفونية بخورية عمانية من اللبان والكهرمان والعود والجلود لا تشبه أي عطر آخر.',
    isPopular: true,
    tags: ['نيش عماني', 'رجالي', 'بخور وعنبر', 'ثبات خارق']
  },

  // 62. Reflection Man - Amouage
  {
    id: 'reflection-man',
    name: 'Reflection Man',
    arabicName: 'ريفلكشن مان',
    brandInspiration: 'Amouage',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Woody Floral Musk',
    familyAr: 'أزهار نقية وأخشاب وصندل راقٍ',
    topNotes: ['Rosemary', 'Red Pepper Berries', 'Bitter Orange Leaves'],
    topNotesAr: ['إكليل الجبل العطري', 'فلفل أحمر ناعم', 'أوراق النارنج'],
    heartNotes: ['Neroli', 'Orris Root', 'Jasmine', 'Ylang-Ylang'],
    heartNotesAr: ['نيرولي تونسي مشرق', 'جذور السوسن المخملية', 'ياسمين ندي'],
    baseNotes: ['Vetiver', 'Cedarwood', 'Sandalwood', 'Patchouli'],
    baseNotesAr: ['خشب الصندل الكريمي', 'أرز أطلسي', 'نجيل الهند المدخن'],
    descriptionAr: 'عطر النقاء والجاذبية الملكية الهادئة، مزيج عبقري بين زهور النيرولي والسوسن وأخشاب الصندل يمنح شعوراً بالنظافة والفخامة المطلقة.',
    isPopular: true,
    tags: ['نيش', 'رجالي', 'أناقة ملكية', 'صيفي وربيعي']
  },

  // 63. Oud Satin Mood - Maison Francis Kurkdjian
  {
    id: 'oud-satin-mood',
    name: 'Oud Satin Mood',
    arabicName: 'عود ساتان مود',
    brandInspiration: 'Maison Francis Kurkdjian',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Floral Rich Oud',
    familyAr: 'ورد دمشقي وفاخر وعود حريري وفانيليا نيش',
    topNotes: ['Violet Accord', 'Geranium'],
    topNotesAr: ['أزهار البنفسج البودرية', 'إبرة الراعي'],
    heartNotes: ['Damascena Rose', 'Turkish Rose', 'Cinnamon'],
    heartNotesAr: ['ورد دمشقي فاخر', 'ورد تركي ندي', 'قرفة دافئة'],
    baseNotes: ['Laotian Oud', 'Benzoin', 'Vanilla', 'Amber'],
    baseNotesAr: ['عود لاوسي طبيعي حريري', 'بنزوين كهرماني', 'فانيليا ناعمة'],
    descriptionAr: 'كأنك تتلفّع بقماش الساتان الحريري الفاخر؛ تمازج باذخ بين أرقى أنواع الورد والعود اللاوسي النادر مع نفحات الفانيليا البودرية.',
    isPopular: true,
    tags: ['نيش باريسي', 'للجنسين', 'عود وورد', 'فخامة وسهرات']
  },

  // 64. Grand Soir - Maison Francis Kurkdjian
  {
    id: 'grand-soir',
    name: 'Grand Soir',
    arabicName: 'جراند سوار (أمسية باريسية)',
    brandInspiration: 'Maison Francis Kurkdjian',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Warm Resinous',
    familyAr: 'عنبر ملكي دافئ وتونكا وفانيليا',
    topNotes: ['Spanish Labdanum', 'Lavender'],
    topNotesAr: ['لابدانوم إسباني غني', 'خزامى هادئة'],
    heartNotes: ['Benzoin Siam', 'Tonka Bean'],
    heartNotesAr: ['صمغ البنزوين السيامي الذهبي', 'حبوب تونكا برازيلية'],
    baseNotes: ['Amber', 'Vanilla', 'Musk'],
    baseNotesAr: ['عنبر ذهبي سائل دافئ', 'فانيليا غنية مخملية'],
    descriptionAr: 'تجسيد ساحر لليالي باريس الذهبية المتلألئة؛ عنبر دافئ نقي يغلف الحواس بهالة من الرقي والجاذبية التي تأسر القلوب.',
    isPopular: true,
    tags: ['نيش', 'للجنسين', 'عنبر دافئ', 'شتاء وسهرات']
  },

  // 65. Red Tobacco - Mancera
  {
    id: 'red-tobacco',
    name: 'Red Tobacco',
    arabicName: 'ريد توباكو',
    brandInspiration: 'Mancera',
    gender: 'unisex',
    genderAr: 'للجنسين (يميل للرجالي)',
    family: 'Woody Spicy Tobacco Bomb',
    familyAr: 'تبغ كوبي حار وزعفران وقرفة وعود قوي',
    topNotes: ['Cinnamon', 'Agarwood (Oud)', 'Saffron', 'Incense', 'Nutmeg', 'Green Apple', 'White Pear'],
    topNotesAr: ['قرفة حارة', 'عود مدخن', 'زعفران أحمر', 'بخور وبخور جاوي', 'تفاح أخضر', 'كمثرى بيضاء'],
    heartNotes: ['Patchouli', 'Jasmine'],
    heartNotesAr: ['باتشولي مدخن داكن', 'ياسمين أبيض'],
    baseNotes: ['Tobacco', 'Madagascar Vanilla', 'Amber', 'Sandalwood', 'Guaiac Wood', 'White Musk', 'Haitian Vetiver'],
    baseNotesAr: ['أوراق التبغ الكوبي المعتق', 'فانيليا مدغشقر المركزة', 'عنبر وغاياك', 'خشب الصندل'],
    descriptionAr: 'قنبلة الفوحان والثبات الشهيرة؛ عطر دافئ وجريء جداً برائحة التبغ والبهارات الحارة والعود الذي يملأ أي مكان تدخله.',
    isPopular: true,
    tags: ['نيش فرنسي', 'قوي جداً', 'تبغ وتوابل', 'شتاء وثبات أسطوري']
  },

  // 66. Cedrat Boise - Mancera
  {
    id: 'cedrat-boise',
    name: 'Cedrat Boise',
    arabicName: 'سيدرات بوازيه',
    brandInspiration: 'Mancera',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Citrus Aromatic Woody Leather',
    familyAr: 'حمضيات صقلية وأخشاب وجلود ناعمة',
    topNotes: ['Sicilian Lemon', 'Black Currant', 'Bergamot', 'Spicy Notes'],
    topNotesAr: ['ليمون صقلي منعش', 'كشمش أسود', 'برغموت', 'توابل خفيفة'],
    heartNotes: ['Fruity Notes', 'Patchouli Leaf', 'Water Jasmine'],
    heartNotesAr: ['فواكه استوائية مبهجة', 'أوراق الباتشولي', 'ياسمين مائي'],
    baseNotes: ['Cedar', 'Leather', 'Sandalwood', 'Vanilla', 'White Musk', 'Moss'],
    baseNotesAr: ['خشب الأرز', 'جلد ناعم', 'صندل', 'فانيليا خفيفة', 'مسك أبيض'],
    descriptionAr: 'البديل الأقوى والأكثر ثباتاً لعطور الكريت أفنتوس، يجمع بين انتعاش الليمون الصقلي والفواكه وعمق الأخشاب والجلود الناعمة.',
    isPopular: true,
    tags: ['نيش', 'للجنسين', 'حمضيات وأخشاب', 'يومي ومناسبات']
  },

  // 67. Roses Vanille - Mancera
  {
    id: 'roses-vanille',
    name: 'Roses Vanille',
    arabicName: 'روز فانيلا',
    brandInspiration: 'Mancera',
    gender: 'women',
    genderAr: 'حريمي (مفضل جداً)',
    family: 'Amber Floral Sweet Gourmand',
    familyAr: 'ورد سكري وفانيليا غنية مسكية',
    topNotes: ['Calabrian Lemon', 'Water Notes'],
    topNotesAr: ['ليمون كالابريا المشرق', 'رذاذ الماء المنعش'],
    heartNotes: ['Rose', 'Sugar'],
    heartNotesAr: ['بتلات الورد الصافي', 'حبيبات السكر المكرملة'],
    baseNotes: ['Vanilla', 'Sugar', 'White Musk', 'Cedar'],
    baseNotesAr: ['فانيليا بوربون مكثفة', 'مسك أبيض حريري', 'خشب الأرز'],
    descriptionAr: 'أشهر عطر نسائي سكري يجمع بين عبير الورد الدمشقي المسكّر مع الفانيليا الفاتنة والمسك الأبيض بنعومة فائقة الجاذبية.',
    isPopular: true,
    tags: ['حريمي الأكثر طلباً', 'فانيليا وورد', 'سكري وناعم', 'فوحان ممتد']
  },

  // 68. Intense Cafe - Montale
  {
    id: 'intense-cafe',
    name: 'Intense Cafe',
    arabicName: 'إنتنس كافيه',
    brandInspiration: 'Montale',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Floral Coffee Gourmand',
    familyAr: 'قهوة وورد وفانيليا مخملية نيش',
    topNotes: ['Floral Notes'],
    topNotesAr: ['أزهار صباحية منعشة'],
    heartNotes: ['Coffee', 'Rose'],
    heartNotesAr: ['بن قهوة أسود طازج التحميص', 'ورد مخملي أحمر'],
    baseNotes: ['Vanilla', 'White Musk', 'Amber'],
    baseNotesAr: ['فانيليا كريمية حلوة', 'مسك أبيض نظيف', 'عنبر دافئ'],
    descriptionAr: 'رائحة القهوة الصباحية الممزوجة مع باقة ورود حمراء يابسة مغموسة في الكريمة والفانيليا الدافئة؛ عطر دافئ ساحر لا يُنسى.',
    isPopular: true,
    tags: ['نيش فرنسي', 'للجنسين', 'قهوة وفانيليا', 'شتاء وخريف']
  },

  // 69. Arabians Tonka - Montale
  {
    id: 'arabians-tonka',
    name: 'Arabians Tonka',
    arabicName: 'أرابيانز تونكا (الحصان العربي)',
    brandInspiration: 'Montale',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Woody Sweet Spice',
    familyAr: 'تونكا وسكر وعود وزعفران فاخر',
    topNotes: ['Saffron', 'Bergamot'],
    topNotesAr: ['زعفران نقي أحمر', 'برغموت منتعش'],
    heartNotes: ['Agarwood (Oud)', 'Bulgarian Rose'],
    heartNotesAr: ['عود شرقي غني', 'ورد بلغاري ملكي'],
    baseNotes: ['Tonka Bean', 'Sugar Cane', 'Amber', 'White Musk', 'Oakmoss'],
    baseNotesAr: ['حبوب التونكا البرازيلية', 'سكر القصب البني', 'عنبر الحوت', 'مسك أبيض'],
    descriptionAr: 'تكريم للفارس والحصان العربي الأصيل؛ خليط متفجر بين حلاوة سكر القصب والتونكا مع فخامة العود والزعفران بثبات مرعب.',
    isPopular: true,
    tags: ['نيش', 'للجنسين', 'تونكا وسكر وعود', 'فوحان جبار']
  },

  // 70. Boss Bottled - Hugo Boss
  {
    id: 'boss-bottled',
    name: 'Boss Bottled',
    arabicName: 'هوجو بوس بوتلد',
    brandInspiration: 'Hugo Boss',
    gender: 'men',
    genderAr: 'رجالي',
    family: 'Woody Spicy Warm Apple',
    familyAr: 'تفاح مكرمل وقرفة وأخشاب كلاسيكية',
    topNotes: ['Apple', 'Plum', 'Lemon', 'Bergamot', 'Oakmoss', 'Geranium'],
    topNotesAr: ['تفاح أحمر مقرمش', 'برقوق حلو', 'ليمون وبرغموت', 'إبرة الراعي'],
    heartNotes: ['Cinnamon', 'Mahogany', 'Carnation'],
    heartNotesAr: ['قرفة حارة دافئة', 'خشب الماهوجني', 'قرنفل عطري'],
    baseNotes: ['Vanilla', 'Sandalwood', 'Cedar', 'Vetiver', 'Olive Tree'],
    baseNotesAr: ['فانيليا دافئة', 'صندل كريمي', 'أرز', 'نجيل الهند', 'خشب الزيتون'],
    descriptionAr: 'العطر الكلاسيكي الذي لا يتقادم أبداً للرجل العصري؛ رائحة فطيرة التفاح المتبلة بالقرفة والأخشاب الدافئة.',
    isPopular: true,
    tags: ['رجالي', 'تفاح وقرفة', 'كلاسيكي محبوب', 'يومي ومكتبي']
  },

  // 71. Terre d'Hermès - Hermès
  {
    id: 'terre-d-hermes',
    name: "Terre d'Hermès",
    arabicName: 'تير دي هيرميس',
    brandInspiration: 'Hermès',
    gender: 'men',
    genderAr: 'رجالي فخم',
    family: 'Woody Chypre Mineral Citrus',
    familyAr: 'برتقال ناضج وفلفل ونجيل الهند وأحجار بركانية',
    topNotes: ['Orange', 'Grapefruit'],
    topNotesAr: ['برتقال ناضج من البستان', 'جريب فروت مر'],
    heartNotes: ['Pepper', 'Pelargonium', 'Flint'],
    heartNotesAr: ['فلفل أسود خشن', 'إبرة الراعي', 'حجر الصوان البركاني'],
    baseNotes: ['Vetiver', 'Cedar', 'Patchouli', 'Benzoin'],
    baseNotesAr: ['نجيل الهند الترابي', 'خشب الأرز', 'باتشولي', 'صمغ البنزوين'],
    descriptionAr: 'حوار عبقري بين السماء والأرض والتراب؛ عبير البرتقال الحاد مع لمسات المعادن ونجيل الهند التي تعكس وقار ورجولة ناضجة.',
    isPopular: true,
    tags: ['رجالي راقٍ', 'برتقال وأخشاب ترابية', 'رسمي ومميز']
  },

  // 72. L'Interdit - Givenchy
  {
    id: 'l-interdit',
    name: "L'Interdit",
    arabicName: 'لينتردي (المحظور)',
    brandInspiration: 'Givenchy',
    gender: 'women',
    genderAr: 'حريمي ملوكي',
    family: 'Amber Floral White Flower',
    familyAr: 'مسك الروم وزهر البرتقال والباتشولي النقي',
    topNotes: ['Pear', 'Bergamot'],
    topNotesAr: ['كمثرى حلوة طازجة', 'برغموت منعش'],
    heartNotes: ['Tuberose', 'Orange Blossom', 'Jasmine Sambac'],
    heartNotesAr: ['مسك الروم (تيوبروز) الفاتن', 'زهر البرتقال الأبيض', 'ياسمين سامباك'],
    baseNotes: ['Patchouli', 'Vanilla', 'Ambroxan', 'Vetiver'],
    baseNotesAr: ['باتشولي معتق', 'فانيليا ناعمة', 'أمبروكسان', 'نجيل الهند'],
    descriptionAr: 'تحية للأنوثة الجريئة والكسر للأعراف؛ تناقض أخّاذ بين باقة الأزهار البيضاء الساطعة وقاعدة الباتشولي والعود الأرضي الفخم.',
    isPopular: true,
    tags: ['حريمي فاخر', 'أزهار بيضاء وتيوبروز', 'سهرات وجاذبية']
  },

  // 73. Mon Guerlain - Guerlain
  {
    id: 'mon-guerlain',
    name: 'Mon Guerlain',
    arabicName: 'مون جيرلان',
    brandInspiration: 'Guerlain',
    gender: 'women',
    genderAr: 'حريمي راقٍ',
    family: 'Amber Woody Lavender Vanilla',
    familyAr: 'خزامى فرنسية وفانيليا تاهيتي وسوسن ملكي',
    topNotes: ['Lavender', 'Bergamot'],
    topNotesAr: ['خزامى كارلا بروفنسالية نادرة', 'برغموت منعش'],
    heartNotes: ['Iris', 'Jasmine Sambac', 'Rose'],
    heartNotesAr: ['سوسن ناعم بودري', 'ياسمين سامباك', 'ورد ندي'],
    baseNotes: ['Tahitian Vanilla', 'Coumarin', 'Australian Sandalwood', 'Benzoin', 'White Musk', 'Patchouli'],
    baseNotesAr: ['فانيليا تاهيتي الثمينة', 'كومارين مهدئ', 'صندل أسترالي', 'مسك أبيض'],
    descriptionAr: 'عطر النعومة والأناقة الأنثوية الهادئة؛ امتزاج اللافندر النقي مع أرقى أنواع الفانيليا البودرية التاهيتية لصناعة هالة مخملية دافئة.',
    isPopular: true,
    tags: ['حريمي رقيق', 'لافندر وفانيليا بودرية', 'أنثوي هادئ']
  },

  // 74. Tobacco Mandarin - Byredo
  {
    id: 'tobacco-mandarin',
    name: 'Tobacco Mandarin',
    arabicName: 'توباكو ماندارين',
    brandInspiration: 'Byredo',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Woody Citrus Smoke',
    familyAr: 'يوسفي مدخن وتبغ وجلود وكهرمان نيش',
    topNotes: ['Mandarin Orange', 'Cumin', 'Coriander'],
    topNotesAr: ['يوسفي مشرق مكثف', 'كمون دافئ', 'كزبرة عطرية'],
    heartNotes: ['Tobacco', 'Leather', 'Labdanum'],
    heartNotesAr: ['تبغ مدخن فاخر', 'جلد خام معتق', 'لابدانوم شرقي'],
    baseNotes: ['Olibanum (Frankincense)', 'Sandalwood', 'Oud'],
    baseNotesAr: ['لبان عطري بخوري', 'خشب الصندل الكريمي', 'عود نادر'],
    descriptionAr: 'عطر تحفة من باي ريدو؛ تباين سحري ومدهش بين حموضة اليوسفي اللامع وظلمة التبغ والجلود المدخنة مع البخور.',
    isPopular: true,
    tags: ['نيش سويدي', 'للجنسين', 'يوسفي وتبغ مدخن', 'عشاق النيش']
  },

  // 75. Elysium Pour Homme - Roja Dove
  {
    id: 'elysium',
    name: 'Elysium Pour Homme',
    arabicName: 'إليزيوم بور هوم',
    brandInspiration: 'Roja Dove',
    gender: 'men',
    genderAr: 'رجالي فائق الفخامة',
    family: 'Aromatic Fougere Fresh Citrus',
    familyAr: 'كوكتيل حمضيات فاخر وكشمش أسود وجلود نيش',
    topNotes: ['Grapefruit', 'Lemon', 'Bergamot', 'Lime', 'Thyme', 'Artemisia', 'Galbanum'],
    topNotesAr: ['جريب فروت منعش', 'ليمون ولايم', 'برغموت', 'زعتر بري', 'شيح وغلبانوم'],
    heartNotes: ['Vetiver', 'Juniper Berries', 'Black Currant', 'Apple', 'Pink Pepper', 'Cedar', 'Rose', 'Jasmine'],
    heartNotesAr: ['نجيل الهند الندي', 'توت العرعر', 'كشمش أسود', 'تفاح مقرمش', 'فلفل وردي', 'أرز وياسمين'],
    baseNotes: ['Ambergris', 'Leather', 'Vanilla', 'Benzoin', 'Labdanum'],
    baseNotesAr: ['عنبر الحوت النقي', 'جلد فاخر', 'فانيليا ناعمة', 'بنزوين'],
    descriptionAr: 'درة تاج العطور النيش البريطانية من روجا دوف؛ انتعاش لا نظير له من الحمضيات الفاخرة المطعمة بالعنبر النقي والجلود الملكية.',
    isPopular: true,
    tags: ['نيش بريطاني فخم', 'رجالي', 'حمضيات وعنبر وجلود', 'ملوكي']
  },

  // 76. Side Effect - Initio Parfums Privés
  {
    id: 'side-effect',
    name: 'Side Effect',
    arabicName: 'سايد إيفكت',
    brandInspiration: 'Initio Parfums Privés',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Spicy Tobacco Rum',
    familyAr: 'روم وتبغ وقرفة وفانيليا بوربون نيش',
    topNotes: ['Rum', 'Cinnamon'],
    topNotesAr: ['مستخلص الروم الكاريبي المعتق', 'قرفة سيلانية دافئة'],
    heartNotes: ['Tobacco', 'Saffron'],
    heartNotesAr: ['أوراق التبغ الذهبي النقي', 'زعفران فاخر'],
    baseNotes: ['Vanilla', 'Sandalwood', 'Hedione'],
    baseNotesAr: ['فانيليا بوربون غنية', 'صندل كريمي', 'هيديون جذاب'],
    descriptionAr: 'عطر يثير المشاعر ويوقظ الحواس؛ تركيبة مغناطيسية تجمع بين التبغ والقرفة ومشروب الروم والفانيليا الغنية لتأثير سري لا يُقاوم.',
    isPopular: true,
    tags: ['نيش فرنسي', 'للجنسين', 'تبغ وروم وقرفة', 'جاذبية طاغية']
  },

  // 77. Oud for Greatness - Initio Parfums Privés
  {
    id: 'oud-for-greatness',
    name: 'Oud for Greatness',
    arabicName: 'عود فور جريتنس (عود العظمة)',
    brandInspiration: 'Initio Parfums Privés',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Woody Spicy Sacred Oud',
    familyAr: 'عود طبيعي مقدس وزعفران ولافندر وجوزة الطيب',
    topNotes: ['Saffron', 'Nutmeg', 'Lavender'],
    topNotesAr: ['زعفران نقي مكثف', 'جوزة الطيب العطرية', 'خزامى هادئة'],
    heartNotes: ['Natural Agarwood (Oud)'],
    heartNotesAr: ['خشب العود الطبيعي الفاخر بنقاء استثنائي'],
    baseNotes: ['Patchouli', 'Musk'],
    baseNotesAr: ['باتشولي مدخن داكن', 'مسك غامض وجذاب'],
    descriptionAr: 'العطر الذي يعتبر تميمة الحظ والقوة؛ يبرز نقاء خشب العود الطبيعي المعتق بأعلى درجات الفخامة مع الزعفران واللافندر.',
    isPopular: true,
    tags: ['نيش فائق القوة', 'للجنسين', 'عود وزعفران', 'ثبات خارق']
  },

  // 78. Ombre Nomade - Louis Vuitton
  {
    id: 'ombre-nomade',
    name: 'Ombré Nomade',
    arabicName: 'أومبر نوماد',
    brandInspiration: 'Louis Vuitton',
    gender: 'unisex',
    genderAr: 'للجنسين (يميل للرجالي)',
    family: 'Amber Woody Leather Smoky Oud',
    familyAr: 'عود أسام وبخور وتوت العليق وزعفران ملكي',
    topNotes: ['Raspberry', 'Geranium'],
    topNotesAr: ['توت العليق الحلو الحامض', 'إبرة الراعي'],
    heartNotes: ['Incense', 'Rose', 'Saffron'],
    heartNotesAr: ['دخان البخور الملوكي', 'ورد دمشقي ندي', 'زعفران أحمر'],
    baseNotes: ['Assam Oud', 'Leather', 'Benzoin', 'Birch'],
    baseNotesAr: ['عود أسام الطبيعي الفاخر', 'جلد مدخن', 'صمغ البنزوين', 'خشب البتولا'],
    descriptionAr: 'أسطورة لويس فيتون؛ رحلة عبر الكثبان الرملية الذهبية بالصحراء مع عود أسام والبخور وتوت العليق ذو الفوحان الكاسح الذي لا يهدأ.',
    isPopular: true,
    tags: ['نيش لويس فيتون', 'للجنسين', 'عود وتوت وبخور', 'فوحان مدمر']
  },

  // 79. Symphony - Louis Vuitton
  {
    id: 'symphony',
    name: 'Symphony',
    arabicName: 'سيمفوني',
    brandInspiration: 'Louis Vuitton',
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Citrus Spicy Fresh Luxury',
    familyAr: 'جريب فروت حارق وزنجبيل وبرغموت نيش راقٍ',
    topNotes: ['Grapefruit Zest', 'Calabrian Bergamot'],
    topNotesAr: ['بشر الجريب فروت اللامع', 'برغموت كالابريا الصافي'],
    heartNotes: ['Nigerian Ginger'],
    heartNotesAr: ['زنجبيل نيجيري طازج لاذع ومشرق'],
    baseNotes: ['Velvety Musk', 'Woody Amber'],
    baseNotesAr: ['مسك مخملي نقي', 'عنبر خشبي مشرق'],
    descriptionAr: 'معزوفة موسيقية في قنينة عطر؛ بساطة ظاهرية لكنها تخفي نقاءً مذهلاً من الجريب فروت والزنجبيل الناري الذي ينبض بالحيوية والانتعاش الفاره.',
    isPopular: true,
    tags: ['نيش لويس فيتون', 'للجنسين', 'زنجبيل وجريب فروت', 'فخامة وانتعاش']
  },

  // 80. Halfeti - Penhaligon's
  {
    id: 'halfeti',
    name: 'Halfeti',
    arabicName: 'هالفيتي (الوردة السوداء)',
    brandInspiration: "Penhaligon's",
    gender: 'unisex',
    genderAr: 'للجنسين',
    family: 'Amber Woody Spicy Black Rose',
    familyAr: 'ورد أسود تركي نادر وجلود وتوابل وعود ملكي',
    topNotes: ['Cypress Leaf', 'Saffron', 'Cardamom', 'Artemisia', 'Bergamot', 'Grapefruit'],
    topNotesAr: ['أوراق السرو العطرية', 'زعفران أحمر', 'حبهان ملكي', 'شيح وبرغموت'],
    heartNotes: ['Bulgarian Rose', 'Nutmeg', 'Jasmine'],
    heartNotesAr: ['ورد هالفيتي الأسود التركي النادر', 'جوزة الطيب', 'ياسمين'],
    baseNotes: ['Agarwood (Oud)', 'Leather', 'Cedar', 'Sandalwood', 'Amber', 'Tonka Bean', 'Vanilla', 'Musk'],
    baseNotesAr: ['خشب العود', 'جلد مدبوغ', 'خشب الأرز', 'صندل', 'عنبر وتونكا وفانيليا'],
    descriptionAr: 'مستوحى من قرية هالفيتي التركية حيث ينمو الورد الأسود الغامض على ضفاف نهر الفرات؛ عطر شرقي غني بالجلود والعود والبهارات الفاخرة.',
    isPopular: true,
    tags: ['نيش بريطاني ملكي', 'للجنسين', 'ورد أسود وعود وجلود', 'فخامة مطلقة']
  }
];
