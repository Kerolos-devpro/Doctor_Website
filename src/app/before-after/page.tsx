import Link from "next/link";
import { getWhatsAppHref } from "@/lib/contact";
import { notFound } from "next/navigation";

/**
 * NOTE:
 * صفحة "قبل/بعد" هنا هدفها عرض شكل الـ UI وتجربة التصفح فقط.
 * يمكن لاحقًا استبدال الصور التوضيحية بصور حقيقية بإذن المريض وسياسة خصوصية واضحة،
 * أو ربطها بقاعدة بيانات/لوحة تحكم لإدارة الحالات.
 */

/**
 * DISABLED (for now):
 * بناءً على الطلب الحالي، تم إخفاء الصفحة بالكامل من العرض العام.
 * نُبقي الملف والكود كما هو لاحتمال الحاجة إليه لاحقًا، لكن المسار يعرض 404.
 */
export default function BeforeAfterPageDisabled() {
  notFound();
}

type CaseItem = {
  title: string;
  description: string;
  note: string;
};

const cases: CaseItem[] = [
  {
    title: "حالة 01 - خشونة الركبة وتحسن الحركة",
    description: "مثال توضيحي لتحسن القدرة على المشي وتقليل الألم بعد خطة علاج وتأهيل مناسبة.",
    note: "تحديد الخطة يعتمد على الفحص السريري والأشعة ودرجة الخشونة.",
  },
  {
    title: "حالة 02 - استبدال مفصل الورك والعودة للنشاط",
    description: "مثال توضيحي للتحسن بعد التدخل الجراحي مع برنامج تأهيل تدريجي وآمن.",
    note: "العودة للنشاط تتم وفق تقييم الطبيب وخطة العلاج الطبيعي والمتابعة.",
  },
  {
    title: "حالة 03 - إصابات الملاعب (قطع الرباط الصليبي)",
    description: "مثال توضيحي لتحسن الثبات وتقليل التورم بعد العلاج/التأهيل وربط الخطة بالنشاط الرياضي.",
    note: "القرار بين العلاج التحفظي أو الجراحي يعتمد على درجة الإصابة وأهداف المريض.",
  },
  {
    title: "حالة 04 - آلام الكتف وتمزق الكُفّة المدورة",
    description: "مثال توضيحي لتحسن مدى الحركة والقدرة على رفع الذراع بعد علاج مخصص.",
    note: "قد تُستخدم الأشعة/الرنين لتحديد درجة التمزق واختيار الأنسب للحالة.",
  },
  {
    title: "حالة 05 - انزلاق غضروفي وتحسن الألم العصبي",
    description: "مثال توضيحي لخفض الألم الممتد وتحسن الوظيفة اليومية عبر علاج تحفظي وخطة تمارين.",
    note: "التقييم يحدد الحاجة للتصوير وخيارات العلاج بما يناسب الأعراض.",
  },
  {
    title: "حالة 06 - أورام العظام والعضلات (تقييم ومتابعة)",
    description: "مثال توضيحي لمسار تقييم كتلة/ألم مستمر وخطة متابعة وفحوصات متخصصة عند الحاجة.",
    note: "التشخيص يتطلب فحصًا وتصويرًا وربما خزعة وفق ما يراه الطبيب.",
  },
];

function BeforeAfterPage() {
  const whatsappHref = getWhatsAppHref();
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
            <span className="badge-primary">قبل / بعد</span>
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
                      href={whatsappHref}
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
                  احجز استشارة لتقييم حالتك
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
  const svg = getIllustrationSvg({ label, tone });
  const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

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
      <img
        src={dataUri}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

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

function getIllustrationSvg({
  label,
  tone,
}: {
  label: "قبل" | "بعد";
  tone: "before" | "after";
}) {
  const isAfter = tone === "after";
  const a = isAfter ? "#0F766E" : "#64748B";
  const b = isAfter ? "#2563EB" : "#94A3B8";
  const bg1 = isAfter ? "rgba(15,118,110,0.18)" : "rgba(100,116,139,0.18)";
  const bg2 = isAfter ? "rgba(37,99,235,0.10)" : "rgba(148,163,184,0.10)";

  // Note: keep SVG as plain UTF-8; it's encoded into a data URI above.
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg1}"/>
      <stop offset="0.6" stop-color="rgba(248,250,252,1)"/>
      <stop offset="1" stop-color="${bg2}"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
  </defs>

  <rect x="0" y="0" width="800" height="1000" fill="url(#g)"/>
  <circle cx="610" cy="180" r="110" fill="url(#accent)" opacity="0.12"/>
  <circle cx="160" cy="820" r="140" fill="url(#accent)" opacity="0.10"/>

  <g transform="translate(0,0)">
    <path d="M140 370c70-80 150-120 260-120s190 40 260 120" fill="none" stroke="url(#accent)" stroke-width="14" stroke-linecap="round" opacity="0.55"/>
    <path d="M220 520c40-30 95-45 180-45s140 15 180 45" fill="none" stroke="url(#accent)" stroke-width="14" stroke-linecap="round" opacity="0.35"/>
  </g>

  <g transform="translate(80,130)" opacity="0.9">
    <rect x="0" y="0" width="250" height="72" rx="36" fill="rgba(255,255,255,0.72)"/>
    <rect x="0" y="0" width="250" height="72" rx="36" fill="none" stroke="rgba(226,232,240,1)"/>
    <text x="125" y="48" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, Arial" font-size="28" font-weight="800" fill="${isAfter ? "#0F766E" : "#334155"}">${label}</text>
  </g>

  <g transform="translate(120,620)" opacity="0.95">
    <text x="0" y="0" font-family="system-ui, -apple-system, Segoe UI, Arial" font-size="22" font-weight="700" fill="rgba(71,85,105,1)">مثال توضيحي</text>
    <text x="0" y="44" font-family="system-ui, -apple-system, Segoe UI, Arial" font-size="18" font-weight="600" fill="rgba(100,116,139,1)">للتمثيل البصري قبل/بعد</text>
  </g>
</svg>`;
}

