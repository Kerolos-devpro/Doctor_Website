type Service = {
  title: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
};

export function ServicesSection() {
  const services: Service[] = [
    {
      title: "مناظير المفاصل",
      description: "تشخيص وعلاج إصابات المفاصل بتقنيات دقيقة.",
      points: ["منظار الركبة", "منظار الكتف", "إصابات الأربطة والغضاريف"],
      icon: <IconStethoscope />,
    },
    {
      title: "جراحة استبدال المفاصل",
      description: "خبرة في استبدال مفصل الركبة والورك مع متابعة ما بعد الجراحة.",
      points: ["استبدال الركبة", "استبدال الورك", "تأهيل ومتابعة بعد العملية"],
      icon: <IconChart />,
    },
    {
      title: "جراحة العظام والمفاصل",
      description: "تقييم شامل وخطة علاج مناسبة لكل حالة.",
      points: ["آلام المفاصل", "خشونة الركبة والورك", "التهابات وإصابات المفصل"],
      icon: <IconChat />,
    },
    {
      title: "العمود الفقري والانزلاق الغضروفي",
      description: "تقييم وعلاج آلام الظهر والرقبة حسب التشخيص.",
      points: ["آلام الظهر", "انزلاق غضروفي", "خطة علاج وتأهيل"],
      icon: <IconPlan />,
    },
    {
      title: "أورام العظام والعضلات",
      description: "تقييم وتشخيص وخطة علاج وفق أحدث الممارسات.",
      points: ["تقييم أولي", "قراءة الفحوصات", "تحويل/خطة علاج حسب الحالة"],
      icon: <IconLab />,
    },
    {
      title: "الكسور وإصابات الملاعب",
      description: "تشخيص وعلاج الإصابات والكسور مع متابعة للتعافي.",
      points: ["كسور بسيطة ومعقدة", "إصابات الملاعب", "متابعة حتى التعافي"],
      icon: <IconHeart />,
    },
  ];

  return (
    <section className="section bg-surface">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="section-title">التخصصات والخدمات الطبية</h2>
            <p className="section-subtitle">
              مجموعة من الخدمات المتخصصة في جراحة العظام والمفاصل لتناسب احتياجك
              مع تشخيص دقيق وخطة علاج واضحة.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="card card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background text-foreground">
                  {s.icon}
                </div>
                <div className="flex-1">
                  <div className="text-base font-extrabold text-foreground">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {s.description}
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm text-muted">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <CheckBullet />
                        <span className="leading-7">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CheckBullet() {
  return (
    <span
      className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full"
      style={{
        backgroundColor: "color-mix(in srgb, var(--primary) 12%, transparent)",
      }}
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

function IconBase({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function IconStethoscope() {
  return (
    <IconBase>
      <path d="M6 3v6a6 6 0 0 0 12 0V3" />
      <path d="M9 3v6" />
      <path d="M15 3v6" />
      <path d="M12 15v3a4 4 0 0 0 8 0v-1" />
      <path d="M20 17a2 2 0 1 0 0-4" />
    </IconBase>
  );
}

function IconChart() {
  return (
    <IconBase>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 15l3-3 3 2 4-5" />
    </IconBase>
  );
}

function IconChat() {
  return (
    <IconBase>
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      <path d="M8 8h8" />
      <path d="M8 12h6" />
    </IconBase>
  );
}

function IconPlan() {
  return (
    <IconBase>
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6h.01" />
      <path d="M3 12h.01" />
      <path d="M3 18h.01" />
    </IconBase>
  );
}

function IconLab() {
  return (
    <IconBase>
      <path d="M10 2v6l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V2" />
      <path d="M8 14h8" />
    </IconBase>
  );
}

function IconHeart() {
  return (
    <IconBase>
      <path d="M12 21s-7-4.6-9.3-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.3 6c-2.3 4.4-9.3 9-9.3 9z" />
    </IconBase>
  );
}

