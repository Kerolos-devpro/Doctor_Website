import { SectionReveal } from "@/components/animations/SectionReveal";

export function DoctorIntroSection() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionReveal duration={0.6} y={14}>
              <h2 className="section-title">تعرّف على د. زكي الحفظي</h2>
              <p className="section-subtitle">
                د. زكي الحفظي هو استشاري جراحة العظام والمفاصل وأورام العظام
                والعضلات في أبها، بخبرة تمتد لأكثر من 16 عاماً في علاج آلام المفاصل
                وجراحات استبدال الركبة والورك، مع نهج علاجي يجمع بين أحدث التقنيات
                والأساليب التحفظية.
              </p>
            </SectionReveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <SectionReveal duration={0.55} y={12} delay={0.05}>
                <StatCard
                  title="سنوات الخبرة"
                  value="16+"
                  hint="خبرة طويلة في جراحة العظام والمفاصل"
                />
              </SectionReveal>
              <SectionReveal duration={0.55} y={12} delay={0.12}>
                <StatCard
                  title="استبدال المفاصل"
                  value="الركبة والورك"
                  hint="خبرة في جراحات استبدال المفاصل"
                />
              </SectionReveal>
              <SectionReveal duration={0.55} y={12} delay={0.19}>
                <StatCard
                  title="أورام العظام والعضلات"
                  value="تقييم وعلاج"
                  hint="متابعة وخطة علاج حسب كل حالة"
                />
              </SectionReveal>
              <SectionReveal duration={0.55} y={12} delay={0.26}>
                <StatCard
                  title="الموقع"
                  value="أبها"
                  hint="متابعة مهنية وتجربة حجز سهلة"
                />
              </SectionReveal>
            </div>

            <SectionReveal duration={0.6} y={12} delay={0.12}>
              <div className="mt-6 card p-6">
                <div className="text-sm font-extrabold text-foreground">
                  لماذا تختار د. زكي الحفظي؟
                </div>
                <ul className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2">
                  <li className="flex gap-2">
                    <CheckIcon />
                    <span>خبرة دولية في كندا وأمريكا</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon />
                    <span>استخدام أحدث التقنيات (الروبوت - التدخل المحدود)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon />
                    <span>نتائج دقيقة ونسب نجاح عالية</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon />
                    <span>اهتمام شامل بالمريض قبل وبعد العملية</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckIcon />
                    <span>تشخيص دقيق وخطط علاج مخصصة</span>
                  </li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  title,
  value,
  hint,
}: {
  title: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="card card-hover p-5">
      <div className="text-sm font-semibold text-muted">{title}</div>
      <div className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">
        {value}
      </div>
      <div className="mt-2 text-sm leading-7 text-muted">{hint}</div>
    </div>
  );
}

function CheckIcon() {
  return (
    <span
      className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full"
      style={{ backgroundColor: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="var(--primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

