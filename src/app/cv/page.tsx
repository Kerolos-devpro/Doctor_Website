import Image from "next/image";
import Link from "next/link";

type TimelineItem = { year: string; title: string; description: string };

const timeline: TimelineItem[] = [
  { year: "2014", title: "التخرج", description: "إنهاء الدراسة الطبية وبداية المسار المهني." },
  {
    year: "2016",
    title: "التدريب التخصصي",
    description: "الالتحاق ببرنامج تدريب تخصصي لصقل المهارات السريرية.",
  },
  {
    year: "2019",
    title: "الحصول على الزمالة",
    description: "إتمام الزمالة والاعتماد في مجال التخصص.",
  },
  { year: "2022", title: "افتتاح العيادة", description: "إطلاق العيادة وتقديم خدمات طبية متكاملة." },
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
      "بكالوريوس الطب والجراحة (Placeholder)",
      "دراسات/تخصص في الأمراض الجلدية (Placeholder)",
      "تدريب معتمد في إجراءات التجميل والليزر (Placeholder)",
    ],
  },
  {
    title: "الشهادات والدورات",
    items: [
      "دورات في الجلدية العلاجية والتجميلية (Placeholder)",
      "دورات في بروتوكولات الليزر وسلامة الإجراءات (Placeholder)",
      "دورات في العناية بالبشرة وخطط العلاج (Placeholder)",
    ],
  },
  {
    title: "الخبرات العملية",
    items: [
      "خبرة سريرية في تقييم وتشخيص الحالات الجلدية (Placeholder)",
      "خبرة في متابعة خطط العلاج وقياس النتائج (Placeholder)",
      "خبرة في إجراءات تجميلية وليزر وفق بروتوكولات آمنة (Placeholder)",
    ],
  },
  {
    title: "العضويات الطبية",
    items: [
      "عضوية جمعية طبية (Placeholder)",
      "عضوية هيئة/جمعية جلدية (Placeholder)",
      "عضوية مجلس مهني (Placeholder)",
    ],
  },
  {
    title: "الإنجازات",
    items: [
      "المشاركة في مبادرات توعوية (Placeholder)",
      "تطوير بروتوكولات متابعة جلدية وتجميلية (Placeholder)",
      "تحسين تجربة الحجز والمتابعة للمرضى (Placeholder)",
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
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
                    alt="صورة طبيبة"
                    width={900}
                    height={1125}
                    className="h-full w-full object-cover"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-extrabold text-white">
                    Placeholder
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-lg font-extrabold text-foreground">
                    د. هبة الشريف
                  </div>
                  <div className="mt-1 text-sm font-semibold text-muted">
                    جلدية وتجميل وليزر - حائل
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    نبذة مهنية مختصرة (Placeholder): خبرة في تشخيص وعلاج الحالات
                    الجلدية، وإجراءات تجميلية وليزر ببروتوكولات آمنة، مع اهتمام
                    بالمتابعة ووضوح خطة العلاج.
                  </p>
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

