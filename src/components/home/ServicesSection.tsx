type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export function ServicesSection() {
  const services: Service[] = [
    {
      title: "الكشف والتشخيص",
      description: "فحص شامل وتحديد السبب مع خطة علاج واضحة.",
      icon: <IconStethoscope />,
    },
    {
      title: "المتابعة الطبية",
      description: "متابعة مستمرة وتعديل الخطة حسب الاستجابة.",
      icon: <IconChart />,
    },
    {
      title: "الاستشارات الطبية",
      description: "إجابات دقيقة ونصائح موثوقة لحالتك.",
      icon: <IconChat />,
    },
    {
      title: "خطط العلاج",
      description: "خطة مخصصة تجمع بين الفعالية والأمان.",
      icon: <IconPlan />,
    },
    {
      title: "الفحوصات",
      description: "توجيه للفحوصات اللازمة وقراءة النتائج.",
      icon: <IconLab />,
    },
    {
      title: "الرعاية المستمرة",
      description: "عناية طويلة المدى للحفاظ على النتائج.",
      icon: <IconHeart />,
    },
  ];

  return (
    <section className="section bg-surface">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="section-title">خدمات العيادة</h2>
            <p className="section-subtitle">
              مجموعة خدمات طبية مصممة لتناسب احتياجك مع تجربة مريحة ونتائج قابلة
              للقياس.
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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

