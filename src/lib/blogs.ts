export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  createdAt: string; // ISO date string
  published: boolean;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "روتين يومي بسيط للعناية بالبشرة",
    slug: "daily-skincare-routine",
    excerpt:
      "خطوات عملية ومختصرة تساعدك على بناء روتين مناسب لنوع بشرتك بدون تعقيد.",
    content:
      "هذا محتوى توضيحي (Placeholder) للمقال. سيتم استبداله لاحقًا بمحتوى طبي مفصل يعتمد على تشخيص الحالة ونوع البشرة.\n\nنقاط عامة:\n- التنظيف اللطيف\n- الترطيب\n- واقي الشمس\n- متابعة أي تغيرات جلدية",
    image:
      "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=1200&q=80",
    category: "العناية بالبشرة",
    createdAt: "2026-05-01",
    published: true,
  },
  {
    id: "2",
    title: "متى تحتاجين لاستشارة طبيبة الجلدية؟",
    slug: "when-to-see-dermatologist",
    excerpt:
      "علامات شائعة تشير لضرورة الفحص الطبي بدل الاعتماد على التجربة الذاتية.",
    content:
      "محتوى توضيحي (Placeholder).\n\nراجعي طبيبة الجلدية عند:\n- حكة مستمرة أو طفح متكرر\n- بقع تتغير بسرعة\n- حب شباب شديد أو ندبات\n- تساقط شعر ملحوظ",
    image:
      "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80",
    category: "استشارات",
    createdAt: "2026-04-18",
    published: true,
  },
  {
    id: "3",
    title: "حقائق مهمة عن واقي الشمس",
    slug: "sunscreen-facts",
    excerpt:
      "اختيار الواقي المناسب وطريقة الاستخدام الصحيحة للحصول على أفضل حماية.",
    content:
      "محتوى توضيحي (Placeholder).\n\nتذكير:\n- إعادة التطبيق كل ساعتين\n- اختيار SPF مناسب\n- تغطية المناطق المكشوفة\n- عدم إهمال الشتاء والداخل",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    category: "نصائح",
    createdAt: "2026-04-05",
    published: true,
  },
  {
    id: "4",
    title: "جلسات الليزر: ماذا تتوقعين؟",
    slug: "laser-sessions-what-to-expect",
    excerpt:
      "نظرة عامة على التحضير للجلسة وما بعد الإجراء لتقليل التهيج وتحسين النتائج.",
    content:
      "محتوى توضيحي (Placeholder).\n\nقبل الجلسة:\n- تقييم نوع البشرة\n- تجنب التسمير\nبعد الجلسة:\n- ترطيب وتهدئة\n- واقي شمس\n- متابعة أي تهيج",
    image:
      "https://images.unsplash.com/photo-1520974735194-6b9549b2c8fa?auto=format&fit=crop&w=1200&q=80",
    category: "ليزر",
    createdAt: "2026-03-22",
    published: true,
  },
  {
    id: "5",
    title: "أخطاء شائعة في العناية بالبشرة",
    slug: "common-skincare-mistakes",
    excerpt:
      "أخطاء بسيطة قد تسبب تهيجًا أو نتائج عكسية وكيفية تجنبها بسهولة.",
    content:
      "محتوى توضيحي (Placeholder).\n\nأمثلة:\n- الإفراط في التقشير\n- خلط منتجات كثيرة دفعة واحدة\n- إهمال الترطيب\n- النوم بالمكياج",
    image:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1200&q=80",
    category: "العناية بالبشرة",
    createdAt: "2026-03-10",
    published: false,
  },
];

