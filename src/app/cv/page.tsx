import Image from "next/image";
import Link from "next/link";

type TimelineItem = { year: string; title: string; description: string };

const timeline: TimelineItem[] = [
  { year: "2009", title: "بداية المسار المهني", description: "انطلاق المسار المهني في مجال جراحة العظام والمفاصل." },
  {
    year: "2012",
    title: "التدريب التخصصي",
    description: "تدريب تخصصي مكثف لصقل المهارات السريرية والجراحية.",
  },
  {
    year: "2016",
    title: "اعتماد وزمالات",
    description: "الحصول على اعتمادات وزمالات في مجال جراحة العظام (حسب المؤهلات).",
  },
  { year: "2022", title: "افتتاح العيادة", description: "افتتاح العيادة وتقديم خدمات متخصصة في أبها." },
  {
    year: "2025",
    title: "تطوير الخدمات الرقمية",
    description: "تحسين تجربة المريض عبر الحجز والمتابعة الرقمية.",
  },
];

const sections = [
  {
    title: "المؤهلات العلمية",
    items: [
      "البورد السعودي في جراحة العظام (مرتبة الشرف)",
      "زمالة جامعة كوينز - كندا (استبدال المفاصل ومناظير الورك)",
      "زمالة جامعة مكغيل - كندا (استبدال المفاصل)",
      "زمالة جامعة أوتاوا - كندا (أورام العظام والعضلات)",
      "ماجستير الإدارة التنفيذية - كلية الأمير محمد بن سلمان",
      "ماجستير إدارة الخدمات السريرية - كلية الطب بجامعة هارفارد",
    ],
  },
  {
    title: "الشهادات والدورات",
    items: [
      "دورات متقدمة في استبدال الركبة والورك",
      "دورات في علاج أورام العظام والعضلات",
      "دورات في إعادة التأهيل والعلاج الوظيفي بعد الجراحة",
    ],
  },
  {
    title: "الخبرات العملية",
    items: [
      "خبرة أكثر من 16 عاماً في جراحة العظام والمفاصل",
      "خبرة في جراحة استبدال المفاصل والركبة والورك",
      "خبرة في تقييم وعلاج أورام العظام والعضلات",
    ],
  },
  {
    title: "العضويات الطبية",
    items: [
      "عضوية جمعيات طبية متخصصة (حسب الاعتماد)",
      "عضوية هيئات مهنية (حسب الترخيص)",
      "مشاركة في مؤتمرات وفعاليات علمية",
    ],
  },
  {
    title: "الإنجازات",
    items: [
      "تحسين مسار متابعة ما بعد الجراحة للمرضى",
      "تطوير تجربة الحجز والتواصل الرقمي",
      "المساهمة في رفع جودة الرعاية والتثقيف الصحي",
    ],
  },
];

export default function CvPage() {
  return (
    <div className="flex flex-col">
      <section className="section">
        <div className="container-page">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                السيرة الذاتية
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                صفحة تعريفية منظمة تعرض نبذة مهنية، مؤهلات، وخبرة عملية بشكل عصري.
              </p>
            </div>
            <span className="badge-primary hidden sm:inline-flex">CV</span>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <div className="card overflow-hidden">
                <div className="relative aspect-[4/5] bg-slate-100">
                  <Image
                    src="/images/doctor.png"
                    alt="صورة الدكتور زكي الحفظي"
                    width={900}
                    height={1125}
                    className="h-full w-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-lg font-extrabold text-foreground">
                    د. زكي الحفظي
                  </div>
                  <div className="mt-1 text-sm font-semibold text-muted">
                    استشاري جراحة العظام والمفاصل وأورام العظام والعضلات
                  </div>
                  <div className="mt-4 rounded-3xl border border-border bg-background p-4">
                    <div className="text-xs font-extrabold text-foreground">
                      نبذة عن د. زكي الحفظي
                    </div>
                    <div className="mt-3 grid gap-3 text-sm leading-7 text-muted">
                      <p>
                        د. زكي الحفظي هو استشاري جراحة العظام والمفاصل وأورام
                        العظام والعضلات، ويُعتبر من أبرز الأطباء المتخصصين في
                        مدينة أبها، مع خبرة طبية تمتد لأكثر من 16 عاماً في علاج
                        آلام المفاصل وجراحات استبدال الركبة والورك والجراحات
                        الدقيقة لأورام العظام.
                      </p>
                      <p>
                        حاصل على البورد السعودي في جراحة العظام مع مرتبة الشرف،
                        وزمالات دولية متعددة من جامعات كندا المرموقة (كوينز –
                        ماكغيل – أوتاوا) في استبدال المفاصل ومنظار الورك وأورام
                        العظام والعضلات. كما يحمل درجة MBA في الإدارة التنفيذية
                        وشهادة في إدارة الخدمات السريرية من كلية هارفارد الطبية.
                      </p>
                      <p>
                        يتميز بنهج علاجي يجمع بين أحدث التقنيات الطبية والأساليب
                        التحفظية غير الجراحية، مع التركيز على تقديم رعاية متخصصة
                        للمرضى باستخدام أحدث التقنيات الروبوتية والجراحات طفيفة
                        التوغل.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href="/book" className="btn-accent w-full justify-center">
                      احجز موعد
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {sections.map((s) => (
                  <div key={s.title} className="card card-hover p-6">
                    <div className="text-base font-extrabold text-foreground">
                      {s.title}
                    </div>
                    <ul className="mt-4 grid gap-2 text-sm text-muted">
                      {s.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <BulletIcon />
                          <span className="leading-7">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 card p-6 sm:p-7">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-base font-extrabold text-foreground">
                      المسار المهني (Timeline)
                    </div>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      محطات رئيسية توضح التطور المهني عبر السنوات.
                    </p>
                  </div>
                  <span className="badge-primary">2014 — 2025</span>
                </div>

                <div className="mt-6 grid gap-4">
                  {timeline.map((t, idx) => (
                    <div key={t.year} className="relative">
                      <div className="flex items-start gap-4">
                        <div className="relative mt-0.5">
                          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-border bg-background text-sm font-extrabold text-foreground">
                            {t.year}
                          </div>
                          {idx !== timeline.length - 1 ? (
                            <div
                              className="absolute right-1/2 top-11 h-[calc(100%-2.75rem)] w-px -translate-x-1/2 bg-border"
                              aria-hidden="true"
                            />
                          ) : null}
                        </div>
                        <div className="flex-1 rounded-2xl border border-border bg-background p-4 sm:p-5">
                          <div className="text-sm font-extrabold text-foreground">
                            {t.title}
                          </div>
                          <p className="mt-1 text-sm leading-7 text-muted">
                            {t.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-border bg-surface p-6 sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-base font-extrabold text-foreground">
                      هل لديك استفسار حول حالتك؟
                    </div>
                    <div className="mt-2 text-sm text-muted">
                      احجز موعدًا للحصول على تقييم وخطة علاج مناسبة.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link href="/book" className="btn-accent justify-center">
                      احجز موعد
                    </Link>
                    <Link href="/contact" className="btn-primary justify-center">
                      تواصل معنا
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BulletIcon() {
  return (
    <span
      className="mt-2 inline-flex h-2 w-2 flex-none rounded-full"
      style={{ backgroundColor: "var(--primary)" }}
      aria-hidden="true"
    />
  );
}

