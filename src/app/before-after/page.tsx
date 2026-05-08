import Link from "next/link";

type CaseItem = {
  title: string;
  description: string;
  note: string;
};

const cases: CaseItem[] = [
  {
    title: "حالة 01 - تحسن نضارة البشرة",
    description: "مثال توضيحي لنتائج روتين علاجي متدرج.",
    note: "النتائج تختلف حسب الحالة والالتزام بالخطة.",
  },
  {
    title: "حالة 02 - توحيد لون البشرة",
    description: "مثال توضيحي لتحسن المظهر العام للبشرة.",
    note: "قد تتطلب بعض الحالات جلسات متابعة إضافية.",
  },
  {
    title: "حالة 03 - عناية تجميلية",
    description: "مثال توضيحي لتحسين الملمس ضمن خطة آمنة.",
    note: "التقييم المباشر ضروري لتحديد الإجراء المناسب.",
  },
  {
    title: "حالة 04 - روتين علاجي",
    description: "مثال توضيحي لخطوات عناية مستمرة.",
    note: "نلتزم ببروتوكولات آمنة وملائمة لكل حالة.",
  },
  {
    title: "حالة 05 - تحسن تدريجي",
    description: "مثال توضيحي لنتائج على مراحل مع المتابعة.",
    note: "قد تظهر النتائج على فترات متفاوتة بين الأشخاص.",
  },
  {
    title: "حالة 06 - عناية وليزر (توضيحي)",
    description: "مثال توضيحي لإجراءات عناية حديثة.",
    note: "لا يوجد ضمان لنتيجة معينة؛ التقييم يحدد التوقعات.",
  },
  {
    title: "حالة 07 - عناية بالبشرة",
    description: "مثال توضيحي لخطة عناية مناسبة لنوع البشرة.",
    note: "الالتزام بالتعليمات جزء أساسي من النتائج.",
  },
  {
    title: "حالة 08 - متابعة وتحسن",
    description: "مثال توضيحي لتحسن تدريجي مع المتابعة.",
    note: "قد تختلف مدة الوصول للنتيجة من شخص لآخر.",
  },
  {
    title: "حالة 09 - توضيح قبل/بعد",
    description: "مثال توضيحي لطريقة العرض قبل وبعد.",
    note: "التقييم المباشر يحدد الخطة المناسبة.",
  },
  {
    title: "حالة 10 - جلسات تجميلية",
    description: "مثال توضيحي لنتائج جلسات ضمن خطة آمنة.",
    note: "يتم اختيار الإجراء بناءً على نوع البشرة والحالة.",
  },
  {
    title: "حالة 11 - عناية مستمرة",
    description: "مثال توضيحي لعناية طويلة المدى.",
    note: "العناية اليومية تعزز ثبات النتائج.",
  },
  {
    title: "حالة 12 - نتائج توضيحية",
    description: "مثال توضيحي لعرض نتائج مختلفة.",
    note: "كل حالة لها استجابة مختلفة وفق عوامل متعددة.",
  },
];

export default function BeforeAfterPage() {
  return (
    <div className="flex flex-col">
      <section className="section">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
                تجارب وقصص قبل وبعد
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                الصور والنتائج المعروضة في هذه الصفحة هي{" "}
                <span className="font-semibold text-foreground">أمثلة توضيحية</span>{" "}
                لشرح طريقة العرض قبل/بعد، وليست حالات حقيقية أو بيانات لمرضى.
              </p>
            </div>
            <span className="badge-primary">Before / After</span>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <article key={item.title} className="card card-hover overflow-hidden">
                <div className="grid grid-cols-2">
                  <BeforeAfterImage
                    label="قبل"
                    alt={`${item.title} - قبل`}
                    tone="before"
                  />
                  <BeforeAfterImage
                    label="بعد"
                    alt={`${item.title} - بعد`}
                    tone="after"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-base font-extrabold text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                  <div className="mt-4 rounded-2xl border border-border bg-background px-4 py-3">
                    <div className="text-xs font-extrabold text-foreground">
                      ملاحظة طبية
                    </div>
                    <p className="mt-1 text-sm leading-7 text-muted">
                      {item.note}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs font-semibold text-muted">
                      للتواصل السريع
                    </div>
                    <a
                      href="https://wa.me/0000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-4"
                      style={{
                        ["--tw-ring-color" as never]:
                          "color-mix(in srgb, #25D366 45%, transparent)",
                      }}
                      aria-label="واتساب - تواصل معنا"
                    >
                      <WhatsappIcon />
                      تواصل واتساب
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <div
            className="relative overflow-hidden rounded-3xl border border-border bg-background p-8 shadow-sm sm:p-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(15,118,110,0.10) 0%, rgba(37,99,235,0.08) 55%, rgba(245,158,11,0.08) 100%)",
            }}
          >
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                  احجزي استشارة لتقييم حالتك
                </h3>
                <p className="mt-3 text-base leading-8 text-muted sm:text-lg">
                  سنراجع حالتك ونحدّد الخطة المناسبة بخطوات واضحة وتوقعات واقعية.
                </p>
              </div>
              <div className="lg:col-span-4">
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link href="/book" className="btn-accent w-full justify-center">
                    احجز موعد
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center"
                  >
                    تواصل معنا
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WhatsappIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 11.5a8 8 0 0 1-12.8 6.3L4 20l2.3-3.2A8 8 0 1 1 20 11.5z" />
      <path d="M9.5 9.2c.2-.5.5-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.7c.1.3.1.6-.1.8l-.5.6c-.2.2-.2.5 0 .7.6.9 1.4 1.7 2.3 2.3.2.1.5.1.7 0l.6-.5c.2-.2.5-.2.8-.1l1.7.7c.3.1.4.3.4.5v.6c0 .3 0 .6-.5.8-.5.2-1.7.6-3.6-.2-2-.8-3.8-2.6-4.6-4.6-.8-1.9-.4-3.1-.2-3.6z" />
    </svg>
  );
}

function BeforeAfterImage({
  alt,
  label,
  tone,
}: {
  alt: string;
  label: "قبل" | "بعد";
  tone: "before" | "after";
}) {
  const badgeStyle =
    tone === "before"
      ? {
          backgroundColor: "color-mix(in srgb, var(--muted) 18%, transparent)",
          color: "var(--foreground)",
        }
      : {
          backgroundColor: "color-mix(in srgb, var(--primary) 14%, transparent)",
          color: "var(--primary)",
        };

  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
      <div
        className="absolute inset-0 grid place-items-center"
        style={{
          background:
            tone === "before"
              ? "linear-gradient(135deg, rgba(100,116,139,0.18) 0%, rgba(248,250,252,1) 60%)"
              : "linear-gradient(135deg, rgba(15,118,110,0.16) 0%, rgba(248,250,252,1) 60%)",
        }}
        aria-label={alt}
      >
        <div className="text-center">
          <div className="text-4xl font-extrabold tracking-tight text-slate-400">
            {label}
          </div>
          <div className="mt-2 text-xs font-semibold text-muted">
            Placeholder
          </div>
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-px bg-border" aria-hidden="true" />
        <div
          className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-extrabold"
          style={badgeStyle}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

