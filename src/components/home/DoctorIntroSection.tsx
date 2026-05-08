export function DoctorIntroSection() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="section-title">تعرفي على د. هبة الشريف</h2>
            <p className="section-subtitle">
              اختصاصية جلدية وتجميل وليزر في حائل. نهتم بالتشخيص الدقيق ووضع خطة
              علاج مناسبة لكل حالة، مع متابعة وقياس للنتائج خطوة بخطوة.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard title="سنوات الخبرة" value="+10" hint="خبرة عملية في الجلدية والتجميل" />
              <StatCard title="عدد الحالات" value="+2500" hint="حالات متابعة وتشخيص" />
              <StatCard title="تقييم المرضى" value="4.9/5" hint="رضا وتجربة مميزة" />
              <StatCard title="مواعيد مرنة" value="6 أيام" hint="جدولة مناسبة" />
            </div>

            <div className="mt-6 card p-6">
              <div className="text-sm font-extrabold text-foreground">
                لماذا يختارنا المرضى؟
              </div>
              <ul className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2">
                <li className="flex gap-2">
                  <CheckIcon />
                  <span>تواصل واضح وخطة علاج مفهومة</span>
                </li>
                <li className="flex gap-2">
                  <CheckIcon />
                  <span>متابعة دقيقة وتحسينات ملموسة</span>
                </li>
                <li className="flex gap-2">
                  <CheckIcon />
                  <span>إجراءات تجميلية ببروتوكولات آمنة</span>
                </li>
                <li className="flex gap-2">
                  <CheckIcon />
                  <span>تجربة حجز سهلة وسريعة</span>
                </li>
              </ul>
            </div>
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

